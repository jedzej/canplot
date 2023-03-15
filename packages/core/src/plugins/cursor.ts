import { posToVal } from "../helpers";
import {
  Frame,
  MakeStatefulPlugin,
  MakeStatelessPlugin,
  ScaleId,
} from "../types";
import { clamp } from "../utils";

type XY = {
  x: number;
  y: number;
};

export type CursorPosition =
  | {
      constrained: "in-chart" | "clamped";
      screen: XY;
      canvas: XY;
      scaled: Record<ScaleId, number>;
    }
  | {
      constrained: "out-of-chart";
      screen: XY;
      canvas: XY;
    };

const eventToPositions = (
  e: MouseEvent,
  frame: Frame,
  clampToChartArea: boolean
): CursorPosition | undefined => {
  const { chartArea, ctx, scales } = frame;
  const rect = ctx.canvas.getBoundingClientRect();

  const rawCanvasX = e.clientX - rect.left;
  const rawCanvasY = e.clientY - rect.top;

  const outOfChart =
    rawCanvasX < chartArea.x ||
    rawCanvasX > chartArea.x + chartArea.width ||
    rawCanvasY < chartArea.y ||
    rawCanvasY > chartArea.y + chartArea.height;

  const canvasX = clampToChartArea
    ? clamp(rawCanvasX, chartArea.x, chartArea.x + chartArea.width)
    : rawCanvasX;
  const canvasY = clampToChartArea
    ? clamp(rawCanvasY, chartArea.y, chartArea.y + chartArea.height)
    : rawCanvasY;

  const screenX = canvasX + rect.left;
  const screenY = canvasY + rect.top;
  const screen = { x: screenX, y: screenY };
  const canvas = { x: canvasX, y: canvasY };

  if (outOfChart && !clampToChartArea)
    return {
      constrained: "out-of-chart",
      canvas,
      screen,
    };

  const scaled: Record<ScaleId, number> = {};
  for (const scale of scales) {
    if (scale.id.startsWith("x-")) {
      scaled[scale.id] = posToVal(frame, canvasX, scale.id);
    } else {
      scaled[scale.id] = posToVal(frame, canvasY, scale.id);
    }
  }
  return {
    constrained: outOfChart ? "clamped" : "in-chart",
    screen,
    canvas,
    scaled,
  };
};

type HoverPluginState = {
  position?: CursorPosition;
};

type HoverData = {
  position?: CursorPosition;
  frame: Frame;
};

export const hoverStatelessPlugin =
  ({
    clampStrategy = "drop",
    onHover,
  }: {
    clampStrategy?: "clamp" | "drop" | "pass";
    onHover: (data: HoverData) => void;
  }): MakeStatelessPlugin =>
  ({ ctx }) => {
    const canvas = ctx.canvas;
    const store = {
      lastFrame: undefined as Frame | undefined,
    };

    const mouseMoveListener = (e: MouseEvent): void => {
      if (!store.lastFrame) return;
      const position = eventToPositions(
        e,
        store.lastFrame,
        clampStrategy === "clamp"
      );
      const effectivePosition =
        clampStrategy === "drop" && position?.constrained === "out-of-chart"
          ? undefined
          : position;
      onHover({
        position: effectivePosition,
        frame: store.lastFrame,
      });
    };
    canvas.addEventListener("mousemove", mouseMoveListener);

    const mouseOutListener = () => {
      if (!store.lastFrame) return;
      onHover?.({
        position: undefined,
        frame: store.lastFrame,
      });
    };
    canvas.addEventListener("mouseout", mouseOutListener);

    return {
      afterDraw: ({ frame }) => {
        store.lastFrame = frame;
      },
      deinit() {
        canvas.removeEventListener("mousemove", mouseMoveListener);
        canvas.removeEventListener("mouseout", mouseOutListener);
      },
    };
  };

export const hoverStatefulPlugin =
  <ID extends string>({
    clampStrategy = "drop",
    onHover,
  }: {
    clampStrategy?: "clamp" | "drop" | "pass";
    onHover?: (data: HoverData) => void;
  } = {}): MakeStatefulPlugin<ID, HoverPluginState> =>
  ({ ctx, getStore, setPluginState, getPluginState }) => {
    const stateLessPlugin =
      hoverStatelessPlugin({
        clampStrategy,
        onHover: (data) => {
          onHover?.(data);
          setPluginState({ ...getPluginState(), position: data.position });
        },
      })({ ctx, getStore }) ?? {};

    return {
      initialState: {},
      ...stateLessPlugin,
    };
  };

type ClickData = {
  position?: CursorPosition;
  frame: Frame;
};

export const clickPlugin =
  <S>(opts: {
    onClick?: (data: ClickData) => void;
    clampToChartArea?: boolean;
  }): MakeStatelessPlugin<S> =>
  ({ ctx }) => {
    const canvas = ctx.canvas;
    const store = {
      lastFrame: undefined as Frame | undefined,
    };

    const clickListener = (e: MouseEvent) => {
      if (!store.lastFrame) return;
      const position = eventToPositions(
        e,
        store.lastFrame,
        opts.clampToChartArea ?? false
      );
      opts.onClick?.({
        position,
        frame: store.lastFrame,
      });
    };
    canvas.addEventListener("click", clickListener);

    return {
      afterDraw({ frame }) {
        store.lastFrame = frame;
      },
      deinit() {
        canvas.removeEventListener("click", clickListener);
      },
    };
  };

type SpanSelectPluginState =
  | {
      phase: "idle";
    }
  | {
      phase: "active";
      dimension: "x" | "y" | "xy";
      start: CursorPosition;
      end: CursorPosition;
      ctrlKey: boolean;
      shiftKey: boolean;
      altKey: boolean;
    };

type SpanSelectData = {
  phase: "start" | "move" | "end";
  dimension: "x" | "y" | "xy";
  start: CursorPosition;
  end: CursorPosition;
  frame: Frame;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
};

const positionsToDimension = (
  start: CursorPosition,
  end: CursorPosition,
  tolerance = 25
) => {
  const xBelowTolerance = Math.abs(start.canvas.x - end.canvas.x) < tolerance;
  const yBelowTolerance = Math.abs(start.canvas.y - end.canvas.y) < tolerance;
  if (xBelowTolerance && yBelowTolerance) return "xy";
  if (xBelowTolerance) return "y";
  if (yBelowTolerance) return "x";
  return "xy";
};

export const spanSelectPlugin =
  <ID extends string>({
    onSpanSelect,
    stateless = false,
  }: {
    onSpanSelect?: (data: SpanSelectData) => void;
    stateless?: boolean;
  }): MakeStatefulPlugin<ID, SpanSelectPluginState> =>
  ({ ctx, setPluginState, getPluginState }) => {
    const canvas = ctx.canvas;
    const store = {
      start: undefined as CursorPosition | undefined,
      end: undefined as CursorPosition | undefined,
      lastFrame: undefined as Frame | undefined,
      altKey: false,
      shiftKey: false,
      ctrlKey: false,
    };

    const mouseDownListener = (e: MouseEvent) => {
      if (!store.lastFrame) return;
      const position = eventToPositions(e, store.lastFrame, false);
      if (!position) return;
      if (position.constrained === "out-of-chart") return;
      store.start = position;
      store.altKey = e.altKey;
      store.shiftKey = e.shiftKey;
      store.ctrlKey = e.ctrlKey;
      onSpanSelect?.({
        phase: "start",
        dimension: "xy",
        start: store.start,
        end: store.start,
        frame: store.lastFrame,
        ctrlKey: e.ctrlKey,
        shiftKey: e.shiftKey,
        altKey: e.altKey,
      });
      if (!stateless) {
        setPluginState({
          phase: "active",
          dimension: "xy",
          start: store.start,
          end: store.start,
          ctrlKey: e.ctrlKey,
          shiftKey: e.shiftKey,
          altKey: e.altKey,
        });
      }
    };
    canvas.addEventListener("mousedown", mouseDownListener);

    const mouseMoveListener = (e: MouseEvent): void => {
      if (!store.start) return;
      if (!store.lastFrame) return;
      const position = eventToPositions(e, store.lastFrame, true);
      if (!position) return;
      store.end = position;
      store.altKey = e.altKey;
      store.shiftKey = e.shiftKey;
      store.ctrlKey = e.ctrlKey;
      const dimension = positionsToDimension(store.start, position);
      onSpanSelect?.({
        phase: "move",
        dimension,
        start: store.start,
        end: store.end,
        frame: store.lastFrame,
        ctrlKey: e.ctrlKey,
        shiftKey: e.shiftKey,
        altKey: e.altKey,
      });
      if (!stateless) {
        setPluginState({
          phase: "active",
          dimension,
          start: store.start,
          end: store.end,
          ctrlKey: e.ctrlKey,
          shiftKey: e.shiftKey,
          altKey: e.altKey,
        });
      }
    };
    canvas.addEventListener("mousemove", mouseMoveListener);

    const keyUpDownListener = (e: KeyboardEvent) => {
      if (e.key === "Alt" || e.key === "Shift" || e.key === "Control") {
        e.preventDefault();
      }
      if (!store.start) {
        return;
      }
      if (
        e.ctrlKey === store.ctrlKey &&
        e.shiftKey === store.shiftKey &&
        e.altKey === store.altKey
      ) {
        return;
      }
      store.altKey = e.altKey;
      store.shiftKey = e.shiftKey;
      store.ctrlKey = e.ctrlKey;
      if (!stateless) {
        const pluginState = getPluginState();
        if (pluginState.phase === "active") {
          setPluginState({
            ...pluginState,
            ctrlKey: e.ctrlKey,
            shiftKey: e.shiftKey,
            altKey: e.altKey,
          });
        }
      }
    };
    document.addEventListener("keydown", keyUpDownListener);

    document.addEventListener("keyup", keyUpDownListener);

    const mouseUpListener = (e: MouseEvent) => {
      if (!store.start) return;
      if (!store.lastFrame) return;
      const position = eventToPositions(e, store.lastFrame, true);
      if (!position) return;
      const dimension = positionsToDimension(store.start, position);
      onSpanSelect?.({
        phase: "end",
        dimension,
        start: store.start,
        end: position,
        frame: store.lastFrame,
        ctrlKey: e.ctrlKey,
        shiftKey: e.shiftKey,
        altKey: e.altKey,
      });
      store.start = undefined;
      store.end = undefined;
      store.altKey = false;
      store.shiftKey = false;
      store.ctrlKey = false;
      if (!stateless) {
        setPluginState({
          phase: "idle",
        });
      }
    };
    document.addEventListener("mouseup", mouseUpListener);

    return {
      initialState: { phase: "idle" },
      afterDraw({ frame }) {
        store.lastFrame = frame;
      },
      deinit() {
        canvas.removeEventListener("mousedown", mouseDownListener);
        document.removeEventListener("mouseup", mouseUpListener);
        canvas.removeEventListener("mousemove", mouseMoveListener);
      },
    };
  };

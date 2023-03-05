import { posToVal } from "../helpers";
import { Frame, MakePlugin, ScaleId } from "../types";
import { clamp } from "../utils";

type XY = {
  x: number;
  y: number;
};

export type CursorPosition = {
  screen: XY;
  canvas: XY;
  scaled: Record<ScaleId, number>;
};

const eventToPositions = (
  e: MouseEvent,
  frame: Frame,
  fallbackToBoundaries = false
): CursorPosition | undefined => {
  const rect = frame.ctx.canvas.getBoundingClientRect();
  const screen = { x: e.clientX, y: e.clientY };
  const canvas = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  const posX = e.clientX - rect.left - frame.chartArea.x;
  const posY = e.clientY - rect.top - frame.chartArea.y;

  const effectivePosX = fallbackToBoundaries
    ? clamp(posX, 0, frame.chartArea.width)
    : posX;
  const effectivePosY = fallbackToBoundaries
    ? clamp(posY, 0, frame.chartArea.height)
    : posY;

  const scaled: Record<ScaleId, number> = {};
  for (const scale of frame.scales) {
    if (scale.id.startsWith("x-")) {
      scaled[scale.id] = posToVal(frame, effectivePosX, scale.id);
    } else {
      scaled[scale.id] = posToVal(frame, effectivePosY, scale.id);
    }
  }
  return {
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

export const hoverPlugin =
  <ID extends string = "hover">({
    id = "hover" as ID,
    stateless = false,
    onHover,
  }: {
    id: ID;
    stateless?: boolean;
    onHover?: (data: HoverData) => void;
  }): MakePlugin<ID, HoverPluginState> =>
  ({ ctx, setPluginState, getPluginState }) => {
    const canvas = ctx.canvas;
    const store = {
      lastFrame: undefined as Frame | undefined,
    };

    canvas.addEventListener("mousemove", (e) => {
      if (!store.lastFrame) return;
      const position = eventToPositions(e, store.lastFrame);
      onHover?.({
        position,
        frame: store.lastFrame,
      });
      if (!stateless) {
        setPluginState({ ...getPluginState(), position });
      }
    });

    canvas.addEventListener("mouseout", () => {
      if (!store.lastFrame) return;
      onHover?.({
        position: undefined,
        frame: store.lastFrame,
      });
      if (!stateless) {
        setPluginState({ ...getPluginState(), position: undefined });
      }
    });

    return {
      id,
      initialState: {},
      afterDraw({ frame }) {
        store.lastFrame = frame;
      },
    };
  };

type ClickData = {
  position?: CursorPosition;
  frame: Frame;
};

export const clickPlugin =
  <ID extends string = "hover">({
    id = "click" as ID,
    onClick,
  }: {
    id: ID;
    onClick?: (data: ClickData) => void;
  }): MakePlugin<ID, undefined> =>
  ({ ctx }) => {
    const canvas = ctx.canvas;
    const store = {
      lastFrame: undefined as Frame | undefined,
    };

    canvas.addEventListener("click", (e) => {
      if (!store.lastFrame) return;
      const position = eventToPositions(e, store.lastFrame);
      onClick?.({
        position,
        frame: store.lastFrame,
      });
    });

    return {
      id,
      initialState: undefined,
      afterDraw({ frame }) {
        store.lastFrame = frame;
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
    };

type SpanSelectData =
  | {
      phase: "start";
      dimension: "x" | "y" | "xy";
      start: CursorPosition;
      frame: Frame;
    }
  | {
      phase: "move";
      dimension: "x" | "y" | "xy";
      start: CursorPosition;
      end: CursorPosition;
      frame: Frame;
    }
  | {
      phase: "end";
      dimension: "x" | "y" | "xy";
      start: CursorPosition;
      end: CursorPosition;
      frame: Frame;
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
  <ID extends string = "spanSelect">({
    id = "spanSelect" as ID,
    onSpanSelect,
    stateless = false,
  }: {
    id: ID;
    onSpanSelect?: (data: SpanSelectData) => void;
    stateless?: boolean;
  }): MakePlugin<ID, SpanSelectPluginState> =>
  ({ ctx, setPluginState }) => {
    const canvas = ctx.canvas;
    const store = {
      startPosition: undefined as CursorPosition | undefined,
      endPosition: undefined as CursorPosition | undefined,
      lastFrame: undefined as Frame | undefined,
    };

    canvas.addEventListener("mousedown", (e) => {
      if (!store.lastFrame) return;
      const position = eventToPositions(e, store.lastFrame, true);
      if (!position) return;
      store.startPosition = position;
      onSpanSelect?.({
        phase: "start",
        dimension: "xy",
        start: store.startPosition,
        frame: store.lastFrame,
      });
      if (!stateless) {
        setPluginState({
          phase: "active",
          dimension: "xy",
          start: store.startPosition,
          end: store.startPosition,
        });
      }
    });

    canvas.addEventListener("mousemove", (e) => {
      if (!store.startPosition) return;
      if (!store.lastFrame) return;
      const position = eventToPositions(e, store.lastFrame, true);
      if (!position) return;
      store.endPosition = position;
      const dimension = positionsToDimension(store.startPosition, position);
      onSpanSelect?.({
        phase: "move",
        dimension,
        start: store.startPosition,
        end: store.endPosition,
        frame: store.lastFrame,
      });
      if (!stateless) {
        setPluginState({
          phase: "active",
          dimension,
          start: store.startPosition,
          end: store.endPosition,
        });
      }
    });

    canvas.addEventListener("mouseup", (e) => {
      if (!store.startPosition) return;
      if (!store.lastFrame) return;
      const position = eventToPositions(e, store.lastFrame, true);
      if (!position) return;
      const dimension = positionsToDimension(store.startPosition, position);
      onSpanSelect?.({
        phase: "end",
        dimension,
        start: store.startPosition,
        end: position,
        frame: store.lastFrame,
      });
      store.startPosition = undefined;
      store.endPosition = undefined;
      if (!stateless) {
        setPluginState({
          phase: "idle",
        });
      }
    });

    return {
      id,
      initialState: { phase: "idle" },
      afterDraw({ frame }) {
        store.lastFrame = frame;
      },
    };
  };

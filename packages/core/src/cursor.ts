import { posToVal } from "./helpers";
import {
  ClickEventData,
  CursorPosition,
  DblClickEventData,
  Frame,
  HoverEventData,
  ScaleId,
  SpanSelectEventData,
} from "./types";
import { clamp } from "./utils";

export const makeClickManager = ({
  onClick,
  onDblClick,
  getFrame,
}: {
  onDblClick?: (data: DblClickEventData) => void;
  onClick?: (data: ClickEventData) => void;
  getFrame: () => Frame;
}) => {
  const store = {
    canvas: undefined as HTMLCanvasElement | undefined,
  };

  const mouseClickListener = (e: MouseEvent): void => {
    const frame = getFrame();
    if (!frame) return;
    const position = eventToPositions(e, frame, false);
    onClick?.({ position, frame });
  };

  const mouseDblClickListener = (e: MouseEvent): void => {
    const frame = getFrame();
    if (!frame) return;
    const position = eventToPositions(e, frame, false);
    onDblClick?.({ position, frame });
  };

  return {
    attach(canvas: HTMLCanvasElement) {
      store.canvas = canvas;
      store.canvas.addEventListener("click", mouseClickListener);
      store.canvas.addEventListener("dblclick", mouseDblClickListener);
    },
    detach() {
      if (store.canvas) {
        store.canvas.removeEventListener("click", mouseClickListener);
        store.canvas.removeEventListener("dblclick", mouseDblClickListener);
        store.canvas = undefined;
      }
    },
  };
};

export const makeHoverManager = ({
  onHover,
  getFrame,
}: {
  onHover: (data: HoverEventData) => void;
  getFrame: () => Frame;
}) => {
  const store = {
    canvas: undefined as HTMLCanvasElement | undefined,
  };

  const mouseMoveListener = (e: MouseEvent): void => {
    const frame = getFrame();
    if (!frame) return;
    const position = eventToPositions(e, frame, false);
    onHover?.({ position, frame });
  };

  const mouseOutListener = () => {
    const frame = getFrame();
    if (!frame) return;
    onHover?.({ position: undefined, frame });
  };

  return {
    attach(canvas: HTMLCanvasElement) {
      store.canvas = canvas;
      store.canvas.addEventListener("mousemove", mouseMoveListener);
      store.canvas.addEventListener("mouseout", mouseOutListener);
    },
    detach() {
      if (store.canvas) {
        store.canvas.removeEventListener("mousemove", mouseMoveListener);
        store.canvas.removeEventListener("mouseout", mouseOutListener);
        store.canvas = undefined;
      }
    },
  };
};

export const makeSpanSelectManager = ({
  onSpanSelect,
  getFrame,
}: {
  onSpanSelect?: (data: SpanSelectEventData) => void;
  getFrame: () => Frame;
}) => {
  const store = {
    canvas: undefined as HTMLCanvasElement | undefined,
    lastEvent: undefined as SpanSelectEventData | undefined,
  };

  const mouseDownListener = (e: MouseEvent) => {
    const frame = getFrame();
    if (!frame) return;
    const position = eventToPositions(e, frame, false);
    if (!position) return;
    if (position.constrained === "out-of-chart") return;
    store.lastEvent = {
      phase: "start",
      dimension: "xy",
      start: position,
      end: position,
      frame,
      ctrlKey: e.ctrlKey,
      shiftKey: e.shiftKey,
      altKey: e.altKey,
    };
    onSpanSelect?.(store.lastEvent);
  };

  const mouseMoveListener = (e: MouseEvent): void => {
    if (!store.lastEvent) return;
    const frame = getFrame();
    if (!frame) return;
    const position = eventToPositions(e, frame, true);
    if (!position) return;
    store.lastEvent = {
      ...store.lastEvent,
      frame,
      phase: "move",
      dimension: positionsToDimension(store.lastEvent.start, position),
      end: position,
      altKey: e.altKey,
      shiftKey: e.shiftKey,
      ctrlKey: e.ctrlKey,
    };

    onSpanSelect?.(store.lastEvent);
  };

  const keyUpDownListener = (e: KeyboardEvent) => {
    if (e.key === "Alt" || e.key === "Shift" || e.key === "Control") {
      e.preventDefault();
    }
    if (!store.lastEvent) {
      return;
    }
    if (
      e.ctrlKey === store.lastEvent.ctrlKey &&
      e.shiftKey === store.lastEvent.shiftKey &&
      e.altKey === store.lastEvent.altKey
    ) {
      return;
    }

    if (store.lastEvent.phase === "start" || store.lastEvent.phase === "move") {
      store.lastEvent = {
        ...store.lastEvent,
        altKey: e.altKey,
        shiftKey: e.shiftKey,
        ctrlKey: e.ctrlKey,
      };
      onSpanSelect?.(store.lastEvent);
    }
  };

  const mouseUpListener = (e: MouseEvent) => {
    if (!store.lastEvent) return;
    const frame = getFrame();
    if (!frame) return;
    const position = eventToPositions(e, frame, true);
    if (!position) return;
    onSpanSelect?.({
      ...store.lastEvent,
      phase: "end",
      dimension: positionsToDimension(store.lastEvent.start, position),
      end: position,
      frame,
      ctrlKey: e.ctrlKey,
      shiftKey: e.shiftKey,
      altKey: e.altKey,
    });
    store.lastEvent = undefined;
  };

  return {
    attach(canvas: HTMLCanvasElement) {
      store.canvas = canvas;
      canvas.addEventListener("mousedown", mouseDownListener);
      canvas.addEventListener("mousemove", mouseMoveListener);
      document.addEventListener("mouseup", mouseUpListener);
      document.addEventListener("keydown", keyUpDownListener);
      document.addEventListener("keyup", keyUpDownListener);
    },
    detach() {
      if (store.canvas) {
        store.canvas.removeEventListener("mousedown", mouseDownListener);
        store.canvas.removeEventListener("mousemove", mouseMoveListener);
        document.removeEventListener("mouseup", mouseUpListener);
        document.removeEventListener("keydown", keyUpDownListener);
        document.removeEventListener("keyup", keyUpDownListener);
        store.canvas = undefined;
      }
    },
  };
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
      scaled[scale.id] = posToVal(frame, canvasX - chartArea.x, scale.id);
    } else {
      scaled[scale.id] = posToVal(frame, canvasY - chartArea.y, scale.id);
    }
  }
  return {
    constrained: outOfChart ? "clamped" : "in-chart",
    screen,
    canvas,
    scaled,
  };
};

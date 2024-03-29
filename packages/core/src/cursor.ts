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
    if (!position.isWithinChart) return;
    store.lastEvent = {
      phase: "start",
      dimensions: { x: true, y: true },
      startPos: position,
      endPos: position,
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
    const dimensions = positionsToDimensions(store.lastEvent.startPos, position);
    store.lastEvent = {
      ...store.lastEvent,
      frame,
      phase: "move",
      dimensions,
      endPos: position,
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
    const dimensions = positionsToDimensions(store.lastEvent.startPos, position);
    onSpanSelect?.({
      ...store.lastEvent,
      phase: dimensions.x || dimensions.y ? "end" : "cancel",
      dimensions,
      endPos: position,
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

const positionsToDimensions = (
  start: CursorPosition,
  end: CursorPosition,
  tolerance = 25
) => {
  const xBelowTolerance = Math.abs(start.canvas.x - end.canvas.x) < tolerance;
  const yBelowTolerance = Math.abs(start.canvas.y - end.canvas.y) < tolerance;
  if (xBelowTolerance && yBelowTolerance) return { x: false, y: false };
  if (xBelowTolerance) return { x: false, y: true };
  if (yBelowTolerance) return { x: true, y: false };
  return { x: true, y: true };
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
      isWithinChart: false,
      canvas,
      screen,
    };

  const scaled: Record<ScaleId, number> = {};
  const chart = { x: canvasX - chartArea.x, y: canvasY - chartArea.y };
  for (const scale of scales) {
    if (scale.id.startsWith("x-")) {
      scaled[scale.id] = posToVal(frame, chart.x, scale.id);
    } else {
      scaled[scale.id] = posToVal(frame, chart.y, scale.id);
    }
  }
  return {
    isWithinChart: true,
    isClamped: outOfChart,
    chart,
    screen,
    canvas,
    scaled,
  };
};

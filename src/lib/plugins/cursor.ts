import { posToVal } from "../helpers";
import { Plot } from "../Plot";
import { DrawContext, PlotPlugin, Scale } from "../types";
import { clamp } from "../utils";

export type CursorPosition = {
  x: number;
  y: number;
  scaled: Record<Scale["id"], number>;
};

type HoverEvent = {
  plot: Plot;
  drawContext: DrawContext;
  position?: CursorPosition;
};

type ClickEvent = {
  plot: Plot;
  drawContext: DrawContext;
  position: CursorPosition;
};

type DragEvent = {
  phase: "start" | "move" | "end";
  plot: Plot;
  drawContext: DrawContext;
  positionStart: CursorPosition;
  positionEnd: CursorPosition;
};

type ClickListener = (event: ClickEvent) => void;

type DblclickListener = (event: ClickEvent) => void;

type HoverListener = (event: HoverEvent) => void;

type SpanSelectListener = (event: DragEvent) => void;

type CursorPlugin = {
  bindings: PlotPlugin;
  addHoverListener: (listener: HoverListener) => () => void;
  addClickListener: (listener: ClickListener) => () => void;
  addDblClickListener: (listener: DblclickListener) => () => void;
  addSpanSelectListener: (listener: SpanSelectListener) => () => void;
};

const getPosition = (
  e: MouseEvent,
  drawContext: DrawContext,
  fallbackToBoundaries = false
): CursorPosition | undefined => {
  const rect = drawContext.ctx.canvas.getBoundingClientRect();
  const posX = e.clientX - rect.left - drawContext.chartArea.x;
  const posY = e.clientY - rect.top - drawContext.chartArea.y;

  const clampedPosX = clamp(posX, 0, drawContext.chartArea.width);
  const clampedPosY = clamp(posY, 0, drawContext.chartArea.height);

  if (!fallbackToBoundaries && (clampedPosX !== posX || clampedPosY !== posY)) {
    return undefined;
  }

  const scaled: Record<Scale["id"], number> = {};
  for (const scale of drawContext.drawConfig.scales) {
    if (scale.id.startsWith("x-")) {
      scaled[scale.id] = posToVal(drawContext, clampedPosX, scale);
    } else {
      scaled[scale.id] = posToVal(drawContext, clampedPosY, scale);
    }
  }
  return {
    x: e.clientX,
    y: e.clientY,
    scaled,
  };
};

export const makeCursorPlugin = (): CursorPlugin => {
  let mouseMoveListener: ((e: MouseEvent) => void) | undefined = undefined;
  let mouseLeaveListener: ((e: MouseEvent) => void) | undefined = undefined;
  let mouseClickListener: ((e: MouseEvent) => void) | undefined = undefined;
  let mouseDblClickListener: ((e: MouseEvent) => void) | undefined = undefined;
  let mouseDownListener: ((e: MouseEvent) => void) | undefined = undefined;
  let mouseUpListener: ((e: MouseEvent) => void) | undefined = undefined;
  const hoverListeners = new Set<HoverListener>();
  const clickListeners = new Set<ClickListener>();
  const dblclickListeners = new Set<DblclickListener>();
  const dragListeners = new Set<SpanSelectListener>();

  let positionStart: CursorPosition | undefined = undefined;

  let clickTimeout: number | undefined = undefined;

  const bindings: PlotPlugin = {
    hooks: {
      onInit(drawContext, plot) {
        const { canvas } = drawContext.ctx;

        // mouse down
        mouseDownListener = (e: MouseEvent) => {
          if (dragListeners.size === 0) return;

          positionStart = getPosition(e, drawContext);

          if (!positionStart) return;

          for (const listener of dragListeners) {
            listener({
              phase: "start",
              plot,
              drawContext,
              positionStart,
              positionEnd: positionStart,
            });
          }
        };
        canvas.addEventListener("mousedown", mouseDownListener);

        // mouse move
        mouseMoveListener = (e: MouseEvent) => {
          if (hoverListeners.size === 0 && dragListeners.size === 0) return;

          const position = getPosition(e, drawContext);

          for (const listener of hoverListeners) {
            listener({ plot, drawContext, position });
          }

          const positionEnd = getPosition(e, drawContext, true);

          if (!positionStart || !positionEnd) return;

          for (const listener of dragListeners) {
            listener({
              phase: "move",
              plot,
              drawContext,
              positionStart,
              positionEnd,
            });
          }
        };
        canvas.addEventListener("mousemove", mouseMoveListener);

        // mouse up
        mouseUpListener = (e: MouseEvent) => {
          if (dragListeners.size === 0) return;

          if (!positionStart) return;

          const positionEnd = getPosition(e, drawContext, true);

          if (!positionEnd) return;

          for (const listener of dragListeners) {
            listener({
              phase: "end",
              plot,
              drawContext,
              positionStart,
              positionEnd,
            });
          }
          positionStart = undefined;
        };
        document.addEventListener("mouseup", mouseUpListener);

        // mouse leave
        mouseLeaveListener = () => {
          if (hoverListeners.size === 0) return;

          for (const listener of hoverListeners) {
            listener({ plot, drawContext });
          }
        };
        canvas.addEventListener("mouseleave", mouseLeaveListener);

        // click
        mouseClickListener = (e) => {
          if (clickTimeout) {
            clearTimeout(clickTimeout);
            clickTimeout = undefined;
            return;
          }
          // ignore double clicks
          if (e.detail > 1) {
            return;
          }
          clickTimeout = setTimeout(() => {
            clickTimeout = undefined;
            if (clickListeners.size === 0) return;

            const position = getPosition(e, drawContext);

            if (!position) return;

            for (const listener of clickListeners) {
              listener({ plot, drawContext, position });
            }
          }, 200);
        };
        canvas.addEventListener("click", mouseClickListener);

        // dblclick
        mouseDblClickListener = (e) => {
          if (dblclickListeners.size === 0) return;

          const position = getPosition(e, drawContext);

          if (!position) return;

          for (const listener of dblclickListeners) {
            listener({ plot, drawContext, position });
          }
        };
        canvas.addEventListener("dblclick", mouseDblClickListener);
      },

      onDestroy(plot) {
        const canvas = plot.getCanvas();
        if (mouseMoveListener) {
          canvas.removeEventListener("mousemove", mouseMoveListener);
          mouseMoveListener = undefined;
        }
        if (mouseLeaveListener) {
          canvas.removeEventListener("mouseleave", mouseLeaveListener);
          mouseLeaveListener = undefined;
        }
        if (mouseClickListener) {
          canvas.removeEventListener("click", mouseClickListener);
          mouseClickListener = undefined;
        }
        if (mouseDblClickListener) {
          canvas.removeEventListener("dblclick", mouseDblClickListener);
          mouseDblClickListener = undefined;
        }
        if (mouseDownListener) {
          canvas.removeEventListener("mousedown", mouseDownListener);
          mouseDownListener = undefined;
        }
        if (mouseUpListener) {
          document.removeEventListener("mouseup", mouseUpListener);
          mouseUpListener = undefined;
        }
      },
    },
  };

  return {
    bindings,
    addHoverListener: (listener: HoverListener) => {
      hoverListeners.add(listener);
      return () => hoverListeners.delete(listener);
    },
    addClickListener: (listener: ClickListener) => {
      clickListeners.add(listener);
      return () => clickListeners.delete(listener);
    },
    addDblClickListener: (listener: DblclickListener) => {
      dblclickListeners.add(listener);
      return () => dblclickListeners.delete(listener);
    },
    addSpanSelectListener: (listener: SpanSelectListener) => {
      dragListeners.add(listener);
      return () => dragListeners.delete(listener);
    },
  };
};

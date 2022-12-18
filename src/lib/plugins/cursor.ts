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

type HoverListener = (event: HoverEvent) => void;

type SpanSelectListener = (event: DragEvent) => void;

type CursorPlugin = {
  bindings: PlotPlugin;
  addHoverListener: (listener: HoverListener) => () => void;
  addClickListener: (listener: ClickListener) => () => void;
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
  let mouseDownListener: ((e: MouseEvent) => void) | undefined = undefined;
  let mouseUpListener: ((e: MouseEvent) => void) | undefined = undefined;
  const hoverListeners = new Set<HoverListener>();
  const clickListeners = new Set<ClickListener>();
  const dragListeners = new Set<SpanSelectListener>();

  let spanSelectStartPos: CursorPosition | undefined = undefined;

  const bindings: PlotPlugin = {
    hooks: {
      afterAxes(drawContext, plot) {
        // mouse down
        if (mouseDownListener) {
          plot.getCanvas().removeEventListener("mousedown", mouseDownListener);
        }
        mouseDownListener = (e: MouseEvent) => {
          if (dragListeners.size === 0) {
            return;
          }
          spanSelectStartPos = getPosition(e, drawContext);

          if (spanSelectStartPos) {
            for (const listener of dragListeners) {
              listener({
                plot,
                drawContext,
                positionStart: spanSelectStartPos,
                positionEnd: spanSelectStartPos,
                phase: "start",
              });
            }
          }
        };
        drawContext.ctx.canvas.addEventListener("mousedown", mouseDownListener);

        // mouse move
        if (mouseMoveListener) {
          plot.getCanvas().removeEventListener("mousemove", mouseMoveListener);
        }
        mouseMoveListener = (e: MouseEvent) => {
          if (hoverListeners.size === 0 && dragListeners.size === 0) {
            return;
          }
          const position = getPosition(e, drawContext);

          for (const listener of hoverListeners) {
            listener({ plot, drawContext, position });
          }

          const positionEnd = getPosition(e, drawContext, true);
          if (spanSelectStartPos && positionEnd) {
            for (const listener of dragListeners) {
              listener({
                plot,
                drawContext,
                positionStart: spanSelectStartPos,
                positionEnd,
                phase: "move",
              });
            }
          }
        };
        drawContext.ctx.canvas.addEventListener("mousemove", mouseMoveListener);

        // mouse up
        if (mouseUpListener) {
          document.removeEventListener("mouseup", mouseUpListener);
        }
        mouseUpListener = (e: MouseEvent) => {
          if (dragListeners.size === 0) return;

          if (!spanSelectStartPos) return;

          const positionEnd = getPosition(e, drawContext, true);

          if (!positionEnd) return;

          for (const listener of dragListeners) {
            listener({
              plot,
              drawContext,
              positionStart: spanSelectStartPos,
              positionEnd,
              phase: "end",
            });
          }
          spanSelectStartPos = undefined;
        };
        document.addEventListener("mouseup", mouseUpListener);

        // mouse leave
        if (mouseLeaveListener) {
          plot
            .getCanvas()
            .removeEventListener("mouseleave", mouseLeaveListener);
        }
        mouseLeaveListener = () => {
          if (hoverListeners.size === 0) return;

          for (const listener of hoverListeners) {
            listener({ plot, drawContext });
          }
        };
        drawContext.ctx.canvas.addEventListener(
          "mouseleave",
          mouseLeaveListener
        );

        // mouse click
        if (mouseClickListener) {
          plot.getCanvas().removeEventListener("click", mouseClickListener);
        }

        mouseClickListener = (e) => {
          if (clickListeners.size === 0) {
            return;
          }
          const position = getPosition(e, drawContext);
          if (position) {
            for (const listener of clickListeners) {
              listener({
                plot,
                drawContext,
                position,
              });
            }
          }
        };
        drawContext.ctx.canvas.addEventListener("click", mouseClickListener);
        drawContext.ctx.canvas.addEventListener("dblclick", () => {
          console.log("double click");
        });
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
    addSpanSelectListener: (listener: SpanSelectListener) => {
      dragListeners.add(listener);
      return () => dragListeners.delete(listener);
    },
  };
};

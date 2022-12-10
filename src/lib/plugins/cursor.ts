import { posToVal } from "../helpers";
import { Plot } from "../Plot";
import { DrawContext, PlotPlugin, Scale } from "../types";

type HoverEvent = {
  plot: Plot;
  drawContext: DrawContext;
  position?: {
    x: number;
    y: number;
    scaled: Record<Scale["id"], number>;
  };
};

type ClickEvent = {
  plot: Plot;
  drawContext: DrawContext;
  position: {
    x: number;
    y: number;
    scaled: Record<Scale["id"], number>;
  };
};

type ClickListener = (event: ClickEvent) => void;

type HoverListener = (event: HoverEvent) => void;

type CursorPlugin = {
  bindings: PlotPlugin;
  addHoverListener: (listener: HoverListener) => () => void;
  addClickListener: (listener: ClickListener) => () => void;
};

export const makeCursorPlugin = (): CursorPlugin => {
  let mouseMoveListener: ((e: MouseEvent) => void) | undefined = undefined;
  let mouseLeaveListener: ((e: MouseEvent) => void) | undefined = undefined;
  let mouseClickListener: ((e: MouseEvent) => void) | undefined = undefined;
  const hoverListeners = new Set<HoverListener>();
  const clickListeners = new Set<ClickListener>();

  const bindings: PlotPlugin = {
    hooks: {
      afterAxes(drawContext, plot) {
        // mouse move
        if (mouseMoveListener) {
          plot.getCanvas().removeEventListener("mousemove", mouseMoveListener);
        }
        mouseMoveListener = (e: MouseEvent) => {
          if (hoverListeners.size === 0) {
            return;
          }
          const rect = plot.getCanvas().getBoundingClientRect();
          const canvasX = e.clientX - rect.left - drawContext.chartArea.x;
          const canvasY = e.clientY - rect.top - drawContext.chartArea.y;
          let position: HoverEvent["position"] = undefined;
          if (
            canvasX >= 0 &&
            canvasX <= drawContext.chartArea.width &&
            canvasY >= 0 &&
            canvasY <= drawContext.chartArea.height
          ) {
            const scaled: Record<Scale["id"], number> = {};
            for (const scale of drawContext.drawConfig.scales) {
              if (scale.id.startsWith("x-")) {
                scaled[scale.id] = posToVal(drawContext, canvasX, scale);
              } else {
                scaled[scale.id] = posToVal(drawContext, canvasY, scale);
              }
            }
            position = {
              x: e.clientX,
              y: e.clientY,
              scaled,
            };
          }

          for (const listener of hoverListeners) {
            listener({ plot, drawContext, position });
          }
        };
        drawContext.ctx.canvas.addEventListener("mousemove", mouseMoveListener);

        // mouse leave
        if (mouseLeaveListener) {
          plot
            .getCanvas()
            .removeEventListener("mouseleave", mouseLeaveListener);
        }
        mouseLeaveListener = () => {
          if (hoverListeners.size === 0) {
            return;
          }
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
          const rect = plot.getCanvas().getBoundingClientRect();
          const canvasX = e.clientX - rect.left - drawContext.chartArea.x;
          const canvasY = e.clientY - rect.top - drawContext.chartArea.y;
          if (
            canvasX < 0 ||
            canvasX > drawContext.chartArea.width ||
            canvasY < 0 ||
            canvasY > drawContext.chartArea.height
          ) {
            return;
          }
          const scaled: Record<Scale["id"], number> = {};
          for (const scale of drawContext.drawConfig.scales) {
            if (scale.id.startsWith("x-")) {
              scaled[scale.id] = posToVal(drawContext, canvasX, scale);
            } else {
              scaled[scale.id] = posToVal(drawContext, canvasY, scale);
            }
          }

          for (const listener of clickListeners) {
            listener({
              plot,
              drawContext,
              position: {
                x: e.clientX,
                y: e.clientY,
                scaled,
              },
            });
          }
        };
        drawContext.ctx.canvas.addEventListener(
          "click",
          mouseClickListener
        );
        drawContext.ctx.canvas.addEventListener(
          "dblclick",
          () =>{
            console.log("double click")
          }
        );
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
  };
};

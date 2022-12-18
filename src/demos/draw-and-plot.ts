import { posToVal } from "../lib/helpers";
import { Plot } from "../lib/Plot";
import {
  HeatmapExtras,
  LineExtras,
  linePlotter,
  ScatterExtras,
} from "../lib/plotters";
import { PlotPlugin, Scale } from "../lib/types";
import "./style.css";

const initialInput = {
  x: [...Array(100).keys()],
  y: Array(100).fill(0),
};

const produceOutput = (x: number, yIn: number) => {
  return yIn * Math.sin(x / 2);
};

const outputPlot = new Plot<LineExtras | ScatterExtras | HeatmapExtras>(
  {
    canvas: document.querySelector<HTMLCanvasElement>("#output")!,
    plugins: [],
    dimensions: {
      width: "auto",
      height: 400,
    },
  },
  {
    padding: 10,
    axes: [{ scaleId: "x-1" }, { scaleId: "y-1" }],
    scales: [
      {
        id: "x-1",
        limits: { autorange: false, fixed: { min: 0, max: 100 } },
      },
      {
        id: "y-1",
        limits: { autorange: false, fixed: { min: -1, max: 1 } },
      },
    ],
    series: [
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotterOptions: {
          plotter: linePlotter,
          style: { strokeStyle: "blue" },
        },
        x: initialInput.x,
        y: initialInput.y.map((_, i) =>
          produceOutput(initialInput.x[i], initialInput.y[i])
        ),
      },
    ],
  }
);

const makePlugin = (): PlotPlugin => {
  let moveListener: ((e: MouseEvent) => void) | undefined = undefined;
  let mouseDownListener: ((e: MouseEvent) => void) | undefined = undefined;
  let mouseUpListener: ((e: MouseEvent) => void) | undefined = undefined;
  let isTracking = false;
  return {
    hooks: {
      afterSeries: (drawContext) => {
        outputPlot.incrementalUpdate((draft) => {
          draft.series[0].y = drawContext.drawConfig.series[0].y.map((_, i) => {
            const x = drawContext.drawConfig.series[0].x[i];
            const y = drawContext.drawConfig.series[0].y[i];
            return produceOutput(x, y);
          });
        });
        document.getElementById("points")!.innerHTML =
          drawContext.drawConfig.series[0].y.join("\n");
      },
      afterAxes(drawContext, plot) {
        if (moveListener) {
          plot.getCanvas().removeEventListener("mousemove", moveListener);
        }
        mouseDownListener = () => {
          isTracking = true;
        };
        mouseUpListener = () => {
          isTracking = false;
        };
        moveListener = (e: MouseEvent) => {
          if (!isTracking) {
            return;
          }
          const rect = plot.getCanvas().getBoundingClientRect();
          const canvasX = e.clientX - rect.left - drawContext.chartArea.x;
          const canvasY = e.clientY - rect.top - drawContext.chartArea.y;
          const position: Record<Scale["id"], number> = {};
          for (const scale of drawContext.drawConfig.scales) {
            if (scale.id.startsWith("x-")) {
              position[scale.id] = posToVal(drawContext, canvasX, scale);
            } else {
              position[scale.id] = posToVal(drawContext, canvasY, scale);
            }
          }
          plot.incrementalUpdate((draft) => {
            let closestIndex = 0;
            for (let i = 0; i < draft.series[0].x.length; i++) {
              closestIndex =
                Math.abs((draft.series[0].x[i] ?? Infinity) - position["x-1"]) <
                Math.abs(
                  (draft.series[0].x[closestIndex] ?? Infinity) -
                    position["x-1"]
                )
                  ? i
                  : closestIndex;
            }
            draft.series[0].y[closestIndex] = position["y-1"];
          });
        };
        drawContext.ctx.canvas.addEventListener("mousemove", moveListener);
        drawContext.ctx.canvas.addEventListener("mousedown", mouseDownListener);
        drawContext.ctx.canvas.addEventListener("mouseup", mouseUpListener);
      },
      onDestroy(plot) {
        const canvas = plot.getCanvas();
        if (moveListener) {
          canvas.removeEventListener("mousemove", moveListener);
          moveListener = undefined;
        }
        if (mouseDownListener) {
          canvas.removeEventListener("mousemove", mouseDownListener);
          mouseDownListener = undefined;
        }
        if (mouseUpListener) {
          canvas.removeEventListener("mousemove", mouseUpListener);
          mouseUpListener = undefined;
        }
      },
    },
  };
};

new Plot(
  {
    canvas: document.querySelector<HTMLCanvasElement>("#input")!,
    plugins: [makePlugin()],
    dimensions: {
      width: "auto",
      height: 200,
    },
  },
  {
    padding: 10,
    axes: [{ scaleId: "x-1" }, { scaleId: "y-1" }],
    scales: [
      { id: "x-1", limits: { autorange: false, fixed: { min: 0, max: 100 } } },
      { id: "y-1", limits: { autorange: false, fixed: { min: -1, max: 1 } } },
    ],
    series: [
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotterOptions: {
          plotter: linePlotter,
          style: { strokeStyle: "red" },
        },
        x: initialInput.x,
        y: initialInput.y,
      },
    ],
  }
);

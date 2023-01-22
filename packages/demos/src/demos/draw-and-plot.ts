import { Plot, linePlotter, PlotPlugin, Scale, helpers } from "../lib/main";
import "./style.css";

const initialInput = {
  x: [...Array(100).keys()],
  y: Array(100).fill(0),
};

const produceOutput = (x: number, yIn: number) => {
  return yIn * Math.sin(x / 2);
};

const outputPlot = new Plot(
  {
    canvas: document.querySelector<HTMLCanvasElement>("#output")!,
    dimensions: {
      width: "auto",
      height: 400,
    },
  },
  {
    padding: 10,
    axes: [{ scaleId: "x-1" }, { scaleId: "y-1" }],
    scales: [{ id: "x-1" }, { id: "y-1" }],
    series: [
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: linePlotter({ style: { strokeStyle: "blue" } }),
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
      afterSeries: ({ frame }) => {
        outputPlot.update((plot) => {
          plot.series[0].y = frame.inputParams.series[0].y.map((_, i) => {
            const x = frame.inputParams.series[0].x[i];
            const y = frame.inputParams.series[0].y[i];
            return produceOutput(x, y);
          });
          return plot;
        });
        document.getElementById("points")!.innerHTML =
          frame.inputParams.series[0].y.join("\n");
      },
      afterAxes({ frame, plot }) {
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
          const canvasX = e.clientX - rect.left - frame.chartArea.x;
          const canvasY = e.clientY - rect.top - frame.chartArea.y;
          const position: Record<Scale["id"], number> = {};
          for (const scale of frame.inputParams.scales) {
            if (scale.id.startsWith("x-")) {
              position[scale.id] = helpers.posToVal(frame, canvasX, scale);
            } else {
              position[scale.id] = helpers.posToVal(frame, canvasY, scale);
            }
          }
          plot.update((plot) => {
            let closestIndex = 0;
            for (let i = 0; i < plot.series[0].x.length; i++) {
              closestIndex =
                Math.abs((plot.series[0].x[i] ?? Infinity) - position["x-1"]) <
                Math.abs(
                  (plot.series[0].x[closestIndex] ?? Infinity) - position["x-1"]
                )
                  ? i
                  : closestIndex;
            }
            plot.series[0].y[closestIndex] = position["y-1"];
            return plot;
          });
        };
        frame.ctx.canvas.addEventListener("mousemove", moveListener);
        frame.ctx.canvas.addEventListener("mousedown", mouseDownListener);
        frame.ctx.canvas.addEventListener("mouseup", mouseUpListener);
      },
      onDestroy({ plot }) {
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
      { id: "x-1" },
      { id: "y-1", makeLimits: () => ({ min: -1, max: 1 }) },
    ],
    series: [
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: linePlotter({ style: { strokeStyle: "red" } }),
        x: initialInput.x,
        y: initialInput.y,
      },
    ],
  }
);

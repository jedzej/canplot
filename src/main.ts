import { posToVal } from "./lib/helpers";
import { Plot } from "./lib/Plot";
import {
  heatmapPlotter,
  HeatmapSeriesExtras,
  linePlotter,
  scatterPlotter,
} from "./lib/plotters";
import { PlotPlugin, Scale } from "./lib/types";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div style="display: flex; overflow:hidden;">
<div>
<div style="background-color:darkgray; color:black; width:50vw">
  <div>input</div>
  <canvas id="input"></canvas>
  <div>model output: yIn * sin(x / 2) + 5</div>
    <canvas id="output"></canvas>
  </div>
</div>
<div id="points" style="overflow-y: scroll; white-space:pre; height:400px;width:200px;"></div>
</div>
`;

const initialInput = {
  x: [...Array(100).keys()],
  y: Array(100).fill(0.5),
};

const produceOutput = (x: number, yIn: number) => {
  return yIn * Math.sin(x / 2) + 1;
};

const outputPlot = new Plot(
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
    axes: [
      {
        scaleId: "x-1",
        position: "primary",
        size: 30,
      },
      {
        scaleId: "y-1",
        position: "primary",
        size: 30,
      },
    ],
    scales: [
      {
        id: "x-1",
        limits: { autorange: false, fixed: { min: 0, max: 100 } },
      },
      {
        id: "y-1",
        limits: { autorange: false, fixed: { min: 0, max: 2 } },
      },
    ],
    series: [
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: linePlotter,
        x: initialInput.x,
        y: initialInput.y.map((_, i) =>
          produceOutput(initialInput.x[i], initialInput.y[i])
        ),
        style: {
          strokeFill: {
            strokeStyle: "blue",
          },
        },
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
      afterSeries: (plot, drawContext) => {
        outputPlot.incrementalImperativeUpdate((draft) => {
          draft.series[0].y = drawContext.drawConfig.series[0].y.map((_, i) => {
            const x = drawContext.drawConfig.series[0].x[i];
            const y = drawContext.drawConfig.series[0].y[i];
            return x === undefined || y === undefined
              ? undefined
              : produceOutput(x, y);
          });
        });
        document.getElementById("points")!.innerHTML =
          drawContext.drawConfig.series[0].y.join("\n");
      },
      afterAxes(plot, drawContext) {
        if (moveListener) {
          plot.ctx().canvas.removeEventListener("mousemove", moveListener);
        }
        mouseDownListener = (e: MouseEvent) => {
          isTracking = true;
        };
        mouseUpListener = (e: MouseEvent) => {
          isTracking = false;
        };
        moveListener = (e: MouseEvent) => {
          if (!isTracking) {
            return;
          }
          const rect = plot.ctx().canvas.getBoundingClientRect();
          const canvasX = e.clientX - rect.left - drawContext.chartArea.lt.x;
          const canvasY = e.clientY - rect.top - drawContext.chartArea.lt.y;
          const position: Record<Scale["id"], number> = {};
          for (const scale of drawContext.drawConfig.scales) {
            if (scale.id.startsWith("x-")) {
              position[scale.id] = posToVal(drawContext, canvasX, scale);
            } else {
              position[scale.id] = posToVal(drawContext, canvasY, scale);
            }
          }
          plot.incrementalImperativeUpdate((draft) => {
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
          // drawContext.drawConfig.series[0].
          // outputPlot.incrementalImperativeUpdate(draft => {
          //   draft
          // })
        };
        plot.ctx().canvas.addEventListener("mousemove", moveListener);
        plot.ctx().canvas.addEventListener("mousedown", mouseDownListener);
        plot.ctx().canvas.addEventListener("mouseup", mouseUpListener);
      },
      onDestroy(plot) {
        if (moveListener) {
          plot.ctx().canvas.removeEventListener("mousemove", moveListener);
          moveListener = undefined;
        }
        if (mouseDownListener) {
          plot.ctx().canvas.removeEventListener("mousemove", mouseDownListener);
          mouseDownListener = undefined;
        }
        if (mouseUpListener) {
          plot.ctx().canvas.removeEventListener("mousemove", mouseUpListener);
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
    axes: [
      {
        scaleId: "x-1",
        position: "primary",
        size: 30,
      },
      {
        scaleId: "y-1",
        position: "primary",
        size: 30,
      },
    ],
    scales: [
      {
        id: "x-1",
        limits: { autorange: false, fixed: { min: 0, max: 100 } },
      },
      {
        id: "y-1",
        limits: { autorange: false, fixed: { min: 0, max: 1 } },
      },
    ],
    series: [
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: linePlotter,
        x: initialInput.x,
        y: initialInput.y,
        style: {
          strokeFill: {
            strokeStyle: "red",
          },
        },
      },
    ],
  }
);

// setInterval(() => {
//   plot.incrementalImperativeUpdate((draft) => {
//     draft.series[0].z = new Array(draft.series[0].z.length)
//       .fill(0)
//       .map((_, y) => 5 + Math.sin(y + performance.now() / 100));
//   });
// }, 16);

// const plot = new Plot<HeatmapSeriesExtras>(
//   {
//     canvas: document.querySelector<HTMLCanvasElement>("#canvas")!,
//     plugins: [],
//     dimensions: {
//       width: "auto",
//       height: "auto",
//     },
//   },
//   {
//     padding: 10,
//     axes: [
//       {
//         scaleId: "x-1",
//         position: "primary",
//         size: 30,
//       },
//       {
//         scaleId: "y-1",
//         position: "primary",
//         size: 30,
//       },
//     ],
//     scales: [
//       {
//         id: "x-1",
//         limits: { autorange: false, fixed: { min: 0, max: 5 } },
//       },
//       {
//         id: "y-1",
//         limits: { autorange: false, fixed: { min: 0, max: 4 } },
//       },
//     ],
//     series: [
//       {
//         xScaleId: "x-1",
//         yScaleId: "y-1",
//         plotter: heatmapPlotter,
//         tileX: 1,
//         tileY: 1,
//         x: [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4],
//         y: [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3],
//         z: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//       },
//     ],
//   }
// );
// setInterval(() => {
//   plot.incrementalImperativeUpdate((draft) => {
//     draft.series[0].z = new Array(draft.series[0].z.length)
//       .fill(0)
//       .map((_, y) => 5 + Math.sin(y + performance.now() / 100));
//   });
// }, 16);

// const plot = new Plot<{ id: string }>(
//   {
//     canvas: document.querySelector<HTMLCanvasElement>("#canvas")!,
//     plugins: [],
//     dimensions: {
//       width: "auto",
//       height: "auto",
//     },
//   },
//   {
//     padding: 10,
//     axes: [
//       {
//         scaleId: "x-1",
//         position: "primary",
//         size: 30,
//       },
//       {
//         scaleId: "x-2",
//         position: "primary",
//         size: 30,
//       },
//       {
//         scaleId: "x-3",
//         position: "primary",
//         size: 30,
//       },
//       {
//         scaleId: "y-1",
//         position: "primary",
//         size: 30,
//       },
//       {
//         scaleId: "y-2",
//         position: "primary",
//         size: 30,
//         style: {
//           strokeFill: {
//             strokeStyle: "blue",
//           },
//         },
//       },
//       {
//         scaleId: "y-3",
//         position: "primary",
//         size: 30,
//         style: {
//           strokeFill: {
//             strokeStyle: "red",
//           },
//         },
//       },
//       {
//         scaleId: "y-4",
//         position: "secondary",
//         size: 40,
//       },
//       {
//         scaleId: "x-4",
//         position: "secondary",
//         size: 40,
//       },
//       {
//         scaleId: "x-5",
//         position: "secondary",
//         size: 40,
//       },
//     ],
//     scales: [
//       {
//         id: "x-1",
//         limits: { autorange: false, fixed: { min: 0, max: 10 } },
//       },
//       {
//         id: "y-1",
//         limits: { autorange: false, fixed: { min: 0, max: 10 } },
//       },
//       {
//         id: "y-2",
//         limits: { autorange: false, fixed: { min: 0, max: 20 } },
//       },
//     ],
//     series: [
//       {
//         xScaleId: "x-1",
//         yScaleId: "y-1",
//         id: "series-1",
//         x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//         y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//       },
//       {
//         xScaleId: "x-1",
//         yScaleId: "y-2",
//         id: "series-1",
//         x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//         y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//         plotter: linePlotter,
//       },
//     ],
//   }
// );

// setInterval(() => {
//   plot.incrementalImperativeUpdate((draft) => {
//     draft.series[0].x = new Array(10000).fill(0).map((_, x) => x / 100);
//     draft.series[0].y = new Array(10000)
//       .fill(0)
//       .map((_, y) => 5 + Math.sin(y + performance.now() / 100));
//     draft.series[1].x = new Array(1000).fill(0).map((_, x) => x / 100);
//     draft.series[1].y = new Array(1000)
//       .fill(0)
//       .map((_, y) => 5 + Math.sin(y + performance.now() / 100));
//   });
// }, 15);

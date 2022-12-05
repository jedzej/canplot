import { Plot } from "./lib/Plot";
import { linePlotter } from "./lib/plotters";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div style="background-color:darkgray; height: 50vh; width:50vw">
    <canvas id="canvas"></canvas>
  </div>
`;

const plot = new Plot<{ id: string }>(
  {
    canvas: document.querySelector<HTMLCanvasElement>("#canvas")!,
    plugins: [],
    dimensions: {
      width: "auto",
      height: "auto",
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
        scaleId: "x-2",
        position: "primary",
        size: 30,
      },
      {
        scaleId: "x-3",
        position: "primary",
        size: 30,
      },
      {
        scaleId: "y-1",
        position: "primary",
        size: 30,
      },
      {
        scaleId: "y-2",
        position: "primary",
        size: 30,
        style: {
          strokeFill: {
            strokeStyle: "blue",
          },
        },
      },
      {
        scaleId: "y-3",
        position: "primary",
        size: 30,
        style: {
          strokeFill: {
            strokeStyle: "red",
          },
        },
      },
      {
        scaleId: "y-4",
        position: "secondary",
        size: 40,
      },
      {
        scaleId: "x-4",
        position: "secondary",
        size: 40,
      },
      {
        scaleId: "x-5",
        position: "secondary",
        size: 40,
      },
    ],
    scales: [
      {
        id: "x-1",
        limits: { autorange: false, fixed: { min: 0, max: 10 } },
      },
      {
        id: "y-1",
        limits: { autorange: false, fixed: { min: 0, max: 10 } },
      },
      {
        id: "y-2",
        limits: { autorange: false, fixed: { min: 0, max: 20 } },
      },
    ],
    series: [
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        id: "series-1",
        x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      },
      {
        xScaleId: "x-1",
        yScaleId: "y-2",
        id: "series-1",
        x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        plotter: linePlotter,
      },
    ],
  }
);

setInterval(() => {
  plot.incrementalImperativeUpdate((draft) => {
    draft.series[0].x = new Array(10000).fill(0).map((_, x) => x / 100);
    draft.series[0].y = new Array(10000)
      .fill(0)
      .map((_, y) => 5 + Math.sin(y + performance.now() / 100));
    draft.series[1].x = new Array(1000).fill(0).map((_, x) => x / 100);
    draft.series[1].y = new Array(1000)
      .fill(0)
      .map((_, y) => 5 + Math.sin(y + performance.now() / 100));
  });
}, 15);

import { Plot } from "../lib/Plot";
import { LineExtras, linePlotter, scatterPlotter } from "../lib/plotters";

const plot = new Plot<LineExtras>(
  {
    canvas: document.querySelector<HTMLCanvasElement>("#canvas")!,
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
        limits: { autorange: false, fixed: { min: 0.05, max: 0.2 } },
      },
      {
        id: "y-1",
        limits: { autorange: false, fixed: { min: 0, max: 10 } },
      },
    ],
    series: [
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotterOptions: {
          plotter: linePlotter,
        },
        style: {
          line: {
            lineCap: "round",
          },
          strokeFill: {
            strokeStyle: "blue",
          },
        },
        x: new Array(1000).fill(0).map((_, i) => i / 10),
        y: [],
      },
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotterOptions: {
          plotter: scatterPlotter,
        },
        style: {
          line: {
            lineCap: "round",
          },
          strokeFill: {
            strokeStyle: "red",
          },
        },
        x: new Array(1000).fill(0).map((_, i) => i / 10),
        y: [],
      },
    ],
  }
);

setInterval(() => {
  plot.incrementalUpdate((draft) => {
    draft.series[0].y = new Array(draft.series[0].x.length)
      .fill(0)
      .map((_, y) => 5 + Math.sin(y / 10 + performance.now() / 100));
    draft.series[1].y = new Array(draft.series[1].x.length)
      .fill(0)
      .map((_, y) => 2 + Math.cos(y / 10 + performance.now() / 100));
  });
}, 16);

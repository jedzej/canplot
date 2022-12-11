import { Plot } from "../lib/Plot";
import { LineExtras, linePlotter } from "../lib/plotters";

new Plot<LineExtras>(
  {
    canvas: document.querySelector<HTMLCanvasElement>("#canvas")!,
    plugins: [],
    dimensions: {
      width: "auto",
      height: 400,
    },
  },
  {
    axes: [
      { scaleId: "x-1", },
      { scaleId: "y-1", },
    ],
    scales: [
      {
        id: "x-1",
        limits: { autorange: false, fixed: { min: 0, max: 20 } },
      },
      {
        id: "y-1",
        limits: { autorange: false, fixed: { min: 0, max: 20 } },
      },
    ],
    series: [
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotterOptions: {
          plotter: linePlotter,
          gapDistance: 1,
        },
        style: { strokeFill: { strokeStyle: "blue", }, },
        x: [0, 1, 2, 3, 5, 6, 7, 12, 13, 17],
        y: [0, 1, 2, 3, 5, 6, 7, 12, 13, 17],
      },

    ],
  }
);

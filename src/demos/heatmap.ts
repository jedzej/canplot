import { Plot, HeatmapExtras, heatmapPlotter } from "../lib/main";
import { animationLoop } from "./helpers";

const plot = new Plot<HeatmapExtras>(
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
        limits: { autorange: false, fixed: { min: 0, max: 5 } },
      },
      {
        id: "y-1",
        limits: { autorange: false, fixed: { min: 0, max: 4 } },
      },
    ],
    series: [
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotterOptions: {
          plotter: heatmapPlotter,
          tileX: 1,
          tileY: 1,
          z: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        },
        x: [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4],
        y: [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3],
      },
    ],
  }
);
animationLoop(() => {
  plot.incrementalUpdate((draft) => {
    draft.series[0].plotterOptions.z = new Array(
      draft.series[0].plotterOptions.z.length
    )
      .fill(0)
      .map((_, y) => 5 + Math.sin(y + performance.now() / 100));
  });
});

import { Plot, linePlotter } from "../lib/main";

new Plot(
  {
    canvas: document.querySelector<HTMLCanvasElement>("#canvas")!,
    dimensions: { width: "auto", height: 400 },
  },
  {
    axes: [{ scaleId: "x-1" }, { scaleId: "y-1" }],
    scales: [{ id: "x-1" }, { id: "y-1" }],
    series: [
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: linePlotter({
          gapDistance: 1,
          style: { strokeStyle: "blue" },
        }),
        x: [0, 1, 2, 3, 5, 6, 7, 12, 13, 17],
        y: [0, 1, 2, 3, 5, 6, 7, 12, 13, 17],
      },
    ],
  }
);

import { Plot, linePlotter } from "../lib/main";

new Plot(
  {
    canvas: document.querySelector<HTMLCanvasElement>("#canvas")!,
    plugins: [
      {
        hooks: {
          onInit: () => {
            console.log("onInit");
          },
          afterAxes: () => {
            console.log("afterAxes");
          },
          afterClear: () => {
            console.log("afterClear");
          },
          afterSeries: () => {
            console.log("afterSeries");
          },
          beforeClear: () => {
            console.log("beforeClear");
          },
          onDestroy: () => {
            console.log("beforeSeries");
          },
        },
      },
    ],
    dimensions: {
      width: "auto",
      height: 400,
    },
  },
  {
    padding: 10,
    scales: [{ id: "x-1" }, { id: "y-1" }, { id: "y-2" }],
    axes: [{ scaleId: "x-1" }, { scaleId: "y-1" }, { scaleId: "y-2" }],
    series: [
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: linePlotter(),
        x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
      {
        xScaleId: "x-1",
        yScaleId: "y-2",
        plotter: linePlotter({ style: { strokeStyle: "red" } }),
        x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    ],
  }
);

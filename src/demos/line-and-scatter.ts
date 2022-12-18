import { Plot } from "../lib/Plot";
import { linePlotter } from "../lib/plotters/line";
import { scatterPlotter } from "../lib/plotters/scatter";
import { animationLoop } from "./helpers";

const plot = new Plot(
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
        limits: { autorange: false, fixed: { min: 0, max: 100 } },
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
          style: { lineCap: "round", strokeStyle: "blue" },
        },
        x: new Array(10000).fill(0).map((_, i) => i / 10),
        y: [],
      },
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotterOptions: {
          plotter: scatterPlotter,
          style: { strokeStyle: "red" },
        },
        x: new Array(10000).fill(0).map((_, i) => i / 10),
        y: [],
      },
    ],
  }
);

animationLoop(() => {
  plot.incrementalUpdate((draft) => {
    const t = performance.now() / 100;
    const arr: number[] = [];
    arr.length = draft.series[0].x.length;
    arr.fill(0);
    const s1 = [];
    s1.length = draft.series[0].x.length;
    const s2 = [];
    s2.length = draft.series[0].x.length;

    for (let i = 0; i < arr.length; i++) {
      s1[i] = 5 + Math.sin(i / 10 + t);
      s2[i] = 2 + Math.cos(i / 10 + t);
    }
    draft.series[0].y = s1;
    draft.series[1].y = s2;
  });
});

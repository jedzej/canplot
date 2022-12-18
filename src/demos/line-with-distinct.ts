import { Plot } from "../lib/Plot";
import { LineExtras, linePlotter } from "../lib/plotters/line";
import { animationLoop } from "./helpers";

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
        limits: { autorange: false, fixed: { min: 0, max: 100 } },
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
          plotter: linePlotter,
          showDistrinct: (_, idx, series) => {
            return (series.y[idx] ?? 0) < 2;
          },
          style: { strokeStyle: "blue" },
        },
        x: Array(100)
          .fill(0)
          .map((_, i) => i),
        y: [],
      },
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotterOptions: {
          plotter: linePlotter,
          distinctDistance: 10,
          style: { strokeStyle: "red" },
        },
        x: Array(100)
          .fill(0)
          .map((_, i) => i),
        y: [],
      },
    ],
  }
);

animationLoop(() => {
  plot.incrementalUpdate((draft) => {
    const t = performance.now() / 1000;
    const arr: number[] = [];
    arr.length = draft.series[0].x.length;
    arr.fill(0);
    const s1 = [];
    s1.length = draft.series[0].x.length;
    const s2 = [];
    s2.length = draft.series[0].x.length;

    for (let i = 0; i < arr.length; i++) {
      s1[i] = 2 + Math.sin(i / 10 + t);
      s2[i] = 1 + Math.sin(i / 10 + t);
    }
    draft.series[0].y = s1;
    draft.series[1].y = s2;
  });
});

import { Plot, linePlotter, scatterPlotter } from "../lib/main";
import { animationLoop } from "./helpers";

const plot = new Plot(
  {
    canvas: document.querySelector<HTMLCanvasElement>("#canvas")!,
    dimensions: {
      width: "auto",
      height: 400,
    },
  },
  {
    padding: 20,
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
    scales: [{ id: "x-1" }, { id: "y-1" }, { id: "y-2" }],
    series: [
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: linePlotter({ style: { strokeStyle: "blue" } }),
        x: new Array(1000).fill(0).map((_, i) => i / 10),
        y: new Array(1000).fill(0).map((_, i) => i % 10),
      },
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: linePlotter({ style: { strokeStyle: "brown" } }),
        x: new Array(1000).fill(0).map((_, i) => i / 10),
        y: new Array(1000).fill(0).map((_, i) => (i % 10) - 5),
      },
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: scatterPlotter({ style: { strokeStyle: "red" } }),
        x: new Array(1000).fill(0).map((_, i) => i / 10),
        y: new Array(1000).fill(0).map((_, i) => (i % 10) - 5),
      },
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: scatterPlotter({ style: { strokeStyle: "black" } }),
        x: new Array(1000).fill(0).map((_, i) => i / 10),
        y: new Array(1000).fill(0).map((_, i) => (i % 10) - 5),
      },
    ],
  }
);

animationLoop(() => {
  plot.update((plot) => {
    const t = performance.now() / 100;
    const arr: number[] = [];
    arr.length = plot.series[0].x.length;
    arr.fill(0);
    const s1: number[] = [];
    s1.length = plot.series[0].x.length;
    const s2: number[] = [];
    s2.length = plot.series[0].x.length;
    const s3: number[] = [];
    s3.length = plot.series[0].x.length;
    const s4: number[] = [];
    s4.length = plot.series[0].x.length;

    for (let i = 0; i < arr.length; i++) {
      s1[i] = 1 + Math.cos(i / 10 + t);
      s2[i] = 2 + Math.cos(i / 10 + t);
      s3[i] = 3 + Math.cos(i / 10 + t);
      s4[i] = 4 + Math.cos(i / 10 + t);
    }
    plot.series[0].y = s1;
    plot.series[1].y = s2;
    plot.series[2].y = s3;
    plot.series[3].y = s4;
    return plot;
  });
});

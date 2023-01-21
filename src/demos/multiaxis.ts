import {
  Plot,
  LineExtras,
  linePlotter,
  ScatterExtras,
  scatterPlotter,
} from "../lib/main";
import { animationLoop } from "./helpers";

const plot = new Plot<LineExtras | ScatterExtras>(
  {
    canvas: document.querySelector<HTMLCanvasElement>("#canvas")!,
    dimensions: {
      width: "auto",
      height: 400,
    },
  },
  {
    padding: 10,
    axes: [
      { scaleId: "x-1" },
      { scaleId: "x-1", position: "secondary" },
      { scaleId: "x-1", position: "secondary" },
      {
        scaleId: "y-1",
        style: { fillStyle: "red", strokeStyle: "red" },
      },
      {
        scaleId: "y-1",
        style: { fillStyle: "red", strokeStyle: "red" },
        tickSize: 20,
      },
      { scaleId: "y-1" },
      { scaleId: "y-1", position: "secondary" },
      { scaleId: "y-1", position: "secondary" },
      { scaleId: "y-1", position: "secondary" },
      { scaleId: "y-1", position: "secondary" },
    ],
    scales: [{ id: "x-1" }, { id: "y-1" }],
    series: [
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotterOptions: {
          plotter: linePlotter,
          style: { lineCap: "round", strokeStyle: "blue" },
        },
        x: new Array(1000).fill(0).map((_, i) => i / 10),
        y: [],
      },
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotterOptions: {
          plotter: scatterPlotter,
          radius: 10,
          style: { lineCap: "round", strokeStyle: "red" },
        },
        x: new Array(100).fill(0).map((_, i) => i),
        y: [],
      },
    ],
  }
);

animationLoop(() => {
  plot.update((plot) => {
    plot.series[0].y = new Array(plot.series[0].x.length)
      .fill(0)
      .map((_, y) => 5 + Math.sin(y / 10 + performance.now() / 100));
    plot.series[1].y = new Array(plot.series[1].x.length)
      .fill(0)
      .map((_, y) => 2 + Math.cos(y / 10 + performance.now() / 100));
    return plot;
  });
});

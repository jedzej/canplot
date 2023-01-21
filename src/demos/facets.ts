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
    padding: 10,
    axes: [{ scaleId: "x-1" }, { scaleId: "y-1" }],
    scales: [{ id: "x-1" }, { id: "y-1" }],
    facets: [
      {
        type: "v-line",
        scaleId: "x-1",
        x: 60,
        style: { strokeStyle: "green" },
      },
      {
        type: "h-line",
        scaleId: "y-1",
        y: 3,
        style: { strokeStyle: "purple" },
      },
      {
        type: "span",
        scaleId: "y-1",
        y: { min: 1, max: 2, scaleId: "y-1" },
        style: { fillStyle: "rgba(255,0,0,0.7)" },
      },
      {
        type: "span",
        layer: "top",
        x: { min: 10, max: 20, scaleId: "x-1" },
        style: { fillStyle: "rgba(255,255,0,0.9)" },
      },
      {
        type: "span",
        layer: "middle",
        x: { min: 20, max: 30, scaleId: "x-1" },
        style: { fillStyle: "rgba(255,255,0,0.9)" },
      },
      {
        type: "span",
        layer: "bottom",
        x: { min: 30, max: 40, scaleId: "x-1" },
        style: { fillStyle: "rgba(255,255,0,0.9)" },
      },
      {
        type: "span",
        x: { min: 70, scaleId: "x-1" },
        style: { fillStyle: "rgba(255,0,255,0.7)" },
      },
      {
        type: "custom",
        draw: (drawContext) => {
          drawContext.ctx.beginPath();
          drawContext.ctx.fillStyle = "green";
          drawContext.ctx.fillRect(10, 10, 100, 100);
          drawContext.ctx.closePath();
        },
      },
      {
        type: "custom",
        layer: "top",
        draw: (drawContext) => {
          drawContext.ctx.beginPath();
          drawContext.ctx.fillStyle = "green";
          drawContext.ctx.fillRect(10, 200, 100, 100);
          drawContext.ctx.closePath();
        },
      },
    ],
    series: [
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: linePlotter({
          style: { lineCap: "round", strokeStyle: "blue" },
        }),
        x: new Array(1000).fill(0).map((_, i) => i / 10),
        y: [],
      },
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: scatterPlotter({
          radius: 10,
          style: { lineCap: "round", strokeStyle: "red" },
        }),
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

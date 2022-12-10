import { Plot } from "../lib/Plot";
import {
  LineExtras,
  linePlotter,
  ScatterExtras,
  scatterPlotter,
} from "../lib/plotters";

const plot = new Plot<LineExtras | ScatterExtras>(
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
      { scaleId: "x-1" },
      { scaleId: "x-1", position: "secondary" },
      { scaleId: "x-1", position: "secondary" },
      {
        scaleId: "y-1",
        style: { strokeFill: { fillStyle: "red", strokeStyle: "red" } },
      },
      {
        scaleId: "y-1",
        style: { strokeFill: { fillStyle: "red", strokeStyle: "red" } },
        tickStyle: { size: 20, line: {  } },
      },
      { scaleId: "y-1" },
      { scaleId: "y-1", position: "secondary" },
      { scaleId: "y-1", position: "secondary" },
      { scaleId: "y-1", position: "secondary" },
      { scaleId: "y-1", position: "secondary" },
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
        plotterOptions: { plotter: linePlotter },
        style: {
          line: { lineCap: "round" },
          strokeFill: { strokeStyle: "blue" },
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
        },
        style: {
          line: {
            lineCap: "round",
          },
          strokeFill: {
            strokeStyle: "red",
          },
        },
        x: new Array(100).fill(0).map((_, i) => i),
        y: [],
      },
    ],
  }
);

const drawLoop = () =>
  requestAnimationFrame(() => {
    plot.incrementalUpdate((draft) => {
      draft.series[0].y = new Array(draft.series[0].x.length)
        .fill(0)
        .map((_, y) => 5 + Math.sin(y / 10 + performance.now() / 100));
      draft.series[1].y = new Array(draft.series[1].x.length)
        .fill(0)
        .map((_, y) => 2 + Math.cos(y / 10 + performance.now() / 100));
    });
    drawLoop();
  });

drawLoop();

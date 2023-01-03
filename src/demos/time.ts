import {
  Plot,
  LineExtras,
  linePlotter,
  ScatterExtras,
  scatterPlotter,
  genTimeTicks,
  genTickFormat,
} from "../lib/main";
import { animationLoop } from "./helpers";

const start = Date.parse("2022-10-22T20:20:22Z");
const end = Date.parse("2022-11-22T20:20:22Z");

const x = [start];
while (x[x.length - 1] < end) {
  x.push(x[x.length - 1] + 24 * 60 * 60 * 1000);
}
const y = x.map((x) => Math.sin(x) + 4);

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
      {
        scaleId: "x-1",
        genTicks: genTimeTicks("Europe/Warsaw"),
        tickFormat: genTickFormat("Europe/Warsaw"),
      },
      {
        scaleId: "x-2",
        genTicks: genTimeTicks("Europe/Warsaw"),
        tickFormat: (_, __, ticks) =>
          ticks.map(
            (tick, i) => `${i % 2 ? "\n" : ""}${new Date(tick).toISOString()}`
          ),
      },
      { scaleId: "y-1" },
    ],
    scales: [
      {
        id: "x-1",
        limits: {
          autorange: false,
          fixed: {
            min: start,
            max: end,
          },
        },
      },
      {
        id: "x-2",
        limits: {
          autorange: false,
          fixed: {
            min: Date.parse("2022-10-22T20:19:00Z"),
            max: Date.parse("2022-10-22T22:20:22Z"),
          },
        },
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
        x,
        y,
      },
    ],
  }
);

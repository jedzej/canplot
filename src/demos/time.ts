import {
  Plot,
  LineExtras,
  linePlotter,
  ScatterExtras,
  scatterPlotter,
  genTimeTicks,
  genTickFormat,
  SeriesBase,
} from "../lib/main";
import { animationLoop } from "./helpers";

const makeSeries = (
  from: number,
  to: number,
  interval: number
): SeriesBase<ScatterExtras>[] => {
  const x = [from];
  while (x[x.length - 1] < to) {
    x.push(x[x.length - 1] + interval);
  }
  const y = x.map((_, i) => (i % 5) + 4);
  return [
    {
      xScaleId: "x-1",
      yScaleId: "y-1",
      plotterOptions: {
        plotter: scatterPlotter,
        radius: 1,
        style: { lineCap: "round", strokeStyle: "red" },
      },
      x,
      y,
    },
  ];
};

const appNode = document.getElementById("app")!;

// daily
const dailyStart = Date.parse("2021-12-22T00:00:00Z");
const dailyEnd = Date.parse("2022-01-18T00:00:00Z");

const canvas1 = document.createElement("canvas");

appNode.appendChild(canvas1);

new Plot<ScatterExtras>(
  { canvas: canvas1, plugins: [], dimensions: { width: "auto", height: 200 } },
  {
    scales: [
      {
        id: "x-1",
        limits: { autorange: false, fixed: { min: dailyStart, max: dailyEnd } },
      },
      {
        id: "y-1",
        limits: { autorange: false, fixed: { min: 0, max: 10 } },
      },
    ],
    axes: [
      {
        scaleId: "x-1",
        genTicks: genTimeTicks("UTC"),
        tickFormat: genTickFormat("UTC"),
        label: "UTC",
      },
      {
        scaleId: "x-1",
        genTicks: genTimeTicks("Asia/Anadyr"),
        tickFormat: genTickFormat("Asia/Anadyr"),
        label: "Asia/Anadyr",
      },
      {
        scaleId: "x-1",
        genTicks: genTimeTicks("Pacific/Easter"),
        tickFormat: genTickFormat("Pacific/Easter"),
        label: "Pacific/Easter",
      },
      { scaleId: "y-1" },
    ],
    series: makeSeries(dailyStart, dailyEnd, 6 * 60 * 60 * 1000),
  }
);

// monthly
const monthlyStart = Date.parse("2020-01-01T00:00:00Z");
const monthlyEnd = Date.parse("2022-01-01T00:00:00Z");

const canvasMonthly = document.createElement("canvas");

appNode.appendChild(canvasMonthly);

new Plot<ScatterExtras>(
  { canvas: canvasMonthly, plugins: [], dimensions: { width: "auto", height: 200 } },
  {
    scales: [
      {
        id: "x-1",
        limits: { autorange: false, fixed: { min: monthlyStart, max: monthlyEnd } },
      },
      {
        id: "y-1",
        limits: { autorange: false, fixed: { min: 0, max: 10 } },
      },
    ],
    axes: [
      {
        scaleId: "x-1",
        genTicks: genTimeTicks("UTC"),
        tickFormat: genTickFormat("UTC"),
        label: "UTC",
      },
      {
        scaleId: "x-1",
        genTicks: genTimeTicks("Asia/Anadyr"),
        tickFormat: genTickFormat("Asia/Anadyr"),
        label: "Asia/Anadyr",
      },
      {
        scaleId: "x-1",
        genTicks: genTimeTicks("Pacific/Easter"),
        tickFormat: genTickFormat("Pacific/Easter"),
        label: "Pacific/Easter",
      },
      { scaleId: "y-1" },
    ],
    series: makeSeries(monthlyStart, monthlyEnd, 30 * 24 * 60 * 60 * 1000),
  }
);
// yearly
const yearlyStart = Date.parse("2002-01-01T00:00:00Z");
const yearlyEnd = Date.parse("2022-01-01T00:00:00Z");

const canvasYearly = document.createElement("canvas");

appNode.appendChild(canvasYearly);

new Plot<ScatterExtras>(
  { canvas: canvasYearly, plugins: [], dimensions: { width: "auto", height: 200 } },
  {
    scales: [
      {
        id: "x-1",
        limits: { autorange: false, fixed: { min: yearlyStart, max: yearlyEnd } },
      },
      {
        id: "y-1",
        limits: { autorange: false, fixed: { min: 0, max: 10 } },
      },
    ],
    axes: [
      {
        scaleId: "x-1",
        genTicks: genTimeTicks("UTC"),
        tickFormat: genTickFormat("UTC"),
        label: "UTC",
      },
      {
        scaleId: "x-1",
        genTicks: genTimeTicks("Asia/Anadyr"),
        tickFormat: genTickFormat("Asia/Anadyr"),
        label: "Asia/Anadyr",
      },
      {
        scaleId: "x-1",
        genTicks: genTimeTicks("Pacific/Easter"),
        tickFormat: genTickFormat("Pacific/Easter"),
        label: "Pacific/Easter",
      },
      { scaleId: "y-1" },
    ],
    series: makeSeries(yearlyStart, yearlyEnd, 365 * 24 * 60 * 60 * 1000),
  }
);

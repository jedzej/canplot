import {
  Plot,
  scatterPlotter,
  genTimeTicks,
  makeTimeTickFormat,
  SeriesBase,
  PlotDrawInputParams,
} from "../lib/main";

const makeSeries = (
  from: number,
  to: number,
  interval: number
): SeriesBase[] => {
  const x = [from];
  while (x[x.length - 1] < to) {
    x.push(x[x.length - 1] + interval);
  }
  const y = x.map((_, i) => (i % 5) + 4);
  return [
    {
      xScaleId: "x-1",
      yScaleId: "y-1",
      plotter: scatterPlotter({
        radius: 1,
        style: { lineCap: "round", strokeStyle: "red" },
      }),
      x,
      y,
    },
  ];
};

const drawConfig: PlotDrawInputParams = {
  padding: { left: 20, right: 40, top: 20, bottom: 0 },
  scales: [{ id: "x-1" }, { id: "y-1" }],
  axes: [
    {
      scaleId: "x-1",
      genTicks: genTimeTicks({ timeZone: "UTC", space: 80 }),
      tickFormat: makeTimeTickFormat({ timeZone: "UTC" }),
      label: "UTC",
      labelAlign: "right",
    },
    {
      scaleId: "x-1",
      genTicks: genTimeTicks({ timeZone: "Europe/Warsaw", space: 80 }),
      tickFormat: makeTimeTickFormat({ timeZone: "Europe/Warsaw" }),
      label: "Europe/Warsaw",
      labelAlign: "right",
    },
    {
      scaleId: "x-1",
      genTicks: genTimeTicks({ timeZone: "Asia/Anadyr", space: 80 }),
      tickFormat: makeTimeTickFormat({ timeZone: "Asia/Anadyr" }),
      label: "Asia/Anadyr",
      labelAlign: "right",
    },
    {
      scaleId: "x-1",
      genTicks: genTimeTicks({ timeZone: "Pacific/Easter", space: 80 }),
      tickFormat: makeTimeTickFormat({ timeZone: "Pacific/Easter" }),
      label: "Pacific/Easter",
      labelAlign: "right",
    },
    { scaleId: "y-1" },
  ],
  series: [],
};

const appNode = document.getElementById("app")!;

// millisecondly

const canvasMillisecondly = document.createElement("canvas");

appNode.appendChild(canvasMillisecondly);

new Plot(
  { canvas: canvasMillisecondly, dimensions: { width: "auto", height: 350 } },
  {
    ...drawConfig,
    series: makeSeries(
      Date.parse("2021-03-27T18:00:00Z"),
      Date.parse("2021-03-27T18:00:05Z"),
      10
    ),
  }
);

// secondly

const canvasSecondly = document.createElement("canvas");

appNode.appendChild(canvasSecondly);

new Plot(
  { canvas: canvasSecondly, dimensions: { width: "auto", height: 350 } },
  {
    ...drawConfig,
    series: makeSeries(
      Date.parse("2021-03-27T18:00:00Z"),
      Date.parse("2021-03-27T18:02:00Z"),
      1000
    ),
  }
);

// minutely

const canvasMinutely = document.createElement("canvas");

appNode.appendChild(canvasMinutely);

new Plot(
  { canvas: canvasMinutely, dimensions: { width: "auto", height: 350 } },
  {
    ...drawConfig,
    series: makeSeries(
      Date.parse("2021-03-27T18:00:00Z"),
      Date.parse("2021-03-27T19:00:00Z"),
      60 * 1000
    ),
  }
);

// hourly spring DST

const canvasHourly1 = document.createElement("canvas");

appNode.appendChild(canvasHourly1);

new Plot(
  { canvas: canvasHourly1, dimensions: { width: "auto", height: 350 } },
  {
    ...drawConfig,
    series: makeSeries(
      Date.parse("2021-03-27T18:00:00Z"),
      Date.parse("2021-03-29T00:00:00Z"),
      15 * 60 * 1000
    ),
  }
);

// hourly autumn DST

const canvasHourly = document.createElement("canvas");

appNode.appendChild(canvasHourly);

new Plot(
  { canvas: canvasHourly, dimensions: { width: "auto", height: 350 } },
  {
    ...drawConfig,
    series: makeSeries(
      Date.parse("2021-10-30T18:00:00Z"),
      Date.parse("2021-11-01T00:00:00Z"),
      15 * 60 * 1000
    ),
  }
);

// daily

const canvas1 = document.createElement("canvas");

appNode.appendChild(canvas1);

new Plot(
  { canvas: canvas1, dimensions: { width: "auto", height: 350 } },
  {
    ...drawConfig,
    series: makeSeries(
      Date.parse("2021-12-22T00:00:00Z"),
      Date.parse("2022-01-18T00:00:00Z"),
      6 * 60 * 60 * 1000
    ),
  }
);

// monthly

const canvasMonthly = document.createElement("canvas");

appNode.appendChild(canvasMonthly);

new Plot(
  { canvas: canvasMonthly, dimensions: { width: "auto", height: 350 } },
  {
    ...drawConfig,
    series: makeSeries(
      Date.parse("2020-01-01T00:00:00Z"),
      Date.parse("2022-01-01T00:00:00Z"),
      30 * 24 * 60 * 60 * 1000
    ),
  }
);

// yearly

const canvasYearly = document.createElement("canvas");

appNode.appendChild(canvasYearly);

new Plot(
  {
    canvas: canvasYearly,
    dimensions: { width: "auto", height: 350 },
  },
  {
    ...drawConfig,
    series: makeSeries(
      Date.parse("2002-01-01T00:00:00Z"),
      Date.parse("2022-01-01T00:00:00Z"),
      365 * 24 * 60 * 60 * 1000
    ),
  }
);
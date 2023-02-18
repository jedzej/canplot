import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  PlotAxis,
  SeriesBase,
  genTimeTicks,
  makeTimeTickFormat,
  scatterPlotter,
} from "@canplot/core";
import {  EmbeddedPlot } from "./helpers";

export default {
  title: "Time/Time Domain",
  args: {
    dimensions: { height: 400 },
    padding: { left: 20, right: 40, top: 20, bottom: 0 },
    scales: [{ id: "x-1" }, { id: "y-1" }],
    axes: [
      {
        scaleId: "x-1",
        genTicks: genTimeTicks({ timeZone: "UTC", space: 80 }),
        tickFormat: makeTimeTickFormat({ timeZone: "UTC" }),
        label: "UTC",
        labelAlign: "end",
      },
      {
        scaleId: "x-1",
        genTicks: genTimeTicks({ timeZone: "Europe/Warsaw", space: 80 }),
        tickFormat: makeTimeTickFormat({ timeZone: "Europe/Warsaw" }),
        label: "Europe/Warsaw",
        labelAlign: "end",
      },
      {
        scaleId: "x-1",
        genTicks: genTimeTicks({ timeZone: "Asia/Anadyr", space: 80 }),
        tickFormat: makeTimeTickFormat({ timeZone: "Asia/Anadyr" }),
        label: "Asia/Anadyr",
        labelAlign: "end",
      },
      {
        scaleId: "x-1",
        genTicks: genTimeTicks({ timeZone: "Pacific/Easter", space: 80 }),
        tickFormat: makeTimeTickFormat({ timeZone: "Pacific/Easter" }),
        label: "Pacific/Easter",
        labelAlign: "end",
      },
      { scaleId: "y-1" },
    ] satisfies PlotAxis[],
    series: [],
  },
} as ComponentMeta<typeof EmbeddedPlot>;

const Template: ComponentStory<typeof EmbeddedPlot> = ({ ...args }) => (
  <EmbeddedPlot {...args} />
);

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
        radius: 5,
        style: { lineCap: "round", strokeStyle: "red" },
      }),
      x,
      y,
    },
  ];
};

export const Miliseconds = Template.bind({});
Miliseconds.args = {
  series: makeSeries(
    Date.parse("2021-03-27T18:00:00Z"),
    Date.parse("2021-03-27T18:00:05Z"),
    10
  ),
};

export const Seconds = Template.bind({});
Seconds.args = {
  series: makeSeries(
    Date.parse("2021-03-27T18:00:00Z"),
    Date.parse("2021-03-27T18:02:00Z"),
    1000
  ),
};

export const Minutes = Template.bind({});
Minutes.args = {
  series: makeSeries(
    Date.parse("2021-03-27T18:00:00Z"),
    Date.parse("2021-03-27T19:00:00Z"),
    60 * 1000
  ),
}; 

export const HoursSpringDST = Template.bind({});
HoursSpringDST.args = {
  series: makeSeries(
    Date.parse("2021-03-27T18:00:00Z"),
    Date.parse("2021-03-29T00:00:00Z"),
    15 * 60 * 1000
  ),
};

export const HoursAutumnDST = Template.bind({});
HoursAutumnDST.args = { 
  series: makeSeries(
    Date.parse("2021-10-30T18:00:00Z"),
    Date.parse("2021-11-01T00:00:00Z"),
    15 * 60 * 1000
  ),
};

export const Days = Template.bind({});
Days.args = {
  series: makeSeries(
    Date.parse("2021-12-22T00:00:00Z"),
    Date.parse("2022-01-18T00:00:00Z"),
    6 * 60 * 60 * 1000
  ),
};

export const Months = Template.bind({});
Months.args = {
  series: makeSeries(
    Date.parse("2020-01-01T00:00:00Z"),
    Date.parse("2022-01-01T00:00:00Z"),
    30 * 24 * 60 * 60 * 1000
  ),
};

export const Years = Template.bind({});
Years.args = {
  series: makeSeries(
    Date.parse("2002-01-01T00:00:00Z"),
    Date.parse("2022-01-01T00:00:00Z"),
    365 * 24 * 60 * 60 * 1000
  ),
};

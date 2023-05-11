import React, { useEffect, useRef } from "react";
import { linePlotter } from "@canplot/core";
import { usePlot } from "@canplot/react";
import { UsePlotMeta, UsePlotStory, animationLoop } from "./helpers";
import { makeGenTicksDefault } from "@canplot/core";

export default {
  title: "Axes",
  args: {
    dimensions: {
      height: 400,
    },
    padding: {
      bottom: 10,
      left: 10,
      top: 10,
      right: 10,
    },
    facets: [],
    inputs: [],
    axes: [
      { scaleId: "x-1" },
      { scaleId: "x-1" },
      { scaleId: "x-1", position: "secondary" },
      { scaleId: "x-1", position: "secondary" },
      { scaleId: "y-1" },
      { scaleId: "y-1" },
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
        plotter: linePlotter({ style: { strokeStyle: "blue" } }),
        x: new Array(1000).fill(0).map((_, i) => i / 10),
        y: [],
      },
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: linePlotter({ style: { strokeStyle: "red" } }),
        x: new Array(100).fill(0).map((_, i) => i),
        y: [],
      },
    ],
  },
} as UsePlotMeta;

const Template: UsePlotStory = ({ callbacks, ...scene }) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const plot = usePlot(ref, scene, callbacks);
  useEffect(() => {
    animationLoop(() => {
      plot.update((scene) => {
        scene.series = [
          {
            xScaleId: "x-1",
            yScaleId: "y-1",
            plotter: linePlotter({ style: { strokeStyle: "blue" } }),
            x: new Array(1000).fill(0).map((_, i) => i / 10),
            y: new Array(scene.series[0].x.length)
              .fill(0)
              .map((_, y) => 9 + Math.sin(y / 10 + performance.now() / 100)),
          },
          {
            xScaleId: "x-1",
            yScaleId: "y-1",
            plotter: linePlotter({ style: { strokeStyle: "red" } }),
            x: new Array(100).fill(0).map((_, i) => i),
            y: new Array(scene.series[1].x.length)
              .fill(0)
              .map((_, y) => 2 + Math.cos(y / 10 + performance.now() / 100)),
          },
        ];
      });
    });
  }, []);
  return <canvas ref={ref} />;
};

export const Default = Template.bind({});

export const NoAxes = Template.bind({});
NoAxes.args = {
  ...NoAxes.args,
  axes: [],
};

export const SingleXPrimary = Template.bind({});
SingleXPrimary.args = {
  ...SingleXPrimary.args,
  axes: [{ scaleId: "x-1" }],
};

export const Zoomed = Template.bind({});
Zoomed.args = {
  ...Zoomed.args,
  zoomWindow: {
    x: { min: 0.25, max: 0.75 },
    y: { min: 0.5, max: 1 },
  },
};

export const SingleXSecondary = Template.bind({});
SingleXSecondary.args = {
  ...SingleXSecondary.args,
  axes: [{ scaleId: "x-1", position: "secondary" }],
};

export const SingleYPrimary = Template.bind({});
SingleYPrimary.args = {
  ...SingleYPrimary.args,
  axes: [{ scaleId: "y-1" }],
};

export const SingleYSecondary = Template.bind({});
SingleYSecondary.args = {
  ...SingleYSecondary.args,
  axes: [{ scaleId: "y-1", position: "secondary" }],
};

export const SingleXAndY = Template.bind({});
SingleXAndY.args = {
  ...SingleXAndY.args,
  axes: [{ scaleId: "x-1" }, { scaleId: "y-1" }],
};

export const Styling = Template.bind({});
Styling.args = {
  ...Styling.args,
  axes: [
    {
      scaleId: "x-1",
      label: "X",
      size: 30,
      tickSize: 20,
      axisStyle: {
        strokeStyle: "pink",
      },
      tickStyle: {
        strokeStyle: "aqua",
        lineWidth: 4,
      },
      tickLabelStyle: {
        fillStyle: "purple",
        font: "16px Arial",
      },
    },
    {
      scaleId: "y-1",
      label: "Y",
      size: 60,
      tickSize: 10,
      axisStyle: {
        strokeStyle: "red",
      },
      tickStyle: {
        strokeStyle: "green",
        lineWidth: 4,
      },
      tickLabelStyle: {
        fillStyle: "blue",
        font: "20px Arial",
      },
    },
  ],
};

export const ManyScalesManyLabels = Template.bind({});
ManyScalesManyLabels.args = {
  ...ManyScalesManyLabels.args,
  scales: [
    { id: "x-1", makeLimits: () => ({ min: -200, max: 200 }) },
    { id: "x-2", makeLimits: () => ({ min: 0, max: 100 }) },
    { id: "x-3", makeLimits: () => ({ min: 0, max: 100 }) },
    { id: "y-1", makeLimits: () => ({ min: 0, max: 10 }) },
    { id: "y-2", makeLimits: () => ({ min: 0, max: 20 }) },
    { id: "y-3", makeLimits: () => ({ min: -30, max: 30 }) },
  ],
  axes: [
    {
      scaleId: "x-1",
      label: "X-1 label 1",
      labelAlign: "start",
    },
    {
      scaleId: "x-1",
      label: "X-1 label 2",
      labelAlign: "center",
      size: 70,
      labelStyle: {
        fillStyle: "red",
        font: "bold 10px Arial",
      },
    },
    {
      scaleId: "x-2",
      label: "X-2 label with negative offset",
      labelAlign: "end",
      labelOffset: -20,
      size: 30,
      labelStyle: {
        fillStyle: "red",
        font: "blue 10px Arial",
        strokeStyle: "blue",
      },
    },
    {
      scaleId: "x-2",
      label: "X-2 secondary",
      position: "secondary",
      size: 30,
    },
    {
      scaleId: "y-1",
      label: "Y-1 label start",
      labelAlign: "start",
      labelOffset: 10,
    },
    {
      scaleId: "y-2",
      label: "Y-2 label center",
      labelAlign: "center",
      labelOffset: 20,
      size: 100,
    },
    {
      scaleId: "y-3",
      label: "Y-3 label end",
      labelAlign: "end",
      labelOffset: -4,
      labelStyle: {
        textAlign: "left",
      },
    },
    {
      scaleId: "y-3",
      label: "Y-3 secondary",
      size: 80,
      position: "secondary",
    },
  ],
};

export const TickFormat = Template.bind({});
TickFormat.args = {
  ...TickFormat.args,
  axes: [
    {
      scaleId: "x-1",
      tickFormat: ({ ticks }) => ticks.map(() => "ab\nbcc\ncdd\ndeee"),
      multilineGap: 10,
    },
    {
      scaleId: "y-1",
      tickFormat: ({ ticks }) => ticks.map(() => "aaaa\nc\nddddd"),
      multilineGap: 8,
      genTicks: makeGenTicksDefault({ space: 40 }),
    },
  ],
};

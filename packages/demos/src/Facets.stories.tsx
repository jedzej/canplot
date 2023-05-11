import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  absoluteSpanFacet,
  linePlotter,
  scaledCrosshairFacet,
  scaledSpanFacet,
  scatterPlotter,
} from "@canplot/core";
import { ReactCanPlot } from "@canplot/react";

export default {
  title: "Facets",
} as Meta;

const Template: Story = () => {
  return (
    <ReactCanPlot
      scene={{
        dimensions: { height: 400 },
        scales: [{ id: "x-1" }, { id: "y-1" }],
        axes: [{ scaleId: "x-1" }, { scaleId: "y-1" }],
        series: [
          {
            xScaleId: "x-1",
            yScaleId: "y-1",
            plotter: linePlotter({
              style: { lineCap: "round", strokeStyle: "blue" },
            }),
            x: new Array(1000).fill(0).map((_, i) => i / 10),
            y: new Array(1000).fill(0).map((_, i) => i / 2),
          },
          {
            xScaleId: "x-1",
            yScaleId: "y-1",
            plotter: scatterPlotter({
              radius: 10,
              style: { lineCap: "round", strokeStyle: "red" },
            }),
            x: new Array(100).fill(0).map((_, i) => i),
            y: new Array(100).fill(0).map((_, i) => i),
          },
        ],
        facets: [
          {
            layer: "top",
            plotter: scaledCrosshairFacet({
              x: {
                scaleId: "x-1",
                value: 60,
              },
              style: { strokeStyle: "green" },
            }),
          },
          {
            layer: "top",
            plotter: scaledCrosshairFacet({
              y: {
                scaleId: "y-1",
                value: 3,
              },
              style: { strokeStyle: "green" },
            }),
          },
          {
            layer: "top",
            plotter: scaledSpanFacet({
              y: {
                scaleId: "y-1",
                min: 100,
                max: 200,
              },
              style: { fillStyle: "rgba(255,0,0,0.7)" },
            }),
          },
          {
            layer: "middle",
            plotter: absoluteSpanFacet({
              x: {
                min: 20,
                max: 40,
              },
              y: {
                min: 20,
                max: 40,
              },
              style: { fillStyle: "rgba(100,100,100,0.9)" },
            }),
          },
        ],
      }}
    />
  );
};

export const Default = Template.bind({});

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { heatmapPlotter } from "@canplot/core";
import { animationLoop, EmbeddedPlot, range } from "./helpers";

export default {
  title: "Plotters/Heatmap",
  component: EmbeddedPlot,
  args: {
    dimensions: { height: 400 },
    plugins: [
      {
        hooks: {
          onInit: ({ plot }) =>
            animationLoop(() => {
              plot.update((plot) => {
                plot.series[0].plotter = heatmapPlotter({
                  tileX: 1,
                  tileY: 1,
                  z: new Array(plot.series[0].x.length)
                    .fill(0)
                    .map((_, y) => 5 + Math.sin(y + performance.now() / 100)),
                });
                return plot;
              });
            }),
        },
      },
    ],
    padding: 10,
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
    scales: [
      { id: "x-1", makeLimits: () => ({ min: 0, max: 5 }) },
      { id: "y-1", makeLimits: () => ({ min: 0, max: 4 }) },
    ],
    series: [
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: heatmapPlotter({
          tileX: 1,
          tileY: 1,

          z: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        }),
        x: [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4],
        y: [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3],
      },
    ],
  },
} as ComponentMeta<typeof EmbeddedPlot>;

const Template: ComponentStory<typeof EmbeddedPlot> = (props) => {
  return <EmbeddedPlot {...props} />;
};

export const Default = Template.bind({});

export const Colorspace = Template.bind({});

Colorspace.args = {
  ...Colorspace.args,
  plugins: [],
  series: [
    {
      xScaleId: "x-1",
      yScaleId: "y-1",
      plotter: heatmapPlotter({
        tileX: 1,
        tileY: 1,
        z: range(0, 20, 1).map((a) => a / 20),
        colorSpace: (z) => [(1-z)*256,80,z*255,255],
      }),
      x: range(0, 20, 1)
        .map((a) => a % 5)
        .sort(),
      y: range(0, 20, 1).map((a) => a % 4),
    },
  ],
};

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { linePlotter } from "@canplot/core";
import { animationLoop, EmbeddedPlot } from "./_helpers";

export default {
  title: "Draw and Plot",
  args: {
    dimensions: { height: 400 },
    plugins: [
      {
        hooks: {
          onInit: ({ plot }) =>
            animationLoop(() => {
              plot.update((plot) => {
                plot.series[0].y = new Array(plot.series[0].x.length)
                  .fill(0)
                  .map(
                    (_, y) => 5 + Math.sin(y / 10 + performance.now() / 100)
                  );
                plot.series[1].y = new Array(plot.series[1].x.length)
                  .fill(0)
                  .map(
                    (_, y) => 2 + Math.cos(y / 10 + performance.now() / 100)
                  );
                return plot;
              });
            }),
        },
      },
    ],

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
} as ComponentMeta<typeof EmbeddedPlot>;

const Template: ComponentStory<typeof EmbeddedPlot> = ({ ...args }) => (
  <EmbeddedPlot {...args} />
);

export const Default = Template.bind({});

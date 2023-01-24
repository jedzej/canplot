import React, { useRef } from "react";
import { Meta, Story } from "@storybook/react";
import { heatmapPlotter } from "@canplot/core";
import { usePlot } from "@canplot/react";
import { animationLoop } from "./_helpers";

export default {
  title: "Plotters/Heatmap",
} as Meta;

const Template: Story = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  usePlot(
    {
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
      canvasRef: ref,
    },
    () => {
      return {
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
      };
    },
    []
  );

  return <canvas ref={ref} />;
};

export const Default = Template.bind({});

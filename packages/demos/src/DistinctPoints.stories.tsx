import React, { useRef } from "react";
import { Meta, Story } from "@storybook/react";
import { linePlotter } from "@canplot/core";
import { usePlot } from "@canplot/react";
import { animationLoop } from "./_helpers";

export default {
  title: "Line with distinct points",
} as Meta;

const Template: Story = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  usePlot(
    {
      dimensions: {
        height: 400,
      },
      plugins: [
        {
          hooks: {
            onInit: ({ plot }) =>
              animationLoop(() => {
                plot.update((plot) => {
                  const t = performance.now() / 1000;
                  const arr: number[] = [];
                  arr.length = plot.series[0].x.length;
                  arr.fill(0);
                  const s1: number[] = [];
                  s1.length = plot.series[0].x.length;
                  const s2: number[] = [];
                  s2.length = plot.series[0].x.length;

                  for (let i = 0; i < arr.length; i++) {
                    s1[i] = 2 + Math.sin(i / 10 + t);
                    s2[i] = 1 + Math.sin(i / 10 + t);
                  }
                  plot.series[0].y = s1;
                  plot.series[1].y = s2;
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
        scales: [{ id: "x-1" }, { id: "y-1" }],
        series: [
          {
            xScaleId: "x-1",
            yScaleId: "y-1",
            plotter: linePlotter({
              showDistrinct: ({ idx, series }) => {
                return (series.y[idx] ?? 0) < 2;
              },
              style: { strokeStyle: "blue" },
            }),
            x: Array(100)
              .fill(0)
              .map((_, i) => i),
            y: [],
          },
          {
            xScaleId: "x-1",
            yScaleId: "y-1",
            plotter: linePlotter({
              distinctDistance: 10,
              style: { strokeStyle: "red" },
            }),
            x: Array(100)
              .fill(0)
              .map((_, i) => i),
            y: [],
          },
        ],
      };
    },
    []
  );

  return <canvas ref={ref} />;
};

export const Default = Template.bind({});

import React, { useRef } from "react";
import { Meta, Story } from "@storybook/react";
import { linePlotter, scatterPlotter } from "@canplot/core";
import { usePlot } from "@canplot/react";
import { animationLoop } from "./helpers";

export default {
  title: "LineAndScatter",
} as Meta;

const Template: Story = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  usePlot(
    {
      dimensions: {
        height: 400,
      },
      canvasRef: ref,
    },
    () => {
      return {
        padding: 20,
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
        scales: [{ id: "x-1" }, { id: "y-1" }, { id: "y-2" }],
        series: [
          {
            xScaleId: "x-1",
            yScaleId: "y-1",
            plotter: linePlotter({ style: { strokeStyle: "blue" } }),
            x: new Array(1000).fill(0).map((_, i) => i / 10),
            y: new Array(1000).fill(0).map((_, i) => i % 10),
          },
          {
            xScaleId: "x-1",
            yScaleId: "y-1",
            plotter: linePlotter({ style: { strokeStyle: "brown" } }),
            x: new Array(1000).fill(0).map((_, i) => i / 10),
            y: new Array(1000).fill(0).map((_, i) => (i % 10) - 5),
          },
          {
            xScaleId: "x-1",
            yScaleId: "y-1",
            plotter: scatterPlotter({ style: { strokeStyle: "red" } }),
            x: new Array(1000).fill(0).map((_, i) => i / 10),
            y: new Array(1000).fill(0).map((_, i) => (i % 10) - 5),
          },
          {
            xScaleId: "x-1",
            yScaleId: "y-1",
            plotter: scatterPlotter({ style: { strokeStyle: "black" } }),
            x: new Array(1000).fill(0).map((_, i) => i / 10),
            y: new Array(1000).fill(0).map((_, i) => (i % 10) - 5),
          },
        ],
        plugins: [
          {
            hooks: {
              onInit: ({ plot }) => {
                return animationLoop(() => {
                  plot.update((scene) => {
                    const t = performance.now() / 100;
                    const arr: number[] = [];
                    arr.length = scene.series[0].x.length;
                    arr.fill(0);
                    const s1: number[] = [];
                    s1.length = scene.series[0].x.length;
                    const s2: number[] = [];
                    s2.length = scene.series[0].x.length;
                    const s3: number[] = [];
                    s3.length = scene.series[0].x.length;
                    const s4: number[] = [];
                    s4.length = scene.series[0].x.length;

                    for (let i = 0; i < arr.length; i++) {
                      s1[i] = 1 + Math.cos(i / 10 + t);
                      s2[i] = 2 + Math.cos(i / 10 + t);
                      s3[i] = 3 + Math.cos(i / 10 + t);
                      s4[i] = 4 + Math.cos(i / 10 + t);
                    }
                    scene.series[0].y = s1;
                    scene.series[1].y = s2;
                    scene.series[2].y = s3;
                    scene.series[3].y = s4;
                    return scene;
                  });
                });
              },
            },
          },
        ],
      };
    },
    []
  );

  return <canvas ref={ref} />;
};

export const Default = Template.bind({});

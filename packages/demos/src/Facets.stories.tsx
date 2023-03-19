import React, { useRef } from "react";
import { Meta, Story } from "@storybook/react";
import {
  Plot,
  Scene,
  absoluteCrosshairFacet,
  hoverPlugin,
  linePlotter,
  scaledSpanFacet,
  scatterPlotter,
  spanSelectPlugin,
} from "@canplot/core";
import { usePlot } from "@canplot/react";

export default {
  title: "Facets",
} as Meta;

const Template: Story = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  usePlot(
    () =>
      new Plot({
        dimensions: { height: 400 },
        canvas: ref.current!,
      }).use(
        "hover",
        hoverPlugin({
          onHover: (data) => {
            console.log("callback", data);
          },
        })
      ).use("spanSelector", spanSelectPlugin({
        onSpanSelect(data){
          console.log(data)
        }
      })),
    (store) => {
      return {
        padding: { top: 10, right: 10, bottom: 10, left: 10 },
        axes: [{ scaleId: "x-1" }, { scaleId: "y-1" }],
        scales: [{ id: "x-1" }, { id: "y-1" }],
        facets: [
          {
            layer: "top",
            plotter: absoluteCrosshairFacet({
              style: { strokeStyle: "blue", lineDashOffset: 4 },
              x: store.hover.position?.canvas.x,
              y: store.hover.position?.canvas.y,
            }),
          },
          {
            plotter: scaledSpanFacet({
              x: {
                min: 10,
                max: 20,
                scaleId: "x-1",
              },
              style: { strokeStyle: "green" },
            }),
            layer: "top",
          },
        ],
        // facets: [
        //   {
        //     plotter: facet
        //     type: "v-line",
        //     scaleId: "x-1",
        //     x: 60,
        //     style: { strokeStyle: "green" },
        //   },
        //   {
        //     type: "h-line",
        //     scaleId: "y-1",
        //     y: 3,
        //     style: { strokeStyle: "purple" },
        //   },
        //   {
        //     type: "span",
        //     scaleId: "y-1",
        //     y: { min: 1, max: 2, scaleId: "y-1" },
        //     style: { fillStyle: "rgba(255,0,0,0.7)" },
        //   },
        //   {
        //     type: "span",
        //     layer: "top",
        //     x: { min: 10, max: 20, scaleId: "x-1" },
        //     style: { fillStyle: "rgba(100,100,100,0.9)" },
        //   },
        //   {
        //     type: "span",
        //     layer: "middle",
        //     x: { min: 20, max: 30, scaleId: "x-1" },
        //     style: { fillStyle: "rgba(100,100,100,0.9)" },
        //   },
        //   {
        //     type: "span",
        //     layer: "bottom",
        //     x: { min: 30, max: 40, scaleId: "x-1" },
        //     style: { fillStyle: "rgba(255,255,0,0.9)" },
        //   },
        //   {
        //     type: "span",
        //     x: { min: 70, scaleId: "x-1" },
        //     style: { fillStyle: "rgba(100,200,10,0.7)" },
        //   },
        //   {
        //     type: "custom",
        //     draw: (frame) => {
        //       frame.ctx.beginPath();
        //       frame.ctx.fillStyle = "green";
        //       frame.ctx.fillRect(10, 10, 100, 100);
        //       frame.ctx.closePath();
        //     },
        //   },
        //   {
        //     type: "custom",
        //     layer: "top",
        //     draw: (frame) => {
        //       frame.ctx.beginPath();
        //       frame.ctx.fillStyle = "green";
        //       frame.ctx.fillRect(10, 200, 100, 100);
        //       frame.ctx.closePath();
        //     },
        //   },
        // ],
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
      } as Scene;
    },
    []
  );

  return <canvas ref={ref} />;
};

export const Default = Template.bind({});

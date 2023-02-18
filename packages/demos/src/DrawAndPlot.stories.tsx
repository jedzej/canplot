import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { linePlotter, makeCursorPlugin } from "@canplot/core";
import { EmbeddedPlot } from "./helpers";
import { usePlot } from "@canplot/react";

export default {
  title: "Draw and Plot",
  args: {},
} as ComponentMeta<typeof EmbeddedPlot>;

const Template: ComponentStory<typeof EmbeddedPlot> = () => {
  const [data, setData] = useState(() => ({
    x: [...Array(100).keys()],
    y: Array(100).fill(0),
  }));

  const [inputCanvasRef] = usePlot(
    {
      dimensions: {
        height: 400,
      },
      plugins: [
        makeCursorPlugin({
          onSpanSelect(event) {
            if (event.phase === "move") {
              const normalizedStart = Math.min(
                event.positionStart.scaled["x-1"],
                event.positionEnd.scaled["x-1"]
              );
              const normalizedEnd = Math.max(
                event.positionEnd.scaled["x-1"],
                event.positionStart.scaled["x-1"]
              );
              setData((data) => ({
                x: data.x,
                y: data.y.map((y, i) => {
                  if (i >= normalizedStart && i <= normalizedEnd) {
                    return event.positionEnd.scaled["y-1"];
                  }
                  return y;
                }),
              }));
            }
          },
        }),
      ],
    },
    () => ({
      padding: 20,
      axes: [{ scaleId: "x-1" }, { scaleId: "y-1" }],
      scales: [
        { id: "x-1" },
        {
          id: "y-1",
          makeLimits: () => ({
            min: -1,
            max: 1,
          }),
        },
      ],
      series: [
        {
          xScaleId: "x-1",
          yScaleId: "y-1",
          plotter: linePlotter({ style: { strokeStyle: "blue" } }),
          x: data.x,
          y: data.y,
        },
      ],
    }),
    [data]
  );

  const [outputCanvasRef] = usePlot(
    {
      dimensions: {
        height: 400,
      },
      plugins: [makeCursorPlugin({})],
    },
    () => ({
      padding: 20,
      axes: [{ scaleId: "x-1" }, { scaleId: "y-1" }],
      scales: [{ id: "x-1" }, { id: "y-1" }],
      series: [
        {
          xScaleId: "x-1",
          yScaleId: "y-1",
          plotter: linePlotter({ style: { strokeStyle: "blue" } }),
          x: data.x,
          y: data.y.map((y) => Math.sin(y * 2)),
        },
      ],
    }),
    [data]
  );

  return (
    <>
      <canvas ref={inputCanvasRef} />
      <canvas ref={outputCanvasRef} />
    </>
  );
};

export const Default = Template.bind({});

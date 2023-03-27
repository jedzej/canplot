import React, { useRef, useState } from "react";
import { Meta, Story } from "@storybook/react";
import {
  linePlotter,
  hoverPlugin,
  absoluteCrosshairFacet,
  Facet,
} from "@canplot/core";
import { makeUsePlot } from "@canplot/react";

export default {
  title: "Cursor",
} as Meta;

const usePlot = makeUsePlot({ dimensions: { height: 400 } }, (plot) =>
  plot.use(hoverPlugin().as("hover"))
);

const Template: Story = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  const [yLimit, setYLimit] = useState(20);

  usePlot(
    (inputs) => {
      const facets: Facet[] = [];
      if (inputs.hover.position) {
        facets.push({
          layer: "top",
          plotter: absoluteCrosshairFacet({
            x: inputs.hover.position.canvas.x,
            y: inputs.hover.position.canvas.y,
          }),
        });
      }

      return {
        facets,
        inputs: {},
        padding: {
          top: 10,
          right: 10,
          bottom: 10,
          left: 10,
        },
        scales: [
          { id: "x-1" },
          { id: "x-2" },
          {
            id: "y-1",
            makeLimits: () => ({
              min: 0,
              max: yLimit,
            }),
          },
          { id: "y-2" },
        ],
        axes: [
          { scaleId: "x-1" },
          { scaleId: "x-2" },
          { scaleId: "y-1" },
          { scaleId: "y-2" },
        ],
        series: [
          {
            xScaleId: "x-1",
            yScaleId: "y-1",
            plotter: linePlotter(),
            x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          },
          {
            xScaleId: "x-1",
            yScaleId: "y-2",
            plotter: linePlotter({
              style: { strokeStyle: "red" },
            }),
            x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 20],
          },
        ],
      };
    },
    [yLimit],
    ref
  );

  return (
    <>
      <div
        id="tooltip"
        style={{
          position: "absolute",
          background: "#ffffffcc",
          border: "solid 1px gray",
          whiteSpace: "pre",
        }}
      />
      <canvas ref={ref} />
      <div>
        <button onClick={() => setYLimit((v) => v - 1)}>-</button>
        <span>{yLimit}</span>
        <button onClick={() => setYLimit((v) => v + 1)}>+</button>
      </div>
    </>
  );
};

export const Default = Template.bind({});

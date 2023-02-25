import React, { useRef } from "react";
import { Meta, Story } from "@storybook/react";
import { linePlotter, makeCursorPlugin } from "@canplot/core";
import { usePlot } from "@canplot/react";

export default {
  title: "Cursor",
} as Meta;

const Template: Story = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  usePlot(
    {
      dimensions: { height: 400 },
      canvasRef: ref,
    },
    () => {
      return {
        padding: 10,
        scales: [{ id: "x-1" }, { id: "x-2" }, { id: "y-1" }, { id: "y-2" }],
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
        plugins: [
          makeCursorPlugin({
            onHover: (event) => {
              const tooltip = document.getElementById("tooltip")!;
              tooltip.style.pointerEvents = "none";
              tooltip.style.userSelect = "none";

              tooltip.innerHTML = JSON.stringify(event.position, null, 2);
              if (event.position) {
                tooltip.style.display = "block";
                tooltip.style.left = `${event.position.screen.x}px`;
                tooltip.style.top = `${event.position.screen.y}px`;
              } else {
                tooltip.style.display = "none";
              }
            },
            onClick: (event) => {
              event.plot.update((old) => ({
                ...old,
                facets: [
                  ...(old.facets ?? []),
                  {
                    type: "v-line",
                    scaleId: "x-1",
                    x: event.position.scaled["x-1"],
                    style: { strokeStyle: "#ff000099" },
                  },
                ],
              }));
            },
            onDblClick: (event) => {
              event.plot.update((old) => ({
                ...old,
                facets: [
                  ...(old.facets ?? []),
                  {
                    type: "h-line",
                    scaleId: "y-1",
                    y: event.position.scaled["y-1"],
                    style: { strokeStyle: "#00444499" },
                  },
                ],
              }));
            },
          }),
        ],
      };
    },
    []
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
    </>
  );
};

export const Default = Template.bind({});

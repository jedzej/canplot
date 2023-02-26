import React, { useRef } from "react";
import { Meta, Story } from "@storybook/react";
import {
  linePlotter,
  makeCursorPlugin,
  absoluteSpanFacet,
  crosshairFacet,
} from "@canplot/core";
import { usePlot } from "@canplot/react";

export default {
  title: "Zoom",
} as Meta;

const zoomPlugin = () => {
  return makeCursorPlugin({
    pluginOpts: {
      initState: () => ({}),
      transformFrame: ({ frame, state }) => {
        const facets = frame.scene.facets ?? [];
        if (state.hoverPosition) {
          facets.push({
            type: "custom",
            plotter: crosshairFacet({
              x: state.hoverPosition.canvas.x,
              y: state.hoverPosition.canvas.y,
              style: { strokeStyle: "rgba(0,0,0,0.5)" },
            }),
          });
        }
        return {
          ...frame,
          scalesLimits: { ...frame.scalesLimits },
          facets,
        };
      },
    },
    spanSelectOptions: {
      mode: "x",
      facetPlotter: (opts) => absoluteSpanFacet(opts),
      threshold: 50,
    },
    onHover: () => {},
    // onSpanSelect: (event) => {
    //   if (event.phase === "end") {
    //     store.limits = {};
    //     for (const scaleId in event.spanStart.scaled) {
    //       if (!helpers.isXScale(scaleId)) {
    //         continue;
    //       }
    //       const start = event.spanStart.scaled[scaleId];
    //       const end = event.spanEnd.scaled[scaleId];
    //       const min = Math.min(start, end);
    //       const max = Math.max(start, end);
    //       store.limits[scaleId] = { min, max };
    //     }
    //     event.plot.redraw();
    //   }
    // },
    // onDblClick: (event) => {
    //   store.limits = {};
    //   event.plot.redraw();
    // },
  });
};

const Template: Story = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  usePlot(
    {
      dimensions: { height: 400 },
      canvasRef: ref,
      plugins: [zoomPlugin()],
    },
    () => {
      return {
        padding: 10,
        scales: [{ id: "x-1" }, { id: "y-1" }, { id: "y-2" }],
        axes: [{ scaleId: "x-1" }, { scaleId: "y-1" }, { scaleId: "y-2" }],
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
            y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          },
        ],
      };
    },
    []
  );

  return (
    <div>
      <div id="tooltip"></div>
      <canvas ref={ref} />
    </div>
  );
};

export const Default = Template.bind({});

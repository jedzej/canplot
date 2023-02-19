import React, { useRef } from "react";
import { Meta, Story } from "@storybook/react";
import {
  Limits,
  Scale,
  linePlotter,
  makeCursorPlugin,
  helpers,
} from "@canplot/core";
import { usePlot } from "@canplot/react";

export default {
  title: "Zoom",
} as Meta;

const Template: Story = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  usePlot(
    {
      dimensions: { height: 400 },
      canvasRef: ref,
      plugins: [
        makeCursorPlugin({
          pluginOpts: {
            initState: () => ({} as Record<Scale["id"], Limits>),
            transformFrame: ({ thisPlugin, frame }) => {
              return {
                ...frame,
                limits: { ...frame.limits, ...thisPlugin.state },
              };
            },
          },
          onSpanSelect: (event) => {
            if (event.phase === "end") {
              const newState = {} as typeof event.thisPlugin.state;
              for (const scaleId in event.spanStart.scaled) {
                if (!helpers.isXScale(scaleId)) {
                  continue;
                }
                const start = event.spanStart.scaled[scaleId];
                const end = event.spanEnd.scaled[scaleId];
                const min = Math.min(start, end);
                const max = Math.max(start, end);
                newState[scaleId] = { min, max };
              }
              event.thisPlugin.setState((old) => ({ ...old, ...newState }));
            }
          },
          onDblClick: (event) => {
            event.thisPlugin.setState(() => ({}));
          },
        }),
      ],
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

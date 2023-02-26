import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  CursorPosition,
  helpers,
  linePlotter,
  makeCursorPlugin,
} from "@canplot/core";
import { animationLoop, EmbeddedPlot } from "./helpers";

const makeLegendPlugin = (legendData: { color: string; label: string }[]) => {
  let originalBottomPadding = 0;
  const legendHeight = 20 * legendData.length;

  return makeCursorPlugin({
    onHover: ({ position }) => {
      self.setState(() => position);
    },
    pluginOpts: {
      initState: () => undefined as CursorPosition | undefined,
      transformInputParams({ inputParams }) {
        const normalizedPadding = helpers.normalizePadding(inputParams.padding);

        originalBottomPadding = normalizedPadding.bottom;
        return {
          ...inputParams,
          padding: {
            ...normalizedPadding,
            bottom: normalizedPadding.bottom + legendHeight,
          },
        };
      },
      transformFrame({ frame, self }) {
        const {
          ctx,
          canvasSize,
          chartArea,
          scene: { series },
        } = frame;

        const dataPoints = helpers.findClosestDataPoint(self.state, frame);

        const facets = frame.scene.facets ?? [];

        facets.push({
          type: "custom",
          plotter() {
            ctx.fillStyle = "red";
            const legendY =
              canvasSize.height - originalBottomPadding - legendHeight;

            const maxW = Math.max(
              ...series.map(
                (_, i) => ctx.measureText(legendData[i].label).width
              )
            );
            const legendWidth = maxW + 60;
            const legendX = chartArea.x + (chartArea.width - legendWidth) / 2;

            ctx.strokeRect(legendX, legendY, legendWidth, legendHeight);

            for (let i = 0; i < series.length; i++) {
              ctx.fillStyle = legendData[i].color;
              ctx.fillRect(legendX, legendY + i * 20, 20, 20);
              ctx.fillStyle = "black";
              ctx.fillText(
                `${legendData[i].label} ${dataPoints[i]?.y?.toFixed(2) ?? ""}`,
                legendX + 22,
                legendY + i * 20 + 15
              );
            }
          },
        });

        for (let i = 0; i < series.length; i++) {
          const datapoint = dataPoints[i];
          if (!datapoint) {
            break;
          }
          facets.push({
            type: "circle",
            layer: "top",
            x: datapoint.x,
            y: datapoint.y,
            radius: 5,
            xScaleId: series[i].xScaleId,
            yScaleId: series[i].yScaleId,
            style: {
              fillStyle: legendData[i].color,
            },
          });
        }

        return {
          ...frame,
          scene: {
            ...(frame.scene ?? {}),
            facets,
          },
        };
      },
    },
  });
};

const colors = ["red", "blue", "orange", "purple"];

export default {
  title: "Legend",
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
      makeLegendPlugin([
        {
          color: colors[0],
          label: "a",
        },
        {
          color: colors[1],
          label: "a",
        },
        {
          color: colors[2],
          label: "a",
        },
      ]),
    ],
    padding: 20,
    series: [
      {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: linePlotter({ style: { strokeStyle: colors[0] } }),
      },
      {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [2, 3, 4, 5, 6, 7, 8, 9, 10, 1],
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: linePlotter({ style: { strokeStyle: colors[1] } }),
      },
      {
        x: [1, 2, 3, 4, 8, 9, 10],
        y: [3, 4, 5, 6, 10, 1, 2],
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: linePlotter({ style: { strokeStyle: colors[2] } }),
      },
    ],
    scales: [{ id: "x-1" }, { id: "y-1" }],
    axes: [
      {
        scaleId: "x-1",
        size: 20,
      },
      {
        scaleId: "y-1",
      },
    ],
  },
} as ComponentMeta<typeof EmbeddedPlot>;

const Template: ComponentStory<typeof EmbeddedPlot> = ({ ...args }) => (
  <EmbeddedPlot {...args} />
);

export const Default = Template.bind({});

import React, { useRef } from "react";
import { Meta, Story } from "@storybook/react";
import { linePlotter, makeCursorPlugin, Facet } from "@canplot/core";
import { usePlot } from "@canplot/react";

export default {
  title: "Plugins/InternalPlugin",
} as Meta;

const useHoverPlugin = () => {
  const plugin = makeCursorPlugin({
    onHover: (e) => {
      const facetsMap: Record<string, Facet> = Object.fromEntries(
        e.frame.inputParams.facets?.map((facet) => [facet.id, facet]) ?? []
      );
      if (!e.position) {
        delete facetsMap["hover-x"];
        delete facetsMap["hover-y"];
      } else {
        facetsMap["hover-x"] = {
          type: "v-line",
          id: "hover-x",
          scaleId: "x-1",
          x: e.position.scaled["x-1"],
        };
        facetsMap["hover-y"] = {
          type: "h-line",
          id: "hover-y",
          scaleId: "y-1",
          y: e.position.scaled["y-1"],
        };
      }
      e.plot.update((old) => {
        old.facets = Object.values(facetsMap);
        return old;
      });
    },
  });
  return plugin;
};

const Template: Story = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  const hoverPlugin = useHoverPlugin();

  usePlot(
    {
      dimensions: { height: 400 },
      plugins: [hoverPlugin],
      canvasRef: ref,
    },
    () => {
      return {
        padding: 20,
        axes: [{ scaleId: "x-1" }, { scaleId: "y-1" }],
        scales: [{ id: "x-1" }, { id: "y-1" }],
        series: [
          {
            xScaleId: "x-1",
            yScaleId: "y-1",
            plotter: linePlotter({ style: { strokeStyle: "blue" } }),
            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          },
        ],
      };
    },
    []
  );

  return <canvas ref={ref} />;
};

export const Default = Template.bind({});

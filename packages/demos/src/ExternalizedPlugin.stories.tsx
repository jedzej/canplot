import React, { useMemo, useRef, useState } from "react";
import { Meta, Story } from "@storybook/react";
import {
  linePlotter,
  makeCursorPlugin,
  CursorPosition,
  Facet,
} from "@canplot/core";
import { usePlot } from "@canplot/react";

export default {
  title: "Plugins/ExternalizedPlugin",
} as Meta;

const useHoverPlugin = () => {
  const [cursorPos, setCursorPos] =
    useState<CursorPosition | undefined>(undefined);

  const [rects, setRects] = useState<
    { start: CursorPosition; end: CursorPosition }[]
  >([]);

  const [selection, setSelection] =
    useState<{ start: CursorPosition; end: CursorPosition } | undefined>(
      undefined
    );
  const facets = useMemo(() => {
    const facets: Facet[] = [];
    if (cursorPos) {
      facets.push({
        type: "v-line",
        scaleId: "x-1",
        x: cursorPos.scaled["x-1"],
      });
      facets.push({
        type: "h-line",
        scaleId: "y-1",
        y: cursorPos.scaled["y-1"],
      });
    }
    if (selection) {
      facets.push({
        type: "span",
        scaleId: "y-1",
        style: { fillStyle: "rgba(0,0,0,0.1)" },
        x: {
          scaleId: "x-1",
          min: selection.start.scaled["x-1"],
          max: selection.end.scaled["x-1"],
        },
        y: {
          scaleId: "y-1",
          min: selection.start.scaled["y-1"],
          max: selection.end.scaled["y-1"],
        },
      });
    }
    for (const rect of rects) {
      facets.push({
        type: "span",
        scaleId: "y-1",
        style: { fillStyle: "rgba(0,0,255,0.1)" },
        x: {
          scaleId: "x-1",
          min: rect.start.scaled["x-1"],
          max: rect.end.scaled["x-1"],
        },
        y: {
          scaleId: "y-1",
          min: rect.start.scaled["y-1"],
          max: rect.end.scaled["y-1"],
        },
      });
    }
    return facets;
  }, [selection, rects, cursorPos]);

  const plugin = makeCursorPlugin({
    onHover: (e) => {
      setCursorPos(e.position);
    },
    onSpanSelect: (e) => {
      switch (e.phase) {
        case "move":
          setSelection({ start: e.spanStart, end: e.spanEnd });
          break;
        case "end":
          setSelection(undefined);
          setRects((oldRects) => [
            ...oldRects,
            { start: e.spanStart, end: e.spanEnd },
          ]);
          break;
      }
    },
  });
  return [plugin, facets] as const;
};

const Template: Story = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  const [hoverPlugin, facets] = useHoverPlugin();

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
        facets,
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
    [facets]
  );

  return <canvas ref={ref} />;
};

export const Default = Template.bind({});

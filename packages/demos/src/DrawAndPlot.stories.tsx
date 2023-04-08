import React, { useEffect, useMemo, useRef, useState } from "react";
import { Meta, Story } from "@storybook/react";
import {
  Facet,
  absoluteCrosshairFacet,
  absoluteSpanFacet,
  linePlotter,
  makePlot,
} from "@canplot/core";
import { range } from "./helpers";

export default {
  title: "Draw and Plot",
  args: {},
} as Meta;

const x = range(0, 100, 0.1);

const Template: Story = () => {
  const [series, setSeries] = useState<{ x: number; y: number }[]>(() =>
    x.map((x) => ({ x, y: 0 }))
  );

  const plot = useMemo(
    () =>
      makePlot({
        cursor: {
          span: {
            onSpan: (data) => {
              if (data.phase === "end") {
                console.log(data);
                setSeries((s) => {
                  const pos = data.start;
                  if (pos.constrained === "out-of-chart") {
                    return s;
                  }
                  return s.map((p) =>
                    p.x < pos.scaled["x-1"]
                      ? p
                      : { x: p.x, y: pos.scaled["y-1"] }
                  );
                });
              }
            },
          },
          hover: {
            propagate: true,
          },
        },
      }),
    []
  );

  const inputRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    plot.attach(inputRef.current!);
  }, []);

  useEffect(() => {
    plot.draw(({ cursor }) => {
      let seriesToShow = series;
      const cpos = cursor.hover.position;
      let seriesToFade = [] as typeof series;
      let seriesToMake = [] as typeof series;

      if (cpos && cpos.constrained === "in-chart") {
        seriesToShow = series.filter((p) => p.x < cpos.scaled["x-1"]);
        seriesToFade = series.filter((p) => p.x >= cpos.scaled["x-1"]);
        seriesToMake = series.map((p) =>
          p.x < cpos.scaled["x-1"] ? p : { x: p.x, y: cpos.scaled["y-1"] }
        );
      }

      return {
        dimensions: { height: 400 },
        facets: [],
        inputs: {},
        padding: {
          top: 10,
          right: 10,
          bottom: 10,
          left: 10,
        },
        scales: [
          { id: "x-1", makeLimits: () => ({ min: 0, max: 100 }) },
          {
            id: "y-1",
            makeLimits: () => ({ min: -10, max: 10 }),
          },
        ],
        axes: [{ scaleId: "x-1" }, { scaleId: "y-1" }],
        series: [
          {
            xScaleId: "x-1",
            yScaleId: "y-1",
            plotter: linePlotter({
              style: { strokeStyle: "rgba(255,100,100)" },
            }),
            x: seriesToShow.map((p) => p.x),
            y: seriesToShow.map((p) => p.y),
          },
          {
            xScaleId: "x-1",
            yScaleId: "y-1",
            plotter: linePlotter({
              style: { strokeStyle: "rgba(255,100,100,0.4)" },
            }),
            x: seriesToFade.map((p) => p.x),
            y: seriesToFade.map((p) => p.y),
          },
          {
            xScaleId: "x-1",
            yScaleId: "y-1",
            plotter: linePlotter({
              style: { strokeStyle: "blue" },
            }),
            x: seriesToMake.map((p) => p.x),
            y: seriesToMake.map((p) => p.y),
          },
        ],
      };
    });
  }, [series]);

  return (
    <>
      <canvas ref={inputRef} />
      <button onClick={() => setSeries(x.map((p) => ({ x: p, y: 0 })))}>
        RESET
      </button>
    </>
  );
};

export const Default = Template.bind({});

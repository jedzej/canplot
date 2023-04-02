import React, { useEffect, useMemo, useRef, useState } from "react";
import { Meta, Story } from "@storybook/react";
import {
  linePlotter,
  hoverPlugin,
  absoluteCrosshairFacet,
  Facet,
  spanSelectPlugin,
  absoluteSpanFacet,
  makePlot,
  dblClickPlugin,
} from "@canplot/core";

export default {
  title: "Cursor",
} as Meta;

const Template: Story = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  const [yLimits, setYLimits] = useState({ min: 0, max: 20 });

  const plot = useMemo(() => {
    return makePlot({})
      .use(hoverPlugin().as("hover"))
      .use(
        dblClickPlugin({
          onClick: () => {
            setYLimits({ min: 0, max: 20 });
          },
        })
      )
      .use(
        spanSelectPlugin({
          onSpanSelect: (data) => {
            if (data.phase === "end") {
              if (data.dimension === "y") {
                if (
                  data.start.constrained !== "out-of-chart" &&
                  data.end.constrained !== "out-of-chart"
                ) {
                  setYLimits({
                    min: Math.min(
                      data.start.scaled["y-1"],
                      data.end.scaled["y-1"]
                    ),
                    max: Math.max(
                      data.start.scaled["y-1"],
                      data.end.scaled["y-1"]
                    ),
                  });
                }
              }
            }
          },
        }).as("spanSelect")
      );
  }, []);

  useEffect(() => {
    plot.attach(ref.current!);
  }, []);

  useEffect(() => {
    plot.draw((inputs) => {
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
      if (inputs.spanSelect.phase === "active") {
        facets.push({
          layer: "top",
          plotter: absoluteSpanFacet({
            style: {
              fillStyle: `rgba(${inputs.spanSelect.ctrlKey ? 200 : 100}, ${
                inputs.spanSelect.altKey ? 200 : 100
              }, ${inputs.spanSelect.shiftKey ? 200 : 100}, 0.2)`,
            },
            x:
              inputs.spanSelect.dimension !== "y"
                ? {
                    min: inputs.spanSelect.start.canvas.x,
                    max: inputs.spanSelect.end.canvas.x,
                  }
                : undefined,
            y:
              inputs.spanSelect.dimension !== "x"
                ? {
                    min: inputs.spanSelect.start.canvas.y,
                    max: inputs.spanSelect.end.canvas.y,
                  }
                : undefined,
          }),
        });
      }

      return {
        dimensions: { height: 400 },
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
            makeLimits: () => yLimits,
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
    });
  }, [yLimits]);

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
        <button
          onClick={() =>
            setYLimits((limits) => ({
              ...limits,
              max: limits.max - 1,
            }))
          }
        >
          -
        </button>
        <span>
          {yLimits.min} - {yLimits.max}
        </span>
        <button
          onClick={() =>
            setYLimits((limits) => ({
              ...limits,
              max: limits.max + 1,
            }))
          }
        >
          +
        </button>
      </div>
    </>
  );
};

export const Default = Template.bind({});

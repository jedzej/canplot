import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import {
  linePlotter,
  absoluteCrosshairFacet,
  absoluteSpanFacet,
  Limits,
  Zoom,
} from "@canplot/core";
import { ReactCanPlot } from "@canplot/react";

export default {
  title: "Cursor",
} as Meta;

const rezoom = (oldZoom: Limits, overlapZoom: Limits) => {
  const overlapSpan = Math.abs(overlapZoom.max - overlapZoom.min);
  const oldZoomSpan = oldZoom.max - oldZoom.min;
  const newZoomSpan = oldZoomSpan * overlapSpan;
  const overlapMin = Math.min(overlapZoom.min, overlapZoom.max);
  const newZoom: Limits = {
    min: oldZoom.min + overlapMin * oldZoomSpan,
    max: oldZoom.min + overlapMin * oldZoomSpan + newZoomSpan,
  };
  return newZoom;
};

const Template: Story = () => {
  const [yLimits, setYLimits] = useState({ min: 0, max: 20 });

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
      <ReactCanPlot
        scene={{
          dimensions: { height: 400 },
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
        }}
        onDblClick={({ frame }) => {
          console.log("aaaa");
          frame.plot.update((scene) => {
            scene.zoom = {
              x: { min: 0, max: 1 },
              y: { min: 0, max: 1 },
            };
          });
        }}
        onHover={(data) => {
          data.frame.plot.update((scene) => {
            scene.facets = scene.facets.filter((f) => f.id !== "HOVER");
            if (data.position) {
              scene.facets.push({
                id: "HOVER",
                layer: "top",
                plotter: absoluteCrosshairFacet({
                  x: data.position.canvas.x,
                  y: data.position.canvas.y,
                }),
              });
            }
          });
        }}
        onSpanSelect={(data) => {
          if (data.phase === "end") {
            data.frame.plot.update((scene) => {
              scene.facets = scene.facets.filter((f) => f.id !== "SPAN");
            });

            if (
              data.start.constrained !== "out-of-chart" &&
              data.end.constrained !== "out-of-chart"
            ) {
              const zoom: Zoom = {
                x:
                  data.dimension === "xy" || data.dimension === "x"
                    ? rezoom(data.frame.zoom.x, {
                        min: data.start.chart.x / data.frame.chartArea.width,
                        max: data.end.chart.x / data.frame.chartArea.width,
                      })
                    : data.frame.zoom.x,
                y:
                  data.dimension === "xy" || data.dimension === "y"
                    ? rezoom(data.frame.zoom.y, {
                        min:
                          1 - data.start.chart.y / data.frame.chartArea.height,
                        max: 1 - data.end.chart.y / data.frame.chartArea.height,
                      })
                    : data.frame.zoom.y,
              };
              console.log(data);
              data.frame.plot.update((scene) => {
                scene.zoom = zoom;
              });
            }
          } else {
            data.frame.plot.update((scene) => {
              scene.facets = scene.facets.filter((f) => f.id !== "SPAN");
              scene.facets.push({
                id: "SPAN",
                layer: "top",
                plotter: absoluteSpanFacet({
                  style: {
                    fillStyle: `rgba(${data.ctrlKey ? 200 : 100}, ${
                      data.altKey ? 200 : 100
                    }, ${data.shiftKey ? 200 : 100}, 0.2)`,
                  },
                  x:
                    data.dimension !== "y"
                      ? {
                          min: data.start.canvas.x,
                          max: data.end.canvas.x,
                        }
                      : undefined,
                  y:
                    data.dimension !== "x"
                      ? {
                          min: data.start.canvas.y,
                          max: data.end.canvas.y,
                        }
                      : undefined,
                }),
              });
            });
          }
        }}
      />
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

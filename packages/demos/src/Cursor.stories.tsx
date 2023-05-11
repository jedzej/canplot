import React, { useRef, useState } from "react";
import {
  linePlotter,
  absoluteCrosshairFacet,
  absoluteSpanFacet,
  helpers,
  ZoomWindow,
} from "@canplot/core";
import { usePlot, usePlotUpdater } from "@canplot/react";
import { UsePlotMeta, UsePlotStory } from "./helpers";

export default {
  title: "Cursor",
  args: {
    dimensions: {
      height: 400,
    },
    axes: [
      { scaleId: "x-1" },
      { scaleId: "y-1" },
    ],
    scales: [{ id: "x-1" }, { id: "y-1" }],
    series: [
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: linePlotter({ style: { strokeStyle: "blue" } }),
        x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: linePlotter({ style: { strokeStyle: "red" } }),
        x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 20],
      },
    ],
  },
} as UsePlotMeta;

const Template: UsePlotStory = (scene) => {
  const [zoomWindow, setZoomWindow] =
    useState<ZoomWindow | undefined>(undefined);

  const ref = useRef<HTMLCanvasElement>(null);
  const plot = usePlot(ref, scene, {
    dblclick: ({ frame }) => {
      frame.plot.update((scene) => {
        scene.zoomWindow = {
          x: { min: 0, max: 1 },
          y: { min: 0, max: 1 },
        };
      });
    },
    hover: (data) => {
      data.frame.plot.update((scene) => {
        scene.facets = scene.facets.filter((f) => f.id !== "HOVER");
        if (data.position?.isWithinChart) {
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
    },
    spanSelect: (e) => {
      e.frame.plot.update((scene) => {
        scene.facets = scene.facets.filter((f) => f.id !== "SPAN");
        switch (e.phase) {
          case "start":
          case "move":
            if (e.phase === "start" || e.phase === "move") {
              scene.facets.push({
                id: "SPAN",
                layer: "top",
                plotter: absoluteSpanFacet({
                  style: {
                    fillStyle: `rgba(${e.ctrlKey ? 200 : 100}, ${
                      e.altKey ? 200 : 100
                    }, ${e.shiftKey ? 200 : 100}, 0.2)`,
                  },
                  x:
                    e.dimensions.x || !e.dimensions.y
                      ? { min: e.startPos.canvas.x, max: e.endPos.canvas.x }
                      : undefined,
                  y:
                    e.dimensions.y || !e.dimensions.x
                      ? { min: e.startPos.canvas.y, max: e.endPos.canvas.y }
                      : undefined,
                }),
              });
            }
            break;
          case "cancel":
            break;
          case "end":
            const zoom: ZoomWindow = {
              x: e.frame.zoomWindow.x,
              y: e.frame.zoomWindow.y,
            };

            if (e.startPos.isWithinChart && e.endPos.isWithinChart) {
              if (e.dimensions.x) {
                zoom.x = helpers.rezoom(zoom.x, {
                  min: e.startPos.chart.x / e.frame.chartArea.width,
                  max: e.endPos.chart.x / e.frame.chartArea.width,
                });
              }
              if (e.dimensions.y) {
                zoom.y = helpers.rezoom(zoom.y, {
                  min: 1 - e.startPos.chart.y / e.frame.chartArea.height,
                  max: 1 - e.endPos.chart.y / e.frame.chartArea.height,
                });
              }
              setZoomWindow(zoom);
            }
            break;
        }
      });
    },
  });

  usePlotUpdater(
    plot,
    (scene) => {
      scene.zoomWindow = zoomWindow ?? {
        x: { min: 0, max: 1 },
        y: { min: 0, max: 1 },
      };
    },
    [zoomWindow]
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
        <button
          onClick={() =>
            setZoomWindow((zoom) => {
              return {
                x: helpers.rezoom(zoom?.x ?? { min: 0, max: 1 }, {
                  min: 0.25,
                  max: 0.75,
                }),
                y: helpers.rezoom(zoom?.y ?? { min: 0, max: 1 }, {
                  min: 0.25,
                  max: 0.75,
                }),
              };
            })
          }
        >
          +
        </button>
        <button onClick={() => setZoomWindow(undefined)}>reset</button>
      </div>
    </>
  );
};

export const Default = Template.bind({});

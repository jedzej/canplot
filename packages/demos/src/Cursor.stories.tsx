import React, { useEffect, useRef, useState } from "react";
import { Meta, Story } from "@storybook/react";
import {
  linePlotter,
  absoluteCrosshairFacet,
  absoluteSpanFacet,
  Scene,
  PlotEvents,
} from "@canplot/core";
import { usePlot, usePlotUpdater } from "@canplot/react";

export default {
  title: "Cursor",
} as Meta;

const ReactCanPlot: React.FC<{
  onHover?: (data: PlotEvents["hover"]) => void;
  onClick?: (data: PlotEvents["click"]) => void;
  onDblClick?: (data: PlotEvents["dblclick"]) => void;
  onSpanSelect?: (data: PlotEvents["spanSelect"]) => void;
  onFrameDrawFinish?: (data: PlotEvents["frameDrawFinish"]) => void;
  scene: Partial<Scene>;
}> = (props) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const plot = usePlot(ref, props.scene);

  usePlotUpdater(
    plot,
    (scene) => {
      Object.assign(scene, props.scene);
    },
    [props.scene]
  );

  useEffect(() => {
    if (!props.onHover) {
      return;
    }
    return plot.on("hover", props.onHover);
  }, [props.onHover]);

  useEffect(() => {
    if (!props.onClick) {
      return;
    }
    return plot.on("click", props.onClick);
  }, [props.onClick]);

  useEffect(() => {
    if (!props.onDblClick) {
      return;
    }
    return plot.on("dblclick", props.onDblClick);
  }, [props.onDblClick]);

  useEffect(() => {
    if (!props.onSpanSelect) {
      return;
    }
    return plot.on("spanSelect", props.onSpanSelect);
  }, [props.onSpanSelect]);
  return <canvas ref={ref} />;
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
        onDblClick={(data) => {
          console.log("aaaa")
          setYLimits({ min: 0, max: 20 })
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

import React, { useEffect, useLayoutEffect } from "react";
import type { PlotConfiguration, PlotDrawFrame, PlotState } from "./lib/types";
import { drawAxes } from "./lib/axes";

function App() {
  return (
    <>
      <CanPlot
        configuration={{
          padding: {
            bottom: 20,
            left: 40,
            right: 20,
            top: 20,
          },
          scales: [
            {
              id: "x",
              axis: {
                position: "bottom",
                size: 20,
                type: "linear",
              },
              origin: "x",
              minmax: [0, 100],
            },
            {
              id: "y",
              axis: {
                position: "left",
                size: 20,
                type: "linear",
              },
              origin: "y",
              minmax: [0, 100],
            },
          ],
        }}
      />
    </>
  );
}

export default App;


const CanPlot: React.FC<{ configuration: PlotConfiguration }> = ({
  configuration,
}) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const rootRef = React.useRef<HTMLDivElement>(null);

  const [plotState, setPlotState] = React.useState<PlotState>({
    width: 0,
    height: 0,
    configuration: configuration,
  });

  const [resizeObserver] = React.useState(
    () =>
      new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect;
          setPlotState((prev) => ({ ...prev, width, height }));
        }
      })
  );

  const [eventManager] = React.useState(() => makeEventsManager());

  useLayoutEffect(() => {
    if (!rootRef.current) return;
    resizeObserver.observe(rootRef.current);
    return () => resizeObserver.disconnect();
  }, [resizeObserver]);

  useEffect(() => {
    if (!canvasRef.current) return;
    console.log("Redraw");
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const canvasWidth = plotState.width;
    const canvasHeight = plotState.height;
    console.log("Canvas size", canvasWidth, canvasHeight, dpr);
    const plotDrawFrame: PlotDrawFrame = {
      canvasSize: { width: canvasWidth, height: canvasHeight },
      ctx,
      dpr,
      padding: configuration.padding,
      scales: configuration.scales.map((scale) => {
        const { minmax, ...scaleRest } = scale;
        if (minmax !== "auto") {
          return { ...scaleRest, minmax };
        }
        return { ...scaleRest, minmax: [0, 1] };
      }),
      chartArea: {
        x: configuration.padding.left,
        y: configuration.padding.top,
        width:
          canvasWidth -
          configuration.padding.left -
          configuration.padding.right,
        height:
          canvasHeight -
          configuration.padding.top -
          configuration.padding.bottom,
      },
    };

    for (const scale of configuration.scales) {
      if (!scale.axis) continue;
      if (scale.origin === "x") {
        if (scale.axis.position === "bottom" || scale.axis.position === "top") {
          plotDrawFrame.chartArea.height = Math.max(0, plotDrawFrame.chartArea.height - scale.axis.size);
          if (scale.axis.position === "top") {
            plotDrawFrame.chartArea.y += scale.axis.size;
          }
        }
      } else {
        if (scale.axis.position === "left" || scale.axis.position === "right") {
          plotDrawFrame.chartArea.width = Math.max(0, plotDrawFrame.chartArea.width - scale.axis.size);
          if (scale.axis.position === "left") {
            plotDrawFrame.chartArea.x += scale.axis.size;
          }
        }
      }
    }
    console.log(plotDrawFrame.chartArea)

    // Clear the canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    console.log("Drawing chart area", plotDrawFrame.chartArea);

    // Draw a rectangle
    ctx.fillStyle = "lightblue";
    ctx.fillRect(
      plotDrawFrame.chartArea.x,
      plotDrawFrame.chartArea.y,
      plotDrawFrame.chartArea.width,
      plotDrawFrame.chartArea.height
    );

    // Draw a circle
    ctx.beginPath();
    ctx.arc(400, 300, 50, 0, Math.PI * 2);
    ctx.fillStyle = "lightgreen";
    ctx.fill();
    ctx.closePath();

    // Draw some text
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Hello Canvas", 350, 50);
    drawAxes(plotDrawFrame);
  }, [resizeObserver, plotState, configuration]);

  return (
    <div
      ref={rootRef}
      style={{
        width: "75vw",
        height: "50vh",
        position: "relative",
        overflow: "hidden",
        border: "1px red solid",
        ...configuration.style,
      }}
    >
      <canvas
        ref={canvasRef}
        width={plotState.width}
        height={plotState.height}
        style={{ border: "1px solid black", inset: 0, position: "absolute" }}
      />
    </div>
  );
};

export { CanPlot };

const makeEventsManager = <T extends Record<string, unknown>>() => {
  const listeners: {
    eventName: keyof T;
    callback: (data: T[any]) => void;
  }[] = [];
  return {
    addEventListener: <K extends keyof T>(
      eventName: K,
      callback: (data: T[K]) => void
    ) => {
      listeners.push({ eventName, callback });
      return () => {
        const index = listeners.findIndex((l) => l.callback === callback);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      };
    },
    dispatchEvent: <K extends keyof T>(eventName: K, data: T[K]) => {
      for (const listener of listeners) {
        if (listener.eventName === eventName) {
          listener.callback(data);
        }
      }
    },
  };
};


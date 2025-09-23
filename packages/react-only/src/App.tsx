import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  type ReactNode,
} from "react";
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
            {
              id: "y2",
              axis: {
                position: "right",
                size: 20,
                type: "linear",
              },
              origin: "y",
              minmax: [-1000, 1000],
            },
          ],
        }}
        renderOver={({ frame }) => {
          return (
            <div style={{ position: "absolute", bottom: 0, left: 0 }}>Over</div>
          );
        }}
      />
    </>
  );
}

export default App;

const CanPlot: React.FC<{
  configuration: PlotConfiguration;
  renderOver?: (params: { frame: PlotDrawFrame }) => ReactNode;
}> = ({ configuration, renderOver }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const overRef = React.useRef<HTMLDivElement>(null);

  const [plotState, setPlotState] = React.useState<PlotState>({
    width: 0,
    height: 0,
    configuration: configuration,
    dpr: window.devicePixelRatio || 1,
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

  const plotDrawFrame = useMemo<PlotDrawFrame | null>(() => {
    if (plotState.width === 0 || plotState.height === 0) return null;
    const dpr = window.devicePixelRatio || 1;
    const result: PlotDrawFrame = {
      canvasSize: { width: plotState.width, height: plotState.height },
      ctx: canvasRef.current!.getContext("2d")!,
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
        x: configuration.padding.left * dpr,
        y: configuration.padding.top * dpr,
        width:
          (plotState.width -
            configuration.padding.left -
            configuration.padding.right) *
          dpr,
        height:
          (plotState.height -
            configuration.padding.top -
            configuration.padding.bottom) *
          dpr,
      },
    };
    for (const scale of configuration.scales) {
      if (!scale.axis) continue;
      if (scale.origin === "x") {
        if (scale.axis.position === "bottom" || scale.axis.position === "top") {
          result.chartArea.height = Math.max(
            0,
            result.chartArea.height - scale.axis.size * dpr
          );
          if (scale.axis.position === "top") {
            result.chartArea.y += scale.axis.size * dpr;
          }
        }
      } else {
        if (scale.axis.position === "left" || scale.axis.position === "right") {
          result.chartArea.width = Math.max(
            0,
            result.chartArea.width - scale.axis.size * dpr
          );
          if (scale.axis.position === "left") {
            result.chartArea.x += scale.axis.size * dpr;
          }
        }
      }
    }
    return result;
  }, [plotState, configuration]);

  useLayoutEffect(() => {
    if (!plotDrawFrame) return;
    console.log("Redraw");
    const ctx = plotDrawFrame.ctx;
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const canvasWidth = plotState.width;
    const canvasHeight = plotState.height;
    console.log("Canvas size", canvasWidth, canvasHeight, dpr);

    console.log(plotDrawFrame.chartArea);

    overRef.current?.style.setProperty(
      "width",
      `${plotDrawFrame.chartArea.width / dpr}px`
    );
    overRef.current?.style.setProperty(
      "height",
      `${plotDrawFrame.chartArea.height / dpr}px`
    );
    overRef.current?.style.setProperty(
      "top",
      `${plotDrawFrame.chartArea.y / dpr}px`
    );
    overRef.current?.style.setProperty(
      "left",
      `${plotDrawFrame.chartArea.x / dpr}px`
    );

    // Clear the canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

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
  }, [resizeObserver, plotState, configuration, plotDrawFrame]);

  const dpr = window.devicePixelRatio || 1;

  return (
    <>
      <span style={{ position: "absolute", left: 0, top: 0, color: "black" }}>
        {dpr}
      </span>
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
          width={plotState.width * dpr}
          height={plotState.height * dpr}
          style={{
            border: "1px solid black",
            inset: 0,
            position: "absolute",
            width: `${plotState.width}px`,
            height: `${plotState.height}px`,
          }}
        />
        <div
          ref={overRef}
          style={{ position: "absolute", backgroundColor: "#ff000022" }}
        >
          {renderOver && plotDrawFrame ? renderOver({ frame: plotDrawFrame }) : null}
        </div>
      </div>
    </>
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

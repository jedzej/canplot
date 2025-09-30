import {
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { makeEventEmitter, type EventEmitter } from "./eventEmitter";
import type { PlotConfiguration, PlotDrawFrame, PlotState } from "./types";
import { drawAxes } from "./axes";

export const CanPlot: React.FC<{
  configuration: PlotConfiguration;
  renderOver?: (params: {
    frame: PlotDrawFrame;
    eventEmitter: EventEmitter;
  }) => ReactNode;
}> = ({ configuration, renderOver }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const overRef = useRef<HTMLDivElement>(null);

  const [plotState, setPlotState] = useState<PlotState>({
    width: 0,
    height: 0,
    configuration: configuration,
    dpr: window.devicePixelRatio || 1,
  });

  const [resizeObserver] = useState(
    () =>
      new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect;
          setPlotState((prev) => ({ ...prev, width, height }));
        }
      })
  );

  const [eventEmitter] = useState(() => makeEventEmitter());

  useLayoutEffect(() => {
    if (!rootRef.current) return;
    resizeObserver.observe(rootRef.current);
    return () => resizeObserver.disconnect();
  }, [resizeObserver]);

  const plotDrawFrame = useMemo<PlotDrawFrame | null>(() => {
    if (plotState.width === 0 || plotState.height === 0) return null;

    const chartAreaCSS: PlotDrawFrame["chartAreaCSS"] = {
      x: configuration.padding.left,
      y: configuration.padding.top,
      width:
        plotState.width -
        configuration.padding.left -
        configuration.padding.right,
      height:
        plotState.height -
        configuration.padding.top -
        configuration.padding.bottom,
    };

    for (const scale of configuration.scales) {
      if (!scale.axis) continue;
      if (scale.origin === "x") {
        if (scale.axis.position === "bottom" || scale.axis.position === "top") {
          chartAreaCSS.height = Math.max(
            0,
            chartAreaCSS.height - scale.axis.size
          );
          if (scale.axis.position === "top") {
            chartAreaCSS.y += scale.axis.size;
          }
        }
      } else {
        if (scale.axis.position === "left" || scale.axis.position === "right") {
          chartAreaCSS.width = Math.max(
            0,
            chartAreaCSS.width - scale.axis.size
          );
          if (scale.axis.position === "left") {
            chartAreaCSS.x += scale.axis.size;
          }
        }
      }
    }

    const dpr = window.devicePixelRatio || 1;

    const chartAreaCanvasPX: PlotDrawFrame["chartAreaCanvasPX"] = {
      x: chartAreaCSS.x * dpr,
      y: chartAreaCSS.y * dpr,
      width: chartAreaCSS.width * dpr,
      height: chartAreaCSS.height * dpr,
    };

    const result: PlotDrawFrame = {
      canvasSize: { width: plotState.width, height: plotState.height },
      ctx: canvasRef.current!.getContext("2d")!,
      dpr,
      padding: configuration.padding,
      scales: configuration.scales.map((scale) => {
        const { minmax, ...scaleRest } = scale;
        if (minmax === "auto") {
          return { ...scaleRest, minmax: [0, 1] };
        }
        return { ...scaleRest, minmax };
      }),
      chartAreaCSS,
      chartAreaCanvasPX,
    };

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

    overRef.current?.style.setProperty(
      "width",
      `${plotDrawFrame.chartAreaCSS.width}px`
    );
    overRef.current?.style.setProperty(
      "height",
      `${plotDrawFrame.chartAreaCSS.height}px`
    );
    overRef.current?.style.setProperty(
      "top",
      `${plotDrawFrame.chartAreaCSS.y}px`
    );
    overRef.current?.style.setProperty(
      "left",
      `${plotDrawFrame.chartAreaCSS.x}px`
    );

    // Clear the canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    console.log("Drawing chart area", plotDrawFrame.chartAreaCanvasPX);

    // Draw a rectangle
    ctx.fillStyle = "lightblue";
    ctx.fillRect(
      plotDrawFrame.chartAreaCanvasPX.x,
      plotDrawFrame.chartAreaCanvasPX.y,
      plotDrawFrame.chartAreaCanvasPX.width,
      plotDrawFrame.chartAreaCanvasPX.height
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
        onClick={(event) => {
          if (!plotDrawFrame) return;
          eventEmitter.dispatchEvent("click", {
            event,
            data: {
              x: event.clientX - plotDrawFrame.chartAreaCSS.x,
              y: event.clientY - plotDrawFrame.chartAreaCSS.y,
              scaled: {},
            },
          });
        }}
        onMouseLeave={() => {
          eventEmitter.dispatchEvent("move", null);
        }}
        onMouseMove={(event) => {
          if (!plotDrawFrame) return;
          eventEmitter.dispatchEvent("move", {
            event,
            data: {
              x: event.clientX - plotDrawFrame.chartAreaCSS.x,
              y: event.clientY - plotDrawFrame.chartAreaCSS.y,
              scaled: {},
            },
          });
        }}
        onMouseDown={(event) => {
          if (!plotDrawFrame) return;
          eventEmitter.dispatchEvent("mousedown", {
            event,
            data: {
              x: event.clientX - plotDrawFrame.chartAreaCSS.x,
              y: event.clientY - plotDrawFrame.chartAreaCSS.y,
              scaled: {},
            },
          });
        }}
        onMouseUp={(event) => {
          if (!plotDrawFrame) return;
          eventEmitter.dispatchEvent("mouseup", {
            event,
            data: {
              x: event.clientX - plotDrawFrame.chartAreaCSS.x,
              y: event.clientY - plotDrawFrame.chartAreaCSS.y,
              scaled: {},
            },
          });
        }}
        onDoubleClick={(event) => {
          if (!plotDrawFrame) return;
          eventEmitter.dispatchEvent("dblclick", {
            event,
            data: {
              x: event.clientX - plotDrawFrame.chartAreaCSS.x,
              y: event.clientY - plotDrawFrame.chartAreaCSS.y,
              scaled: {},
            },
          });
        }}
      >
        {renderOver && plotDrawFrame
          ? renderOver({ frame: plotDrawFrame, eventEmitter })
          : null}
      </div>
    </div>
  );
};

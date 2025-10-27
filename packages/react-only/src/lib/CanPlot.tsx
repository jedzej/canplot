import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import type { PlotConfiguration, PlotDrawFrame, PlotSize, Rect } from "./types";
import { drawAxes } from "./axes";
import { FrameContext } from "./frameContext";

const makeFrame = (
  configuration: PlotConfiguration,
  size: PlotSize,
  canvas: HTMLCanvasElement | undefined | null
): PlotDrawFrame | null => {
  const ctx = canvas?.getContext("2d");
  if (!ctx) return null;

  const dpr = window.devicePixelRatio || 1;

  if (size.width === 0 || size.height === 0) {
    return null;
  }

  const chartAreaCSS: PlotDrawFrame["chartAreaCSS"] = {
    x: configuration.padding.left,
    y: configuration.padding.top,
    width:
      size.width - configuration.padding.left - configuration.padding.right,
    height:
      size.height - configuration.padding.top - configuration.padding.bottom,
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
        chartAreaCSS.width = Math.max(0, chartAreaCSS.width - scale.axis.size);
        if (scale.axis.position === "left") {
          chartAreaCSS.x += scale.axis.size;
        }
      }
    }
  }

  const chartAreaCanvasPX: PlotDrawFrame["chartAreaCanvasPX"] = {
    x: chartAreaCSS.x * dpr,
    y: chartAreaCSS.y * dpr,
    width: chartAreaCSS.width * dpr,
    height: chartAreaCSS.height * dpr,
  };

  const scales: PlotDrawFrame["scales"] = [];

  let currentLeftOffset = configuration.padding.left * dpr;
  let currentRightOffset = ctx.canvas.width - configuration.padding.right * dpr;
  let currentBottomOffset =
    ctx.canvas.height - configuration.padding.bottom * dpr;
  let currentTopOffset = configuration.padding.top * dpr;

  for (const scale of configuration.scales) {
    if (!scale.axis) {
      scales.push({ ...scale, axis: null });
      continue;
    }
    let cssRect: Rect;
    if (scale.origin === "x") {
      switch (scale.axis.position) {
        case "bottom":
          currentBottomOffset -= scale.axis.size * dpr;
          cssRect = {
            x: chartAreaCSS.x,
            y: currentBottomOffset / dpr,
            width: chartAreaCSS.width,
            height: scale.axis.size,
          };
          break;
        case "top":
          currentTopOffset += scale.axis.size * dpr;
          cssRect = {
            x: chartAreaCSS.x,
            y: currentTopOffset / dpr - scale.axis.size,
            width: chartAreaCSS.width,
            height: scale.axis.size,
          };
          break;
        case "left":
        case "right":
          throw new Error("Invalid axis position for x origin");
      }
    } else {
      switch (scale.axis.position) {
        case "left":
          currentLeftOffset += scale.axis.size * dpr;
          cssRect = {
            x: currentLeftOffset / dpr - scale.axis.size,
            y: chartAreaCSS.y,
            width: scale.axis.size,
            height: chartAreaCSS.height,
          };
          break;
        case "right":
          currentRightOffset -= scale.axis.size * dpr;
          cssRect = {
            x: currentRightOffset / dpr,
            y: chartAreaCSS.y,
            width: scale.axis.size,
            height: chartAreaCSS.height,
          };
          break;
        case "top":
        case "bottom":
          throw new Error("Invalid axis position for y origin");
      }
    }
    const canvasRect: Rect = {
      x: cssRect.x * dpr,
      y: cssRect.y * dpr,
      width: cssRect.width * dpr,
      height: cssRect.height * dpr,
    };
    scales.push({
      ...scale,
      axis: {
        ...scale.axis,
        cssRect,
        canvasRect,
      },
    });
  }

  const result: PlotDrawFrame = {
    ctx,
    dpr,
    padding: configuration.padding,
    scales,
    chartAreaCSS,
    chartAreaCanvasPX,
  };

  return result;
};

const drawFrame = (frame: PlotDrawFrame) => {
  frame.ctx.clearRect(0, 0, frame.ctx.canvas.width, frame.ctx.canvas.height);
  drawAxes(frame);
};

export const CanPlot: React.FC<{
  configuration: PlotConfiguration;
  children?: ReactNode;
}> = ({ configuration, children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const plotSize = useSize(rootRef);

  const [frame, setFrame] = useState<PlotDrawFrame | null>(null);

  useLayoutEffect(() => {
    setFrame(makeFrame(configuration, plotSize, canvasRef.current));
  }, [configuration, plotSize]);

  useLayoutEffect(() => {
    if (frame) {
      drawFrame(frame);
    }
  }, [frame]);

  const dpr = window.devicePixelRatio || 1;

  return (
    <div
      ref={rootRef}
      style={{
        width: "75vw",
        height: "50vh",
        position: "relative",
        overflow: "hidden",
        border: "4px red solid",
        left: "50px",
        top: "20px",
      }}
      data-canplotroot
    >
      <span style={{ color: "red" }}>{plotSize.width}</span>
      <canvas
        ref={canvasRef}
        width={plotSize.width * dpr}
        height={plotSize.height * dpr}
        style={{
          border: "1px solid black",
          inset: 0,
          position: "absolute",
          width: `${plotSize.width}px`,
          height: `${plotSize.height}px`,
        }}
      />
      {frame && (
        <FrameContext.Provider value={frame}>{children}</FrameContext.Provider>
      )}
    </div>
  );
};

const useSize = (ref: React.RefObject<HTMLElement | null>) => {
  const [plotSize, setPlotSize] = useState<PlotSize>({
    width: 0,
    height: 0,
  });

  const [resizeObserver] = useState(() => {
    return new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = Math.round(entry.contentRect.width);
        const height = Math.round(entry.contentRect.height);

        setPlotSize((prev) =>
          prev.width !== width || prev.height !== height
            ? { ...prev, width, height }
            : prev
        );
      }
    });
  });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const width = ref.current.clientWidth;
    const height = ref.current.clientHeight;
    setPlotSize((prev) =>
      prev.width !== width || prev.height !== height
        ? { ...prev, width, height }
        : prev
    );
    resizeObserver.observe(ref.current, { box: "border-box" });
    return () => resizeObserver.disconnect();
  }, [resizeObserver, ref]);
  return plotSize;
};

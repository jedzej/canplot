import React, {
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
  forwardRef,
  useMemo,
  useCallback,
} from "react";
import type { PlotConfiguration, PlotDrawFrame, PlotSize, Rect } from "./types";
import { drawAxes } from "./axes";
import { mergeRefs } from "react-merge-refs";
import {
  createDrawPropagateStore,
  DrawPropagateContext,
} from "./contexts/DrawPropagateContext";
import { FrameContext } from "./contexts/FrameContext";
import { RedrawRequestContext } from "./contexts/RedrawRequestContext";
import { CANPLOT_LAYER } from "./FrameDrawer";

export const CanPlot = forwardRef<
  HTMLDivElement,
  {
    configuration: PlotConfiguration;
    children?: ReactNode;
    style?: React.CSSProperties;
    className?: string;
  }
>(({ configuration, children, style, className }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const plotSize = useSize(rootRef);

  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  const frame = useMemo(
    () => makeFrame(configuration, plotSize, ctx),
    [configuration, plotSize, ctx]
  );

  useLayoutEffect(() => {
    setCtx(canvasRef.current?.getContext("2d") || null);
  }, [canvasRef]);

  const dpr = window.devicePixelRatio || 1;

  return (
    <div
      ref={mergeRefs([ref, rootRef])}
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
      data-canplotroot
    >
      <canvas
        ref={canvasRef}
        width={plotSize.width * dpr}
        height={plotSize.height * dpr}
        style={{
          inset: 0,
          position: "absolute",
          width: `${plotSize.width}px`,
          height: `${plotSize.height}px`,
        }}
      />
      {frame && <Updaters frame={frame}>{children}</Updaters>}
    </div>
  );
});

const Updaters: React.FC<{ frame: PlotDrawFrame; children?: ReactNode }> = ({
  frame,
  children,
}) => {
  const drawPropagateStore = useMemo(createDrawPropagateStore, []);
  const [drawVersion, setDrawVersion] = useState(0);
  useLayoutEffect(() => {
    frame?.ctx.clearRect(0, 0, frame.ctx.canvas.width, frame.ctx.canvas.height);
  }, [frame, drawVersion]);

  const frameRef = useRef<PlotDrawFrame | null>(null);
  frameRef.current = frame;

  useLayoutEffect(() => {
    drawPropagateStore.subscribe(() => {
      if (frameRef.current) {
        drawAxes(frameRef.current!);
      }
    }, CANPLOT_LAYER.BOTTOM);
  }, [drawPropagateStore]);

  useLayoutEffect(() => {
    let requestedAnimationFrame: number | null = null;
    requestedAnimationFrame = window.requestAnimationFrame(() => {
      requestedAnimationFrame = null;
      drawPropagateStore.notifyListeners();
    });
    return () => {
      if (requestedAnimationFrame) {
        cancelAnimationFrame(requestedAnimationFrame);
      }
    };
  }, [drawVersion, frame, drawPropagateStore]);

  const onRequestUpdate = useCallback(() => {
    setDrawVersion((v) => v + 1);
  }, [setDrawVersion]);

  return (
    <DrawPropagateContext.Provider value={drawPropagateStore}>
      <RedrawRequestContext.Provider value={onRequestUpdate}>
        <FrameContext.Provider value={frame}>{children}</FrameContext.Provider>
      </RedrawRequestContext.Provider>
    </DrawPropagateContext.Provider>
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

const makeFrame = (
  configuration: PlotConfiguration,
  size: PlotSize,
  ctx: CanvasRenderingContext2D | null
): PlotDrawFrame | null => {
  if (!ctx) {
    return null;
  }
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
  let currentRightOffset = size.width * dpr - configuration.padding.right * dpr;
  let currentBottomOffset =
    size.height * dpr - configuration.padding.bottom * dpr;
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

import type { CanPlot, PlotEvents, Scene } from "@canplot/core";
import { makePlot } from "@canplot/core";
import React, { useEffect, useLayoutEffect, useRef } from "react";

export type UsePlotCallbacks = Partial<
  { [K in keyof PlotEvents]?: (data: PlotEvents[K]) => () => void }
>;

export const usePlot = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  scene: Partial<Scene>,
  callbacks?: UsePlotCallbacks
): CanPlot => {
  const plotRef = useRef<CanPlot>();

  if (!plotRef.current) {
    plotRef.current = makePlot({});
  }

  useLayoutEffect(() => {
    plotRef.current?.init(canvasRef.current!, scene);
    return () => {
      plotRef.current?.deinit();
    };
  }, []);

  useEffect(() => {
    const cleanups: (() => void)[] = [];
    for (const [event, callback] of Object.entries(callbacks ?? {})) {
      if (callback) {
        const cleanup = plotRef.current?.on(
          event as keyof PlotEvents,
          callback as any
        );
        if (cleanup) {
          cleanups.push(cleanup);
        }
      }
    }

    return () => {
      for (const cleanup of cleanups) {
        cleanup();
      }
    };
  }, []);

  return plotRef.current;
};

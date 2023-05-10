import type { CanPlot, Scene } from "@canplot/core";
import { makePlot } from "@canplot/core";
import React, { useLayoutEffect, useRef } from "react";

export const usePlot = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  scene: Partial<Scene>
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

  return plotRef.current;
};

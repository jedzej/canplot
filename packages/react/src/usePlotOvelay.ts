import type { CanPlot } from "@canplot/core";
import { positionDOMOverlay } from "@canplot/core";
import React, { useEffect } from "react";

export const usePlotOverlay = (
  plot: CanPlot,
  overlayRef: React.RefObject<HTMLElement>
) => {
  useEffect(() => {
    const unlisten = plot.on("frameDrawFinish", ({ frame }) => {
      positionDOMOverlay({ element: overlayRef.current!, frame });
    });
    return () => {
      unlisten();
    };
  }, []);
};

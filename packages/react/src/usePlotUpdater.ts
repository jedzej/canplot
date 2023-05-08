import type { CanPlot, SceneUpdater } from "@canplot/core";
import React, { useEffect } from "react";

export const usePlotUpdater = (
  plot: CanPlot,
  sceneUpdater: SceneUpdater,
  deps: React.DependencyList
) => {
  useEffect(() => {
    plot.update(sceneUpdater);
  }, deps);
};

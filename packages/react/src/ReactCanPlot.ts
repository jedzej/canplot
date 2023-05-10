import React, { useEffect, useRef } from "react";
import type { PlotEvents, Scene } from "@canplot/core";
import { usePlot } from "./usePlot";
import { usePlotUpdater } from "./usePlotUpdater";

export type ReactCanPlotProps = {
  onHover?: (data: PlotEvents["hover"]) => void;
  onClick?: (data: PlotEvents["click"]) => void;
  onDblClick?: (data: PlotEvents["dblclick"]) => void;
  onSpanSelect?: (data: PlotEvents["spanSelect"]) => void;
  onFrameDrawFinish?: (data: PlotEvents["frameDrawFinish"]) => void;
  scene: Partial<Scene>;
};

export const ReactCanPlot: React.FC<ReactCanPlotProps> = (props) => {
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

  return React.createElement("canvas", { ref, ...props });
};

import { Plot, StaticConfig, PlotDrawInputParams } from "@canplot/core";
import { useLayoutEffect, useState } from "react";

type UsePlotStaticConfig = Omit<StaticConfig, "canvas"> & {
  canvasRef: React.RefObject<HTMLCanvasElement>;
};

export const usePlot = (
  staticConfig: UsePlotStaticConfig,
  makeParams: () => PlotDrawInputParams,
  deps: any[]
): Plot => {
  const [plot] = useState(() => new Plot(staticConfig, makeParams()));

  useLayoutEffect(() => {
    if (plot.getPhase() === "not-attached") {
      plot.attach(staticConfig.canvasRef.current!);
    } else {
      plot.update(makeParams());
    }
  }, deps);

  useLayoutEffect(() => {
    return () => {
      plot.destroy();
    };
  }, []);

  return plot;
};

import { Plot, PlotStaticConfig, PlotDrawInputParams } from "@canplot/core";
import { RefObject, useLayoutEffect, useRef, useState } from "react";

export type UsePlotStaticConfig = Omit<PlotStaticConfig, "canvas"> & {
  canvasRef?: RefObject<HTMLCanvasElement>;
};

export const usePlot = (
  staticConfig: UsePlotStaticConfig,
  makeParams: () => PlotDrawInputParams,
  deps: any[]
): [RefObject<HTMLCanvasElement>, Plot] => {
  const [plot] = useState(() => new Plot(staticConfig, makeParams()));
  const internalCanvasRef = useRef<HTMLCanvasElement>(null);
  const effectiveCanvasRef = staticConfig.canvasRef || internalCanvasRef;

  useLayoutEffect(() => {
    if (plot.getPhase() === "not-attached") {
      if (effectiveCanvasRef.current) {
        plot.attach(effectiveCanvasRef.current);
      } else {
        console.error("No canvas element provided");
      }
    } else {
      plot.update(makeParams());
    }
  }, deps);

  useLayoutEffect(() => {
    return () => {
      plot.destroy();
    };
  }, []);

  return [effectiveCanvasRef, plot];
};

import { Plot, StaticConfig, PlotDrawInputParams } from "@canplot/core";
import { useLayoutEffect, useRef } from "react";

type UsePlotStaticConfig = Omit<StaticConfig, "canvas"> & {
  canvasRef: React.RefObject<HTMLCanvasElement>;
};

export const usePlot = (
  staticConfig: UsePlotStaticConfig,
  makeParams: () => PlotDrawInputParams,
  deps: any[]
) => {
  const plotRef = useRef<Plot>();

  useLayoutEffect(() => {
    if (!plotRef.current) {
      plotRef.current = new Plot(
        {
          canvas: staticConfig.canvasRef.current!,
          dimensions: staticConfig.dimensions,
          plugins: staticConfig.plugins,
        },
        makeParams()
      );
    } else {
      plotRef.current.update(makeParams());
    }
    return () => {
      plotRef.current?.destroy();
      plotRef.current = undefined;
    };
  }, deps);

  useLayoutEffect(() => {
    return () => {
      plotRef.current?.destroy();
      plotRef.current = undefined;
    };
  }, []);

  return plotRef;
};

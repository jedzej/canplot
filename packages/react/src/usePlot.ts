import { MakeScene, Plot, PlotStaticConfig } from "@canplot/core";
import { RefObject, useLayoutEffect, useRef } from "react";

export type UsePlotStaticConfig = Omit<PlotStaticConfig, "canvas"> & {
  canvasRef?: RefObject<HTMLCanvasElement>;
};

export const usePlot = <S extends Record<string, unknown>, SS extends S>(
  makePlot: () => Plot<SS>,
  makeScene: MakeScene<SS>,
  deps: any[]
) => {
  const plotInstance = useRef<Plot<SS>>();

  useLayoutEffect(() => {
    if (!plotInstance.current) {
      plotInstance.current = makePlot();
    }
    plotInstance.current.draw(makeScene);
  }, deps);

  useLayoutEffect(() => {
    return () => {
      plotInstance.current?.destroy();
    };
  }, []);

  return plotInstance.current;
};

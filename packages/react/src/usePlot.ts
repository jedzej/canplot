import { Plot, PlotStaticConfig, Scene } from "@canplot/core";
import { RefObject, useLayoutEffect, useRef } from "react";

export type UsePlotStaticConfig = Omit<PlotStaticConfig, "canvas"> & {
  canvasRef?: RefObject<HTMLCanvasElement>;
};

export const usePlot = <S extends Record<string, unknown>>(
  makePlot: () => Plot<S>,
  makeScene: (state: S) => Scene,
  deps: any[]
) => {
  const plotInstance = useRef<Plot<S>>();

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

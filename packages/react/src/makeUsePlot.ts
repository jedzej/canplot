import type { CanPlot, MakeScene, PlotStaticConfig } from "@canplot/core";
import { makePlot } from "@canplot/core";
import { useLayoutEffect, useRef } from "react";

export const makeUsePlot = <Inputs = {}, Outputs = {}>(
  staticConfig: Omit<PlotStaticConfig, "canvas">,
  maker?: (plot: CanPlot) => CanPlot<Inputs, Outputs>
) => {
  return (
    makeScene: MakeScene<Inputs, Outputs>,
    deps: any[],
    canvasRef: React.RefObject<HTMLCanvasElement>
  ): CanPlot<Inputs, Outputs> => {
    const plotRef = useRef<CanPlot<Inputs, Outputs>>();

    if (!plotRef.current) {
      const plot = makePlot(staticConfig);
      if (maker) {
        plotRef.current = maker?.(plot);
      } else {
        plotRef.current = plot as CanPlot<Inputs, Outputs>;
      }
    }

    useLayoutEffect(() => {
      plotRef.current?.attach(canvasRef.current!);
      return () => {
        plotRef.current?.detach();
      };
    }, []);

    useLayoutEffect(() => {
      plotRef.current?.draw(makeScene);
    }, deps);
    return plotRef.current;
  };
};

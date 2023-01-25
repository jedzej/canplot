import { PlotDrawInputParams, PlotStaticConfig } from "@canplot/core";
import { usePlot } from "@canplot/react";
import React from "react";

export type PlotStoryProps = Omit<PlotStaticConfig, "canvas"> &
  PlotDrawInputParams;

export const EmbeddedPlot: React.FC<PlotStoryProps> = ({
  dimensions,
  plugins,
  ...plotDrawInputParams
}) => {
  const [ref] = usePlot(
    { dimensions, plugins },
    () => {
      return plotDrawInputParams;
    },
    [plotDrawInputParams]
  );

  return <canvas ref={ref} />;
};

export const animationLoop = (foo: () => void) => {
  let continueLoop = true;
  let request: number | null = null;

  const drawLoop = () => {
    if (!continueLoop) {
      return;
    }
    request = requestAnimationFrame(() => {
      foo();
      drawLoop();
    });
  };

  drawLoop();
  return () => {
    if (request !== null) {
      cancelAnimationFrame(request);
    }
    continueLoop = false;
  };
};

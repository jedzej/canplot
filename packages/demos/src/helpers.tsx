import { PlotDrawInputParams, PlotStaticConfig } from "@canplot/core";
import { usePlot } from "@canplot/react";
import React from "react";

export type PlotStoryProps = Omit<PlotStaticConfig, "canvas"> &
  PlotDrawInputParams;

export const EmbeddedPlot: React.FC<PlotStoryProps> = ({
  dimensions,
  ...plotDrawInputParams
}) => {
  const [ref] = usePlot(
    { dimensions },
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

export const range = (start: number, end: number, step = 1) => {
  const result = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
}
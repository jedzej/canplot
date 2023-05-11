import { Scene, PlotStaticConfig } from "@canplot/core";
import { UsePlotCallbacks } from "@canplot/react";
import { Meta, Story } from "@storybook/react";

export type PlotStoryProps = Omit<PlotStaticConfig, "canvas"> & Scene;

export type UsePlotMeta = Meta<Scene & { callbacks: UsePlotCallbacks }>;

export type UsePlotStory = Story<Scene & { callbacks: UsePlotCallbacks }>;

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
};

import { Scene, PlotStaticConfig } from "@canplot/core";
import { Meta, Story } from "@storybook/react";

export type PlotStoryProps = Omit<PlotStaticConfig, "canvas"> & Scene;

export type UsePlotMeta<
  T extends (makeScene: (...args: any[]) => any, ...args: any[]) => any
> = Meta<ReturnType<Parameters<T>[0]>>;

export type UsePlotStory<
  T extends (makeScene: (...args: any[]) => any, ...args: any[]) => any
> = Story<ReturnType<Parameters<T>[0]>>;


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

import { createContext, useContext, useLayoutEffect, useRef } from "react";
import type { PlotDrawFrame } from "./types";
import {
  clampXPosToChartArea,
  clampYPosToChartArea,
  pointsFit,
  valToPos,
  valToPxDistance,
} from "./helpers";

export const FrameContext = createContext<PlotDrawFrame | null>(null);

export const useFrame = (
  runner?: (params: {
    frame: PlotDrawFrame;
    clampXPosToChartArea: (x: number, space?: "canvas" | "css") => number;
    clampYPosToChartArea: (y: number, space?: "canvas" | "css") => number;
    valToPos: (
      value: number,
      scaleId: string,
      space?: "canvas" | "css"
    ) => number;
    valToPxDistance: (
      value: number,
      scaleId: string,
      space?: "canvas" | "css"
    ) => number;
    valFits: (value: number, scaleId: string) => boolean;
  }) => void
) => {
  const frame = useContext(FrameContext);
  if (!frame) {
    throw new Error("useFrame must be used within a CanPlot component");
  }
  const runnerRef = useRef(runner);
  runnerRef.current = runner;

  useLayoutEffect(() => {
    const foo = runnerRef.current;
    if (!foo) return;
    Promise.resolve().then(() => {
      foo({
        frame,
        clampXPosToChartArea: (x, space) =>
          clampXPosToChartArea(frame, x, space ?? "canvas"),
        clampYPosToChartArea: (y, space) =>
          clampYPosToChartArea(frame, y, space ?? "canvas"),
        valToPos: (value, scaleId, space) =>
          valToPos(frame, value, scaleId, space ?? "canvas"),
        valToPxDistance: (value, scaleId, space) =>
          valToPxDistance(frame, value, scaleId, space ?? "canvas"),
        valFits: (value, scaleId) => pointsFit(frame, value, scaleId),
      });
    });
  }, [frame]);

  return frame;
};

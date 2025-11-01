import { createContext, useContext, useLayoutEffect, useRef } from "react";
import type { PlotDrawFrame } from "./types";

export const FrameContext = createContext<PlotDrawFrame | null>(null);

export const useFrame = (runner?: (frame: PlotDrawFrame) => void) => {
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
      foo(frame);
    });
  }, [frame]);

  return frame;
};

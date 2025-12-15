import {
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { CANPLOT_LAYER, FrameDrawer } from "./FrameDrawer";
import { FrameContext } from "./contexts/FrameContext";
import { RedrawRequestContext } from "./contexts/RedrawRequestContext";
import { DrawPropagateContext } from "./contexts/DrawPropagateContext";

export const useDrawEffect = (
  layer: number | keyof typeof CANPLOT_LAYER,
  runner: (params: FrameDrawer) => void,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deps: ReadonlyArray<any>
) => {
  const frame = useContext(FrameContext);
  const updateRequest = useContext(RedrawRequestContext);
  const drawPropagateContext = useContext(DrawPropagateContext);

  if (!frame || !updateRequest) {
    throw new Error("useFrame must be used within a CanPlot component");
  }

  const [frameDrawer] = useState(() => new FrameDrawer());
  frameDrawer._updateFrame(frame);

  const frameRef = useRef(frameDrawer);
  frameRef.current = frameDrawer;

  const runnerRef = useRef(runner);
  runnerRef.current = runner;

  useLayoutEffect(() => {
    // subscribe to updates
    return drawPropagateContext.subscribe(
      () => {
        runnerRef.current(frameDrawer);
      },
      typeof layer === "number" ? layer : CANPLOT_LAYER[layer]
    );
  }, [drawPropagateContext, layer, frameDrawer]);

  useLayoutEffect(() => {
    updateRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateRequest, ...deps]);
};

export const useFrameState = () => {
  const frame = useContext(FrameContext);
  if (!frame) {
    throw new Error("useFrame must be used within a CanPlot component");
  }
  return useMemo(() => {
    const frameDrawer = new FrameDrawer();
    frameDrawer._updateFrame(frame);
    return frameDrawer;
  }, [frame]);
};

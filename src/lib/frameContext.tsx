import {
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { CANPLOT_LAYER, FrameDrawer } from "./FrameDrawer";
import { FrameContext } from "./contexts/FrameContext";
import { RedrawRequestContext } from "./contexts/RedrawRequestContext";
import { DrawPropagateContext } from "./contexts/DrawPropagateContext";

export const useDrawEffectNoCache = (
  layer: number | keyof typeof CANPLOT_LAYER,
  runner: (params: FrameDrawer) => void,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deps: ReadonlyArray<any>,
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
    const unsubscribe = drawPropagateContext.subscribe(
      () => {
        runnerRef.current(frameDrawer);
      },
      typeof layer === "number" ? layer : CANPLOT_LAYER[layer],
    );
    return () => {
      unsubscribe();
    };
  }, [drawPropagateContext, layer, frameDrawer]);

  useLayoutEffect(() => {
    updateRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateRequest, ...deps]);

  useEffect(() => {
    return () => {
      // request redraw on unmount to clear the layer
      updateRequest();
    };
  }, [updateRequest]);
};

export const useDrawEffect = ({
  layer,
  runner,
  globalAlpha,
  globalCompositeOperation,
  deps,
}: {
  layer: number | keyof typeof CANPLOT_LAYER;
  runner: (params: FrameDrawer) => void;
  globalAlpha?: number;
  globalCompositeOperation?: GlobalCompositeOperation;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deps: ReadonlyArray<any>;
}) => {
  const frame = useContext(FrameContext);
  const updateRequest = useContext(RedrawRequestContext);
  const drawPropagateContext = useContext(DrawPropagateContext);

  if (!frame || !updateRequest) {
    throw new Error(
      "useCachedDrawEffect must be used within a CanPlot component",
    );
  }

  const [frameDrawer] = useState(() => new FrameDrawer());
  frameDrawer._updateFrame(frame);

  const [offscreenFrameDrawer] = useState(() => new FrameDrawer());

  const runnerRef = useRef(runner);
  runnerRef.current = runner;

  const offscreenRef = useRef<{
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
  } | null>(null);
  const needsRedrawRef = useRef(true);

  // Derive a stable key from scale limits so cache invalidates on scale changes
  const scaleLimitsKey = frame.scales
    .map((s) => `${s.id}:${s.min}:${s.max}`)
    .join("|");

  useLayoutEffect(() => {
    const unsubscribe = drawPropagateContext.subscribe(
      () => {
        const canvasWidth = frameDrawer.ctx.canvas.width;
        const canvasHeight = frameDrawer.ctx.canvas.height;
        const sanitizedGlobalAlpha = globalAlpha ?? 1;

        if (canvasWidth === 0 || canvasHeight === 0) return;

        // Ensure offscreen canvas matches main canvas size
        const offscreen = offscreenRef.current;
        if (
          !offscreen ||
          offscreen.canvas.width !== canvasWidth ||
          offscreen.canvas.height !== canvasHeight
        ) {
          const canvas = offscreen?.canvas ?? document.createElement("canvas");
          canvas.width = canvasWidth;
          canvas.height = canvasHeight;
          const offscreenCtx = canvas.getContext("2d")!;
          offscreenRef.current = { canvas, ctx: offscreenCtx };
          needsRedrawRef.current = true;
        }

        if (needsRedrawRef.current) {
          offscreenRef.current!.ctx.clearRect(0, 0, canvasWidth, canvasHeight);
          offscreenFrameDrawer._updateFrame({
            ...frameDrawer.frame,
            ctx: offscreenRef.current!.ctx,
          });
          if (sanitizedGlobalAlpha > 0) {
            runnerRef.current(offscreenFrameDrawer);
          }
          needsRedrawRef.current = false;
        }

        // Copy cached bitmap to main canvas
        const oldGlobalAlpha = frameDrawer.ctx.globalAlpha;
        const oldGlobalCompositeOperation =
          frameDrawer.ctx.globalCompositeOperation;
        frameDrawer.ctx.globalAlpha = sanitizedGlobalAlpha;
        frameDrawer.ctx.globalCompositeOperation =
          globalCompositeOperation ?? "source-over";
        frameDrawer.ctx.drawImage(offscreenRef.current!.canvas, 0, 0);
        frameDrawer.ctx.globalAlpha = oldGlobalAlpha;
        frameDrawer.ctx.globalCompositeOperation = oldGlobalCompositeOperation;
      },
      typeof layer === "number" ? layer : CANPLOT_LAYER[layer],
    );
    return () => {
      unsubscribe();
    };
  }, [
    drawPropagateContext,
    layer,
    frameDrawer,
    offscreenFrameDrawer,
    globalAlpha,
    globalCompositeOperation,
  ]);

  useLayoutEffect(() => {
    needsRedrawRef.current = true;
    updateRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    updateRequest,
    scaleLimitsKey,
    globalAlpha,
    globalCompositeOperation,
    ...deps,
  ]);

  useEffect(() => {
    return () => {
      // request redraw on unmount to clear the layer
      updateRequest();
    };
  }, [updateRequest]);
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

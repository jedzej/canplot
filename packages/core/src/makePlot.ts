import { drawAxes } from "./axes";
import { makeHoverManager, makeSpanSelectManager } from "./cursor";
import { sceneToFrame } from "./frame";

import { drawSeries } from "./series";
import { makeSizeManager } from "./sizeManager";
import {
  CanPlot,
  FacetLayer,
  Frame,
  HoverEventData,
  MakeScene,
  MakeSceneInput,
  PlotPhase,
  Scene,
  SpanSelectEventData,
} from "./types";

type PlotState<
  THoverPropagate extends true = never,
  TSpanPropagate extends true = never
> = {
  canvas?: HTMLCanvasElement | undefined;
  phase: PlotPhase;
  drawScheduled: boolean;
  lastMakeScene?: MakeScene<THoverPropagate, TSpanPropagate>;
  lastScene?: Scene;
  lastFrame?: Frame;
  lastHoverEvent?: HoverEventData;
  lastSpanSelectEvent?: SpanSelectEventData;
};

export const makePlot = <
  THoverPropagate extends true = never,
  TSpanPropagate extends true = never
>(staticConfig: {
  canvas?: HTMLCanvasElement | undefined;
  logger?: boolean | undefined;
  cursor?: {
    hover?: {
      propagate?: THoverPropagate;
      onHover?: (data: HoverEventData) => void;
    };
    span?: {
      propagate?: TSpanPropagate;
      onSpan?: (data: SpanSelectEventData) => void;
    };
    // click?: {
    //   onClick?: (data) => void;
    // };
  };
}): CanPlot<THoverPropagate, TSpanPropagate> => {
  const logger = staticConfig.logger ? console : undefined;

  const state: PlotState<THoverPropagate, TSpanPropagate> = {
    phase: "not-attached",
    drawScheduled: false,
  };

  const sizeManager = makeSizeManager({ onResize: () => redraw() });
  const hoverManager = makeHoverManager({
    getFrame: () => state.lastFrame!,
    onHover: (data) => {
      logger?.log("onHover:", data);
      staticConfig.cursor?.hover?.onHover?.(data);
      if (staticConfig.cursor?.hover?.propagate) {
        state.lastHoverEvent = data;
        redraw();
      }
    },
  });
  const spanSelectManager = makeSpanSelectManager({
    getFrame: () => state.lastFrame!,
    onSpanSelect: (data) => {
      logger?.log("onSpanSelect:", data);
      staticConfig.cursor?.span?.onSpan?.(data);
      if (staticConfig.cursor?.span?.propagate) {
        state.lastSpanSelectEvent = data;
        redraw();
      }
    },
  });

  const getCanvas = (): HTMLCanvasElement => {
    if (!state.canvas) {
      throw new Error("Canvas not attached");
    }
    return state.canvas;
  };

  const getCtx = (): CanvasRenderingContext2D => {
    const ctx = getCanvas().getContext("2d");
    if (!ctx) {
      throw new Error("Failed to get 2d context");
    }
    return ctx;
  };

  const detach = () => {
    if (state.phase === "detached") {
      return;
    }
    state.phase = "detached";
    sizeManager.deinit();
    hoverManager.detach();
    spanSelectManager.detach();
  };

  const redraw = () => {
    logger?.log("redraw:", state.lastMakeScene ? "redraw" : "first draw");
    if (state.lastMakeScene) {
      draw(state.lastMakeScene);
    }
  };

  const attach = (canvas: HTMLCanvasElement) => {
    logger?.log("attach: Attaching to canvas in state", state.phase);
    switch (state.phase) {
      case "not-attached":
        state.canvas = canvas;
        state.phase = "initializing";
        hoverManager.attach(canvas);
        spanSelectManager.attach(canvas);
        redraw();
        break;
      case "initializing":
      case "idle":
      case "drawing":
      case "detached":
        throw new Error(`Invalid phase: ${state.phase}`);
    }
  };

  if (staticConfig.canvas) {
    attach(staticConfig.canvas);
  }

  const draw = (makeScene: MakeScene<THoverPropagate, TSpanPropagate>) => {
    state.lastMakeScene = makeScene;
    logger?.info(`draw: begin in ${state.phase}`);
    switch (state.phase) {
      case "not-attached":
        state.drawScheduled = true;
        break;
      case "initializing":
        state.drawScheduled = true;
        state.phase = "idle";
        break;
      case "detached":
        console.error("Cannot redraw if already destroyed");
        break;
      case "drawing":
        state.drawScheduled = true;
        console.warn("Already drawing, postponing the draw");
        break;
      case "idle":
        state.drawScheduled = true;
        break;
    }
    logger?.info(`draw: apply in ${state.phase}`);
    if (state.phase !== "idle") {
      logger?.info(`draw: skip`);
      return;
    }
    logger?.info(`draw: idle, drawScheduled=${state.drawScheduled}`);

    if (state.drawScheduled) {
      state.drawScheduled = false;
      state.phase = "drawing";
      setTimeout(() => {
        actuallyDraw(makeScene);
        state.phase = "idle";
        if (state.drawScheduled) {
          redraw();
        }
      }, 0);
    }
  };

  const actuallyDraw = (
    makeScene: MakeScene<THoverPropagate, TSpanPropagate>
  ) => {
    const ctx = getCtx();

    const sceneInputs: MakeSceneInput<true, true> = {
      previousScene: state.lastScene,
      cursor: {
        hover: { position: undefined },
        span: { phase: "idle" },
      },
    };
    if (staticConfig.cursor?.hover?.propagate) {
      // todo take actual cursor position
      sceneInputs.cursor.hover.position = state.lastHoverEvent?.position;
    }
    if (staticConfig.cursor?.span?.propagate) {
      // todo take actual cursor position
      sceneInputs.cursor.span = !state.lastSpanSelectEvent ||
      state.lastSpanSelectEvent?.phase === "end"
        ? { phase: "idle" }
        : {
          ...state.lastSpanSelectEvent,
            phase: "active",
          };
    }

    // MAKE SCENE
    const scene = makeScene(sceneInputs);
    state.lastScene = scene;

    const canvas = getCanvas();
    sizeManager.applyDimensions(canvas, scene.dimensions);

    // MAKE FRAME
    const frame = sceneToFrame({
      scene,
      canvasSize: sizeManager.getCanvasSize(),
      ctx,
      dpr: window.devicePixelRatio || 1,
    });
    state.lastFrame = frame;

    // CLEAR CANVAS
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const drawFacets = (frame: Frame, layer: FacetLayer) => {
      for (const facet of frame.facets) {
        if (facet.layer !== layer) {
          continue;
        }
        frame.ctx.save();
        facet.plotter(frame, facet.id);
        frame.ctx.restore();
      }
    };

    if (frame.chartArea.height > 0 && frame.chartArea.width > 0) {
      const untypedFrame = frame as Frame;
      // DRAW BOTTOM FACETS
      drawFacets(untypedFrame, "bottom");

      // DRAW SERIES
      drawSeries(untypedFrame);

      // DRAW MIDDLE FACETS
      drawFacets(untypedFrame, "middle");

      // DRAW AXES
      drawAxes(untypedFrame);

      // DRAW TOP FACETS
      drawFacets(untypedFrame, "top");
    }
  };

  return {
    attach,
    draw,
    detach,
  };
};

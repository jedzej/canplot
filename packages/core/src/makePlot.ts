import { drawAxes } from "./axes";
import {
  makeClickManager,
  makeHoverManager,
  makeSpanSelectManager,
} from "./cursor";
import { makeEventsManager } from "./eventsManager";
import { sceneToFrame } from "./frame";

import { drawSeries } from "./series";
import { makeSizeManager } from "./sizeManager";
import {
  CanPlot,
  ClickEventData,
  DblClickEventData,
  FacetLayer,
  Frame,
  HoverEventData,
  SceneUpdater,
  PlotPhase,
  Scene,
  SpanSelectEventData,
  PlotEvents,
} from "./types";

type PlotState = {
  canvas?: HTMLCanvasElement | undefined;
  phase: PlotPhase;
  drawScheduled: boolean;
  lastMakeScene?: SceneUpdater;
  scene?: Scene;
  lastFrame?: Frame;
  lastHoverEvent?: HoverEventData;
  lastSpanSelectEvent?: SpanSelectEventData;
};

export const makePlot = <
  THoverPropagate extends true = never,
  TSpanPropagate extends true = never
>(staticConfig: {
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
    click?: {
      onClick?: (data: ClickEventData) => void;
      onDblClick?: (data: DblClickEventData) => void;
    };
  };
}): CanPlot => {
  const logger = staticConfig.logger ? console : undefined;

  const state: PlotState = {
    phase: "not-attached",
    drawScheduled: false,
  };

  const eventsManager = makeEventsManager<PlotEvents>()

  const sizeManager = makeSizeManager({ onResize: () => update() });
  const hoverManager = makeHoverManager({
    getFrame: () => state.lastFrame!,
    onHover: (data) => {
      logger?.log("onHover:", data);
      eventsManager.dispatchEvent("hover", data);
    },
  });
  const spanSelectManager = makeSpanSelectManager({
    getFrame: () => state.lastFrame!,
    onSpanSelect: (data) => {
      logger?.log("onSpanSelect:", data);
      eventsManager.dispatchEvent("spanSelect", data);
    },
  });
  const clickManager = makeClickManager({
    getFrame: () => state.lastFrame!,
    onClick: (data) => {
      logger?.log("onClick:", data);
      eventsManager.dispatchEvent("click", data);
    },
    onDblClick: (data) => {
      logger?.log("onDblClick:", data);
      eventsManager.dispatchEvent("dblclick", data);
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

  const deinit = () => {
    if (state.phase === "detached") {
      return;
    }
    state.phase = "detached";
    sizeManager.deinit();
    hoverManager.detach();
    spanSelectManager.detach();
    clickManager.detach();
  };

  const init = (canvas: HTMLCanvasElement, initialScene: Partial<Scene>) => {
    logger?.log("attach: Attaching to canvas in state", state.phase);
    switch (state.phase) {
      case "not-attached":
        state.canvas = canvas;
        state.phase = "initializing";
        state.scene = {
          axes: [],
          dimensions: { height: "auto", width: "auto" },
          facets: [],
          padding: { bottom: 0, left: 0, right: 0, top: 0 },
          scales: [],
          series: [],
          zoom: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } },
          ...initialScene,
        };
        hoverManager.attach(canvas);
        spanSelectManager.attach(canvas);
        clickManager.attach(canvas);
        update();
        break;
      case "initializing":
      case "idle":
      case "drawing":
      case "detached":
        throw new Error(`Invalid phase: ${state.phase}`);
    }
  };

  const update = (sceneUpdater?: SceneUpdater) => {
    sceneUpdater?.(state.scene!)
    logger?.info(`update: begin in ${state.phase}`);
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
        draw();
        state.phase = "idle";
      }, 0);
    }
  };

  const draw = () => {
    const ctx = getCtx();

    // MAKE SCENE
    if (!state.scene) {
      throw new Error("No last scene");
    }

    const canvas = getCanvas();
    sizeManager.applyDimensions(canvas, state.scene.dimensions);

    // MAKE FRAME
    const frame = sceneToFrame({
      plot: plotInstance,
      scene: state.scene,
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
      // DRAW BOTTOM FACETS
      drawFacets(frame, "bottom");

      // DRAW SERIES
      drawSeries(frame);

      // DRAW MIDDLE FACETS
      drawFacets(frame, "middle");

      // DRAW AXES
      drawAxes(frame);

      // DRAW TOP FACETS
      drawFacets(frame, "top");
    }

    eventsManager.dispatchEvent("frameDrawFinish", { frame, scene: state.scene });
  };
  const plotInstance: CanPlot = {
    init,
    update,
    deinit,
    on: eventsManager.addEventListener,
  }

  return plotInstance;
};

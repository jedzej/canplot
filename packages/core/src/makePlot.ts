import { drawAxes } from "./axes";
import { isXScale } from "./helpers";
import { makeAutoLimits } from "./limits";
import { drawSeries } from "./series";
import {
  Dimensions,
  FacetLayer,
  Flatten,
  Frame,
  MakePlugin,
  MakeScene,
  PlotBuilderPlugin,
  PlotStaticConfig,
  Scene,
  Size,
} from "./types";

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

const clearCanvas = ({ ctx, canvasSize: { width, height } }: Frame) => {
  ctx.clearRect(0, 0, width, height);
};

const makeFrame = (scene: Scene, ctx: CanvasRenderingContext2D): Frame => {
  const padding = scene.padding;
  let leftAxesSize = 0;
  let rightAxesSize = 0;
  let bottomAxesSize = 0;
  let topAxesSize = 0;
  for (const axis of scene.axes) {
    const size = axis.size ?? 50;
    const position = axis.position ?? "primary";
    if (isXScale(axis.scaleId)) {
      if (position === "primary") {
        bottomAxesSize += size;
      } else {
        topAxesSize += size;
      }
    } else {
      if (position === "primary") {
        leftAxesSize += size;
      } else {
        rightAxesSize += size;
      }
    }
  }

  const canvas = ctx.canvas;

  const canvasSize = {
    width: canvas.width,
    height: canvas.height,
  };

  const frameNoScales: Omit<Frame, "scales"> = {
    ctx,
    chartArea: {
      x: leftAxesSize + padding.left,
      y: topAxesSize + padding.top,
      width:
        canvasSize.width -
        leftAxesSize -
        rightAxesSize -
        padding.left -
        padding.right,
      height:
        canvasSize.height -
        topAxesSize -
        bottomAxesSize -
        padding.top -
        padding.bottom,
    },
    padding,
    canvasSize,
    axes: scene.axes,
    facets: scene.facets,
    series: scene.series,
  };

  return {
    ...frameNoScales,
    scales: scene.scales.map((scale) => {
      return {
        id: scale.id,
        limits: (scale.makeLimits ?? makeAutoLimits)({
          frame: frameNoScales,
          scaleId: scale.id,
        }),
      };
    }),
  };
};

export class CanPlot<S extends Record<string, unknown>> {
  #state: S = {} as S;
  #plugins: PlotBuilderPlugin<string, any, any>[] = [];
  #pluginsInitializers: MakePlugin<string, any, any>[] = [];
  #dimensions: Required<Dimensions>;
  #lastMakeScene?: MakeScene<S>;
  #scheduledDraw = false;
  #expectedSize: Size | undefined;
  #deinitCallbacks: (() => void)[] = [];
  #canvas: HTMLCanvasElement | undefined = undefined;
  #phase: "not-attached" | "initializing" | "idle" | "drawing" | "destroyed" =
    "not-attached";

  parentResizeObserver: ResizeObserver = new ResizeObserver((entries) => {
    for (const { contentRect } of entries) {
      const width =
        this.#dimensions.width === "auto"
          ? contentRect.width
          : this.#dimensions.width;
      const height =
        this.#dimensions.height === "auto"
          ? contentRect.height
          : this.#dimensions.height;
      if (
        this.#expectedSize?.width === width &&
        this.#expectedSize?.height === height
      ) {
        return;
      }
      this.#expectedSize = { width, height };
      if (this.#phase === "not-attached") {
        this.#phase = "initializing";
      }
      this.#redraw();
    }
  });

  constructor(staticConfig: PlotStaticConfig) {
    const { width = "auto", height = "auto" } = staticConfig.dimensions ?? {};
    this.#dimensions = { width, height };

    if (staticConfig.canvas) {
      this.attach(staticConfig.canvas);
    }
  }

  getPhase() {
    return this.#phase;
  }

  #redraw() {
    if (this.#lastMakeScene) {
      this.draw(this.#lastMakeScene);
    }
  }

  attach(canvas: HTMLCanvasElement) {
    switch (this.#phase) {
      case "not-attached":
        this.#canvas = canvas;
        const { width, height } = this.#dimensions;
        if (typeof width === "number" && Number.isFinite(width)) {
          canvas.width = width;
        }
        if (typeof height === "number" && Number.isFinite(height)) {
          canvas.height = height;
        }
        if (width === "auto" || height === "auto") {
          this.parentResizeObserver.observe(canvas.parentElement!);
        } else {
          this.#phase = "initializing";
          this.#redraw();
        }
        break;
      case "initializing":
      case "idle":
      case "drawing":
      case "destroyed":
        throw new Error(`Invalid phase: ${this.#phase}`);
    }
  }

  getCanvas(): HTMLCanvasElement {
    if (!this.#canvas) {
      throw new Error("Canvas not attached");
    }
    return this.#canvas;
  }

  getSize(): Size {
    if (!this.#expectedSize) {
      throw new Error("Invariant violation: expectedSize is undefined");
    }
    return this.#expectedSize;
  }

  use<ID extends string, PS>(
    makePlugin: MakePlugin<ID, PS, S>
  ): CanPlot<Flatten<S & Record<ID, PS>>> {
    this.#pluginsInitializers.push(makePlugin as any);
    return this as CanPlot<Flatten<S & Record<ID, PS>>>;
  }

  #setPluginState(id: keyof S, state: any, redraw = true) {
    this.#state[id] = state;
    if (redraw) {
      this.#redraw();
    }
  }

  #initializePlugins() {
    const idMap = new Map<any, keyof S>();
    for (const pluginInitializer of this.#pluginsInitializers) {
      const plugin = pluginInitializer({
        getGlobalState: () => this.#state,
        getPluginState: () => this.#state[idMap.get(pluginInitializer)!],
        setPluginState: (state) => {
          this.#setPluginState(idMap.get(pluginInitializer)!, state);
        },
        ctx: this.getCanvas().getContext("2d")!,
      });
      idMap.set(pluginInitializer, plugin.id);
      this.#state[plugin.id as keyof S] = plugin.initialState;
      this.#plugins.push(plugin);
    }
  }

  draw(makeScene: MakeScene<S>) {
    this.#lastMakeScene = makeScene;
    console.log(`draw in ${this.#phase}`);
    switch (this.#phase) {
      case "not-attached":
        this.#scheduledDraw = true;
        break;
      case "initializing":
        this.#initializePlugins();
        this.#scheduledDraw = true;
        this.#phase = "idle";
        break;
      case "destroyed":
        console.error("Cannot redraw if already destroyed");
        break;
      case "drawing":
        this.#scheduledDraw = true;
        console.warn("Already drawing, postponing the draw");
        break;
      case "idle":
        this.#phase = "drawing";
        this.#actuallyDraw(makeScene);
        this.#phase = "idle";
        break;
    }
    if (this.#phase === "idle" && this.#scheduledDraw) {
      this.#scheduledDraw = false;
      this.draw(makeScene);
    }
  }

  #actuallyDraw(makeScene: MakeScene<S>) {
    const canvas = this.getCanvas();
    const size = this.getSize();

    if (canvas.width !== size.width || canvas.height !== size.height) {
      canvas.width = size.width;
      canvas.height = size.height;
    }

    const initialScene = makeScene(this.#state, size);

    // TRANSFORM SCENE
    const scene = this.#plugins.reduce(
      (scene, plugin) =>
        plugin.transformScene?.({
          id: plugin.id,
          scene,
          ctx: this.getCanvas().getContext("2d")!,
          getGlobalState: () => this.#state,
          getPluginState: () => this.#state[plugin.id as keyof S],
        }) ?? scene,
      initialScene
    );

    // TRANSFORM FRAME
    const initialFrame = makeFrame(scene, this.getCanvas().getContext("2d")!);
    const frame = this.#plugins.reduce(
      (frame, plugin) =>
        plugin.transformFrame?.({
          id: plugin.id,
          frame,
          scene,
          ctx: this.getCanvas().getContext("2d")!,
          getGlobalState: () => this.#state,
          getPluginState: () => this.#state[plugin.id as keyof S],
        }) ?? initialFrame,
      initialFrame
    );

    clearCanvas(frame);

    // ON DRAW
    for (const plugin of this.#plugins) {
      plugin.onDraw?.({
        id: plugin.id,
        frame,
        scene,
        ctx: this.getCanvas().getContext("2d")!,
        getGlobalState: () => this.#state,
        getPluginState: () => this.#state[plugin.id as keyof S],
        setPluginState: (newPluginState) => {
          this.#setPluginState(plugin.id as keyof S, newPluginState, false);
        },
      });
    }

    if (frame.chartArea.height <= 0 || frame.chartArea.width <= 0) {
      return;
    }

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
}

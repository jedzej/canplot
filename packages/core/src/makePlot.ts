import { isXScale } from "./helpers";
import { makeAutoLimits } from "./limits";
import { drawSeries } from "./series";
import {
  Dimensions,
  Facet,
  FacetLayer,
  Limits,
  MakeLimits,
  NormalizedPadding,
  PlotAxis,
  PlotStaticConfig,
  Scale,
  SeriesBase,
  Size,
  XScaleId,
  YScaleId,
} from "./types";

type SceneScale = {
  id: XScaleId | YScaleId;
  makeLimits?: MakeLimits | undefined;
};

type FrameScale = {
  id: XScaleId | YScaleId;
  limits: Limits;
};

type Facet = {
  layer: FacetLayer;
  id?: string;
  plotter: (frame: Frame, id?: string) => void;
};

type Scene = {
  padding: NormalizedPadding;
  axes: PlotAxis[];
  scales: SceneScale[];
  facets: Facet[];
  series: SeriesBase[];
};

type Frame = {
  ctx: CanvasRenderingContext2D;
  canvasSize: Size;
  chartArea: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  padding: NormalizedPadding;
  axes: PlotAxis[];
  scales: FrameScale[];
  facets: Facet[];
  series: SeriesBase[];
};

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

const drawSeries = (frame: Frame) => {
  const { ctx, series, scales } = frame;
  ctx.save();

  for (const singleSeries of series) {
    const xScale = scales.find((scale) => scale.id === singleSeries.xScaleId);
    const yScale = scales.find((scale) => scale.id === singleSeries.yScaleId);
    if (!xScale || !yScale) {
      continue;
    }
    // singleSeries.plotter?.(frame, series, xScale, yScale);
  }

  frame.ctx.restore();
};

type PlotBuilderPlugin<ID extends string, PS, S = unknown> = {
  id: ID;
  initialState: PS;
  transformScene?: (opts: {
    id: ID;
    ctx: CanvasRenderingContext2D;
    scene: Scene;
    getGlobalState: () => Flatten<S & Record<ID, PS>>;
    getPluginState: () => PS;
    setPluginState: (newState: PS) => void;
  }) => void;
  onDraw?: (opts: {
    id: ID;
    ctx: CanvasRenderingContext2D;
    frame: Frame;
    scene: Scene;
    getGlobalState: () => Flatten<S & Record<ID, PS>>;
    getPluginState: () => PS;
    setPluginState: (newState: PS) => void;
  }) => void;
  transformFrame?: (opts: {
    id: ID;
    ctx: CanvasRenderingContext2D;
    frame: Frame;
    scene: Scene;
    getGlobalState: () => Flatten<S & Record<ID, PS>>;
    getPluginState: () => PS;
    setPluginState: (newPluginState: PS) => void;
  }) => void;
};

type MakePlugin<ID extends string, PS, S = unknown> = (opts: {
  getGlobalState: () => S;
  ctx: CanvasRenderingContext2D;
}) => PlotBuilderPlugin<ID, PS, S>;

type Flatten<T> = {
  [K in keyof T]: T[K];
} & {};

const clearCanvas = ({ ctx, canvasSize: { width, height } }: Frame) => {
  ctx.clearRect(0, 0, width, height);
};

type MakeScene<S> = (state: S, size: Size) => Scene;

export class CanPlot<S extends Record<string, unknown>> {
  #state: S = {} as S;
  #plugins: PlotBuilderPlugin<string, any, any>[] = [];
  #pluginsInitializers: MakePlugin<string, any, any>[] = [];
  #dimensions: Required<Dimensions>;
  #lastMakeScene?: MakeScene<S>;
  #expectedSize: Size | undefined;
  #redrawing = false;
  #deinitCallbacks: (() => void)[] = [];
  #canvas: HTMLCanvasElement | undefined = undefined;
  #phase: "not-attached" | "initializing" | "initialized" | "destroyed" =
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
    if (this.#phase !== "not-attached") {
      throw new Error("Plot already attached");
    }
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
  }

  getCanvas(): HTMLCanvasElement {
    if (!this.#canvas) {
      throw new Error("Canvas not attached");
    }
    return this.#canvas;
  }

  #updateCanvasSize() {
    const { width, height } = this.#dimensions;
    const canvas = this.getCanvas();
    canvas.width = width === "auto" ? this.#expectedSize!.width : width;
    canvas.height = height === "auto" ? this.#expectedSize!.height : height;
  }

  #makeFrame(scene: Scene): Frame {
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

    const canvas = this.getCanvas();

    const canvasSize = {
      width: canvas.width,
      height: canvas.height,
    };

    return {
      ctx: canvas.getContext("2d")!,
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
      scales: scene.scales as FrameScale[], // TODO: fix
      series: scene.series,
    };
  }

  use<ID extends string, PS>(
    makePlugin: MakePlugin<ID, PS, S>
  ): CanPlot<Flatten<S & Record<ID, PS>>> {
    this.#pluginsInitializers.push(makePlugin as any);
    return this as CanPlot<Flatten<S & Record<ID, PS>>>;
  }

  #initializePlugins() {
    for (const pluginInitializer of this.#pluginsInitializers) {
      this.#plugins.push(
        pluginInitializer({
          getGlobalState: () => this.#state,
          ctx: this.getCanvas().getContext("2d")!,
        })
      );
    }
  }

  draw(makeScene: MakeScene<S>) {
    this.#lastMakeScene = makeScene;
    if (this.#phase === "not-attached") {
      return;
    }
    if (this.#phase === "destroyed") {
      return;
    }
    if (this.#redrawing) {
      console.error("Cannot redraw while redrawing");
      return;
    }
    this.#redrawing = true;
    this.#updateCanvasSize();

    const size = {
      width: this.getCanvas().width,
      height: this.getCanvas().height,
    };

    const untransformedScene = makeScene(this.#state, size);

    if (this.#phase === "initializing") {
      // INITIALIZE PLUGINS
      this.#initializePlugins();
      this.#phase = "initialized";
    }

    let scene = untransformedScene;
    for (const plugin of this.#plugins) {
      scene =
        plugin.transformScene?.({
          id: plugin.id,
          scene: untransformedScene,
          ctx: this.getCanvas().getContext("2d")!,
          getGlobalState: () => this.#state,
          getPluginState: () => this.#state[plugin.id as keyof S],
          setPluginState: (newPluginState) => {
            this.#state[plugin.id as keyof S] = newPluginState;
          },
        }) ?? scene;
    }

    const frame = this.#makeFrame(scene);

    clearCanvas(frame);

    for (const plugin of this.#plugins) {
      plugin.onDraw?.({
        id: plugin.id,
        frame,
        scene,
        ctx: this.getCanvas().getContext("2d")!,
        getGlobalState: () => this.#state,
        getPluginState: () => this.#state[plugin.id as keyof S],
        setPluginState: (newPluginState) => {
          this.#state[plugin.id as keyof S] = newPluginState;
        },
      });
    }

    if (frame.chartArea.height < 0 || frame.chartArea.width < 0) {
      this.#redrawing = false;
      return;
    }

    // DRAW BOTTOM FACETS
    drawFacets(frame, "bottom");

    // DRAW SERIES
    drawSeries(frame);

    // DRAW MIDDLE FACETS
    drawFacets(frame, "middle");

    // DRAW AXES
    // drawAxes(frame);

    // DRAW TOP FACETS
    drawFacets(frame, "top");

    this.#redrawing = false;
  }
}

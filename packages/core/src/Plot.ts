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
  MakeStatefulPlugin,
  MakeStatelessPlugin,
  PlotBuilderPlugin,
  PlotStaticConfig,
  Scene,
  Size,
  StatefulPlotBuilderPlugin,
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

const sceneToFrame = (scene: Scene, ctx: CanvasRenderingContext2D): Frame => {
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

const isStatefulPlugin = <ID extends string, PS, S>(
  plugin: PlotBuilderPlugin<ID, PS, S>
): plugin is StatefulPlotBuilderPlugin<ID, PS, S> => {
  return "initialState" in plugin;
};

export class Plot<S extends Record<string, unknown>> {
  #store: S = {} as S;
  #plugins: [string, PlotBuilderPlugin<string, unknown, unknown>][] = [];
  #pluginsInitializers: [string, MakePlugin<string, unknown, unknown>][] = [];
  #dimensions: Required<Dimensions>;
  #lastMakeScene?: MakeScene<S>;
  #expectedSize: Size | undefined;
  #canvas: HTMLCanvasElement | undefined = undefined;
  #phase: "not-attached" | "initializing" | "idle" | "drawing" | "destroyed" =
    "not-attached";
  #drawScheduled = false;
  #logger: Console | undefined;

  parentResizeObserver: ResizeObserver | undefined = undefined;

  constructor(staticConfig: PlotStaticConfig) {
    const { width = "auto", height = "auto" } = staticConfig.dimensions ?? {};
    this.#dimensions = { width, height };
    this.#logger = staticConfig.logger ? console : undefined;

    if (staticConfig.canvas) {
      this.attach(staticConfig.canvas);
    }
  }

  destroy() {
    if (this.#phase === "destroyed") {
      return;
    }
    this.#phase = "destroyed";
    this.parentResizeObserver?.disconnect();

    const getStore = () => this.#store;
    const ctx = this.getCanvas().getContext("2d")!;
    for (const [id, plugin] of this.#plugins) {
      if (isStatefulPlugin(plugin)) {
        plugin.deinit?.({
          ctx,
          getStore,
          getPluginState: () => this.#store[id],
          id,
        });
      } else {
        plugin.deinit?.({ ctx, getStore });
      }
    }
  }

  getPhase() {
    return this.#phase;
  }

  #redraw() {
    this.#logger?.log("redraw:", this.#lastMakeScene ? "redraw" : "first draw");
    if (this.#lastMakeScene) {
      this.draw(this.#lastMakeScene);
    }
  }

  attach(canvas: HTMLCanvasElement) {
    this.#logger?.log("attach: Attaching to canvas in state", this.#phase);
    switch (this.#phase) {
      case "not-attached":
        this.#canvas = canvas;
        const { width: dimW, height: dimH } = this.#dimensions;
        if (typeof dimW === "number" && Number.isFinite(dimW)) {
          canvas.width = dimW;
        }
        if (typeof dimH === "number" && Number.isFinite(dimH)) {
          canvas.height = dimH;
        }
        if (dimW === "auto" || dimH === "auto") {
          this.parentResizeObserver = new ResizeObserver((entries) => {
            for (const { contentRect } of entries) {
              this.#logger?.log("resizeobserver: cb", contentRect);
              const width = dimW === "auto" ? contentRect.width : dimW;
              const height = dimH === "auto" ? contentRect.height : dimH;
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

  useStateful<ID extends string>(id: ID) {
    return <PS>(makePlugin: MakeStatefulPlugin<ID, PS, S>) => {
      this.#pluginsInitializers.push([id, makePlugin as any]);
      return this as Plot<Flatten<S & Record<ID, PS>>>;
    };
  }

  use(makePlugin: MakeStatelessPlugin<S>): Plot<S> {
    this.#pluginsInitializers.push([undefined, makePlugin] as any);
    return this as any;
  }

  #setPluginState(id: keyof S, state: any, redraw = true) {
    this.#logger?.log("setPluginState:", id, state, redraw);
    this.#store[id] = state;
    if (redraw) {
      switch (this.#phase) {
        case "idle":
          this.#redraw();
          break;
        case "drawing":
        default:
          break;
      }
    }
  }

  #initializePlugins() {
    const idMap = new Map<any, keyof S>();
    for (const [id, pluginInitializer] of this.#pluginsInitializers) {
      const plugin = pluginInitializer({
        getStore: () => this.#store,
        getPluginState: () => this.#store[idMap.get(pluginInitializer)!],
        setPluginState: (state) => {
          this.#setPluginState(idMap.get(pluginInitializer)!, state);
        },
        ctx: this.getCanvas().getContext("2d")!,
      });
      if (!plugin) {
        continue;
      }
      if (id && isStatefulPlugin(plugin)) {
        this.#logger?.info("initializePlugins: stateful plugin", id);
        idMap.set(pluginInitializer, id);
        this.#store[id as keyof S] = plugin.initialState as any;
      }
      this.#plugins.push([id, plugin]);
    }
  }

  async draw(makeScene: MakeScene<S>) {
    this.#lastMakeScene = makeScene;
    this.#logger?.info(`draw: begin in ${this.#phase}`);
    switch (this.#phase) {
      case "not-attached":
        this.#drawScheduled = true;
        break;
      case "initializing":
        this.#initializePlugins();
        this.#drawScheduled = true;
        this.#phase = "idle";
        break;
      case "destroyed":
        console.error("Cannot redraw if already destroyed");
        break;
      case "drawing":
        this.#drawScheduled = true;
        console.warn("Already drawing, postponing the draw");
        break;
      case "idle":
        this.#drawScheduled = true;
        break;
    }
    this.#logger?.info(`draw: apply in ${this.#phase}`);
    if (this.#phase !== "idle") {
      this.#logger?.info(`draw: skip`);
      return;
    }
    this.#logger?.info(`draw: idle, drawScheduled=${this.#drawScheduled}`);

    if (this.#drawScheduled) {
      this.#drawScheduled = false;
      this.#phase = "drawing";
      setTimeout(() => {
        this.#actuallyDraw(makeScene);
        this.#phase = "idle";
        if (this.#drawScheduled) {
          this.#redraw();
        }
      }, 0);
    }
  }

  async #actuallyDraw(makeScene: MakeScene<S>) {
    const canvas = this.getCanvas();
    const size = this.getSize();
    const ctx = canvas.getContext("2d")!;

    const getStore = () => this.#store;
    const makePluginStatefulPartial = <ID extends keyof S>(
      id: ID,
      redraw: boolean
    ) => ({
      id,
      getPluginState: () => this.#store[id],
      setPluginState: (newPluginState: any) => {
        this.#setPluginState(id, newPluginState, redraw);
      },
    });

    if (canvas.width !== size.width || canvas.height !== size.height) {
      canvas.width = size.width;
      canvas.height = size.height;
    }

    // BEFORE DRAW
    for (const [id, plugin] of this.#plugins) {
      if (isStatefulPlugin(plugin)) {
        plugin.beforeDraw?.({
          ctx,
          getStore,
          ...makePluginStatefulPartial(id, false),
        });
      } else {
        plugin.beforeDraw?.({ ctx, getStore });
      }
    }

    const initialScene = makeScene(this.#store);

    // TRANSFORM SCENE
    const scene = this.#plugins.reduce((scene, [id, plugin]) => {
      try {
        if (isStatefulPlugin(plugin)) {
          plugin.transformScene?.({
            id,
            scene,
            ctx,
            getStore,
            getPluginState: () => this.#store[id as keyof S],
          });
        } else {
          plugin.transformScene?.({ scene, ctx, getStore });
        }
      } catch (err) {
        console.error(`Error in plugin`, err);
      }
      return scene;
    }, initialScene);

    // TRANSFORM FRAME
    const initialFrame = sceneToFrame(
      scene,
      this.getCanvas().getContext("2d")!
    );
    const frame = this.#plugins.reduce((frame, [id, plugin]) => {
      try {
        if (isStatefulPlugin(plugin)) {
          plugin.transformFrame?.({
            id,
            frame,
            scene,
            ctx,
            getStore,
            getPluginState: () => this.#store[id as keyof S],
          });
        } else {
          plugin.transformFrame?.({ frame, scene, ctx, getStore });
        }
      } catch (err) {
        console.error(`Error in plugin`, err);
      }
      return frame;
    }, initialFrame);

    // CLEAR CANVAS
    ctx.clearRect(0, 0, size.width, size.height);

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

    // AFTER DRAW
    for (const [id, plugin] of this.#plugins) {
      if (isStatefulPlugin(plugin)) {
        plugin.afterDraw?.({
          id,
          ctx,
          frame,
          scene,
          getStore,
          getPluginState: () => this.#store[id as keyof S],
          setPluginState: (newPluginState) => {
            this.#setPluginState(id as keyof S, newPluginState, false);
          },
        });
      } else {
        plugin.afterDraw?.({ ctx, frame, scene, getStore });
      }
    }
  }
}

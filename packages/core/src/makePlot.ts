import { drawAxes } from "./axes";
import { isXScale } from "./helpers";
import { makeAutoLimits } from "./limits";

import { drawSeries } from "./series";
import {
  CanPlot,
  FacetLayer,
  Frame,
  InstantiatedPlugin,
  MakePluginOpts,
  MakeScene,
  PlotPhase,
  PlotStaticConfig,
  PluginBuilder,
  Scene,
  Size,
} from "./types";

const makePluginBuilder = <
  ID extends string = never,
  TIn = never,
  TOut = never
>(pluginParam: {
  id?: ID;
  maker?: (p: MakePluginOpts<TOut>) => InstantiatedPlugin<ID, TIn, TOut>;
}): PluginBuilder<ID, TIn, TOut> => {
  return {
    as: <T extends string>(id: T) =>
      makePluginBuilder<T, TIn, TOut>({
        id,
        maker: pluginParam.maker as (
          p: MakePluginOpts<TOut>
        ) => InstantiatedPlugin<T, TIn, TOut>,
      }),
    input: <T>() => makePluginBuilder<ID, T, TOut>({ id: pluginParam.id }),
    output: <T>() => makePluginBuilder<ID, TIn, T>({ id: pluginParam.id }),
    make: (maker) => {
      return makePluginBuilder<ID, TIn, TOut>({ id: pluginParam.id, maker });
    },
    __initialize: (params) => {
      return pluginParam.maker!(params);
    },
    __getId: () => pluginParam.id,
  };
};

export const makePlugin = () => makePluginBuilder({});

const sceneToFrame = <TInputs>(
  scene: Scene<TInputs>,
  ctx: CanvasRenderingContext2D,
  dpr: number
): Frame<TInputs> => {
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
    width: canvas.width / dpr,
    height: canvas.height / dpr,
  };

  const frameNoScales: Omit<Frame<TInputs>, "scales"> = {
    ctx,
    dpr,
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
    inputs: scene.inputs,
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

type PlotState<TInputs, TOutputs> = {
  expectedSize?: Size;
  canvas?: HTMLCanvasElement | undefined;
  phase: PlotPhase;
  drawScheduled: boolean;
  parentResizeObserver?: ResizeObserver;
  lastMakeScene?: MakeScene<TInputs, TOutputs>;
  outputs: TOutputs;
  plugins: {
    id: string;
    isStateful: boolean;
    plugin: InstantiatedPlugin<string, unknown, unknown, TInputs>;
  }[];
  pluginsInitializers: PluginBuilder<string, unknown, unknown>[];
};

export const makePlot = <TInputs extends {} = {}, TOutputs extends {} = {}>(
  staticConfig: PlotStaticConfig
): CanPlot<TInputs, TOutputs> => {
  const dimensions = {
    width: staticConfig.dimensions?.width ?? "auto",
    height: staticConfig.dimensions?.height ?? "auto",
  };
  const logger = staticConfig.logger ? console : undefined;

  const state: PlotState<TInputs, TOutputs> = {
    phase: "not-attached",
    drawScheduled: false,
    outputs: {} as TOutputs,
    plugins: [],
    pluginsInitializers: [],
  };

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

  const getSize = (): Size => {
    if (!state.expectedSize) {
      throw new Error("Invariant violation: expectedSize is undefined");
    }
    return state.expectedSize;
  };

  const detach = () => {
    if (state.phase === "detached") {
      return;
    }
    state.phase = "detached";
    state.parentResizeObserver?.disconnect();

    for (const { plugin } of state.plugins) {
      plugin.deinit?.();
    }
  };

  const redraw = () => {
    logger?.log("redraw:", state.lastMakeScene ? "redraw" : "first draw");
    if (state.lastMakeScene) {
      draw(state.lastMakeScene);
    }
  };

  const attach = (canvas: HTMLCanvasElement) => {
    logger?.log("attach: Attaching to canvas in state", state.phase);
    const dpr = window.devicePixelRatio;
    switch (state.phase) {
      case "not-attached":
        state.canvas = canvas;
        const { width: dimW, height: dimH } = dimensions;
        if (typeof dimW === "number" && Number.isFinite(dimW)) {
          canvas.width = dpr * dimW;
          canvas.style.width = `${dimW}px`;
        }
        if (typeof dimH === "number" && Number.isFinite(dimH)) {
          canvas.height = dpr * dimH;
          canvas.style.height = `${dimH}px`;
        }
        if (dimW === "auto" || dimH === "auto") {
          state.parentResizeObserver = new ResizeObserver((entries) => {
            for (const { contentRect } of entries) {
              logger?.log("resizeobserver: cb", contentRect);
              const width = dimW === "auto" ? contentRect.width : dimW;
              const height = dimH === "auto" ? contentRect.height : dimH;
              if (
                state.expectedSize?.width === width &&
                state.expectedSize?.height === height
              ) {
                return;
              }
              state.expectedSize = { width, height };
              if (state.phase === "not-attached") {
                state.phase = "initializing";
              }
              redraw();
            }
          });
          if (!canvas.parentElement) {
            throw new Error("Canvas must be attached to the DOM");
          }
          state.parentResizeObserver.observe(canvas.parentElement);
        } else {
          state.phase = "initializing";
          redraw();
        }
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

  const setPluginOutput = (id: any, newOutput: any, shouldRedraw = true) => {
    logger?.log("setPluginState:", id, newOutput, shouldRedraw);
    state.outputs[id as keyof TOutputs] = newOutput;
    if (!shouldRedraw) {
      return;
    }
    const isStateful = !!state.plugins.find((entry) => entry.id === id)
      ?.isStateful;
    if (!isStateful) {
      return;
    }
    switch (state.phase) {
      case "idle":
        redraw();
        break;
      case "drawing":
      default:
        break;
    }
  };

  const initializePlugins = () => {
    for (let i = 0; i < state.pluginsInitializers.length; i++) {
      const pluginInitializer = state.pluginsInitializers[i];
      const id = pluginInitializer.__getId() ?? `__plugin_id_${i}`;
      const plugin = pluginInitializer.__initialize({
        setOutput: (state) => {
          setPluginOutput(id, state);
        },
        ctx: getCtx(),
      });
      logger?.info("initializePlugins: stateful plugin", id);
      state.outputs[id as keyof TOutputs] =
        plugin.defaultOutput as TOutputs[keyof TOutputs];
      state.plugins.push({
        id,
        isStateful: id ? true : false,
        plugin,
      });
    }
  };

  const draw = (makeScene: MakeScene<TInputs, TOutputs>) => {
    state.lastMakeScene = makeScene;
    logger?.info(`draw: begin in ${state.phase}`);
    switch (state.phase) {
      case "not-attached":
        state.drawScheduled = true;
        break;
      case "initializing":
        initializePlugins();
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

  const actuallyDraw = (makeScene: MakeScene<TInputs, TOutputs>) => {
    const canvas = getCanvas();
    const size = getSize();
    const ctx = getCtx();

    const dpr = window.devicePixelRatio;

    const dprAwareWidth = dpr * size.width;
    const dprAwareHeight = dpr * size.height;
    if (canvas.width !== dprAwareWidth || canvas.height !== dprAwareHeight) {
      canvas.width = dprAwareWidth;
      canvas.height = dprAwareHeight;
    }

    // BEFORE DRAW
    for (const { id, plugin } of state.plugins) {
      plugin.beforeDraw?.({
        ctx,
        id,
        get output() {
          return state.outputs[id as keyof TOutputs];
        },
        setOutput(newOutput) {
          setPluginOutput(id, newOutput, false);
        },
      });
    }

    const initialScene = makeScene(state.outputs as TOutputs);

    // TRANSFORM SCENE
    const scene = state.plugins.reduce((scene, { id, plugin }) => {
      try {
        plugin.transformScene?.({
          id,
          scene,
          ctx,
          get output() {
            return state.outputs[id as keyof TOutputs];
          },
          get input() {
            return scene.inputs[id as keyof TInputs];
          },
          setOutput(newOutput) {
            setPluginOutput(id, newOutput, false);
          },
        });
      } catch (err) {
        console.error(`Error in plugin`, err);
      }
      return scene;
    }, initialScene);

    // TRANSFORM FRAME
    const initialFrame = sceneToFrame(scene, ctx, window.devicePixelRatio || 1);
    const frame = state.plugins.reduce((frame, { id, plugin }) => {
      try {
        plugin.transformFrame?.({
          id,
          frame,
          scene,
          ctx,
          get output() {
            return state.outputs[id as keyof TOutputs];
          },
          get input() {
            return scene.inputs[id as keyof TInputs];
          },
          setOutput(newOutput) {
            setPluginOutput(id, newOutput, false);
          },
        });
      } catch (err) {
        console.error(`Error in plugin`, err);
      }
      return frame;
    }, initialFrame);

    // CLEAR CANVAS
    ctx.clearRect(0, 0, dprAwareWidth, dprAwareHeight);

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

    // AFTER DRAW
    for (const { id, plugin } of state.plugins) {
      plugin.afterDraw?.({
        id,
        ctx,
        frame,
        scene,
        get input() {
          return scene.inputs[id as keyof TInputs];
        },
        get output() {
          return state.outputs[id as keyof TOutputs];
        },
        setOutput: (newPluginState) => {
          setPluginOutput(id, newPluginState, false);
        },
      });
    }
  };

  return {
    attach,
    draw,
    use<ID extends string, TIn, TOut>(plugin: PluginBuilder<ID, TIn, TOut>) {
      state.pluginsInitializers.push(plugin as any);
      return this as any;
    },
    detach,
  };
};

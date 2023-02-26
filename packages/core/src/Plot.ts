import { drawAxes } from "./axes";
import { drawFacets } from "./facets";
import { isXScale, normalizePadding } from "./helpers";
import { makeAutoLimits } from "./limits";
import { drawSeries } from "./series";
import {
  Scene,
  Frame,
  Size,
  PlotStaticConfig,
  Dimensions,
  PlotPlugin,
  HookOpts,
} from "./types";

const clearCanvas = ({ ctx, canvasSize: { width, height } }: Frame) => {
  ctx.clearRect(0, 0, width, height);
};

const iteratePlugins = (
  plugins: PlotPlugin<unknown>[] | undefined,
  fn: (plugin: PlotPlugin<unknown>, pluginId: string) => void
) => {
  plugins?.forEach((plugin, i) => {
    fn(plugin, plugin.id ?? i.toString());
  });
};

export class Plot {
  #dimensions: Required<Dimensions>;
  #pluginStore = new Map<string, unknown>();
  #lastScene: Scene;
  #parentSize: Size | undefined;
  #redrawing = false;
  #deinitCallbacks: (() => void)[] = [];
  #canvas: HTMLCanvasElement | undefined = undefined;
  #phase: "not-attached" | "initializing" | "initialized" | "destroyed" =
    "not-attached";

  parentResizeObserver: ResizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      this.#parentSize = {
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      };
      this.#draw(this.#lastScene);
    }
  });

  constructor(staticConfig: PlotStaticConfig, scene: Scene) {
    const { width = "auto", height = "auto" } = staticConfig.dimensions ?? {};
    this.#dimensions = { width, height };
    this.#lastScene = scene;
    if (staticConfig.canvas) {
      this.attach(staticConfig.canvas);
    }
  }

  getPhase() {
    return this.#phase;
  }

  attach(canvas: HTMLCanvasElement) {
    if (this.#phase !== "not-attached") {
      throw new Error("Plot already attached");
    }
    this.#phase = "initializing";
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
      this.#draw(this.#lastScene);
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
    canvas.width = width === "auto" ? this.#parentSize!.width : width;
    canvas.height = height === "auto" ? this.#parentSize!.height : height;
  }

  #makeFrame(drawConfig: Scene): Frame {
    const padding = normalizePadding(drawConfig.padding);
    let leftAxesSize = 0;
    let rightAxesSize = 0;
    let bottomAxesSize = 0;
    let topAxesSize = 0;
    for (const axis of drawConfig.axes) {
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

    const frameWithoutLimits: Omit<Frame, "scalesLimits"> = {
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
      scene: drawConfig,
    };

    return {
      ...frameWithoutLimits,
      scalesLimits: Object.fromEntries(
        drawConfig.scales.map((scale) => [
          scale.id,
          (scale.makeLimits ?? makeAutoLimits)({
            frame: frameWithoutLimits,
            scaleId: scale.id,
          }),
        ])
      ),
    };
  }

  redraw() {
    this.#draw(this.#lastScene);
  }

  update(
    newInputParams:
      | Scene
      | ((oldInputParams: Scene) => Scene)
  ) {
    let effectiveNewInputParams: Scene;
    if (newInputParams instanceof Function) {
      if (this.#phase === "initialized") {
        try {
          effectiveNewInputParams = newInputParams(this.#lastScene);
        } catch (e) {
          console.error(e);
          return;
        }
      } else {
        console.error(
          "Cannot update plot before it is initialized: " + this.#phase
        );
        return;
      }
    } else {
      effectiveNewInputParams = newInputParams;
    }
    this.#lastScene = effectiveNewInputParams;
    this.#draw(effectiveNewInputParams);
  }

  getFrame(rawInputParams = this.#lastScene) {
    let inputParams = rawInputParams;
    iteratePlugins(rawInputParams.plugins, (plugin, pluginId) => {
      if (plugin.transformInputParams) {
        inputParams = plugin.transformInputParams({
          inputParams,
          plot: this,
          pluginId,
          state: this.#pluginStore.get(pluginId),
          setState: (newState) => {
            this.#pluginStore.set(pluginId, newState);
          },
        });
      }
    });

    let frame = this.#makeFrame(inputParams);
    iteratePlugins(inputParams.plugins, (plugin, pluginId) => {
      if (plugin.transformFrame) {
        frame = plugin.transformFrame({
          frame,
          plot: this,
          pluginId,
          state: this.#pluginStore.get(pluginId),
          setState: (newState) => {
            this.#pluginStore.set(pluginId, newState);
          },
        });
      }
    });
    return frame;
  }

  #makePluginHookOpts(pluginId: string): Omit<HookOpts<any>, "frame"> {
    return {
      plot: this,
      pluginId,
      state: this.#pluginStore.get(pluginId),
      setState: (newState) => {
        this.#pluginStore.set(pluginId, newState);
      },
    };
  }

  destroy() {
    this.parentResizeObserver.disconnect();
    this.#phase = "destroyed";
    iteratePlugins(this.#lastScene.plugins, (plugin, pluginId) => {
      plugin.onDestroy?.(this.#makePluginHookOpts(pluginId));
    });
    for (const deinit of this.#deinitCallbacks) {
      deinit();
    }
  }

  #draw(rawInputParams: Scene) {
    if (this.#phase === "destroyed") {
      return;
    }
    if (this.#redrawing) {
      console.error("Cannot redraw while redrawing");
      return;
    }
    this.#redrawing = true;

    this.#updateCanvasSize();

    if (this.#phase === "initializing") {
      // ON INIT HOOK
      iteratePlugins(rawInputParams.plugins, (plugin, pluginId) => {
        this.#pluginStore.set(pluginId, plugin.initState?.());
      });
    }

    const frame = this.getFrame(rawInputParams);

    const plugins = frame.scene.plugins;

    if (this.#phase === "initializing") {
      // ON INIT HOOK
      iteratePlugins(plugins, (plugin, pluginId) => {
        const deinitCallback = plugin.onInit?.({
          ...this.#makePluginHookOpts(pluginId),
          frame,
        });
        if (deinitCallback) {
          this.#deinitCallbacks.push(deinitCallback);
        }
      });
      this.#phase = "initialized";
    }

    // CLEAR
    iteratePlugins(plugins, (plugin, pluginId) =>
      plugin.beforeClear?.({
        ...this.#makePluginHookOpts(pluginId),
        frame,
      })
    );

    clearCanvas(frame);

    iteratePlugins(plugins, (plugin, pluginId) =>
      plugin.afterClear?.({
        ...this.#makePluginHookOpts(pluginId),
        frame,
      })
    );

    if (frame.chartArea.height < 0 || frame.chartArea.width < 0) {
      this.#redrawing = false;
      return;
    }

    // DRAW BOTTOM FACETS
    drawFacets(frame, "bottom");

    // DRAW SERIES
    drawSeries(frame);

    iteratePlugins(plugins, (plugin, pluginId) =>
      plugin.afterSeries?.({
        ...this.#makePluginHookOpts(pluginId),
        frame,
      })
    );

    // DRAW MIDDLE FACETS
    drawFacets(frame, "middle");

    // DRAW AXES
    drawAxes(frame);

    iteratePlugins(plugins, (plugin, pluginId) =>
      plugin.afterAxes?.({
        ...this.#makePluginHookOpts(pluginId),
        frame,
      })
    );

    // DRAW TOP FACETS
    drawFacets(frame, "top");

    this.#redrawing = false;
  }
}

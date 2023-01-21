import { drawAxes } from "./axes";
import { drawFacets } from "./facets";
import { isXScale } from "./helpers";
import { makeAutoLimits } from "./limits";
import { drawSeries } from "./series";
import { PlotDrawConfig, DrawContext, Size, StaticConfig } from "./types";

const DEFAULT_PADDING = 10;

const normalizePadding = (padding: PlotDrawConfig["padding"]) => {
  if (typeof padding === "number" || typeof padding === "undefined") {
    const paddingWithDefault = padding ?? DEFAULT_PADDING;
    return {
      top: paddingWithDefault,
      right: paddingWithDefault,
      bottom: paddingWithDefault,
      left: paddingWithDefault,
    };
  }

  return padding;
};

const clearCanvas = ({ ctx, canvasSize }: DrawContext) => {
  ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
};

export class Plot {
  #staticConfig: StaticConfig;
  #lastDrawConfig_DO_NOT_USE: PlotDrawConfig;
  #parentSize: Size | undefined;
  #phase: "initializing" | "initialized" | "destroyed" = "initializing";

  parentResizeObserver: ResizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      this.#parentSize = {
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      };
      console.log("resize", {
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
      this.#draw(this.#lastDrawConfig_DO_NOT_USE);
    }
  });

  constructor(staticConfig: StaticConfig, drawConfig: PlotDrawConfig) {
    this.#staticConfig = staticConfig;
    this.#lastDrawConfig_DO_NOT_USE = drawConfig;
    const { width, height } = this.#staticConfig.dimensions;
    if (typeof width === "number" && Number.isFinite(width)) {
      this.#staticConfig.canvas.width = width;
    }
    if (typeof height === "number" && Number.isFinite(height)) {
      this.#staticConfig.canvas.height = height;
    }
    if (width === "auto" || height === "auto") {
      this.parentResizeObserver.observe(
        this.#staticConfig.canvas.parentElement!
      );
    } else {
      this.#draw(drawConfig);
    }
  }

  getCanvas() {
    return this.#staticConfig.canvas;
  }

  #updateCanvasSize() {
    const { width, height } = this.#staticConfig.dimensions;
    this.#staticConfig.canvas.width =
      width === "auto" ? this.#parentSize!.width : width;
    this.#staticConfig.canvas.height =
      height === "auto" ? this.#parentSize!.height : height;
  }

  #makeDrawContext(drawConfig: PlotDrawConfig): DrawContext {
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

    const canvasSize = {
      width: this.#staticConfig.canvas.width,
      height: this.#staticConfig.canvas.height,
    };

    const drawContextWithoutLimits: Omit<DrawContext, "limits"> = {
      ctx: this.#staticConfig.canvas.getContext("2d")!,
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
      drawConfig,
    };

    return {
      ...drawContextWithoutLimits,
      limits: Object.fromEntries(
        drawConfig.scales.map((scale) => [
          scale.id,
          (scale.makeLimits ?? makeAutoLimits)({
            drawContext: drawContextWithoutLimits,
            scaleId: scale.id,
          }),
        ])
      ),
    };
  }

  update(
    drawConfig: PlotDrawConfig | ((old: PlotDrawConfig) => PlotDrawConfig)
  ) {
    let effectiveDrawConfig: PlotDrawConfig;
    if (drawConfig instanceof Function) {
      if (this.#phase === "initialized") {
        try {
          effectiveDrawConfig = drawConfig(this.#lastDrawConfig_DO_NOT_USE);
        } catch (e) {
          console.error(e);
          return;
        }
      } else {
        console.error("Cannot update plot before it is initialized");
        return;
      }
    } else {
      effectiveDrawConfig = drawConfig;
    }
    this.#lastDrawConfig_DO_NOT_USE = effectiveDrawConfig;
    this.#draw(effectiveDrawConfig);
  }

  getDrawContext() {
    return this.#makeDrawContext(this.#lastDrawConfig_DO_NOT_USE);
  }

  destroy() {
    this.parentResizeObserver.disconnect();
    this.#phase = "destroyed";
    for (const plugin of this.#staticConfig.plugins ?? []) {
      plugin.hooks?.onDestroy?.({ plot: this });
    }
  }

  #draw(inputDrawConfig: PlotDrawConfig) {
    if (this.#phase === "destroyed") {
      return;
    }
    this.#updateCanvasSize();
    const plugins = this.#staticConfig.plugins ?? [];
    const drawConfig = plugins.reduce(
      (acc, plugin) =>
        plugin.transformDrawConfig ? plugin.transformDrawConfig(acc) : acc,
      inputDrawConfig
    );
    const drawContext = this.#makeDrawContext(drawConfig);

    if (this.#phase === "initializing") {
      // ON INIT HOOK
      for (const plugin of plugins) {
        plugin.hooks?.onInit?.({ drawContext, plot: this });
      }
      this.#phase = "initialized";
    }

    // CLEAR
    for (const plugin of plugins) {
      plugin.hooks?.beforeClear?.({ drawContext, plot: this });
    }

    clearCanvas(drawContext);

    for (const plugin of plugins) {
      plugin.hooks?.afterClear?.({ drawContext, plot: this });
    }

    if (drawContext.chartArea.height < 0 || drawContext.chartArea.width < 0) {
      return;
    }

    // DRAW BOTTOM FACETS
    drawFacets(drawContext, "bottom");

    // DRAW SERIES
    drawSeries(drawContext);

    for (const plugin of plugins) {
      plugin.hooks?.afterSeries?.({ drawContext, plot: this });
    }

    // DRAW BOTTOM FACETS
    drawFacets(drawContext, "middle");

    // DRAW AXES
    drawAxes(drawContext);

    for (const plugin of plugins) {
      plugin.hooks?.afterAxes?.({ drawContext, plot: this });
    }

    // DRAW TOP FACETS
    drawFacets(drawContext, "top");
  }
}

import produce from "immer";
import { drawAxes } from "./axes";
import { isXScale } from "./helpers";
import { drawSeries } from "./series";
import {
  PlotDrawConfig,
  DrawContext,
  Size,
  StaticConfig,
  SeriesBase,
} from "./types";

const normalizePadding = (padding: PlotDrawConfig["padding"]) => {
  if (typeof padding === "number") {
    return { top: padding, right: padding, bottom: padding, left: padding };
  }
  if (typeof padding === "undefined") {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  return padding;
};

const clearCanvas = ({ ctx, canvasSize }: DrawContext) => {
  ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
};

export class Plot<Extras = any> {
  #staticConfig: StaticConfig<Extras>;
  #lastDrawConfig_DO_NOT_USE: PlotDrawConfig<Extras>;
  #parentSize: Size | undefined;
  #phase: "initializing" | "initialized" | "destroyed" = "initializing";

  parentResizeObserver: ResizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      this.#parentSize = {
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      };
      this.#draw(this.#lastDrawConfig_DO_NOT_USE);
    }
  });

  constructor(
    staticConfig: StaticConfig<Extras>,
    drawConfig: PlotDrawConfig<Extras>
  ) {
    this.#staticConfig = staticConfig;
    this.#lastDrawConfig_DO_NOT_USE = drawConfig;
    const isAutosized =
      this.#staticConfig.dimensions.width === "auto" ||
      this.#staticConfig.dimensions.height === "auto";
    if (isAutosized) {
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

  #makeDrawingContext(drawConfig: PlotDrawConfig<Extras>): DrawContext<Extras> {
    const padding = normalizePadding(drawConfig.padding);
    let leftAxesSize = 0;
    let rightAxesSize = 0;
    let bottomAxesSize = 0;
    let topAxesSize = 0;
    for (const axis of drawConfig.axes) {
      if (isXScale(axis.scaleId)) {
        if (axis.position === "primary") {
          leftAxesSize += axis.size;
        } else {
          rightAxesSize += axis.size;
        }
      } else {
        if (axis.position === "primary") {
          bottomAxesSize += axis.size;
        } else {
          topAxesSize += axis.size;
        }
      }
    }

    const canvasSize = {
      width: this.#staticConfig.canvas.width,
      height: this.#staticConfig.canvas.height,
    };

    return {
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
  }

  update(drawConfig: PlotDrawConfig<Extras>) {
    this.#lastDrawConfig_DO_NOT_USE = drawConfig;
    this.#draw(drawConfig);
  }

  incrementalUpdate(recipe: (draft: PlotDrawConfig<Extras>) => void) {
    const config = produce(this.#lastDrawConfig_DO_NOT_USE, recipe);
    this.update(config);
  }

  destroy() {
    this.parentResizeObserver.disconnect();
    this.#phase = "destroyed";
    for (const plugin of this.#staticConfig.plugins) {
      plugin.hooks?.onDestroy?.(this);
    }
  }

  #draw(inputDrawConfig: PlotDrawConfig<Extras>) {
    if (this.#phase === "destroyed") {
      return;
    }
    this.#updateCanvasSize();
    if (this.#phase === "initializing") {
      // ON INIT HOOK
      for (const plugin of this.#staticConfig.plugins) {
        plugin.hooks?.onInit?.(this);
      }
      this.#phase = "initialized";
    }
    const drawConfig = this.#staticConfig.plugins.reduce(
      (acc, plugin) =>
        plugin.transformDrawConfig ? plugin.transformDrawConfig(acc) : acc,
      inputDrawConfig
    );
    const drawingContext = this.#makeDrawingContext(drawConfig);

    // CLEAR
    for (const plugin of this.#staticConfig.plugins) {
      plugin.hooks?.beforeClear?.(drawingContext, this);
    }

    clearCanvas(drawingContext);

    for (const plugin of this.#staticConfig.plugins) {
      plugin.hooks?.afterClear?.(drawingContext, this);
    }

    if (
      drawingContext.chartArea.height < 0 ||
      drawingContext.chartArea.width < 0
    ) {
      return;
    }

    // DRAW SERIES
    drawSeries(drawingContext);

    for (const plugin of this.#staticConfig.plugins) {
      plugin.hooks?.afterSeries?.(drawingContext, this);
    }

    // DRAW AXES
    drawAxes(drawingContext);

    for (const plugin of this.#staticConfig.plugins) {
      plugin.hooks?.afterAxes?.(drawingContext, this);
    }
  }
}

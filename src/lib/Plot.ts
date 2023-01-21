import { drawAxes } from "./axes";
import { drawFacets } from "./facets";
import { isXScale } from "./helpers";
import { makeAutoLimits } from "./limits";
import { drawSeries } from "./series";
import {
  PlotDrawInputParams,
  PlotDrawFrame,
  Size,
  StaticConfig,
} from "./types";

const DEFAULT_PADDING = 10;

const normalizePadding = (padding: PlotDrawInputParams["padding"]) => {
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

const clearCanvas = ({ ctx, canvasSize: { width, height } }: PlotDrawFrame) => {
  ctx.clearRect(0, 0, width, height);
};

export class Plot {
  #staticConfig: StaticConfig;
  #lastDrawConfig_DO_NOT_USE: PlotDrawInputParams;
  #parentSize: Size | undefined;
  #redrawing = false;
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

  constructor(staticConfig: StaticConfig, inputParams: PlotDrawInputParams) {
    this.#staticConfig = staticConfig;
    this.#lastDrawConfig_DO_NOT_USE = inputParams;
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
      this.#draw(inputParams);
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

  #makeFrame(drawConfig: PlotDrawInputParams): PlotDrawFrame {
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

    const drawContextWithoutLimits: Omit<PlotDrawFrame, "limits"> = {
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
      inputParams: drawConfig,
    };

    return {
      ...drawContextWithoutLimits,
      limits: Object.fromEntries(
        drawConfig.scales.map((scale) => [
          scale.id,
          (scale.makeLimits ?? makeAutoLimits)({
            frame: drawContextWithoutLimits,
            scaleId: scale.id,
          }),
        ])
      ),
    };
  }

  update(
    newInputParams:
      | PlotDrawInputParams
      | ((oldInputParams: PlotDrawInputParams) => PlotDrawInputParams)
  ) {
    let effectiveNewInputParams: PlotDrawInputParams;
    if (newInputParams instanceof Function) {
      if (this.#phase === "initialized") {
        try {
          effectiveNewInputParams = newInputParams(
            this.#lastDrawConfig_DO_NOT_USE
          );
        } catch (e) {
          console.error(e);
          return;
        }
      } else {
        console.error("Cannot update plot before it is initialized");
        return;
      }
    } else {
      effectiveNewInputParams = newInputParams;
    }
    this.#lastDrawConfig_DO_NOT_USE = effectiveNewInputParams;
    this.#draw(effectiveNewInputParams);
  }

  getDrawContext() {
    return this.#makeFrame(this.#lastDrawConfig_DO_NOT_USE);
  }

  destroy() {
    this.parentResizeObserver.disconnect();
    this.#phase = "destroyed";
    for (const plugin of this.#staticConfig.plugins ?? []) {
      plugin.hooks?.onDestroy?.({ plot: this });
    }
  }

  #draw(rawInputParams: PlotDrawInputParams) {
    if (this.#phase === "destroyed") {
      return;
    }
    if (this.#redrawing) {
      console.error("Cannot redraw while redrawing");
      return;
    }
    this.#redrawing = true;

    this.#updateCanvasSize();
    const plugins = this.#staticConfig.plugins ?? [];

    let inputParams = rawInputParams;
    for (const plugin of plugins) {
      if (plugin.transformInputParams) {
        inputParams = plugin.transformInputParams(inputParams);
      }
    }

    let frame = this.#makeFrame(inputParams);
    for (const plugin of plugins) {
      if (plugin.transformFrame) {
        frame = plugin.transformFrame(frame);
      }
    }

    if (this.#phase === "initializing") {
      // ON INIT HOOK
      for (const plugin of plugins) {
        plugin.hooks?.onInit?.({ frame, plot: this });
      }
      this.#phase = "initialized";
    }

    // CLEAR
    for (const plugin of plugins) {
      plugin.hooks?.beforeClear?.({ frame, plot: this });
    }

    clearCanvas(frame);

    for (const plugin of plugins) {
      plugin.hooks?.afterClear?.({ frame, plot: this });
    }

    if (frame.chartArea.height < 0 || frame.chartArea.width < 0) {
      return;
    }

    // DRAW BOTTOM FACETS
    drawFacets(frame, "bottom");

    // DRAW SERIES
    drawSeries(frame);

    for (const plugin of plugins) {
      plugin.hooks?.afterSeries?.({ frame, plot: this });
    }

    // DRAW BOTTOM FACETS
    drawFacets(frame, "middle");

    // DRAW AXES
    drawAxes(frame);

    for (const plugin of plugins) {
      plugin.hooks?.afterAxes?.({ frame, plot: this });
    }

    // DRAW TOP FACETS
    drawFacets(frame, "top");

    this.#redrawing = false;
  }
}

import produce from "immer";
import { scatterPlotter } from "./plotters";
import {
  PlotAxis,
  PlotDrawConfig,
  DrawContext,
  Size,
  StaticConfig,
} from "./types";
import { deepMerge, DeepPartial } from "./utils";

export class Plot<SeriesExtras extends Record<string, unknown>> {
  #staticConfig: StaticConfig<SeriesExtras>;
  #lastDrawConfig_DO_NOT_USE: PlotDrawConfig<SeriesExtras>;
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

  isDimensionAuto() {
    return (
      this.#staticConfig.dimensions.width === "auto" ||
      this.#staticConfig.dimensions.height === "auto"
    );
  }

  constructor(
    staticConfig: StaticConfig<SeriesExtras>,
    drawConfig: PlotDrawConfig<SeriesExtras>
  ) {
    this.#staticConfig = staticConfig;
    this.#lastDrawConfig_DO_NOT_USE = drawConfig;
    if (this.isDimensionAuto()) {
      this.parentResizeObserver.observe(
        this.#staticConfig.canvas.parentElement!
      );
    } else {
      this.#draw(drawConfig);
    }
  }

  ctx() {
    return this.#staticConfig.canvas.getContext("2d")!;
  }

  #applyScaling() {
    const { width, height } = this.#staticConfig.dimensions;
    this.#staticConfig.canvas.width =
      width === "auto" ? this.#parentSize!.width : width;
    this.#staticConfig.canvas.height =
      height === "auto" ? this.#parentSize!.height : height;
  }

  getCanvasSize() {
    return {
      width: this.#staticConfig.canvas.width,
      height: this.#staticConfig.canvas.height,
    };
  }

  #applyAxisStyles(axis: PlotAxis) {
    const ctx = this.ctx();
    ctx.lineCap = axis.style?.line?.lineCap ?? "butt";
    ctx.lineDashOffset = axis.style?.line?.lineDashOffset ?? 0;
    ctx.lineJoin = axis.style?.line?.lineJoin ?? "miter";
    ctx.lineWidth = axis.style?.line?.lineWidth ?? 1;
    ctx.miterLimit = axis.style?.line?.miterLimit ?? 10;
    ctx.strokeStyle = axis.style?.strokeFill?.strokeStyle ?? "black";
    ctx.fillStyle = axis.style?.strokeFill?.fillStyle ?? "black";
  }

  #drawXAxis(axis: PlotAxis, offset: number, x0: number, x1: number) {
    const newOffset = offset + axis.size;
    const { height } = this.getCanvasSize();
    const y = axis.position === "primary" ? height - newOffset : newOffset;
    const ctx = this.ctx();
    ctx.save();
    this.#applyAxisStyles(axis);
    ctx.beginPath();
    ctx.moveTo(x0, y);
    ctx.lineTo(x1, y);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
    return newOffset;
  }

  #drawYAxis(axis: PlotAxis, offset: number, y0: number, y1: number) {
    const newOffset = offset + axis.size;
    const { width } = this.getCanvasSize();
    const ctx = this.ctx();
    const x =
      axis.position === "primary"
        ? offset + axis.size
        : width - offset - axis.size;
    ctx.save();
    this.#applyAxisStyles(axis);

    ctx.beginPath();
    ctx.moveTo(x, y0);
    ctx.lineTo(x, y1);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
    return newOffset;
  }

  #getPadding(drawConfig: PlotDrawConfig<SeriesExtras>) {
    const padding = drawConfig.padding;
    if (typeof padding === "number") {
      return { top: padding, right: padding, bottom: padding, left: padding };
    }
    return padding;
  }

  #getChartArea(drawConfig: PlotDrawConfig<SeriesExtras>) {
    const padding = this.#getPadding(drawConfig);
    const leftAxesSize = drawConfig.axes
      .map((a) =>
        a.scaleId.startsWith("y-") && a.position === "primary" ? a.size : 0
      )
      .reduce((a, b) => a + b, 0);

    const rightAxesSize = drawConfig.axes
      .map((a) =>
        a.scaleId.startsWith("y-") && a.position === "secondary" ? a.size : 0
      )
      .reduce((a, b) => a + b, 0);

    const bottomAxesSize = drawConfig.axes
      .map((a) =>
        a.scaleId.startsWith("x-") && a.position === "primary" ? a.size : 0
      )
      .reduce((a, b) => a + b, 0);

    const topAxesSize = drawConfig.axes
      .map((a) =>
        a.scaleId.startsWith("x-") && a.position === "secondary" ? a.size : 0
      )
      .reduce((a, b) => a + b, 0);

    return {
      width:
        this.getCanvasSize().width -
        leftAxesSize -
        rightAxesSize -
        padding.left -
        padding.right,
      height:
        this.getCanvasSize().height -
        topAxesSize -
        bottomAxesSize -
        padding.top -
        padding.bottom,
      lt: {
        x: leftAxesSize + padding.left,
        y: topAxesSize + padding.top,
      },
      rt: {
        x: this.getCanvasSize().width - rightAxesSize - padding.right,
        y: topAxesSize + padding.top,
      },
      rb: {
        x: this.getCanvasSize().width - rightAxesSize - padding.right,
        y: this.getCanvasSize().height - bottomAxesSize - padding.bottom,
      },
      lb: {
        x: leftAxesSize + padding.left,
        y: this.getCanvasSize().height - bottomAxesSize - padding.bottom,
      },
    };
  }

  getChartArea() {
    return this.#getChartArea(this.#lastDrawConfig_DO_NOT_USE);
  }

  incrementalUpdate(drawConfig: DeepPartial<PlotDrawConfig<SeriesExtras>>) {
    const config = deepMerge(this.#lastDrawConfig_DO_NOT_USE, drawConfig);
    this.update(config);
  }

  incrementalImperativeUpdate(
    recipe: (draft: PlotDrawConfig<SeriesExtras>) => void
  ) {
    const config = produce(this.#lastDrawConfig_DO_NOT_USE, recipe);
    this.update(config);
  }

  update(drawConfig: PlotDrawConfig<SeriesExtras>) {
    this.#lastDrawConfig_DO_NOT_USE = drawConfig;
    this.#draw(drawConfig);
  }

  destroy() {
    this.parentResizeObserver.disconnect();
    this.#phase = "destroyed";
    for (const plugin of this.#staticConfig.plugins) {
      plugin.hooks?.onDestroy?.(this);
    }
  }

  #draw(inputDrawConfig: PlotDrawConfig<SeriesExtras>) {
    if (this.#phase === "destroyed") {
      return;
    }
    this.#applyScaling();
    if (this.#phase === "initializing") {
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
    const drawContext: DrawContext<SeriesExtras> = {
      ctx: this.ctx(),
      chartArea: this.#getChartArea(drawConfig),
      canvasSize: this.getCanvasSize(),
      drawConfig,
    };

    for (const plugin of this.#staticConfig.plugins) {
      plugin.hooks?.beforeClear?.(this, drawContext);
    }

    const ctx = this.ctx();
    ctx.clearRect(
      0,
      0,
      this.getCanvasSize().width,
      this.getCanvasSize().height
    );

    for (const plugin of this.#staticConfig.plugins) {
      plugin.hooks?.afterClear?.(this, drawContext);
    }

    const padding = this.#getPadding(drawConfig);

    const chartArea = this.#getChartArea(drawConfig);
    if (chartArea.height < 0 || chartArea.width < 0) {
      return;
    }

    ctx.save();

    const clipPath = new Path2D();
    clipPath.rect(
      chartArea.lt.x,
      chartArea.lt.y,
      chartArea.width,
      chartArea.height
    );
    ctx.clip(clipPath);

    for (const series of drawConfig.series) {
      const xScale = drawConfig.scales.find(
        (scale) => scale.id === series.xScaleId
      );
      const yScale = drawConfig.scales.find(
        (scale) => scale.id === series.yScaleId
      );
      if (!xScale || !yScale) {
        continue;
      }
      if (xScale.limits.autorange || yScale.limits.autorange) {
        continue;
      }
      const plotter = series.plotter ?? scatterPlotter;
      plotter(drawContext, series, xScale, yScale);
    }
    ctx.restore();

    for (const plugin of this.#staticConfig.plugins) {
      plugin.hooks?.afterSeries?.(this, drawContext);
    }

    let currentBottomOffset = padding.left;
    let currentRightOffset = padding.right;
    let currentLeftOffset = padding.bottom;
    let currentTopOffset = padding.top;
    for (const axis of drawConfig.axes) {
      if (axis.scaleId.startsWith("x-")) {
        if (axis.position === "primary") {
          currentBottomOffset = this.#drawXAxis(
            axis,
            currentBottomOffset,
            chartArea.lb.x,
            chartArea.rb.x
          );
        } else {
          currentTopOffset = this.#drawXAxis(
            axis,
            currentTopOffset,
            chartArea.lb.x,
            chartArea.rb.x
          );
        }
      } else {
        if (axis.position === "primary") {
          currentLeftOffset = this.#drawYAxis(
            axis,
            currentLeftOffset,
            chartArea.lt.y,
            chartArea.lb.y
          );
        } else {
          currentRightOffset = this.#drawYAxis(
            axis,
            currentRightOffset,
            chartArea.lt.y,
            chartArea.lb.y
          );
        }
      }
    }
    for (const plugin of this.#staticConfig.plugins) {
      plugin.hooks?.afterAxes?.(this, drawContext);
    }
  }
}

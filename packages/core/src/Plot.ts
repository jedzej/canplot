import { drawAxes } from "./axes";
import { drawFacets } from "./facets";
import { isXScale, normalizePadding } from "./helpers";
import { makeAutoLimits } from "./limits";
import { drawSeries } from "./series";
import {
  PlotDrawInputParams,
  PlotDrawFrame,
  Size,
  PlotStaticConfig,
  
  PlotPlugin,
} from "./types";

const clearCanvas = ({ ctx, canvasSize: { width, height } }: PlotDrawFrame) => {
  ctx.clearRect(0, 0, width, height);
};

export class Plot {
  protected plugins: PlotPlugin<any>[];
  protected phase:
    | "not-attached"
    | "initializing"
    | "initialized"
    | "destroyed" = "not-attached";
  #redrawing = false;
  #deinitCallbacks: (() => void)[] = [];

  constructor(staticConfig: PlotStaticConfig) {
    this.plugins =
      staticConfig.plugins?.map((config) => ({
        setState: () => {},
        state: config.initState?.(),
        config,
      })) ?? [];
  }

  getPhase() {
    return this.phase;
  }

  getCanvas(): unknown {
    throw new Error("Not implemented");
  }

  protected getCtx(): CanvasRenderingContext2D {
    throw new Error("Not implemented");
  }

  protected getCanvasSize(): Size {
    throw new Error("Not implemented");
  }

  protected makeFrame(drawConfig: PlotDrawInputParams): PlotDrawFrame {
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

    const canvasSize = this.getCanvasSize();

    const drawContextWithoutLimits: Omit<PlotDrawFrame, "limits"> = {
      ctx: this.getCtx(),
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

  protected updateCanvasSize() {}

  getDrawContext(): PlotDrawFrame {
    throw new Error("Not implemented");
  }

  destroy() {
    this.phase = "destroyed";
    for (const plugin of this.plugins) {
      plugin.config.hooks?.onDestroy?.({ plot: this, self: plugin });
    }
    for (const deinit of this.#deinitCallbacks) {
      deinit();
    }
  }

  draw(rawInputParams: PlotDrawInputParams) {
    if (this.phase === "destroyed") {
      return;
    }
    if (this.#redrawing) {
      console.error("Cannot redraw while redrawing");
      return;
    }
    this.#redrawing = true;

    this.updateCanvasSize();

    let inputParams = rawInputParams;
    for (const plugin of this.plugins) {
      if (plugin.config.transformInputParams) {
        inputParams = plugin.config.transformInputParams({
          inputParams,
          plot: this,
          self: plugin,
        });
      }
    }

    let frame = this.makeFrame(inputParams);
    for (const plugin of this.plugins) {
      if (plugin.config.transformFrame) {
        frame = plugin.config.transformFrame({
          frame,
          plot: this,
          self: plugin,
        });
      }
    }

    if (this.phase === "initializing") {
      // ON INIT HOOK
      for (const plugin of this.plugins) {
        const deinitCallback = plugin.config.hooks?.onInit?.({
          frame,
          plot: this,
          self: plugin,
        });
        if (deinitCallback) {
          this.#deinitCallbacks.push(deinitCallback);
        }
      }
      this.phase = "initialized";
    }

    // CLEAR
    for (const plugin of this.plugins) {
      plugin.config.hooks?.beforeClear?.({ frame, plot: this, self: plugin });
    }

    clearCanvas(frame);

    for (const plugin of this.plugins) {
      plugin.config.hooks?.afterClear?.({ frame, plot: this, self: plugin });
    }

    if (frame.chartArea.height < 0 || frame.chartArea.width < 0) {
      return;
    }

    // DRAW BOTTOM FACETS
    drawFacets(frame, "bottom");

    // DRAW SERIES
    drawSeries(frame);

    for (const plugin of this.plugins) {
      plugin.config.hooks?.afterSeries?.({ frame, plot: this, self: plugin });
    }

    // DRAW MIDDLE FACETS
    drawFacets(frame, "middle");

    // DRAW AXES
    drawAxes(frame);

    for (const plugin of this.plugins) {
      plugin.config.hooks?.afterAxes?.({ frame, plot: this, self: plugin });
    }

    // DRAW TOP FACETS
    drawFacets(frame, "top");

    this.#redrawing = false;
  }
}

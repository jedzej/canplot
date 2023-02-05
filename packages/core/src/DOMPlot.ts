import { Plot } from "./main";
import {
  PlotDrawInputParams,
  Size,
  PlotStaticConfig,
  Dimensions,
} from "./types";

export class DOMPlot extends Plot {
  #dimensions: Required<Dimensions>;
  #lastDrawConfig_DO_NOT_USE: PlotDrawInputParams;
  #parentSize: Size | undefined;
  #canvas: HTMLCanvasElement | undefined = undefined;

  parentResizeObserver: ResizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      this.#parentSize = {
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      };
      this.draw(this.#lastDrawConfig_DO_NOT_USE);
    }
  });

  constructor(
    staticConfig: PlotStaticConfig,
    inputParams: PlotDrawInputParams
  ) {
    super(staticConfig);
    const { width = "auto", height = "auto" } = staticConfig.dimensions ?? {};
    this.#dimensions = { width, height };
    this.plugins =
      staticConfig.plugins?.map((config, i) => ({
        setState: (updater) => {
          this.plugins[i].state = updater(this.plugins[i].state);
          this.draw(this.#lastDrawConfig_DO_NOT_USE);
        },
        state: config.initState?.(),
        config,
      })) ?? [];
    this.#lastDrawConfig_DO_NOT_USE = inputParams;
    if (staticConfig.canvas) {
      this.attach(staticConfig.canvas);
    }
  }

  attach(canvas: HTMLCanvasElement) {
    if (this.phase !== "not-attached") {
      throw new Error("Plot already attached");
    }
    this.phase = "initializing";
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
      this.draw(this.#lastDrawConfig_DO_NOT_USE);
    }
  }

  getCanvas() {
    if (!this.#canvas) {
      throw new Error("Canvas not attached");
    }
    return this.#canvas;
  }

  getCtx() {
    return this.getCanvas().getContext("2d")!;
  }

  getCanvasSize() {
    const canvas = this.getCanvas();

    return {
      width: canvas.width,
      height: canvas.height,
    };
  }

  updateCanvasSize() {
    const { width, height } = this.#dimensions;
    const canvas = this.getCanvas();
    canvas.width = width === "auto" ? this.#parentSize!.width : width;
    canvas.height = height === "auto" ? this.#parentSize!.height : height;
  }

  update(
    newInputParams:
      | PlotDrawInputParams
      | ((oldInputParams: PlotDrawInputParams) => PlotDrawInputParams)
  ) {
    let effectiveNewInputParams: PlotDrawInputParams;
    if (newInputParams instanceof Function) {
      if (this.phase === "initialized") {
        try {
          effectiveNewInputParams = newInputParams(
            this.#lastDrawConfig_DO_NOT_USE
          );
        } catch (e) {
          console.error(e);
          return;
        }
      } else {
        console.error(
          "Cannot update plot before it is initialized: " + this.phase
        );
        return;
      }
    } else {
      effectiveNewInputParams = newInputParams;
    }
    this.#lastDrawConfig_DO_NOT_USE = effectiveNewInputParams;
    this.draw(effectiveNewInputParams);
  }

  getDrawContext() {
    return this.makeFrame(this.#lastDrawConfig_DO_NOT_USE);
  }
}

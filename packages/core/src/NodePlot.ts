import { Canvas } from "canvas";
import { Plot } from "./main";
import { PlotDrawInputParams, Size, PlotPluginConfig } from "./types";

export class NodePlot extends Plot {
  #canvas: Canvas;

  constructor(
    staticConfig: {
      dimensions: Size;
      plugins?: PlotPluginConfig<any>[];
    },
    inputParams: PlotDrawInputParams
  ) {
    super(staticConfig);
    this.#canvas = new Canvas(
      staticConfig.dimensions.width,
      staticConfig.dimensions.height,
      "image"
    );

    this.plugins =
      staticConfig.plugins?.map((config) => ({
        setState: () => {},
        state: config.initState?.(),
        config,
      })) ?? [];
    this.phase = "initialized";
    this.draw(inputParams);
  }

  getCanvas() {
    return this.#canvas;
  }

  getCtx() {
    // hell with it
    return this.getCanvas().getContext(
      "2d"
    ) as unknown as CanvasRenderingContext2D;
  }

  getCanvasSize() {
    const canvas = this.getCanvas();

    return {
      width: canvas.width,
      height: canvas.height,
    };
  }
}

import {
  clampXPosToChartArea,
  clampYPosToChartArea,
  getScale,
  valFits,
  valToPos,
  valToPxDistance,
} from "./helpers";
import type { PlotDrawFrame } from "./types";

export const CANPLOT_LAYER = {
  TOP: 400,
  MIDDLE: 300,
  BOTTOM: 200,
  BACKGROUND: 100,
} as const;

export class FrameDrawer {
  private _frame: PlotDrawFrame | null = null;

  _updateFrame(frame: PlotDrawFrame) {
    this._frame = frame;
  }
  get frame(){
    if (!this._frame) {
      throw new Error("Frame not set in FrameDrawer");
    }
    return this._frame;
  }
  get ctx() {
    return this.frame.ctx;
  }
  clampXPosToChartArea = (x: number, space: "canvas" | "css" = "canvas"): number =>{
    return clampXPosToChartArea(this.frame, x, space);
  }
  clampYPosToChartArea = (y: number, space: "canvas" | "css" = "canvas"): number =>{
    return clampYPosToChartArea(this.frame, y, space);
  }
  valToPos = (
    value: number,
    scaleId: string,
    space: "canvas" | "css" = "canvas"
  ): number => {
    return valToPos(this.frame, value, scaleId, space);
  };
  valToPxDistance = (
    value: number,
    scaleId: string,
    space: "canvas" | "css" = "canvas"
  ): number => {
    return valToPxDistance(this.frame, value, scaleId, space);
  };
  valFits = (value: number, scaleId: string): boolean => {
    return valFits(this.frame, value, scaleId);
  };
  getScale = (scaleId: string): PlotDrawFrame["scales"][number] | undefined => {
    return getScale(this.frame, scaleId);
  };
}

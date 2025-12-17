import {
  clampXPosToChartArea,
  clampYPosToChartArea,
  getScale,
  valFits,
  valToPos,
  valToPxDistance,
} from "./helpers";
import type { PlotDrawFrame, PlotDrawScaleConfig } from "./types";

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
  get frame() {
    if (!this._frame) {
      throw new Error("Frame not set in FrameDrawer");
    }
    return this._frame;
  }
  get ctx() {
    return this.frame.ctx;
  }
  clampXPosToChartArea = <T extends number | null>(
    x: T,
    space: "canvas" | "css" = "canvas"
  ): T | number => {
    return clampXPosToChartArea(this.frame, x, space);
  };
  clampYPosToChartArea = <T extends number | null>(
    y: T,
    space: "canvas" | "css" = "canvas"
  ): T | number => {
    return clampYPosToChartArea(this.frame, y, space);
  };
  valToPos = (
    value: number,
    scaleId: string,
    space: "canvas" | "css" = "canvas"
  ): number | null => {
    return valToPos(this.frame, value, scaleId, space);
  };
  valToPxDistance = (
    value: number,
    scaleId: string,
    space: "canvas" | "css" = "canvas"
  ): number | null => {
    return valToPxDistance(this.frame, value, scaleId, space);
  };
  valFits = (value: number, scaleId: string): boolean => {
    return valFits(this.frame, value, scaleId);
  };
  getScale = (scaleId: string): PlotDrawScaleConfig | null => {
    return getScale(this.frame, scaleId);
  };
}

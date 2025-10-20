export type PlotConfiguration = {
  padding: PlotPadding;
  scales: PlotScaleConfig[];
};

export type PlotDrawFrame = {
  ctx: CanvasRenderingContext2D;
  dpr: number;
  chartAreaCanvasPX: { x: number; y: number; width: number; height: number };
  chartAreaCSS: { x: number; y: number; width: number; height: number };
  padding: PlotPadding;
  scales: PlotScaleConfig[];
};

export type PlotPadding = {
  top: number;
  bottom: number;
  left: number;
  right: number;
};

export type PlotScaleConfig =
  | {
      type: "linear";
      id: string;
      minmax: [number, number];
      origin: "x" | "y";
      axis: null | PlotAxisLinear;
    }
  | {
      type: "time";
      id: string;
      minmax: [number, number];
      origin: "x" | "y";
      axis: null | PlotAxisTime;
      timeZone: string;
      locale?: string;
    };

export type PlotAxisLinear = {
  position: "left" | "right" | "top" | "bottom";
  size: number;
  tickSpace?: number;
};

export type PlotAxisTime = {
  position: "left" | "right" | "top" | "bottom";
  size: number;
  tickSpace?: number;
  showTimezone?: boolean;
};

export type PlotSize = {
  width: number;
  height: number;
};

export type Style = {
  fillStyle?: CanvasFillStrokeStyles["fillStyle"];
  strokeStyle?: CanvasFillStrokeStyles["strokeStyle"];
} & Partial<
  Pick<
    CanvasPathDrawingStyles,
    "lineCap" | "lineDashOffset" | "lineJoin" | "lineWidth" | "miterLimit"
  >
> &
  Partial<CanvasTextDrawingStyles>;

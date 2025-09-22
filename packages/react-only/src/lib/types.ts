export type PlotConfiguration = {
  style?: React.CSSProperties;
  padding: PlotPadding;
  scales: PlotScaleConfig[];
};

export type PlotPadding = {
  top: number;
  bottom: number;
  left: number;
  right: number;
};

export type PlotScaleConfig = {
  id: string;
  minmax: [number, number] | "auto";
  origin: "x" | "y";
  axis: null | PlotAxis;
};

export type PlotScaleDrawConfig = PlotScaleConfig & {
  minmax: [number, number];
};

export type PlotAxis = {
  position: "left" | "right" | "top" | "bottom";
  size: number;
  type: "time" | "linear";
};

export type PlotState = {
  width: number;
  height: number;
  configuration: PlotConfiguration;
};

export type PlotDrawFrame = {
  ctx: CanvasRenderingContext2D;
  dpr: number;
  canvasSize: { width: number; height: number };
  chartArea: { x: number; y: number; width: number; height: number };
  padding: PlotPadding;
  scales: PlotScaleDrawConfig[];
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
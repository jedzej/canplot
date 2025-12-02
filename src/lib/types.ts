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
  scales: PlotDrawScaleConfig[];
};

export type PlotPadding = {
  top: number;
  bottom: number;
  left: number;
  right: number;
};

export type PlotScaleConfig = {
  id: string;
  min: number;
  max: number;
  origin: "x" | "y";
  axis: null | PlotAxis;
};

export type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type PlotDrawAxis = PlotAxis & { cssRect: Rect; canvasRect: Rect };

export type PlotDrawScaleConfig = PlotScaleConfig & {
  axis: null | PlotDrawAxis;
};

export type PlotAxis = {
  position: "left" | "right" | "top" | "bottom";
  size: number;
  style?: Style;
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

export type TicksConfig =
  | { value: number; label: string }[]
  | ((
      scale: PlotDrawScaleConfig & { axis: PlotDrawAxis },
      frame: PlotDrawFrame
    ) => { value: number; label: string }[]);

export type TicksFormatter = (ticks: number[]) => { value: number; label: string }[];

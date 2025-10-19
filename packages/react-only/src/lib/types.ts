export type PlotConfiguration = {
  padding: PlotPadding;
  scales: PlotScaleConfig[];
  series: PlotSeries<SeriesData>[];
};

export type PlotDrawFrame = {
  ctx: CanvasRenderingContext2D;
  dpr: number;
  chartAreaCanvasPX: { x: number; y: number; width: number; height: number };
  chartAreaCSS: { x: number; y: number; width: number; height: number };
  padding: PlotPadding;
  scales: PlotScaleDrawConfig[];
  series: PlotSeries<SeriesData>[];
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

export type PlotSeries<SD extends SeriesData> = {
  id: string;
  xScaleId: string;
  yScaleId: string;
  plotter: Plotter<SD>;
  data: NoInfer<SD>;
};

export type Plotter<SD extends SeriesData> = (
  frame: PlotDrawFrame,
  series: PlotSeries<SD>,
  xScale: PlotScaleDrawConfig,
  yScale: PlotScaleDrawConfig
) => void;

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

export type SeriesData = Record<string, (number | null | boolean)[]>;

export type Data = Record<string, SeriesData>;

type TimeSeriesData = {
  t: (number | null)[];
  y: (number | null | boolean)[];
  boundYMin?: number[];
  boundYMax?: number[];
};

type CorrelationGraphData = {
  x: (number | null)[];
  y: (number | null)[];
  z?: (number | null)[];
};

const a: SeriesData = {
  t: [1, 2, 3],
  y: [4, 5, 6],
} satisfies TimeSeriesData;
const b: SeriesData = {
  x: [1, 2, 3],
  y: [4, 5, 6],
} satisfies CorrelationGraphData;

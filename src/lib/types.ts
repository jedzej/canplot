import { Plot } from "./Plot";

export type Hooks<SeriesExtras extends Record<string, unknown>> = {
  onInit?: (plot: Plot<SeriesExtras>) => void;
  beforeClear?: (
    drawContext: DrawContext<SeriesExtras>,
    plot: Plot<SeriesExtras>
  ) => void;
  afterClear?: (
    drawContext: DrawContext<SeriesExtras>,
    plot: Plot<SeriesExtras>
  ) => void;
  afterSeries?: (
    drawContext: DrawContext<SeriesExtras>,
    plot: Plot<SeriesExtras>
  ) => void;
  afterAxes?: (
    drawContext: DrawContext<SeriesExtras>,
    plot: Plot<SeriesExtras>
  ) => void;
  onDestroy?: (plot: Plot<SeriesExtras>) => void;
};

export type Size = {
  width: number;
  height: number;
};

export type Dimensions = {
  width: number | "auto";
  height: number | "auto";
};

export type Limits = {
  min: number;
  max: number;
};

export type XScaleId = `x-${string}`;
export type YScaleId = `y-${string}`;

export type Scale = {
  id: XScaleId | YScaleId;
  limits: { autorange: true } | { autorange: false; fixed: Limits };
};

export type SeriesBase = {
  xScaleId: XScaleId;
  yScaleId: YScaleId;
  x: (number | undefined)[];
  y: (number | undefined)[];
  style?: {
    line?: Partial<CanvasPathDrawingStyles>;
    strokeFill?: Partial<CanvasFillStrokeStyles>;
  };
};

export type Plotter<SeriesExtras extends Record<string, unknown> = any> = (
  drawContext: DrawContext<SeriesExtras>,
  series: SeriesBase & SeriesExtras,
  xScale: Scale,
  yScale: Scale
) => void;

export type PlotAxis = {
  scaleId: Scale["id"];
  position: "primary" | "secondary";
  size: number;
  style?: {
    line?: Partial<CanvasPathDrawingStyles>;
    strokeFill?: Partial<CanvasFillStrokeStyles>;
  };
  genTicks?: (limits: Limits) => number[];
  genTickLabels?: (tick: number) => string;
};

type NormalizedPadding = {
  top: number;
  bottom: number;
  right: number;
  left: number;
};

export type PlotDrawConfig<SeriesExtras extends Record<string, unknown>> = {
  padding?: number | NormalizedPadding;
  axes: PlotAxis[];
  scales: Scale[];
  series: (SeriesBase & SeriesExtras & { plotter?: Plotter<SeriesExtras> })[];
};

export type PlotPlugin<S extends Record<string, unknown> = {}> = {
  transformDrawConfig?: (params: PlotDrawConfig<S>) => PlotDrawConfig<S>;
  hooks?: Hooks<S>;
};

export type DrawContext<S extends Record<string, unknown> = {}> = {
  drawConfig: PlotDrawConfig<S>;
  ctx: CanvasRenderingContext2D;
  canvasSize: Size;
  chartArea: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  padding: NormalizedPadding;
};

export type StaticConfig<SeriesExtras extends Record<string, unknown>> = {
  canvas: HTMLCanvasElement;
  plugins: PlotPlugin<SeriesExtras>[];
  dimensions: Dimensions;
};

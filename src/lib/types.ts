import { Plot } from "./Plot";

export type SeriesExtrasBase = Record<string, unknown>;

export type Hooks<Extras = any> = {
  onInit?: (plot: Plot<Extras>) => void;
  beforeClear?: (drawContext: DrawContext<Extras>, plot: Plot<Extras>) => void;
  afterClear?: (drawContext: DrawContext<Extras>, plot: Plot<Extras>) => void;
  afterSeries?: (drawContext: DrawContext<Extras>, plot: Plot<Extras>) => void;
  afterAxes?: (drawContext: DrawContext<Extras>, plot: Plot<Extras>) => void;
  onDestroy?: (plot: Plot<Extras>) => void;
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

export type SeriesBase<Extras = { plotter: Plotter }> = {
  id?: string;
  xScaleId: XScaleId;
  yScaleId: YScaleId;
  x: (number | undefined)[];
  y: (number | undefined)[];
  style?: {
    line?: Partial<CanvasPathDrawingStyles>;
    strokeFill?: Partial<CanvasFillStrokeStyles>;
  };
  plotterOptions: Extras;
};

export type Plotter<Extras = { plotter: Plotter }> = (
  drawContext: DrawContext,
  series: SeriesBase<Extras>,
  xScale: Scale,
  yScale: Scale
) => void;

export type PlotAxis = {
  scaleId: Scale["id"];
  position?: "primary" | "secondary";
  size?: number;
  style?: {
    line?: Partial<CanvasPathDrawingStyles>;
    strokeFill?: Partial<CanvasFillStrokeStyles>;
  };
  genTicks?: (drawConfig: DrawContext, scale: Scale) => number[];
  genTickLabels?: (tick: number) => string;
};

type NormalizedPadding = {
  top: number;
  bottom: number;
  right: number;
  left: number;
};

export type PlotDrawConfig<Extras = any> = {
  padding?: number | NormalizedPadding;
  axes: PlotAxis[];
  scales: Scale[];
  series: SeriesBase<Extras>[];
};

export type PlotPlugin<Extras = any> = {
  transformDrawConfig?: (
    params: PlotDrawConfig<Extras>
  ) => PlotDrawConfig<Extras>;
  hooks?: Hooks<Extras>;
};

export type DrawContext<Extras = any> = {
  drawConfig: PlotDrawConfig<Extras>;
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

export type StaticConfig<Extras = any> = {
  canvas: HTMLCanvasElement;
  plugins: PlotPlugin<Extras>[];
  dimensions: Dimensions;
};

import { Plot } from "./Plot";

export type SeriesExtrasBase = Record<string, unknown>;

export type Hooks<Extras = any> = {
  onInit?: (drawContext: DrawContext<Extras>, plot: Plot<Extras>) => void;
  beforeClear?: (drawContext: DrawContext<Extras>, plot: Plot<Extras>) => void;
  afterClear?: (drawContext: DrawContext<Extras>, plot: Plot<Extras>) => void;
  afterSeries?: (drawContext: DrawContext<Extras>, plot: Plot<Extras>) => void;
  afterAxes?: (drawContext: DrawContext<Extras>, plot: Plot<Extras>) => void;
  onDestroy?: (plot: Plot<Extras>) => void;
};

export type Style = {
  fillStyle?: CanvasFillStrokeStyles["fillStyle"];
  strokeStyle?: CanvasFillStrokeStyles["strokeStyle"];
} & Partial<
  Pick<
    CanvasPathDrawingStyles,
    "lineCap" | "lineDashOffset" | "lineJoin" | "lineWidth" | "miterLimit"
  >
> & Partial<CanvasTextDrawingStyles>;

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
  x: number[];
  y: number[];
  // style?: Style;
  plotterOptions: Extras;
};

export type Plotter<Extras = { plotter: Plotter }> = (
  drawContext: DrawContext,
  series: SeriesBase<Extras>,
  xScale: Scale,
  yScale: Scale
) => void;

export type PlotAxis = {
  id?: string;
  scaleId: Scale["id"];
  position?: "primary" | "secondary";
  size?: number;
  tickStyle?: Style;
  tickSize?: number;
  style?: Style;
  label?: string;
  labelStyle?: Style;
  labelOffset?: number;
  labelAlign?: "left" | "center" | "right";
  genTicks?: (
    drawConfig: DrawContext,
    scale: Scale,
    axis: PlotAxis
  ) => number[];
  tickFormat?: (
    drawConfig: DrawContext,
    scale: Scale,
    ticks: number[]
  ) => string[];
};

export type VLineFacet = {
  type: "v-line";
  x: number;
  scaleId: XScaleId;
  style?: Style;
};

export type HLineFacet = {
  type: "h-line";
  y: number;
  scaleId: YScaleId;
  style?: Style;
};

export type CustomFacet = {
  type: "custom";
  draw: (drawContext: DrawContext, facet: CustomFacet) => void;
  payload?: unknown;
  style?: Style;
};

export type SpanFacet = {
  type: "span";
  x?: {
    scaleId: XScaleId;
    min?: number;
    max?: number;
  };
  y?: {
    scaleId: YScaleId;
    min?: number;
    max?: number;
  };
  style?: Style;
};

export type FacetLayer = "top" | "middle" | "bottom";

export type Facet = (VLineFacet | HLineFacet | SpanFacet | CustomFacet) & {
  id?: string;
  layer?: FacetLayer;
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
  facets?: Facet[];
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

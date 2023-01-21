import { Plot } from "./Plot";

export type Hooks = {
  onInit?: (opts: { drawContext: DrawContext; plot: Plot }) => void;
  beforeClear?: (opts: { drawContext: DrawContext; plot: Plot }) => void;
  afterClear?: (opts: { drawContext: DrawContext; plot: Plot }) => void;
  afterSeries?: (opts: { drawContext: DrawContext; plot: Plot }) => void;
  afterAxes?: (opts: { drawContext: DrawContext; plot: Plot }) => void;
  onDestroy?: (opts: { plot: Plot }) => void;
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

export type MakeLimitsOpts = {
  drawContext: Omit<DrawContext, "limits">;
  scaleId: XScaleId | YScaleId;
};

export type MakeLimits = (opts: MakeLimitsOpts) => Limits;

export type Scale = {
  id: XScaleId | YScaleId;
  makeLimits?: MakeLimits;
};

export type SeriesBase = {
  id?: string;
  xScaleId: XScaleId;
  yScaleId: YScaleId;
  x: number[];
  y: number[];
  // style?: Style;
  plotter: Plotter;
};

export type Plotter = (
  drawContext: DrawContext,
  series: SeriesBase,
  xScale: Scale,
  yScale: Scale
) => void;

export type PlotAxisGenTicksOpts = {
  drawContext: DrawContext;
  scale: Scale;
  axis: PlotAxis;
};

export type PlotAxisTickFormatOpts = {
  drawContext: DrawContext;
  scale: Scale;
  ticks: number[];
};

export type PlotAxisGenTicks = (opts: PlotAxisGenTicksOpts) => number[];
export type PlotAxisTickFormat = (opts: PlotAxisTickFormatOpts) => string[];

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
  genTicks?: PlotAxisGenTicks;
  tickFormat?: PlotAxisTickFormat;
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

export type PlotDrawConfig = {
  padding?: number | NormalizedPadding;
  axes: PlotAxis[];
  scales: Scale[];
  facets?: Facet[];
  series: SeriesBase[];
};

export type PlotPlugin = {
  transformDrawConfig?: (params: PlotDrawConfig) => PlotDrawConfig;
  hooks?: Hooks;
};

export type DrawContext = {
  drawConfig: PlotDrawConfig;
  ctx: CanvasRenderingContext2D;
  canvasSize: Size;
  limits: Record<Scale["id"], Limits>;
  chartArea: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  padding: NormalizedPadding;
};

export type StaticConfig = {
  canvas: HTMLCanvasElement;
  plugins?: PlotPlugin[];
  dimensions: Dimensions;
};

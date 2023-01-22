import { Plot } from "./Plot";

export type Hooks = {
  onInit?: (opts: { frame: PlotDrawFrame; plot: Plot }) => (() => void) | void;
  beforeClear?: (opts: { frame: PlotDrawFrame; plot: Plot }) => void;
  afterClear?: (opts: { frame: PlotDrawFrame; plot: Plot }) => void;
  afterSeries?: (opts: { frame: PlotDrawFrame; plot: Plot }) => void;
  afterAxes?: (opts: { frame: PlotDrawFrame; plot: Plot }) => void;
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
  width?: number | "auto";
  height?: number | "auto";
};

export type Limits = {
  min: number;
  max: number;
};

export type XScaleId = `x-${string}`;
export type YScaleId = `y-${string}`;

export type MakeLimitsOpts = {
  frame: Omit<PlotDrawFrame, "limits">;
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
  plotter: Plotter;
};

export type Plotter = (
  frame: PlotDrawFrame,
  series: SeriesBase,
  xScale: Scale,
  yScale: Scale
) => void;

export type PlotAxisGenTicksOpts = {
  frame: PlotDrawFrame;
  scale: Scale;
  axis: PlotAxis;
};

export type PlotAxisTickFormatOpts = {
  frame: PlotDrawFrame;
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
  draw: (frame: PlotDrawFrame, facet: CustomFacet) => void;
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

export type PlotDrawInputParams = {
  padding?: number | NormalizedPadding;
  axes: PlotAxis[];
  scales: Scale[];
  facets?: Facet[];
  series: SeriesBase[];
};

export type PlotPlugin = {
  transformInputParams?: (inputParams: PlotDrawInputParams) => PlotDrawInputParams;
  transformFrame?: (frame: PlotDrawFrame) => PlotDrawFrame;
  hooks?: Hooks;
};

export type PlotDrawFrame = {
  inputParams: PlotDrawInputParams;
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
  canvas?: HTMLCanvasElement;
  plugins?: PlotPlugin[];
  dimensions?: Dimensions;
};

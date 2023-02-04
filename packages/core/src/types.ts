import { Plot } from "./Plot";

type HookOpts<S> = {
  frame: PlotDrawFrame;
  plot: Plot;
  self: PlotPlugin<S>;
};

export type Hooks<S> = {
  onInit?: (opts: HookOpts<S>) => (() => void) | void;
  beforeClear?: (opts: HookOpts<S>) => void;
  afterClear?: (opts: HookOpts<S>) => void;
  afterSeries?: (opts: HookOpts<S>) => void;
  afterAxes?: (opts: HookOpts<S>) => void;
  onDestroy?: (opts: Omit<HookOpts<S>, "frame">) => void;
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
  tickLabelStyle?: Style;
  tickSize?: number;
  axisStyle?: Style;
  tickStyle?: Style;
  multilineGap?: number;
  label?: string;
  labelStyle?: Style;
  labelOffset?: number;
  labelAlign?: "start" | "center" | "end";
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

export type PlotPlugin<S> = {
  store: S;
  config: PlotPluginConfig<S>;
};

export type PlotPluginConfig<S = any> = {
  transformInputParams?: (opts: {
    inputParams: PlotDrawInputParams;
    self: PlotPlugin<S>;
    plot: Plot;
  }) => PlotDrawInputParams;
  transformFrame?: (opts: {
    frame: PlotDrawFrame;
    self: PlotPlugin<S>;
    plot: Plot;
  }) => PlotDrawFrame;
  hooks?: Hooks<S>;
  initState?: () => S;
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

export type PlotStaticConfig = {
  canvas?: HTMLCanvasElement;
  plugins?: PlotPluginConfig<any>[];
  dimensions?: Dimensions;
};

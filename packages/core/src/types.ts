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

export type ScaleId = XScaleId | YScaleId;

export type MakeLimitsOpts = {
  frame: Omit<Frame, "scales">;
  scaleId: ScaleId;
};

export type MakeLimits = (opts: MakeLimitsOpts) => Limits;

export type SeriesBase = {
  id?: string;
  xScaleId: XScaleId;
  yScaleId: YScaleId;
  x: number[];
  y: number[];
  plotter: Plotter;
};

export type Plotter = (
  frame: Frame,
  series: SeriesBase,
  xScale: FrameScale,
  yScale: FrameScale
) => void;

export type PlotAxisGenTicksOpts = {
  frame: Frame;
  scale: FrameScale;
  axis: PlotAxis;
};

export type PlotAxisTickFormatOpts = {
  frame: Frame;
  scale: FrameScale;
  ticks: number[];
};

export type PlotAxisGenTicks = (opts: PlotAxisGenTicksOpts) => number[];
export type PlotAxisTickFormat = (opts: PlotAxisTickFormatOpts) => string[];

export type PlotAxis = {
  id?: string;
  scaleId: SceneScale["id"];
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

export type FacetLayer = "top" | "middle" | "bottom";

type Padding = {
  top: number;
  bottom: number;
  right: number;
  left: number;
};

export type PlotStaticConfig = {
  canvas?: HTMLCanvasElement;
  dimensions?: Dimensions;
};

export type SceneScale = {
  id: XScaleId | YScaleId;
  makeLimits?: MakeLimits | undefined;
};

export type FrameScale = {
  id: XScaleId | YScaleId;
  limits: Limits;
};

export type Facet = {
  layer: FacetLayer;
  id?: string;
  plotter: (frame: Frame, id?: string) => void;
};

export type Scene = {
  padding: Padding;
  axes: PlotAxis[];
  scales: SceneScale[];
  facets: Facet[];
  series: SeriesBase[];
};

export type Frame = {
  ctx: CanvasRenderingContext2D;
  canvasSize: Size;
  chartArea: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  padding: Padding;
  axes: PlotAxis[];
  scales: FrameScale[];
  facets: Facet[];
  series: SeriesBase[];
};

export type PlotBuilderPlugin<ID extends string, PS, S = unknown> = {
  id: ID;
  initialState: PS;
  transformScene?: (opts: {
    id: ID;
    ctx: CanvasRenderingContext2D;
    scene: Scene;
    getStore: () => Flatten<S & Record<ID, PS>>;
    getPluginState: () => PS;
  }) => void;
  transformFrame?: (opts: {
    id: ID;
    ctx: CanvasRenderingContext2D;
    frame: Frame;
    scene: Scene;
    getStore: () => Flatten<S & Record<ID, PS>>;
    getPluginState: () => PS;
  }) => void;
  beforeDraw?: (opts: {
    id: ID;
    ctx: CanvasRenderingContext2D;
    getStore: () => Flatten<S & Record<ID, PS>>;
    getPluginState: () => PS;
    setPluginState: (newState: PS) => void;
  }) => void;
  afterDraw?: (opts: {
    id: ID;
    ctx: CanvasRenderingContext2D;
    frame: Frame;
    scene: Scene;
    getStore: () => Flatten<S & Record<ID, PS>>;
    getPluginState: () => PS;
    setPluginState: (newState: PS) => void;
  }) => void;
  deinit?: (opts: {
    id: ID;
    ctx: CanvasRenderingContext2D;
    getStore: () => Flatten<S & Record<ID, PS>>;
    getPluginState: () => PS;
  }) => void;
};

export type MakePlugin<ID extends string, PS, S = unknown> = (opts: {
  getStore: () => S;
  setPluginState: (newState: PS) => void;
  getPluginState: () => PS;
  ctx: CanvasRenderingContext2D;
}) => PlotBuilderPlugin<ID, PS, S>;

export type Flatten<T> = {
  [K in keyof T]: T[K];
} & {};

export type MakeScene<S> = (state: S) => Scene;

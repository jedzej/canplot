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

export type MakeLimitsOpts<TInputs = {}> = {
  frame: Omit<Frame<TInputs>, "scales">;
  scaleId: ScaleId;
};

export type MakeLimits = <TInputs = {}>(
  opts: MakeLimitsOpts<TInputs>
) => Limits;

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
  logger?: boolean;
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

export type Scene<TInputs = {}> = {
  padding: Padding;
  axes: PlotAxis[];
  scales: SceneScale[];
  facets: Facet[];
  series: SeriesBase[];
  inputs: TInputs;
};

export type Frame<TInputs = {}> = {
  ctx: CanvasRenderingContext2D;
  dpr: number;
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
  inputs: TInputs;
};

export type Plugin<
  ID extends string = never,
  POut = never,
  PIn = never,
  Outputs = {}
> = {
  storeKey?: ID;
  defaultState?: POut;
  init: (opts: {
    state: { current: any };
    ctx: CanvasRenderingContext2D;
    outputs: Outputs;
    setOutput: (newOutput: POut) => void;
  }) =>
    | void
    | ((opts: { ctx: CanvasRenderingContext2D; outputs: Outputs }) => void);
  transformScene?: (opts: {
    state: { current: any };
    id: ID;
    ctx: CanvasRenderingContext2D;
    scene: Scene;
    outputs: Outputs;
    input: PIn;
    output: POut;
    setOutput: (newOutput: POut) => void;
  }) => void;
  transformFrame?: (opts: {
    state: { current: any };
    id: ID;
    ctx: CanvasRenderingContext2D;
    frame: Frame;
    scene: Scene;
    outputs: Outputs;
    input: PIn;
    output: POut;
    setOutput: (newOutput: POut) => void;
  }) => void;
  beforeDraw?: (opts: {
    state: { current: any };
    id: ID;
    ctx: CanvasRenderingContext2D;
    outputs: Outputs;
    input: PIn;
    output: POut;
    setOutput: (newOutput: POut) => void;
  }) => void;
  afterDraw?: (opts: {
    state: { current: any };
    id: ID;
    ctx: CanvasRenderingContext2D;
    frame: Frame;
    scene: Scene;
    outputs: Outputs;
    input: PIn;
    output: POut;
    setOutput: (newOutput: POut) => void;
  }) => void;
};

type IfDefined<TCond, TIfDefined, TIfNever = {}> = [TCond] extends [never]
  ? TIfNever
  : TIfDefined;

type IDInOutPartial<
  ID extends string = never,
  TIn = never,
  TOut = never
> = IfDefined<ID, { id: ID }> &
  IfDefined<TOut, { output: TOut; setOutput: (newOutput: TOut) => void }> &
  IfDefined<TIn, { input: TIn }>;

type TransformSceneOpts<
  ID extends string = never,
  TIn = never,
  TOut = never,
  TInputs = {}
> = IDInOutPartial<ID, TIn, TOut> & {
  ctx: CanvasRenderingContext2D;
  scene: Scene<TInputs>;
};

type TransformFrameOpts<
  ID extends string = never,
  TIn = never,
  TOut = never,
  TInputs = {}
> = IDInOutPartial<ID, TIn, TOut> & {
  ctx: CanvasRenderingContext2D;
  scene: Scene<TInputs>;
  frame: Frame<TInputs>;
};

type BeforeDrawOpts<ID extends string = never, TOut = never> = IDInOutPartial<
  ID,
  never,
  TOut
> & {
  ctx: CanvasRenderingContext2D;
};

type AfterDrawOpts<
  ID extends string = never,
  TIn = never,
  TOut = never,
  TInputs = {}
> = IDInOutPartial<ID, TIn, TOut> & {
  ctx: CanvasRenderingContext2D;
  frame: Frame<TInputs>;
  scene: Scene<TInputs>;
};

export type InstantiatedPlugin<
  ID extends string = never,
  TIn = never,
  TOut = never,
  TInputs = {}
> = {
  transformScene?: (opts: TransformSceneOpts<ID, TIn, TOut, TInputs>) => void;
  transformFrame?: (opts: TransformFrameOpts<ID, TIn, TOut, TInputs>) => void;
  beforeDraw?: (opts: BeforeDrawOpts<ID, TOut>) => void;
  afterDraw?: (opts: AfterDrawOpts<ID, TIn, TOut, TInputs>) => void;
  deinit?: () => void;
} & IfDefined<TOut, { defaultOutput: TOut }>;

export type MakePluginOpts<POut = never> = {
  ctx: CanvasRenderingContext2D;
} & IfDefined<POut, { setOutput: (newOutput: POut) => void }>;

export type MakePlugin<ID extends string, PIn, POut, TInputs> = (
  opts: MakePluginOpts<POut>
) => InstantiatedPlugin<ID, PIn, POut, TInputs>;

export type PluginBuilder<
  ID extends string = never,
  TIn = never,
  TOut = never
> = {
  as<T extends string>(id: T): PluginBuilder<T, TIn, TOut>;
  input<T>(): PluginBuilder<ID, T, TOut>;
  output<T>(): PluginBuilder<ID, TIn, T>;
  make: (maker: MakePlugin<ID, TIn, TOut, {}>) => PluginBuilder<ID, TIn, TOut>;
  __initialize: MakePlugin<ID, TIn, TOut, {}>;
  __getId: () => ID | undefined;
};

export type MakeScene<TInputs, TOutputs> = (
  outputs: TOutputs
) => Scene<TInputs>;

export type PlotPhase =
  | "not-attached"
  | "initializing"
  | "idle"
  | "drawing"
  | "detached";

export type CanPlot<TInputs = {}, TOutputs = {}> = {
  attach(canvas: HTMLCanvasElement): void;
  detach(): void;
  use<ID extends string = never, PIn = undefined, POut = undefined>(
    plugin: PluginBuilder<ID, PIn, POut>
  ): IfDefined<
    ID,
    CanPlot<
      IfDefined<
        PIn,
        IfDefined<TInputs, TInputs, {}> & Record<ID, PIn>,
        TInputs
      >,
      IfDefined<POut, TOutputs & Record<ID, POut>, TOutputs>
    >,
    CanPlot<TInputs, TOutputs>
  >;
  draw(makeScene: MakeScene<TInputs, TOutputs>): void;
};

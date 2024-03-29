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
  tickSpace?: number;
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

export type ZoomWindow = {
  x: Limits;
  y: Limits;
};

export type Scene = {
  dimensions: Dimensions;
  padding: Padding;
  axes: PlotAxis[];
  scales: SceneScale[];
  facets: Facet[];
  series: SeriesBase[];
  zoomWindow: ZoomWindow;
};

export type Frame = {
  plot: CanPlot;
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
  zoomWindow: ZoomWindow;
};

type XY = {
  x: number;
  y: number;
};

export type CursorPosition =
  | {
      isWithinChart: true;
      isClamped: boolean;
      screen: XY;
      canvas: XY;
      chart: XY;
      scaled: Record<ScaleId, number>;
    }
  | {
      isWithinChart: false;
      screen: XY;
      canvas: XY;
    };

export type HoverState = {
  position?: CursorPosition;
};

export type HoverEventData = {
  position?: CursorPosition;
  frame: Frame;
};

export type ClickEventData = {
  position?: CursorPosition;
  frame: Frame;
};

export type DblClickEventData = {
  position?: CursorPosition;
  frame: Frame;
};

export type SpanDimensions = {
  x: boolean;
  y: boolean;
};

export type SpanSelectEventData = {
  phase: "start" | "move" | "end" | "cancel";
  dimensions: SpanDimensions;
  startPos: CursorPosition;
  endPos: CursorPosition;
  frame: Frame;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
};

export type SceneUpdater = (mutableScene: Scene) => void;

export type PlotPhase =
  | "not-attached"
  | "initializing"
  | "idle"
  | "drawing"
  | "detached";

export type PlotEvents = {
  hover: HoverEventData;
  spanSelect: SpanSelectEventData;
  click: ClickEventData;
  dblclick: DblClickEventData;
  frameDrawFinish: { frame: Frame; scene: Scene };
};

export type CanPlot = {
  init(canvas: HTMLCanvasElement, scene: Partial<Scene>): void;
  deinit(): void;
  update(sceneUpdater: SceneUpdater): void;
  on: <K extends keyof PlotEvents>(
    eventName: K,
    callback: (data: PlotEvents[K]) => void
  ) => () => void;
};

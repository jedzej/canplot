export type Hooks = {
  init?: () => void;
  update?: () => void;
  deinit?: () => void;
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
};

export type Plotter<SeriesExtras extends Record<string, unknown> = any> = (
  drawContext: PlotDrawContext<SeriesExtras>,
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

export type PlotDrawConfig<SeriesExtras extends Record<string, unknown>> = {
  padding:
    | number
    | { top: number; right: number; bottom: number; left: number };
  axes: PlotAxis[];
  scales: Scale[];
  series: (SeriesBase & SeriesExtras & { plotter?: Plotter<SeriesExtras> })[];
};

export type PlotPlugin<S extends Record<string, unknown>> = {
  transformDrawConfig: (params: PlotDrawConfig<S>) => PlotDrawConfig<S>;
  hooks: Hooks;
};

export type PlotDrawContext<S extends Record<string, unknown> = {}> = {
  drawConfig: PlotDrawConfig<S>;
  ctx: CanvasRenderingContext2D;
  canvasSize: Size;
  chartArea: {
    width: number;
    height: number;
    lt: { x: number; y: number };
    rt: { x: number; y: number };
    rb: { x: number; y: number };
    lb: { x: number; y: number };
  };
};

export type StaticConfig<S extends Record<string, unknown>> = {
  canvas: HTMLCanvasElement;
  plugins: PlotPlugin<S>[];
  dimensions: Dimensions;
};

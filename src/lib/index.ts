// Main components
export { CanPlot } from './CanPlot';

// Plot components
export { LinePlot } from './plot/LinePlot';
export { ScatterPlot } from './plot/ScatterPlot';
export { BarPlot } from './plot/BarPlot';
export { AreaPlot } from './plot/AreaPlot';
export { SparklinePlot } from './plot/SparklinePlot';
export { usePositioned } from './plot/AnnotationX';

// Interaction components
export { ChartAreaInteractions } from './interactions/ChartAreaInteractions';
export { TooltipsX } from './interactions/TooltipsX';
export { Crosshair } from './interactions/CrossHair';
export { SelectBox } from './interactions/SelectBox';
export { AxisOverlay } from './interactions/AxisOverlay';

// Types
export type {
  PlotScaleConfig,
  PlotScaleLinearConfig,
  PlotScaleTimeConfig,
  PlotConfiguration,
  PlotDrawFrame,
  PlotDrawScaleConfig,
  PlotDrawScaleLinearConfig,
  PlotDrawScaleTimeConfig,
  PlotPadding,
  PlotSize,
  Rect,
  Style,
} from './types';

// Utilities
export { 
  valToPos, 
  valToPxDistance, 
  valFits,
  getScale,
  isXScale,
  isYScale,
  applyStyles,
  pxToValDistance,
  clampXPosToChartArea,
  clampYPosToChartArea,
  posToVal,
} from './helpers';

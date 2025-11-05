# CanPlot

A high-performance React charting library built on Canvas.

## Features

- 🚀 **High Performance**: Built on Canvas for smooth rendering of large datasets
- 📊 **Multiple Chart Types**: Line, Bar, Scatter, Area, and Sparkline plots
- 🎨 **Customizable**: Flexible styling and configuration options
- 📈 **Interactive**: Built-in tooltips, crosshairs, and selection tools
- ⏱️ **Time Series**: First-class support for time-based data
- 📱 **Responsive**: Adapts to container size
- 🎯 **Type Safe**: Written in TypeScript with full type definitions

## Installation

```bash
npm install canplot
# or
yarn add canplot
# or
pnpm add canplot
# or
bun add canplot
```

## Quick Start

```tsx
import { CanPlot, LinePlot } from 'canplot';

function MyChart() {
  const data = [
    { x: 1, y: 30 },
    { x: 2, y: 45 },
    { x: 3, y: 60 },
    { x: 4, y: 35 },
    { x: 5, y: 70 },
  ];

  const scales = [
    {
      id: 'x',
      type: 'linear' as const,
      axis: { position: 'bottom' as const, size: 40 },
      origin: 'x' as const,
      min: 0,
      max: 10,
    },
    {
      id: 'y',
      type: 'linear' as const,
      axis: { position: 'left' as const, size: 40 },
      origin: 'y' as const,
      min: 0,
      max: 100,
    },
  ];

  return (
    <CanPlot
      style={{ width: '100%', height: '400px' }}
      configuration={{
        padding: { bottom: 20, left: 20, right: 20, top: 20 },
        scales,
      }}
    >
      <LinePlot
        data={data}
        xScaleId="x"
        yScaleId="y"
        style={{
          strokeStyle: '#4c6ef5',
          lineWidth: 2,
        }}
      />
    </CanPlot>
  );
}
```

## Chart Types

### Line Plot

```tsx
<LinePlot
  data={data}
  xScaleId="x"
  yScaleId="y"
  style={{ strokeStyle: '#4c6ef5', lineWidth: 2 }}
/>
```

### Bar Plot

```tsx
<BarPlot
  data={data}
  xScaleId="x"
  yScaleId="y"
  barWidth={0.6}
  xPositionOffset={0}
  style={{ fillStyle: '#ff6b6b' }}
/>
```

### Scatter Plot

```tsx
<ScatterPlot
  data={data}
  xScaleId="x"
  yScaleId="y"
  style={{
    fillStyle: '#51cf66',
    strokeStyle: '#37b24d',
    lineWidth: 2,
  }}
/>
```

### Area Plot

```tsx
<AreaPlot
  data={data}
  xScaleId="x"
  yScaleId="y"
  style={{
    fillStyle: 'rgba(76, 110, 245, 0.2)',
    strokeStyle: '#4c6ef5',
    lineWidth: 2,
  }}
/>
```

## Interactions

### Tooltips

```tsx
<ChartAreaInteractions>
  <TooltipsX
    xScaleId="x"
    data={[
      {
        seriesId: 'series1',
        yScaleId: 'y',
        points: data,
      },
    ]}
    renderTooltip={(state) => {
      if (!state || state.points[0].y === null) return null;
      return (
        <div style={{ /* tooltip styles */ }}>
          X: {state.x.toFixed(1)}, Y: {state.points[0].y?.toFixed(1)}
        </div>
      );
    }}
  />
</ChartAreaInteractions>
```

### Crosshair

```tsx
<ChartAreaInteractions>
  <Crosshair color="rgba(0, 0, 0, 0.3)" />
</ChartAreaInteractions>
```

### Selection Box

```tsx
<ChartAreaInteractions>
  <SelectBox
    onSelect={(selection) => {
      console.log('Selected area:', selection);
    }}
  />
</ChartAreaInteractions>
```

## Time Series

```tsx
const startDate = new Date('2024-01-01T00:00:00Z');

const scales = [
  {
    id: 'x',
    type: 'time' as const,
    axis: { position: 'bottom' as const, size: 40 },
    origin: 'x' as const,
    min: startDate.getTime(),
    max: startDate.getTime() + 30 * 24 * 60 * 60 * 1000,
    timeZone: 'UTC',
  },
  // ... y scale
];

const data = Array.from({ length: 30 }, (_, i) => ({
  x: startDate.getTime() + i * 24 * 60 * 60 * 1000,
  y: Math.random() * 100,
}));
```

## API Reference

### Components

- **CanPlot**: Main container component
- **LinePlot**: Renders line charts
- **BarPlot**: Renders bar charts
- **ScatterPlot**: Renders scatter plots
- **AreaPlot**: Renders area charts
- **SparklinePlot**: Renders compact sparkline charts
- **ChartAreaInteractions**: Container for interactive features
- **TooltipsX**: Adds tooltips based on X-axis position
- **Crosshair**: Adds crosshair cursor
- **SelectBox**: Adds box selection
- **AxisOverlay**: Custom axis rendering

### Types

Full TypeScript type definitions are included.

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Repository

https://github.com/jedzej/canplot

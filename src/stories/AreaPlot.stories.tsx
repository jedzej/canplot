import type { Meta, StoryObj } from "@storybook/react-vite";
import { CanPlot } from "../lib/CanPlot";
import { AreaPlot } from "../lib/plot/AreaPlot";
import { ScatterPlot } from "../lib/plot/ScatterPlot";
import { ChartAreaInteractions } from "../lib/interactions/ChartAreaInteractions";
import { Crosshair } from "../lib/interactions/CrossHair";
import { SelectBox } from "../lib/interactions/SelectBox";
import type { PlotScaleConfig } from "../lib/types";
import { XTicks, YTicks } from "../lib/plot/Ticks";
import { makeLinearTicks,  makeTimeTicks } from "../lib";

const meta: Meta<typeof CanPlot> = {
  component: CanPlot,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

// Basic area plot
export const Basic: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        axis: {
          position: "bottom",
          size: 40,
        },
        origin: "x",
        min: 0,
        max: 100,
      },
      {
        id: "y",
        axis: {
          position: "left",
          size: 40,
        },
        origin: "y",
        min: 0,
        max: 100,
      },
    ];

    return (
      <div style={{ padding: "20px" }}>
        <CanPlot
          style={{ width: "100%", height: "400px" }}
          configuration={{
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
              top: 20,
            },
            scales,
          }}
        >
          <AreaPlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: [30 + Math.sin(i / 5) * 15, 70 + Math.sin(i / 5) * 15],
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "rgba(66, 153, 225, 0.5)",
            }}
          />
          <XTicks scaleId="x" ticks={makeLinearTicks()} />
          <YTicks scaleId="y" ticks={makeLinearTicks()} />
        </CanPlot>
      </div>
    );
  },
};

// Area plot with interactions
export const WithInteractions: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        axis: {
          position: "bottom",
          size: 40,
        },
        origin: "x",
        min: 0,
        max: 100,
      },
      {
        id: "y",
        axis: {
          position: "left",
          size: 40,
        },
        origin: "y",
        min: 0,
        max: 100,
      },
    ];

    return (
      <div style={{ padding: "20px" }}>
        <CanPlot
          style={{ width: "100%", height: "400px" }}
          configuration={{
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
              top: 20,
            },
            scales,
          }}
        >
          <ChartAreaInteractions
            sync={{
              key: "area",
              xViaScaleId: "x",
              yViaScaleId: "y",
            }}
          >
            <Crosshair />
            <SelectBox makeStyle={() => ({ backgroundColor: "#4299e144" })} />
          </ChartAreaInteractions>

          <AreaPlot
            data={Array.from({ length: 60 }, (_, i) => {
              const x = i * 1.67;
              const center = 50 + Math.sin(i / 8) * 20;
              const width = 15 + Math.cos(i / 10) * 10;
              return {
                x,
                y: [center - width, center + width],
              };
            })}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "rgba(72, 187, 120, 0.6)",
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Time series area plot
export const TimeSeries: Story = {
  render: () => {
    const refPoint = Date.parse("2025-11-01T12:00:00Z");
    const scales: PlotScaleConfig[] = [
      {
        id: "t",
        axis: {
          position: "bottom",
          size: 50,
        },
        origin: "x",
        min: refPoint - 1000 * 60 * 60 * 24 * 7, // 7 days ago
        max: refPoint,
      },
      {
        id: "y",
        axis: {
          position: "left",
          size: 50,
        },
        origin: "y",
        min: 0,
        max: 100,
      },
    ];

    return (
      <div style={{ padding: "20px" }}>
        <CanPlot
          style={{ width: "100%", height: "400px" }}
          configuration={{
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
              top: 20,
            },
            scales,
          }}
        >
          <ChartAreaInteractions
            sync={{
              key: "timeseries-area",
              xViaScaleId: "t",
              yViaScaleId: "y",
            }}
          >
            <Crosshair />
            <SelectBox makeStyle={() => ({ backgroundColor: "#ed8936aa" })} />
          </ChartAreaInteractions>

          <AreaPlot
            data={Array.from({ length: 100 }, (_, i) => {
              const x =
                refPoint -
                1000 * 60 * 60 * 24 * 7 +
                (i * 1000 * 60 * 60 * 24 * 7) / 100;
              const baseValue = 50 + Math.sin(i / 10) * 20;
              return {
                x,
                y: [baseValue - 15, baseValue + 15],
              };
            })}
            xScaleId="t"
            yScaleId="y"
            style={{
              fillStyle: "rgba(237, 137, 54, 0.5)",
            }}
          />
          <XTicks scaleId="t" ticks={makeTimeTicks({})} />
          <YTicks scaleId="y" ticks={makeLinearTicks()} />
        </CanPlot>
      </div>
    );
  },
};

// Multiple area plots
export const MultipleAreas: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        axis: {
          position: "bottom",
          size: 40,
        },
        origin: "x",
        min: 0,
        max: 100,
      },
      {
        id: "y",
        axis: {
          position: "left",
          size: 40,
        },
        origin: "y",
        min: 0,
        max: 100,
      },
    ];

    return (
      <div style={{ padding: "20px" }}>
        <CanPlot
          style={{ width: "100%", height: "400px" }}
          configuration={{
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
              top: 20,
            },
            scales,
          }}
        >
          <ChartAreaInteractions
            sync={{
              key: "multi-area",
              xViaScaleId: "x",
              yViaScaleId: "y",
            }}
          >
            <Crosshair />
            <SelectBox makeStyle={() => ({ backgroundColor: "#9f7aea44" })} />
          </ChartAreaInteractions>

          <AreaPlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: [10 + Math.sin(i / 5) * 8, 30 + Math.sin(i / 5) * 8],
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "rgba(66, 153, 225, 0.4)",
            }}
          />

          <AreaPlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: [40 + Math.cos(i / 6) * 10, 60 + Math.cos(i / 6) * 10],
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "rgba(72, 187, 120, 0.4)",
            }}
          />

          <AreaPlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: [70 + Math.sin(i / 4) * 6, 90 + Math.sin(i / 4) * 6],
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "rgba(237, 137, 54, 0.4)",
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Area plot with scatter overlay
export const WithScatterOverlay: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        axis: {
          position: "bottom",
          size: 40,
        },
        origin: "x",
        min: 0,
        max: 100,
      },
      {
        id: "y",
        axis: {
          position: "left",
          size: 40,
        },
        origin: "y",
        min: 0,
        max: 100,
      },
    ];

    const dataPoints = Array.from({ length: 40 }, (_, i) => ({
      x: i * 2.5,
      center: 50 + Math.sin(i / 5) * 25,
    }));

    return (
      <div style={{ padding: "20px" }}>
        <CanPlot
          style={{ width: "100%", height: "400px" }}
          configuration={{
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
              top: 20,
            },
            scales,
          }}
        >
          <ChartAreaInteractions
            sync={{
              key: "area-scatter",
              xViaScaleId: "x",
              yViaScaleId: "y",
            }}
          >
            <Crosshair />
            <SelectBox makeStyle={() => ({ backgroundColor: "#f6ad5544" })} />
          </ChartAreaInteractions>

          {/* Area plot showing the range/uncertainty */}
          <AreaPlot
            data={dataPoints.map((d) => ({
              x: d.x,
              y: [d.center - 12, d.center + 12],
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "rgba(159, 122, 234, 0.3)",
            }}
          />

          {/* Scatter plot showing the actual values */}
          <ScatterPlot
            data={dataPoints.map((d) => ({
              x: d.x,
              y: d.center,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "#805ad5",
              strokeStyle: "#553c9a",
              lineWidth: 2,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Narrow area plot (confidence bands)
export const ConfidenceBands: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        axis: {
          position: "bottom",
          size: 40,
        },
        origin: "x",
        min: 0,
        max: 100,
      },
      {
        id: "y",
        axis: {
          position: "left",
          size: 40,
        },
        origin: "y",
        min: 0,
        max: 100,
      },
    ];

    return (
      <div style={{ padding: "20px" }}>
        <CanPlot
          style={{ width: "100%", height: "400px" }}
          configuration={{
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
              top: 20,
            },
            scales,
          }}
        >
          <ChartAreaInteractions
            sync={{
              key: "confidence",
              xViaScaleId: "x",
              yViaScaleId: "y",
            }}
          >
            <Crosshair />
            <SelectBox makeStyle={() => ({ backgroundColor: "#fc864944" })} />
          </ChartAreaInteractions>

          {/* Wide confidence band */}
          <AreaPlot
            data={Array.from({ length: 100 }, (_, i) => {
              const x = i * 1.25;
              const center = 50 + (x - 50) * 0.3;
              return {
                x,
                y: [center - 20, center + 20],
              };
            })}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "rgba(252, 129, 129, 0.2)",
            }}
          />

          {/* Narrow confidence band */}
          <AreaPlot
            data={Array.from({ length: 100 }, (_, i) => {
              const x = i * 1.25;
              const center = 50 + (x - 50) * 0.3;
              return {
                x,
                y: [center - 8, center + 8],
              };
            })}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "rgba(252, 129, 129, 0.5)",
            }}
          />

          {/* Center line */}
          <ScatterPlot
            data={Array.from({ length: 80 }, (_, i) => {
              const x = i * 1.25;
              return {
                x,
                y: 50 + (x - 50) * 0.3,
              };
            })}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "#c92a2a",
              strokeStyle: "#c92a2a",
              lineWidth: 2,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

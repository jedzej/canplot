import type { Meta, StoryObj } from "@storybook/react-vite";
import { CanPlot } from "../lib/CanPlot";
import { ScatterPlot } from "../lib/plot/ScatterPlot";
import { ChartAreaInteractions } from "../lib/interactions/ChartAreaInteractions";
import { Crosshair } from "../lib/interactions/CrossHair";
import { SelectBox } from "../lib/interactions/SelectBox";
import type { PlotScaleConfig } from "../lib/types";

const meta: Meta<typeof CanPlot> = {
  title: "CanPlot/ScatterPlot",
  component: CanPlot,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

// Basic scatter plot
export const Basic: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        type: "linear",
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
        type: "linear",
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
          <ScatterPlot
            data={Array.from({ length: 20 }, (_, i) => ({
              x: i * 5,
              y: Math.random() * 100,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "blue",
              strokeStyle: "darkblue",
              lineWidth: 2,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// With interactions (crosshair and select box)
export const WithInteractions: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        type: "linear",
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
        type: "linear",
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
              key: "demo",
              xViaScaleId: "x",
              yViaScaleId: "y",
            }}
          >
            <Crosshair />
            <SelectBox makeStyle={() => ({ backgroundColor: "#4499ff44" })} />
          </ChartAreaInteractions>

          <ScatterPlot
            data={Array.from({ length: 30 }, (_, i) => ({
              x: i * 3.33,
              y: 50 + Math.sin(i / 3) * 30 + Math.random() * 10,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "#ff6b6b",
              strokeStyle: "#c92a2a",
              lineWidth: 2,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Time series example
export const TimeSeries: Story = {
  render: () => {
    const refPoint = Date.parse("2025-11-01T12:00:00Z");
    const scales: PlotScaleConfig[] = [
      {
        id: "t",
        type: "time",
        timeZone: "UTC",
        axis: {
          position: "bottom",
          size: 50,
        },
        origin: "x",
        min: refPoint - 1000 * 60 * 60 * 24, // 24 hours ago
        max: refPoint,
      },
      {
        id: "y",
        type: "linear",
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
              key: "timeseries",
              xViaScaleId: "t",
              yViaScaleId: "y",
            }}
          >
            <Crosshair />
            <SelectBox makeStyle={() => ({ backgroundColor: "#44992244" })} />
          </ChartAreaInteractions>

          <ScatterPlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x:
                refPoint - 1000 * 60 * 60 * 24 + (i * 1000 * 60 * 60 * 24) / 50,
              y: 50 + Math.sin(i / 5) * 20 + Math.random() * 15,
            }))}
            xScaleId="t"
            yScaleId="y"
            style={{
              fillStyle: "#51cf66",
              strokeStyle: "#2f9e44",
              lineWidth: 2,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Multiple datasets
export const MultipleDatasets: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        type: "linear",
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
        type: "linear",
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
              key: "multi",
              xViaScaleId: "x",
              yViaScaleId: "y",
            }}
          >
            <Crosshair />
            <SelectBox makeStyle={() => ({ backgroundColor: "#ffd43b44" })} />
          </ChartAreaInteractions>

          <ScatterPlot
            data={Array.from({ length: 30 }, (_, i) => ({
              x: i * 3.33,
              y: 30 + Math.sin(i / 2) * 20,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "#ff6b6b",
              strokeStyle: "#c92a2a",
              lineWidth: 2,
            }}
          />

          <ScatterPlot
            data={Array.from({ length: 30 }, (_, i) => ({
              x: i * 3.33,
              y: 50 + Math.cos(i / 3) * 25,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "#51cf66",
              strokeStyle: "#2f9e44",
              lineWidth: 2,
            }}
          />

          <ScatterPlot
            data={Array.from({ length: 30 }, (_, i) => ({
              x: i * 3.33,
              y: 70 + Math.sin(i / 4) * 15,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "#4c6ef5",
              strokeStyle: "#364fc7",
              lineWidth: 2,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Multiple scales (dual Y-axis)
export const DualYAxis: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        type: "linear",
        axis: {
          position: "bottom",
          size: 40,
        },
        origin: "x",
        min: 0,
        max: 100,
      },
      {
        id: "y1",
        type: "linear",
        axis: {
          position: "left",
          size: 50,
        },
        origin: "y",
        min: 0,
        max: 100,
      },
      {
        id: "y2",
        type: "linear",
        axis: {
          position: "right",
          size: 50,
        },
        origin: "y",
        min: -1000,
        max: 1000,
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
              key: "dual",
              xViaScaleId: "x",
              yViaScaleId: "y1",
            }}
          >
            <Crosshair />
            <SelectBox makeStyle={() => ({ backgroundColor: "#4499ff22" })} />
          </ChartAreaInteractions>

          {/* First dataset on left Y-axis */}
          <ScatterPlot
            data={Array.from({ length: 20 }, (_, i) => ({
              x: i * 5,
              y: 50 + Math.sin(i / 2) * 30,
            }))}
            xScaleId="x"
            yScaleId="y1"
            style={{
              fillStyle: "#ff6b6b",
              strokeStyle: "#c92a2a",
              lineWidth: 2,
            }}
          />

          {/* Second dataset on right Y-axis */}
          <ScatterPlot
            data={Array.from({ length: 20 }, (_, i) => ({
              x: i * 5,
              y: Math.cos(i / 3) * 800,
            }))}
            xScaleId="x"
            yScaleId="y2"
            style={{
              fillStyle: "#51cf66",
              strokeStyle: "#2f9e44",
              lineWidth: 2,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

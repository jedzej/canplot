import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { CanPlot } from "../lib/CanPlot";
import { BarPlot } from "../lib/plot/BarPlot";
import { LinePlot } from "../lib/plot/LinePlot";
import { ChartAreaInteractions } from "../lib/interactions/ChartAreaInteractions";
import { Crosshair } from "../lib/interactions/CrossHair";
import type { PlotScaleConfig } from "../lib/types";

const meta: Meta<typeof CanPlot> = {
  component: CanPlot,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

// Basic bar chart
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
        max: 12,
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

    const data = [
      { x: 1, y: 30 },
      { x: 2, y: 45 },
      { x: 3, y: 60 },
      { x: 4, y: 35 },
      { x: 5, y: 70 },
      { x: 6, y: 55 },
      { x: 7, y: 80 },
      { x: 8, y: 65 },
      { x: 9, y: 50 },
      { x: 10, y: 75 },
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
          <BarPlot
            data={data}
            xScaleId="x"
            yScaleId="y"
            barWidth={0.5}
            xPositionOffset={0}
            style={{
              fillStyle: "#4c6ef5",
              strokeStyle: "#364fc7",
              lineWidth: 1,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Multiple bar series (grouped bars)
export const MultipleBarSeries: Story = {
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
        max: 8,
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

    const series1 = [
      { x: 1, y: 30 },
      { x: 2, y: 45 },
      { x: 3, y: 60 },
      { x: 4, y: 35 },
      { x: 5, y: 70 },
      { x: 6, y: 55 },
    ];

    const series2 = [
      { x: 1, y: 40 },
      { x: 2, y: 35 },
      { x: 3, y: 50 },
      { x: 4, y: 45 },
      { x: 5, y: 60 },
      { x: 6, y: 65 },
    ];

    const series3 = [
      { x: 1, y: 25 },
      { x: 2, y: 55 },
      { x: 3, y: 40 },
      { x: 4, y: 50 },
      { x: 5, y: 45 },
      { x: 6, y: 70 },
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
          <BarPlot
            data={series1}
            xScaleId="x"
            yScaleId="y"
            barWidth={0.25}
            xPositionOffset={-1}
            style={{
              fillStyle: "#4c6ef5",
              strokeStyle: "#364fc7",
              lineWidth: 1,
            }}
          />
          <BarPlot
            data={series2}
            xScaleId="x"
            yScaleId="y"
            barWidth={0.25}
            xPositionOffset={0}
            style={{
              fillStyle: "#51cf66",
              strokeStyle: "#37b24d",
              lineWidth: 1,
            }}
          />
          <BarPlot
            data={series3}
            xScaleId="x"
            yScaleId="y"
            barWidth={0.25}
            xPositionOffset={1}
            style={{
              fillStyle: "#ff6b6b",
              strokeStyle: "#f03e3e",
              lineWidth: 1,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// With interactions
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
        max: 12,
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

    const data = [
      { x: 1, y: 30 },
      { x: 2, y: 45 },
      { x: 3, y: 60 },
      { x: 4, y: 35 },
      { x: 5, y: 70 },
      { x: 6, y: 55 },
      { x: 7, y: 80 },
      { x: 8, y: 65 },
      { x: 9, y: 50 },
      { x: 10, y: 75 },
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
          <BarPlot
            data={data}
            xScaleId="x"
            yScaleId="y"
            barWidth={0.6}
            xPositionOffset={0}
            style={{
              fillStyle: "#9775fa",
              strokeStyle: "#7950f2",
              lineWidth: 2,
            }}
          />
          <ChartAreaInteractions>
            <Crosshair />
          </ChartAreaInteractions>
        </CanPlot>
      </div>
    );
  },
};

// Time series bar chart
export const TimeSeries: Story = {
  render: () => {
    const now = new Date("2024-01-01T00:00:00Z");
    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        axis: {
          position: "bottom",
          size: 40,
        },
        origin: "x",
        min: now.getTime(),
        max: now.getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days
      },
      {
        id: "y",
        axis: {
          position: "left",
          size: 40,
        },
        origin: "y",
        min: 0,
        max: 500,
      },
    ];

    const data = Array.from({ length: 30 }, (_, i) => ({
      x: now.getTime() + i * 24 * 60 * 60 * 1000,
      y: 200 + Math.sin(i / 5) * 100 + Math.random() * 50,
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
          <BarPlot
            data={data}
            xScaleId="x"
            yScaleId="y"
            barWidth={0.8 * 24 * 60 * 60 * 1000}
            xPositionOffset={0}
            style={{
              fillStyle: "#20c997",
              strokeStyle: "#12b886",
              lineWidth: 1,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Different bar styles
export const DifferentStyles: Story = {
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
        max: 13,
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

    const solidBars = [
      { x: 1, y: 40 },
      { x: 2, y: 60 },
      { x: 3, y: 55 },
    ];

    const thickStroke = [
      { x: 5, y: 50 },
      { x: 6, y: 70 },
      { x: 7, y: 45 },
    ];

    const wideBars = [
      { x: 9, y: 65 },
      { x: 10, y: 55 },
      { x: 11, y: 80 },
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
          <BarPlot
            data={solidBars}
            xScaleId="x"
            yScaleId="y"
            barWidth={0.4}
            xPositionOffset={0}
            style={{
              fillStyle: "#4c6ef5",
            }}
          />
          <BarPlot
            data={thickStroke}
            xScaleId="x"
            yScaleId="y"
            barWidth={0.4}
            xPositionOffset={0}
            style={{
              fillStyle: "#51cf66",
              strokeStyle: "#2f9e44",
              lineWidth: 3,
            }}
          />
          <BarPlot
            data={wideBars}
            xScaleId="x"
            yScaleId="y"
            barWidth={0.7}
            xPositionOffset={0}
            style={{
              fillStyle: "#ff6b6b",
              strokeStyle: "#f03e3e",
              lineWidth: 1,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Bar chart with line overlay
export const WithLineOverlay: Story = {
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
        max: 12,
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

    const barData = [
      { x: 1, y: 30 },
      { x: 2, y: 45 },
      { x: 3, y: 60 },
      { x: 4, y: 35 },
      { x: 5, y: 70 },
      { x: 6, y: 55 },
      { x: 7, y: 80 },
      { x: 8, y: 65 },
      { x: 9, y: 50 },
      { x: 10, y: 75 },
    ];

    const lineData = [
      { x: 1, y: 40 },
      { x: 2, y: 50 },
      { x: 3, y: 55 },
      { x: 4, y: 52 },
      { x: 5, y: 60 },
      { x: 6, y: 62 },
      { x: 7, y: 68 },
      { x: 8, y: 70 },
      { x: 9, y: 65 },
      { x: 10, y: 72 },
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
          <BarPlot
            data={barData}
            xScaleId="x"
            yScaleId="y"
            barWidth={0.5}
            xPositionOffset={0}
            style={{
              fillStyle: "rgba(76, 110, 245, 0.5)",
              strokeStyle: "#4c6ef5",
              lineWidth: 1,
            }}
          />
          <LinePlot
            data={lineData}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#ff6b6b",
              lineWidth: 3,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Interactive zoom
export const InteractiveZoom: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [xRange, setXRange] = useState({ min: 0, max: 12 });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [yRange, setYRange] = useState({ min: 0, max: 100 });

    const zoomIn = () => {
      const xRangeSize = xRange.max - xRange.min;
      const yRangeSize = yRange.max - yRange.min;
      const xCenter = (xRange.max + xRange.min) / 2;
      const yCenter = (yRange.max + yRange.min) / 2;

      setXRange({
        min: xCenter - xRangeSize * 0.4,
        max: xCenter + xRangeSize * 0.4,
      });
      setYRange({
        min: yCenter - yRangeSize * 0.4,
        max: yCenter + yRangeSize * 0.4,
      });
    };

    const zoomOut = () => {
      const xRangeSize = xRange.max - xRange.min;
      const yRangeSize = yRange.max - yRange.min;
      const xCenter = (xRange.max + xRange.min) / 2;
      const yCenter = (yRange.max + yRange.min) / 2;

      setXRange({
        min: Math.max(0, xCenter - xRangeSize * 0.625),
        max: Math.min(12, xCenter + xRangeSize * 0.625),
      });
      setYRange({
        min: Math.max(0, yCenter - yRangeSize * 0.625),
        max: Math.min(100, yCenter + yRangeSize * 0.625),
      });
    };

    const reset = () => {
      setXRange({ min: 0, max: 12 });
      setYRange({ min: 0, max: 100 });
    };

    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        axis: {
          position: "bottom",
          size: 40,
        },
        origin: "x",
        min: xRange.min,
        max: xRange.max,
      },
      {
        id: "y",
        axis: {
          position: "left",
          size: 40,
        },
        origin: "y",
        min: yRange.min,
        max: yRange.max,
      },
    ];

    const data = [
      { x: 1, y: 30 },
      { x: 2, y: 45 },
      { x: 3, y: 60 },
      { x: 4, y: 35 },
      { x: 5, y: 70 },
      { x: 6, y: 55 },
      { x: 7, y: 80 },
      { x: 8, y: 65 },
      { x: 9, y: 50 },
      { x: 10, y: 75 },
    ];

    return (
      <div style={{ padding: "20px" }}>
        <div style={{ marginBottom: "10px", display: "flex", gap: "10px" }}>
          <button
            onClick={zoomIn}
            style={{
              padding: "8px 16px",
              backgroundColor: "#4c6ef5",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Zoom In
          </button>
          <button
            onClick={zoomOut}
            style={{
              padding: "8px 16px",
              backgroundColor: "#51cf66",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Zoom Out
          </button>
          <button
            onClick={reset}
            style={{
              padding: "8px 16px",
              backgroundColor: "#868e96",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Reset
          </button>
        </div>
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
          <BarPlot
            data={data}
            xScaleId="x"
            yScaleId="y"
            barWidth={0.5}
            xPositionOffset={0}
            style={{
              fillStyle: "#4c6ef5",
              strokeStyle: "#364fc7",
              lineWidth: 1,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Rounded corners
export const RoundedCorners: Story = {
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
        max: 12,
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

    const data = [
      { x: 1, y: 30 },
      { x: 2, y: 45 },
      { x: 3, y: 60 },
      { x: 4, y: 35 },
      { x: 5, y: 70 },
      { x: 6, y: 55 },
      { x: 7, y: 80 },
      { x: 8, y: 65 },
      { x: 9, y: 50 },
      { x: 10, y: 75 },
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
          <BarPlot
            data={data}
            xScaleId="x"
            yScaleId="y"
            barWidth={0.6}
            xPositionOffset={0}
            radius={8}
            style={{
              fillStyle: "#7950f2",
              strokeStyle: "#5f3dc4",
              lineWidth: 2,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

import { useState, useEffect } from "react";
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

/** Helper to convert simple {x, y} data to bar range format */
function toBars(
  points: { x: number; y: number }[],
  barWidth: number,
  offset = 0,
): Array<{ x: [number, number]; y: number }> {
  const half = barWidth / 2;
  return points.map(({ x, y }) => {
    const center = x + offset * barWidth;
    return { x: [center - half, center + half] as [number, number], y };
  });
}

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

    const data: Array<{ x: [number, number]; y: number }> = [
      { x: [0.75, 1.25], y: 30 },
      { x: [1.75, 2.25], y: 45 },
      { x: [2.75, 3.25], y: 60 },
      { x: [3.75, 4.25], y: 35 },
      { x: [4.75, 5.25], y: 70 },
      { x: [5.75, 6.25], y: 55 },
      { x: [6.75, 7.25], y: 80 },
      { x: [7.75, 8.25], y: 65 },
      { x: [8.75, 9.25], y: 50 },
      { x: [9.75, 10.25], y: 75 },
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

    const rawSeries1 = [
      { x: 1, y: 30 },
      { x: 2, y: 45 },
      { x: 3, y: 60 },
      { x: 4, y: 35 },
      { x: 5, y: 70 },
      { x: 6, y: 55 },
    ];

    const rawSeries2 = [
      { x: 1, y: 40 },
      { x: 2, y: 35 },
      { x: 3, y: 50 },
      { x: 4, y: 45 },
      { x: 5, y: 60 },
      { x: 6, y: 65 },
    ];

    const rawSeries3 = [
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
            data={toBars(rawSeries1, 0.25, -1)}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "#4c6ef5",
              strokeStyle: "#364fc7",
              lineWidth: 1,
            }}
          />
          <BarPlot
            data={toBars(rawSeries2, 0.25, 0)}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "#51cf66",
              strokeStyle: "#37b24d",
              lineWidth: 1,
            }}
          />
          <BarPlot
            data={toBars(rawSeries3, 0.25, 1)}
            xScaleId="x"
            yScaleId="y"
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

    const data: Array<{ x: [number, number]; y: number }> = [
      { x: [0.7, 1.3], y: 30 },
      { x: [1.7, 2.3], y: 45 },
      { x: [2.7, 3.3], y: 60 },
      { x: [3.7, 4.3], y: 35 },
      { x: [4.7, 5.3], y: 70 },
      { x: [5.7, 6.3], y: 55 },
      { x: [6.7, 7.3], y: 80 },
      { x: [7.7, 8.3], y: 65 },
      { x: [8.7, 9.3], y: 50 },
      { x: [9.7, 10.3], y: 75 },
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
    const dayMs = 24 * 60 * 60 * 1000;
    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        axis: {
          position: "bottom",
          size: 40,
        },
        origin: "x",
        min: now.getTime(),
        max: now.getTime() + 30 * dayMs, // 30 days
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

    const halfBar = 0.4 * dayMs;
    const data: Array<{ x: [number, number]; y: number }> = Array.from(
      { length: 30 },
      (_, i) => {
        const center = now.getTime() + i * dayMs;
        return {
          x: [center - halfBar, center + halfBar] as [number, number],
          y: 200 + Math.sin(i / 5) * 100 + Math.random() * 50,
        };
      },
    );

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

    const solidBars: Array<{ x: [number, number]; y: number }> = [
      { x: [0.8, 1.2], y: 40 },
      { x: [1.8, 2.2], y: 60 },
      { x: [2.8, 3.2], y: 55 },
    ];

    const thickStroke: Array<{ x: [number, number]; y: number }> = [
      { x: [4.8, 5.2], y: 50 },
      { x: [5.8, 6.2], y: 70 },
      { x: [6.8, 7.2], y: 45 },
    ];

    const wideBars: Array<{ x: [number, number]; y: number }> = [
      { x: [8.65, 9.35], y: 65 },
      { x: [9.65, 10.35], y: 55 },
      { x: [10.65, 11.35], y: 80 },
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
            style={{
              fillStyle: "#4c6ef5",
            }}
          />
          <BarPlot
            data={thickStroke}
            xScaleId="x"
            yScaleId="y"
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

    const barData: Array<{ x: [number, number]; y: number }> = [
      { x: [0.75, 1.25], y: 30 },
      { x: [1.75, 2.25], y: 45 },
      { x: [2.75, 3.25], y: 60 },
      { x: [3.75, 4.25], y: 35 },
      { x: [4.75, 5.25], y: 70 },
      { x: [5.75, 6.25], y: 55 },
      { x: [6.75, 7.25], y: 80 },
      { x: [7.75, 8.25], y: 65 },
      { x: [8.75, 9.25], y: 50 },
      { x: [9.75, 10.25], y: 75 },
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

    const data: Array<{ x: [number, number]; y: number }> = [
      { x: [0.75, 1.25], y: 30 },
      { x: [1.75, 2.25], y: 45 },
      { x: [2.75, 3.25], y: 60 },
      { x: [3.75, 4.25], y: 35 },
      { x: [4.75, 5.25], y: 70 },
      { x: [5.75, 6.25], y: 55 },
      { x: [6.75, 7.25], y: 80 },
      { x: [7.75, 8.25], y: 65 },
      { x: [8.75, 9.25], y: 50 },
      { x: [9.75, 10.25], y: 75 },
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

    const data: Array<{ x: [number, number]; y: number }> = [
      { x: [0.7, 1.3], y: 30 },
      { x: [1.7, 2.3], y: 45 },
      { x: [2.7, 3.3], y: 60 },
      { x: [3.7, 4.3], y: 35 },
      { x: [4.7, 5.3], y: 70 },
      { x: [5.7, 6.3], y: 55 },
      { x: [6.7, 7.3], y: 80 },
      { x: [7.7, 8.3], y: 65 },
      { x: [8.7, 9.3], y: 50 },
      { x: [9.7, 10.3], y: 75 },
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


// Performance test with many bars and reactive updates
export const Performance: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState(() =>
      Array.from({ length: 1000 }, (_, i) => ({
        x: [i - 0.4, i + 0.4] as [number, number],
        y: Math.random() * 100,
      }))
    );

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const interval = setInterval(() => {
        setData((prev) =>
          prev.map((point) => ({
            ...point,
            y: Math.max(0, Math.min(100, point.y + (Math.random() - 0.5) * 10)),
          }))
        );
      }, 16);
      return () => clearInterval(interval);
    }, []);

    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        axis: {
          position: "bottom",
          size: 40,
        },
        origin: "x",
        min: 0,
        max: 1000,
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
        <p style={{ marginBottom: "10px" }}>
          Rendering 1000 bars with updates every 16ms (~60fps)
        </p>
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
            style={{
              fillStyle: "#4c6ef5",
              strokeStyle: "#364fc7",
              lineWidth: 0,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Bar plot with global alpha (transparency)
export const GlobalAlpha: Story = {
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

    const data1: Array<{ x: [number, number]; y: number }> = [
      { x: [0.6, 1.4], y: 70 },
      { x: [1.6, 2.4], y: 85 },
      { x: [2.6, 3.4], y: 60 },
      { x: [3.6, 4.4], y: 75 },
      { x: [4.6, 5.4], y: 90 },
      { x: [5.6, 6.4], y: 65 },
      { x: [6.6, 7.4], y: 80 },
      { x: [7.6, 8.4], y: 55 },
      { x: [8.6, 9.4], y: 70 },
      { x: [9.6, 10.4], y: 85 },
    ];

    const data2: Array<{ x: [number, number]; y: number }> = [
      { x: [0.6, 1.4], y: 50 },
      { x: [1.6, 2.4], y: 65 },
      { x: [2.6, 3.4], y: 80 },
      { x: [3.6, 4.4], y: 55 },
      { x: [4.6, 5.4], y: 70 },
      { x: [5.6, 6.4], y: 85 },
      { x: [6.6, 7.4], y: 60 },
      { x: [7.6, 8.4], y: 75 },
      { x: [8.6, 9.4], y: 50 },
      { x: [9.6, 10.4], y: 65 },
    ];

    const data3: Array<{ x: [number, number]; y: number }> = [
      { x: [0.6, 1.4], y: 30 },
      { x: [1.6, 2.4], y: 45 },
      { x: [2.6, 3.4], y: 60 },
      { x: [3.6, 4.4], y: 35 },
      { x: [4.6, 5.4], y: 50 },
      { x: [5.6, 6.4], y: 45 },
      { x: [6.6, 7.4], y: 40 },
      { x: [7.6, 8.4], y: 55 },
      { x: [8.6, 9.4], y: 30 },
      { x: [9.6, 10.4], y: 45 },
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
          {/* Full opacity (default) */}
          <BarPlot
            data={data1}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "#ff6b6b",
              strokeStyle: "#c92a2a",
              lineWidth: 1,
            }}
            globalAlpha={1}
          />

          {/* 60% opacity */}
          <BarPlot
            data={data2}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "#51cf66",
              strokeStyle: "#2b8a3e",
              lineWidth: 1,
            }}
            globalAlpha={0.6}
          />

          {/* 30% opacity */}
          <BarPlot
            data={data3}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "#4c6ef5",
              strokeStyle: "#364fc7",
              lineWidth: 1,
            }}
            globalAlpha={0.3}
          />
        </CanPlot>
      </div>
    );
  },
};

// Variable width bars
export const VariableWidth: Story = {
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
        max: 50,
      },
    ];

    const data: Array<{ x: [number, number]; y: number }> = [
      { x: [0, 10], y: 25 },
      { x: [10, 35], y: 40 },
      { x: [35, 45], y: 15 },
      { x: [45, 80], y: 30 },
      { x: [80, 100], y: 45 },
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

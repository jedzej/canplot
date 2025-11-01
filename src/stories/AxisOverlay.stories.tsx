import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { CanPlot } from "../lib/CanPlot";
import { LinePlot } from "../lib/plot/LinePlot";
import { ScatterPlot } from "../lib/plot/ScatterPlot";
import { AxisOverlay } from "../lib/interactions/AxisOverlay";
import type { PlotScaleConfig } from "../lib/types";

const meta: Meta<typeof CanPlot> = {
  title: "CanPlot/AxisOverlay",
  component: CanPlot,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

// Basic axis overlay
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
          <LinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 50 + Math.sin(i / 5) * 30,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#4c6ef5",
              lineWidth: 2,
            }}
          />

          <AxisOverlay scaleId="x">
            <div
              style={{
                color: "#fff",
                padding: "10px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              X Axis
            </div>
          </AxisOverlay>

          <AxisOverlay scaleId="y">
            <div
              style={{
                color: "#fff",
                padding: "10px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Y Axis
            </div>
          </AxisOverlay>
        </CanPlot>
      </div>
    );
  },
};

// Multiple axes with overlays
export const MultipleAxes: Story = {
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
          <LinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 50 + Math.sin(i / 5) * 30,
            }))}
            xScaleId="x"
            yScaleId="y1"
            style={{
              strokeStyle: "#ff6b6b",
              lineWidth: 2,
            }}
          />

          <LinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: Math.cos(i / 6) * 800,
            }))}
            xScaleId="x"
            yScaleId="y2"
            style={{
              strokeStyle: "#51cf66",
              lineWidth: 2,
            }}
          />

          <AxisOverlay scaleId="x">
            <div
              style={{
                color: "#fff",
                padding: "8px",
                fontSize: "11px",
                textAlign: "center",
              }}
            >
              Time (units)
            </div>
          </AxisOverlay>

          <AxisOverlay scaleId="y1">
            <div
              style={{
                color: "#fff",
                padding: "8px",
                fontSize: "11px",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              Temperature (°C)
            </div>
          </AxisOverlay>

          <AxisOverlay
            scaleId="y2"
            style={{ backgroundColor: "rgba(81, 207, 102, 0.2)" }}
          >
            <div
              style={{
                color: "#fff",
                padding: "8px",
                fontSize: "11px",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                marginLeft: "auto",
              }}
            >
              Pressure (Pa)
            </div>
          </AxisOverlay>
        </CanPlot>
      </div>
    );
  },
};

// Custom styled overlays
export const CustomStyles: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        type: "linear",
        axis: {
          position: "bottom",
          size: 60,
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
          size: 60,
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
            data={Array.from({ length: 30 }, (_, i) => ({
              x: i * 3.33,
              y: 50 + Math.sin(i / 3) * 30 + Math.random() * 10,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "#4c6ef5",
              strokeStyle: "#364fc7",
              lineWidth: 2,
            }}
          />

          <AxisOverlay
            scaleId="x"
            style={{
              backgroundColor: "rgba(76, 110, 245, 0.1)",
              border: "2px solid rgba(76, 110, 245, 0.3)",
              borderRadius: "4px",
            }}
          >
            <div
              style={{
                color: "#364fc7",
                padding: "10px",
                fontSize: "12px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              X Axis - Custom Border
            </div>
          </AxisOverlay>

          <AxisOverlay
            scaleId="y"
            style={{
              background: "linear-gradient(90deg, rgba(76, 110, 245, 0.2), rgba(76, 110, 245, 0.05))",
              borderLeft: "3px solid #4c6ef5",
            }}
          >
            <div
              style={{
                color: "#364fc7",
                padding: "10px",
                fontSize: "12px",
                fontWeight: "600",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              Y Axis - Gradient
            </div>
          </AxisOverlay>
        </CanPlot>
      </div>
    );
  },
};

// Interactive overlay with hover effect
export const InteractiveOverlay: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        type: "linear",
        axis: {
          position: "bottom",
          size: 50,
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
          <LinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 50 + Math.sin(i / 5) * 30,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#51cf66",
              lineWidth: 2,
            }}
          />

          <AxisOverlay
            scaleId="x"
            style={{
              backgroundColor: "rgba(81, 207, 102, 0.1)",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(81, 207, 102, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(81, 207, 102, 0.1)";
            }}
          >
            <div
              style={{
                color: "#2f9e44",
                padding: "10px",
                fontSize: "12px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Hover me! - X Axis
            </div>
          </AxisOverlay>

          <AxisOverlay
            scaleId="y"
            style={{
              backgroundColor: "rgba(81, 207, 102, 0.1)",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(81, 207, 102, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(81, 207, 102, 0.1)";
            }}
          >
            <div
              style={{
                color: "#2f9e44",
                padding: "10px",
                fontSize: "12px",
                fontWeight: "bold",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              Hover me! - Y Axis
            </div>
          </AxisOverlay>
        </CanPlot>
      </div>
    );
  },
};

// Time series with overlay
export const TimeSeriesOverlay: Story = {
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
        min: refPoint - 1000 * 60 * 60 * 24 * 7, // 7 days ago
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
          <LinePlot
            data={Array.from({ length: 100 }, (_, i) => ({
              x:
                refPoint -
                1000 * 60 * 60 * 24 * 7 +
                (i * 1000 * 60 * 60 * 24 * 7) / 100,
              y: 50 + Math.sin(i / 10) * 25 + Math.random() * 10,
            }))}
            xScaleId="t"
            yScaleId="y"
            style={{
              strokeStyle: "#e67700",
              lineWidth: 2,
            }}
          />

          <AxisOverlay
            scaleId="t"
            style={{
              backgroundColor: "rgba(237, 137, 54, 0.15)",
            }}
          >
            <div
              style={{
                color: "#e67700",
                padding: "10px",
                fontSize: "12px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              📅 Time Axis (7 days)
            </div>
          </AxisOverlay>

          <AxisOverlay
            scaleId="y"
            style={{
              backgroundColor: "rgba(237, 137, 54, 0.15)",
            }}
          >
            <div
              style={{
                color: "#e67700",
                padding: "10px",
                fontSize: "12px",
                fontWeight: "600",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              📊 Value (%)
            </div>
          </AxisOverlay>
        </CanPlot>
      </div>
    );
  },
};

// With buttons and controls
export const WithControls: Story = {
  render: () => {
    const [xRange, setXRange] = useState({ min: 0, max: 100 });
    const [yRange, setYRange] = useState({ min: 0, max: 100 });

    const zoomInX = () => {
      const range = xRange.max - xRange.min;
      const center = (xRange.max + xRange.min) / 2;
      const newRange = range * 0.8;
      setXRange({
        min: center - newRange / 2,
        max: center + newRange / 2,
      });
    };

    const zoomOutX = () => {
      const range = xRange.max - xRange.min;
      const center = (xRange.max + xRange.min) / 2;
      const newRange = range * 1.25;
      setXRange({
        min: Math.max(0, center - newRange / 2),
        max: Math.min(100, center + newRange / 2),
      });
    };

    const zoomInY = () => {
      const range = yRange.max - yRange.min;
      const center = (yRange.max + yRange.min) / 2;
      const newRange = range * 0.8;
      setYRange({
        min: center - newRange / 2,
        max: center + newRange / 2,
      });
    };

    const zoomOutY = () => {
      const range = yRange.max - yRange.min;
      const center = (yRange.max + yRange.min) / 2;
      const newRange = range * 1.25;
      setYRange({
        min: Math.max(0, center - newRange / 2),
        max: Math.min(100, center + newRange / 2),
      });
    };

    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        type: "linear",
        axis: {
          position: "bottom",
          size: 60,
        },
        origin: "x",
        min: xRange.min,
        max: xRange.max,
      },
      {
        id: "y",
        type: "linear",
        axis: {
          position: "left",
          size: 60,
        },
        origin: "y",
        min: yRange.min,
        max: yRange.max,
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
          <LinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 50 + Math.sin(i / 5) * 30,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#f06595",
              lineWidth: 2,
            }}
          />

          <AxisOverlay
            scaleId="x"
            style={{
              backgroundColor: "rgba(240, 101, 149, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 10px",
            }}
          >
            <button
              style={{
                padding: "4px 8px",
                fontSize: "11px",
                backgroundColor: "#fff",
                border: "1px solid #f06595",
                borderRadius: "4px",
                cursor: "pointer",
                color: "#f06595",
              }}
              onClick={zoomInX}
            >
              Zoom In
            </button>
            <span style={{ fontSize: "12px", color: "#c92a2a" }}>
              X: {xRange.min.toFixed(1)} - {xRange.max.toFixed(1)}
            </span>
            <button
              style={{
                padding: "4px 8px",
                fontSize: "11px",
                backgroundColor: "#fff",
                border: "1px solid #f06595",
                borderRadius: "4px",
                cursor: "pointer",
                color: "#f06595",
              }}
              onClick={zoomOutX}
            >
              Zoom Out
            </button>
          </AxisOverlay>

          <AxisOverlay
            scaleId="y"
            style={{
              backgroundColor: "rgba(240, 101, 149, 0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 0",
            }}
          >
            <button
              style={{
                padding: "4px 8px",
                fontSize: "11px",
                backgroundColor: "#fff",
                border: "1px solid #f06595",
                borderRadius: "4px",
                cursor: "pointer",
                color: "#f06595",
                writingMode: "horizontal-tb",
              }}
              onClick={zoomInY}
            >
              +
            </button>
            <span
              style={{
                fontSize: "11px",
                color: "#c92a2a",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              Y: {yRange.min.toFixed(1)}-{yRange.max.toFixed(1)}
            </span>
            <button
              style={{
                padding: "4px 8px",
                fontSize: "11px",
                backgroundColor: "#fff",
                border: "1px solid #f06595",
                borderRadius: "4px",
                cursor: "pointer",
                color: "#f06595",
                writingMode: "horizontal-tb",
              }}
              onClick={zoomOutY}
            >
              -
            </button>
          </AxisOverlay>
        </CanPlot>
      </div>
    );
  },
};

// All four axis positions
export const AllAxisPositions: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x-bottom",
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
        id: "x-top",
        type: "linear",
        axis: {
          position: "top",
          size: 40,
        },
        origin: "x",
        min: 0,
        max: 100,
      },
      {
        id: "y-left",
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
        id: "y-right",
        type: "linear",
        axis: {
          position: "right",
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
          <LinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 50 + Math.sin(i / 5) * 30,
            }))}
            xScaleId="x-bottom"
            yScaleId="y-left"
            style={{
              strokeStyle: "#4c6ef5",
              lineWidth: 2,
            }}
          />

          <AxisOverlay
            scaleId="x-bottom"
            style={{ backgroundColor: "rgba(76, 110, 245, 0.15)" }}
          >
            <div style={{ textAlign: "center", color: "#364fc7", fontSize: "11px", padding: "8px" }}>
              Bottom Axis
            </div>
          </AxisOverlay>

          <AxisOverlay
            scaleId="x-top"
            style={{ backgroundColor: "rgba(255, 107, 107, 0.15)" }}
          >
            <div style={{ textAlign: "center", color: "#c92a2a", fontSize: "11px", padding: "8px" }}>
              Top Axis
            </div>
          </AxisOverlay>

          <AxisOverlay
            scaleId="y-left"
            style={{ backgroundColor: "rgba(81, 207, 102, 0.15)" }}
          >
            <div
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                color: "#2f9e44",
                fontSize: "11px",
                padding: "8px",
              }}
            >
              Left Axis
            </div>
          </AxisOverlay>

          <AxisOverlay
            scaleId="y-right"
            style={{ backgroundColor: "rgba(237, 137, 54, 0.15)" }}
          >
            <div
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                color: "#e67700",
                fontSize: "11px",
                padding: "8px",
                marginLeft: "auto",
              }}
            >
              Right Axis
            </div>
          </AxisOverlay>
        </CanPlot>
      </div>
    );
  },
};

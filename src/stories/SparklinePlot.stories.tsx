import type { Meta, StoryObj } from "@storybook/react-vite";
import { CanPlot } from "../lib/CanPlot";
import { SparklinePlot } from "../lib/plot/SparklinePlot";
import { ChartAreaInteractions } from "../lib/interactions/ChartAreaInteractions";
import { Crosshair } from "../lib/interactions/CrossHair";
import { SelectBox } from "../lib/interactions/SelectBox";
import type { PlotScaleConfig } from "../lib/types";

const meta: Meta<typeof CanPlot> = {
  title: "CanPlot/SparklinePlot",
  component: CanPlot,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

// Basic sparkline
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
          <SparklinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 50 + Math.sin(i / 5) * 30,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#4c6ef5",
              lineWidth: 2,
              fillStyle: "rgba(76, 110, 245, 0.3)",
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Sparkline with interactions
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
              key: "sparkline",
              xViaScaleId: "x",
              yViaScaleId: "y",
            }}
          >
            <Crosshair />
            <SelectBox style={{ backgroundColor: "#51cf6644" }} />
          </ChartAreaInteractions>

          <SparklinePlot
            data={Array.from({ length: 60 }, (_, i) => ({
              x: i * 1.67,
              y: 50 + Math.sin(i / 8) * 25 + Math.random() * 15,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#51cf66",
              lineWidth: 2,
              fillStyle: "rgba(81, 207, 102, 0.3)",
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Time series sparkline
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
        min: refPoint - 1000 * 60 * 60 * 24 * 30, // 30 days ago
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
              key: "timeseries-sparkline",
              xViaScaleId: "t",
              yViaScaleId: "y",
            }}
          >
            <Crosshair />
            <SelectBox style={{ backgroundColor: "#ff6b6b44" }} />
          </ChartAreaInteractions>

          <SparklinePlot
            data={Array.from({ length: 100 }, (_, i) => ({
              x:
                refPoint -
                1000 * 60 * 60 * 24 * 30 +
                (i * 1000 * 60 * 60 * 24 * 30) / 100,
              y: 50 + Math.sin(i / 10) * 25 + Math.random() * 10,
            }))}
            xScaleId="t"
            yScaleId="y"
            style={{
              strokeStyle: "#ff6b6b",
              lineWidth: 2,
              fillStyle: "rgba(255, 107, 107, 0.2)",
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Multiple sparklines
export const MultipleSparklines: Story = {
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
              key: "multi-sparkline",
              xViaScaleId: "x",
              yViaScaleId: "y",
            }}
          >
            <Crosshair />
            <SelectBox style={{ backgroundColor: "#ffd43b44" }} />
          </ChartAreaInteractions>

          <SparklinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 30 + Math.sin(i / 5) * 20,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#ff6b6b",
              lineWidth: 2,
              fillStyle: "rgba(255, 107, 107, 0.2)",
            }}
          />

          <SparklinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 50 + Math.cos(i / 6) * 25,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#51cf66",
              lineWidth: 2,
              fillStyle: "rgba(81, 207, 102, 0.2)",
            }}
          />

          <SparklinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 70 + Math.sin(i / 4) * 15,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#4c6ef5",
              lineWidth: 2,
              fillStyle: "rgba(76, 110, 245, 0.2)",
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Minimal sparkline (small chart)
export const MinimalSparkline: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        type: "linear",
        axis: null,
        origin: "x",
        min: 0,
        max: 100,
      },
      {
        id: "y",
        type: "linear",
        axis: null,
        origin: "y",
        min: 0,
        max: 100,
      },
    ];

    return (
      <div style={{ padding: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <h3 style={{ margin: "0 0 5px 0" }}>Sales Trend</h3>
          <CanPlot
            style={{ width: "200px", height: "50px" }}
            configuration={{
              padding: {
                bottom: 5,
                left: 5,
                right: 5,
                top: 5,
              },
              scales,
            }}
          >
            <SparklinePlot
              data={Array.from({ length: 30 }, (_, i) => ({
                x: i * 3.33,
                y: 50 + Math.sin(i / 3) * 20 + Math.random() * 15,
              }))}
              xScaleId="x"
              yScaleId="y"
              style={{
                strokeStyle: "#51cf66",
                lineWidth: 1.5,
                fillStyle: "rgba(81, 207, 102, 0.3)",
              }}
            />
          </CanPlot>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <h3 style={{ margin: "0 0 5px 0" }}>Website Traffic</h3>
          <CanPlot
            style={{ width: "200px", height: "50px" }}
            configuration={{
              padding: {
                bottom: 5,
                left: 5,
                right: 5,
                top: 5,
              },
              scales,
            }}
          >
            <SparklinePlot
              data={Array.from({ length: 30 }, (_, i) => ({
                x: i * 3.33,
                y: 40 + Math.cos(i / 4) * 30 + Math.random() * 10,
              }))}
              xScaleId="x"
              yScaleId="y"
              style={{
                strokeStyle: "#4c6ef5",
                lineWidth: 1.5,
                fillStyle: "rgba(76, 110, 245, 0.3)",
              }}
            />
          </CanPlot>
        </div>

        <div>
          <h3 style={{ margin: "0 0 5px 0" }}>Server Load</h3>
          <CanPlot
            style={{ width: "200px", height: "50px" }}
            configuration={{
              padding: {
                bottom: 5,
                left: 5,
                right: 5,
                top: 5,
              },
              scales,
            }}
          >
            <SparklinePlot
              data={Array.from({ length: 30 }, (_, i) => ({
                x: i * 3.33,
                y: 60 + Math.sin(i / 2) * 25 + Math.random() * 12,
              }))}
              xScaleId="x"
              yScaleId="y"
              style={{
                strokeStyle: "#ff6b6b",
                lineWidth: 1.5,
                fillStyle: "rgba(255, 107, 107, 0.3)",
              }}
            />
          </CanPlot>
        </div>
      </div>
    );
  },
};

// Stock price sparkline
export const StockPrice: Story = {
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
        min: 80,
        max: 120,
      },
    ];

    // Generate stock-like data with trend
    const basePrice = 100;
    const data = Array.from({ length: 100 }, (_, i) => {
      const trend = (i / 100) * 10; // Upward trend
      const volatility = Math.random() * 4 - 2; // Random fluctuation
      const wave = Math.sin(i / 10) * 3; // Small wave pattern
      return {
        x: i,
        y: basePrice + trend + volatility + wave,
      };
    });

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
              key: "stock",
              xViaScaleId: "x",
              yViaScaleId: "y",
            }}
          >
            <Crosshair />
            <SelectBox style={{ backgroundColor: "#51cf6644" }} />
          </ChartAreaInteractions>

          <SparklinePlot
            data={data}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#51cf66",
              lineWidth: 2,
              fillStyle: "rgba(81, 207, 102, 0.2)",
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Volatile sparkline
export const VolatileData: Story = {
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
              key: "volatile",
              xViaScaleId: "x",
              yViaScaleId: "y",
            }}
          >
            <Crosshair />
            <SelectBox style={{ backgroundColor: "#ed893644" }} />
          </ChartAreaInteractions>

          <SparklinePlot
            data={Array.from({ length: 80 }, (_, i) => ({
              x: i * 1.25,
              y: 50 + Math.random() * 40 - 20 + Math.sin(i / 10) * 15,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#e67700",
              lineWidth: 2,
              fillStyle: "rgba(237, 137, 54, 0.2)",
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Different fill opacities
export const DifferentFillStyles: Story = {
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
              key: "fills",
              xViaScaleId: "x",
              yViaScaleId: "y",
            }}
          >
            <Crosshair />
            <SelectBox style={{ backgroundColor: "#9f7aea44" }} />
          </ChartAreaInteractions>

          {/* Light fill */}
          <SparklinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 25 + Math.sin(i / 5) * 15,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#ff6b6b",
              lineWidth: 2,
              fillStyle: "rgba(255, 107, 107, 0.1)",
            }}
          />

          {/* Medium fill */}
          <SparklinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 50 + Math.cos(i / 6) * 15,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#51cf66",
              lineWidth: 2,
              fillStyle: "rgba(81, 207, 102, 0.3)",
            }}
          />

          {/* Heavy fill */}
          <SparklinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 75 + Math.sin(i / 4) * 10,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#4c6ef5",
              lineWidth: 2,
              fillStyle: "rgba(76, 110, 245, 0.5)",
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Sparklines with stroke only
export const WithStrokeOnly: Story = {
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
              key: "stroke-only",
              xViaScaleId: "x",
              yViaScaleId: "y",
            }}
          >
            <Crosshair />
            <SelectBox style={{ backgroundColor: "#f0639744" }} />
          </ChartAreaInteractions>

          {/* Thin stroke, no fill */}
          <SparklinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 25 + Math.sin(i / 5) * 15,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#ff6b6b",
              lineWidth: 1,
            }}
          />

          {/* Medium stroke, no fill */}
          <SparklinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 50 + Math.cos(i / 6) * 15,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#51cf66",
              lineWidth: 2,
            }}
          />

          {/* Thick stroke, no fill */}
          <SparklinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 75 + Math.sin(i / 4) * 10,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#4c6ef5",
              lineWidth: 3,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Sparklines with fill only
export const WithFillOnly: Story = {
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
              key: "fill-only",
              xViaScaleId: "x",
              yViaScaleId: "y",
            }}
          >
            <Crosshair />
            <SelectBox style={{ backgroundColor: "#fab00544" }} />
          </ChartAreaInteractions>

          {/* Light fill, no stroke */}
          <SparklinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 25 + Math.sin(i / 5) * 15,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "rgba(255, 107, 107, 0.4)",
            }}
          />

          {/* Medium fill, no stroke */}
          <SparklinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 50 + Math.cos(i / 6) * 15,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "rgba(81, 207, 102, 0.5)",
            }}
          />

          {/* Solid fill, no stroke */}
          <SparklinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 75 + Math.sin(i / 4) * 10,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "rgba(76, 110, 245, 0.6)",
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Mixed: Stroke and fill combinations
export const MixedStrokeAndFill: Story = {
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
              key: "mixed",
              xViaScaleId: "x",
              yViaScaleId: "y",
            }}
          >
            <Crosshair />
            <SelectBox style={{ backgroundColor: "#e64980aa" }} />
          </ChartAreaInteractions>

          {/* Stroke only - outline only */}
          <SparklinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 20 + Math.sin(i / 5) * 12,
            }))}
            xScaleId="x"
            yScaleId="y"
            stroked
            style={{
              fillStyle: "#33000033",
              strokeStyle: "#ff6b6b",
              lineWidth: 2,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Dashboard style - compact sparklines
export const DashboardStyle: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        type: "linear",
        axis: null,
        origin: "x",
        min: 0,
        max: 100,
      },
      {
        id: "y",
        type: "linear",
        axis: null,
        origin: "y",
        min: -50,
        max: 100,
      },
    ];

    return (
      <div
        style={{
          padding: "20px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Stroke only sparklines */}
        <div style={{ flex: "1", minWidth: "200px" }}>
          <h3 style={{ margin: "0 0 10px 0" }}>Stroke Only</h3>
          <div
            style={{
              marginBottom: "15px",
              padding: "10px",
              background: "#f8f9fa",
              borderRadius: "8px",
            }}
          >
            <div
              style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
            >
              CPU Usage
            </div>
            <CanPlot
              style={{ width: "100%", height: "60px" }}
              configuration={{
                padding: { bottom: 5, left: 5, right: 5, top: 5 },
                scales,
              }}
            >
              <SparklinePlot
                data={Array.from({ length: 40 }, (_, i) => ({
                  x: i * 2.5,
                  y: Math.sin(i / 3) * 25 + Math.random() * 10,
                }))}
                xScaleId="x"
                yScaleId="y"
                stroked
                style={{
                  fillStyle: "#4c6ef577",
                  strokeStyle: "#4c6ef5",
                  lineWidth: 2,
                }}
              />
            </CanPlot>
          </div>

          <div
            style={{
              marginBottom: "15px",
              padding: "10px",
              background: "#f8f9fa",
              borderRadius: "8px",
            }}
          >
            <div
              style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
            >
              Network Traffic
            </div>
            <CanPlot
              style={{ width: "100%", height: "60px" }}
              configuration={{
                padding: { bottom: 5, left: 5, right: 5, top: 5 },
                scales,
              }}
            >
              <SparklinePlot
                data={Array.from({ length: 40 }, (_, i) => ({
                  x: i * 2.5,
                  y: 60 + Math.cos(i / 4) * 20 + Math.random() * 15,
                }))}
                xScaleId="x"
                yScaleId="y"
                style={{
                  strokeStyle: "#51cf66",
                  lineWidth: 1.5,
                }}
              />
            </CanPlot>
          </div>
        </div>

        {/* Fill only sparklines */}
        <div style={{ flex: "1", minWidth: "200px" }}>
          <h3 style={{ margin: "0 0 10px 0" }}>Fill Only</h3>
          <div
            style={{
              marginBottom: "15px",
              padding: "10px",
              background: "#f8f9fa",
              borderRadius: "8px",
            }}
          >
            <div
              style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
            >
              Revenue
            </div>
            <CanPlot
              style={{ width: "100%", height: "60px" }}
              configuration={{
                padding: { bottom: 5, left: 5, right: 5, top: 5 },
                scales,
              }}
            >
              <SparklinePlot
                data={Array.from({ length: 40 }, (_, i) => ({
                  x: i * 2.5,
                  y: 40 + Math.sin(i / 5) * 25 + Math.random() * 10,
                }))}
                xScaleId="x"
                yScaleId="y"
                style={{
                  fillStyle: "rgba(81, 207, 102, 0.6)",
                }}
              />
            </CanPlot>
          </div>

          <div
            style={{
              marginBottom: "15px",
              padding: "10px",
              background: "#f8f9fa",
              borderRadius: "8px",
            }}
          >
            <div
              style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
            >
              Active Users
            </div>
            <CanPlot
              style={{ width: "100%", height: "60px" }}
              configuration={{
                padding: { bottom: 5, left: 5, right: 5, top: 5 },
                scales,
              }}
            >
              <SparklinePlot
                data={Array.from({ length: 40 }, (_, i) => ({
                  x: i * 2.5,
                  y: 55 + Math.cos(i / 4) * 30 + Math.random() * 8,
                }))}
                xScaleId="x"
                yScaleId="y"
                style={{
                  fillStyle: "rgba(255, 107, 107, 0.5)",
                }}
              />
            </CanPlot>
          </div>
        </div>

        {/* Stroke + Fill sparklines */}
        <div style={{ flex: "1", minWidth: "200px" }}>
          <h3 style={{ margin: "0 0 10px 0" }}>Stroke + Fill</h3>
          <div
            style={{
              marginBottom: "15px",
              padding: "10px",
              background: "#f8f9fa",
              borderRadius: "8px",
            }}
          >
            <div
              style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
            >
              Storage Usage
            </div>
            <CanPlot
              style={{ width: "100%", height: "60px" }}
              configuration={{
                padding: { bottom: 5, left: 5, right: 5, top: 5 },
                scales,
              }}
            >
              <SparklinePlot
                data={Array.from({ length: 40 }, (_, i) => ({
                  x: i * 2.5,
                  y: 45 + Math.sin(i / 4) * 20 + Math.random() * 12,
                }))}
                xScaleId="x"
                yScaleId="y"
                style={{
                  strokeStyle: "#e67700",
                  lineWidth: 2,
                  fillStyle: "rgba(237, 137, 54, 0.3)",
                }}
              />
            </CanPlot>
          </div>

          <div
            style={{
              marginBottom: "15px",
              padding: "10px",
              background: "#f8f9fa",
              borderRadius: "8px",
            }}
          >
            <div
              style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
            >
              API Latency
            </div>
            <CanPlot
              style={{ width: "100%", height: "60px" }}
              configuration={{
                padding: { bottom: 5, left: 5, right: 5, top: 5 },
                scales,
              }}
            >
              <SparklinePlot
                data={Array.from({ length: 40 }, (_, i) => ({
                  x: i * 2.5,
                  y: 50 + Math.cos(i / 3) * 25 + Math.random() * 10,
                }))}
                xScaleId="x"
                yScaleId="y"
                style={{
                  strokeStyle: "#9775fa",
                  lineWidth: 1.5,
                  fillStyle: "rgba(151, 117, 250, 0.25)",
                }}
              />
            </CanPlot>
          </div>
        </div>
      </div>
    );
  },
};

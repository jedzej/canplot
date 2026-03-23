import type { Meta, StoryObj } from "@storybook/react-vite";
import { CanPlot } from "../lib/CanPlot";
import { LinePlot } from "../lib/plot/LinePlot";
import { ScatterPlot } from "../lib/plot/ScatterPlot";
import { ChartAreaInteractions } from "../lib/interactions/ChartAreaInteractions";
import { Crosshair } from "../lib/interactions/CrossHair";
import { SelectBox } from "../lib/interactions/SelectBox";
import type { PlotScaleConfig } from "../lib/types";
import { makeLinearTicks, XTicks } from "../lib";

const meta: Meta<typeof CanPlot> = {
  component: CanPlot,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

// Basic line plot
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
          <LinePlot
            data={Array.from({ length: 20 }, (_, i) => ({
              x: i * 5,
              y: 50 + Math.sin(i / 2) * 30,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "blue",
              lineWidth: 2,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Line plot with interactions
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
              key: "line",
              xViaScaleId: "x",
              yViaScaleId: "y",
            }}
          >
            <Crosshair />
            <SelectBox makeStyle={() => ({ backgroundColor: "#4499ff44" })} />
          </ChartAreaInteractions>

          <LinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 50 + Math.sin(i / 5) * 25 + Math.cos(i / 3) * 15,
            }))}
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

// Time series line plot
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
              key: "timeseries-line",
              xViaScaleId: "t",
              yViaScaleId: "y",
            }}
          >
            <Crosshair />
            <SelectBox makeStyle={() => ({ backgroundColor: "#51cf6644" })} />
          </ChartAreaInteractions>

          <LinePlot
            data={Array.from({ length: 100 }, (_, i) => ({
              x:
                refPoint -
                1000 * 60 * 60 * 24 * 7 +
                (i * 1000 * 60 * 60 * 24 * 7) / 100,
              y: 50 + Math.sin(i / 10) * 20 + Math.random() * 10,
            }))}
            xScaleId="t"
            yScaleId="y"
            style={{
              strokeStyle: "#51cf66",
              lineWidth: 2,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Multiple line plots
export const MultipleLines: Story = {
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
              key: "multi-line",
              xViaScaleId: "x",
              yViaScaleId: "y",
            }}
          >
            <Crosshair />
            <SelectBox makeStyle={() => ({ backgroundColor: "#ffd43b44" })} />
          </ChartAreaInteractions>

          <LinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 30 + Math.sin(i / 5) * 20,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#ff6b6b",
              lineWidth: 2,
            }}
          />

          <LinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 50 + Math.cos(i / 6) * 25,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#51cf66",
              lineWidth: 2,
            }}
          />

          <LinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 70 + Math.sin(i / 4) * 15,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#4c6ef5",
              lineWidth: 2,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Line plot with different styles
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
              key: "styles",
              xViaScaleId: "x",
              yViaScaleId: "y",
            }}
          >
            <Crosshair
              makeXStyle={({keys}) =>
                keys.altKey ? { borderColor: "blue" } : undefined
              }
            />
            <SelectBox makeStyle={() => ({ backgroundColor: "#9f7aea44" })} />
          </ChartAreaInteractions>

          {/* Thin line */}
          <LinePlot
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

          {/* Medium line */}
          <LinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 50 + Math.cos(i / 6) * 15,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#51cf66",
              lineWidth: 3,
            }}
          />

          {/* Thick line */}
          <LinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 75 + Math.sin(i / 4) * 10,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#4c6ef5",
              lineWidth: 5,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Line plot with scatter overlay (line + points)
export const LineWithPoints: Story = {
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

    const data = Array.from({ length: 20 }, (_, i) => ({
      x: i * 5,
      y: 50 + Math.sin(i / 2) * 30,
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
              key: "line-points",
              xViaScaleId: "x",
              yViaScaleId: "y",
            }}
          >
            <Crosshair />
            <SelectBox makeStyle={() => ({ backgroundColor: "#ed893644" })} />
          </ChartAreaInteractions>

          {/* Line */}
          <LinePlot
            data={data}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#e67700",
              lineWidth: 2,
            }}
          />

          {/* Points */}
          <ScatterPlot
            data={data}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "#fab005",
              strokeStyle: "#e67700",
              lineWidth: 2,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Smooth curves
export const SmoothCurves: Story = {
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
        min: -50,
        max: 50,
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
              key: "smooth",
              xViaScaleId: "x",
              yViaScaleId: "y",
            }}
          >
            <Crosshair />
            <SelectBox makeStyle={() => ({ backgroundColor: "#f0639744" })} />
          </ChartAreaInteractions>

          {/* Sine wave */}
          <LinePlot
            data={Array.from({ length: 100 }, (_, i) => ({
              x: i,
              y: Math.sin(i / 5) * 30,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#f06397",
              lineWidth: 2,
            }}
          />

          {/* Cosine wave */}
          <LinePlot
            data={Array.from({ length: 100 }, (_, i) => ({
              x: i,
              y: Math.cos(i / 5) * 30,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#4c6ef5",
              lineWidth: 2,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Dual Y-axis with lines
export const DualYAxis: Story = {
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
        id: "y1",
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
              key: "dual-line",
              xViaScaleId: "x",
              yViaScaleId: "y1",
            }}
          >
            <Crosshair />
            <SelectBox makeStyle={() => ({ backgroundColor: "#4499ff22" })} />
          </ChartAreaInteractions>

          {/* Line on left Y-axis */}
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

          {/* Line on right Y-axis */}
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
        </CanPlot>
      </div>
    );
  },
};

// Line plot with global alpha (transparency)
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
              key: "alpha-line",
              xViaScaleId: "x",
              yViaScaleId: "y",
            }}
          >
            <Crosshair />
            <SelectBox makeStyle={() => ({ backgroundColor: "#4499ff22" })} />
          </ChartAreaInteractions>

          {/* Full opacity (default) */}
          <LinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 30 + Math.sin(i / 5) * 25,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#ff6b6b",
              lineWidth: 4,
            }}
            globalAlpha={1}
          />

          {/* 70% opacity */}
          <LinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 50 + Math.cos(i / 4) * 25,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#51cf66",
              lineWidth: 4,
            }}
            globalAlpha={0.7}
          />

          {/* 40% opacity */}
          <LinePlot
            data={Array.from({ length: 50 }, (_, i) => ({
              x: i * 2,
              y: 70 + Math.sin(i / 3) * 20,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#4c6ef5",
              lineWidth: 4,
            }}
            globalAlpha={0.4}
          />
        </CanPlot>
      </div>
    );
  },
};

// Line dash patterns
export const LineDash: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        axis: { position: "bottom", size: 40 },
        origin: "x",
        min: 0,
        max: 100,
      },
      {
        id: "y",
        axis: { position: "left", size: 50 },
        origin: "y",
        min: -10,
        max: 110,
      },
    ];

    const wave = (offset: number) =>
      Array.from({ length: 100 }, (_, i) => ({
        x: i,
        y: offset + Math.sin(i / 8) * 12,
      }));

    const patterns: { label: string; lineDash: number[]; color: string }[] = [
      { label: "solid  ([])", lineDash: [], color: "#4c6ef5" },
      { label: "dashed  ([8, 4])", lineDash: [8, 4], color: "#f03e3e" },
      { label: "dotted  ([2, 4])", lineDash: [2, 4], color: "#2f9e44" },
      { label: "dash-dot  ([10, 4, 2, 4])", lineDash: [10, 4, 2, 4], color: "#e67700" },
      { label: "long dash  ([16, 6])", lineDash: [16, 6], color: "#9c36b5" },
      { label: "sparse dots  ([2, 12])", lineDash: [2, 12], color: "#0c8599" },
    ];

    const spacing = 100 / (patterns.length + 1);

    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h3 style={{ marginBottom: "12px" }}>Line Dash Patterns</h3>
        <CanPlot
          style={{ width: "100%", height: "420px" }}
          configuration={{
            padding: { bottom: 20, left: 20, right: 140, top: 20 },
            scales,
          }}
        >
          {patterns.map(({ lineDash, color }, idx) => (
            <LinePlot
              key={idx}
              data={wave(spacing * (idx + 1))}
              xScaleId="x"
              yScaleId="y"
              style={{ strokeStyle: color, lineWidth: 2, lineDash }}
            />
          ))}
        </CanPlot>

        {/* Legend */}
        <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
          {patterns.map(({ label, lineDash, color }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px" }}>
              <svg width={60} height={12}>
                <line
                  x1={0}
                  y1={6}
                  x2={60}
                  y2={6}
                  stroke={color}
                  strokeWidth={2}
                  strokeDasharray={lineDash.join(" ")}
                />
              </svg>
              <span style={{ color: "#444" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// Data with gaps — increasing gap widths
export const Gaps: Story = {
  render: () => {
    // 6 segments (10 points each), separated by gaps of 2, 4, 6, 8, 10 data units.
    // xGapWidth=5 → gaps ≤5 are bridged (2, 4), gaps >5 create visual breaks (6, 8, 10).
    const SEG_LEN = 10;
    const GAP_SIZES = [2, 4, 6, 8, 10];
    const X_GAP_WIDTH = 5;

    // Build segment start positions: each segment ends at start+SEG_LEN-1,
    // next segment starts after the gap.
    const segStarts: number[] = [0];
    for (const g of GAP_SIZES) {
      segStarts.push(segStarts.at(-1)! + SEG_LEN + g);
    }
    // segStarts = [0, 12, 26, 42, 60, 80]
    // gaps (first pt to first pt of next): 12, 14, 16, 18, 20 — nope, let me recalc
    // seg ends at start+9; next starts at start+9+gap+1 so delta between last and first = gap+1?
    // Actually: last pt x = start+9, next first pt x = next_start.
    // delta = next_start - (start+9). We want delta == gap.
    // So next_start = start + 9 + gap + 1 = start + SEG_LEN + gap.
    // Correct: segStarts[i+1] = segStarts[i] + SEG_LEN + GAP_SIZES[i]

    const makeData = (yBase: number) =>
      segStarts.flatMap((s) =>
        Array.from({ length: SEG_LEN }, (_, i) => ({
          x: s + i,
          y: yBase + s,
        }))
      );

    const maxX = segStarts.at(-1)! + SEG_LEN;

    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        axis: { position: "bottom", size: 40 },
        origin: "x",
        min: 0,
        max: maxX + 1,
      },
      {
        id: "y",
        axis: { position: "left", size: 50 },
        origin: "y",
        min: 0,
        max: 150,
      },
    ];

    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h3 style={{ marginBottom: "4px" }}>Gaps — increasing gap sizes ({GAP_SIZES.join(", ")} data units)</h3>
        <p style={{ color: "#666", fontSize: "13px", margin: "0 0 12px" }}>
          <code>xGapWidth={X_GAP_WIDTH}</code> (data units) — gaps ≤ {X_GAP_WIDTH} are bridged;
          gaps &gt; {X_GAP_WIDTH} create visual breaks.
        </p>

        <CanPlot
          style={{ width: "100%", height: "380px" }}
          configuration={{
            padding: { bottom: 20, left: 20, right: 20, top: 20 },
            scales,
          }}
        >
          <XTicks scaleId="x" ticks={makeLinearTicks()} />

          {/* Top — no xGapWidth: all segments bridged */}
          <LinePlot
            data={makeData(50)}
            xScaleId="x"
            yScaleId="y"
            style={{ strokeStyle: "#f03e3e", lineWidth: 2 }}
          />

          {/* Bottom — xGapWidth=5: small gaps bridged, large gaps break */}
          <LinePlot
            data={makeData(15)}
            xScaleId="x"
            yScaleId="y"
            xGapWidth={X_GAP_WIDTH}
            style={{ strokeStyle: "#4c6ef5", lineWidth: 2 }}
          />
        </CanPlot>

        <div
          style={{
            marginTop: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            fontSize: "13px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <svg width={40} height={12}>
              <line x1={0} y1={6} x2={40} y2={6} stroke="#f03e3e" strokeWidth={2} />
            </svg>
            <span style={{ color: "#444" }}>No <code>xGapWidth</code> — all segments bridged</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <svg width={40} height={12}>
              <line x1={0} y1={6} x2={14} y2={6} stroke="#4c6ef5" strokeWidth={2} />
              <line x1={26} y1={6} x2={40} y2={6} stroke="#4c6ef5" strokeWidth={2} />
            </svg>
            <span style={{ color: "#444" }}>
              <code>xGapWidth={X_GAP_WIDTH}</code> — gaps of {GAP_SIZES.filter((g) => g <= X_GAP_WIDTH).join(", ")} bridged;
              gaps of {GAP_SIZES.filter((g) => g > X_GAP_WIDTH).join(", ")} break
            </span>
          </div>
        </div>
      </div>
    );
  },
};

// Demonstrates xStrategy and yStrategy with "clip" vs "clamp"
export const OutlierStrategies: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        axis: { position: "bottom", size: 40 },
        origin: "x",
        min: 20,
        max: 80,
      },
      {
        id: "y",
        axis: { position: "left", size: 50 },
        origin: "y",
        min: 20,
        max: 80,
      },
    ];

    // Data that intentionally extends beyond the scale boundaries
    const data = [
      { x: 0, y: 50 },
      { x: 10, y: 70 },
      { x: 20, y: 30 },
      { x: 30, y: 90 },
      { x: 40, y: 10 },
      { x: 50, y: 60 },
      { x: 60, y: 5 },
      { x: 70, y: 95 },
      { x: 80, y: 40 },
      { x: 90, y: 55 },
      { x: 100, y: 20 },
    ];

    const strategies = [
      {
        label: 'xStrategy="clip" / yStrategy="clip" (default)',
        xStrategy: "clip" as const,
        yStrategy: "clip" as const,
        color: "#4c6ef5",
        description: "Out-of-range segments are hidden entirely",
      },
      {
        label: 'xStrategy="clamp" / yStrategy="clamp"',
        xStrategy: "clamp" as const,
        yStrategy: "clamp" as const,
        color: "#f03e3e",
        description: "Out-of-range values are clamped to the boundary",
      },
      {
        label: 'xStrategy="clip" / yStrategy="clamp"',
        xStrategy: "clip" as const,
        yStrategy: "clamp" as const,
        color: "#37b24d",
        description: "X clipped, Y clamped to boundary",
      },
      {
        label: 'xStrategy="clamp" / yStrategy="clip"',
        xStrategy: "clamp" as const,
        yStrategy: "clip" as const,
        color: "#f59f00",
        description: "X clamped to boundary, Y clipped",
      },
    ];

    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h3 style={{ marginBottom: "4px" }}>
          Outlier Strategies — clip vs clamp
        </h3>
        <p style={{ color: "#666", fontSize: "13px", margin: "0 0 16px" }}>
          Scale range is [20, 80] on both axes. The data extends from 0–100 so
          several points fall outside the visible range. Each strategy
          combination handles out-of-bounds points differently.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          {strategies.map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  marginBottom: "2px",
                  color: s.color,
                }}
              >
                {s.label}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#888",
                  marginBottom: "8px",
                }}
              >
                {s.description}
              </div>
              <CanPlot
                style={{ width: "100%", height: "250px" }}
                configuration={{
                  padding: { bottom: 20, left: 20, right: 20, top: 20 },
                  scales,
                }}
              >
                <XTicks scaleId="x" ticks={makeLinearTicks()} />
                <LinePlot
                  data={data}
                  xScaleId="x"
                  yScaleId="y"
                  xStrategy={s.xStrategy}
                  yStrategy={s.yStrategy}
                  style={{ strokeStyle: s.color, lineWidth: 2 }}
                />
                <ScatterPlot
                  data={data}
                  xScaleId="x"
                  yScaleId="y"
                  xStrategy={s.xStrategy}
                  yStrategy={s.yStrategy}
                  radius={3}
                  style={{ fillStyle: s.color }}
                />
              </CanPlot>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// Side-by-side comparison: clip vs clamp on the X axis only
export const XStrategyComparison: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        axis: { position: "bottom", size: 40 },
        origin: "x",
        min: 20,
        max: 80,
      },
      {
        id: "y",
        axis: { position: "left", size: 50 },
        origin: "y",
        min: 0,
        max: 100,
      },
    ];

    const data = Array.from({ length: 25 }, (_, i) => ({
      x: i * 4,
      y: 50 + Math.sin(i * 0.5) * 40,
    }));

    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h3 style={{ marginBottom: "4px" }}>
          X Strategy — clip vs clamp
        </h3>
        <p style={{ color: "#666", fontSize: "13px", margin: "0 0 16px" }}>
          X scale range is [20, 80]. Data extends from 0–96. Compare how each
          strategy handles out-of-range X values.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <div>
            <div style={{ fontSize: "13px", fontWeight: 600, marginBottom: "4px", color: "#4c6ef5" }}>
              xStrategy="clip" — out-of-range X segments hidden
            </div>
            <CanPlot
              style={{ width: "100%", height: "300px" }}
              configuration={{
                padding: { bottom: 20, left: 20, right: 20, top: 20 },
                scales,
              }}
            >
              <XTicks scaleId="x" ticks={makeLinearTicks()} />
              <LinePlot
                data={data}
                xScaleId="x"
                yScaleId="y"
                xStrategy="clip"
                yStrategy="clip"
                style={{ strokeStyle: "#4c6ef5", lineWidth: 2 }}
              />
            </CanPlot>
          </div>
          <div>
            <div style={{ fontSize: "13px", fontWeight: 600, marginBottom: "4px", color: "#f03e3e" }}>
              xStrategy="clamp" — out-of-range X pinned to boundary
            </div>
            <CanPlot
              style={{ width: "100%", height: "300px" }}
              configuration={{
                padding: { bottom: 20, left: 20, right: 20, top: 20 },
                scales,
              }}
            >
              <XTicks scaleId="x" ticks={makeLinearTicks()} />
              <LinePlot
                data={data}
                xScaleId="x"
                yScaleId="y"
                xStrategy="clamp"
                yStrategy="clip"
                style={{ strokeStyle: "#f03e3e", lineWidth: 2 }}
              />
            </CanPlot>
          </div>
        </div>
      </div>
    );
  },
};

// Side-by-side comparison: clip vs clamp on the Y axis only
export const YStrategyComparison: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        axis: { position: "bottom", size: 40 },
        origin: "x",
        min: 0,
        max: 100,
      },
      {
        id: "y",
        axis: { position: "left", size: 50 },
        origin: "y",
        min: 20,
        max: 80,
      },
    ];

    const data = Array.from({ length: 25 }, (_, i) => ({
      x: i * 4,
      y: 50 + Math.sin(i * 0.4) * 45,
    }));

    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h3 style={{ marginBottom: "4px" }}>
          Y Strategy — clip vs clamp
        </h3>
        <p style={{ color: "#666", fontSize: "13px", margin: "0 0 16px" }}>
          Y scale range is [20, 80]. The sine wave peaks exceed the boundaries.
          Both charts use <code>xGapWidth=5</code> so that clipped points
          produce visible line breaks.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <div>
            <div style={{ fontSize: "13px", fontWeight: 600, marginBottom: "4px", color: "#4c6ef5" }}>
              yStrategy="clip" — clipped points break the line (gaps)
            </div>
            <CanPlot
              style={{ width: "100%", height: "300px" }}
              configuration={{
                padding: { bottom: 20, left: 20, right: 20, top: 20 },
                scales,
              }}
            >
              <XTicks scaleId="x" ticks={makeLinearTicks()} />
              <LinePlot
                data={data}
                xScaleId="x"
                yScaleId="y"
                xStrategy="clip"
                yStrategy="clip"
                xGapWidth={5}
                style={{ strokeStyle: "#4c6ef5", lineWidth: 2 }}
              />
            </CanPlot>
          </div>
          <div>
            <div style={{ fontSize: "13px", fontWeight: 600, marginBottom: "4px", color: "#f03e3e" }}>
              yStrategy="clamp" — out-of-range Y pinned (flat plateaus)
            </div>
            <CanPlot
              style={{ width: "100%", height: "300px" }}
              configuration={{
                padding: { bottom: 20, left: 20, right: 20, top: 20 },
                scales,
              }}
            >
              <XTicks scaleId="x" ticks={makeLinearTicks()} />
              <LinePlot
                data={data}
                xScaleId="x"
                yScaleId="y"
                xStrategy="clip"
                yStrategy="clamp"
                xGapWidth={5}
                style={{ strokeStyle: "#f03e3e", lineWidth: 2 }}
              />
            </CanPlot>
          </div>
        </div>
      </div>
    );
  },
};

// Both axes: clip/clip vs clamp/clamp
export const ClipVsClamp: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        axis: { position: "bottom", size: 40 },
        origin: "x",
        min: 20,
        max: 80,
      },
      {
        id: "y",
        axis: { position: "left", size: 50 },
        origin: "y",
        min: 20,
        max: 80,
      },
    ];

    const data = Array.from({ length: 25 }, (_, i) => ({
      x: i * 4,
      y: 50 + Math.sin(i * 0.4) * 45,
    }));

    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h3 style={{ marginBottom: "4px" }}>
          Clip vs Clamp — both axes
        </h3>
        <p style={{ color: "#666", fontSize: "13px", margin: "0 0 16px" }}>
          Both X and Y scale ranges are [20, 80]. Data extends beyond on both
          axes. <code>xGapWidth=5</code> is used so clipped gaps are visible.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <div>
            <div style={{ fontSize: "13px", fontWeight: 600, marginBottom: "4px", color: "#4c6ef5" }}>
              xStrategy="clip" / yStrategy="clip" — out-of-range segments hidden
            </div>
            <CanPlot
              style={{ width: "100%", height: "300px" }}
              configuration={{
                padding: { bottom: 20, left: 20, right: 20, top: 20 },
                scales,
              }}
            >
              <XTicks scaleId="x" ticks={makeLinearTicks()} />
              <LinePlot
                data={data}
                xScaleId="x"
                yScaleId="y"
                xStrategy="clip"
                yStrategy="clip"
                xGapWidth={5}
                style={{ strokeStyle: "#4c6ef5", lineWidth: 2 }}
              />
            </CanPlot>
          </div>
          <div>
            <div style={{ fontSize: "13px", fontWeight: 600, marginBottom: "4px", color: "#f03e3e" }}>
              xStrategy="clamp" / yStrategy="clamp" — values pinned to boundaries
            </div>
            <CanPlot
              style={{ width: "100%", height: "300px" }}
              configuration={{
                padding: { bottom: 20, left: 20, right: 20, top: 20 },
                scales,
              }}
            >
              <XTicks scaleId="x" ticks={makeLinearTicks()} />
              <LinePlot
                data={data}
                xScaleId="x"
                yScaleId="y"
                xStrategy="clamp"
                yStrategy="clamp"
                xGapWidth={5}
                style={{ strokeStyle: "#f03e3e", lineWidth: 2 }}
              />
            </CanPlot>
          </div>
        </div>
      </div>
    );
  },
};

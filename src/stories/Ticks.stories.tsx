import type { Meta, StoryObj } from "@storybook/react-vite";
import { useRef, useState } from "react";
import { CanPlot } from "../lib/CanPlot";
import { ChartAreaInteractions } from "../lib/interactions/ChartAreaInteractions";
import type { MouseDownEvent, MoveEvent } from "../lib/interactions/types";
import { LinePlot } from "../lib/plot/LinePlot";
import { XTicks, YTicks } from "../lib/plot/Ticks";
import { makeLinearTicks, makeTimeTicks } from "../lib/tickUtils";
import type { PlotScaleConfig } from "../lib/types";

const meta: Meta<typeof CanPlot> = {
  component: CanPlot,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

// Default ticks
export const DefaultTicks: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x",
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
        <h3>Default Tick Styles</h3>
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
          <XTicks scaleId="x" ticks={makeLinearTicks()} />
          <YTicks scaleId="y" ticks={makeLinearTicks()} />

          <LinePlot
            data={Array.from({ length: 20 }, (_, i) => ({
              x: i * 5,
              y: 50 + Math.sin(i / 2) * 30,
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

// Different tick sizes
export const DifferentTickSizes: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x1",
        axis: {
          position: "bottom",
          size: 60,
        },
        origin: "x",
        min: 0,
        max: 100,
      },
      {
        id: "y1",
        axis: {
          position: "left",
          size: 60,
        },
        origin: "y",
        min: 0,
        max: 100,
      },
    ];

    const scales2: PlotScaleConfig[] = [
      {
        id: "x2",
        axis: {
          position: "bottom",
          size: 60,
        },
        origin: "x",
        min: 0,
        max: 100,
      },
      {
        id: "y2",
        axis: {
          position: "left",
          size: 60,
        },
        origin: "y",
        min: 0,
        max: 100,
      },
    ];

    const scales3: PlotScaleConfig[] = [
      {
        id: "x3",
        axis: {
          position: "bottom",
          size: 60,
        },
        origin: "x",
        min: 0,
        max: 100,
      },
      {
        id: "y3",
        axis: {
          position: "left",
          size: 60,
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
        <h3>Small Ticks (tickSize: 3)</h3>
        <CanPlot
          style={{ width: "100%", height: "300px" }}
          configuration={{
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
              top: 20,
            },
            scales: scales,
          }}
        >
          <XTicks scaleId="x1" ticks={makeLinearTicks()} tickSize={3} />
          <YTicks scaleId="y1" ticks={makeLinearTicks()} tickSize={3} />

          <LinePlot
            data={data}
            xScaleId="x1"
            yScaleId="y1"
            style={{
              strokeStyle: "#51cf66",
              lineWidth: 2,
            }}
          />
        </CanPlot>

        <h3 style={{ marginTop: "40px" }}>Medium Ticks (tickSize: 8)</h3>
        <CanPlot
          style={{ width: "100%", height: "300px" }}
          configuration={{
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
              top: 20,
            },
            scales: scales2,
          }}
        >
          <XTicks scaleId="x2" ticks={makeLinearTicks()} tickSize={8} />
          <YTicks scaleId="y2" ticks={makeLinearTicks()} tickSize={8} />

          <LinePlot
            data={data}
            xScaleId="x2"
            yScaleId="y2"
            style={{
              strokeStyle: "#4c6ef5",
              lineWidth: 2,
            }}
          />
        </CanPlot>

        <h3 style={{ marginTop: "40px" }}>Large Ticks (tickSize: 15)</h3>
        <CanPlot
          style={{ width: "100%", height: "300px" }}
          configuration={{
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
              top: 20,
            },
            scales: scales3,
          }}
        >
          <XTicks scaleId="x3" ticks={makeLinearTicks()} tickSize={15} />
          <YTicks scaleId="y3" ticks={makeLinearTicks()} tickSize={15} />

          <LinePlot
            data={data}
            xScaleId="x3"
            yScaleId="y3"
            style={{
              strokeStyle: "#ff6b6b",
              lineWidth: 2,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Different tick styles (colors, widths)
export const DifferentTickStyles: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x1",
        axis: {
          position: "bottom",
          size: 60,
        },
        origin: "x",
        min: 0,
        max: 100,
      },
      {
        id: "y1",
        axis: {
          position: "left",
          size: 60,
        },
        origin: "y",
        min: 0,
        max: 100,
      },
    ];

    const scales2: PlotScaleConfig[] = [
      {
        id: "x2",
        axis: {
          position: "bottom",
          size: 60,
        },
        origin: "x",
        min: 0,
        max: 100,
      },
      {
        id: "y2",
        axis: {
          position: "left",
          size: 60,
        },
        origin: "y",
        min: 0,
        max: 100,
      },
    ];

    const scales3: PlotScaleConfig[] = [
      {
        id: "x3",
        axis: {
          position: "bottom",
          size: 60,
        },
        origin: "x",
        min: 0,
        max: 100,
      },
      {
        id: "y3",
        axis: {
          position: "left",
          size: 60,
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
        <h3>Thin Blue Ticks</h3>
        <CanPlot
          style={{ width: "100%", height: "300px" }}
          configuration={{
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
              top: 20,
            },
            scales: scales,
          }}
        >
          <XTicks
            scaleId="x1"
            ticks={makeLinearTicks()}
            tickStyle={{
              strokeStyle: "#4c6ef5",
              lineWidth: 1,
            }}
            labelStyle={{
              fillStyle: "#4c6ef5",
              font: "12px sans-serif",
            }}
          />
          <YTicks
            scaleId="y1"
            ticks={makeLinearTicks()}
            tickStyle={{
              strokeStyle: "#4c6ef5",
              lineWidth: 1,
            }}
            labelStyle={{
              fillStyle: "#4c6ef5",
              font: "12px sans-serif",
            }}
          />

          <LinePlot
            data={data}
            xScaleId="x1"
            yScaleId="y1"
            style={{
              strokeStyle: "#4c6ef5",
              lineWidth: 2,
            }}
          />
        </CanPlot>

        <h3 style={{ marginTop: "40px" }}>Bold Red Ticks</h3>
        <CanPlot
          style={{ width: "100%", height: "300px" }}
          configuration={{
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
              top: 20,
            },
            scales: scales2,
          }}
        >
          <XTicks
            scaleId="x2"
            ticks={makeLinearTicks()}
            tickStyle={{
              strokeStyle: "#ff6b6b",
              lineWidth: 3,
            }}
            labelStyle={{
              fillStyle: "#ff6b6b",
              font: "bold 14px sans-serif",
            }}
          />
          <YTicks
            scaleId="y2"
            ticks={makeLinearTicks()}
            tickStyle={{
              strokeStyle: "#ff6b6b",
              lineWidth: 3,
            }}
            labelStyle={{
              fillStyle: "#ff6b6b",
              font: "bold 14px sans-serif",
            }}
          />

          <LinePlot
            data={data}
            xScaleId="x2"
            yScaleId="y2"
            style={{
              strokeStyle: "#ff6b6b",
              lineWidth: 2,
            }}
          />
        </CanPlot>

        <h3 style={{ marginTop: "40px" }}>
          Italic Green Ticks with Serif Font
        </h3>
        <CanPlot
          style={{ width: "100%", height: "300px" }}
          configuration={{
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
              top: 20,
            },
            scales: scales3,
          }}
        >
          <XTicks
            scaleId="x3"
            ticks={makeLinearTicks()}
            tickStyle={{
              strokeStyle: "#51cf66",
              lineWidth: 2,
            }}
            labelStyle={{
              fillStyle: "#51cf66",
              font: "italic 13px serif",
            }}
          />
          <YTicks
            scaleId="y3"
            ticks={makeLinearTicks()}
            tickStyle={{
              strokeStyle: "#51cf66",
              lineWidth: 2,
            }}
            labelStyle={{
              fillStyle: "#51cf66",
              font: "italic 13px serif",
            }}
          />

          <LinePlot
            data={data}
            xScaleId="x3"
            yScaleId="y3"
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

// Different label styles and fonts
export const DifferentLabelStyles: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x1",
        axis: {
          position: "bottom",
          size: 70,
        },
        origin: "x",
        min: 0,
        max: 100,
      },
      {
        id: "y1",
        axis: {
          position: "left",
          size: 70,
        },
        origin: "y",
        min: 0,
        max: 100,
      },
    ];

    const scales2: PlotScaleConfig[] = [
      {
        id: "x2",
        axis: {
          position: "bottom",
          size: 70,
        },
        origin: "x",
        min: 0,
        max: 100,
      },
      {
        id: "y2",
        axis: {
          position: "left",
          size: 70,
        },
        origin: "y",
        min: 0,
        max: 100,
      },
    ];

    const scales3: PlotScaleConfig[] = [
      {
        id: "x3",
        axis: {
          position: "bottom",
          size: 80,
        },
        origin: "x",
        min: 0,
        max: 100,
      },
      {
        id: "y3",
        axis: {
          position: "left",
          size: 80,
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
        <h3>Small Sans-Serif Font</h3>
        <CanPlot
          style={{ width: "100%", height: "300px" }}
          configuration={{
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
              top: 20,
            },
            scales: scales,
          }}
        >
          <XTicks
            scaleId="x1"
            ticks={makeLinearTicks()}
            labelStyle={{
              font: "10px sans-serif",
              fillStyle: "#495057",
            }}
          />
          <YTicks
            scaleId="y1"
            ticks={makeLinearTicks()}
            labelStyle={{
              font: "10px sans-serif",
              fillStyle: "#495057",
            }}
          />

          <LinePlot
            data={data}
            xScaleId="x1"
            yScaleId="y1"
            style={{
              strokeStyle: "#868e96",
              lineWidth: 2,
            }}
          />
        </CanPlot>

        <h3 style={{ marginTop: "40px" }}>Bold Large Font</h3>
        <CanPlot
          style={{ width: "100%", height: "300px" }}
          configuration={{
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
              top: 20,
            },
            scales: scales2,
          }}
        >
          <XTicks
            scaleId="x2"
            ticks={makeLinearTicks()}
            labelStyle={{
              font: "bold 16px sans-serif",
              fillStyle: "#212529",
            }}
          />
          <YTicks
            scaleId="y2"
            ticks={makeLinearTicks()}
            labelStyle={{
              font: "bold 16px sans-serif",
              fillStyle: "#212529",
            }}
          />

          <LinePlot
            data={data}
            xScaleId="x2"
            yScaleId="y2"
            style={{
              strokeStyle: "#343a40",
              lineWidth: 2,
            }}
          />
        </CanPlot>

        <h3 style={{ marginTop: "40px" }}>Monospace Font with Color</h3>
        <CanPlot
          style={{ width: "100%", height: "300px" }}
          configuration={{
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
              top: 20,
            },
            scales: scales3,
          }}
        >
          <XTicks
            scaleId="x3"
            ticks={makeLinearTicks()}
            labelStyle={{
              font: "14px monospace",
              fillStyle: "#9775fa",
            }}
          />
          <YTicks
            scaleId="y3"
            ticks={makeLinearTicks()}
            labelStyle={{
              font: "14px monospace",
              fillStyle: "#9775fa",
            }}
          />

          <LinePlot
            data={data}
            xScaleId="x3"
            yScaleId="y3"
            style={{
              strokeStyle: "#9775fa",
              lineWidth: 2,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Custom label gap
export const CustomLabelGap: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x1",
        axis: {
          position: "bottom",
          size: 70,
        },
        origin: "x",
        min: 0,
        max: 100,
      },
      {
        id: "y1",
        axis: {
          position: "left",
          size: 70,
        },
        origin: "y",
        min: 0,
        max: 100,
      },
    ];

    const scales2: PlotScaleConfig[] = [
      {
        id: "x2",
        axis: {
          position: "bottom",
          size: 90,
        },
        origin: "x",
        min: 0,
        max: 100,
      },
      {
        id: "y2",
        axis: {
          position: "left",
          size: 90,
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
        <h3>Tight Label Gap (labelGap: 8)</h3>
        <CanPlot
          style={{ width: "100%", height: "300px" }}
          configuration={{
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
              top: 20,
            },
            scales: scales,
          }}
        >
          <XTicks
            scaleId="x1"
            ticks={makeLinearTicks()}
            labelGap={8}
            labelStyle={{
              font: "11px sans-serif",
            }}
          />
          <YTicks
            scaleId="y1"
            ticks={makeLinearTicks()}
            labelGap={8}
            labelStyle={{
              font: "11px sans-serif",
            }}
          />

          <LinePlot
            data={data}
            xScaleId="x1"
            yScaleId="y1"
            style={{
              strokeStyle: "#f59f00",
              lineWidth: 2,
            }}
          />
        </CanPlot>

        <h3 style={{ marginTop: "40px" }}>Loose Label Gap (labelGap: 20)</h3>
        <CanPlot
          style={{ width: "100%", height: "300px" }}
          configuration={{
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
              top: 20,
            },
            scales: scales2,
          }}
        >
          <XTicks
            scaleId="x2"
            ticks={makeLinearTicks()}
            labelGap={20}
            labelStyle={{
              font: "13px sans-serif",
            }}
          />
          <YTicks
            scaleId="y2"
            ticks={makeLinearTicks()}
            labelGap={20}
            labelStyle={{
              font: "13px sans-serif",
            }}
          />

          <LinePlot
            data={data}
            xScaleId="x2"
            yScaleId="y2"
            style={{
              strokeStyle: "#cc5de8",
              lineWidth: 2,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Top and right axis positions
export const DifferentAxisPositions: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        axis: {
          position: "top",
          size: 60,
        },
        origin: "x",
        min: 0,
        max: 100,
      },
      {
        id: "y",
        axis: {
          position: "right",
          size: 60,
        },
        origin: "y",
        min: 0,
        max: 100,
      },
    ];

    return (
      <div style={{ padding: "20px" }}>
        <h3>Top and Right Axis with Custom Ticks</h3>
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
          <XTicks
            scaleId="x"
            ticks={makeLinearTicks()}
            tickSize={10}
            tickStyle={{
              strokeStyle: "#e03131",
              lineWidth: 2,
            }}
            labelStyle={{
              fillStyle: "#e03131",
              font: "bold 13px sans-serif",
            }}
          />
          <YTicks
            scaleId="y"
            ticks={makeLinearTicks()}
            tickSize={10}
            tickStyle={{
              strokeStyle: "#1971c2",
              lineWidth: 2,
            }}
            labelStyle={{
              fillStyle: "#1971c2",
              font: "bold 13px sans-serif",
            }}
          />

          <LinePlot
            data={Array.from({ length: 20 }, (_, i) => ({
              x: i * 5,
              y: 50 + Math.sin(i / 2) * 30,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#7950f2",
              lineWidth: 2,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Time ticks with different styles
export const TimeTicksWithStyles: Story = {
  render: () => {
    const refPoint = Date.parse("2025-11-01T06:30:00Z");
    const scales: PlotScaleConfig[] = [
      {
        id: "t",
        axis: {
          position: "bottom",
          size: 80,
        },
        origin: "x",
        min: refPoint - 1000 * 60 * 60 * 24 * 7, // 7 days ago
        max: refPoint,
      },
      {
        id: "y",
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
        <h3>Time Ticks with Custom Styles</h3>
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
          <XTicks
            scaleId="t"
            ticks={makeTimeTicks({ timeZone: "Europe/Warsaw" })}
            tickSize={12}
            tickStyle={{
              strokeStyle: "#1098ad",
              lineWidth: 2,
            }}
            labelStyle={{
              fillStyle: "#0c8599",
              font: "12px sans-serif",
            }}
            labelGap={14}
          />
          <YTicks
            scaleId="y"
            ticks={makeLinearTicks()}
            tickSize={8}
            tickStyle={{
              strokeStyle: "#1098ad",
              lineWidth: 1,
            }}
            labelStyle={{
              fillStyle: "#0c8599",
              font: "12px sans-serif",
            }}
          />

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
              strokeStyle: "#15aabf",
              lineWidth: 2,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Custom tick spacing
export const CustomTickSpacing: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x1",
        axis: {
          position: "bottom",
          size: 60,
        },
        origin: "x",
        min: 0,
        max: 100,
      },
      {
        id: "y1",
        axis: {
          position: "left",
          size: 60,
        },
        origin: "y",
        min: 0,
        max: 100,
      },
    ];

    const scales2: PlotScaleConfig[] = [
      {
        id: "x2",
        axis: {
          position: "bottom",
          size: 60,
        },
        origin: "x",
        min: 0,
        max: 100,
      },
      {
        id: "y2",
        axis: {
          position: "left",
          size: 60,
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
        <h3>Dense Ticks (space: 30)</h3>
        <CanPlot
          style={{ width: "100%", height: "300px" }}
          configuration={{
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
              top: 20,
            },
            scales: scales,
          }}
        >
          <XTicks scaleId="x1" ticks={makeLinearTicks({ space: 30 })} />
          <YTicks scaleId="y1" ticks={makeLinearTicks({ space: 30 })} />

          <LinePlot
            data={data}
            xScaleId="x1"
            yScaleId="y1"
            style={{
              strokeStyle: "#f76707",
              lineWidth: 2,
            }}
          />
        </CanPlot>

        <h3 style={{ marginTop: "40px" }}>Sparse Ticks (space: 150)</h3>
        <CanPlot
          style={{ width: "100%", height: "300px" }}
          configuration={{
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
              top: 20,
            },
            scales: scales2,
          }}
        >
          <XTicks scaleId="x2" ticks={makeLinearTicks({ space: 150 })} />
          <YTicks scaleId="y2" ticks={makeLinearTicks({ space: 150 })} />

          <LinePlot
            data={data}
            xScaleId="x2"
            yScaleId="y2"
            style={{
              strokeStyle: "#2f9e44",
              lineWidth: 2,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Combining all customizations
export const FullyCustomized: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        axis: {
          position: "bottom",
          size: 80,
        },
        origin: "x",
        min: 0,
        max: 100,
      },
      {
        id: "y",
        axis: {
          position: "left",
          size: 80,
        },
        origin: "y",
        min: -50,
        max: 50,
      },
    ];

    return (
      <div style={{ padding: "20px" }}>
        <h3>Fully Customized Ticks</h3>
        <p>Large ticks with custom colors, bold fonts, and custom spacing</p>
        <CanPlot
          style={{ width: "100%", height: "500px" }}
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
          <XTicks
            scaleId="x"
            ticks={makeLinearTicks({ space: 80 })}
            tickSize={12}
            labelGap={16}
            tickStyle={{
              strokeStyle: "#d9480f",
              lineWidth: 3,
            }}
            labelStyle={{
              fillStyle: "#c92a2a",
              font: "bold 15px Georgia, serif",
            }}
          />
          <YTicks
            scaleId="y"
            ticks={makeLinearTicks({ space: 60 })}
            tickSize={12}
            labelGap={16}
            tickStyle={{
              strokeStyle: "#1864ab",
              lineWidth: 3,
            }}
            labelStyle={{
              fillStyle: "#1971c2",
              font: "bold 15px Georgia, serif",
            }}
          />

          <LinePlot
            data={Array.from({ length: 100 }, (_, i) => ({
              x: i,
              y: Math.sin(i / 5) * 30 + Math.cos(i / 3) * 15,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#7048e8",
              lineWidth: 3,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

// Time ticks wide range: year 1500 to 2500 (performance test)
export const TimeTicksWideRange: Story = {
  render: () => {
    const minTime = Date.parse("1500-01-01T00:00:00Z");
    const maxTime = Date.parse("2500-01-01T00:00:00Z");
    const scales: PlotScaleConfig[] = [
      {
        id: "t",
        axis: {
          position: "bottom",
          size: 80,
        },
        origin: "x",
        min: minTime,
        max: maxTime,
      },
      {
        id: "y",
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
        <h3>Time Ticks — Wide Range (year 1500 to 2500)</h3>
        <p style={{ color: "#666", fontSize: "14px" }}>
          1000-year span to test tick generation performance.
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
          <XTicks scaleId="t" ticks={makeTimeTicks({ timeZone: "UTC" })} />
          <YTicks scaleId="y" ticks={makeLinearTicks()} />

          <LinePlot
            data={[
              { x: minTime, y: 20 },
              { x: maxTime, y: 80 },
            ]}
            xScaleId="t"
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

const PRESETS: { label: string; min: number; max: number }[] = [
  {
    label: "1 hour",
    min: Date.parse("2025-06-15T11:00:00Z"),
    max: Date.parse("2025-06-15T12:00:00Z"),
  },
  {
    label: "1 day",
    min: Date.parse("2025-06-15T00:00:00Z"),
    max: Date.parse("2025-06-16T00:00:00Z"),
  },
  {
    label: "1 month",
    min: Date.parse("2025-06-01T00:00:00Z"),
    max: Date.parse("2025-07-01T00:00:00Z"),
  },
  {
    label: "1 year",
    min: Date.parse("2025-01-01T00:00:00Z"),
    max: Date.parse("2026-01-01T00:00:00Z"),
  },
  {
    label: "10 years",
    min: Date.parse("2015-01-01T00:00:00Z"),
    max: Date.parse("2025-01-01T00:00:00Z"),
  },
  {
    label: "100 years",
    min: Date.parse("1925-01-01T00:00:00Z"),
    max: Date.parse("2025-01-01T00:00:00Z"),
  },
  {
    label: "1000 years",
    min: Date.parse("1500-01-01T00:00:00Z"),
    max: Date.parse("2500-01-01T00:00:00Z"),
  },
];

// Interactive time ticks: scroll to zoom, drag to pan
export const TimeTicksInteractive: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [range, setRange] = useState(PRESETS[3]);

    // Keep a ref so event handlers always see the latest range without stale closures
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const rangeRef = useRef(range);
    rangeRef.current = range;

    // Drag state: start cssX + start range
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dragRef = useRef<{
      cssX: number;
      chartWidth: number;
      min: number;
      max: number;
    } | null>(null);

    // Last known pointer time (for zoom centering)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const pointerTimeRef = useRef<number | null>(null);

    const handleMouseDown = (event: MouseDownEvent) => {
      const { cssX } = event.pointer;
      const chartWidth = event.frame.chartAreaCSS.width;
      if (cssX != null && chartWidth > 0) {
        dragRef.current = {
          cssX,
          chartWidth,
          min: rangeRef.current.min,
          max: rangeRef.current.max,
        };
      }
    };

    const handleMouseMove = (event: MoveEvent) => {
      if (!event.pointer) return;
      const { cssX } = event.pointer;

      // Update pointer time for zoom centering
      const scaledTime = event.pointer.scaled["t"];
      if (scaledTime != null) pointerTimeRef.current = scaledTime;

      // Pan while dragging
      if (dragRef.current && cssX != null) {
        const { cssX: startX, chartWidth, min, max } = dragRef.current;
        const span = max - min;
        const delta = ((cssX - startX) / chartWidth) * span;
        setRange({ label: "custom", min: min - delta, max: max - delta });
      }
    };

    const handleDocumentMouseUp = () => {
      dragRef.current = null;
    };

    const handleWheel = (e: React.WheelEvent) => {
      e.preventDefault();
      const { min, max } = rangeRef.current;
      const span = max - min;
      const zoomFactor = e.deltaY > 0 ? 1.25 : 1 / 1.25;
      const center = pointerTimeRef.current ?? (min + max) / 2;
      const ratio = Math.max(0, Math.min(1, (center - min) / span));
      const newSpan = span * zoomFactor;
      setRange({
        label: "custom",
        min: center - ratio * newSpan,
        max: center + (1 - ratio) * newSpan,
      });
    };

    const scales: PlotScaleConfig[] = [
      {
        id: "t",
        axis: { position: "bottom", size: 80 },
        origin: "x",
        min: range.min,
        max: range.max,
      },
      {
        id: "y",
        axis: { position: "left", size: 60 },
        origin: "y",
        min: 0,
        max: 100,
      },
    ];

    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h3 style={{ marginBottom: "4px" }}>Time Ticks — Interactive Zoom &amp; Pan</h3>
        <p style={{ color: "#666", fontSize: "13px", margin: "0 0 12px" }}>
          Scroll to zoom · Drag to pan
        </p>

        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
          {PRESETS.map((p) => (
            <button
              key={p.label}
              onClick={() => setRange(p)}
              style={{
                padding: "4px 10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                background: range.label === p.label ? "#4c6ef5" : "#f8f9fa",
                color: range.label === p.label ? "#fff" : "#333",
                cursor: "pointer",
                fontSize: "13px",
              }}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* onWheel on the wrapper — prevent page scroll while hovering the chart */}
        <div onWheel={handleWheel} style={{ userSelect: "none", cursor: dragRef.current ? "grabbing" : "grab" }}>
          <CanPlot
            style={{ width: "100%", height: "400px" }}
            configuration={{
              padding: { bottom: 20, left: 20, right: 20, top: 20 },
              scales,
            }}
          >
            <ChartAreaInteractions
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onDocumentMouseUp={handleDocumentMouseUp}
            />
            <XTicks scaleId="t" ticks={makeTimeTicks({ timeZone: "Europe/Warsaw" })} />
            <YTicks scaleId="y" ticks={makeLinearTicks()} />
          </CanPlot>
        </div>

        <p style={{ fontSize: "12px", color: "#888", marginTop: "8px" }}>
          {new Date(range.min).toISOString()} &rarr; {new Date(range.max).toISOString()}
        </p>
      </div>
    );
  },
};

// DST time ranges: fixed ranges across summer and autumn DST transitions
// in various time zones, producing different tick splits

const DST_SCENARIOS: {
  title: string;
  timeZone: string;
  min: string;
  max: string;
}[] = [
  // ── EU (Europe/Warsaw) spring forward: March 30, 2025 at 2:00 AM local ──
  {
    title: "Warsaw — 2h across spring-forward",
    timeZone: "Europe/Warsaw",
    min: "2025-03-30T00:00:00Z",
    max: "2025-03-30T02:00:00Z",
  },
  {
    title: "Warsaw — 6h across spring-forward",
    timeZone: "Europe/Warsaw",
    min: "2025-03-29T22:00:00Z",
    max: "2025-03-30T04:00:00Z",
  },
  {
    title: "Warsaw — 24h across spring-forward",
    timeZone: "Europe/Warsaw",
    min: "2025-03-29T12:00:00Z",
    max: "2025-03-30T12:00:00Z",
  },
  {
    title: "Warsaw — 3d across spring-forward",
    timeZone: "Europe/Warsaw",
    min: "2025-03-29T00:00:00Z",
    max: "2025-04-01T00:00:00Z",
  },
  {
    title: "Warsaw — 1w across spring-forward",
    timeZone: "Europe/Warsaw",
    min: "2025-03-26T00:00:00Z",
    max: "2025-04-02T00:00:00Z",
  },
  // ── EU (Europe/Warsaw) fall back: October 26, 2025 at 3:00 AM local ──
  {
    title: "Warsaw — 2h across fall-back",
    timeZone: "Europe/Warsaw",
    min: "2025-10-26T00:00:00Z",
    max: "2025-10-26T02:00:00Z",
  },
  {
    title: "Warsaw — 6h across fall-back",
    timeZone: "Europe/Warsaw",
    min: "2025-10-25T22:00:00Z",
    max: "2025-10-26T04:00:00Z",
  },
  {
    title: "Warsaw — 24h across fall-back",
    timeZone: "Europe/Warsaw",
    min: "2025-10-25T12:00:00Z",
    max: "2025-10-26T12:00:00Z",
  },
  {
    title: "Warsaw — 3d across fall-back",
    timeZone: "Europe/Warsaw",
    min: "2025-10-25T00:00:00Z",
    max: "2025-10-28T00:00:00Z",
  },
  {
    title: "Warsaw — 1w across fall-back",
    timeZone: "Europe/Warsaw",
    min: "2025-10-22T00:00:00Z",
    max: "2025-10-29T00:00:00Z",
  },
  // ── UK (Europe/London) spring forward: March 30, 2025 at 1:00 AM local ──
  {
    title: "London — 2h across spring-forward",
    timeZone: "Europe/London",
    min: "2025-03-30T00:00:00Z",
    max: "2025-03-30T02:00:00Z",
  },
  {
    title: "London — 6h across spring-forward",
    timeZone: "Europe/London",
    min: "2025-03-29T22:00:00Z",
    max: "2025-03-30T04:00:00Z",
  },
  {
    title: "London — 24h across spring-forward",
    timeZone: "Europe/London",
    min: "2025-03-29T12:00:00Z",
    max: "2025-03-30T12:00:00Z",
  },
  // ── UK (Europe/London) fall back: October 26, 2025 at 2:00 AM local ──
  {
    title: "London — 2h across fall-back",
    timeZone: "Europe/London",
    min: "2025-10-26T00:00:00Z",
    max: "2025-10-26T02:00:00Z",
  },
  {
    title: "London — 6h across fall-back",
    timeZone: "Europe/London",
    min: "2025-10-25T22:00:00Z",
    max: "2025-10-26T04:00:00Z",
  },
  {
    title: "London — 24h across fall-back",
    timeZone: "Europe/London",
    min: "2025-10-25T12:00:00Z",
    max: "2025-10-26T12:00:00Z",
  },
  // ── US Eastern (America/New_York) spring forward: March 9, 2025 at 2:00 AM ──
  {
    title: "New York — 2h across spring-forward",
    timeZone: "America/New_York",
    min: "2025-03-09T06:00:00Z",
    max: "2025-03-09T08:00:00Z",
  },
  {
    title: "New York — 6h across spring-forward",
    timeZone: "America/New_York",
    min: "2025-03-09T04:00:00Z",
    max: "2025-03-09T10:00:00Z",
  },
  {
    title: "New York — 24h across spring-forward",
    timeZone: "America/New_York",
    min: "2025-03-08T12:00:00Z",
    max: "2025-03-09T12:00:00Z",
  },
  {
    title: "New York — 3d across spring-forward",
    timeZone: "America/New_York",
    min: "2025-03-08T00:00:00Z",
    max: "2025-03-11T00:00:00Z",
  },
  // ── US Eastern (America/New_York) fall back: November 2, 2025 at 2:00 AM ──
  {
    title: "New York — 2h across fall-back",
    timeZone: "America/New_York",
    min: "2025-11-02T05:00:00Z",
    max: "2025-11-02T07:00:00Z",
  },
  {
    title: "New York — 6h across fall-back",
    timeZone: "America/New_York",
    min: "2025-11-02T03:00:00Z",
    max: "2025-11-02T09:00:00Z",
  },
  {
    title: "New York — 24h across fall-back",
    timeZone: "America/New_York",
    min: "2025-11-01T12:00:00Z",
    max: "2025-11-02T12:00:00Z",
  },
  {
    title: "New York — 1w across fall-back",
    timeZone: "America/New_York",
    min: "2025-10-29T00:00:00Z",
    max: "2025-11-05T00:00:00Z",
  },
  // ── US Pacific (America/Los_Angeles) spring forward: March 9, 2025 at 2:00 AM ──
  {
    title: "Los Angeles — 2h across spring-forward",
    timeZone: "America/Los_Angeles",
    min: "2025-03-09T09:00:00Z",
    max: "2025-03-09T11:00:00Z",
  },
  {
    title: "Los Angeles — 6h across spring-forward",
    timeZone: "America/Los_Angeles",
    min: "2025-03-09T07:00:00Z",
    max: "2025-03-09T13:00:00Z",
  },
  {
    title: "Los Angeles — 24h across spring-forward",
    timeZone: "America/Los_Angeles",
    min: "2025-03-08T12:00:00Z",
    max: "2025-03-09T12:00:00Z",
  },
  // ── US Pacific (America/Los_Angeles) fall back: November 2, 2025 at 2:00 AM ──
  {
    title: "Los Angeles — 2h across fall-back",
    timeZone: "America/Los_Angeles",
    min: "2025-11-02T08:00:00Z",
    max: "2025-11-02T10:00:00Z",
  },
  {
    title: "Los Angeles — 6h across fall-back",
    timeZone: "America/Los_Angeles",
    min: "2025-11-02T06:00:00Z",
    max: "2025-11-02T12:00:00Z",
  },
  {
    title: "Los Angeles — 24h across fall-back",
    timeZone: "America/Los_Angeles",
    min: "2025-11-01T12:00:00Z",
    max: "2025-11-02T12:00:00Z",
  },
  // ── Australia (Australia/Sydney) spring forward: October 5, 2025 at 2:00 AM AEST ──
  {
    title: "Sydney — 2h across spring-forward",
    timeZone: "Australia/Sydney",
    min: "2025-10-04T15:00:00Z",
    max: "2025-10-04T17:00:00Z",
  },
  {
    title: "Sydney — 6h across spring-forward",
    timeZone: "Australia/Sydney",
    min: "2025-10-04T13:00:00Z",
    max: "2025-10-04T19:00:00Z",
  },
  {
    title: "Sydney — 24h across spring-forward",
    timeZone: "Australia/Sydney",
    min: "2025-10-04T04:00:00Z",
    max: "2025-10-05T04:00:00Z",
  },
  // ── Australia (Australia/Sydney) fall back: April 6, 2025 at 3:00 AM AEDT ──
  {
    title: "Sydney — 2h across fall-back",
    timeZone: "Australia/Sydney",
    min: "2025-04-05T15:00:00Z",
    max: "2025-04-05T17:00:00Z",
  },
  {
    title: "Sydney — 6h across fall-back",
    timeZone: "Australia/Sydney",
    min: "2025-04-05T13:00:00Z",
    max: "2025-04-05T19:00:00Z",
  },
  {
    title: "Sydney — 24h across fall-back",
    timeZone: "Australia/Sydney",
    min: "2025-04-05T04:00:00Z",
    max: "2025-04-06T04:00:00Z",
  },
  // ── Wider spans across DST (month-level) ──
  {
    title: "Warsaw — 1 month across spring-forward",
    timeZone: "Europe/Warsaw",
    min: "2025-03-01T00:00:00Z",
    max: "2025-04-01T00:00:00Z",
  },
  {
    title: "Warsaw — 1 month across fall-back",
    timeZone: "Europe/Warsaw",
    min: "2025-10-01T00:00:00Z",
    max: "2025-11-01T00:00:00Z",
  },
  {
    title: "New York — 1 month across spring-forward",
    timeZone: "America/New_York",
    min: "2025-03-01T00:00:00Z",
    max: "2025-04-01T00:00:00Z",
  },
  {
    title: "New York — 1 month across fall-back",
    timeZone: "America/New_York",
    min: "2025-10-01T00:00:00Z",
    max: "2025-11-01T00:00:00Z",
  },
];

export const DSTTimeRanges: Story = {
  render: () => {
    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h2 style={{ marginBottom: "4px" }}>DST Transition Tick Ranges</h2>
        <p style={{ color: "#666", fontSize: "13px", margin: "0 0 24px" }}>
          Fixed time ranges across summer (spring-forward) and autumn
          (fall-back) DST changes in various time zones. No data — only ticks.
        </p>
        {DST_SCENARIOS.map((scenario, i) => {
          const min = Date.parse(scenario.min);
          const max = Date.parse(scenario.max);
          const scaleId = `t${i}`;
          const scales: PlotScaleConfig[] = [
            {
              id: scaleId,
              axis: { position: "bottom", size: 80 },
              origin: "x",
              min,
              max,
            },
          ];
          return (
            <div key={i} style={{ marginBottom: "32px" }}>
              <h4 style={{ margin: "0 0 2px" }}>{scenario.title}</h4>
              <p
                style={{
                  color: "#888",
                  fontSize: "12px",
                  margin: "0 0 6px",
                }}
              >
                {scenario.min} → {scenario.max} ({scenario.timeZone})
              </p>
              <CanPlot
                style={{ width: "100%", height: "80px" }}
                configuration={{
                  padding: { bottom: 0, left: 100, right: 100, top: 0 },
                  scales,
                }}
              >
                <XTicks
                  scaleId={scaleId}
                  ticks={makeTimeTicks({ timeZone: scenario.timeZone })}
                />
              </CanPlot>
            </div>
          );
        })}
      </div>
    );
  },
};

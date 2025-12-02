import type { Meta, StoryObj } from "@storybook/react-vite";
import { CanPlot } from "../lib/CanPlot";
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

        <h3 style={{ marginTop: "40px" }}>Italic Green Ticks with Serif Font</h3>
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
    const refPoint = Date.parse("2025-11-01T12:00:00Z");
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
            ticks={makeTimeTicks({ timeZone: "UTC" })}
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
        <p>
          Large ticks with custom colors, bold fonts, and custom spacing
        </p>
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

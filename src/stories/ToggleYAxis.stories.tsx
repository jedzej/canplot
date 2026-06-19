import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { CanPlot } from "../lib/CanPlot";
import { LinePlot } from "../lib/plot/LinePlot";
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

const data = Array.from({ length: 50 }, (_, i) => ({
  x: i * 2,
  y: 50 + Math.sin(i / 3) * 30 + Math.cos(i / 5) * 10,
}));

export const ToggleYAxis: Story = {
  render: () => {
    const [showYAxis, setShowYAxis] = useState(true);

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
        axis: showYAxis
          ? {
              position: "left",
              size: 50,
            }
          : null,
        origin: "y",
        min: 0,
        max: 100,
      },
    ];

    return (
      <div style={{ padding: "20px" }}>
        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
            <input
              type="checkbox"
              checked={showYAxis}
              onChange={(e) => setShowYAxis(e.target.checked)}
            />
            Show Y axis
          </label>
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
          <LinePlot
            data={data}
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

import type { Meta, StoryObj } from "@storybook/react-vite";
import { CanPlot } from "../lib/CanPlot";
import { ScatterPlot } from "../lib/plot/ScatterPlot";
import { ChartAreaInteractions } from "../lib/interactions/ChartAreaInteractions";
import { Crosshair } from "../lib/interactions/CrossHair";
import { SelectBox } from "../lib/interactions/SelectBox";
import type { PlotScaleConfig } from "../lib/types";

const meta: Meta<typeof CanPlot> = {
  title: "CanPlot/Configuration",
  component: CanPlot,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

// Custom padding
export const CustomPadding: Story = {
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
              bottom: 60,
              left: 80,
              right: 60,
              top: 80,
            },
            scales,
          }}
        >
          <ChartAreaInteractions
            sync={{
              key: "padding",
              xViaScaleId: "x",
              yViaScaleId: "y",
            }}
          >
            <Crosshair />
            <SelectBox />
          </ChartAreaInteractions>

          <ScatterPlot
            data={Array.from({ length: 25 }, (_, i) => ({
              x: i * 4,
              y: 50 + Math.random() * 40 - 20,
            }))}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "#fab005",
              strokeStyle: "#e67700",
              lineWidth: 3,
            }}
          />
        </CanPlot>
      </div>
    );
  },
};

import type { Meta, StoryObj } from "@storybook/react-vite";
import { CanPlot } from "../lib/CanPlot";
import type { PlotScaleConfig } from "../lib/types";
import type React from "react";
import { useDrawEffect } from "../lib";
import { useEffect, useState } from "react";

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
export const ReactiveUpdates: Story = {
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
        max: 1,
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
          <ReactiveChild color="red" />
          <ReactiveChild color="blue" />
          <ReactiveChild color="green" />
          <ReactiveChild color="orange" />
          <ReactiveChild color="purple" />
          <ReactiveChild color="black" />
          <ReactiveChild color="gray" />
          <ReactiveChild color="pink" />
          <ReactiveChild color="brown" />
          <ReactiveChild color="cyan" />
        </CanPlot>
      </div>
    );
  },
};

// eslint-disable-next-line react-refresh/only-export-components
const ReactiveChild: React.FC<{ color: string }> = ({ color }) => {
  const [randomNumber, setRandomNumber] = useState(0.5);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomNumber(Math.random());
    }, 1);
    return () => clearInterval(interval);
  }, []);

  useDrawEffect(({clampYPosToChartArea, getCtx, valToPos}) => {
    const ctx = getCtx();
    const xPos = valToPos(randomNumber, "x", "canvas");
    const x0 = clampYPosToChartArea(-Infinity, "canvas")
    const x1 = clampYPosToChartArea(Infinity, "canvas")
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(xPos, x0);
    ctx.lineTo(xPos, x1);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath()
    ctx.restore();
  }, [randomNumber, color]);
  return null;
};

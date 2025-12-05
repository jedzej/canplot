import type { Meta, StoryObj } from "@storybook/react-vite";
import { CanPlot } from "../lib/CanPlot";
import type { PlotScaleConfig } from "../lib/types";
import type React from "react";
import { useDrawEffect } from "../lib";
import { useEffect, useState } from "react";
import { LinePlot } from "../lib/plot/LinePlot";
import { ScatterPlot } from "../lib/plot/ScatterPlot";

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

// Dynamic series addition and removal
export const DynamicSeries: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [series, setSeries] = useState<Array<{ id: number; color: string; data: Array<{ x: number; y: number }> }>>([
      {
        id: 1,
        color: "#ff6b6b",
        data: Array.from({ length: 50 }, (_, i) => ({
          x: i * 2,
          y: 50 + Math.sin(i / 5) * 25,
        })),
      },
    ]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [nextId, setNextId] = useState(2);

    const colors = ["#4c6ef5", "#51cf66", "#ff6b6b", "#f59f00", "#7950f2", "#f06595", "#20c997", "#fab005"];

    const addLineSeries = () => {
      const newSeries = {
        id: nextId,
        color: colors[nextId % colors.length],
        data: Array.from({ length: 50 }, (_, i) => ({
          x: i * 2,
          y: 50 + Math.sin((i + nextId * 10) / 5) * 25 + Math.cos((i + nextId * 5) / 3) * 15,
        })),
      };
      setSeries([...series, newSeries]);
      setNextId(nextId + 1);
    };

    const addScatterSeries = () => {
      const newSeries = {
        id: nextId,
        color: colors[nextId % colors.length],
        data: Array.from({ length: 30 }, () => ({
          x: Math.random() * 100,
          y: Math.random() * 100,
        })),
      };
      setSeries([...series, newSeries]);
      setNextId(nextId + 1);
    };

    const removeSeries = (id: number) => {
      setSeries(series.filter((s) => s.id !== id));
    };

    const removeLastSeries = () => {
      if (series.length > 0) {
        setSeries(series.slice(0, -1));
      }
    };

    const clearAll = () => {
      setSeries([]);
    };

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
          size: 50,
        },
        origin: "y",
        min: 0,
        max: 100,
      },
    ];

    return (
      <div style={{ padding: "20px" }}>
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ margin: "0 0 10px 0" }}>Dynamic Series Management</h3>
          <p style={{ fontSize: "14px", color: "#666", marginBottom: "15px" }}>
            Add and remove series dynamically. Each series is rendered as a separate component.
          </p>
          <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
            <button
              onClick={addLineSeries}
              style={{
                padding: "8px 16px",
                fontSize: "14px",
                cursor: "pointer",
                backgroundColor: "#4c6ef5",
                color: "white",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Add Line Series
            </button>
            <button
              onClick={addScatterSeries}
              style={{
                padding: "8px 16px",
                fontSize: "14px",
                cursor: "pointer",
                backgroundColor: "#51cf66",
                color: "white",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Add Scatter Series
            </button>
            <button
              onClick={removeLastSeries}
              disabled={series.length === 0}
              style={{
                padding: "8px 16px",
                fontSize: "14px",
                cursor: series.length === 0 ? "not-allowed" : "pointer",
                backgroundColor: series.length === 0 ? "#dee2e6" : "#f59f00",
                color: "white",
                border: "none",
                borderRadius: "4px",
                opacity: series.length === 0 ? 0.6 : 1,
              }}
            >
              Remove Last
            </button>
            <button
              onClick={clearAll}
              disabled={series.length === 0}
              style={{
                padding: "8px 16px",
                fontSize: "14px",
                cursor: series.length === 0 ? "not-allowed" : "pointer",
                backgroundColor: series.length === 0 ? "#dee2e6" : "#ff6b6b",
                color: "white",
                border: "none",
                borderRadius: "4px",
                opacity: series.length === 0 ? 0.6 : 1,
              }}
            >
              Clear All
            </button>
          </div>
          <div style={{ fontSize: "14px", color: "#495057", marginBottom: "10px" }}>
            Active Series: {series.length}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {series.map((s) => (
              <div
                key={s.id}
                style={{
                  padding: "6px 12px",
                  fontSize: "13px",
                  backgroundColor: "#f1f3f5",
                  border: `2px solid ${s.color}`,
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ color: s.color, fontWeight: "bold" }}>Series {s.id}</span>
                <button
                  onClick={() => removeSeries(s.id)}
                  style={{
                    padding: "2px 6px",
                    fontSize: "12px",
                    cursor: "pointer",
                    backgroundColor: "#ff6b6b",
                    color: "white",
                    border: "none",
                    borderRadius: "3px",
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        <CanPlot
          style={{ width: "100%", height: "500px" }}
          configuration={{
            padding: {
              bottom: 60,
              left: 70,
              right: 20,
              top: 20,
            },
            scales,
          }}
        >
          {series.map((s) => {
            // Alternate between LinePlot and ScatterPlot based on data characteristics
            const isScatter = s.data.length < 40;
            
            if (isScatter) {
              return (
                <ScatterPlot
                  key={s.id}
                  data={s.data}
                  xScaleId="x"
                  yScaleId="y"
                  radius={4}
                  style={{
                    fillStyle: s.color,
                    strokeStyle: s.color,
                    lineWidth: 2,
                  }}
                />
              );
            }
            
            return (
              <LinePlot
                key={s.id}
                data={s.data}
                xScaleId="x"
                yScaleId="y"
                style={{
                  strokeStyle: s.color,
                  lineWidth: 2,
                }}
              />
            );
          })}
        </CanPlot>
      </div>
    );
  },
};

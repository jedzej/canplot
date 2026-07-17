import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { CanPlot } from "../lib/CanPlot";
import { LinePlot } from "../lib/plot/LinePlot";
import { BarPlot } from "../lib/plot/BarPlot";
import { AreaPlot } from "../lib/plot/AreaPlot";
import { XTicks, YTicks } from "../lib/plot/Ticks";
import { makeLinearTicks, makeTimeTicks } from "../lib/tickUtils";
import { ChartAreaInteractions } from "../lib/interactions/ChartAreaInteractions";
import { Crosshair } from "../lib/interactions/CrossHair";
import { SelectBox } from "../lib/interactions/SelectBox";
import type { PlotScaleConfig } from "../lib/types";
import type { SpanSelectEvent } from "../lib/interactions/types";

const meta: Meta<typeof CanPlot> = {
  component: CanPlot,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

// Common zoom - both axes synchronized
export const CommonZoom: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [xRange, setXRange] = useState({ min: 0, max: 100 });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [yRange, setYRange] = useState({ min: 0, max: 100 });

    const handleSpanSelect = (event: SpanSelectEvent) => {
      if (!event.completed) return;

      if (event.mode === "x" || event.mode === "box") {
        const xScale = event.x.scaled[0];
        if (xScale) {
          setXRange({
            min: Math.min(xScale.from, xScale.to),
            max: Math.max(xScale.from, xScale.to),
          });
        }
      }

      if (event.mode === "y" || event.mode === "box") {
        const yScale = event.y.scaled[0];
        if (yScale) {
          setYRange({
            min: Math.min(yScale.from, yScale.to),
            max: Math.max(yScale.from, yScale.to),
          });
        }
      }
    };

    const resetZoom = () => {
      setXRange({ min: 0, max: 100 });
      setYRange({ min: 0, max: 100 });
    };

    const scales: PlotScaleConfig[] = [
      {
        id: "x",
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
        axis: {
          position: "left",
          size: 60,
        },
        origin: "y",
        min: yRange.min,
        max: yRange.max,
      },
    ];

    const data1 = Array.from({ length: 50 }, (_, i) => ({
      x: i * 2,
      y: 50 + Math.sin(i / 5) * 30 + Math.cos(i / 3) * 15,
    }));

    const data2 = Array.from({ length: 50 }, (_, i) => ({
      x: i * 2,
      y: 30 + Math.cos(i / 4) * 25 + Math.sin(i / 2) * 10,
    }));

    return (
      <div style={{ padding: "20px" }}>
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <h3 style={{ margin: 0 }}>Common Zoom (X and Y synchronized)</h3>
          <button
            onClick={resetZoom}
            style={{
              padding: "6px 12px",
              fontSize: "14px",
              cursor: "pointer",
              backgroundColor: "#f1f3f5",
              border: "1px solid #dee2e6",
              borderRadius: "4px",
            }}
          >
            Reset Zoom
          </button>
          <div style={{ fontSize: "14px", color: "#666" }}>
            Range: X [{xRange.min.toFixed(1)}, {xRange.max.toFixed(1)}], Y [
            {yRange.min.toFixed(1)}, {yRange.max.toFixed(1)}]
          </div>
        </div>
        <p style={{ fontSize: "14px", color: "#666" }}>
          Drag to select a region on any chart to zoom. Both X and Y axes are
          synchronized across all charts.
        </p>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}
        >
          {/* Chart 1 */}
          <CanPlot
            style={{ width: "100%", height: "300px" }}
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
                key: "common-zoom",
                xViaScaleId: "x",
                yViaScaleId: "y",
              }}
              onSpanSelect={handleSpanSelect}
            >
              <Crosshair />
              <SelectBox makeStyle={() => ({ backgroundColor: "#4c6ef544" })} />
            </ChartAreaInteractions>

            <XTicks scaleId="x" ticks={makeLinearTicks()} />
            <YTicks scaleId="y" ticks={makeLinearTicks()} />

            <LinePlot
              data={data1}
              xScaleId="x"
              yScaleId="y"
              style={{
                strokeStyle: "#4c6ef5",
                lineWidth: 2,
              }}
            />
          </CanPlot>

          {/* Chart 2 */}
          <CanPlot
            style={{ width: "100%", height: "300px" }}
            configuration={{
              padding: {
                bottom: 80,
                left: 80,
                right: 20,
                top: 20,
              },
              scales,
            }}
          >
            <ChartAreaInteractions
              sync={{
                key: "common-zoom",
                xViaScaleId: "x",
                yViaScaleId: "y",
              }}
              onSpanSelect={handleSpanSelect}
            >
              <Crosshair />
              <SelectBox makeStyle={() => ({ backgroundColor: "#51cf6644" })} />
            </ChartAreaInteractions>

            <XTicks scaleId="x" ticks={makeLinearTicks()} />
            <YTicks scaleId="y" ticks={makeLinearTicks()} />

            <LinePlot
              data={data2}
              xScaleId="x"
              yScaleId="y"
              style={{
                strokeStyle: "#51cf66",
                lineWidth: 2,
              }}
            />
          </CanPlot>
        </div>
      </div>
    );
  },
};

// X-axis only synchronization
export const XAxisOnlySync: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [xRange, setXRange] = useState({ min: 0, max: 100 });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [yRange1, setYRange1] = useState({ min: 0, max: 100 });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [yRange2, setYRange2] = useState({ min: -50, max: 50 });

    const handleSpanSelect1 = (event: SpanSelectEvent) => {
      if (!event.completed) return;

      if (event.mode === "x" || event.mode === "box") {
        const xScale = event.x.scaled[0];
        if (xScale) {
          setXRange({
            min: Math.min(xScale.from, xScale.to),
            max: Math.max(xScale.from, xScale.to),
          });
        }
      }

      if (event.mode === "y" || event.mode === "box") {
        const yScale = event.y.scaled[0];
        if (yScale) {
          setYRange1({
            min: Math.min(yScale.from, yScale.to),
            max: Math.max(yScale.from, yScale.to),
          });
        }
      }
    };

    const handleSpanSelect2 = (event: SpanSelectEvent) => {
      if (!event.completed) return;

      if (event.mode === "x" || event.mode === "box") {
        const xScale = event.x.scaled[0];
        if (xScale) {
          setXRange({
            min: Math.min(xScale.from, xScale.to),
            max: Math.max(xScale.from, xScale.to),
          });
        }
      }

      if (event.mode === "y" || event.mode === "box") {
        const yScale = event.y.scaled[0];
        if (yScale) {
          setYRange2({
            min: Math.min(yScale.from, yScale.to),
            max: Math.max(yScale.from, yScale.to),
          });
        }
      }
    };

    const resetZoom = () => {
      setXRange({ min: 0, max: 100 });
      setYRange1({ min: 0, max: 100 });
      setYRange2({ min: -50, max: 50 });
    };

    const scales1: PlotScaleConfig[] = [
      {
        id: "x",
        axis: {
          position: "bottom",
          size: 60,
        },
        origin: "x",
        min: xRange.min,
        max: xRange.max,
      },
      {
        id: "y1",
        axis: {
          position: "left",
          size: 60,
        },
        origin: "y",
        min: yRange1.min,
        max: yRange1.max,
      },
    ];

    const scales2: PlotScaleConfig[] = [
      {
        id: "x",
        axis: {
          position: "bottom",
          size: 60,
        },
        origin: "x",
        min: xRange.min,
        max: xRange.max,
      },
      {
        id: "y2",
        axis: {
          position: "left",
          size: 60,
        },
        origin: "y",
        min: yRange2.min,
        max: yRange2.max,
      },
    ];

    const data1 = Array.from({ length: 50 }, (_, i) => ({
      x: i * 2,
      y: 50 + Math.sin(i / 5) * 30,
    }));

    const data2 = Array.from({ length: 50 }, (_, i) => ({
      x: i * 2,
      y: Math.cos(i / 4) * 40,
    }));

    return (
      <div style={{ padding: "20px" }}>
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <h3 style={{ margin: 0 }}>X-Axis Only Synchronization</h3>
          <button
            onClick={resetZoom}
            style={{
              padding: "6px 12px",
              fontSize: "14px",
              cursor: "pointer",
              backgroundColor: "#f1f3f5",
              border: "1px solid #dee2e6",
              borderRadius: "4px",
            }}
          >
            Reset Zoom
          </button>
          <div style={{ fontSize: "14px", color: "#666" }}>
            X: [{xRange.min.toFixed(1)}, {xRange.max.toFixed(1)}]
          </div>
        </div>
        <p style={{ fontSize: "14px", color: "#666" }}>
          Drag horizontally to zoom X-axis on all charts. Drag vertically or
          box-select to zoom Y-axis independently per chart.
        </p>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}
        >
          {/* Chart 1 */}
          <div>
            <div
              style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
            >
              Chart 1: Y [{yRange1.min.toFixed(1)}, {yRange1.max.toFixed(1)}]
            </div>
            <CanPlot
              style={{ width: "100%", height: "300px" }}
              configuration={{
                padding: {
                  bottom: 80,
                  left: 80,
                  right: 20,
                  top: 20,
                },
                scales: scales1,
              }}
            >
              <ChartAreaInteractions
                sync={{
                  key: "x-axis-sync",
                  xViaScaleId: "x",
                }}
                onSpanSelect={handleSpanSelect1}
              >
                <Crosshair />
                <SelectBox
                  makeStyle={() => ({ backgroundColor: "#ff6b6b44" })}
                />
              </ChartAreaInteractions>

              <XTicks scaleId="x" ticks={makeLinearTicks()} />
              <YTicks scaleId="y1" ticks={makeLinearTicks()} />

              <LinePlot
                data={data1}
                xScaleId="x"
                yScaleId="y1"
                style={{
                  strokeStyle: "#ff6b6b",
                  lineWidth: 2,
                }}
              />
            </CanPlot>
          </div>

          {/* Chart 2 */}
          <div>
            <div
              style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
            >
              Chart 2: Y [{yRange2.min.toFixed(1)}, {yRange2.max.toFixed(1)}]
            </div>
            <CanPlot
              style={{ width: "100%", height: "300px" }}
              configuration={{
                padding: {
                  bottom: 80,
                  left: 80,
                  right: 20,
                  top: 20,
                },
                scales: scales2,
              }}
            >
              <ChartAreaInteractions
                sync={{
                  key: "x-axis-sync",
                  xViaScaleId: "x",
                }}
                onSpanSelect={handleSpanSelect2}
              >
                <Crosshair />
                <SelectBox
                  makeStyle={() => ({ backgroundColor: "#7950f244" })}
                />
              </ChartAreaInteractions>

              <XTicks scaleId="x" ticks={makeLinearTicks()} />
              <YTicks scaleId="y2" ticks={makeLinearTicks()} />

              <LinePlot
                data={data2}
                xScaleId="x"
                yScaleId="y2"
                style={{
                  strokeStyle: "#7950f2",
                  lineWidth: 2,
                }}
              />
            </CanPlot>
          </div>
        </div>
      </div>
    );
  },
};

// Three charts with X-axis sync and different data types
export const ThreeChartsXAxisSync: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [xRange, setXRange] = useState({ min: 0, max: 100 });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [yRange1, setYRange1] = useState({ min: 0, max: 100 });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [yRange2, setYRange2] = useState({ min: 0, max: 50 });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [yRange3, setYRange3] = useState({ min: -1, max: 1 });

    const handleSpanSelect = (
      setY: React.Dispatch<React.SetStateAction<{ min: number; max: number }>>
    ) => {
      return (event: SpanSelectEvent) => {
        if (!event.completed) return;

        if (event.mode === "x" || event.mode === "box") {
          const xScale = event.x.scaled[0];
          if (xScale) {
            setXRange({
              min: Math.min(xScale.from, xScale.to),
              max: Math.max(xScale.from, xScale.to),
            });
          }
        }

        if (event.mode === "y" || event.mode === "box") {
          const yScale = event.y.scaled[0];
          if (yScale) {
            setY({
              min: Math.min(yScale.from, yScale.to),
              max: Math.max(yScale.from, yScale.to),
            });
          }
        }
      };
    };

    const resetZoom = () => {
      setXRange({ min: 0, max: 100 });
      setYRange1({ min: 0, max: 100 });
      setYRange2({ min: 0, max: 50 });
      setYRange3({ min: -1, max: 1 });
    };

    const lineData = Array.from({ length: 50 }, (_, i) => ({
      x: i * 2,
      y: 50 + Math.sin(i / 5) * 30,
    }));

    const barData = Array.from({ length: 20 }, (_, i) => ({
      x: [i * 5 - 1.5, i * 5 + 1.5] as [number, number],
      y: 15 + Math.random() * 30,
    }));

    const areaData = Array.from({ length: 100 }, (_, i) => ({
      x: i,
      y: [0, Math.sin(i / 10) * 0.8] as [number, number],
    }));

    return (
      <div style={{ padding: "20px" }}>
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <h3 style={{ margin: 0 }}>Three Charts - X-Axis Synchronized</h3>
          <button
            onClick={resetZoom}
            style={{
              padding: "6px 12px",
              fontSize: "14px",
              cursor: "pointer",
              backgroundColor: "#f1f3f5",
              border: "1px solid #dee2e6",
              borderRadius: "4px",
            }}
          >
            Reset Zoom
          </button>
          <div style={{ fontSize: "14px", color: "#666" }}>
            X: [{xRange.min.toFixed(1)}, {xRange.max.toFixed(1)}]
          </div>
        </div>
        <p style={{ fontSize: "14px", color: "#666" }}>
          Three different chart types sharing the same X-axis. Each chart can
          have independent Y-axis zoom.
        </p>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}
        >
          {/* Line Chart */}
          <div>
            <div
              style={{
                fontSize: "13px",
                fontWeight: "500",
                marginBottom: "5px",
              }}
            >
              Line Chart - Y: [{yRange1.min.toFixed(1)},{" "}
              {yRange1.max.toFixed(1)}]
            </div>
            <CanPlot
              style={{ width: "100%", height: "250px" }}
              configuration={{
                padding: {
                  bottom: 20,
                  left: 20,
                  right: 20,
                  top: 20,
                },
                scales: [
                  {
                    id: "x",
                    axis: { position: "bottom", size: 60 },
                    origin: "x",
                    min: xRange.min,
                    max: xRange.max,
                  },
                  {
                    id: "y1",
                    axis: { position: "left", size: 60 },
                    origin: "y",
                    min: yRange1.min,
                    max: yRange1.max,
                  },
                ],
              }}
            >
              <ChartAreaInteractions
                sync={{
                  key: "three-charts-x-sync",
                  xViaScaleId: "x",
                  yViaScaleId: "y1",
                }}
                onSpanSelect={handleSpanSelect(setYRange1)}
              >
                <Crosshair />
                <SelectBox
                  makeStyle={() => ({ backgroundColor: "#4c6ef544" })}
                />
              </ChartAreaInteractions>

              <XTicks scaleId="x" ticks={makeLinearTicks()} />
              <YTicks scaleId="y1" ticks={makeLinearTicks()} />

              <LinePlot
                data={lineData}
                xScaleId="x"
                yScaleId="y1"
                style={{
                  strokeStyle: "#4c6ef5",
                  lineWidth: 2,
                }}
              />
            </CanPlot>
          </div>

          {/* Bar Chart */}
          <div>
            <div
              style={{
                fontSize: "13px",
                fontWeight: "500",
                marginBottom: "5px",
              }}
            >
              Bar Chart - Y: [{yRange2.min.toFixed(1)}, {yRange2.max.toFixed(1)}
              ]
            </div>
            <CanPlot
              style={{ width: "100%", height: "250px" }}
              configuration={{
                padding: {
                  bottom: 20,
                  left: 20,
                  right: 20,
                  top: 20,
                },
                scales: [
                  {
                    id: "x",
                    axis: { position: "bottom", size: 60 },
                    origin: "x",
                    min: xRange.min,
                    max: xRange.max,
                  },
                  {
                    id: "y2",
                    axis: { position: "left", size: 60 },
                    origin: "y",
                    min: yRange2.min,
                    max: yRange2.max,
                  },
                ],
              }}
            >
              <ChartAreaInteractions
                sync={{
                  key: "three-charts-x-sync",
                  xViaScaleId: "x",
                  yViaScaleId: "y2",
                }}
                onSpanSelect={handleSpanSelect(setYRange2)}
              >
                <Crosshair />
                <SelectBox
                  makeStyle={() => ({ backgroundColor: "#f59f0044" })}
                />
              </ChartAreaInteractions>

              <XTicks scaleId="x" ticks={makeLinearTicks()} />
              <YTicks scaleId="y2" ticks={makeLinearTicks()} />

              <BarPlot
                data={barData}
                xScaleId="x"
                yScaleId="y2"
                style={{
                  fillStyle: "#f59f00",
                  strokeStyle: "#d68500",
                  lineWidth: 1,
                }}
              />
            </CanPlot>
          </div>

          {/* Area Chart */}
          <div>
            <div
              style={{
                fontSize: "13px",
                fontWeight: "500",
                marginBottom: "5px",
              }}
            >
              Area Chart - Y: [{yRange3.min.toFixed(2)},{" "}
              {yRange3.max.toFixed(2)}]
            </div>
            <CanPlot
              style={{ width: "100%", height: "250px" }}
              configuration={{
                padding: {
                  bottom: 20,
                  left: 20,
                  right: 20,
                  top: 20,
                },
                scales: [
                  {
                    id: "x",
                    axis: { position: "bottom", size: 60 },
                    origin: "x",
                    min: xRange.min,
                    max: xRange.max,
                  },
                  {
                    id: "y3",
                    axis: { position: "left", size: 60 },
                    origin: "y",
                    min: yRange3.min,
                    max: yRange3.max,
                  },
                ],
              }}
            >
              <ChartAreaInteractions
                sync={{
                  key: "three-charts-x-sync",
                  xViaScaleId: "x",
                  yViaScaleId: "y3",
                }}
                onSpanSelect={handleSpanSelect(setYRange3)}
              >
                <Crosshair />
                <SelectBox
                  makeStyle={() => ({ backgroundColor: "#51cf6644" })}
                />
              </ChartAreaInteractions>

              <XTicks scaleId="x" ticks={makeLinearTicks()} />
              <YTicks scaleId="y3" ticks={makeLinearTicks()} />

              <AreaPlot
                data={areaData}
                xScaleId="x"
                yScaleId="y3"
                style={{
                  fillStyle: "#51cf6666",
                  strokeStyle: "#51cf66",
                  lineWidth: 2,
                }}
              />
            </CanPlot>
          </div>
        </div>
      </div>
    );
  },
};

// Side-by-side comparison with common zoom
export const SideBySideComparison: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [xRange, setXRange] = useState({ min: 0, max: 100 });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [yRange, setYRange] = useState({ min: 0, max: 100 });

    const handleSpanSelect = (event: SpanSelectEvent) => {
      if (!event.completed) return;

      if (event.mode === "x" || event.mode === "box") {
        const xScale = event.x.scaled[0];
        if (xScale) {
          setXRange({
            min: Math.min(xScale.from, xScale.to),
            max: Math.max(xScale.from, xScale.to),
          });
        }
      }

      if (event.mode === "y" || event.mode === "box") {
        const yScale = event.y.scaled[0];
        if (yScale) {
          setYRange({
            min: Math.min(yScale.from, yScale.to),
            max: Math.max(yScale.from, yScale.to),
          });
        }
      }
    };

    const resetZoom = () => {
      setXRange({ min: 0, max: 100 });
      setYRange({ min: 0, max: 100 });
    };

    const scales: PlotScaleConfig[] = [
      {
        id: "x",
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
        axis: {
          position: "left",
          size: 60,
        },
        origin: "y",
        min: yRange.min,
        max: yRange.max,
      },
    ];

    const dataA = Array.from({ length: 50 }, (_, i) => ({
      x: i * 2,
      y: 50 + Math.sin(i / 5) * 25 + Math.random() * 10,
    }));

    const dataB = Array.from({ length: 50 }, (_, i) => ({
      x: i * 2,
      y: 50 + Math.sin(i / 5) * 25 + 10 + Math.random() * 10,
    }));

    return (
      <div style={{ padding: "20px" }}>
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <h3 style={{ margin: 0 }}>Side-by-Side Comparison</h3>
          <button
            onClick={resetZoom}
            style={{
              padding: "6px 12px",
              fontSize: "14px",
              cursor: "pointer",
              backgroundColor: "#f1f3f5",
              border: "1px solid #dee2e6",
              borderRadius: "4px",
            }}
          >
            Reset Zoom
          </button>
          <div style={{ fontSize: "14px", color: "#666" }}>
            X: [{xRange.min.toFixed(1)}, {xRange.max.toFixed(1)}], Y: [
            {yRange.min.toFixed(1)}, {yRange.max.toFixed(1)}]
          </div>
        </div>
        <p style={{ fontSize: "14px", color: "#666" }}>
          Compare two datasets side-by-side with synchronized zoom and
          crosshair.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          {/* Dataset A */}
          <div>
            <div
              style={{
                fontSize: "13px",
                fontWeight: "500",
                marginBottom: "5px",
                color: "#4c6ef5",
              }}
            >
              Dataset A
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
              <ChartAreaInteractions
                sync={{
                  key: "side-by-side",
                  xViaScaleId: "x",
                  yViaScaleId: "y",
                }}
                onSpanSelect={handleSpanSelect}
              >
                <Crosshair />
                <SelectBox
                  makeStyle={() => ({ backgroundColor: "#4c6ef544" })}
                />
              </ChartAreaInteractions>

              <XTicks scaleId="x" ticks={makeLinearTicks()} />
              <YTicks scaleId="y" ticks={makeLinearTicks()} />

              <LinePlot
                data={dataA}
                xScaleId="x"
                yScaleId="y"
                style={{
                  strokeStyle: "#4c6ef5",
                  lineWidth: 2,
                }}
              />
            </CanPlot>
          </div>

          {/* Dataset B */}
          <div>
            <div
              style={{
                fontSize: "13px",
                fontWeight: "500",
                marginBottom: "5px",
                color: "#f76707",
              }}
            >
              Dataset B
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
              <ChartAreaInteractions
                sync={{
                  key: "side-by-side",
                  xViaScaleId: "x",
                  yViaScaleId: "y",
                }}
                onSpanSelect={handleSpanSelect}
              >
                <Crosshair />
                <SelectBox
                  makeStyle={() => ({ backgroundColor: "#f7670744" })}
                />
              </ChartAreaInteractions>

              <XTicks scaleId="x" ticks={makeLinearTicks()} />
              <YTicks scaleId="y" ticks={makeLinearTicks()} />

              <LinePlot
                data={dataB}
                xScaleId="x"
                yScaleId="y"
                style={{
                  strokeStyle: "#f76707",
                  lineWidth: 2,
                }}
              />
            </CanPlot>
          </div>
        </div>
      </div>
    );
  },
};

// Time series with X-axis sync
export const TimeSeriesXAxisSync: Story = {
  render: () => {
    const refPoint = Date.parse("2025-12-01T00:00:00Z");
    const dayMs = 1000 * 60 * 60 * 24;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [xRange, setXRange] = useState({
      min: refPoint - dayMs * 30,
      max: refPoint,
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [yRange1, setYRange1] = useState({ min: 0, max: 100 });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [yRange2, setYRange2] = useState({ min: 0, max: 1000 });

    const handleSpanSelect1 = (event: SpanSelectEvent) => {
      if (!event.completed) return;

      if (event.mode === "x" || event.mode === "box") {
        const xScale = event.x.scaled[0];
        if (xScale) {
          setXRange({
            min: Math.min(xScale.from, xScale.to),
            max: Math.max(xScale.from, xScale.to),
          });
        }
      }

      if (event.mode === "y" || event.mode === "box") {
        const yScale = event.y.scaled[0];
        if (yScale) {
          setYRange1({
            min: Math.min(yScale.from, yScale.to),
            max: Math.max(yScale.from, yScale.to),
          });
        }
      }
    };

    const handleSpanSelect2 = (event: SpanSelectEvent) => {
      if (!event.completed) return;

      if (event.mode === "x" || event.mode === "box") {
        const xScale = event.x.scaled[0];
        if (xScale) {
          setXRange({
            min: Math.min(xScale.from, xScale.to),
            max: Math.max(xScale.from, xScale.to),
          });
        }
      }

      if (event.mode === "y" || event.mode === "box") {
        const yScale = event.y.scaled[0];
        if (yScale) {
          setYRange2({
            min: Math.min(yScale.from, yScale.to),
            max: Math.max(yScale.from, yScale.to),
          });
        }
      }
    };

    const resetZoom = () => {
      setXRange({ min: refPoint - dayMs * 30, max: refPoint });
      setYRange1({ min: 0, max: 100 });
      setYRange2({ min: 0, max: 1000 });
    };

    const tempData = Array.from({ length: 100 }, (_, i) => ({
      x: refPoint - dayMs * 30 + (i * dayMs * 30) / 100,
      y: 50 + Math.sin(i / 10) * 20 + Math.random() * 10,
    }));

    const salesData = Array.from({ length: 100 }, (_, i) => ({
      x: refPoint - dayMs * 30 + (i * dayMs * 30) / 100,
      y: [0, 500 + Math.cos(i / 15) * 200 + Math.random() * 100] as [
        number,
        number
      ],
    }));

    return (
      <div style={{ padding: "20px" }}>
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <h3 style={{ margin: 0 }}>Time Series - X-Axis Synchronized</h3>
          <button
            onClick={resetZoom}
            style={{
              padding: "6px 12px",
              fontSize: "14px",
              cursor: "pointer",
              backgroundColor: "#f1f3f5",
              border: "1px solid #dee2e6",
              borderRadius: "4px",
            }}
          >
            Reset Zoom
          </button>
        </div>
        <p style={{ fontSize: "14px", color: "#666" }}>
          Time series data with synchronized time axis. Temperature and sales
          metrics can be zoomed independently on Y-axis.
        </p>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}
        >
          {/* Temperature Chart */}
          <div>
            <div
              style={{
                fontSize: "13px",
                fontWeight: "500",
                marginBottom: "5px",
              }}
            >
              Temperature (°C)
            </div>
            <CanPlot
              style={{ width: "100%", height: "300px" }}
              configuration={{
                padding: {
                  bottom: 20,
                  left: 20,
                  right: 20,
                  top: 20,
                },
                scales: [
                  {
                    id: "time",
                    axis: { position: "bottom", size: 80 },
                    origin: "x",
                    min: xRange.min,
                    max: xRange.max,
                  },
                  {
                    id: "temp",
                    axis: { position: "left", size: 60 },
                    origin: "y",
                    min: yRange1.min,
                    max: yRange1.max,
                  },
                ],
              }}
            >
              <ChartAreaInteractions
                sync={{
                  key: "timeseries-x-sync",
                  xViaScaleId: "time",
                  yViaScaleId: "temp",
                }}
                onSpanSelect={handleSpanSelect1}
              >
                <Crosshair />
                <SelectBox
                  makeStyle={() => ({ backgroundColor: "#ff6b6b44" })}
                />
              </ChartAreaInteractions>

              <XTicks scaleId="time" ticks={makeTimeTicks()} />
              <YTicks scaleId="temp" ticks={makeLinearTicks()} />

              <LinePlot
                data={tempData}
                xScaleId="time"
                yScaleId="temp"
                style={{
                  strokeStyle: "#ff6b6b",
                  lineWidth: 2,
                }}
              />
            </CanPlot>
          </div>

          {/* Sales Chart */}
          <div>
            <div
              style={{
                fontSize: "13px",
                fontWeight: "500",
                marginBottom: "5px",
              }}
            >
              Sales ($)
            </div>
            <CanPlot
              style={{ width: "100%", height: "300px" }}
              configuration={{
                padding: {
                  bottom: 20,
                  left: 20,
                  right: 20,
                  top: 20,
                },
                scales: [
                  {
                    id: "time",
                    axis: { position: "bottom", size: 80 },
                    origin: "x",
                    min: xRange.min,
                    max: xRange.max,
                  },
                  {
                    id: "sales",
                    axis: { position: "left", size: 60 },
                    origin: "y",
                    min: yRange2.min,
                    max: yRange2.max,
                  },
                ],
              }}
            >
              <ChartAreaInteractions
                sync={{
                  key: "timeseries-x-sync",
                  xViaScaleId: "time",
                  yViaScaleId: "sales",
                }}
                onSpanSelect={handleSpanSelect2}
              >
                <Crosshair />
                <SelectBox
                  makeStyle={() => ({ backgroundColor: "#51cf6644" })}
                />
              </ChartAreaInteractions>

              <XTicks scaleId="time" ticks={makeTimeTicks()} />
              <YTicks scaleId="sales" ticks={makeLinearTicks()} />

              <AreaPlot
                data={salesData}
                xScaleId="time"
                yScaleId="sales"
                style={{
                  fillStyle: "#51cf6666",
                  strokeStyle: "#51cf66",
                  lineWidth: 2,
                }}
              />
            </CanPlot>
          </div>
        </div>
      </div>
    );
  },
};

// Cross-scale sync via normalized-value bridge.
// Two plots share cursor movement even though their X scales have different
// ids and ranges. Each plot's sync config declares how to translate its local
// X value to/from a shared "wall-clock ms" reference space, so the receiver
// can reconstruct the cursor position on its own scale.
export const NormalizedBridgeSync: Story = {
  render: () => {
    // Shared reference: wall-clock ms. In this demo both plots use identity
    // linear translations, but the mechanism supports arbitrary (e.g. gap-aware)
    // transforms — the source uses xToNormalized, the receiver uses
    // xFromNormalized.
    const T0 = 1_700_000_000_000; // arbitrary epoch ms
    const HOUR = 3_600_000;

    // Plot A: local x scale is "opTime" in seconds (0..3600), representing an
    // hour of operation. Normalization: seconds -> wall-clock ms.
    const opTimeScale: PlotScaleConfig = {
      id: "opTime",
      axis: { position: "bottom", size: 40 },
      origin: "x",
      min: 0,
      max: 3600,
    };
    const yScaleA: PlotScaleConfig = {
      id: "yA",
      axis: { position: "left", size: 60 },
      origin: "y",
      min: 0,
      max: 100,
    };

    // Plot B: local x scale is "wallClock" in ms (T0..T0+HOUR).
    const wallClockScale: PlotScaleConfig = {
      id: "wallClock",
      axis: { position: "bottom", size: 40 },
      origin: "x",
      min: T0,
      max: T0 + HOUR,
    };
    const yScaleB: PlotScaleConfig = {
      id: "yB",
      axis: { position: "left", size: 60 },
      origin: "y",
      min: -50,
      max: 50,
    };

    const opTimeData = Array.from({ length: 120 }, (_, i) => ({
      x: i * 30, // seconds, 0..3570
      y: 50 + Math.sin(i / 8) * 30,
    }));
    const wallClockData = Array.from({ length: 120 }, (_, i) => ({
      x: T0 + i * 30_000, // ms, matches opTime seconds * 1000
      y: Math.cos(i / 6) * 40,
    }));

    return (
      <div style={{ padding: "20px" }}>
        <h3 style={{ margin: "0 0 8px 0" }}>
          Normalized-value cursor bridge (mismatched scales)
        </h3>
        <p style={{ fontSize: "14px", color: "#666" }}>
          Chart A's x axis is <code>opTime</code> (seconds, 0..3600). Chart B's
          x axis is <code>wallClock</code> (ms epoch). No shared scale id — the
          crosshair still syncs because each plot declares{" "}
          <code>xToNormalized</code>/<code>xFromNormalized</code> against a
          shared wall-clock-ms reference space.
        </p>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}
        >
          <CanPlot
            style={{ width: "100%", height: "250px" }}
            configuration={{
              padding: { top: 20, right: 20, bottom: 20, left: 20 },
              scales: [opTimeScale, yScaleA],
            }}
          >
            <ChartAreaInteractions
              sync={{
                key: "normalized-bridge-demo",
                xViaScaleId: "opTime",
                // opTime seconds -> wall-clock ms (shared reference)
                xToNormalized: (v) => T0 + v * 1000,
                // wall-clock ms -> opTime seconds
                xFromNormalized: (n) => (n - T0) / 1000,
              }}
            >
              <Crosshair />
            </ChartAreaInteractions>

            <XTicks scaleId="opTime" ticks={makeLinearTicks()} />
            <YTicks scaleId="yA" ticks={makeLinearTicks()} />

            <LinePlot
              data={opTimeData}
              xScaleId="opTime"
              yScaleId="yA"
              style={{ strokeStyle: "#4c6ef5", lineWidth: 2 }}
            />
          </CanPlot>

          <CanPlot
            style={{ width: "100%", height: "250px" }}
            configuration={{
              padding: { top: 20, right: 20, bottom: 20, left: 20 },
              scales: [wallClockScale, yScaleB],
            }}
          >
            <ChartAreaInteractions
              sync={{
                key: "normalized-bridge-demo",
                xViaScaleId: "wallClock",
                // wallClock ms -> shared reference (identity here)
                xToNormalized: (v) => v,
                xFromNormalized: (n) => n,
              }}
            >
              <Crosshair />
            </ChartAreaInteractions>

            <XTicks scaleId="wallClock" ticks={makeTimeTicks()} />
            <YTicks scaleId="yB" ticks={makeLinearTicks()} />

            <LinePlot
              data={wallClockData}
              xScaleId="wallClock"
              yScaleId="yB"
              style={{ strokeStyle: "#51cf66", lineWidth: 2 }}
            />
          </CanPlot>
        </div>
      </div>
    );
  },
};

// Same normalized-bridge mechanism, but with realistic partial-overlap
// viewports AND a discontinuity in the opTime <-> wallClock mapping.
//
// Machine operation ran twice with a 30-minute gap between runs:
//   opTime  [0, 1800) seconds -> wallClock [T0, T0+30min)
//   opTime  [1800, 3600] seconds -> wallClock [T0+60min, T0+90min]
//
// Plot A (opTime): viewport shows all 3600 op-seconds (continuous op axis).
// Plot B (wallClock): viewport shows [T0+15min, T0+75min] — 60 wall-minutes,
// spanning the tail of run #1, the entire off-gap, and the head of run #2.
//
// Effects to observe when hovering:
// - Move cursor in Plot A: crosshair in Plot B jumps across the wall-clock gap
//   at op-second 1800.
// - Move cursor in Plot B within the gap [T0+30min..T0+60min]: crosshair in
//   Plot A hides because xFromNormalized returns null (no opTime exists for
//   that wall-clock range).
export const NormalizedBridgeSyncPartialOverlapWithGap: Story = {
  render: () => {
    const T0 = 1_700_000_000_000; // arbitrary epoch ms
    const MIN = 60_000;
    const RUN1_END_OP_SEC = 1800; // 30 min of ops
    const RUN1_END_WALL_MS = T0 + 30 * MIN;
    const RUN2_START_WALL_MS = T0 + 60 * MIN; // gap of 30 min
    const RUN2_START_OP_SEC = 1800;

    // opTime seconds -> wall-clock ms, with a jump at 1800.
    const opTimeToWallClock = (opSec: number): number => {
      if (opSec < RUN1_END_OP_SEC) {
        return T0 + opSec * 1000;
      }
      return RUN2_START_WALL_MS + (opSec - RUN2_START_OP_SEC) * 1000;
    };

    // wall-clock ms -> opTime seconds, or null when inside the machine-off gap.
    const wallClockToOpTime = (wallMs: number): number | null => {
      if (wallMs >= T0 && wallMs < RUN1_END_WALL_MS) {
        return (wallMs - T0) / 1000;
      }
      if (wallMs >= RUN2_START_WALL_MS) {
        return RUN2_START_OP_SEC + (wallMs - RUN2_START_WALL_MS) / 1000;
      }
      return null;
    };

    // Plot A viewport: full opTime range (0..3600 seconds).
    const opTimeScale: PlotScaleConfig = {
      id: "opTime",
      axis: { position: "bottom", size: 40 },
      origin: "x",
      min: 0,
      max: 3600,
    };
    const yScaleA: PlotScaleConfig = {
      id: "yA",
      axis: { position: "left", size: 60 },
      origin: "y",
      min: 0,
      max: 100,
    };

    // Plot B viewport: [T0+15min, T0+75min] — partial overlap + gap.
    const wallClockScale: PlotScaleConfig = {
      id: "wallClock",
      axis: { position: "bottom", size: 40 },
      origin: "x",
      min: T0 + 15 * MIN,
      max: T0 + 75 * MIN,
    };
    const yScaleB: PlotScaleConfig = {
      id: "yB",
      axis: { position: "left", size: 60 },
      origin: "y",
      min: -50,
      max: 50,
    };

    // Op-time-indexed data (continuous, one sample every 30 op-seconds).
    const opTimeData = Array.from({ length: 121 }, (_, i) => ({
      x: i * 30,
      y: 50 + Math.sin(i / 8) * 30,
    }));

    // Wall-clock-indexed data: only during the two runs (no samples in gap).
    const wallClockData: { x: number; y: number }[] = [];
    for (let opSec = 0; opSec <= 3600; opSec += 30) {
      wallClockData.push({
        x: opTimeToWallClock(opSec),
        y: Math.cos(opSec / 240) * 40,
      });
    }

    return (
      <div style={{ padding: "20px" }}>
        <h3 style={{ margin: "0 0 8px 0" }}>
          Normalized-value cursor bridge — partial overlap + gap
        </h3>
        <p style={{ fontSize: "14px", color: "#666", maxWidth: "80ch" }}>
          Two runs of 30 minutes each with a 30-minute machine-off gap between
          them. Plot A shows continuous <code>opTime</code> [0..3600 s]; Plot B
          shows a <code>wallClock</code> window [T0+15 min..T0+75 min] covering
          the tail of run #1, the full gap, and the head of run #2. Hover Plot
          A around op-second 1800 to see the Plot B crosshair jump across the
          wall-clock gap. Hover Plot B within the gap to see Plot A hide the
          crosshair (<code>xFromNormalized</code> returns <code>null</code>).
        </p>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}
        >
          <CanPlot
            style={{ width: "100%", height: "250px" }}
            configuration={{
              padding: { top: 20, right: 20, bottom: 20, left: 20 },
              scales: [opTimeScale, yScaleA],
            }}
          >
            <ChartAreaInteractions
              sync={{
                key: "normalized-bridge-gap-demo",
                xViaScaleId: "opTime",
                // opTime -> shared wall-clock ms (with the gap encoded)
                xToNormalized: opTimeToWallClock,
                // wall-clock ms -> opTime, or null when inside the off-gap.
                // Returning null lets the receiver hide its crosshair when the
                // source cursor is over a wall-clock range that has no opTime.
                xFromNormalized: wallClockToOpTime,
              }}
            >
              <Crosshair />
            </ChartAreaInteractions>

            <XTicks scaleId="opTime" ticks={makeLinearTicks()} />
            <YTicks scaleId="yA" ticks={makeLinearTicks()} />

            <LinePlot
              data={opTimeData}
              xScaleId="opTime"
              yScaleId="yA"
              style={{ strokeStyle: "#4c6ef5", lineWidth: 2 }}
            />
          </CanPlot>

          <CanPlot
            style={{ width: "100%", height: "250px" }}
            configuration={{
              padding: { top: 20, right: 20, bottom: 20, left: 20 },
              scales: [wallClockScale, yScaleB],
            }}
          >
            <ChartAreaInteractions
              sync={{
                key: "normalized-bridge-gap-demo",
                xViaScaleId: "wallClock",
                // wall-clock ms IS the normalized reference space here.
                xToNormalized: (v) => v,
                xFromNormalized: (n) => n,
              }}
            >
              <Crosshair />
            </ChartAreaInteractions>

            <XTicks scaleId="wallClock" ticks={makeTimeTicks()} />
            <YTicks scaleId="yB" ticks={makeLinearTicks()} />

            <LinePlot
              data={wallClockData}
              xScaleId="wallClock"
              yScaleId="yB"
              style={{ strokeStyle: "#51cf66", lineWidth: 2 }}
            />
          </CanPlot>
        </div>
      </div>
    );
  },
};

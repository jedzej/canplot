import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { CanPlot } from "../lib/CanPlot";
import { LinePlot } from "../lib/plot/LinePlot";
import { BarPlot } from "../lib/plot/BarPlot";
import { AreaPlot } from "../lib/plot/AreaPlot";
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
      x: i * 5,
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

              <BarPlot
                data={barData}
                xScaleId="x"
                yScaleId="y2"
                xPositionOffset={0}
                barWidth={3}
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

import type { Meta, StoryObj } from "@storybook/react-vite";
import { CanPlot } from "../lib/CanPlot";
import { LinePlot } from "../lib/plot/LinePlot";
import { ScatterPlot } from "../lib/plot/ScatterPlot";
import { BarPlot } from "../lib/plot/BarPlot";
import { ChartAreaInteractions } from "../lib/interactions/ChartAreaInteractions";
import { TooltipsX } from "../lib/interactions/TooltipsX";
import type { PlotScaleConfig } from "../lib/types";
import { valToPos } from "../lib/helpers";

const meta: Meta<typeof CanPlot> = {
  component: CanPlot,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

// Basic line chart with tooltip
export const BasicLineTooltip: Story = {
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
        max: 10,
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

    const data = [
      { x: 1, y: 30 },
      { x: 2, y: 45 },
      { x: 3, y: 60 },
      { x: 4, y: 35 },
      { x: 5, y: 70 },
      { x: 6, y: 55 },
      { x: 7, y: 80 },
      { x: 8, y: 65 },
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
            data={data}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#4c6ef5",
              lineWidth: 2,
            }}
          />
          <ScatterPlot
            data={data}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "#4c6ef5",
              strokeStyle: "#364fc7",
              lineWidth: 2,
            }}
          />
          <ChartAreaInteractions>
            <TooltipsX
              xScaleId="x"
              data={[
                {
                  seriesId: "series1",
                  yScaleId: "y",
                  points: data,
                },
              ]}
              renderTooltip={(state) => {
                if (!state || state.points[0].y === null) return null;
                const pos = valToPos(state.frame, state.x, "x", "css");

                return (
                  <>
                    <div
                      style={{
                        position: "absolute",
                        left: `${pos}px`,
                        top: state.frame.chartAreaCSS.y,
                        height: state.frame.chartAreaCSS.height,
                        width: "1px",
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        pointerEvents: "none",
                        zIndex: 999,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "10px",
                        transform: "translateX(-50%)",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        color: "white",
                        padding: "8px 12px",
                        borderRadius: "4px",
                        fontSize: "14px",
                        pointerEvents: "none",
                        whiteSpace: "nowrap",
                        zIndex: 1000,
                      }}
                    >
                      X: {state.x.toFixed(1)}, Y: {state.points[0].y?.toFixed(1)}
                    </div>
                  </>
                );
              }}
            />
          </ChartAreaInteractions>
        </CanPlot>
      </div>
    );
  },
};

// Multiple series with tooltip
export const MultiSeriesLinesTooltip: Story = {
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
        max: 10,
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

    const series1 = [
      { x: 1, y: 30 },
      { x: 2, y: 45 },
      { x: 3, y: 40 },
      { x: 4, y: 55 },
      { x: 5, y: 50 },
      { x: 6, y: 65 },
      { x: 7, y: 60 },
      { x: 8, y: 70 },
    ];

    const series2 = [
      { x: 1, y: 40 },
      { x: 2, y: 35 },
      { x: 3, y: 50 },
      { x: 4, y: 45 },
      { x: 5, y: 60 },
      { x: 6, y: 55 },
      { x: 7, y: 70 },
      { x: 8, y: 65 },
    ];

    const series3 = [
      { x: 1, y: 25 },
      { x: 2, y: 50 },
      { x: 3, y: 35 },
      { x: 4, y: 60 },
      { x: 5, y: 45 },
      { x: 6, y: 70 },
      { x: 7, y: 55 },
      { x: 8, y: 80 },
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
            data={series1}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#4c6ef5",
              lineWidth: 2,
            }}
          />
          <LinePlot
            data={series2}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#ff6b6b",
              lineWidth: 2,
            }}
          />
          <LinePlot
            data={series3}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#51cf66",
              lineWidth: 2,
            }}
          />
          <ChartAreaInteractions>
            <TooltipsX
              xScaleId="x"
              data={[
                {
                  seriesId: "Revenue",
                  yScaleId: "y",
                  points: series1,
                },
                {
                  seriesId: "Expenses",
                  yScaleId: "y",
                  points: series2,
                },
                {
                  seriesId: "Profit",
                  yScaleId: "y",
                  points: series3,
                },
              ]}
              renderTooltip={(state) => {
                if (!state) return null;
                
                const pos = valToPos(state.frame, state.x, "x", "css");

                return (
                  <>
                    <div
                      style={{
                        position: "absolute",
                        left: `${pos}px`,
                        top: state.frame.chartAreaCSS.y,
                        height: state.frame.chartAreaCSS.height,
                        width: "1px",
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        pointerEvents: "none",
                        zIndex: 999,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        transform: `translate(${pos}px, 0)`,
                        top: "10px",
                        left: "10px",
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                        color: "white",
                        padding: "12px 16px",
                        borderRadius: "8px",
                        fontSize: "13px",
                        pointerEvents: "none",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
                        zIndex: 1000,
                      }}
                    >
                      <div style={{ marginBottom: "8px", fontWeight: "bold" }}>
                        X: {state.x.toFixed(1)}
                      </div>
                      {state.points.map((point, idx) => {
                        const colors = ["#4c6ef5", "#ff6b6b", "#51cf66"];
                        return (
                          <div
                            key={point.seriesId}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginBottom:
                                idx < state.points.length - 1 ? "4px" : "0",
                            }}
                          >
                            <div
                              style={{
                                width: "12px",
                                height: "12px",
                                backgroundColor: colors[idx],
                                marginRight: "8px",
                                borderRadius: "2px",
                              }}
                            />
                            {point.seriesId}:{" "}
                            {point.y !== null ? point.y.toFixed(1) : "N/A"}
                          </div>
                        );
                      })}
                    </div>
                  </>
                );
              }}
            />
          </ChartAreaInteractions>
        </CanPlot>
      </div>
    );
  },
};

// Bar chart with tooltip
export const BarChartTooltip: Story = {
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
        max: 8,
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

    const data = [
      { x: 1, y: 45, label: "Jan" },
      { x: 2, y: 60, label: "Feb" },
      { x: 3, y: 55, label: "Mar" },
      { x: 4, y: 70, label: "Apr" },
      { x: 5, y: 65, label: "May" },
      { x: 6, y: 80, label: "Jun" },
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
          <BarPlot
            data={data}
            xScaleId="x"
            yScaleId="y"
            barWidth={0.6}
            xPositionOffset={0}
            radius={4}
            style={{
              fillStyle: "#ff6b6b",
              strokeStyle: "#f03e3e",
              lineWidth: 1,
            }}
          />
          <ChartAreaInteractions>
            <TooltipsX
              xScaleId="x"
              data={[
                {
                  seriesId: "sales",
                  yScaleId: "y",
                  points: data,
                },
              ]}
              renderTooltip={(state) => {
                if (!state || state.points[0].y === null) return null;

                const dataPoint = data.find((d) => d.x === state.x);
                const label = dataPoint?.label || "";
                const pos = valToPos(state.frame, state.x, "x", "css");

                return (
                  <>
                    <div
                      style={{
                        position: "absolute",
                        left: `${pos}px`,
                        top: state.frame.chartAreaCSS.y,
                        height: state.frame.chartAreaCSS.height,
                        width: "1px",
                        backgroundColor: "rgba(240, 62, 62, 0.5)",
                        pointerEvents: "none",
                        zIndex: 999,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "10px",
                        transform: "translateX(-50%)",
                        backgroundColor: "rgba(240, 62, 62, 0.95)",
                        color: "white",
                        padding: "12px 16px",
                        borderRadius: "6px",
                        fontSize: "14px",
                        pointerEvents: "none",
                        boxShadow: "0 3px 12px rgba(0,0,0,0.3)",
                        zIndex: 1000,
                      }}
                    >
                      <div style={{ fontWeight: "bold", marginBottom: "4px" }}>
                        {label}
                      </div>
                      <div>Sales: ${state.points[0].y?.toFixed(0)}K</div>
                    </div>
                  </>
                );
              }}
            />
          </ChartAreaInteractions>
        </CanPlot>
      </div>
    );
  },
};

// Time series with tooltip
export const TimeSeriesWithTooltip: Story = {
  render: () => {
    const now = new Date("2024-01-01T00:00:00Z");
    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        axis: {
          position: "bottom",
          size: 40,
        },
        origin: "x",
        min: now.getTime(),
        max: now.getTime() + 30 * 24 * 60 * 60 * 1000,
      },
      {
        id: "y",
        axis: {
          position: "left",
          size: 40,
        },
        origin: "y",
        min: 0,
        max: 500,
      },
    ];

    const data = Array.from({ length: 30 }, (_, i) => ({
      x: now.getTime() + i * 24 * 60 * 60 * 1000,
      y: 200 + Math.sin(i / 5) * 100 + Math.random() * 50,
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
          <LinePlot
            data={data}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#20c997",
              lineWidth: 2,
            }}
          />
          <ChartAreaInteractions>
            <TooltipsX
              xScaleId="x"
              data={[
                {
                  seriesId: "temperature",
                  yScaleId: "y",
                  points: data,
                },
              ]}
              renderTooltip={(state) => {
                if (!state || state.points[0].y === null) return null;

                const date = new Date(state.x);
                const formattedDate = date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  timeZone: "UTC",
                });
                const pos = valToPos(state.frame, state.x, "x", "css");

                return (
                  <>
                    <div
                      style={{
                        position: "absolute",
                        left: `${pos}px`,
                        top: state.frame.chartAreaCSS.y,
                        height: state.frame.chartAreaCSS.height,
                        width: "1px",
                        backgroundColor: "rgba(32, 201, 151, 0.5)",
                        pointerEvents: "none",
                        zIndex: 999,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "10px",
                        transform: "translateX(-50%)",
                        backgroundColor: "rgba(32, 201, 151, 0.95)",
                        color: "white",
                        padding: "10px 14px",
                        borderRadius: "6px",
                        fontSize: "13px",
                        pointerEvents: "none",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                        zIndex: 1000,
                      }}
                    >
                      <div style={{ fontWeight: "bold", marginBottom: "4px" }}>
                        {formattedDate}
                      </div>
                      <div>Value: {state.points[0].y?.toFixed(1)}</div>
                    </div>
                  </>
                );
              }}
            />
          </ChartAreaInteractions>
        </CanPlot>
      </div>
    );
  },
};

// Custom styled tooltip
export const CustomStyledTooltip: Story = {
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
        max: 12,
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

    const data = [
      { x: 1, y: 65 },
      { x: 2, y: 72 },
      { x: 3, y: 68 },
      { x: 4, y: 80 },
      { x: 5, y: 75 },
      { x: 6, y: 85 },
      { x: 7, y: 78 },
      { x: 8, y: 90 },
      { x: 9, y: 82 },
      { x: 10, y: 88 },
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
            data={data}
            xScaleId="x"
            yScaleId="y"
            style={{
              strokeStyle: "#7950f2",
              lineWidth: 3,
            }}
          />
          <ScatterPlot
            data={data}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "#7950f2",
              strokeStyle: "#5f3dc4",
              lineWidth: 2,
            }}
          />
          <ChartAreaInteractions>
            <TooltipsX
              xScaleId="x"
              data={[
                {
                  seriesId: "performance",
                  yScaleId: "y",
                  points: data,
                },
              ]}
              renderTooltip={(state) => {
                if (!state || state.points[0].y === null) return null;

                const value = state.points[0].y;
                const percentage = ((value || 0) / 100) * 100;
                const pos = valToPos(state.frame, state.x, "x", "css");

                return (
                  <>
                    <div
                      style={{
                        position: "absolute",
                        left: `${pos}px`,
                        top: state.frame.chartAreaCSS.y,
                        height: state.frame.chartAreaCSS.height,
                        width: "1px",
                        backgroundColor: "rgba(121, 80, 242, 0.5)",
                        pointerEvents: "none",
                        zIndex: 999,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "10px",
                        transform: "translateX(-50%)",
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        color: "white",
                        padding: "16px 20px",
                        borderRadius: "12px",
                        fontSize: "14px",
                        pointerEvents: "none",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                        border: "2px solid rgba(255,255,255,0.3)",
                        zIndex: 1000,
                      }}
                    >
                      <div
                        style={{
                          fontSize: "24px",
                          fontWeight: "bold",
                          marginBottom: "4px",
                        }}
                      >
                        {value?.toFixed(0)}
                      </div>
                      <div style={{ fontSize: "12px", opacity: 0.9 }}>
                        {percentage.toFixed(0)}% of target
                      </div>
                    </div>
                  </>
                );
              }}
            />
          </ChartAreaInteractions>
        </CanPlot>
      </div>
    );
  },
};

// Grouped bars with tooltip
export const GroupedBarsTooltip: Story = {
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
        max: 8,
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

    const series1 = [
      { x: 1, y: 30 },
      { x: 2, y: 45 },
      { x: 3, y: 60 },
      { x: 4, y: 35 },
      { x: 5, y: 70 },
      { x: 6, y: 55 },
    ];

    const series2 = [
      { x: 1, y: 40 },
      { x: 2, y: 35 },
      { x: 3, y: 50 },
      { x: 4, y: 45 },
      { x: 5, y: 60 },
      { x: 6, y: 65 },
    ];

    const series3 = [
      { x: 1, y: 25 },
      { x: 2, y: 55 },
      { x: 3, y: 40 },
      { x: 4, y: 50 },
      { x: 5, y: 45 },
      { x: 6, y: 70 },
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
          <BarPlot
            data={series1}
            xScaleId="x"
            yScaleId="y"
            barWidth={0.25}
            xPositionOffset={-1}
            style={{
              fillStyle: "#4c6ef5",
              strokeStyle: "#364fc7",
              lineWidth: 1,
            }}
          />
          <BarPlot
            data={series2}
            xScaleId="x"
            yScaleId="y"
            barWidth={0.25}
            xPositionOffset={0}
            style={{
              fillStyle: "#51cf66",
              strokeStyle: "#37b24d",
              lineWidth: 1,
            }}
          />
          <BarPlot
            data={series3}
            xScaleId="x"
            yScaleId="y"
            barWidth={0.25}
            xPositionOffset={1}
            style={{
              fillStyle: "#ff6b6b",
              strokeStyle: "#f03e3e",
              lineWidth: 1,
            }}
          />
          <ChartAreaInteractions>
            <TooltipsX
              xScaleId="x"
              data={[
                {
                  seriesId: "Q1",
                  yScaleId: "y",
                  points: series1,
                },
                {
                  seriesId: "Q2",
                  yScaleId: "y",
                  points: series2,
                },
                {
                  seriesId: "Q3",
                  yScaleId: "y",
                  points: series3,
                },
              ]}
              renderTooltip={(state) => {
                if (!state) return null;
                const pos = valToPos(state.frame, state.x, "x", "css");

                return (
                  <>
                    <div
                      style={{
                        position: "absolute",
                        left: `${pos}px`,
                        top: state.frame.chartAreaCSS.y,
                        height: state.frame.chartAreaCSS.height,
                        width: "1px",
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        pointerEvents: "none",
                        zIndex: 999,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "10px",
                        transform: "translateX(-50%)",
                        backgroundColor: "white",
                        color: "#333",
                        padding: "12px 16px",
                        borderRadius: "8px",
                        fontSize: "13px",
                        pointerEvents: "none",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        border: "1px solid #e0e0e0",
                        zIndex: 1000,
                      }}
                    >
                      <div
                        style={{
                          marginBottom: "8px",
                          fontWeight: "bold",
                          color: "#000",
                        }}
                      >
                        Month {state.x.toFixed(0)}
                      </div>
                      {state.points.map((point, idx) => {
                        const colors = ["#4c6ef5", "#51cf66", "#ff6b6b"];
                        if (point.y === null) return null;
                        return (
                          <div
                            key={point.seriesId}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              marginBottom:
                                idx < state.points.length - 1 ? "4px" : "0",
                              gap: "16px",
                            }}
                          >
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "12px",
                                  backgroundColor: colors[idx],
                                  marginRight: "8px",
                                  borderRadius: "2px",
                                }}
                              />
                              {point.seriesId}
                            </div>
                            <div style={{ fontWeight: "bold" }}>
                              {point.y.toFixed(0)}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                );
              }}
            />
          </ChartAreaInteractions>
        </CanPlot>
      </div>
    );
  },
};

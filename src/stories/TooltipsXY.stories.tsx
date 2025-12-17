import type { Meta, StoryObj } from "@storybook/react-vite";
import { CanPlot } from "../lib/CanPlot";
import { ScatterPlot } from "../lib/plot/ScatterPlot";
import { ChartAreaInteractions } from "../lib/interactions/ChartAreaInteractions";
import { TooltipsX as TooltipsXY } from "../lib/interactions/TooltipsXY";
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

// Helper function to generate random scatter points
const generateCloudPoints = (
  centerX: number,
  centerY: number,
  spreadX: number,
  spreadY: number,
  count: number,
  seed: number = 0
) => {
  const points: Array<{ x: number; y: number }> = [];
  for (let i = 0; i < count; i++) {
    // Simple seeded random for reproducibility
    const random1 = Math.sin(seed + i * 12.9898 + 78.233) * 43758.5453;
    const random2 = Math.sin(seed + i * 93.9898 + 12.345) * 43758.5453;
    const x1 = random1 - Math.floor(random1);
    const x2 = random2 - Math.floor(random2);

    // Box-Muller transform for normal distribution
    const z1 = Math.sqrt(-2 * Math.log(x1)) * Math.cos(2 * Math.PI * x2);
    const z2 = Math.sqrt(-2 * Math.log(x1)) * Math.sin(2 * Math.PI * x2);

    points.push({
      x: centerX + z1 * spreadX,
      y: centerY + z2 * spreadY,
    });
  }
  return points;
};

// Basic single cloud with tooltip
export const BasicCloudTooltip: Story = {
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

    const data = generateCloudPoints(50, 50, 15, 15, 100, 42);

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
          <ScatterPlot
            data={data}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "#4c6ef5",
              strokeStyle: "#364fc7",
              lineWidth: 1,
            }}
          />
          <ChartAreaInteractions>
            <TooltipsXY
              data={[
                {
                  seriesId: "cloud1",
                  xScaleId: "x",
                  yScaleId: "y",
                  points: data,
                },
              ]}
              renderTooltip={(state) => {
                const point = state?.points[0];
                if (!point || !state || point.x === null || point.y === null) {
                  return null;
                }

                const x = point.x;
                const y = point.y;
                const posX = valToPos(state.frame, x!, "x", "css");
                const posY = valToPos(state.frame, y!, "y", "css");

                if (posX === null || posY === null) return null;

                return (
                  <>
                    {/* Crosshair lines */}
                    <div
                      style={{
                        position: "absolute",
                        left: `${posX}px`,
                        top: state.frame.chartAreaCSS.y,
                        height: state.frame.chartAreaCSS.height,
                        width: "1px",
                        backgroundColor: "rgba(76, 110, 245, 0.3)",
                        pointerEvents: "none",
                        zIndex: 999,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: state.frame.chartAreaCSS.x,
                        top: `${posY}px`,
                        width: state.frame.chartAreaCSS.width,
                        height: "1px",
                        backgroundColor: "rgba(76, 110, 245, 0.3)",
                        pointerEvents: "none",
                        zIndex: 999,
                      }}
                    />
                    {/* Tooltip */}
                    <div
                      style={{
                        position: "absolute",
                        left: `${posX + 10}px`,
                        top: `${posY - 10}px`,
                        transform: "translateY(-100%)",
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                        color: "white",
                        padding: "8px 12px",
                        borderRadius: "4px",
                        fontSize: "13px",
                        pointerEvents: "none",
                        whiteSpace: "nowrap",
                        zIndex: 1000,
                      }}
                    >
                      <div>X: {x?.toFixed(2)}</div>
                      <div>Y: {y?.toFixed(2)}</div>
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

// Multiple clouds with different colors
export const MultipleCloudsSeparate: Story = {
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

    const cloud1 = generateCloudPoints(30, 70, 10, 10, 80, 100);
    const cloud2 = generateCloudPoints(70, 30, 12, 8, 80, 200);
    const cloud3 = generateCloudPoints(50, 50, 8, 12, 80, 300);

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
          <ScatterPlot
            data={cloud1}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "#ff6b6b",
              strokeStyle: "#f03e3e",
              lineWidth: 1,
            }}
          />
          <ScatterPlot
            data={cloud2}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "#51cf66",
              strokeStyle: "#37b24d",
              lineWidth: 1,
            }}
          />
          <ScatterPlot
            data={cloud3}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "#4c6ef5",
              strokeStyle: "#364fc7",
              lineWidth: 1,
            }}
          />
          <ChartAreaInteractions>
            <TooltipsXY
              data={[
                {
                  seriesId: "Group A",
                  xScaleId: "x",
                  yScaleId: "y",
                  points: cloud1,
                },
                {
                  seriesId: "Group B",
                  xScaleId: "x",
                  yScaleId: "y",
                  points: cloud2,
                },
                {
                  seriesId: "Group C",
                  xScaleId: "x",
                  yScaleId: "y",
                  points: cloud3,
                },
              ]}
              renderTooltip={(state) => {
                if (!state) return null;

                // Find the first non-null point
                const activePoint = state.points.find(
                  (p) => p.x !== null && p.y !== null
                );
                if (
                  !activePoint ||
                  activePoint.x === null ||
                  activePoint.y === null
                )
                  return null;

                const posX = valToPos(state.frame, activePoint.x, "x", "css");
                const posY = valToPos(state.frame, activePoint.y, "y", "css");

                if (posX === null || posY === null) return null;

                if (posX === null || posY === null) return null;

                const colors: Record<string, string> = {
                  "Group A": "#ff6b6b",
                  "Group B": "#51cf66",
                  "Group C": "#4c6ef5",
                };

                const activeSeriesId =
                  state.points.find((p) => p.x !== null && p.y !== null)
                    ?.seriesId || "";

                return (
                  <>
                    {/* Crosshair */}
                    <div
                      style={{
                        position: "absolute",
                        left: `${posX}px`,
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
                        left: state.frame.chartAreaCSS.x,
                        top: `${posY}px`,
                        width: state.frame.chartAreaCSS.width,
                        height: "1px",
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        pointerEvents: "none",
                        zIndex: 999,
                      }}
                    />
                    {/* Tooltip */}
                    <div
                      style={{
                        position: "absolute",
                        left: `${posX + 10}px`,
                        top: `${posY - 10}px`,
                        transform: "translateY(-100%)",
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
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "6px",
                        }}
                      >
                        <div
                          style={{
                            width: "12px",
                            height: "12px",
                            backgroundColor: colors[activeSeriesId],
                            marginRight: "8px",
                            borderRadius: "50%",
                          }}
                        />
                        <strong>{activeSeriesId}</strong>
                      </div>
                      <div>X: {activePoint.x?.toFixed(2)}</div>
                      <div>Y: {activePoint.y?.toFixed(2)}</div>
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

// Correlation scatter plot
export const CorrelationCloudTooltip: Story = {
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

    // Generate correlated data
    const data = Array.from({ length: 150 }, (_, i) => {
      const random1 = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
      const random2 = Math.sin(i * 93.9898 + 12.345) * 43758.5453;
      const x1 = random1 - Math.floor(random1);
      const x2 = random2 - Math.floor(random2);

      const z1 = Math.sqrt(-2 * Math.log(x1)) * Math.cos(2 * Math.PI * x2);
      const z2 = Math.sqrt(-2 * Math.log(x1)) * Math.sin(2 * Math.PI * x2);

      const x = 50 + z1 * 20;
      const y = x * 0.7 + z2 * 10; // Positive correlation

      return { x, y };
    });

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
          <ScatterPlot
            data={data}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "#20c997",
              strokeStyle: "#12b886",
              lineWidth: 1,
            }}
          />
          <ChartAreaInteractions>
            <TooltipsXY
              data={[
                {
                  seriesId: "correlation",
                  xScaleId: "x",
                  yScaleId: "y",
                  points: data,
                },
              ]}
              renderTooltip={(state) => {
                const point = state?.points[0];
                if (!point) return null;

                const posX = valToPos(state.frame, point.x!, "x", "css");
                const posY = valToPos(state.frame, point.y!, "y", "css");
                if (posX === null || posY === null) return null;
                return (
                  <>
                    {/* Highlight circle around point */}
                    <div
                      style={{
                        position: "absolute",
                        left: `${posX}px`,
                        top: `${posY}px`,
                        transform: "translate(-50%, -50%)",
                        width: "20px",
                        height: "20px",
                        border: "2px solid rgba(32, 201, 151, 0.8)",
                        borderRadius: "50%",
                        pointerEvents: "none",
                        zIndex: 999,
                      }}
                    />
                    {/* Tooltip */}
                    <div
                      style={{
                        position: "absolute",
                        left: `${posX + 15}px`,
                        top: `${posY - 15}px`,
                        transform: "translateY(-100%)",
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
                        Data Point
                      </div>
                      <div>Variable X: {point.x?.toFixed(2)}</div>
                      <div>Variable Y: {point.y?.toFixed(2)}</div>
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

// Dense cloud with styled tooltip
export const DenseCloudTooltip: Story = {
  render: () => {
    const scales: PlotScaleConfig[] = [
      {
        id: "x",
        axis: {
          position: "bottom",
          size: 40,
        },
        origin: "x",
        min: -50,
        max: 50,
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

    const data = generateCloudPoints(0, 0, 15, 15, 300, 500);

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
          <ScatterPlot
            data={data}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "rgba(139, 92, 246, 0.6)",
              strokeStyle: "rgba(109, 40, 217, 0.8)",
              lineWidth: 1,
            }}
          />
          <ChartAreaInteractions>
            <TooltipsXY
              data={[
                {
                  seriesId: "dense",
                  xScaleId: "x",
                  yScaleId: "y",
                  points: data,
                },
              ]}
              renderTooltip={(state) => {
                const point = state?.points[0];
                if (!point) return null;

                const x = point.x as number;
                const y = point.y as number;
                const posX = valToPos(state.frame, x, "x", "css");
                const posY = valToPos(state.frame, y, "y", "css");

                if (posX === null || posY === null) return null;

                // Calculate distance from origin
                const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

                return (
                  <>
                    {/* Highlight point */}
                    <div
                      style={{
                        position: "absolute",
                        left: `${posX}px`,
                        top: `${posY}px`,
                        transform: "translate(-50%, -50%)",
                        width: "12px",
                        height: "12px",
                        backgroundColor: "rgba(139, 92, 246, 1)",
                        border: "2px solid white",
                        borderRadius: "50%",
                        pointerEvents: "none",
                        boxShadow: "0 0 8px rgba(139, 92, 246, 0.8)",
                        zIndex: 999,
                      }}
                    />
                    {/* Tooltip */}
                    <div
                      style={{
                        position: "absolute",
                        left: `${posX + 12}px`,
                        top: `${posY - 12}px`,
                        transform: "translateY(-100%)",
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        color: "white",
                        padding: "12px 16px",
                        borderRadius: "10px",
                        fontSize: "13px",
                        pointerEvents: "none",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                        border: "2px solid rgba(255,255,255,0.3)",
                        zIndex: 1000,
                      }}
                    >
                      <div
                        style={{
                          fontWeight: "bold",
                          marginBottom: "6px",
                          fontSize: "14px",
                        }}
                      >
                        Point Details
                      </div>
                      <div>X: {x?.toFixed(2)}</div>
                      <div>Y: {y?.toFixed(2)}</div>
                      <div
                        style={{
                          marginTop: "4px",
                          fontSize: "12px",
                          opacity: 0.9,
                        }}
                      >
                        Distance: {distance.toFixed(2)}
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

// Overlapping clouds
export const OverlappingCloudsTooltip: Story = {
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

    const cloud1 = generateCloudPoints(40, 50, 15, 12, 100, 1000);
    const cloud2 = generateCloudPoints(60, 50, 15, 12, 100, 2000);

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
          <ScatterPlot
            data={cloud1}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "rgba(250, 176, 5, 0.6)",
              strokeStyle: "rgba(245, 158, 11, 0.9)",
              lineWidth: 1,
            }}
          />
          <ScatterPlot
            data={cloud2}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "rgba(236, 72, 153, 0.6)",
              strokeStyle: "rgba(219, 39, 119, 0.9)",
              lineWidth: 1,
            }}
          />
          <ChartAreaInteractions>
            <TooltipsXY
              data={[
                {
                  seriesId: "Population A",
                  xScaleId: "x",
                  yScaleId: "y",
                  points: cloud1,
                },
                {
                  seriesId: "Population B",
                  xScaleId: "x",
                  yScaleId: "y",
                  points: cloud2,
                },
              ]}
              renderTooltip={(state) => {
                if (!state) return null;

                const activePoint = state.points.find(
                  (p) => p.x !== null && p.y !== null
                );
                if (
                  !activePoint ||
                  activePoint.x === null ||
                  activePoint.y === null
                )
                  return null;

                const posX = valToPos(state.frame, activePoint.x, "x", "css");
                const posY = valToPos(state.frame, activePoint.y, "y", "css");

                if (posX === null || posY === null) return null;

                const colors: Record<string, { bg: string; border: string }> = {
                  "Population A": {
                    bg: "rgba(250, 176, 5, 0.95)",
                    border: "rgba(245, 158, 11, 1)",
                  },
                  "Population B": {
                    bg: "rgba(236, 72, 153, 0.95)",
                    border: "rgba(219, 39, 119, 1)",
                  },
                };

                const activeSeriesId =
                  state.points.find((p) => p.x !== null && p.y !== null)
                    ?.seriesId || "";
                const color = colors[activeSeriesId];

                return (
                  <>
                    {/* Highlight point */}
                    <div
                      style={{
                        position: "absolute",
                        left: `${posX}px`,
                        top: `${posY}px`,
                        transform: "translate(-50%, -50%)",
                        width: "16px",
                        height: "16px",
                        border: `3px solid ${color.border}`,
                        borderRadius: "50%",
                        pointerEvents: "none",
                        boxShadow: `0 0 12px ${color.bg}`,
                        zIndex: 999,
                      }}
                    />
                    {/* Tooltip */}
                    <div
                      style={{
                        position: "absolute",
                        left: `${posX + 15}px`,
                        top: `${posY - 15}px`,
                        transform: "translateY(-100%)",
                        backgroundColor: color.bg,
                        color: "white",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        fontSize: "13px",
                        pointerEvents: "none",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                        border: `2px solid ${color.border}`,
                        zIndex: 1000,
                      }}
                    >
                      <div style={{ fontWeight: "bold", marginBottom: "6px" }}>
                        {activeSeriesId}
                      </div>
                      <div>X: {activePoint.x.toFixed(2)}</div>
                      <div>Y: {activePoint.y.toFixed(2)}</div>
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

// Elliptical cloud
export const EllipticalCloudTooltip: Story = {
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

    // Generate elliptical cloud (wider in X than Y)
    const data = generateCloudPoints(50, 50, 25, 8, 200, 3000);

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
          <ScatterPlot
            data={data}
            xScaleId="x"
            yScaleId="y"
            style={{
              fillStyle: "rgba(245, 101, 101, 0.5)",
              strokeStyle: "rgba(240, 62, 62, 0.8)",
              lineWidth: 1,
            }}
          />
          <ChartAreaInteractions>
            <TooltipsXY
              data={[
                {
                  seriesId: "elliptical",
                  xScaleId: "x",
                  yScaleId: "y",
                  points: data,
                },
              ]}
              renderTooltip={(state) => {
                const point = state?.points[0];

                if (!point) return null;
                const posX = valToPos(state.frame, point.x!, "x", "css");
                const posY = valToPos(state.frame, point.y!, "y", "css");

                if (posX === null || posY === null) return null;

                return (
                  <>
                    {/* Crosshair */}
                    <div
                      style={{
                        position: "absolute",
                        left: `${posX}px`,
                        top: state.frame.chartAreaCSS.y,
                        height: state.frame.chartAreaCSS.height,
                        width: "1px",
                        backgroundColor: "rgba(240, 62, 62, 0.4)",
                        pointerEvents: "none",
                        zIndex: 999,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: state.frame.chartAreaCSS.x,
                        top: `${posY}px`,
                        width: state.frame.chartAreaCSS.width,
                        height: "1px",
                        backgroundColor: "rgba(240, 62, 62, 0.4)",
                        pointerEvents: "none",
                        zIndex: 999,
                      }}
                    />
                    {/* Tooltip */}
                    <div
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "10px",
                        transform: "translateX(-50%)",
                        backgroundColor: "rgba(240, 62, 62, 0.95)",
                        color: "white",
                        padding: "12px 16px",
                        borderRadius: "8px",
                        fontSize: "13px",
                        pointerEvents: "none",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                        zIndex: 1000,
                      }}
                    >
                      <div style={{ fontWeight: "bold", marginBottom: "6px" }}>
                        Selected Point
                      </div>
                      <div>X: {point.x?.toFixed(2)}</div>
                      <div>Y: {point.y?.toFixed(2)}</div>
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

import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { CanPlot } from "../lib/CanPlot";
import { LinePlot } from "../lib/plot/LinePlot";
import { ScatterPlot } from "../lib/plot/ScatterPlot";
import { BarPlot } from "../lib/plot/BarPlot";
import { ChartAreaInteractions } from "../lib/interactions/ChartAreaInteractions";
import { Crosshair } from "../lib/interactions/CrossHair";
import type { PlotScaleConfig } from "../lib/types";
import type { ContextMenuEvent } from "../lib/interactions/types";

const meta: Meta<typeof CanPlot> = {
  component: CanPlot,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

// Basic context menu
export const BasicContextMenu: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [menuPosition, setMenuPosition] = useState<{
      x: number;
      y: number;
      xValue: number;
      yValue: number;
    } | null>(null);

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

    const data = Array.from({ length: 20 }, (_, i) => ({
      x: i * 5,
      y: 50 + Math.sin(i / 2) * 30,
    }));

    const handleContextMenu = (event: ContextMenuEvent) => {
      // Get the mouse position relative to the viewport
      const rect = event.frame.ctx.canvas.getBoundingClientRect();
      setMenuPosition({
        x: (event.pointer?.cssX ?? 0) + rect.left,
        y: (event.pointer?.cssY ?? 0) + rect.top,
        xValue: event.pointer.scaled.x,
        yValue: event.pointer.scaled.y,
      });
    };

    const handleClick = () => {
      setMenuPosition(null);
    };

    return (
      <div style={{ padding: "20px" }}>
        <h3>Right-click on the chart to open context menu</h3>
        <div onClick={handleClick}>
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
                key: "context-menu-demo",
                xViaScaleId: "x",
                yViaScaleId: "y",
              }}
              onContextMenu={handleContextMenu}
            >
              <Crosshair />
            </ChartAreaInteractions>

            <LinePlot
              data={data}
              xScaleId="x"
              yScaleId="y"
              style={{
                strokeStyle: "#4c6ef5",
                lineWidth: 2,
              }}
            />
          </CanPlot>
        </div>

        {menuPosition && (
          <div
            style={{
              position: "fixed",
              left: menuPosition.x,
              top: menuPosition.y,
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              padding: "8px 0",
              zIndex: 1000,
              minWidth: "180px",
            }}
          >
            <div
              style={{
                padding: "8px 16px",
                cursor: "pointer",
                fontSize: "14px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f0f0f0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              onClick={() => {
                alert(
                  `X: ${menuPosition.xValue.toFixed(2)}, Y: ${menuPosition.yValue.toFixed(2)}`
                );
                setMenuPosition(null);
              }}
            >
              Show Coordinates
            </div>
            <div
              style={{
                padding: "8px 16px",
                cursor: "pointer",
                fontSize: "14px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f0f0f0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              onClick={() => {
                console.log("Add annotation at", menuPosition);
                setMenuPosition(null);
              }}
            >
              Add Annotation
            </div>
            <div
              style={{
                padding: "8px 16px",
                cursor: "pointer",
                fontSize: "14px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f0f0f0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              onClick={() => {
                console.log("Zoom to point", menuPosition);
                setMenuPosition(null);
              }}
            >
              Zoom Here
            </div>
            <div
              style={{
                height: "1px",
                backgroundColor: "#e0e0e0",
                margin: "4px 0",
              }}
            />
            <div
              style={{
                padding: "8px 16px",
                cursor: "pointer",
                fontSize: "14px",
                color: "#999",
              }}
            >
              X: {menuPosition.xValue.toFixed(2)}
            </div>
            <div
              style={{
                padding: "8px 16px",
                cursor: "pointer",
                fontSize: "14px",
                color: "#999",
              }}
            >
              Y: {menuPosition.yValue.toFixed(2)}
            </div>
          </div>
        )}
      </div>
    );
  },
};

// Context menu with data selection
export const ContextMenuWithDataSelection: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [menuPosition, setMenuPosition] = useState<{
      x: number;
      y: number;
      nearestPoint: { x: number; y: number } | null;
    } | null>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedPoints, setSelectedPoints] = useState<number[]>([]); 

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

    const data = Array.from({ length: 20 }, (_, i) => ({
      x: i * 5,
      y: 50 + Math.sin(i / 2) * 30,
    }));

    const handleContextMenu = (event: ContextMenuEvent) => {
      const xValue = event.pointer.scaled.x;
      const yValue = event.pointer.scaled.y;

      // Find nearest point
      let nearestPoint: { x: number; y: number } | null = null;
      let minDistance = Infinity;

      data.forEach((point) => {
        const distance = Math.sqrt(
          Math.pow(point.x - xValue, 2) + Math.pow(point.y - yValue, 2)
        );
        if (distance < minDistance) {
          minDistance = distance;
          nearestPoint = point;
        }
      });

      const rect = event.frame.ctx.canvas.getBoundingClientRect();
      setMenuPosition({
        x: (event.pointer.cssX ?? 0) + rect.left,
        y: (event.pointer.cssY ?? 0) + rect.top,
        nearestPoint: minDistance < 10 ? nearestPoint : null,
      });
    };

    const handleClick = () => {
      setMenuPosition(null);
    };

    return (
      <div style={{ padding: "20px" }}>
        <h3>Right-click near data points to select them</h3>
        <div style={{ marginBottom: "10px" }}>
          <strong>Selected Points:</strong>{" "}
          {selectedPoints.length === 0
            ? "None"
            : selectedPoints
                .map((idx) => `(${data[idx].x}, ${data[idx].y.toFixed(1)})`)
                .join(", ")}
        </div>
        <div onClick={handleClick}>
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
                key: "context-menu-selection",
                xViaScaleId: "x",
                yViaScaleId: "y",
              }}
              onContextMenu={handleContextMenu}
            >
              <Crosshair />
            </ChartAreaInteractions>

            <LinePlot
              data={data}
              xScaleId="x"
              yScaleId="y"
              style={{
                strokeStyle: "#51cf66",
                lineWidth: 2,
              }}
            />
            <ScatterPlot
              data={data}
              xScaleId="x"
              yScaleId="y"
              style={{
                fillStyle: "#51cf66",
                strokeStyle: "#2f9e44",
                lineWidth: 2,
              }}
            />
            {/* Highlight selected points */}
            <ScatterPlot
              data={selectedPoints.map((idx) => data[idx])}
              xScaleId="x"
              yScaleId="y"
              style={{
                fillStyle: "#ff6b6b",
                strokeStyle: "#c92a2a",
                lineWidth: 3,
              }}
              radius={10}
            />
          </CanPlot>
        </div>

        {menuPosition && (
          <div
            style={{
              position: "fixed",
              left: menuPosition.x,
              top: menuPosition.y,
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              padding: "8px 0",
              zIndex: 1000,
              minWidth: "200px",
            }}
          >
            {menuPosition.nearestPoint ? (
              <>
                <div
                  style={{
                    padding: "8px 16px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: "#666",
                  }}
                >
                  Point ({menuPosition.nearestPoint.x},{" "}
                  {menuPosition.nearestPoint.y.toFixed(1)})
                </div>
                <div
                  style={{
                    height: "1px",
                    backgroundColor: "#e0e0e0",
                    margin: "4px 0",
                  }}
                />
                <div
                  style={{
                    padding: "8px 16px",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#f0f0f0";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                  onClick={() => {
                    const idx = data.findIndex(
                      (p) =>
                        p.x === menuPosition.nearestPoint!.x &&
                        p.y === menuPosition.nearestPoint!.y
                    );
                    if (idx !== -1) {
                      setSelectedPoints((prev) =>
                        prev.includes(idx)
                          ? prev.filter((i) => i !== idx)
                          : [...prev, idx]
                      );
                    }
                    setMenuPosition(null);
                  }}
                >
                  {selectedPoints.some(
                    (idx) =>
                      data[idx].x === menuPosition.nearestPoint!.x &&
                      data[idx].y === menuPosition.nearestPoint!.y
                  )
                    ? "Deselect Point"
                    : "Select Point"}
                </div>
                <div
                  style={{
                    padding: "8px 16px",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#f0f0f0";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                  onClick={() => {
                    const idx = data.findIndex(
                      (p) =>
                        p.x === menuPosition.nearestPoint!.x &&
                        p.y === menuPosition.nearestPoint!.y
                    );
                    alert(`Point info:\nIndex: ${idx}\nX: ${data[idx].x}\nY: ${data[idx].y.toFixed(2)}`);
                    setMenuPosition(null);
                  }}
                >
                  Show Details
                </div>
              </>
            ) : (
              <div
                style={{
                  padding: "8px 16px",
                  fontSize: "14px",
                  color: "#999",
                }}
              >
                No point nearby
              </div>
            )}
            <div
              style={{
                height: "1px",
                backgroundColor: "#e0e0e0",
                margin: "4px 0",
              }}
            />
            <div
              style={{
                padding: "8px 16px",
                cursor: "pointer",
                fontSize: "14px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f0f0f0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              onClick={() => {
                setSelectedPoints([]);
                setMenuPosition(null);
              }}
            >
              Clear Selection
            </div>
          </div>
        )}
      </div>
    );
  },
};

// Context menu with actions on different chart types
export const ContextMenuMultiSeries: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [menuPosition, setMenuPosition] = useState<{
      x: number;
      y: number;
      xValue: number;
      yValue: number;
    } | null>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [annotations, setAnnotations] = useState<
      Array<{ x: number; y: number; label: string }>
    >([]); 

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

    const lineData = Array.from({ length: 20 }, (_, i) => ({
      x: i * 5,
      y: 50 + Math.sin(i / 2) * 25,
    }));

    const barData = Array.from({ length: 10 }, (_, i) => ({
      x: i * 10 + 5,
      y: 30 + Math.random() * 40,
    }));

    const handleContextMenu = (event: ContextMenuEvent) => {
      event.frame.ctx.canvas.addEventListener(
        "contextmenu",
        (e) => e.preventDefault(),
        { once: true }
      );

      const rect = event.frame.ctx.canvas.getBoundingClientRect();
      setMenuPosition({
        x: (event.pointer.cssX ?? 0) + rect.left,
        y: (event.pointer.cssY ?? 0) + rect.top,
        xValue: event.pointer.scaled.x,
        yValue: event.pointer.scaled.y,
      });
    };

    const handleClick = () => {
      setMenuPosition(null);
    };

    return (
      <div style={{ padding: "20px" }}>
        <h3>Right-click to add annotations or perform actions</h3>
        <div onClick={handleClick}>
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
            <ChartAreaInteractions
              sync={{
                key: "context-menu-multi",
                xViaScaleId: "x",
                yViaScaleId: "y",
              }}
              onContextMenu={handleContextMenu}
            >
              <Crosshair />
            </ChartAreaInteractions>

            <BarPlot
              data={barData}
              xScaleId="x"
              yScaleId="y"
              xPositionOffset={0}
              style={{
                fillStyle: "#ffd43b77",
                strokeStyle: "#fab005",
                lineWidth: 2,
              }}
              barWidth={8}
            />

            <LinePlot
              data={lineData}
              xScaleId="x"
              yScaleId="y"
              style={{
                strokeStyle: "#4c6ef5",
                lineWidth: 3,
              }}
            />

            {/* Render annotations */}
            {annotations.map((annotation, idx) => (
              <ScatterPlot
                key={idx}
                data={[{ x: annotation.x, y: annotation.y }]}
                xScaleId="x"
                yScaleId="y"
                style={{
                  fillStyle: "#ff6b6b",
                  strokeStyle: "#c92a2a",
                  lineWidth: 2,
                }}
                radius={8}
              />
            ))}
          </CanPlot>
        </div>

        {/* Display annotations list */}
        {annotations.length > 0 && (
          <div
            style={{
              marginTop: "20px",
              padding: "10px",
              backgroundColor: "#f8f9fa",
              borderRadius: "4px",
            }}
          >
            <strong>Annotations:</strong>
            <ul style={{ margin: "5px 0", paddingLeft: "20px" }}>
              {annotations.map((annotation, idx) => (
                <li key={idx}>
                  {annotation.label} at X: {annotation.x.toFixed(1)}, Y:{" "}
                  {annotation.y.toFixed(1)}
                  <button
                    style={{
                      marginLeft: "10px",
                      padding: "2px 8px",
                      fontSize: "12px",
                    }}
                    onClick={() => {
                      setAnnotations((prev) => prev.filter((_, i) => i !== idx));
                    }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {menuPosition && (
          <div
            style={{
              position: "fixed",
              left: menuPosition.x,
              top: menuPosition.y,
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              padding: "8px 0",
              zIndex: 1000,
              minWidth: "220px",
            }}
          >
            <div
              style={{
                padding: "8px 16px",
                cursor: "pointer",
                fontSize: "14px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f0f0f0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              onClick={() => {
                const label = prompt("Enter annotation label:", "Note");
                if (label) {
                  setAnnotations((prev) => [
                    ...prev,
                    {
                      x: menuPosition.xValue,
                      y: menuPosition.yValue,
                      label,
                    },
                  ]);
                }
                setMenuPosition(null);
              }}
            >
              📍 Add Annotation
            </div>
            <div
              style={{
                padding: "8px 16px",
                cursor: "pointer",
                fontSize: "14px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f0f0f0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              onClick={() => {
                console.log("Copy coordinates:", {
                  x: menuPosition.xValue,
                  y: menuPosition.yValue,
                });
                navigator.clipboard.writeText(
                  `X: ${menuPosition.xValue.toFixed(2)}, Y: ${menuPosition.yValue.toFixed(2)}`
                );
                setMenuPosition(null);
              }}
            >
              📋 Copy Coordinates
            </div>
            <div
              style={{
                padding: "8px 16px",
                cursor: "pointer",
                fontSize: "14px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f0f0f0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              onClick={() => {
                console.log("Export data at X =", menuPosition.xValue);
                setMenuPosition(null);
              }}
            >
              💾 Export Data at X
            </div>
            <div
              style={{
                height: "1px",
                backgroundColor: "#e0e0e0",
                margin: "4px 0",
              }}
            />
            <div
              style={{
                padding: "8px 16px",
                cursor: "pointer",
                fontSize: "14px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f0f0f0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              onClick={() => {
                setAnnotations([]);
                setMenuPosition(null);
              }}
            >
              🗑️ Clear All Annotations
            </div>
          </div>
        )}
      </div>
    );
  },
};

// Context menu with modifier keys
export const ContextMenuWithModifiers: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [menuPosition, setMenuPosition] = useState<{
      x: number;
      y: number;
      xValue: number;
      yValue: number;
      modifiers: {
        ctrl: boolean;
        alt: boolean;
        shift: boolean;
        meta: boolean;
      };
    } | null>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [actionLog, setActionLog] = useState<string[]>([]); 

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

    const data = Array.from({ length: 50 }, (_, i) => ({
      x: i * 2,
      y: 50 + Math.sin(i / 5) * 25 + Math.cos(i / 3) * 15,
    }));

    const handleContextMenu = (event: ContextMenuEvent) => {
      event.frame.ctx.canvas.addEventListener(
        "contextmenu",
        (e) => e.preventDefault(),
        { once: true }
      );

      const rect = event.frame.ctx.canvas.getBoundingClientRect();
      setMenuPosition({
        x: (event.pointer.cssX ?? 0) + rect.left,
        y: (event.pointer.cssY ?? 0) + rect.top,
        xValue: event.pointer.scaled.x,
        yValue: event.pointer.scaled.y,
        modifiers: {
          ctrl: event.keys.ctrlKey,
          alt: event.keys.altKey,
          shift: event.keys.shiftKey,
          meta: event.keys.metaKey,
        },
      });
    };

    const handleClick = () => {
      setMenuPosition(null);
    };

    const logAction = (action: string) => {
      setActionLog((prev) => [
        `${new Date().toLocaleTimeString()}: ${action}`,
        ...prev.slice(0, 9),
      ]);
    };

    return (
      <div style={{ padding: "20px" }}>
        <h3>Context menu with modifier key detection</h3>
        <p style={{ fontSize: "14px", color: "#666" }}>
          Try right-clicking while holding Ctrl, Alt, Shift, or Cmd/Meta keys
        </p>
        <div onClick={handleClick}>
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
                key: "context-menu-modifiers",
                xViaScaleId: "x",
                yViaScaleId: "y",
              }}
              onContextMenu={handleContextMenu}
            >
              <Crosshair />
            </ChartAreaInteractions>

            <LinePlot
              data={data}
              xScaleId="x"
              yScaleId="y"
              style={{
                strokeStyle: "#7950f2",
                lineWidth: 2,
              }}
            />
          </CanPlot>
        </div>

        {/* Action log */}
        {actionLog.length > 0 && (
          <div
            style={{
              marginTop: "20px",
              padding: "10px",
              backgroundColor: "#f8f9fa",
              borderRadius: "4px",
              fontFamily: "monospace",
              fontSize: "12px",
            }}
          >
            <strong>Action Log:</strong>
            {actionLog.map((log, idx) => (
              <div key={idx} style={{ padding: "2px 0" }}>
                {log}
              </div>
            ))}
          </div>
        )}

        {menuPosition && (
          <div
            style={{
              position: "fixed",
              left: menuPosition.x,
              top: menuPosition.y,
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              padding: "8px 0",
              zIndex: 1000,
              minWidth: "240px",
            }}
          >
            <div
              style={{
                padding: "8px 16px",
                fontSize: "12px",
                color: "#666",
                fontWeight: "bold",
              }}
            >
              Modifier Keys:{" "}
              {!menuPosition.modifiers.ctrl &&
              !menuPosition.modifiers.alt &&
              !menuPosition.modifiers.shift &&
              !menuPosition.modifiers.meta
                ? "None"
                : [
                    menuPosition.modifiers.ctrl && "Ctrl",
                    menuPosition.modifiers.alt && "Alt",
                    menuPosition.modifiers.shift && "Shift",
                    menuPosition.modifiers.meta && "Meta",
                  ]
                    .filter(Boolean)
                    .join(" + ")}
            </div>
            <div
              style={{
                height: "1px",
                backgroundColor: "#e0e0e0",
                margin: "4px 0",
              }}
            />
            <div
              style={{
                padding: "8px 16px",
                cursor: "pointer",
                fontSize: "14px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f0f0f0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              onClick={() => {
                const action = menuPosition.modifiers.ctrl
                  ? "Quick action (Ctrl)"
                  : "Standard action";
                logAction(action);
                setMenuPosition(null);
              }}
            >
              {menuPosition.modifiers.ctrl ? "⚡ Quick Action" : "Action"}
            </div>
            <div
              style={{
                padding: "8px 16px",
                cursor: "pointer",
                fontSize: "14px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f0f0f0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              onClick={() => {
                const action = menuPosition.modifiers.shift
                  ? "Add to selection (Shift)"
                  : "Select single point";
                logAction(
                  `${action} at (${menuPosition.xValue.toFixed(1)}, ${menuPosition.yValue.toFixed(1)})`
                );
                setMenuPosition(null);
              }}
            >
              {menuPosition.modifiers.shift ? "➕ Add to Selection" : "Select"}
            </div>
            <div
              style={{
                padding: "8px 16px",
                cursor: "pointer",
                fontSize: "14px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f0f0f0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              onClick={() => {
                const action = menuPosition.modifiers.alt
                  ? "Alternative zoom (Alt)"
                  : "Standard zoom";
                logAction(action);
                setMenuPosition(null);
              }}
            >
              {menuPosition.modifiers.alt ? "🔍 Alt Zoom" : "🔍 Zoom"}
            </div>
            <div
              style={{
                height: "1px",
                backgroundColor: "#e0e0e0",
                margin: "4px 0",
              }}
            />
            <div
              style={{
                padding: "8px 16px",
                fontSize: "12px",
                color: "#999",
              }}
            >
              Position: ({menuPosition.xValue.toFixed(2)},{" "}
              {menuPosition.yValue.toFixed(2)})
            </div>
          </div>
        )}
      </div>
    );
  },
};

// Styled context menu
export const StyledContextMenu: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [menuPosition, setMenuPosition] = useState<{
      x: number;
      y: number;
      xValue: number;
      yValue: number;
    } | null>(null);

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

    const data = Array.from({ length: 20 }, (_, i) => ({
      x: i * 5,
      y: 50 + Math.sin(i / 2) * 30,
    }));

    const handleContextMenu = (event: ContextMenuEvent) => {
      event.frame.ctx.canvas.addEventListener(
        "contextmenu",
        (e) => e.preventDefault(),
        { once: true }
      );

      const rect = event.frame.ctx.canvas.getBoundingClientRect();
      setMenuPosition({
        x: (event.pointer.cssX ?? 0) + rect.left,
        y: (event.pointer.cssY ?? 0) + rect.top,
        xValue: event.pointer.scaled.x,
        yValue: event.pointer.scaled.y,
      });
    };

    const handleClick = () => {
      setMenuPosition(null);
    };

    const MenuItem = ({
      children,
      onClick,
      icon,
      danger,
    }: {
      children: React.ReactNode;
      onClick: () => void;
      icon?: string;
      danger?: boolean;
    }) => {
      const [hover, setHover] = useState(false);

      return (
        <div
          style={{
            padding: "10px 16px",
            cursor: "pointer",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: hover
              ? danger
                ? "#fff5f5"
                : "#f0f7ff"
              : "transparent",
            color: danger ? "#c92a2a" : "#212529",
            transition: "all 0.15s ease",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={onClick}
        >
          {icon && <span style={{ fontSize: "16px" }}>{icon}</span>}
          <span>{children}</span>
        </div>
      );
    };

    return (
      <div style={{ padding: "20px" }}>
        <h3>Professional styled context menu</h3>
        <div onClick={handleClick}>
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
                key: "styled-context-menu",
                xViaScaleId: "x",
                yViaScaleId: "y",
              }}
              onContextMenu={handleContextMenu}
            >
              <Crosshair />
            </ChartAreaInteractions>

            <LinePlot
              data={data}
              xScaleId="x"
              yScaleId="y"
              style={{
                strokeStyle: "#15aabf",
                lineWidth: 3,
              }}
            />
          </CanPlot>
        </div>

        {menuPosition && (
          <div
            style={{
              position: "fixed",
              left: menuPosition.x,
              top: menuPosition.y,
              backgroundColor: "white",
              border: "1px solid #dee2e6",
              borderRadius: "8px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
              padding: "4px 0",
              zIndex: 1000,
              minWidth: "220px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "12px 16px 8px",
                fontSize: "12px",
                fontWeight: "600",
                color: "#868e96",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Chart Actions
            </div>
            <MenuItem
              icon="📊"
              onClick={() => {
                alert("View data feature");
                setMenuPosition(null);
              }}
            >
              View Data
            </MenuItem>
            <MenuItem
              icon="📍"
              onClick={() => {
                console.log("Add marker", menuPosition);
                setMenuPosition(null);
              }}
            >
              Add Marker
            </MenuItem>
            <MenuItem
              icon="🔍"
              onClick={() => {
                console.log("Zoom to point");
                setMenuPosition(null);
              }}
            >
              Zoom to Point
            </MenuItem>
            <div
              style={{
                height: "1px",
                backgroundColor: "#e9ecef",
                margin: "4px 8px",
              }}
            />
            <MenuItem
              icon="📋"
              onClick={() => {
                navigator.clipboard.writeText(
                  `${menuPosition.xValue.toFixed(2)}, ${menuPosition.yValue.toFixed(2)}`
                );
                setMenuPosition(null);
              }}
            >
              Copy Coordinates
            </MenuItem>
            <MenuItem
              icon="💾"
              onClick={() => {
                console.log("Export");
                setMenuPosition(null);
              }}
            >
              Export Chart
            </MenuItem>
            <div
              style={{
                height: "1px",
                backgroundColor: "#e9ecef",
                margin: "4px 8px",
              }}
            />
            <MenuItem
              icon="🗑️"
              danger
              onClick={() => {
                console.log("Reset view");
                setMenuPosition(null);
              }}
            >
              Reset View
            </MenuItem>
            <div
              style={{
                padding: "8px 16px",
                fontSize: "11px",
                color: "#adb5bd",
                borderTop: "1px solid #e9ecef",
                marginTop: "4px",
                backgroundColor: "#f8f9fa",
              }}
            >
              X: {menuPosition.xValue.toFixed(2)} | Y:{" "}
              {menuPosition.yValue.toFixed(2)}
            </div>
          </div>
        )}
      </div>
    );
  },
};

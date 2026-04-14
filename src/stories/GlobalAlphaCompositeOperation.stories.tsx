import type { Meta, StoryObj } from "@storybook/react-vite";
import { CanPlot } from "../lib/CanPlot";
import type { PlotScaleConfig } from "../lib/types";
import type React from "react";
import { useDrawEffect, useDrawEffectNoCache } from "../lib";
import { useEffect, useRef, useState } from "react";

const meta: Meta<typeof CanPlot> = {
  component: CanPlot,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const SCALES: PlotScaleConfig[] = [
  {
    id: "x",
    axis: null,
    origin: "x",
    min: 0,
    max: 100,
  },
  {
    id: "y",
    axis: null,
    origin: "y",
    min: 0,
    max: 100,
  },
];

const CONFIGURATION = {
  padding: { bottom: 20, left: 20, right: 20, top: 20 },
  scales: SCALES,
};

// ----- Filled circle component -----

const FilledCircle: React.FC<{
  cx: number;
  cy: number;
  radius: number;
  color: string;
  globalAlpha?: number;
  globalCompositeOperation?: GlobalCompositeOperation;
  layer?: number;
  drawCountRef?: React.RefObject<number>;
}> = ({
  cx,
  cy,
  radius,
  color,
  globalAlpha,
  globalCompositeOperation,
  layer = 100,
  drawCountRef,
}) => {
  useDrawEffect({
    layer,
    runner: ({ ctx, valToPos }) => {
      if (drawCountRef) drawCountRef.current++;
      const x = valToPos(cx, "x", "canvas");
      const y = valToPos(cy, "y", "canvas");
      if (x == null || y == null) return;

      const edgeX = valToPos(cx + radius, "x", "canvas");
      if (edgeX == null) return;
      const r = Math.abs(edgeX - x);

      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.restore();
    },
    globalAlpha,
    globalCompositeOperation,
    deps: [cx, cy, radius, color],
  });
  return null;
};

/**
 * Demonstrates `globalAlpha` on cached draw layers.
 *
 * Three overlapping circles are drawn with different alpha values.
 * Use the slider to adjust the global alpha applied to all three layers.
 */
export const GlobalAlpha: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [alpha, setAlpha] = useState(0.5);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const redCount = useRef(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const blueCount = useRef(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const greenCount = useRef(0);

    return (
      <div style={{ padding: 20 }}>
        <div style={{ marginBottom: 12, fontFamily: "monospace", fontSize: 14 }}>
          <label>
            globalAlpha: <strong>{alpha.toFixed(2)}</strong>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={alpha}
              onChange={(e) => setAlpha(Number(e.target.value))}
              style={{ marginLeft: 12, verticalAlign: "middle" }}
            />
          </label>
        </div>
        <div style={{ display: "flex", gap: 16, fontFamily: "monospace", fontSize: 13, marginBottom: 8 }}>
          <DrawCounter label="Red draws" countRef={redCount} color="#ef4444" />
          <DrawCounter label="Blue draws" countRef={blueCount} color="#3b82f6" />
          <DrawCounter label="Green draws" countRef={greenCount} color="#22c55e" />
        </div>
        <CanPlot
          style={{ width: "100%", height: 400 }}
          configuration={CONFIGURATION}
        >
          <FilledCircle cx={40} cy={55} radius={14} color="#ef4444" globalAlpha={alpha} layer={100} drawCountRef={redCount} />
          <FilledCircle cx={55} cy={55} radius={14} color="#3b82f6" globalAlpha={alpha} layer={101} drawCountRef={blueCount} />
          <FilledCircle cx={47.5} cy={40} radius={14} color="#22c55e" globalAlpha={alpha} layer={102} drawCountRef={greenCount} />
        </CanPlot>
      </div>
    );
  },
};

// ----- Composite operation demo -----

const COMPOSITE_OPERATIONS: GlobalCompositeOperation[] = [
  "source-over",
  "source-atop",
  "source-in",
  "source-out",
  "destination-over",
  "destination-atop",
  "destination-in",
  "destination-out",
  "lighter",
  "xor",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity",
];

/**
 * Demonstrates `globalCompositeOperation` on cached draw layers.
 *
 * A red circle is drawn first (source-over), then a blue circle is
 * composited on top using the selected operation. Change the dropdown
 * to see how each composite mode blends the two layers.
 */
export const GlobalCompositeOperation: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [operation, setOperation] = useState<GlobalCompositeOperation>("multiply");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const redCount = useRef(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const blueCount = useRef(0);

    return (
      <div style={{ padding: 20 }}>
        <div style={{ marginBottom: 12, fontFamily: "monospace", fontSize: 14 }}>
          <label>
            globalCompositeOperation:{" "}
            <select
              value={operation}
              onChange={(e) => setOperation(e.target.value as GlobalCompositeOperation)}
              style={{ fontSize: 14, padding: "4px 8px" }}
            >
              {COMPOSITE_OPERATIONS.map((op) => (
                <option key={op} value={op}>
                  {op}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div style={{ display: "flex", gap: 16, fontFamily: "monospace", fontSize: 13, marginBottom: 8 }}>
          <DrawCounter label="Red draws" countRef={redCount} color="#ef4444" />
          <DrawCounter label="Blue draws" countRef={blueCount} color="#3b82f6" />
        </div>
        <CanPlot
          style={{ width: "100%", height: 400 }}
          configuration={CONFIGURATION}
        >
          <FilledCircle cx={42} cy={50} radius={14} color="#ef4444" layer={100} drawCountRef={redCount} />
          <FilledCircle
            cx={58}
            cy={50}
            radius={14}
            color="#3b82f6"
            globalCompositeOperation={operation}
            layer={101}
            drawCountRef={blueCount}
          />
        </CanPlot>
      </div>
    );
  },
};

/**
 * Combines `globalAlpha` and `globalCompositeOperation` together.
 *
 * Three overlapping circles use a configurable composite mode and alpha.
 * This shows how both properties interact when applied to cached draw layers.
 */
export const AlphaAndCompositeOperation: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [alpha, setAlpha] = useState(0.7);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [operation, setOperation] = useState<GlobalCompositeOperation>("screen");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const redCount = useRef(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const blueCount = useRef(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const greenCount = useRef(0);

    return (
      <div style={{ padding: 20 }}>
        <div
          style={{
            marginBottom: 12,
            fontFamily: "monospace",
            fontSize: 14,
            display: "flex",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <label>
            globalAlpha: <strong>{alpha.toFixed(2)}</strong>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={alpha}
              onChange={(e) => setAlpha(Number(e.target.value))}
              style={{ marginLeft: 12, verticalAlign: "middle" }}
            />
          </label>
          <label>
            globalCompositeOperation:{" "}
            <select
              value={operation}
              onChange={(e) => setOperation(e.target.value as GlobalCompositeOperation)}
              style={{ fontSize: 14, padding: "4px 8px" }}
            >
              {COMPOSITE_OPERATIONS.map((op) => (
                <option key={op} value={op}>
                  {op}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div style={{ display: "flex", gap: 16, fontFamily: "monospace", fontSize: 13, marginBottom: 8 }}>
          <DrawCounter label="Red draws" countRef={redCount} color="#ef4444" />
          <DrawCounter label="Blue draws" countRef={blueCount} color="#3b82f6" />
          <DrawCounter label="Green draws" countRef={greenCount} color="#22c55e" />
        </div>
        <CanPlot
          style={{ width: "100%", height: 400 }}
          configuration={CONFIGURATION}
        >
          <FilledCircle cx={40} cy={55} radius={14} color="#ef4444" layer={100} drawCountRef={redCount} />
          <FilledCircle
            cx={55}
            cy={55}
            radius={14}
            color="#3b82f6"
            globalAlpha={alpha}
            globalCompositeOperation={operation}
            layer={101}
            drawCountRef={blueCount}
          />
          <FilledCircle
            cx={47.5}
            cy={40}
            radius={14}
            color="#22c55e"
            globalAlpha={alpha}
            globalCompositeOperation={operation}
            layer={102}
            drawCountRef={greenCount}
          />
        </CanPlot>
      </div>
    );
  },
};

// ----- Draw counter helper -----

const DrawCounter: React.FC<{
  label: string;
  countRef: React.RefObject<number>;
  color?: string;
}> = ({ label, countRef, color }) => {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setDisplay(countRef.current), 200);
    return () => clearInterval(id);
  }, [countRef]);
  return (
    <span style={{ color }}>
      {label}: <strong>{display}</strong>
    </span>
  );
};

// ----- Heavy grid drawn via useDrawEffect (cached) with globalAlpha -----

const CachedGridWithAlpha: React.FC<{
  globalAlpha: number;
  drawCountRef: React.RefObject<number>;
}> = ({ globalAlpha, drawCountRef }) => {
  useDrawEffect({
    layer: "BOTTOM",
    runner: ({ ctx, valToPos }) => {
      drawCountRef.current++;
      ctx.save();
      for (let xi = 0; xi <= 100; xi += 4) {
        for (let yi = 0; yi <= 100; yi += 4) {
          const x = valToPos(xi, "x", "canvas");
          const y = valToPos(yi, "y", "canvas");
          if (x == null || y == null) continue;
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fillStyle = `hsl(${(xi + yi) * 3}, 80%, 50%)`;
          ctx.fill();
        }
      }
      ctx.restore();
    },
    globalAlpha,
    deps: [],
  });
  return null;
};

// ----- Heavy grid drawn via useDrawEffectNoCache (uncached) with globalAlpha -----

const UncachedGridWithAlpha: React.FC<{
  globalAlpha: number;
  drawCountRef: React.RefObject<number>;
}> = ({ globalAlpha, drawCountRef }) => {
  useDrawEffectNoCache(
    "BOTTOM",
    ({ ctx, valToPos }) => {
      drawCountRef.current++;
      ctx.save();
      ctx.globalAlpha = globalAlpha;
      for (let xi = 0; xi <= 100; xi += 4) {
        for (let yi = 0; yi <= 100; yi += 4) {
          const x = valToPos(xi, "x", "canvas");
          const y = valToPos(yi, "y", "canvas");
          if (x == null || y == null) continue;
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fillStyle = `hsl(${(xi + yi) * 3}, 80%, 50%)`;
          ctx.fill();
        }
      }
      ctx.restore();
    },
    [globalAlpha],
  );
  return null;
};

// ----- Animated cursor to force redraws -----

const AnimatedCursor: React.FC = () => {
  const [xVal, setXVal] = useState(50);

  useEffect(() => {
    const id = setInterval(() => {
      setXVal(50 + Math.sin(Date.now() / 300) * 40);
    }, 16);
    return () => clearInterval(id);
  }, []);

  useDrawEffectNoCache(
    "TOP",
    ({ ctx, valToPos, clampYPosToChartArea }) => {
      const x = valToPos(xVal, "x", "canvas");
      if (x == null) return;
      const y0 = clampYPosToChartArea(-Infinity, "canvas");
      const y1 = clampYPosToChartArea(Infinity, "canvas");
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, y0 as number);
      ctx.lineTo(x, y1 as number);
      ctx.strokeStyle = "red";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    },
    [xVal],
  );
  return null;
};

/**
 * Shows that `globalAlpha` on a cached layer does **not** trigger a re-draw
 * of the layer's runner — only the bitmap compositing step changes.
 *
 * - **Left (uncached)**: the heavy grid re-executes its drawing function on every
 *   frame *and* whenever `globalAlpha` changes. Watch the draw counter climb fast.
 * - **Right (cached)**: the heavy grid draws **once** into an offscreen canvas.
 *   Changing the alpha slider only changes how the cached bitmap is composited —
 *   the draw counter stays at **1** (or increases only on resize).
 *
 * An animated cursor forces continuous redraws so you can see the difference in
 * draw counts clearly.
 */
export const GlobalAlphaRedrawBehavior: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [alpha, setAlpha] = useState(0.6);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const uncachedCount = useRef(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const cachedCount = useRef(0);

    return (
      <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ fontFamily: "monospace", fontSize: 14 }}>
          <label>
            globalAlpha: <strong>{alpha.toFixed(2)}</strong>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={alpha}
              onChange={(e) => setAlpha(Number(e.target.value))}
              style={{ marginLeft: 12, verticalAlign: "middle" }}
            />
          </label>
        </div>
        <div
          style={{
            display: "flex",
            gap: 32,
            fontFamily: "monospace",
            fontSize: 14,
          }}
        >
          <DrawCounter label="Uncached runner calls" countRef={uncachedCount} color="#dc2626" />
          <DrawCounter label="Cached runner calls" countRef={cachedCount} color="#16a34a" />
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          <div style={{ flex: 1 }}>
            <h4 style={{ margin: "0 0 8px" }}>
              useDrawEffectNoCache (redraws every frame)
            </h4>
            <CanPlot
              style={{ width: "100%", height: 350 }}
              configuration={CONFIGURATION}
            >
              <UncachedGridWithAlpha globalAlpha={alpha} drawCountRef={uncachedCount} />
              <AnimatedCursor />
            </CanPlot>
          </div>
          <div style={{ flex: 1 }}>
            <h4 style={{ margin: "0 0 8px" }}>
              useDrawEffect + globalAlpha (cached, no redraw)
            </h4>
            <CanPlot
              style={{ width: "100%", height: 350 }}
              configuration={CONFIGURATION}
            >
              <CachedGridWithAlpha globalAlpha={alpha} drawCountRef={cachedCount} />
              <AnimatedCursor />
            </CanPlot>
          </div>
        </div>
      </div>
    );
  },
};

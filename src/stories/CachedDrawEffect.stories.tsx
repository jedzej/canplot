import type { Meta, StoryObj } from "@storybook/react-vite";
import { CanPlot } from "../lib/CanPlot";
import type { PlotScaleConfig } from "../lib/types";
import type React from "react";
import { useDrawEffect, useCachedDrawEffect } from "../lib";
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
    axis: { position: "bottom", size: 40 },
    origin: "x",
    min: 0,
    max: 100,
  },
  {
    id: "y",
    axis: { position: "left", size: 40 },
    origin: "y",
    min: 0,
    max: 100,
  },
];

const CONFIGURATION = {
  padding: { bottom: 20, left: 20, right: 20, top: 20 },
  scales: SCALES,
};

const SINE_DATA = Array.from({ length: 200 }, (_, i) => ({
  x: (i / 199) * 100,
  y: 50 + Math.sin(i / 10) * 30,
}));

// ----- Draw counter components -----

const DrawCounter: React.FC<{ label: string; countRef: React.RefObject<number> }> = ({
  label,
  countRef,
}) => {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setDisplay(countRef.current), 200);
    return () => clearInterval(id);
  }, [countRef]);
  return (
    <span>
      {label}: <strong>{display}</strong>
    </span>
  );
};

// ----- Heavy static layer drawn with useDrawEffect (re-runs every propagation) -----

const HeavyLayerUncached: React.FC<{ drawCountRef: React.RefObject<number> }> = ({
  drawCountRef,
}) => {
  useDrawEffect(
    "BOTTOM",
    ({ ctx, valToPos }) => {
      drawCountRef.current++;
      ctx.save();
      ctx.globalAlpha = 0.15;
      // Draw a grid of circles — intentionally heavy
      for (let xi = 0; xi <= 100; xi += 2) {
        for (let yi = 0; yi <= 100; yi += 2) {
          const x = valToPos(xi, "x", "canvas");
          const y = valToPos(yi, "y", "canvas");
          if (x == null || y == null) continue;
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `hsl(${(xi + yi) * 2}, 80%, 50%)`;
          ctx.fill();
        }
      }
      ctx.restore();
    },
    [] // static deps — but still redraws on every propagation
  );
  return null;
};

// ----- Same heavy layer, cached -----

const HeavyLayerCached: React.FC<{ drawCountRef: React.RefObject<number> }> = ({
  drawCountRef,
}) => {
  useCachedDrawEffect(
    "BOTTOM",
    ({ ctx, valToPos }) => {
      drawCountRef.current++;
      ctx.save();
      ctx.globalAlpha = 0.15;
      for (let xi = 0; xi <= 100; xi += 2) {
        for (let yi = 0; yi <= 100; yi += 2) {
          const x = valToPos(xi, "x", "canvas");
          const y = valToPos(yi, "y", "canvas");
          if (x == null || y == null) continue;
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `hsl(${(xi + yi) * 2}, 80%, 50%)`;
          ctx.fill();
        }
      }
      ctx.restore();
    },
    [] // static deps — runner called only once, then bitmap is reused
  );
  return null;
};

// ----- Rapidly updating cursor line -----

const AnimatedCursor: React.FC<{speed: number}> = ({ speed }) => {
  const [xVal, setXVal] = useState(50);

  useEffect(() => {
    const id = setInterval(() => {
      setXVal(50 + Math.sin(Date.now() / speed) * 40);
    }, 16);
    return () => clearInterval(id);
  }, []);

  useDrawEffect(
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
    [xVal]
  );
  return null;
};

// ----- Static line (for cached demo) -----

const StaticLine: React.FC = () => {
  useCachedDrawEffect(
    "MIDDLE",
    ({ ctx, valToPos }) => {
      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = "#2563eb";
      ctx.lineWidth = 2;
      for (const pt of SINE_DATA) {
        const x = valToPos(pt.x, "x", "canvas");
        const y = valToPos(pt.y, "y", "canvas");
        if (x == null || y == null) continue;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();
    },
    []
  );
  return null;
};

/**
 * Compares cached vs uncached draw effects side-by-side.
 *
 * Both charts have an identical heavy background layer (a grid of ~2500 circles)
 * and a rapidly animating cursor line that triggers ~60 redraws/sec.
 *
 * - **Left (uncached)**: the heavy layer re-executes on every frame.
 * - **Right (cached)**: the heavy layer draws once; subsequent frames copy the bitmap.
 *
 * Watch the draw counters to see the difference.
 */
export const CachedVsUncached: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const uncachedCount = useRef(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const cachedCount = useRef(0);

    return (
      <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", gap: 32, fontFamily: "monospace", fontSize: 14 }}>
          <DrawCounter label="Uncached draws" countRef={uncachedCount} />
          <DrawCounter label="Cached draws" countRef={cachedCount} />
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          <div style={{ flex: 1 }}>
            <h4 style={{ margin: "0 0 8px" }}>useDrawEffect (uncached)</h4>
            <CanPlot
              style={{ width: "100%", height: 350 }}
              configuration={CONFIGURATION}
            >
              <HeavyLayerUncached drawCountRef={uncachedCount} />
              <AnimatedCursor speed={200} />
            </CanPlot>
          </div>
          <div style={{ flex: 1 }}>
            <h4 style={{ margin: "0 0 8px" }}>useCachedDrawEffect (cached)</h4>
            <CanPlot
              style={{ width: "100%", height: 350 }}
              configuration={CONFIGURATION}
            >
              <HeavyLayerCached drawCountRef={cachedCount} />
              <AnimatedCursor speed={200} />
            </CanPlot>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Demonstrates that `useCachedDrawEffect` correctly re-draws
 * when its deps change. Click the button to cycle through colors.
 */
export const CachedWithDepsChange: Story = {
  render: () => {
    const COLORS = ["#2563eb", "#dc2626", "#16a34a", "#9333ea", "#ea580c"];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [colorIdx, setColorIdx] = useState(0);
    const color = COLORS[colorIdx % COLORS.length];

    return (
      <div style={{ padding: 20 }}>
        <button
          type="button"
          onClick={() => setColorIdx((i) => i + 1)}
          style={{ marginBottom: 12, padding: "6px 16px", fontSize: 14 }}
        >
          Change color (current: {color})
        </button>
        <CanPlot
          style={{ width: "100%", height: 350 }}
          configuration={CONFIGURATION}
        >
          <CachedLine color={color} />
        </CanPlot>
      </div>
    );
  },
};

const CachedLine: React.FC<{ color: string }> = ({ color }) => {
  useCachedDrawEffect(
    "MIDDLE",
    ({ ctx, valToPos }) => {
      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      for (const pt of SINE_DATA) {
        const x = valToPos(pt.x, "x", "canvas");
        const y = valToPos(pt.y, "y", "canvas");
        if (x == null || y == null) continue;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();
    },
    [color]
  );
  return null;
};

/**
 * A cached static line stays rendered while a fast-updating cursor
 * animates on top. The static line is drawn once and reused from cache.
 * Resize the browser to confirm the cached layer redraws on resize.
 */
export const CachedStaticWithAnimatedOverlay: Story = {
  render: () => (
    <div style={{ padding: 20 }}>
      <p style={{ fontFamily: "monospace", fontSize: 13, margin: "0 0 12px" }}>
        Resize the browser to verify the cached layer re-renders on resize.
      </p>
      <CanPlot
        style={{ width: "100%", height: 400 }}
        configuration={CONFIGURATION}
      >
        <StaticLine />
        <AnimatedCursor speed={200} />
      </CanPlot>
    </div>
  ),
};

// ----- Translucent overlay bands -----

const AlphaOverlay: React.FC = () => {
  useCachedDrawEffect(
    "TOP",
    ({ ctx, valToPos, clampYPosToChartArea }) => {
      const y0 = clampYPosToChartArea(-Infinity, "canvas") as number;
      const y1 = clampYPosToChartArea(Infinity, "canvas") as number;

      const bands: { x0: number; x1: number; color: string; alpha: number }[] = [
        { x0: 0, x1: 20, color: "#ef4444", alpha: 0.15 },
        { x0: 20, x1: 40, color: "#f59e0b", alpha: 0.22 },
        { x0: 40, x1: 60, color: "#22c55e", alpha: 0.45 },
        { x0: 60, x1: 80, color: "#3b82f6", alpha: 0.72 },
        { x0: 80, x1: 100, color: "#a855f7", alpha: 0.95 },
      ];

      ctx.save();
      for (const band of bands) {
        const left = valToPos(band.x0, "x", "canvas");
        const right = valToPos(band.x1, "x", "canvas");
        if (left == null || right == null) continue;
        ctx.globalAlpha = band.alpha;
        ctx.fillStyle = band.color;
        ctx.fillRect(left, y0, right - left, y1 - y0);
      }
      ctx.restore();
    },
    []
  );
  return null;
};

/**
 * Cached layers with alpha transparency stacked together:
 * - BOTTOM: heavy circle grid (cached)
 * - MIDDLE: static sine line (cached)
 * - TOP: translucent color bands overlay (cached) + animated cursor (uncached)
 *
 * Demonstrates that alpha-blended cached bitmaps composite correctly
 * onto the main canvas.
 */
export const CachedWithAlphaOverlay: Story = {
  render: () => (
    <div style={{ padding: 20 }}>
      <p style={{ fontFamily: "monospace", fontSize: 13, margin: "0 0 12px" }}>
        Cached alpha-blended layers: circle grid + sine line + translucent color bands + animated cursor.
      </p>
      <CanPlot
        style={{ width: "100%", height: 400 }}
        configuration={CONFIGURATION}
      >
        <HeavyLayerCached drawCountRef={{ current: 0 }} />
        <StaticLine />
        <AnimatedCursor speed={1000} />
        <AlphaOverlay />
      </CanPlot>
    </div>
  ),
};

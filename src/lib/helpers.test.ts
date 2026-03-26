import { describe, it, expect } from "vitest";
import type { PlotDrawFrame, PlotDrawScaleConfig } from "./types";
import {
  getScale,
  pxToValDistance,
  valToPxDistance,
  valToPos,
  posToVal,
  clampXPosToChartArea,
  clampYPosToChartArea,
  valFits,
  deepEqual,
} from "./helpers";

const makeMockFrame = (
  overrides: {
    scales?: PlotDrawScaleConfig[];
    chartAreaCanvasPX?: { x: number; y: number; width: number; height: number };
    chartAreaCSS?: { x: number; y: number; width: number; height: number };
  } = {},
): PlotDrawFrame => ({
  ctx: {} as CanvasRenderingContext2D,
  dpr: 1,
  chartAreaCanvasPX: overrides.chartAreaCanvasPX ?? {
    x: 50,
    y: 10,
    width: 500,
    height: 300,
  },
  chartAreaCSS: overrides.chartAreaCSS ?? {
    x: 50,
    y: 10,
    width: 500,
    height: 300,
  },
  padding: { top: 10, bottom: 10, left: 50, right: 10 },
  scales: overrides.scales ?? [
    { id: "x", min: 0, max: 100, origin: "x", axis: null },
    { id: "y", min: 0, max: 100, origin: "y", axis: null },
  ],
});

// --- getScale ---

describe("getScale", () => {
  it("returns the scale when found", () => {
    const frame = makeMockFrame();
    expect(getScale(frame, "x")).toEqual(frame.scales[0]);
  });

  it("returns null when scale is not found", () => {
    const frame = makeMockFrame();
    expect(getScale(frame, "nonexistent")).toBeNull();
  });

  it("returns the correct scale among multiple", () => {
    const frame = makeMockFrame();
    expect(getScale(frame, "y")?.id).toBe("y");
  });
});

// --- pxToValDistance / valToPxDistance ---

describe("pxToValDistance & valToPxDistance", () => {
  it("are inverses for x-origin scale (canvas)", () => {
    const frame = makeMockFrame();
    const px = 100;
    const val = pxToValDistance(frame, px, "x", "canvas");
    expect(val).not.toBeNull();
    expect(valToPxDistance(frame, val!, "x", "canvas")).toBeCloseTo(px);
  });

  it("are inverses for y-origin scale (canvas)", () => {
    const frame = makeMockFrame();
    const px = 60;
    const val = pxToValDistance(frame, px, "y", "canvas");
    expect(val).not.toBeNull();
    expect(valToPxDistance(frame, val!, "y", "canvas")).toBeCloseTo(px);
  });

  it("work in css space", () => {
    const frame = makeMockFrame();
    const px = 100;
    const val = pxToValDistance(frame, px, "x", "css");
    expect(val).not.toBeNull();
    expect(valToPxDistance(frame, val!, "x", "css")).toBeCloseTo(px);
  });

  it("return null for non-existent scale", () => {
    const frame = makeMockFrame();
    expect(pxToValDistance(frame, 100, "z", "canvas")).toBeNull();
    expect(valToPxDistance(frame, 10, "z", "canvas")).toBeNull();
  });
});

// --- valToPos / posToVal ---

describe("valToPos & posToVal", () => {
  it("roundtrip for x-origin", () => {
    const frame = makeMockFrame();
    const val = 50;
    const pos = valToPos(frame, val, "x", "canvas");
    expect(pos).not.toBeNull();
    expect(posToVal(frame, pos!, "x", "canvas")).toBeCloseTo(val);
  });

  it("roundtrip for y-origin", () => {
    const frame = makeMockFrame();
    const val = 50;
    const pos = valToPos(frame, val, "y", "canvas");
    expect(pos).not.toBeNull();
    expect(posToVal(frame, pos!, "y", "canvas")).toBeCloseTo(val);
  });

  it("maps scale min to left edge for x", () => {
    const frame = makeMockFrame();
    const pos = valToPos(frame, 0, "x", "canvas")!;
    expect(pos).toBeCloseTo(50); // chartArea.x
  });

  it("maps scale max to right edge for x", () => {
    const frame = makeMockFrame();
    const pos = valToPos(frame, 100, "x", "canvas")!;
    expect(pos).toBeCloseTo(550); // chartArea.x + chartArea.width
  });

  it("maps scale min to bottom edge for y (flipped)", () => {
    const frame = makeMockFrame();
    const pos = valToPos(frame, 0, "y", "canvas")!;
    expect(pos).toBeCloseTo(310); // chartArea.y + chartArea.height
  });

  it("maps scale max to top edge for y", () => {
    const frame = makeMockFrame();
    const pos = valToPos(frame, 100, "y", "canvas")!;
    expect(pos).toBeCloseTo(10); // chartArea.y
  });

  it("returns null for non-existent scale", () => {
    const frame = makeMockFrame();
    expect(valToPos(frame, 50, "z", "canvas")).toBeNull();
    expect(posToVal(frame, 100, "z", "canvas")).toBeNull();
  });
});

// --- clampXPosToChartArea / clampYPosToChartArea ---

describe("clampXPosToChartArea", () => {
  it("returns value when within chart area", () => {
    const frame = makeMockFrame();
    expect(clampXPosToChartArea(frame, 200, "canvas")).toBe(200);
  });

  it("clamps to left edge", () => {
    const frame = makeMockFrame();
    expect(clampXPosToChartArea(frame, 0, "canvas")).toBe(50);
  });

  it("clamps to right edge", () => {
    const frame = makeMockFrame();
    expect(clampXPosToChartArea(frame, 999, "canvas")).toBe(550);
  });

  it("returns null for null input", () => {
    const frame = makeMockFrame();
    expect(clampXPosToChartArea(frame, null, "canvas")).toBeNull();
  });
});

describe("clampYPosToChartArea", () => {
  it("returns value when within chart area", () => {
    const frame = makeMockFrame();
    expect(clampYPosToChartArea(frame, 100, "canvas")).toBe(100);
  });

  it("clamps to top edge", () => {
    const frame = makeMockFrame();
    expect(clampYPosToChartArea(frame, 0, "canvas")).toBe(10);
  });

  it("clamps to bottom edge", () => {
    const frame = makeMockFrame();
    expect(clampYPosToChartArea(frame, 999, "canvas")).toBe(310);
  });

  it("returns null for null input", () => {
    const frame = makeMockFrame();
    expect(clampYPosToChartArea(frame, null, "canvas")).toBeNull();
  });
});

// --- valFits ---

describe("valFits", () => {
  it("returns true when value is in range", () => {
    const frame = makeMockFrame();
    expect(valFits(frame, 50, "x")).toBe(true);
  });

  it("returns true at scale boundaries", () => {
    const frame = makeMockFrame();
    expect(valFits(frame, 0, "x")).toBe(true);
    expect(valFits(frame, 100, "x")).toBe(true);
  });

  it("returns false when value is out of range", () => {
    const frame = makeMockFrame();
    expect(valFits(frame, -1, "x")).toBe(false);
    expect(valFits(frame, 101, "x")).toBe(false);
  });

  it("returns false for null value", () => {
    const frame = makeMockFrame();
    expect(valFits(frame, null, "x")).toBe(false);
  });

  it("returns false for non-existent scale", () => {
    const frame = makeMockFrame();
    expect(valFits(frame, 50, "z")).toBe(false);
  });
});

// --- deepEqual ---

describe("deepEqual", () => {
  it("returns true for same reference", () => {
    const obj = { a: 1 };
    expect(deepEqual(obj, obj)).toBe(true);
  });

  it("returns true for equal primitives", () => {
    expect(deepEqual(1, 1)).toBe(true);
    expect(deepEqual("a", "a")).toBe(true);
  });

  it("returns false for different primitives", () => {
    expect(deepEqual(1, 2)).toBe(false);
    expect(deepEqual("a", "b")).toBe(false);
  });

  it("returns true for equal flat objects", () => {
    expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
  });

  it("returns true for equal nested objects", () => {
    expect(deepEqual({ a: { b: { c: 3 } } }, { a: { b: { c: 3 } } })).toBe(
      true,
    );
  });

  it("returns false for different nested values", () => {
    expect(deepEqual({ a: { b: 1 } }, { a: { b: 2 } })).toBe(false);
  });

  it("handles arrays", () => {
    expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(deepEqual([1, 2], [1, 2, 3])).toBe(false);
    expect(deepEqual([1, 2, 3], [1, 2, 4])).toBe(false);
  });

  it("returns false for null vs non-null", () => {
    expect(deepEqual(null, { a: 1 })).toBe(false);
    expect(deepEqual({ a: 1 }, null)).toBe(false);
  });

  it("returns false for different types", () => {
    expect(deepEqual(1 as unknown, "1" as unknown)).toBe(false);
  });

  it("returns false for array vs object", () => {
    expect(deepEqual([1] as unknown, { 0: 1 } as unknown)).toBe(false);
  });

  it("returns false when keys differ", () => {
    expect(deepEqual({ a: 1 }, { b: 1 } as unknown)).toBe(false);
  });
});

import { describe, it, expect, vi } from "vitest";
import type { PlotDrawFrame, PlotDrawScaleConfig } from "../types";
import {
  makePointerSyncPosition,
  pointerSyncPositionToInteractionsPosition,
  makeSpanSelectHelpers,
} from "./positioning";
import type { InteractionsSyncConfig, PointerSyncPosition } from "./types";

const makeMockFrame = (
  overrides: {
    scales?: PlotDrawScaleConfig[];
    chartAreaCSS?: { x: number; y: number; width: number; height: number };
  } = {},
): PlotDrawFrame => ({
  ctx: {} as CanvasRenderingContext2D,
  dpr: 1,
  chartAreaCanvasPX: overrides.chartAreaCSS ?? {
    x: 0,
    y: 0,
    width: 1000,
    height: 500,
  },
  chartAreaCSS: overrides.chartAreaCSS ?? {
    x: 0,
    y: 0,
    width: 1000,
    height: 500,
  },
  padding: { top: 0, bottom: 0, left: 0, right: 0 },
  scales: overrides.scales ?? [
    { id: "x", min: 0, max: 100, origin: "x", axis: null },
    { id: "y", min: 0, max: 100, origin: "y", axis: null },
  ],
});

const makeRect = (): DOMRect =>
  ({
    left: 0,
    top: 0,
    right: 1000,
    bottom: 500,
    width: 1000,
    height: 500,
    x: 0,
    y: 0,
    toJSON: () => ({}),
  }) as DOMRect;

// --- makePointerSyncPosition ---

describe("makePointerSyncPosition (source side)", () => {
  it("populates value from cursor position on the source scale", () => {
    const frame = makeMockFrame();
    const result = makePointerSyncPosition(
      { clientX: 500, clientY: 250 },
      makeRect(),
      frame,
      { key: "k", xViaScaleId: "x", yViaScaleId: "y" },
    );
    expect(result).toBeDefined();
    expect(result!.pointerSyncPosition.x?.value).toBeCloseTo(50);
    expect(result!.pointerSyncPosition.y?.value).toBeCloseTo(50);
  });

  it("populates normalized when sync provides {axis}ToNormalized", () => {
    const frame = makeMockFrame();
    // linear: value 0..100 -> normalized 0..1
    const xToNormalized = vi.fn((v: number) => v / 100);
    const yToNormalized = vi.fn((v: number) => v / 100);
    const result = makePointerSyncPosition(
      { clientX: 250, clientY: 125 },
      makeRect(),
      frame,
      {
        key: "k",
        xViaScaleId: "x",
        yViaScaleId: "y",
        xToNormalized,
        yToNormalized,
      },
    );
    expect(xToNormalized).toHaveBeenCalledWith(25);
    expect(yToNormalized).toHaveBeenCalledWith(75);
    expect(result!.pointerSyncPosition.x?.normalized).toBeCloseTo(0.25);
    expect(result!.pointerSyncPosition.y?.normalized).toBeCloseTo(0.75);
  });

  it("leaves normalized as null when sync fn is absent", () => {
    const frame = makeMockFrame();
    const result = makePointerSyncPosition(
      { clientX: 500, clientY: 250 },
      makeRect(),
      frame,
      { key: "k", xViaScaleId: "x", yViaScaleId: "y" },
    );
    expect(result!.pointerSyncPosition.x?.normalized).toBeNull();
    expect(result!.pointerSyncPosition.y?.normalized).toBeNull();
  });

  it("returns undefined when rect is missing", () => {
    const frame = makeMockFrame();
    const result = makePointerSyncPosition(
      { clientX: 100, clientY: 100 },
      undefined,
      frame,
      { key: "k" },
    );
    expect(result).toBeUndefined();
  });

  it("falls back to first origin-x/y scale when viaScaleId omitted", () => {
    const frame = makeMockFrame();
    const result = makePointerSyncPosition(
      { clientX: 500, clientY: 250 },
      makeRect(),
      frame,
      { key: "k" },
    );
    expect(result!.pointerSyncPosition.x?.scaleId).toBe("x");
    expect(result!.pointerSyncPosition.y?.scaleId).toBe("y");
  });
});

// --- pointerSyncPositionToInteractionsPosition ---

describe("pointerSyncPositionToInteractionsPosition (receiver side)", () => {
  it("reconstructs cssX via matching scale id when no normalized bridge exists", () => {
    const frame = makeMockFrame();
    const pointerSync: PointerSyncPosition = {
      x: { scaleId: "x", value: 25, normalized: null },
      y: { scaleId: "y", value: 75, normalized: null },
    };
    const result = pointerSyncPositionToInteractionsPosition(
      pointerSync,
      frame,
      undefined,
    );
    // width 1000, min 0, max 100, value 25 -> cssX 250
    expect(result!.cssX).toBeCloseTo(250);
    // y-origin: value 75, height 500 -> cssY = height - (75/100)*height = 500 - 375 = 125
    expect(result!.cssY).toBeCloseTo(125);
  });

  it("uses normalized bridge when source scale id is absent in receiver", () => {
    // Receiver has scale "opTime" 0..1000; source used "wallClock" (unknown here).
    const frame = makeMockFrame({
      scales: [
        { id: "opTime", min: 0, max: 1000, origin: "x", axis: null },
        { id: "y", min: 0, max: 100, origin: "y", axis: null },
      ],
    });
    // Source normalized 0.5 corresponds to opTime 500 via receiver's fromNormalized.
    const receiverSync: InteractionsSyncConfig = {
      key: "k",
      xViaScaleId: "opTime",
      xFromNormalized: (n) => n * 1000,
    };
    const pointerSync: PointerSyncPosition = {
      x: { scaleId: "wallClock", value: 123456, normalized: 0.5 },
      y: null,
    };
    const result = pointerSyncPositionToInteractionsPosition(
      pointerSync,
      frame,
      receiverSync,
    );
    // opTime 500 in a 0..1000 scale on a 1000-wide chart area -> cssX 500
    expect(result!.cssX).toBeCloseTo(500);
    // scaled entry for opTime reflects the reconstructed value
    expect(result!.scaled.opTime).toBeCloseTo(500);
    // Normalized data passes through from source
    expect(result!.normalizedX).toBeCloseTo(0.5);
  });

  it("prefers normalized bridge over matching-scale-id when both are viable", () => {
    // Receiver has BOTH "x" and knows about "wallClock" is not there; but has "opTime".
    const frame = makeMockFrame({
      scales: [
        { id: "x", min: 0, max: 100, origin: "x", axis: null },
        { id: "opTime", min: 0, max: 1000, origin: "x", axis: null },
        { id: "y", min: 0, max: 100, origin: "y", axis: null },
      ],
    });
    const receiverSync: InteractionsSyncConfig = {
      key: "k",
      xViaScaleId: "opTime",
      xFromNormalized: (n) => n * 1000,
    };
    // Source used "x" (which IS present in receiver) BUT normalized bridge should still win.
    const pointerSync: PointerSyncPosition = {
      x: { scaleId: "x", value: 25, normalized: 0.5 },
      y: null,
    };
    const result = pointerSyncPositionToInteractionsPosition(
      pointerSync,
      frame,
      receiverSync,
    );
    // If matching-id path were used, cssX would be 250 (value 25 on scale x 0..100 in a 1000-wide chart).
    // With bridge: opTime 500 -> cssX 500.
    expect(result!.cssX).toBeCloseTo(500);
  });

  it("falls back to matching-scale-id when normalized bridge is misconfigured", () => {
    const frame = makeMockFrame({
      scales: [{ id: "x", min: 0, max: 100, origin: "x", axis: null }],
    });
    // Receiver has no xFromNormalized; must fall back to source scale id.
    const receiverSync: InteractionsSyncConfig = { key: "k", xViaScaleId: "x" };
    const pointerSync: PointerSyncPosition = {
      x: { scaleId: "x", value: 25, normalized: 0.5 },
      y: null,
    };
    const result = pointerSyncPositionToInteractionsPosition(
      pointerSync,
      frame,
      receiverSync,
    );
    expect(result!.cssX).toBeCloseTo(250);
  });

  it("returns cssX null when neither normalized bridge nor matching-id works", () => {
    const frame = makeMockFrame({
      scales: [{ id: "opTime", min: 0, max: 1000, origin: "x", axis: null }],
    });
    const pointerSync: PointerSyncPosition = {
      x: { scaleId: "unknown", value: 5, normalized: 0.5 },
      y: null,
    };
    // No sync config, so no fromNormalized path either.
    const result = pointerSyncPositionToInteractionsPosition(
      pointerSync,
      frame,
      undefined,
    );
    expect(result!.cssX).toBeNull();
  });

  it("exposes toNormalized/fromNormalized helpers bound to receiver sync", () => {
    const frame = makeMockFrame();
    const receiverSync: InteractionsSyncConfig = {
      key: "k",
      xViaScaleId: "x",
      xToNormalized: (v) => v * 2,
      xFromNormalized: (n) => n / 2,
    };
    const pointerSync: PointerSyncPosition = {
      x: { scaleId: "x", value: 25, normalized: 0.5 },
      y: null,
    };
    const result = pointerSyncPositionToInteractionsPosition(
      pointerSync,
      frame,
      receiverSync,
    );
    expect(result!.toNormalized(10, "x")).toBe(20);
    expect(result!.fromNormalized(20, "x")).toBe(10);
    // Y axis had no config -> null.
    expect(result!.toNormalized(10, "y")).toBeNull();
    expect(result!.fromNormalized(10, "y")).toBeNull();
  });

  it("round-trips identity through same sync config", () => {
    const frame = makeMockFrame({
      scales: [{ id: "x", min: 0, max: 100, origin: "x", axis: null }],
    });
    const rect = makeRect();
    const sync: InteractionsSyncConfig = {
      key: "k",
      xViaScaleId: "x",
      xToNormalized: (v) => v / 100,
      xFromNormalized: (n) => n * 100,
    };
    const source = makePointerSyncPosition(
      { clientX: 320, clientY: 0 },
      rect,
      frame,
      sync,
    )!;
    const received = pointerSyncPositionToInteractionsPosition(
      source.pointerSyncPosition,
      frame,
      sync,
    )!;
    expect(received.cssX).toBeCloseTo(source.cssX);
  });

  it("returns null cssX when normalized bridge maps outside receiver viewport", () => {
    // Receiver's opTime viewport is [0..1000]; bridge maps normalized to 5000.
    const frame = makeMockFrame({
      scales: [
        { id: "opTime", min: 0, max: 1000, origin: "x", axis: null },
      ],
    });
    const receiverSync: InteractionsSyncConfig = {
      key: "k",
      xViaScaleId: "opTime",
      xFromNormalized: (n) => n, // pass-through, but value is off-viewport
    };
    const pointerSync: PointerSyncPosition = {
      x: { scaleId: "wallClock", value: 999, normalized: 5000 },
      y: null,
    };
    const result = pointerSyncPositionToInteractionsPosition(
      pointerSync,
      frame,
      receiverSync,
    );
    expect(result!.cssX).toBeNull();
  });

  it("returns null cssX when matching-scale-id fallback value is outside viewport", () => {
    const frame = makeMockFrame({
      scales: [{ id: "x", min: 0, max: 100, origin: "x", axis: null }],
    });
    const pointerSync: PointerSyncPosition = {
      x: { scaleId: "x", value: 500, normalized: null },
      y: null,
    };
    const result = pointerSyncPositionToInteractionsPosition(
      pointerSync,
      frame,
      undefined,
    );
    expect(result!.cssX).toBeNull();
  });
});

// --- makeSpanSelectHelpers ---

describe("makeSpanSelectHelpers", () => {
  it("returns helpers bound to the passed sync config", () => {
    const helpers = makeSpanSelectHelpers({
      key: "k",
      xToNormalized: (v) => v + 1,
      yFromNormalized: (n) => n - 1,
    });
    expect(helpers.toNormalized(5, "x")).toBe(6);
    expect(helpers.fromNormalized(5, "y")).toBe(4);
    expect(helpers.toNormalized(5, "y")).toBeNull();
    expect(helpers.fromNormalized(5, "x")).toBeNull();
  });

  it("returns null helpers when sync is undefined", () => {
    const helpers = makeSpanSelectHelpers(undefined);
    expect(helpers.toNormalized(5, "x")).toBeNull();
    expect(helpers.fromNormalized(5, "y")).toBeNull();
  });
});

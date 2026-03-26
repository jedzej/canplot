import { describe, it, expect } from "vitest";
import type {
  PlotDrawFrame,
  PlotDrawAxis,
  PlotDrawScaleConfig,
  TicksConfig,
} from "./types";
import {
  makeLinearTicks,
  defaultNumericalTicksFormatter,
  makeTimeTicks,
  makeTimeTickFormat,
} from "./tickUtils";

// --- Helpers ---

const makeMockFrame = (
  chartWidth: number = 600,
): PlotDrawFrame => ({
  ctx: {} as CanvasRenderingContext2D,
  dpr: 1,
  chartAreaCanvasPX: { x: 50, y: 10, width: chartWidth, height: 300 },
  chartAreaCSS: { x: 50, y: 10, width: chartWidth / 1, height: 300 },
  padding: { top: 10, bottom: 10, left: 50, right: 10 },
  scales: [],
});

const makeMockScaleWithAxis = (
  overrides: Partial<PlotDrawScaleConfig> = {},
): PlotDrawScaleConfig & { axis: PlotDrawAxis } => {
  const base: PlotDrawScaleConfig & { axis: PlotDrawAxis } = {
    id: "x",
    min: 0,
    max: 100,
    origin: "x" as const,
    axis: {
      position: "bottom",
      size: 30,
      cssRect: { x: 50, y: 310, width: 500, height: 30 },
      canvasRect: { x: 50, y: 310, width: 500, height: 30 },
    },
  };
  return { ...base, ...overrides, axis: base.axis };
};

/** Convert a UTC date string to epoch ms */
const utc = (dateStr: string): number => new Date(dateStr).getTime();

type TicksFn = Extract<TicksConfig, (...args: never[]) => unknown>;

const callTicks = (
  ticksFn: TicksConfig,
  scale: PlotDrawScaleConfig & { axis: PlotDrawAxis },
  frame: PlotDrawFrame,
) => (ticksFn as TicksFn)(scale, frame);

const toTZStrings = (
  ticks: { value: number }[],
  timeZone: string,
): string[] =>
  ticks.map((t) =>
    new Date(t.value).toLocaleString("en-GB", {
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23",
    }),
  );

// ============================================================
// defaultNumericalTicksFormatter
// ============================================================

describe("defaultNumericalTicksFormatter", () => {
  it("formats ticks with correct decimal precision", () => {
    const result = defaultNumericalTicksFormatter([0, 0.5, 1.0, 1.5, 2.0]);
    expect(result).toEqual([
      { value: 0, label: "0.0" },
      { value: 0.5, label: "0.5" },
      { value: 1.0, label: "1.0" },
      { value: 1.5, label: "1.5" },
      { value: 2.0, label: "2.0" },
    ]);
  });

  it("uses integer labels for integer increments", () => {
    const result = defaultNumericalTicksFormatter([0, 10, 20, 30]);
    expect(result[0].label).toBe("0");
    expect(result[1].label).toBe("10");
  });

  it("uses appropriate precision for small increments", () => {
    const result = defaultNumericalTicksFormatter([0, 0.01, 0.02, 0.03]);
    expect(result[1].label).toBe("0.01");
  });
});

// ============================================================
// makeLinearTicks
// ============================================================

describe("makeLinearTicks", () => {
  it("produces evenly spaced ticks for a normal range", () => {
    const ticksFn = makeLinearTicks({ space: 60 });
    const scale = makeMockScaleWithAxis({ min: 0, max: 100 });
    const frame = makeMockFrame(600);
    frame.scales = [scale];
    const ticks = callTicks(ticksFn, scale, frame);
    expect(ticks.length).toBeGreaterThan(0);
    // All ticks within range
    for (const t of ticks) {
      expect(t.value).toBeGreaterThanOrEqual(0);
      expect(t.value).toBeLessThanOrEqual(100);
    }
    // Evenly spaced
    if (ticks.length > 1) {
      const incr = ticks[1].value - ticks[0].value;
      for (let i = 2; i < ticks.length; i++) {
        expect(ticks[i].value - ticks[i - 1].value).toBeCloseTo(incr);
      }
    }
  });

  it("handles small ranges (0.001 to 0.005)", () => {
    const ticksFn = makeLinearTicks({ space: 60 });
    const scale = makeMockScaleWithAxis({ min: 0.001, max: 0.005 });
    const frame = makeMockFrame(600);
    frame.scales = [scale];
    const ticks = callTicks(ticksFn, scale, frame);
    expect(ticks.length).toBeGreaterThan(0);
    for (const t of ticks) {
      expect(t.value).toBeGreaterThanOrEqual(0.001);
      expect(t.value).toBeLessThanOrEqual(0.005);
    }
  });

  it("handles negative ranges crossing zero", () => {
    const ticksFn = makeLinearTicks({ space: 60 });
    const scale = makeMockScaleWithAxis({ min: -50, max: 50 });
    const frame = makeMockFrame(600);
    frame.scales = [scale];
    const ticks = callTicks(ticksFn, scale, frame);
    expect(ticks.length).toBeGreaterThan(0);
    const hasNegative = ticks.some((t) => t.value < 0);
    const hasPositive = ticks.some((t) => t.value > 0);
    expect(hasNegative).toBe(true);
    expect(hasPositive).toBe(true);
  });

  it("returns empty for inverted range (min > max)", () => {
    const ticksFn = makeLinearTicks({ space: 60 });
    const scale = makeMockScaleWithAxis({ min: 100, max: 0 });
    const frame = makeMockFrame(600);
    frame.scales = [scale];
    const ticks = callTicks(ticksFn, scale, frame);
    expect(ticks).toEqual([]);
  });

  it("uses custom acceptableIncrements", () => {
    const ticksFn = makeLinearTicks({
      space: 60,
      acceptableIncrements: [25, 50],
    });
    const scale = makeMockScaleWithAxis({ min: 0, max: 100 });
    const frame = makeMockFrame(600);
    frame.scales = [scale];
    const ticks = callTicks(ticksFn, scale, frame);
    expect(ticks.length).toBeGreaterThan(0);
    if (ticks.length > 1) {
      const incr = ticks[1].value - ticks[0].value;
      expect([25, 50]).toContain(incr);
    }
  });

  it("uses custom formatter", () => {
    const ticksFn = makeLinearTicks({
      space: 60,
      formatter: (ticks) =>
        ticks.map((t) => ({ value: t, label: `val:${t}` })),
    });
    const scale = makeMockScaleWithAxis({ min: 0, max: 100 });
    const frame = makeMockFrame(600);
    frame.scales = [scale];
    const ticks = callTicks(ticksFn, scale, frame);
    expect(ticks.length).toBeGreaterThan(0);
    expect(ticks[0].label).toMatch(/^val:/);
  });
});

// ============================================================
// makeTimeTicks — Infinity / non-finite edge cases
// ============================================================

describe("makeTimeTicks — non-finite scales", () => {
  const callTimeTicks = (min: number, max: number) => {
    const ticksFn = makeTimeTicks({ timeZone: "UTC" });
    const scale = makeMockScaleWithAxis({ min, max });
    const frame = makeMockFrame(600);
    frame.scales = [scale];
    return callTicks(ticksFn, scale, frame);
  };

  it("returns [] for min=-Infinity, max=Infinity", () => {
    expect(callTimeTicks(-Infinity, Infinity)).toEqual([]);
  });

  it("returns [] for min=NaN", () => {
    expect(callTimeTicks(NaN, utc("2025-01-01"))).toEqual([]);
  });

  it("returns [] for max=NaN", () => {
    expect(callTimeTicks(utc("2025-01-01"), NaN)).toEqual([]);
  });

  it("returns [] for min=Infinity, max=-Infinity", () => {
    expect(callTimeTicks(Infinity, -Infinity)).toEqual([]);
  });

  it("returns [] for min=-Infinity, max=finite", () => {
    expect(callTimeTicks(-Infinity, utc("2025-01-01"))).toEqual([]);
  });

  it("returns [] for min=finite, max=Infinity", () => {
    expect(callTimeTicks(utc("2025-01-01"), Infinity)).toEqual([]);
  });
});

// ============================================================
// makeTimeTicks — Timezone alignment
// ============================================================

describe("makeTimeTicks — timezone alignment", () => {
  // Use a 10-day range at ~60px space with 600px width → ~10 splits → daily ticks
  const callDailyTimeTicks = (
    min: number,
    max: number,
    timeZone: string,
  ) => {
    const ticksFn = makeTimeTicks({ timeZone, space: 60 });
    const scale = makeMockScaleWithAxis({ min, max });
    const frame = makeMockFrame(600);
    frame.scales = [scale];
    return callTicks(ticksFn, scale, frame);
  };

  it("aligns daily ticks to midnight UTC", () => {
    const min = utc("2025-01-01T00:00:00Z");
    const max = utc("2025-01-10T00:00:00Z");
    const ticks = callDailyTimeTicks(min, max, "UTC");
    expect(ticks.length).toBeGreaterThan(0);
    for (const t of ticks) {
      const d = new Date(t.value);
      expect(d.getUTCHours()).toBe(0);
      expect(d.getUTCMinutes()).toBe(0);
      expect(d.getUTCSeconds()).toBe(0);
    }
  });

  it("aligns daily ticks in Asia/Kolkata (UTC+5:30) — lands on :30 due to half-hour offset", () => {
    // Known limitation: the hours-branch in makeFirstTick doesn't account for
    // half-hour timezone offsets, so daily ticks land 30 minutes off midnight.
    const timeZone = "Asia/Kolkata";
    const min = utc("2025-01-01T00:00:00Z");
    const max = utc("2025-01-10T00:00:00Z");
    const ticks = callDailyTimeTicks(min, max, timeZone);
    expect(ticks.length).toBeGreaterThan(0);
    const tzStrings = toTZStrings(ticks, timeZone);
    for (const str of tzStrings) {
      // Ticks land at 00:30 instead of 00:00 due to the half-hour offset quirk
      expect(str).toMatch(/00:30:00$/);
    }
  });

  it("aligns daily ticks to midnight in America/New_York (UTC-5/-4)", () => {
    const timeZone = "America/New_York";
    // Use a winter period (no DST)
    const min = utc("2025-01-01T00:00:00Z");
    const max = utc("2025-01-10T00:00:00Z");
    const ticks = callDailyTimeTicks(min, max, timeZone);
    expect(ticks.length).toBeGreaterThan(0);
    const tzStrings = toTZStrings(ticks, timeZone);
    for (const str of tzStrings) {
      expect(str).toMatch(/00:00:00$/);
    }
  });

  it("aligns daily ticks to midnight in Pacific/Auckland (UTC+12/+13)", () => {
    const timeZone = "Pacific/Auckland";
    const min = utc("2025-06-01T00:00:00Z");
    const max = utc("2025-06-10T00:00:00Z");
    const ticks = callDailyTimeTicks(min, max, timeZone);
    expect(ticks.length).toBeGreaterThan(0);
    const tzStrings = toTZStrings(ticks, timeZone);
    for (const str of tzStrings) {
      expect(str).toMatch(/00:00:00$/);
    }
  });

  it("aligns daily ticks to midnight in Pacific/Pago_Pago (UTC-11)", () => {
    const timeZone = "Pacific/Pago_Pago";
    const min = utc("2025-01-01T00:00:00Z");
    const max = utc("2025-01-10T00:00:00Z");
    const ticks = callDailyTimeTicks(min, max, timeZone);
    expect(ticks.length).toBeGreaterThan(0);
    const tzStrings = toTZStrings(ticks, timeZone);
    for (const str of tzStrings) {
      expect(str).toMatch(/00:00:00$/);
    }
  });
});

// ============================================================
// makeTimeTicks — DST transitions
// ============================================================

describe("makeTimeTicks — DST transitions", () => {
  const callTimeTicks = (
    min: number,
    max: number,
    timeZone: string,
    space: number = 60,
    chartWidth: number = 600,
  ) => {
    const ticksFn = makeTimeTicks({ timeZone, space });
    const scale = makeMockScaleWithAxis({ min, max });
    const frame = makeMockFrame(chartWidth);
    frame.scales = [scale];
    return callTicks(ticksFn, scale, frame);
  };

  it("produces no duplicate ticks during US spring-forward (hourly)", () => {
    // 2025 spring-forward: March 9, 2:00 AM EST → 3:00 AM EDT
    // Range: March 8 23:00 EST to March 9 06:00 EDT
    // In UTC: March 9 04:00 to March 9 10:00
    const timeZone = "America/New_York";
    const min = utc("2025-03-09T04:00:00Z"); // 23:00 EST Mar 8
    const max = utc("2025-03-09T10:00:00Z"); // 06:00 EDT Mar 9
    // Use a large space to get hourly ticks
    const ticks = callTimeTicks(min, max, timeZone, 80, 600);
    expect(ticks.length).toBeGreaterThan(0);
    // No duplicate values
    const values = ticks.map((t) => t.value);
    expect(new Set(values).size).toBe(values.length);
    // Ticks are strictly increasing
    for (let i = 1; i < values.length; i++) {
      expect(values[i]).toBeGreaterThan(values[i - 1]);
    }
  });

  it("produces no duplicate ticks during US fall-back (hourly)", () => {
    // 2025 fall-back: November 2, 2:00 AM EDT → 1:00 AM EST
    // Range: Nov 1 23:00 EDT to Nov 2 05:00 EST
    // In UTC: Nov 2 03:00 to Nov 2 10:00
    const timeZone = "America/New_York";
    const min = utc("2025-11-02T03:00:00Z"); // 23:00 EDT Nov 1
    const max = utc("2025-11-02T10:00:00Z"); // 05:00 EST Nov 2
    const ticks = callTimeTicks(min, max, timeZone, 80, 600);
    expect(ticks.length).toBeGreaterThan(0);
    const values = ticks.map((t) => t.value);
    expect(new Set(values).size).toBe(values.length);
    for (let i = 1; i < values.length; i++) {
      expect(values[i]).toBeGreaterThan(values[i - 1]);
    }
  });

  it("daily ticks across DST still land on midnight local time", () => {
    // Range covers spring-forward in America/New_York (March 9, 2025)
    const timeZone = "America/New_York";
    const min = utc("2025-03-06T05:00:00Z"); // March 6 midnight EST
    const max = utc("2025-03-15T04:00:00Z"); // March 15 midnight EDT
    const ticks = callTimeTicks(min, max, timeZone, 60, 600);
    expect(ticks.length).toBeGreaterThan(0);
    const tzStrings = toTZStrings(ticks, timeZone);
    for (const str of tzStrings) {
      expect(str).toMatch(/00:00:00$/);
    }
  });
});

// ============================================================
// makeTimeTicks — Granularity
// ============================================================

describe("makeTimeTicks — granularity", () => {
  const callTimeTicks = (
    min: number,
    max: number,
    space: number = 60,
    chartWidth: number = 600,
  ) => {
    const ticksFn = makeTimeTicks({ timeZone: "UTC", space });
    const scale = makeMockScaleWithAxis({ min, max });
    const frame = makeMockFrame(chartWidth);
    frame.scales = [scale];
    return callTicks(ticksFn, scale, frame);
  };

  it("produces millisecond-level ticks for ~500ms range", () => {
    const base = utc("2025-01-01T00:00:00.000Z");
    const ticks = callTimeTicks(base, base + 500, 60, 600);
    expect(ticks.length).toBeGreaterThan(2);
    // Increments should be < 1 second
    const incr = ticks[1].value - ticks[0].value;
    expect(incr).toBeLessThan(1000);
  });

  it("produces minute-level ticks for ~30min range", () => {
    const base = utc("2025-01-01T00:00:00Z");
    const ticks = callTimeTicks(base, base + 30 * 60 * 1000, 60, 600);
    expect(ticks.length).toBeGreaterThan(2);
    const incr = ticks[1].value - ticks[0].value;
    // Should be in the minutes range (60000ms = 1 minute)
    expect(incr).toBeGreaterThanOrEqual(60 * 1000);
    expect(incr).toBeLessThanOrEqual(30 * 60 * 1000);
  });

  it("produces year-level ticks for ~10 year range", () => {
    const min = utc("2015-01-01T00:00:00Z");
    const max = utc("2025-01-01T00:00:00Z");
    const ticks = callTimeTicks(min, max, 60, 600);
    expect(ticks.length).toBeGreaterThan(1);
    // Increment should be >= ~365 days
    const incr = ticks[1].value - ticks[0].value;
    expect(incr).toBeGreaterThanOrEqual(365 * 24 * 60 * 60 * 1000 * 0.9);
  });
});

// ============================================================
// makeTimeTickFormat
// ============================================================

describe("makeTimeTickFormat", () => {
  it("includes milliseconds for sub-second ticks", () => {
    const formatter = makeTimeTickFormat({ timeZone: "UTC", locale: "en-GB" });
    const base = utc("2025-01-01T12:00:00.000Z");
    const ticks = [base, base + 100, base + 200];
    const result = formatter(ticks);
    // Labels should contain ms-level detail (e.g. ".100" or similar)
    expect(result[1].label).toMatch(/\.\d{3}/);
  });

  it("includes seconds for sub-minute ticks", () => {
    const formatter = makeTimeTickFormat({ timeZone: "UTC", locale: "en-GB" });
    const base = utc("2025-01-01T12:00:00Z");
    const ticks = [base, base + 10000, base + 20000]; // 10s apart
    const result = formatter(ticks);
    // Should have seconds in the label but NOT ms
    expect(result[1].label).toMatch(/:\d{2}/);
    expect(result[1].label).not.toMatch(/\.\d{3}/);
  });

  it("includes hours for sub-day ticks", () => {
    const formatter = makeTimeTickFormat({ timeZone: "UTC", locale: "en-GB" });
    const base = utc("2025-01-01T00:00:00Z");
    const ticks = [base, base + 3600000, base + 7200000]; // 1h apart
    const result = formatter(ticks);
    // Should show time (hours:minutes) — hour may not be zero-padded
    expect(result[1].label).toMatch(/\d{1,2}:\d{2}/);
  });

  it("shows date without time for multi-day ticks", () => {
    const formatter = makeTimeTickFormat({ timeZone: "UTC", locale: "en-GB" });
    const day = 86400000;
    const base = utc("2025-01-01T00:00:00Z");
    const ticks = [base, base + day, base + 2 * day];
    const result = formatter(ticks);
    // Should contain month/day info but no hours for non-first ticks
    // (first tick may have both date and year)
    expect(result[1].label).toMatch(/Jan/);
  });

  it("includes timezone name when showTimezone is true", () => {
    const formatter = makeTimeTickFormat({
      timeZone: "America/New_York",
      locale: "en-GB",
      showTimezone: true,
    });
    const base = utc("2025-01-01T12:00:00Z");
    const ticks = [base, base + 3600000, base + 7200000];
    const result = formatter(ticks);
    // First tick should contain timezone info (may be "EST", "EDT", or "GMT-5" depending on env)
    expect(result[0].label).toMatch(/EST|EDT|GMT-5|GMT-4/);
  });

  it("omits timezone name when showTimezone is false", () => {
    const formatter = makeTimeTickFormat({
      timeZone: "America/New_York",
      locale: "en-GB",
      showTimezone: false,
    });
    const base = utc("2025-01-01T12:00:00Z");
    const ticks = [base, base + 3600000, base + 7200000];
    const result = formatter(ticks);
    // No timezone abbreviation in any label
    for (const r of result) {
      expect(r.label).not.toMatch(/EST|EDT|GMT-5|GMT-4/);
    }
  });

  it("respects locale for formatting", () => {
    const formatterGB = makeTimeTickFormat({
      timeZone: "UTC",
      locale: "en-GB",
    });
    const formatterDE = makeTimeTickFormat({
      timeZone: "UTC",
      locale: "de-DE",
    });
    const day = 86400000;
    const base = utc("2025-01-15T00:00:00Z");
    const ticks = [base, base + day, base + 2 * day];
    // Use January ticks just to initialize, then test with March for locale difference
    void formatterGB(ticks);
    void formatterDE(ticks);
    const baseFeb = utc("2025-03-15T00:00:00Z");
    const ticksFeb = [baseFeb, baseFeb + day, baseFeb + 2 * day];
    const resultGB2 = formatterGB(ticksFeb);
    const resultDE2 = formatterDE(ticksFeb);
    // "Mar" (en-GB) vs "Mär" (de-DE)
    expect(resultGB2[0].label).toMatch(/Mar/);
    expect(resultDE2[0].label).toMatch(/Mär/);
  });
});

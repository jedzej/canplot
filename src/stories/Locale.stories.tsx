import type { Meta, StoryObj } from "@storybook/react-vite";
import { CanPlot } from "../lib/CanPlot";
import { LinePlot } from "../lib/plot/LinePlot";
import { XTicks, YTicks } from "../lib/plot/Ticks";
import {
  makeLinearTicks,
  makeTimeTicks,
  makeTimeTickFormat,
} from "../lib/tickUtils";
import type { PlotScaleConfig } from "../lib/types";

const meta: Meta<typeof CanPlot> = {
  component: CanPlot,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const refPoint = Date.parse("2025-11-05T12:00:00Z");
const weekMs = 1000 * 60 * 60 * 24 * 7;

const sampleData = Array.from({ length: 200 }, (_, i) => ({
  x: refPoint - weekMs + (i * weekMs) / 200,
  y: 50 + Math.sin(i / 8) * 25 + Math.cos(i / 3) * 5,
}));

const LOCALES: { locale: string; label: string }[] = [
  { locale: "en-US", label: "English (United States)" },
  { locale: "en-GB", label: "English (United Kingdom)" },
  { locale: "de-DE", label: "German (Germany)" },
  { locale: "fr-FR", label: "French (France)" },
  { locale: "es-ES", label: "Spanish (Spain)" },
  { locale: "pl-PL", label: "Polish (Poland)" },
  { locale: "ja-JP", label: "Japanese (Japan)" },
  { locale: "zh-Hans", label: "Chinese (Simplified, China)" },
  { locale: "zh-Hant", label: "Chinese (Traditional, Taiwan)" },
  { locale: "ru-RU", label: "Russian (Russia)" },
  { locale: "ar-EG", label: "Arabic (Egypt)" },
];

const LocaleChart = ({
  locale,
  label,
  timeZone = "UTC",
  showTimezone = false,
}: {
  locale: string;
  label: string;
  timeZone?: string;
  showTimezone?: boolean;
}) => {
  const scaleId = `t-${locale}`;
  const scales: PlotScaleConfig[] = [
    {
      id: scaleId,
      axis: { position: "bottom", size: 60 },
      origin: "x",
      min: refPoint - weekMs,
      max: refPoint,
    },
    {
      id: "y",
      axis: { position: "left", size: 50 },
      origin: "y",
      min: 0,
      max: 100,
    },
  ];

  return (
    <div style={{ marginBottom: "32px" }}>
      <h4 style={{ margin: "0 0 2px" }}>{label}</h4>
      <p style={{ color: "#888", fontSize: "12px", margin: "0 0 6px" }}>
        locale: <code>{locale}</code> · timeZone: <code>{timeZone}</code>
      </p>
      <CanPlot
        style={{ width: "100%", height: "220px" }}
        configuration={{
          padding: { bottom: 20, left: 20, right: 20, top: 20 },
          scales,
        }}
      >
        <XTicks
          scaleId={scaleId}
          ticks={makeTimeTicks({ locale, timeZone, showTimezone })}
        />
        <YTicks scaleId="y" ticks={makeLinearTicks()} />
        <LinePlot
          data={sampleData}
          xScaleId={scaleId}
          yScaleId="y"
          style={{ strokeStyle: "#4c6ef5", lineWidth: 2 }}
        />
      </CanPlot>
    </div>
  );
};

export const LocaleComparison: Story = {
  render: () => (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2 style={{ marginBottom: "4px" }}>Locale Comparison</h2>
      <p style={{ color: "#666", fontSize: "13px", margin: "0 0 24px" }}>
        The same one-week range rendered with different <code>locale</code>{" "}
        values passed to <code>makeTimeTicks</code>. The locale controls how{" "}
        month names, day-of-week and number formats are displayed by{" "}
        <code>Intl.DateTimeFormat</code>.
      </p>
      {LOCALES.map(({ locale, label }) => (
        <LocaleChart key={locale} locale={locale} label={label} />
      ))}
    </div>
  ),
};

const HOUR_TIMEZONES: { locale: string; timeZone: string; label: string }[] = [
  { locale: "en-US", timeZone: "America/New_York", label: "New York" },
  { locale: "en-GB", timeZone: "Europe/London", label: "London" },
  { locale: "de-DE", timeZone: "Europe/Berlin", label: "Berlin" },
  { locale: "ja-JP", timeZone: "Asia/Tokyo", label: "Tokyo" },
  { locale: "en-AU", timeZone: "Australia/Sydney", label: "Sydney" },
];

export const LocaleWithTimezone: Story = {
  render: () => {
    const dayMs = 1000 * 60 * 60 * 24;
    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h2 style={{ marginBottom: "4px" }}>Locale + Time Zone</h2>
        <p style={{ color: "#666", fontSize: "13px", margin: "0 0 24px" }}>
          The same 24-hour range shown in different locales and time zones with{" "}
          <code>showTimezone</code> enabled, so both the localized formatting
          and the time-zone abbreviation are visible on the axis.
        </p>
        {HOUR_TIMEZONES.map(({ locale, timeZone, label }) => {
          const scaleId = `hz-${timeZone}`;
          const scales: PlotScaleConfig[] = [
            {
              id: scaleId,
              axis: { position: "bottom", size: 60 },
              origin: "x",
              min: refPoint - dayMs,
              max: refPoint,
            },
            {
              id: "y",
              axis: { position: "left", size: 50 },
              origin: "y",
              min: 0,
              max: 100,
            },
          ];
          return (
            <div key={timeZone} style={{ marginBottom: "32px" }}>
              <h4 style={{ margin: "0 0 2px" }}>{label}</h4>
              <p
                style={{ color: "#888", fontSize: "12px", margin: "0 0 6px" }}
              >
                locale: <code>{locale}</code> · timeZone:{" "}
                <code>{timeZone}</code>
              </p>
              <CanPlot
                style={{ width: "100%", height: "220px" }}
                configuration={{
                  padding: { bottom: 20, left: 20, right: 20, top: 20 },
                  scales,
                }}
              >
                <XTicks
                  scaleId={scaleId}
                  ticks={makeTimeTicks({
                    locale,
                    timeZone,
                    showTimezone: true,
                  })}
                />
                <YTicks scaleId="y" ticks={makeLinearTicks()} />
                <LinePlot
                  data={Array.from({ length: 200 }, (_, i) => ({
                    x: refPoint - dayMs + (i * dayMs) / 200,
                    y: 50 + Math.sin(i / 8) * 25,
                  }))}
                  xScaleId={scaleId}
                  yScaleId="y"
                  style={{ strokeStyle: "#12b886", lineWidth: 2 }}
                />
              </CanPlot>
            </div>
          );
        })}
      </div>
    );
  },
};

const GRANULARITIES: {
  title: string;
  min: number;
  max: number;
}[] = [
  {
    title: "Sub-second (1 second range)",
    min: refPoint,
    max: refPoint + 1000,
  },
  {
    title: "Minutes (1 hour range)",
    min: refPoint,
    max: refPoint + 1000 * 60 * 60,
  },
  {
    title: "Hours (1 day range)",
    min: refPoint,
    max: refPoint + 1000 * 60 * 60 * 24,
  },
  {
    title: "Days (1 month range)",
    min: refPoint,
    max: refPoint + 1000 * 60 * 60 * 24 * 30,
  },
  {
    title: "Months (1 year range)",
    min: refPoint,
    max: refPoint + 1000 * 60 * 60 * 24 * 365,
  },
  {
    title: "Years (5 year range)",
    min: refPoint,
    max: refPoint + 1000 * 60 * 60 * 24 * 365 * 5,
  },
];

const GRANULARITY_LOCALES = ["en-US", "de-DE", "ja-JP"];

export const LocaleAcrossGranularities: Story = {
  render: () => (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2 style={{ marginBottom: "4px" }}>Locale Across Granularities</h2>
      <p style={{ color: "#666", fontSize: "13px", margin: "0 0 24px" }}>
        Locale formatting applied to a variety of time-tick granularities. Each
        row shows the same range formatted with{" "}
        {GRANULARITY_LOCALES.map((l) => (
          <code key={l} style={{ marginRight: 4 }}>
            {l}
          </code>
        ))}
        .
      </p>
      {GRANULARITIES.map((granularity) => (
        <div key={granularity.title} style={{ marginBottom: "32px" }}>
          <h4 style={{ margin: "0 0 8px" }}>{granularity.title}</h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${GRANULARITY_LOCALES.length}, 1fr)`,
              gap: "16px",
            }}
          >
            {GRANULARITY_LOCALES.map((locale) => {
              const scaleId = `g-${granularity.title}-${locale}`;
              const scales: PlotScaleConfig[] = [
                {
                  id: scaleId,
                  axis: { position: "bottom", size: 80 },
                  origin: "x",
                  min: granularity.min,
                  max: granularity.max,
                },
              ];
              return (
                <div key={locale}>
                  <p
                    style={{
                      color: "#888",
                      fontSize: "12px",
                      margin: "0 0 4px",
                    }}
                  >
                    <code>{locale}</code>
                  </p>
                  <CanPlot
                    style={{ width: "100%", height: "90px" }}
                    configuration={{
                      padding: { bottom: 0, left: 30, right: 30, top: 0 },
                      scales,
                    }}
                  >
                    <XTicks
                      scaleId={scaleId}
                      ticks={makeTimeTicks({ locale, timeZone: "UTC" })}
                    />
                  </CanPlot>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const CustomLocaleFormatter: Story = {
  render: () => {
    const scaleId = "custom";
    const scales: PlotScaleConfig[] = [
      {
        id: scaleId,
        axis: { position: "bottom", size: 60 },
        origin: "x",
        min: refPoint - weekMs,
        max: refPoint,
      },
      {
        id: "y",
        axis: { position: "left", size: 50 },
        origin: "y",
        min: 0,
        max: 100,
      },
    ];

    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h2 style={{ marginBottom: "4px" }}>Custom Locale Formatter</h2>
        <p style={{ color: "#666", fontSize: "13px", margin: "0 0 24px" }}>
          A custom formatter built with <code>makeTimeTickFormat</code> lets you
          pick the locale, time zone and whether the time-zone abbreviation is
          shown, independently of the tick generator.
        </p>
        <CanPlot
          style={{ width: "100%", height: "300px" }}
          configuration={{
            padding: { bottom: 20, left: 20, right: 20, top: 20 },
            scales,
          }}
        >
          <XTicks
            scaleId={scaleId}
            ticks={makeTimeTicks({
              timeZone: "Europe/Warsaw",
              formatter: makeTimeTickFormat({
                locale: "pl-PL",
                timeZone: "Europe/Warsaw",
                showTimezone: true,
              }),
            })}
          />
          <YTicks scaleId="y" ticks={makeLinearTicks()} />
          <LinePlot
            data={sampleData}
            xScaleId={scaleId}
            yScaleId="y"
            style={{ strokeStyle: "#e8590c", lineWidth: 2 }}
          />
        </CanPlot>
      </div>
    );
  },
};

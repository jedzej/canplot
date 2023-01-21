import { DEFAULT_SPLIT_SPACE, DEFAULT_TIMEZONE } from "./defaults";
import { PlotAxis } from "./types";
const millisecond = 1;
const second = 1000 * millisecond;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const month = 30 * day;
const year = 365 * day;

type TimeUnit =
  | "milliseconds"
  | "seconds"
  | "minutes"
  | "hours"
  | "days"
  | "months"
  | "years";

type Duration = [number, TimeUnit];

const TIME_INCRS: Duration[] = [
  // second divisors
  [1, "milliseconds"],
  [2, "milliseconds"],
  [5, "milliseconds"],
  [10, "milliseconds"],
  [20, "milliseconds"],
  [50, "milliseconds"],
  [100, "milliseconds"],
  [200, "milliseconds"],
  [500, "milliseconds"],
  // minute divisors
  [1, "seconds"],
  [5, "seconds"],
  [10, "seconds"],
  [15, "seconds"],
  [30, "seconds"],
  // hour divisors
  [1, "minutes"],
  [5, "minutes"],
  [10, "minutes"],
  [15, "minutes"],
  [30, "minutes"],
  // day divisors
  [1, "hours"],
  [2, "hours"],
  [3, "hours"],
  [4, "hours"],
  [6, "hours"],
  [8, "hours"],
  [12, "hours"],
  // month divisors
  [1, "days"],
  [3, "days"],
  [5, "days"],
  [7, "days"],
  [10, "days"],
  [15, "days"],
  // year divisors
  [1, "months"],
  [2, "months"],
  [3, "months"],
  [4, "months"],
  [6, "months"],
  // century divisors
  [1, "years"],
  [2, "years"],
  [5, "years"],
  [10, "years"],
  [25, "years"],
  [50, "years"],
  [100, "years"],
];

const durationToMilliseconds = (duration: Duration): number => {
  const [value, unit] = duration;
  switch (unit) {
    case "milliseconds":
      return value;
    case "seconds":
      return value * second;
    case "minutes":
      return value * minute;
    case "hours":
      return value * hour;
    case "days":
      return value * day;
    case "months":
      return value * month;
    case "years":
      return value * year;
  }
};

const addUTCMilliseconds = (date: number | Date, deltaMilliseconds: number) => {
  const result = new Date(date);
  result.setUTCMilliseconds(result.getUTCMilliseconds() + deltaMilliseconds);
  return result.getTime();
};

const addUTCSeconds = (date: number | Date, deltaSeconds: number) => {
  const result = new Date(date);
  result.setUTCSeconds(result.getUTCSeconds() + deltaSeconds);
  return result.getTime();
};

const addUTCMinutes = (date: number | Date, deltaMinutes: number) => {
  const result = new Date(date);
  result.setUTCMinutes(result.getUTCMinutes() + deltaMinutes);
  return result.getTime();
};

const addUTCHours = (date: number | Date, deltaHours: number) => {
  const result = new Date(date);
  result.setUTCHours(result.getUTCHours() + deltaHours);
  return result.getTime();
};

const addUTCDays = (date: number | Date, deltaDays: number) => {
  const result = new Date(date);
  result.setUTCDate(result.getUTCDate() + deltaDays);
  return result.getTime();
};

const addUTCMonths = (date: number | Date, deltaMonths: number) => {
  const result = new Date(date);
  result.setUTCMonth(result.getUTCMonth() + deltaMonths);
  return result.getTime();
};

const addUTC = (date: number | Date, delta: Duration): number => {
  const [deltaValue, deltaUnit] = delta;
  switch (deltaUnit) {
    case "milliseconds":
      return addUTCMilliseconds(date, deltaValue);
    case "seconds":
      return addUTCSeconds(date, deltaValue);
    case "minutes":
      return addUTCMinutes(date, deltaValue);
    case "hours":
      return addUTCHours(date, deltaValue);
    case "days":
      return addUTCDays(date, deltaValue);
    case "months":
      return addUTCMonths(date, deltaValue);
    case "years":
      return addUTCMonths(date, deltaValue * 12);
  }
};

function getTimezoneOffsetHours(atTime: Date | number, timeZone: string) {
  const date = new Date(atTime);
  const localizedTime = new Date(date.toLocaleString("en-US", { timeZone }));
  const utcTime = new Date(date.toLocaleString("en-US", { timeZone: "UTC" }));
  return (localizedTime.getTime() - utcTime.getTime()) / (60 * 60 * 1000);
}

const makeFirstTick = (
  minDate: number,
  incr: Duration,
  timeZone: string = "UTC"
): number => {
  const [incrValue, incrUnit] = incr;
  let result = new Date(minDate);
  const setTimeToMidnight = () => {
    result.setUTCHours(-getTimezoneOffsetHours(result, timeZone), 0, 0, 0);
  };
  switch (incrUnit) {
    case "milliseconds":
      result.setUTCMilliseconds(
        Math.ceil(result.getUTCMilliseconds() / incrValue) * incrValue
      );
      break;
    case "seconds":
      result.setUTCSeconds(
        Math.ceil(result.getUTCSeconds() / incrValue) * incrValue,
        0
      );
      break;
    case "minutes":
      result.setUTCMinutes(
        Math.ceil(result.getUTCMinutes() / incrValue) * incrValue,
        0,
        0
      );
      break;
    case "hours":
      result.setUTCHours(
        Math.ceil(result.getUTCHours() / incrValue) * incrValue,
        0,
        0,
        0
      );
      break;
    case "days":
    case "months":
    case "years":
      if (incrUnit === "months") {
        result.setUTCDate(1);
      } else if (incrUnit === "years") {
        result.setUTCMonth(0, 1);
      }
      setTimeToMidnight();
      if (result.getTime() < minDate) {
        result = new Date(addUTC(result, [1, incrUnit]));
      }
      break;
  }
  return result.getTime();
};

type GenTimeTicksOpts = {
  timeZone?: string;
  space?: number;
};

export const genTimeTicks = ({
  timeZone = DEFAULT_TIMEZONE,
  space = DEFAULT_SPLIT_SPACE,
}: GenTimeTicksOpts): PlotAxis["genTicks"] => {
  return ({ drawContext, scale }) => {
    if (scale.limits.autorange) {
      return [];
    }
    const splitsCount = Math.floor(drawContext.chartArea.width / space) + 1;
    const range = scale.limits.fixed.max - scale.limits.fixed.min;
    const splitDistance = range / splitsCount;
    const [incrValue, incrUnit] = TIME_INCRS.find(
      (a) => durationToMilliseconds(a) >= splitDistance
    ) ?? [1, "milliseconds"];

    const firstTick = makeFirstTick(
      scale.limits.fixed.min,
      [incrValue, incrUnit],
      timeZone
    );
    const firstTickOffset = getTimezoneOffsetHours(firstTick, timeZone);

    const splits: number[] = [firstTick];

    let candidate: number;
    while (true) {
      switch (incrUnit) {
        case "milliseconds":
        case "seconds":
        case "minutes":
        case "hours": {
          candidate = addUTC(firstTick, [splits.length * incrValue, incrUnit]);
          break;
        }
        case "days": {
          const tickNoDST = addUTC(firstTick, [
            splits.length * incrValue,
            incrUnit,
          ]);
          candidate = addUTC(tickNoDST, [
            firstTickOffset - getTimezoneOffsetHours(tickNoDST, timeZone),
            "hours",
          ]);
        }
        case "months":
        case "years": {
          const tickNoDST = addUTC(
            addUTC(addUTC(firstTick, [firstTickOffset, "hours"]), [
              splits.length * incrValue,
              incrUnit,
            ]),
            [-firstTickOffset, "hours"]
          );
          candidate = addUTC(tickNoDST, [
            firstTickOffset - getTimezoneOffsetHours(tickNoDST, timeZone),
            "hours",
          ]);
          break;
        }
      }
      if (candidate > scale.limits.fixed.max) {
        break;
      }
      splits.push(candidate);
    }

    return splits;
  };
};

const isTimeFormatPartDifferent = (
  a: Intl.DateTimeFormatPart[],
  b: Intl.DateTimeFormatPart[],
  type: Intl.DateTimeFormatPart["type"]
) => {
  return (
    a.find((candidate) => candidate.type === type)?.value !==
    b.find((candidate) => candidate.type === type)?.value
  );
};

type MakeTimeTickFormatOpts = {
  timeZone?: string;
};

export const makeTimeTickFormat = ({
  timeZone = DEFAULT_TIMEZONE,
}: MakeTimeTickFormatOpts): PlotAxis["tickFormat"] => {
  const formatter = new Intl.DateTimeFormat("en", {
    year: "numeric",
    day: "numeric",
    month: "short",
    hour: "numeric",
    hourCycle: "h23",
    minute: "numeric",
    second: "numeric",
    fractionalSecondDigits: 3,
    timeZoneName: "short",
    timeZone,
  });
  return ({ ticks }) => {
    const splitMs = ticks[1] - ticks[0];
    const showHours = splitMs < durationToMilliseconds([1, "days"]);
    const showSeconds = splitMs < durationToMilliseconds([1, "minutes"]);
    const showMilliseconds = splitMs < durationToMilliseconds([1, "seconds"]);

    return ticks
      .map((tick) => {
        return formatter.formatToParts(new Date(tick));
      })
      .map((curr, index, arr) => {
        console.log(curr.find((a) => a.type === "timeZoneName")?.value);
        const prev = arr[index - 1];
        const newYear =
          index === 0 || isTimeFormatPartDifferent(curr, prev, "year");
        const newDay =
          index === 0 || isTimeFormatPartDifferent(curr, prev, "day");
        const newMonth =
          index === 0 || isTimeFormatPartDifferent(curr, prev, "month");
        const newHour =
          index === 0 || isTimeFormatPartDifferent(curr, prev, "hour");
        const newTimeZoneName =
          index === 0 || isTimeFormatPartDifferent(curr, prev, "timeZoneName");
        const newMinute =
          index === 0 || isTimeFormatPartDifferent(curr, prev, "minute");
        const newSecond =
          index === 0 || isTimeFormatPartDifferent(curr, prev, "second");
        const newMillisecond =
          index === 0 ||
          isTimeFormatPartDifferent(curr, prev, "fractionalSecond");

        const visibleParts: (string | undefined)[] = [];
        if (
          showHours &&
          (newHour ||
            newMinute ||
            newTimeZoneName ||
            newSecond ||
            newMillisecond)
        ) {
          const h = curr.find((a) => a.type === "hour")?.value;
          const m = curr.find((a) => a.type === "minute")?.value;
          const tz = curr.find((a) => a.type === "timeZoneName")?.value;
          let secondsPart = "";
          if (showSeconds) {
            const s = curr.find((a) => a.type === "second")?.value;
            const ms = curr.find((a) => a.type === "fractionalSecond")?.value;
            secondsPart = `:${s}` + (showMilliseconds ? `.${ms}` : "");
          }
          visibleParts.push(
            `${h}:${m}${secondsPart}` + (newTimeZoneName ? ` ${tz}` : "")
          );
        }
        if (newDay || newMonth) {
          visibleParts.push(
            [
              curr.find((a) => a.type === "month")?.value,
              newDay && curr.find((a) => a.type === "day")?.value,
            ]
              .filter(Boolean)
              .join(" ")
          );
        }
        if (newYear) {
          visibleParts.push(curr.find((a) => a.type === "year")?.value);
        }

        return visibleParts.filter((a) => a).join("\n");
      });
  };
};

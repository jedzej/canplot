import { DrawContext, Scale, SeriesBase } from "./types";
const milisecond = 1;
const second = 1000 * milisecond;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const week = 7 * day;
const month = 30 * day;
const year = 365 * day;
type TimeUnit =
  | "miliseconds"
  | "seconds"
  | "minutes"
  | "hours"
  | "days"
  | "months"
  | "years";

type Duration = [number, TimeUnit];

const TIME_INCRS: Duration[] = [
  // second divisors
  [1, "miliseconds"],
  [2, "miliseconds"],
  [5, "miliseconds"],
  [10, "miliseconds"],
  [20, "miliseconds"],
  [50, "miliseconds"],
  [100, "miliseconds"],
  [200, "miliseconds"],
  [500, "miliseconds"],
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
  // month divisors TODO: need more?
  [1, "days"],
  [2, "days"],
  [3, "days"],
  [5, "days"],
  [7, "days"],
  [10, "days"],
  [15, "days"],
  // year divisors (# months, approx)
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

const durationToMiliseconds = (duration: Duration): number => {
  const [value, unit] = duration;
  switch (unit) {
    case "miliseconds":
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

const addUTCMiliseconds = (date: number | Date, deltaMiliseconds: number) => {
  const result = new Date(date);
  result.setUTCMilliseconds(result.getUTCMilliseconds() + deltaMiliseconds);
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

const space = 60;

const addUTC = (date: number | Date, delta: Duration): number => {
  const [deltaValue, deltaUnit] = delta;
  switch (deltaUnit) {
    case "miliseconds":
      return addUTCMiliseconds(date, deltaValue);
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
  const result = new Date(minDate);
  switch (incrUnit) {
    case "miliseconds":
      result.setUTCMilliseconds(
        Math.floor(result.getUTCMilliseconds() / incrValue) * incrValue
      );
      break;
    case "seconds":
      result.setUTCSeconds(
        Math.floor(result.getUTCSeconds() / incrValue) * incrValue,
        0
      );
      break;
    case "minutes":
      result.setUTCMinutes(
        Math.floor(result.getUTCMinutes() / incrValue) * incrValue,
        0,
        0
      );
      break;
    case "hours":
      result.setUTCHours(
        Math.floor(result.getUTCHours() / incrValue) * incrValue,
        0,
        0,
        0
      );
      break;
    case "days":
      result.setUTCDate(
        Math.floor(result.getUTCDate() / incrValue) * incrValue
      );
      break;
    case "months":
      result.setUTCMonth(
        Math.floor(result.getUTCMonth() / incrValue) * incrValue,
        0
      );
      break;
    case "years":
      result.setUTCFullYear(
        Math.floor(result.getUTCFullYear() / incrValue) * incrValue,
        0,
        0
      );
      break;
  }
  switch (incrUnit) {
    case "years":
    case "months":
    case "days":
      result.setUTCHours(-getTimezoneOffsetHours(result, timeZone), 0, 0, 0);
      break;
  }
  if (result.getTime() < minDate) {
    return addUTC(result, incr);
  }
  return result.getTime();
};

export const genTimeTicks =
  <S extends SeriesBase = SeriesBase>(timeZone: string = "UTC") =>
  (drawContext: DrawContext<S>, scale: Scale) => {
    if (scale.limits.autorange) {
      return [];
    }
    const splitsCount = Math.floor(drawContext.chartArea.width / space) + 1;
    const range = scale.limits.fixed.max - scale.limits.fixed.min;
    const splitDistance = range / splitsCount;
    const [incrValue, incrUnit] = TIME_INCRS.find(
      (a) => durationToMiliseconds(a) >= splitDistance
    ) ?? [1, "miliseconds"];

    const firstTick = makeFirstTick(
      scale.limits.fixed.min,
      [incrValue, incrUnit],
      timeZone
    );
    const firstTickOffset = getTimezoneOffsetHours(firstTick, timeZone);

    const splits: number[] = [firstTick];
    console.log(splits);

    while (splits[splits.length - 1] < scale.limits.fixed.max) {
      const ticknoDST = addUTC(firstTick, [
        splits.length * incrValue,
        incrUnit,
      ]);
      const tickDST = addUTC(ticknoDST, [
        firstTickOffset - getTimezoneOffsetHours(ticknoDST, timeZone),
        "hours",
      ]);
      splits.push(tickDST);
    }

    return splits;
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
export const genTickFormat = <S extends SeriesBase = SeriesBase>(
  timeZone: string = "UTC"
) => {
  const formatter = new Intl.DateTimeFormat("en", {
    year: "numeric",
    day: "numeric",
    month: "short",
    hour: "numeric",
    hourCycle: "h23",
    minute: "numeric",
    second: "numeric",
    fractionalSecondDigits: 3,
    timeZone,
  });
  return (drawContext: DrawContext<S>, scale: Scale, ticks: number[]) => {
    const date = new Date(ticks[0]);
    const splitMs = ticks[1] - ticks[0];
    const showHours = true || splitMs < durationToMiliseconds([1, "days"]);
    const showSeconds = true || splitMs < durationToMiliseconds([1, "minutes"]);
    const showMiliseconds =
      true || splitMs < durationToMiliseconds([1, "seconds"]);

    return ticks
      .map((tick, i) => {
        return formatter.formatToParts(new Date(tick));
      })
      .map((curr, index, arr) => {
        const prev = arr[index - 1];
        const newYear =
          index === 0 || isTimeFormatPartDifferent(curr, prev, "year");
        const newDay =
          index === 0 || isTimeFormatPartDifferent(curr, prev, "day");
        const newHour =
          showHours &&
          (index === 0 || isTimeFormatPartDifferent(curr, prev, "hour"));
        const newMinute =
          showHours &&
          (index === 0 || isTimeFormatPartDifferent(curr, prev, "minute"));
        const newSecond =
          index === 0 || isTimeFormatPartDifferent(curr, prev, "second");
        const newMilisecond =
          index === 0 ||
          isTimeFormatPartDifferent(curr, prev, "fractionalSecond");

        const visibleParts: (string | undefined)[] = [];
        if (newHour || newMinute) {
          let item = `${curr.find((a) => a.type === "hour")?.value}:${
            curr.find((a) => a.type === "minute")?.value
          }`;
          if (showSeconds) {
            item += `:${curr.find((a) => a.type === "second")?.value}`;
            if (showMiliseconds) {
              item += `.${
                curr.find((a) => a.type === "fractionalSecond")?.value
              }`;
            }
          }
          visibleParts.push(item);
        }
        if (newDay) {
          visibleParts.push(
            `${curr.find((a) => a.type === "month")?.value} ${
              curr.find((a) => a.type === "day")?.value
            }`
          );
        }
        if (newYear) {
          visibleParts.push(curr.find((a) => a.type === "year")?.value);
        }

        return visibleParts.filter((a) => a).join("\n");
      });
  };
};

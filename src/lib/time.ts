import { DrawContext, Scale, SeriesBase } from "./types";
const milisecond = 1;
const second = 1000 * milisecond;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const week = 7 * day;
const month = 30 * day;
const year = 365 * day;

const TIME_INCRS = [
  // milisecond divisors
  milisecond,
  milisecond * 2,
  milisecond * 5,
  milisecond * 10,
  milisecond * 20,
  milisecond * 50,
  milisecond * 100,
  milisecond * 200,
  milisecond * 500,
  // minute divisors (# of secs)
  second,
  second * 5,
  second * 10,
  second * 15,
  second * 30,
  // hour divisors (# of mins)
  minute,
  minute * 5,
  minute * 10,
  minute * 15,
  minute * 30,
  // day divisors (# of hrs)
  hour,
  hour * 2,
  hour * 3,
  hour * 4,
  hour * 6,
  hour * 8,
  hour * 12,
  // month divisors TODO: need more?
  day,
  day * 2,
  day * 3,
  day * 4,
  day * 5,
  day * 6,
  day * 7,
  day * 8,
  day * 9,
  day * 10,
  day * 15,
  // year divisors (# months, approx)
  month,
  month * 2,
  month * 3,
  month * 4,
  month * 6,
  // century divisors
  year,
  year * 2,
  year * 5,
  year * 10,
  year * 25,
  year * 50,
  year * 100,
];

const space = 60;

export const genTimeTicks = <S extends SeriesBase = SeriesBase>(
  drawContext: DrawContext<S>,
  scale: Scale
) => {
  if (scale.limits.autorange) {
    return [];
  }
  const splitsCount = Math.floor(drawContext.chartArea.width / space) + 1;
  const range = scale.limits.fixed.max - scale.limits.fixed.min;
  const splitDistance = range / splitsCount;
  const incr = TIME_INCRS.find((a) => a >= splitDistance) ?? 1;

  const splits: number[] = [scale.limits.fixed.min];

  while (splits[splits.length - 1] < scale.limits.fixed.max) {
    splits.push(splits[splits.length - 1] + incr);
  }

  return splits;
};

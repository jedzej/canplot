export const clamp = (val: number, min: number, max: number) => {
  return Math.min(Math.max(val, min), max);
};

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? DeepPartial<U>[]
    : T[P] extends Readonly<infer U>[]
    ? Readonly<DeepPartial<U>>[]
    : DeepPartial<T[P]>;
};

export const sum = (input: (number | undefined)[]): number => {
  return input.reduce<number>((a, b) => a + (b ?? 0), 0);
};

export const findClosestIndex = (arr: number[], val: number) => {
  let closestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] - val) < Math.abs(arr[closestIndex] - val)) {
      closestIndex = i;
    }
  }
  return closestIndex;
};
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

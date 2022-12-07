import merge from "deepmerge";

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

export function deepMerge<T extends Record<string, unknown>>(
  obj1: T,
  obj2: DeepPartial<T>
): T {
  return merge(obj1 as any, obj2 as any, {
    arrayMerge: (target, source, options) => {
      const destination = target.slice();

      if (!options?.isMergeableObject?.(source[0])) {
        source.forEach((item, index) => {
          destination[index] = item;
        });
      } else {
        source.forEach((item, index) => {
          if (options?.isMergeableObject?.(item)) {
            destination[index] = merge(target[index], item, options);
          }
        });
      }
      return destination;
    },
  });
}

export const sum = (input: (number | undefined)[]): number => {
  return input.reduce<number>((a, b) => a + (b ?? 0), 0);
};

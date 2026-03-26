import { describe, it, expect } from "vitest";
import { clamp, sum, findClosestIndex } from "./dataUtils";

describe("clamp", () => {
  it("returns value when within range", () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it("returns min when value is below", () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  it("returns max when value is above", () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  it("returns the value when min equals max", () => {
    expect(clamp(5, 3, 3)).toBe(3);
    expect(clamp(3, 3, 3)).toBe(3);
  });

  it("works with negative ranges", () => {
    expect(clamp(-5, -10, -1)).toBe(-5);
    expect(clamp(0, -10, -1)).toBe(-1);
    expect(clamp(-20, -10, -1)).toBe(-10);
  });
});

describe("sum", () => {
  it("sums an array of numbers", () => {
    expect(sum([1, 2, 3])).toBe(6);
  });

  it("treats undefined values as 0", () => {
    expect(sum([1, undefined, 3])).toBe(4);
  });

  it("returns 0 for an empty array", () => {
    expect(sum([])).toBe(0);
  });

  it("returns 0 when all values are undefined", () => {
    expect(sum([undefined, undefined, undefined])).toBe(0);
  });
});

describe("findClosestIndex", () => {
  it("returns index of exact match", () => {
    expect(findClosestIndex([10, 20, 30], 20)).toBe(1);
  });

  it("returns index of closest element when between values", () => {
    expect(findClosestIndex([10, 20, 30], 22)).toBe(1);
    expect(findClosestIndex([10, 20, 30], 28)).toBe(2);
  });

  it("returns 0 when value is below all elements", () => {
    expect(findClosestIndex([10, 20, 30], -100)).toBe(0);
  });

  it("returns last index when value is above all elements", () => {
    expect(findClosestIndex([10, 20, 30], 100)).toBe(2);
  });

  it("works with a single-element array", () => {
    expect(findClosestIndex([42], 999)).toBe(0);
  });
});

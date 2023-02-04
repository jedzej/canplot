import { expect } from "vitest";

import { toMatchImageSnapshot } from "jest-image-snapshot";

declare global {
  namespace jest {
    interface Matchers<R> {
      toMatchImageSnapshot(): R;
    }
  }
}

expect.extend({ toMatchImageSnapshot });

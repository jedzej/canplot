import { Dimensions, Size } from "./types";

const almostEqual = (a: number, b: number) => {
  return Math.abs(a - b) < 1;
};

export const makeSizeManager = ({
  onResize,
}: {
  onResize: (size: Size) => void;
}) => {
  const lastDimensions: Required<Dimensions> = {
    width: "auto",
    height: "auto",
  };
  const lastSize: Size = {
    width: 0,
    height: 0,
  };
  const elRef = {
    current: undefined as HTMLCanvasElement | undefined,
  };

  const roRef = {
    current: undefined as ResizeObserver | undefined,
  };

  const updateSize = (el: HTMLCanvasElement, size: Size) => {
    const dpr = window.devicePixelRatio;
    const dprAwareWidth = dpr * size.width;
    const dprAwareHeight = dpr * size.height;

    const shouldUpdateCss =
      !almostEqual(size.height, lastSize.height) ||
      !almostEqual(size.width, lastSize.width);
    const shouldUpdateHW =
      !almostEqual(el.width, dprAwareWidth) ||
      !almostEqual(el.height, dprAwareHeight);

    if (shouldUpdateCss) {
      console.log("shouldUpdateCss", size, lastSize);
      el.style.width = `${size.width}px`;
      el.style.height = `${size.height}px`;
    }
    if (shouldUpdateHW) {
      console.log(
        "shouldUpdateHw",
        el.width,
        dprAwareWidth,
        el.height,
        dprAwareHeight
      );
      el.width = dprAwareWidth;
      el.height = dprAwareHeight;
    }
    lastSize.width = size.width;
    lastSize.height = size.height;
  };

  const applyDimensions = (
    el: HTMLCanvasElement,
    dimensions?: Dimensions,
    parentSize?: Size
  ) => {
    const dimW = dimensions?.width ?? "auto";
    const dimH = dimensions?.height ?? "auto";
    if (elRef.current !== el) {
      roRef.current?.disconnect();
      roRef.current = undefined;
    }
    elRef.current = el;
    if (typeof dimW === "number" && typeof dimH === "number") {
      updateSize(elRef.current, { width: dimW, height: dimH });
      return;
    }
    if (!roRef.current) {
      roRef.current = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect;
          onResize({ width, height });
        }
      });
      roRef.current.observe(elRef.current.parentElement!);
    }
    const sanitizedParentSize = parentSize ?? getParentSize(el);
    lastDimensions.width = dimW;
    lastDimensions.height = dimH;
    updateSize(el, {
      width: dimW === "auto" ? sanitizedParentSize.width : dimW,
      height: dimH === "auto" ? sanitizedParentSize.height : dimH,
    });
  };

  const getCanvasSize = () => {
    return lastSize;
  };

  const deinit = () => {
    roRef.current?.disconnect();
    roRef.current = undefined;
    elRef.current = undefined;
  };

  return {
    applyDimensions,
    getCanvasSize,
    deinit,
  };
};

const getParentSize = (canvas: HTMLCanvasElement): Size => {
  if (!canvas.parentElement) {
    throw new Error("Canvas element must be attached to the DOM");
  }
  const parentRect = canvas.parentElement.getBoundingClientRect();
  return {
    width: parentRect.width,
    height: parentRect.height,
  };
};

import { makePlugin } from "../makePlot";
import { Frame } from "../types";

const defaultPlaceElement = ({
  frame,
  element,
}: {
  frame: Frame;
  element: HTMLDivElement;
}) => {
  const width = `${frame.chartArea.width}px`;
  const height = `${frame.chartArea.height}px`;
  const transform = `translate(${frame.chartArea.x}px, ${frame.chartArea.y}px)`;
  element.style.width = `${frame.chartArea.width}px`;
  element.style.height = `${frame.chartArea.height}px`;
  element.style.transform = `translate(${frame.chartArea.x}px, ${frame.chartArea.y}px)`;
  if (element.style.width !== width) {
    element.style.width = width;
  }
  if (element.style.height !== height) {
    element.style.height = height;
  }
  if (element.style.transform !== transform) {
    element.style.transform = transform;
  }
};

export const domOverlayPlugin = ({
  captureCursorEvents = false,
  className,
  overlayElement,
  placeElement,
}: {
  captureCursorEvents?: boolean;
  className?: string;
  overlayElement?: HTMLDivElement;
  placeElement?: (params: { frame: Frame; element: HTMLDivElement }) => void;
}) =>
  makePlugin()
    .output<{ element: HTMLDivElement }>()
    .make(({ ctx }) => {
      const shouldInitializeOwnElement = !overlayElement;
      let element = overlayElement ?? document.createElement("div");
      if (shouldInitializeOwnElement) {
        element.style.position = "absolute";
        element.className = className ?? "";
        if (!captureCursorEvents) {
          element.style.pointerEvents = "none";
        }

        ctx.canvas.after(element);
      }

      return {
        defaultOutput: {
          element,
        },
        afterDraw({ frame }) {
          (placeElement ?? defaultPlaceElement)({ frame, element });
        },
      };
    });

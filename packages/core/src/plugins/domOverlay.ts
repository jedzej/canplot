import { Frame, MakePlugin } from "../types";

const defaultPlaceElement = ({
  frame,
  element,
}: {
  frame: Frame;
  element: HTMLDivElement;
}) => {
  element.style.width = `${frame.chartArea.width}px`;
  element.style.height = `${frame.chartArea.height}px`;
  element.style.transform = `translate(${frame.chartArea.x}px, ${frame.chartArea.y}px)`;
};

export const domOverlayPlugin =
  <ID extends string = "overlay">({
    id = "overlay" as ID,
    captureCursorEvents = false,
    className,
    overlayElement,
    placeElement,
  }: {
    id?: ID;
    captureCursorEvents?: boolean;
    className?: string;
    overlayElement?: HTMLDivElement;
    placeElement?: (params: { frame: Frame; element: HTMLDivElement }) => void;
  }): MakePlugin<ID, { element: HTMLDivElement }> =>
  ({ ctx }) => {
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
      id,
      initialState: {
        element,
      },
      afterDraw({ frame }) {
        (placeElement ?? defaultPlaceElement)({ frame, element });
      },
    };
  };

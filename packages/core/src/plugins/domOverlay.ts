import { Frame } from "../types";

export const positionDOMOverlay = ({
  frame,
  element,
}: {
  frame: Frame;
  element: HTMLElement;
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

import { getScale, posToVal, valToPos } from "../helpers";
import type { PlotDrawFrame, PlotDrawScaleConfig } from "../types";
import type {
  InteractionsEventPointerPosition,
  PointerSyncPosition,
  ScaledSelectionRange,
} from "./types";

export const makePointerSyncPosition = (
  event: Pick<MouseEvent, "clientX" | "clientY">,
  rect: DOMRect | undefined,
  frame: PlotDrawFrame,
  xViaScaleId: string | undefined,
  yViaScaleId: string | undefined
):
  | { pointerSyncPosition: PointerSyncPosition; cssX: number; cssY: number }
  | undefined => {
  if (!rect) return;
  const effectiveXSyncViaScaleId =
    xViaScaleId ?? frame.scales.find((s) => s.origin === "x")?.id;
  const effectiveYSyncViaScaleId =
    yViaScaleId ?? frame.scales.find((s) => s.origin === "y")?.id;

  if (!effectiveXSyncViaScaleId || !effectiveYSyncViaScaleId) {
    return undefined;
  }

  const cssX = event.clientX - rect.left;
  const x: PointerSyncPosition["x"] = {
    scaleId: effectiveXSyncViaScaleId,
    value: posToVal(frame, cssX, effectiveXSyncViaScaleId, "css"),
  };

  const cssY = event.clientY - rect.top;
  const y: PointerSyncPosition["y"] = {
    scaleId: effectiveYSyncViaScaleId,
    value: posToVal(frame, cssY, effectiveYSyncViaScaleId, "css"),
  };

  return { pointerSyncPosition: { x, y }, cssX, cssY };
};

export const pointerSyncPositionToInteractionsPosition = (
  pointerSyncPosition: PointerSyncPosition,
  frame: PlotDrawFrame
): InteractionsEventPointerPosition | undefined => {
  const cssX = pointerSyncPosition.x
    ? valToPos(
        frame,
        pointerSyncPosition.x.value,
        pointerSyncPosition.x.scaleId,
        "css"
      )
    : 0;
  const cssY = pointerSyncPosition.y
    ? valToPos(
        frame,
        pointerSyncPosition.y.value,
        pointerSyncPosition.y.scaleId,
        "css"
      )
    : 0;
  return {
    cssX,
    cssY,
    scaled: Object.fromEntries(
      frame.scales.map((scale) => {
        const pos = scale.origin === "y" ? cssY : cssX;

        return [scale.id, posToVal(frame, pos, scale.id, "css")];
      })
    ),
  };
};

export const extrapolateScaledSelectionRange = (
  origin: PlotDrawScaleConfig["origin"],
  selectionRange: ScaledSelectionRange | undefined,
  frame: PlotDrawFrame
): { fromCSS: number; toCSS: number; scaled: ScaledSelectionRange[] } => {
  if (!selectionRange) {
    const fromCSS =
      origin === "x" ? frame.chartAreaCSS.x : frame.chartAreaCSS.y;
    const toCSS =
      origin === "x"
        ? frame.chartAreaCSS.x + frame.chartAreaCSS.width
        : frame.chartAreaCSS.y + frame.chartAreaCSS.height;
    return {
      fromCSS,
      toCSS,
      scaled: frame.scales.flatMap((scale): ScaledSelectionRange[] => {
        if (scale.origin !== origin) {
          return [];
        }
        const { min, max } = getScale(frame, scale.id);
        return [{ scaleId: scale.id, from: min, to: max }];
      }),
    };
  }

  const fromCSS = valToPos(
    frame,
    selectionRange.from,
    selectionRange.scaleId,
    "css"
  );
  const toCSS = valToPos(
    frame,
    selectionRange.to,
    selectionRange.scaleId,
    "css"
  );
  const scaled: ScaledSelectionRange[] = frame.scales.flatMap(
    (scale): ScaledSelectionRange[] => {
      if (scale.origin !== origin) {
        return [];
      }
      const from = posToVal(frame, fromCSS, scale.id, "css");
      const to = posToVal(frame, toCSS, scale.id, "css");
      return [
        {
          scaleId: scale.id,
          from,
          to,
        },
      ];
    }
  );
  return {
    fromCSS,
    toCSS,
    scaled,
  };
};

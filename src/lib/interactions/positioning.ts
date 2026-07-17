import { posToVal, valFits, valToPos } from "../helpers";
import type { PlotDrawFrame, PlotDrawScaleConfig } from "../types";
import type {
  InteractionsEventPointerPosition,
  InteractionsSyncConfig,
  PointerSyncPosition,
  ScaledSelectionRange,
} from "./types";

export const makePointerSyncPosition = (
  event: Pick<MouseEvent, "clientX" | "clientY">,
  rect: DOMRect | undefined,
  frame: PlotDrawFrame,
  sync: InteractionsSyncConfig | undefined
):
  | { pointerSyncPosition: PointerSyncPosition; cssX: number; cssY: number }
  | undefined => {
  if (!rect) return;
  const effectiveXSyncViaScaleId =
    sync?.xViaScaleId ?? frame.scales.find((s) => s.origin === "x")?.id;
  const effectiveYSyncViaScaleId =
    sync?.yViaScaleId ?? frame.scales.find((s) => s.origin === "y")?.id;

  const cssX = event.clientX - rect.left;
  const x: PointerSyncPosition["x"] = effectiveXSyncViaScaleId
    ? (() => {
      const value = posToVal(
        frame,
        cssX,
        effectiveXSyncViaScaleId,
        "css"
      )!;
      return {
        scaleId: effectiveXSyncViaScaleId,
        value,
        normalized: sync?.xToNormalized?.(value) ?? null,
      };
    })()
    : null;

  const cssY = event.clientY - rect.top;
  const y: PointerSyncPosition["y"] = effectiveYSyncViaScaleId
    ? (() => {
      const value = posToVal(
        frame,
        cssY,
        effectiveYSyncViaScaleId,
        "css"
      )!;
      return {
        scaleId: effectiveYSyncViaScaleId,
        value,
        normalized: sync?.yToNormalized?.(value) ?? null,
      };
    })()
    : null;

  return { pointerSyncPosition: { x, y }, cssX, cssY };
};

const makeToNormalized = (
  sync: InteractionsSyncConfig | undefined
): InteractionsEventPointerPosition["toNormalized"] => {
  return (value, axis) => {
    const fn = axis === "x" ? sync?.xToNormalized : sync?.yToNormalized;
    return fn?.(value) ?? null;
  };
};

const makeFromNormalized = (
  sync: InteractionsSyncConfig | undefined
): InteractionsEventPointerPosition["fromNormalized"] => {
  return (normalized, axis) => {
    const fn = axis === "x" ? sync?.xFromNormalized : sync?.yFromNormalized;
    return fn?.(normalized) ?? null;
  };
};

export const pointerSyncPositionToInteractionsPosition = (
  pointerSyncPosition: PointerSyncPosition,
  frame: PlotDrawFrame,
  sync: InteractionsSyncConfig | undefined
): InteractionsEventPointerPosition | undefined => {
  const { x, y } = pointerSyncPosition;

  const resolveAxisCss = (
    axis: "x" | "y",
    source: PointerSyncPosition["x"] | PointerSyncPosition["y"]
  ): number | null => {
    if (!source) return null;
    const viaScaleId = axis === "x" ? sync?.xViaScaleId : sync?.yViaScaleId;
    const fromNormalized =
      axis === "x" ? sync?.xFromNormalized : sync?.yFromNormalized;

    // Preferred: normalized bridge.
    if (
      source.normalized !== null &&
      fromNormalized &&
      viaScaleId &&
      frame.scales.some((s) => s.id === viaScaleId)
    ) {
      const localValue = fromNormalized(source.normalized);
      if (localValue === null || !Number.isFinite(localValue)) {
        // fall through to matching-scale-id path
      } else if (!valFits(frame, localValue, viaScaleId)) {
        return null;
      } else {
        return valToPos(frame, localValue, viaScaleId, "css");
      }
    }

    // Fallback: matching source scale id in receiver frame.
    if (frame.scales.some((s) => s.id === source.scaleId)) {
      if (!valFits(frame, source.value, source.scaleId)) {
        return null;
      }
      return valToPos(frame, source.value, source.scaleId, "css");
    }

    return null;
  };

  const cssX = resolveAxisCss("x", x);
  const cssY = resolveAxisCss("y", y);

  return {
    cssX,
    cssY,
    scaled: Object.fromEntries(
      frame.scales.flatMap((scale) => {
        const pos = scale.origin === "y" ? cssY : cssX;
        if (pos === null) {
          return [];
        }

        return [[scale.id, posToVal(frame, pos, scale.id, "css")!]];
      })
    ),
    normalizedX: x?.normalized ?? null,
    normalizedY: y?.normalized ?? null,
    toNormalized: makeToNormalized(sync),
    fromNormalized: makeFromNormalized(sync),
  };
};

export const makeSpanSelectHelpers = (
  sync: InteractionsSyncConfig | undefined
): {
  toNormalized: (value: number, axis: "x" | "y") => number | null;
  fromNormalized: (normalized: number, axis: "x" | "y") => number | null;
} => {
  return {
    toNormalized: makeToNormalized(sync),
    fromNormalized: makeFromNormalized(sync),
  };
};

export const extrapolateScaledSelectionRange = (
  origin: PlotDrawScaleConfig["origin"],
  selectionRange: ScaledSelectionRange,
  frame: PlotDrawFrame
): {
  fromCSS: number;
  toCSS: number;
  scaled: ScaledSelectionRange[];
} | null => {
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
  if (fromCSS === null || toCSS === null) {
    return null;
  }
  const scaled: ScaledSelectionRange[] = frame.scales.flatMap(
    (scale): ScaledSelectionRange[] => {
      if (scale.origin !== origin) {
        return [];
      }
      const from = posToVal(frame, fromCSS, scale.id, "css");
      const to = posToVal(frame, toCSS, scale.id, "css");
      if (from === null || to === null) {
        return [];
      }
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

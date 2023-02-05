import { posToVal } from "../helpers";
import { Plot } from "../Plot";
import { PlotDrawFrame, PlotPlugin, PlotPluginConfig, Scale } from "../types";
import { clamp } from "../utils";

export type CursorPosition = {
  screen: {
    x: number;
    y: number;
  };
  canvas: {
    x: number;
    y: number;
  };
  scaled: Record<Scale["id"], number>;
};

type HoverEvent<S> = {
  plot: Plot;
  self: PlotPlugin<S>;
  frame: PlotDrawFrame;
  position?: CursorPosition;
};

type ClickEvent<S> = {
  plot: Plot;
  self: PlotPlugin<S>;
  frame: PlotDrawFrame;
  position: CursorPosition;
};

type SpanSelectEvent<S> = {
  phase: "start" | "move" | "end";
  plot: Plot;
  self: PlotPlugin<S>;
  frame: PlotDrawFrame;
  positionStart: CursorPosition;
  positionEnd: CursorPosition;
};

type ClickListener<S> = (event: ClickEvent<S>) => void;

type DblclickListener<S> = (event: ClickEvent<S>) => void;

type HoverListener<S> = (event: HoverEvent<S>) => void;

type SpanSelectListener<S> = (event: SpanSelectEvent<S>) => void;

const getPosition = (
  e: MouseEvent,
  frame: PlotDrawFrame,
  fallbackToBoundaries = false
): CursorPosition | undefined => {
  const rect = frame.ctx.canvas.getBoundingClientRect();
  const screen = {
    x: e.clientX,
    y: e.clientY,
  };
  const canvas = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
  const posX = e.clientX - rect.left - frame.chartArea.x;
  const posY = e.clientY - rect.top - frame.chartArea.y;

  const clampedPosX = clamp(posX, 0, frame.chartArea.width);
  const clampedPosY = clamp(posY, 0, frame.chartArea.height);

  if (!fallbackToBoundaries && (clampedPosX !== posX || clampedPosY !== posY)) {
    return undefined;
  }

  const scaled: Record<Scale["id"], number> = {};
  for (const scale of frame.inputParams.scales) {
    if (scale.id.startsWith("x-")) {
      scaled[scale.id] = posToVal(frame, clampedPosX, scale);
    } else {
      scaled[scale.id] = posToVal(frame, clampedPosY, scale);
    }
  }
  return {
    screen,
    canvas,
    scaled,
  };
};

type CursorPluginOptions<S> = {
  onSpanSelect?: SpanSelectListener<S>;
  onHover?: HoverListener<S>;
  onClick?: ClickListener<S>;
  onDblClick?: DblclickListener<S>;
  pluginOpts?: PlotPluginConfig<S>;
};

export const makeCursorPlugin = <S>(opts: CursorPluginOptions<S> = {}) => {
  let mouseMoveListener: ((e: MouseEvent) => void) | undefined = undefined;
  let mouseLeaveListener: ((e: MouseEvent) => void) | undefined = undefined;
  let mouseClickListener: ((e: MouseEvent) => void) | undefined = undefined;
  let mouseDblClickListener: ((e: MouseEvent) => void) | undefined = undefined;
  let mouseDownListener: ((e: MouseEvent) => void) | undefined = undefined;
  let mouseUpListener: ((e: MouseEvent) => void) | undefined = undefined;
  const hoverListeners = new Set<HoverListener<S>>(
    opts.onHover ? [opts.onHover] : []
  );
  const clickListeners = new Set<ClickListener<S>>(
    opts.onClick ? [opts.onClick] : []
  );
  const dblclickListeners = new Set<DblclickListener<S>>(
    opts.onDblClick ? [opts.onDblClick] : []
  );
  const spanSelectListeners = new Set<SpanSelectListener<S>>(
    opts.onSpanSelect ? [opts.onSpanSelect] : []
  );

  let positionStart: CursorPosition | undefined = undefined;

  let clickTimeout: number | undefined = undefined;

  const bindings: PlotPluginConfig<S> = {
    ...opts.pluginOpts,
    hooks: {
      ...opts.pluginOpts?.hooks,
      onInit({ plot, frame, self }) {
        const canvas = plot.getDrawContext().ctx.canvas;

        // mouse down
        mouseDownListener = (e: MouseEvent) => {
          if (spanSelectListeners.size === 0) return;
          const frame = plot.getDrawContext();

          positionStart = getPosition(e, frame);

          if (!positionStart) return;

          for (const listener of spanSelectListeners) {
            listener({
              phase: "start",
              plot,
              frame,
              positionStart,
              positionEnd: positionStart,
              self,
            });
          }
        };
        canvas.addEventListener("mousedown", mouseDownListener);

        // mouse move
        mouseMoveListener = (e: MouseEvent) => {
          if (hoverListeners.size === 0 && spanSelectListeners.size === 0)
            return;
          const frame = plot.getDrawContext();

          const position = getPosition(e, frame);

          for (const listener of hoverListeners) {
            listener({ plot, frame, position, self });
          }

          const positionEnd = getPosition(e, frame, true);

          if (!positionStart || !positionEnd) return;

          for (const listener of spanSelectListeners) {
            listener({
              phase: "move",
              plot,
              frame,
              self,
              positionStart,
              positionEnd,
            });
          }
        };
        canvas.addEventListener("mousemove", mouseMoveListener);

        // mouse up
        mouseUpListener = (e: MouseEvent) => {
          if (spanSelectListeners.size === 0) return;

          if (!positionStart) return;
          const frame = plot.getDrawContext();

          const positionEnd = getPosition(e, frame, true);

          if (!positionEnd) return;

          for (const listener of spanSelectListeners) {
            listener({
              phase: "end",
              plot,
              self,
              frame,
              positionStart,
              positionEnd,
            });
          }
          positionStart = undefined;
        };
        document.addEventListener("mouseup", mouseUpListener);

        // mouse leave
        mouseLeaveListener = () => {
          if (hoverListeners.size === 0) return;
          const frame = plot.getDrawContext();

          for (const listener of hoverListeners) {
            listener({ plot, frame, self });
          }
        };
        canvas.addEventListener("mouseleave", mouseLeaveListener);

        // click
        mouseClickListener = (e) => {
          if (clickTimeout) {
            clearTimeout(clickTimeout);
            clickTimeout = undefined;
            return;
          }
          // ignore double clicks
          if (e.detail > 1) {
            return;
          }
          clickTimeout = window.setTimeout(() => {
            clickTimeout = undefined;
            if (clickListeners.size === 0) return;
            const frame = plot.getDrawContext();

            const position = getPosition(e, frame);

            if (!position) return;

            for (const listener of clickListeners) {
              listener({ plot, frame, position, self });
            }
          }, 200);
        };
        canvas.addEventListener("click", mouseClickListener);

        // dblclick
        mouseDblClickListener = (e) => {
          if (dblclickListeners.size === 0) return;
          const frame = plot.getDrawContext();

          const position = getPosition(e, frame);

          if (!position) return;

          for (const listener of dblclickListeners) {
            listener({ plot, frame, position, self });
          }
        };
        canvas.addEventListener("dblclick", mouseDblClickListener);
        opts.pluginOpts?.hooks?.onInit?.({ plot, frame, self });
      },

      onDestroy({ plot, self }) {
        const canvas = plot.getDrawContext().ctx.canvas;
        if (mouseMoveListener) {
          canvas.removeEventListener("mousemove", mouseMoveListener);
          mouseMoveListener = undefined;
        }
        if (mouseLeaveListener) {
          canvas.removeEventListener("mouseleave", mouseLeaveListener);
          mouseLeaveListener = undefined;
        }
        if (mouseClickListener) {
          canvas.removeEventListener("click", mouseClickListener);
          mouseClickListener = undefined;
        }
        if (mouseDblClickListener) {
          canvas.removeEventListener("dblclick", mouseDblClickListener);
          mouseDblClickListener = undefined;
        }
        if (mouseDownListener) {
          canvas.removeEventListener("mousedown", mouseDownListener);
          mouseDownListener = undefined;
        }
        if (mouseUpListener) {
          document.removeEventListener("mouseup", mouseUpListener);
          mouseUpListener = undefined;
        }
        opts.pluginOpts?.hooks?.onDestroy?.({ plot, self });
      },
    },
  };

  return bindings;
};

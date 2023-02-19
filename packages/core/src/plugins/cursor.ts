import { posToVal } from "../helpers";
import { Plot } from "../Plot";
import {
  CustomFacet,
  PlotDrawFrame,
  PlotPlugin,
  PlotPluginConfig,
  Scale,
} from "../types";
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
  thisPlugin: PlotPlugin<S>;
  frame: PlotDrawFrame;
  position?: CursorPosition;
};

type ClickEvent<S> = {
  plot: Plot;
  thisPlugin: PlotPlugin<S>;
  frame: PlotDrawFrame;
  position: CursorPosition;
};

type SpanSelectEvent<S> = {
  phase: "start" | "move" | "end";
  plot: Plot;
  thisPlugin: PlotPlugin<S>;
  frame: PlotDrawFrame;
  spanStart: CursorPosition;
  spanEnd: CursorPosition;
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
      scaled[scale.id] = posToVal(frame, clampedPosX, scale.id);
    } else {
      scaled[scale.id] = posToVal(frame, clampedPosY, scale.id);
    }
  }
  return {
    screen,
    canvas,
    scaled,
  };
};

const spanExceedsThreshold = (
  threshold: number,
  spanStart?: CursorPosition,
  spanEnd?: CursorPosition
) => {
  if (!spanStart || !spanEnd) {
    return false;
  }
  const dx = Math.abs(spanEnd.screen.x - spanStart.screen.x);
  const dy = Math.abs(spanEnd.screen.y - spanStart.screen.y);

  return dx > threshold || dy > threshold;
};

type CursorPluginOptions<S> = {
  onSpanSelect?: SpanSelectListener<S>;
  onHover?: HoverListener<S>;
  onClick?: ClickListener<S>;
  onDblClick?: DblclickListener<S>;
  pluginOpts?: PlotPluginConfig<S>;
  spanSelectOptions?: {
    threshold: number;
    mode: "x" | "y" | "xy";
    facetPlotter?: (opts: {
      x: { min: number; max: number };
      y: { min: number; max: number };
    }) => CustomFacet["plotter"];
  };
};

type CursorPluginState = {
  spanStart?: CursorPosition;
  spanEnd?: CursorPosition;
  hoverPosition?: CursorPosition;
};

export const makeCursorPlugin = (
  opts: CursorPluginOptions<CursorPluginState> = {}
) => {
  let clickTimeout: number | undefined = undefined;

  const bindings: PlotPluginConfig<CursorPluginState> = {
    ...opts.pluginOpts,
    initState: () => ({
      ...(opts.pluginOpts?.initState?.()),
    }),
    transformFrame: (transformFrameOpts) => {
      const { spanStart, spanEnd } = transformFrameOpts.thisPlugin.state;
      const facets = transformFrameOpts.frame.inputParams.facets ?? [];
      if (spanStart && spanEnd && opts.spanSelectOptions?.facetPlotter) {
        facets.push({
          type: "custom",
          layer: "top",
          plotter: opts.spanSelectOptions.facetPlotter({
            x: { min: spanStart.canvas.x, max: spanEnd.canvas.x },
            y: { min: spanStart.canvas.y, max: spanEnd.canvas.y },
          }),
        });
      }
      const newFrame: PlotDrawFrame = {
        ...transformFrameOpts.frame,
        inputParams: {
          ...transformFrameOpts.frame.inputParams,
          facets,
        },
      };
      return (
        opts.pluginOpts?.transformFrame?.({
          ...transformFrameOpts,
          frame: newFrame,
        }) ?? newFrame
      );
    },
    hooks: {
      ...opts.pluginOpts?.hooks,
      onInit(initOpts) {
        const { plot, thisPlugin } = initOpts;
        const canvas = plot.getCanvas();

        // mouse down
        const mouseDownListener = (e: MouseEvent) => {
          if (!opts.onSpanSelect) return;

          const frame = plot.getFrame();

          const spanStart = getPosition(e, frame);
          if (!spanStart) return;

          const spanEnd = spanStart;

          thisPlugin.setState((old) => ({
            ...old,
            spanStart,
            spanEnd,
          }));

          opts.onSpanSelect({
            phase: "start",
            plot,
            frame,
            spanStart,
            spanEnd,
            thisPlugin,
          });
        };
        canvas.addEventListener("mousedown", mouseDownListener);

        // mouse move
        const mouseMoveListener = (e: MouseEvent) => {
          if (!opts.onHover && !opts.onSpanSelect) return;
          const frame = plot.getFrame();

          const position = getPosition(e, frame);

          opts.onHover?.({ plot, frame, position, thisPlugin });

          const spanStart = thisPlugin.state.spanStart;
          const spanEnd = getPosition(e, frame, true);

          
          thisPlugin.setState((old) => ({
            ...old,
            spanEnd,
            hoverPosition: position,
          }));

          if (!spanStart || !spanEnd) return;

          const threshold = opts.spanSelectOptions?.threshold ?? 50;
          if (!spanExceedsThreshold(threshold, spanStart, spanEnd)) {
            return;
          }
          opts.onSpanSelect?.({
            phase: "move",
            plot,
            frame,
            thisPlugin,
            spanStart,
            spanEnd,
          });
        };
        canvas.addEventListener("mousemove", mouseMoveListener);

        // mouse up
        const mouseUpListener = (e: MouseEvent) => {
          if (!opts.onSpanSelect) return;

          const frame = plot.getFrame();

          const { spanStart } = thisPlugin.state;
          if (!spanStart) return;

          const spanEnd = getPosition(e, frame, true);
          if (!spanEnd) return;

          thisPlugin.setState((old) => ({
            ...old,
            spanStart: undefined,
            spanEnd: undefined,
          }));

          const threshold = opts.spanSelectOptions?.threshold ?? 50;
          if (!spanExceedsThreshold(threshold, spanStart, spanEnd)) return;

          opts.onSpanSelect({
            phase: "end",
            plot,
            thisPlugin,
            frame,
            spanStart,
            spanEnd,
          });
        };
        document.addEventListener("mouseup", mouseUpListener);

        // mouse leave
        const mouseLeaveListener = () => {
          if (!opts.onHover) return;
          const frame = plot.getFrame();

          opts.onHover({ plot, frame, thisPlugin });
        };
        canvas.addEventListener("mouseleave", mouseLeaveListener);

        // click
        const mouseClickListener = (e: MouseEvent) => {
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
            if (!opts.onClick) return;
            const frame = plot.getFrame();

            const position = getPosition(e, frame);

            if (!position) return;

            opts.onClick({ plot, frame, position, thisPlugin });
          }, 200);
        };
        canvas.addEventListener("click", mouseClickListener);

        // dblclick
        const mouseDblClickListener = (e: MouseEvent) => {
          if (!opts.onDblClick) return;
          const frame = plot.getFrame();

          const position = getPosition(e, frame);

          if (!position) return;

          opts.onDblClick({ plot, frame, position, thisPlugin });
        };
        canvas.addEventListener("dblclick", mouseDblClickListener);
        const deinit = opts.pluginOpts?.hooks?.onInit?.(initOpts);

        return () => {
          const canvas = plot.getCanvas();
          canvas.removeEventListener("mousemove", mouseMoveListener);
          canvas.removeEventListener("mouseleave", mouseLeaveListener);
          canvas.removeEventListener("click", mouseClickListener);
          canvas.removeEventListener("dblclick", mouseDblClickListener);
          canvas.removeEventListener("mousedown", mouseDownListener);
          document.removeEventListener("mouseup", mouseUpListener);
          deinit?.();
        };
      },
    },
  };

  return bindings;
};

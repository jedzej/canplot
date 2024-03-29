var u=Object.defineProperty;var c=(n,a)=>u(n,"name",{value:a,configurable:!0});import{r,j as p}from"./jsx-runtime.3513c91a.js";import{v as y,d as x,g as f}from"./main.es.62385bb5.js";import"./iframe.0cbb6995.js";const b={parameters:{storySource:{source:`import React, { useMemo, useRef, useState } from "react";
import { Meta, Story } from "@storybook/react";
import {
  linePlotter,
  makeCursorPlugin,
  CursorPosition,
  Facet,
} from "@canplot/core";
import { usePlot } from "@canplot/react";

export default {
  title: "Plugins/ExternalizedPlugin",
} as Meta;

const useHoverPlugin = () => {
  const [cursorPos, setCursorPos] =
    useState<CursorPosition | undefined>(undefined);

  const [rects, setRects] = useState<
    { start: CursorPosition; end: CursorPosition }[]
  >([]);

  const [selection, setSelection] =
    useState<{ start: CursorPosition; end: CursorPosition } | undefined>(
      undefined
    );
  const facets = useMemo(() => {
    const facets: Facet[] = [];
    if (cursorPos) {
      facets.push({
        type: "v-line",
        scaleId: "x-1",
        x: cursorPos.scaled["x-1"],
      });
      facets.push({
        type: "h-line",
        scaleId: "y-1",
        y: cursorPos.scaled["y-1"],
      });
    }
    if (selection) {
      facets.push({
        type: "span",
        scaleId: "y-1",
        style: { fillStyle: "rgba(0,0,0,0.1)" },
        x: {
          scaleId: "x-1",
          min: selection.start.scaled["x-1"],
          max: selection.end.scaled["x-1"],
        },
        y: {
          scaleId: "y-1",
          min: selection.start.scaled["y-1"],
          max: selection.end.scaled["y-1"],
        },
      });
    }
    for (const rect of rects) {
      facets.push({
        type: "span",
        scaleId: "y-1",
        style: { fillStyle: "rgba(0,0,255,0.1)" },
        x: {
          scaleId: "x-1",
          min: rect.start.scaled["x-1"],
          max: rect.end.scaled["x-1"],
        },
        y: {
          scaleId: "y-1",
          min: rect.start.scaled["y-1"],
          max: rect.end.scaled["y-1"],
        },
      });
    }
    return facets;
  }, [selection, rects, cursorPos]);

  const plugin = makeCursorPlugin({
    onHover: (e) => {
      setCursorPos(e.position);
    },
    onSpanSelect: (e) => {
      switch (e.phase) {
        case "move":
          setSelection({ start: e.spanStart, end: e.spanEnd });
          break;
        case "end":
          setSelection(undefined);
          setRects((oldRects) => [
            ...oldRects,
            { start: e.spanStart, end: e.spanEnd },
          ]);
          break;
      }
    },
  });
  return [plugin, facets] as const;
};

const Template: Story = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  const [hoverPlugin, facets] = useHoverPlugin();

  usePlot(
    {
      dimensions: { height: 400 },
      plugins: [hoverPlugin],
      canvasRef: ref,
    },
    () => {
      return {
        padding: 20,
        axes: [{ scaleId: "x-1" }, { scaleId: "y-1" }],
        scales: [{ id: "x-1" }, { id: "y-1" }],
        facets,
        series: [
          {
            xScaleId: "x-1",
            yScaleId: "y-1",
            plotter: linePlotter({ style: { strokeStyle: "blue" } }),
            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          },
        ],
      };
    },
    [facets]
  );

  return <canvas ref={ref} />;
};

export const Default = Template.bind({});
`,locationsMap:{default:{startLoc:{col:24,line:100},endLoc:{col:1,line:132},startBody:{col:24,line:100},endBody:{col:1,line:132}}}}},title:"Plugins/ExternalizedPlugin"},m=c(()=>{const[n,a]=r.exports.useState(void 0),[o,i]=r.exports.useState([]),[s,l]=r.exports.useState(void 0),d=r.exports.useMemo(()=>{const e=[];n&&(e.push({type:"v-line",scaleId:"x-1",x:n.scaled["x-1"]}),e.push({type:"h-line",scaleId:"y-1",y:n.scaled["y-1"]})),s&&e.push({type:"span",scaleId:"y-1",style:{fillStyle:"rgba(0,0,0,0.1)"},x:{scaleId:"x-1",min:s.start.scaled["x-1"],max:s.end.scaled["x-1"]},y:{scaleId:"y-1",min:s.start.scaled["y-1"],max:s.end.scaled["y-1"]}});for(const t of o)e.push({type:"span",scaleId:"y-1",style:{fillStyle:"rgba(0,0,255,0.1)"},x:{scaleId:"x-1",min:t.start.scaled["x-1"],max:t.end.scaled["x-1"]},y:{scaleId:"y-1",min:t.start.scaled["y-1"],max:t.end.scaled["y-1"]}});return e},[s,o,n]);return[f({onHover:e=>{a(e.position)},onSpanSelect:e=>{switch(e.phase){case"move":l({start:e.spanStart,end:e.spanEnd});break;case"end":l(void 0),i(t=>[...t,{start:e.spanStart,end:e.spanEnd}]);break}}}),d]},"useHoverPlugin"),P=c(()=>{const n=r.exports.useRef(null),[a,o]=m();return y({dimensions:{height:400},plugins:[a],canvasRef:n},()=>({padding:20,axes:[{scaleId:"x-1"},{scaleId:"y-1"}],scales:[{id:"x-1"},{id:"y-1"}],facets:o,series:[{xScaleId:"x-1",yScaleId:"y-1",plotter:x({style:{strokeStyle:"blue"}}),x:[1,2,3,4,5,6,7,8,9,10],y:[1,2,3,4,5,6,7,8,9,10]}]}),[o]),p("canvas",{ref:n})},"Template"),C=P.bind({}),R=["Default"];export{C as Default,R as __namedExportsOrder,b as default};
//# sourceMappingURL=ExternalizedPlugin.stories.d25fb8f9.js.map

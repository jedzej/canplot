var m=Object.defineProperty;var i=(s,n)=>m(s,"name",{value:n,configurable:!0});import{r as p,a as u,j as o}from"./jsx-runtime.3513c91a.js";import{v as S,d as r,g as f,c as y}from"./main.es.62385bb5.js";import"./iframe.0cbb6995.js";const P={parameters:{storySource:{source:`import React, { useRef } from "react";
import { Meta, Story } from "@storybook/react";
import {
  Limits,
  Scale,
  linePlotter,
  makeCursorPlugin,
  helpers,
} from "@canplot/core";
import { usePlot } from "@canplot/react";

export default {
  title: "Zoom",
} as Meta;

const Template: Story = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  usePlot(
    {
      dimensions: { height: 400 },
      canvasRef: ref,
      plugins: [
        makeCursorPlugin({
          pluginOpts: {
            initState: () => ({} as Record<Scale["id"], Limits>),
            transformFrame: ({ thisPlugin, frame }) => {
              return {
                ...frame,
                limits: { ...frame.limits, ...thisPlugin.state },
              };
            },
          },
          onSpanSelect: (event) => {
            if (event.phase === "end") {
              const newState = {} as typeof event.thisPlugin.state;
              for (const scaleId in event.spanStart.scaled) {
                if (!helpers.isXScale(scaleId)) {
                  continue;
                }
                const start = event.spanStart.scaled[scaleId];
                const end = event.spanEnd.scaled[scaleId];
                const min = Math.min(start, end);
                const max = Math.max(start, end);
                newState[scaleId] = { min, max };
              }
              event.thisPlugin.setState((old) => ({ ...old, ...newState }));
            }
          },
          onDblClick: (event) => {
            event.thisPlugin.setState(() => ({}));
          },
        }),
      ],
    },
    () => {
      return {
        padding: 10,
        scales: [{ id: "x-1" }, { id: "y-1" }, { id: "y-2" }],
        axes: [{ scaleId: "x-1" }, { scaleId: "y-1" }, { scaleId: "y-2" }],
        series: [
          {
            xScaleId: "x-1",
            yScaleId: "y-1",
            plotter: linePlotter(),
            x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          },
          {
            xScaleId: "x-1",
            yScaleId: "y-2",
            plotter: linePlotter({
              style: { strokeStyle: "red" },
            }),
            x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          },
        ],
      };
    },
    []
  );

  return (
    <div>
      <div id="tooltip"></div>
      <canvas ref={ref} />
    </div>
  );
};

export const Default = Template.bind({});
`,locationsMap:{default:{startLoc:{col:24,line:16},endLoc:{col:1,line:90},startBody:{col:24,line:16},endBody:{col:1,line:90}}}}},title:"Zoom"},x=i(()=>{const s=p.exports.useRef(null);return S({dimensions:{height:400},canvasRef:s,plugins:[f({pluginOpts:{initState:()=>({}),transformFrame:({thisPlugin:n,frame:t})=>({...t,limits:{...t.limits,...n.state}})},onSpanSelect:n=>{if(n.phase==="end"){const t={};for(const e in n.spanStart.scaled){if(!y.isXScale(e))continue;const a=n.spanStart.scaled[e],l=n.spanEnd.scaled[e],c=Math.min(a,l),d=Math.max(a,l);t[e]={min:c,max:d}}n.thisPlugin.setState(e=>({...e,...t}))}},onDblClick:n=>{n.thisPlugin.setState(()=>({}))}})]},()=>({padding:10,scales:[{id:"x-1"},{id:"y-1"},{id:"y-2"}],axes:[{scaleId:"x-1"},{scaleId:"y-1"},{scaleId:"y-2"}],series:[{xScaleId:"x-1",yScaleId:"y-1",plotter:r(),x:[0,1,2,3,4,5,6,7,8,9,10],y:[0,1,2,3,4,5,6,7,8,9,10]},{xScaleId:"x-1",yScaleId:"y-2",plotter:r({style:{strokeStyle:"red"}}),x:[0,1,2,3,4,5,6,7,8,9,10],y:[0,1,2,3,4,5,6,7,8,9,10]}]}),[]),u("div",{children:[o("div",{id:"tooltip"}),o("canvas",{ref:s})]})},"Template"),M=x.bind({}),k=["Default"];export{M as Default,k as __namedExportsOrder,P as default};
//# sourceMappingURL=Zoom.stories.501555ac.js.map

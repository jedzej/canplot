var p=Object.defineProperty;var a=(r,e)=>p(r,"name",{value:e,configurable:!0});import{r as y,j as d}from"./jsx-runtime.0836a264.js";import{v as m,s as c}from"./main.es.f2907810.js";import{a as f}from"./helpers.050e3ebf.js";import"./iframe.608be9a8.js";const b={parameters:{storySource:{source:`import React, { useRef } from "react";
import { Meta, Story } from "@storybook/react";
import { linePlotter } from "@canplot/core";
import { usePlot } from "@canplot/react";
import { animationLoop } from "./helpers";

export default {
  title: "Line with distinct points",
} as Meta;

const Template: Story = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  usePlot(
    {
      dimensions: {
        height: 400,
      },
      plugins: [
        {
          hooks: {
            onInit: ({ plot }) =>
              animationLoop(() => {
                plot.update((plot) => {
                  const t = performance.now() / 1000;
                  const arr: number[] = [];
                  arr.length = plot.series[0].x.length;
                  arr.fill(0);
                  const s1: number[] = [];
                  s1.length = plot.series[0].x.length;
                  const s2: number[] = [];
                  s2.length = plot.series[0].x.length;

                  for (let i = 0; i < arr.length; i++) {
                    s1[i] = 2 + Math.sin(i / 10 + t);
                    s2[i] = 1 + Math.sin(i / 10 + t);
                  }
                  plot.series[0].y = s1;
                  plot.series[1].y = s2;
                  return plot;
                });
              }),
          },
        },
      ],
      canvasRef: ref,
    },
    () => {
      return {
        padding: 10,
        axes: [
          {
            scaleId: "x-1",
            position: "primary",
            size: 30,
          },
          {
            scaleId: "y-1",
            position: "primary",
            size: 30,
          },
        ],
        scales: [{ id: "x-1" }, { id: "y-1" }],
        series: [
          {
            xScaleId: "x-1",
            yScaleId: "y-1",
            plotter: linePlotter({
              showDistrinct: ({ idx, series }) => {
                return (series.y[idx] ?? 0) < 2;
              },
              style: { strokeStyle: "blue" },
            }),
            x: Array(100)
              .fill(0)
              .map((_, i) => i),
            y: [],
          },
          {
            xScaleId: "x-1",
            yScaleId: "y-1",
            plotter: linePlotter({
              distinctDistance: 10,
              style: { strokeStyle: "red" },
            }),
            x: Array(100)
              .fill(0)
              .map((_, i) => i),
            y: [],
          },
        ],
      };
    },
    []
  );

  return <canvas ref={ref} />;
};

export const Default = Template.bind({});
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:1,line:98},startBody:{col:24,line:11},endBody:{col:1,line:98}}}}},title:"Line with distinct points"},u=a(()=>{const r=y.exports.useRef(null);return m({dimensions:{height:400},plugins:[{hooks:{onInit:({plot:e})=>f(()=>{e.update(n=>{const s=performance.now()/1e3,i=[];i.length=n.series[0].x.length,i.fill(0);const o=[];o.length=n.series[0].x.length;const l=[];l.length=n.series[0].x.length;for(let t=0;t<i.length;t++)o[t]=2+Math.sin(t/10+s),l[t]=1+Math.sin(t/10+s);return n.series[0].y=o,n.series[1].y=l,n})})}}],canvasRef:r},()=>({padding:10,axes:[{scaleId:"x-1",position:"primary",size:30},{scaleId:"y-1",position:"primary",size:30}],scales:[{id:"x-1"},{id:"y-1"}],series:[{xScaleId:"x-1",yScaleId:"y-1",plotter:c({showDistrinct:({idx:e,series:n})=>{var s;return((s=n.y[e])!=null?s:0)<2},style:{strokeStyle:"blue"}}),x:Array(100).fill(0).map((e,n)=>n),y:[]},{xScaleId:"x-1",yScaleId:"y-1",plotter:c({distinctDistance:10,style:{strokeStyle:"red"}}),x:Array(100).fill(0).map((e,n)=>n),y:[]}]}),[]),d("canvas",{ref:r})},"Template"),D=u.bind({}),L=["Default"];export{D as Default,L as __namedExportsOrder,b as default};
//# sourceMappingURL=DistinctPoints.stories.f96e29ac.js.map

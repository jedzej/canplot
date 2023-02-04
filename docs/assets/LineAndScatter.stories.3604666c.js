var d=Object.defineProperty;var y=(r,n)=>d(r,"name",{value:n,configurable:!0});import{r as f,j as x}from"./jsx-runtime.1f3365f4.js";import{v as h,l as p,c as m}from"./main.es.799f0f97.js";import{a as u}from"./helpers.e102f576.js";import"./iframe.122e3f48.js";const b={parameters:{storySource:{source:`import React, { useEffect, useRef } from "react";
import { Meta, Story } from "@storybook/react";
import { linePlotter, scatterPlotter } from "@canplot/core";
import { usePlot } from "@canplot/react";
import { animationLoop } from "./helpers";

export default {
  title: "LineAndScatter",
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
            onInit: ({ plot }) => {
              return animationLoop(() => {
                plot.update((inputParams) => {
                  const t = performance.now() / 100;
                  const arr: number[] = [];
                  arr.length = inputParams.series[0].x.length;
                  arr.fill(0);
                  const s1: number[] = [];
                  s1.length = inputParams.series[0].x.length;
                  const s2: number[] = [];
                  s2.length = inputParams.series[0].x.length;
                  const s3: number[] = [];
                  s3.length = inputParams.series[0].x.length;
                  const s4: number[] = [];
                  s4.length = inputParams.series[0].x.length;

                  for (let i = 0; i < arr.length; i++) {
                    s1[i] = 1 + Math.cos(i / 10 + t);
                    s2[i] = 2 + Math.cos(i / 10 + t);
                    s3[i] = 3 + Math.cos(i / 10 + t);
                    s4[i] = 4 + Math.cos(i / 10 + t);
                  }
                  inputParams.series[0].y = s1;
                  inputParams.series[1].y = s2;
                  inputParams.series[2].y = s3;
                  inputParams.series[3].y = s4;
                  return inputParams;
                });
              });
            },
          },
        },
      ],
      canvasRef: ref,
    },
    () => {
      return {
        padding: 20,
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
        scales: [{ id: "x-1" }, { id: "y-1" }, { id: "y-2" }],
        series: [
          {
            xScaleId: "x-1",
            yScaleId: "y-1",
            plotter: linePlotter({ style: { strokeStyle: "blue" } }),
            x: new Array(1000).fill(0).map((_, i) => i / 10),
            y: new Array(1000).fill(0).map((_, i) => i % 10),
          },
          {
            xScaleId: "x-1",
            yScaleId: "y-1",
            plotter: linePlotter({ style: { strokeStyle: "brown" } }),
            x: new Array(1000).fill(0).map((_, i) => i / 10),
            y: new Array(1000).fill(0).map((_, i) => (i % 10) - 5),
          },
          {
            xScaleId: "x-1",
            yScaleId: "y-1",
            plotter: scatterPlotter({ style: { strokeStyle: "red" } }),
            x: new Array(1000).fill(0).map((_, i) => i / 10),
            y: new Array(1000).fill(0).map((_, i) => (i % 10) - 5),
          },
          {
            xScaleId: "x-1",
            yScaleId: "y-1",
            plotter: scatterPlotter({ style: { strokeStyle: "black" } }),
            x: new Array(1000).fill(0).map((_, i) => i / 10),
            y: new Array(1000).fill(0).map((_, i) => (i % 10) - 5),
          },
        ],
      };
    },
    []
  );

  return <canvas ref={ref} />;
};

export const Default = Template.bind({});
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:1,line:109},startBody:{col:24,line:11},endBody:{col:1,line:109}}}}},title:"LineAndScatter"},S=y(()=>{const r=f.exports.useRef(null);return h({dimensions:{height:400},plugins:[{hooks:{onInit:({plot:n})=>u(()=>{n.update(e=>{const s=performance.now()/100,l=[];l.length=e.series[0].x.length,l.fill(0);const a=[];a.length=e.series[0].x.length;const i=[];i.length=e.series[0].x.length;const o=[];o.length=e.series[0].x.length;const c=[];c.length=e.series[0].x.length;for(let t=0;t<l.length;t++)a[t]=1+Math.cos(t/10+s),i[t]=2+Math.cos(t/10+s),o[t]=3+Math.cos(t/10+s),c[t]=4+Math.cos(t/10+s);return e.series[0].y=a,e.series[1].y=i,e.series[2].y=o,e.series[3].y=c,e})})}}],canvasRef:r},()=>({padding:20,axes:[{scaleId:"x-1",position:"primary",size:30},{scaleId:"y-1",position:"primary",size:30}],scales:[{id:"x-1"},{id:"y-1"},{id:"y-2"}],series:[{xScaleId:"x-1",yScaleId:"y-1",plotter:p({style:{strokeStyle:"blue"}}),x:new Array(1e3).fill(0).map((n,e)=>e/10),y:new Array(1e3).fill(0).map((n,e)=>e%10)},{xScaleId:"x-1",yScaleId:"y-1",plotter:p({style:{strokeStyle:"brown"}}),x:new Array(1e3).fill(0).map((n,e)=>e/10),y:new Array(1e3).fill(0).map((n,e)=>e%10-5)},{xScaleId:"x-1",yScaleId:"y-1",plotter:m({style:{strokeStyle:"red"}}),x:new Array(1e3).fill(0).map((n,e)=>e/10),y:new Array(1e3).fill(0).map((n,e)=>e%10-5)},{xScaleId:"x-1",yScaleId:"y-1",plotter:m({style:{strokeStyle:"black"}}),x:new Array(1e3).fill(0).map((n,e)=>e/10),y:new Array(1e3).fill(0).map((n,e)=>e%10-5)}]}),[]),x("canvas",{ref:r})},"Template"),k=S.bind({}),M=["Default"];export{k as Default,M as __namedExportsOrder,b as default};
//# sourceMappingURL=LineAndScatter.stories.3604666c.js.map

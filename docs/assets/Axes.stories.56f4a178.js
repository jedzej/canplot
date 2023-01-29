var g=Object.defineProperty;var s=(n,e)=>g(n,"name",{value:e,configurable:!0});import{s as i}from"./main.es.91389dbd.js";import{a as S,E as I}from"./_helpers.1bb61a14.js";import{j as f}from"./jsx-runtime.bc65e88e.js";import"./iframe.420d7a72.js";const Y={parameters:{storySource:{source:`import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { linePlotter } from "@canplot/core";
import { animationLoop, EmbeddedPlot } from "./_helpers";

export default {
  title: "Axes",
  args: {
    dimensions: { height: 400 },
    plugins: [
      {
        hooks: {
          onInit: ({ plot }) =>
            animationLoop(() => {
              plot.update((plot) => {
                plot.series[0].y = new Array(plot.series[0].x.length)
                  .fill(0)
                  .map(
                    (_, y) => 5 + Math.sin(y / 10 + performance.now() / 100)
                  );
                plot.series[1].y = new Array(plot.series[1].x.length)
                  .fill(0)
                  .map(
                    (_, y) => 2 + Math.cos(y / 10 + performance.now() / 100)
                  );
                return plot;
              });
            }),
        },
      },
    ],
    padding: 10,
    axes: [
      { scaleId: "x-1" },
      { scaleId: "x-1" },
      { scaleId: "x-1", position: "secondary" },
      { scaleId: "x-1", position: "secondary" },
      { scaleId: "y-1" },
      { scaleId: "y-1" },
      { scaleId: "y-1" },
      { scaleId: "y-1", position: "secondary" },
      { scaleId: "y-1", position: "secondary" },
      { scaleId: "y-1", position: "secondary" },
      { scaleId: "y-1", position: "secondary" },
    ],
    scales: [{ id: "x-1" }, { id: "y-1" }],
    series: [
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: linePlotter({ style: { strokeStyle: "blue" } }),
        x: new Array(1000).fill(0).map((_, i) => i / 10),
        y: [],
      },
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: linePlotter({ style: { strokeStyle: "red" } }),
        x: new Array(100).fill(0).map((_, i) => i),
        y: [],
      },
    ],
  },
} as ComponentMeta<typeof EmbeddedPlot>;

const Template: ComponentStory<typeof EmbeddedPlot> = ({ ...args }) => (
  <EmbeddedPlot {...args} />
);

export const Default = Template.bind({});

export const NoAxes = Template.bind({});
NoAxes.args = {
  ...NoAxes.args,
  axes: [],
};

export const SingleXPrimary = Template.bind({});
SingleXPrimary.args = {
  ...SingleXPrimary.args,
  axes: [{ scaleId: "x-1" }],
};

export const SingleXSecondary = Template.bind({});
SingleXSecondary.args = {
  ...SingleXSecondary.args,
  axes: [{ scaleId: "x-1", position: "secondary" }],
};

export const SingleYPrimary = Template.bind({});
SingleYPrimary.args = {
  ...SingleYPrimary.args,
  axes: [{ scaleId: "y-1" }],
};

export const SingleYSecondary = Template.bind({});
SingleYSecondary.args = {
  ...SingleYSecondary.args,
  axes: [{ scaleId: "y-1", position: "secondary" }],
};

export const SingleXAndY = Template.bind({});
SingleXAndY.args = {
  ...SingleXAndY.args,
  axes: [{ scaleId: "x-1" }, { scaleId: "y-1" }],
};

export const Styling = Template.bind({});
Styling.args = {
  ...Styling.args,
  axes: [
    {
      scaleId: "x-1",
      label: "X",
      size: 30,
      tickSize: 20,
      axisStyle: {
        strokeStyle: "pink",
      },
      tickStyle: {
        strokeStyle: "aqua",
        lineWidth: 4,
      },
      tickLabelStyle: {
        fillStyle: "purple",
        font: "16px Arial",
      },
    },
    {
      scaleId: "y-1",
      label: "Y",
      size: 60,
      tickSize: 10,
      axisStyle: {
        strokeStyle: "red",
      },
      tickStyle: {
        strokeStyle: "green",
        lineWidth: 4,
      },
      tickLabelStyle: {
        fillStyle: "blue",
        font: "20px Arial",
      },
    },
  ],
};

export const ManyScalesManyLabels = Template.bind({});
ManyScalesManyLabels.args = {
  ...ManyScalesManyLabels.args,
  scales: [
    { id: "x-1", makeLimits: () => ({ min: -200, max: 200 }) },
    { id: "x-2", makeLimits: () => ({ min: 0, max: 100 }) },
    { id: "x-3", makeLimits: () => ({ min: 0, max: 100 }) },
    { id: "y-1", makeLimits: () => ({ min: 0, max: 10 }) },
    { id: "y-2", makeLimits: () => ({ min: 0, max: 20 }) },
    { id: "y-3", makeLimits: () => ({ min: -30, max: 30 }) },
  ],
  axes: [
    {
      scaleId: "x-1",
      label: "X-1 label 1",
      labelAlign: "start",
    },
    {
      scaleId: "x-1",
      label: "X-1 label 2",
      labelAlign: "center",
      size: 70,
      labelStyle: {
        fillStyle: "red",
        font: "bold 10px Arial",
      },
    },
    {
      scaleId: "x-2",
      label: "X-2 label with negative offset",
      labelAlign: "end",
      labelOffset: -20,
      size: 30,
      labelStyle: {
        fillStyle: "red",
        font: "blue 10px Arial",
        strokeStyle: "blue",
      },
    },
    {
      scaleId: "x-2",
      label: "X-2 secondary",
      position: "secondary",
      size: 30,
    },
    {
      scaleId: "y-1",
      label: "Y-1 label start",
      labelAlign: "start",
      labelOffset: 10,
    },
    {
      scaleId: "y-2",
      label: "Y-2 label center",
      labelAlign: "center",
      labelOffset: 20,
      size: 100,
    },
    {
      scaleId: "y-3",
      label: "Y-3 label end",
      labelAlign: "end",
      labelOffset: -10,
      labelStyle: {
        textAlign: "left",
      },
    },
    {
      scaleId: "y-3",
      label: "Y-3 secondary",
      size: 80,
      position: "secondary",
    },
  ],
};

export const TickFormat = Template.bind({});
TickFormat.args = {
  ...TickFormat.args,
  axes: [
    {
      scaleId: "x-1",
      tickFormat: ({ ticks }) => ticks.map((tick) => "ab\\nbcc\\ncdd\\ndeee"),
      multilineGap: 8,
    },
    {
      scaleId: "y-1",
      tickFormat: ({ ticks }) => ticks.map((tick) => "aaaa\\nc\\nddddd"),
      multilineGap: 16,
    },
  ],
};
`,locationsMap:{default:{startLoc:{col:54,line:66},endLoc:{col:1,line:68},startBody:{col:54,line:66},endBody:{col:1,line:68}},"no-axes":{startLoc:{col:54,line:66},endLoc:{col:1,line:68},startBody:{col:54,line:66},endBody:{col:1,line:68}},"single-x-primary":{startLoc:{col:54,line:66},endLoc:{col:1,line:68},startBody:{col:54,line:66},endBody:{col:1,line:68}},"single-x-secondary":{startLoc:{col:54,line:66},endLoc:{col:1,line:68},startBody:{col:54,line:66},endBody:{col:1,line:68}},"single-y-primary":{startLoc:{col:54,line:66},endLoc:{col:1,line:68},startBody:{col:54,line:66},endBody:{col:1,line:68}},"single-y-secondary":{startLoc:{col:54,line:66},endLoc:{col:1,line:68},startBody:{col:54,line:66},endBody:{col:1,line:68}},"single-x-and-y":{startLoc:{col:54,line:66},endLoc:{col:1,line:68},startBody:{col:54,line:66},endBody:{col:1,line:68}},styling:{startLoc:{col:54,line:66},endLoc:{col:1,line:68},startBody:{col:54,line:66},endBody:{col:1,line:68}},"many-scales-many-labels":{startLoc:{col:54,line:66},endLoc:{col:1,line:68},startBody:{col:54,line:66},endBody:{col:1,line:68}},"tick-format":{startLoc:{col:54,line:66},endLoc:{col:1,line:68},startBody:{col:54,line:66},endBody:{col:1,line:68}}}}},title:"Axes",args:{dimensions:{height:400},plugins:[{hooks:{onInit:({plot:n})=>S(()=>{n.update(e=>(e.series[0].y=new Array(e.series[0].x.length).fill(0).map((b,a)=>5+Math.sin(a/10+performance.now()/100)),e.series[1].y=new Array(e.series[1].x.length).fill(0).map((b,a)=>2+Math.cos(a/10+performance.now()/100)),e))})}}],padding:10,axes:[{scaleId:"x-1"},{scaleId:"x-1"},{scaleId:"x-1",position:"secondary"},{scaleId:"x-1",position:"secondary"},{scaleId:"y-1"},{scaleId:"y-1"},{scaleId:"y-1"},{scaleId:"y-1",position:"secondary"},{scaleId:"y-1",position:"secondary"},{scaleId:"y-1",position:"secondary"},{scaleId:"y-1",position:"secondary"}],scales:[{id:"x-1"},{id:"y-1"}],series:[{xScaleId:"x-1",yScaleId:"y-1",plotter:i({style:{strokeStyle:"blue"}}),x:new Array(1e3).fill(0).map((n,e)=>e/10),y:[]},{xScaleId:"x-1",yScaleId:"y-1",plotter:i({style:{strokeStyle:"red"}}),x:new Array(100).fill(0).map((n,e)=>e),y:[]}]}},l=s(({...n})=>f(I,{...n}),"Template"),h=l.bind({}),t=l.bind({});t.args={...t.args,axes:[]};const o=l.bind({});o.args={...o.args,axes:[{scaleId:"x-1"}]};const r=l.bind({});r.args={...r.args,axes:[{scaleId:"x-1",position:"secondary"}]};const c=l.bind({});c.args={...c.args,axes:[{scaleId:"y-1"}]};const d=l.bind({});d.args={...d.args,axes:[{scaleId:"y-1",position:"secondary"}]};const y=l.bind({});y.args={...y.args,axes:[{scaleId:"x-1"},{scaleId:"y-1"}]};const m=l.bind({});m.args={...m.args,axes:[{scaleId:"x-1",label:"X",size:30,tickSize:20,axisStyle:{strokeStyle:"pink"},tickStyle:{strokeStyle:"aqua",lineWidth:4},tickLabelStyle:{fillStyle:"purple",font:"16px Arial"}},{scaleId:"y-1",label:"Y",size:60,tickSize:10,axisStyle:{strokeStyle:"red"},tickStyle:{strokeStyle:"green",lineWidth:4},tickLabelStyle:{fillStyle:"blue",font:"20px Arial"}}]};const x=l.bind({});x.args={...x.args,scales:[{id:"x-1",makeLimits:()=>({min:-200,max:200})},{id:"x-2",makeLimits:()=>({min:0,max:100})},{id:"x-3",makeLimits:()=>({min:0,max:100})},{id:"y-1",makeLimits:()=>({min:0,max:10})},{id:"y-2",makeLimits:()=>({min:0,max:20})},{id:"y-3",makeLimits:()=>({min:-30,max:30})}],axes:[{scaleId:"x-1",label:"X-1 label 1",labelAlign:"start"},{scaleId:"x-1",label:"X-1 label 2",labelAlign:"center",size:70,labelStyle:{fillStyle:"red",font:"bold 10px Arial"}},{scaleId:"x-2",label:"X-2 label with negative offset",labelAlign:"end",labelOffset:-20,size:30,labelStyle:{fillStyle:"red",font:"blue 10px Arial",strokeStyle:"blue"}},{scaleId:"x-2",label:"X-2 secondary",position:"secondary",size:30},{scaleId:"y-1",label:"Y-1 label start",labelAlign:"start",labelOffset:10},{scaleId:"y-2",label:"Y-2 label center",labelAlign:"center",labelOffset:20,size:100},{scaleId:"y-3",label:"Y-3 label end",labelAlign:"end",labelOffset:-10,labelStyle:{textAlign:"left"}},{scaleId:"y-3",label:"Y-3 secondary",size:80,position:"secondary"}]};const p=l.bind({});p.args={...p.args,axes:[{scaleId:"x-1",tickFormat:({ticks:n})=>n.map(e=>`ab
bcc
cdd
deee`),multilineGap:8},{scaleId:"y-1",tickFormat:({ticks:n})=>n.map(e=>`aaaa
c
ddddd`),multilineGap:16}]};const B=["Default","NoAxes","SingleXPrimary","SingleXSecondary","SingleYPrimary","SingleYSecondary","SingleXAndY","Styling","ManyScalesManyLabels","TickFormat"];export{h as Default,x as ManyScalesManyLabels,t as NoAxes,y as SingleXAndY,o as SingleXPrimary,r as SingleXSecondary,c as SingleYPrimary,d as SingleYSecondary,m as Styling,p as TickFormat,B as __namedExportsOrder,Y as default};
//# sourceMappingURL=Axes.stories.56f4a178.js.map

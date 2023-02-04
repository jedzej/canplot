var C=Object.defineProperty;var g=(e,t)=>C(e,"name",{value:t,configurable:!0});import{l as y,f as L,r as k}from"./main.es.799f0f97.js";import{a as M,E as _}from"./helpers.e102f576.js";import{j as A}from"./jsx-runtime.1f3365f4.js";import"./iframe.122e3f48.js";const W=g(e=>{let t=0;const s=20*e.length;return L({onHover:({position:n,self:a})=>{a.setState(()=>n)},pluginOpts:{initState:()=>{},transformInputParams({inputParams:n}){const a=k.normalizePadding(n.padding);return t=a.bottom,{...n,padding:{...a,bottom:a.bottom+s}}},transformFrame({frame:n,self:a}){var u,h;const{ctx:r,canvasSize:w,chartArea:f,inputParams:{series:d}}=n,x=k.findClosestDataPoint(a.state,n),p=(u=n.inputParams.facets)!=null?u:[];p.push({type:"custom",draw(){var S,b,I;r.fillStyle="red";const o=w.height-t-s,P=Math.max(...d.map((l,z)=>r.measureText(e[z].label).width))+60,m=f.x+(f.width-P)/2;r.strokeRect(m,o,P,s);for(let l=0;l<d.length;l++)r.fillStyle=e[l].color,r.fillRect(m,o+l*20,20,20),r.fillStyle="black",r.fillText(`${e[l].label} ${(I=(b=(S=x[l])==null?void 0:S.y)==null?void 0:b.toFixed(2))!=null?I:""}`,m+22,o+l*20+15)}});for(let o=0;o<d.length;o++){const c=x[o];if(!c)break;p.push({type:"circle",layer:"top",x:c.x,y:c.y,radius:5,xScaleId:d[o].xScaleId,yScaleId:d[o].yScaleId,style:{fillStyle:e[o].color}})}return{...n,inputParams:{...(h=n.inputParams)!=null?h:{},facets:p}}}}})},"makeLegendPlugin"),i=["red","blue","orange","purple"],R={parameters:{storySource:{source:`import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  CursorPosition,
  PlotPluginConfig,
  helpers,
  linePlotter,
  makeCursorPlugin,
} from "@canplot/core";
import { animationLoop, EmbeddedPlot } from "./helpers";

const makeLegendPlugin = (
  legendData: { color: string; label: string }[]
): PlotPluginConfig => {
  let originalBottomPadding = 0;
  const legendHeight = 20 * legendData.length;

  return makeCursorPlugin({
    onHover: ({ position, self }) => {
      self.setState(() => position);
    },
    pluginOpts: {
      initState: () => undefined as CursorPosition | undefined,
      transformInputParams({ inputParams }) {
        const normalizedPadding = helpers.normalizePadding(inputParams.padding);

        originalBottomPadding = normalizedPadding.bottom;
        return {
          ...inputParams,
          padding: {
            ...normalizedPadding,
            bottom: normalizedPadding.bottom + legendHeight,
          },
        };
      },
      transformFrame({ frame, self }) {
        const {
          ctx,
          canvasSize,
          chartArea,
          inputParams: { series },
        } = frame;

        const dataPoints = helpers.findClosestDataPoint(self.state, frame);

        const facets = frame.inputParams.facets ?? [];

        facets.push({
          type: "custom",
          draw() {
            ctx.fillStyle = "red";
            const legendY =
              canvasSize.height - originalBottomPadding - legendHeight;

            const maxW = Math.max(
              ...series.map(
                (_, i) => ctx.measureText(legendData[i].label).width
              )
            );
            const legendWidth = maxW + 60;
            const legendX = chartArea.x + (chartArea.width - legendWidth) / 2;

            ctx.strokeRect(legendX, legendY, legendWidth, legendHeight);

            for (let i = 0; i < series.length; i++) {
              ctx.fillStyle = legendData[i].color;
              ctx.fillRect(legendX, legendY + i * 20, 20, 20);
              ctx.fillStyle = "black";
              ctx.fillText(
                \`\${legendData[i].label} \${dataPoints[i]?.y?.toFixed(2) ?? ""}\`,
                legendX + 22,
                legendY + i * 20 + 15
              );
            }
          },
        });

        for (let i = 0; i < series.length; i++) {
          const datapoint = dataPoints[i];
          if (!datapoint) {
            break;
          }
          facets.push({
            type: "circle",
            layer: "top",
            x: datapoint.x,
            y: datapoint.y,
            radius: 5,
            xScaleId: series[i].xScaleId,
            yScaleId: series[i].yScaleId,
            style: {
              fillStyle: legendData[i].color,
            },
          });
        }

        return {
          ...frame,
          inputParams: {
            ...(frame.inputParams ?? {}),
            facets,
          },
        };
      },
    },
  });
};


const colors = ["red", "blue", "orange", "purple"];

export default {
  title: "Legend",
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
      makeLegendPlugin([
        {
          color: colors[0],
          label: "a",
        },
        {
          color: colors[1],
          label: "a",
        },
        {
          color: colors[2],
          label: "a",
        },
      ]),
    ],
    padding: 20,
    series: [
      {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: linePlotter({ style: { strokeStyle: colors[0] } }),
      },
      {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [2, 3, 4, 5, 6, 7, 8, 9, 10, 1],
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: linePlotter({ style: { strokeStyle: colors[1] } }),
      },
      {
        x: [1, 2, 3, 4, 8, 9, 10],
        y: [3, 4, 5, 6, 10, 1, 2],
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: linePlotter({ style: { strokeStyle: colors[2] } }),
      },
    ],
    scales: [{ id: "x-1" }, { id: "y-1" }],
    axes: [
      {
        scaleId: "x-1",
        size: 20,
      },
      {
        scaleId: "y-1",
      },
    ],
  },
} as ComponentMeta<typeof EmbeddedPlot>;

const Template: ComponentStory<typeof EmbeddedPlot> = ({ ...args }) => (
  <EmbeddedPlot {...args} />
);

export const Default = Template.bind({});
`,locationsMap:{default:{startLoc:{col:54,line:189},endLoc:{col:1,line:191},startBody:{col:54,line:189},endBody:{col:1,line:191}}}}},title:"Legend",args:{dimensions:{height:400},plugins:[{hooks:{onInit:({plot:e})=>M(()=>{e.update(t=>(t.series[0].y=new Array(t.series[0].x.length).fill(0).map((s,n)=>5+Math.sin(n/10+performance.now()/100)),t.series[1].y=new Array(t.series[1].x.length).fill(0).map((s,n)=>2+Math.cos(n/10+performance.now()/100)),t))})}},W([{color:i[0],label:"a"},{color:i[1],label:"a"},{color:i[2],label:"a"}])],padding:20,series:[{x:[1,2,3,4,5,6,7,8,9,10],y:[1,2,3,4,5,6,7,8,9,10],xScaleId:"x-1",yScaleId:"y-1",plotter:y({style:{strokeStyle:i[0]}})},{x:[1,2,3,4,5,6,7,8,9,10],y:[2,3,4,5,6,7,8,9,10,1],xScaleId:"x-1",yScaleId:"y-1",plotter:y({style:{strokeStyle:i[1]}})},{x:[1,2,3,4,8,9,10],y:[3,4,5,6,10,1,2],xScaleId:"x-1",yScaleId:"y-1",plotter:y({style:{strokeStyle:i[2]}})}],scales:[{id:"x-1"},{id:"y-1"}],axes:[{scaleId:"x-1",size:20},{scaleId:"y-1"}]}},D=g(({...e})=>A(_,{...e}),"Template"),X=D.bind({}),Y=["Default"];export{X as Default,Y as __namedExportsOrder,R as default};
//# sourceMappingURL=Legend.stories.6f91209b.js.map

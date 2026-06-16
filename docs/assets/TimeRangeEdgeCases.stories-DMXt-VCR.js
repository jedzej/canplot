import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{C as c}from"./frameContext-4kW5NNkg.js";import{L as l}from"./LinePlot-D1kkus2X.js";import{C as m,u as h}from"./ChartAreaInteractions-DehiYsCo.js";import{X as d,a as x,Y as p,m as u}from"./tickUtils-BPqun7od.js";import"./ScatterPlot-BKUWncqg.js";import"./BarPlot-BtF-isAa.js";import"./AreaPlot-DvyQwy0f.js";import"./SparklinePlot-yckDCpbo.js";import{r as y}from"./iframe-DU12p300.js";import"./CrossHair-CGLVnHnv.js";import"./SelectBox-KwIohCDL.js";import"./AxisOverlay-5miXb4MN.js";import"./preload-helper-PPVm8Dsz.js";const M={component:c,parameters:{layout:"fullscreen"},tags:["autodocs"]},s=Date.parse("2025-11-01T12:00:00Z"),e={name:"time min === max",render:()=>{const i=[{x:s,y:50}],[t,a]=y.useState(null),r=[{id:"t",axis:{position:"bottom",size:50},origin:"x",min:s,max:s},{id:"y",axis:{position:"left",size:50},origin:"y",min:0,max:100}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsxs("div",{style:{marginBottom:"20px"},children:["cssX: ",t?.cssX,", cssY: ",t?.cssY]}),n.jsxs(c,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:r},children:[n.jsx(l,{data:i,xScaleId:"t",yScaleId:"y",style:{strokeStyle:"blue",lineWidth:2}}),n.jsx(m,{children:n.jsx(g,{setCursor:a})}),n.jsx(d,{scaleId:"t",ticks:x({})}),n.jsx(p,{scaleId:"y",ticks:u()})]})]})}},g=({setCursor:i})=>{h("move",t=>{i(t.pointer??null)})},o={name:"y min === max",render:()=>{const i=[{x:s,y:50}],[t,a]=y.useState(null),r=[{id:"t",axis:{position:"bottom",size:50},origin:"x",min:s-1e3*60*60*24*7,max:s},{id:"y",axis:{position:"left",size:50},origin:"y",min:50,max:50}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsxs("div",{style:{marginBottom:"20px"},children:["cssX: ",t?.cssX,", cssY: ",t?.cssY]}),n.jsxs(c,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:r},children:[n.jsx(l,{data:i,xScaleId:"t",yScaleId:"y",style:{strokeStyle:"blue",lineWidth:2}}),n.jsx(m,{children:n.jsx(g,{setCursor:a})}),n.jsx(d,{scaleId:"t",ticks:x({})}),n.jsx(p,{scaleId:"y",ticks:u()})]})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "time min === max",
  render: () => {
    const data = [{
      x: refPoint,
      y: 50
    }];
    const [cursor, setCursor] = useState<InteractionsEventPointerPosition | null>(null);
    const scales: PlotScaleConfig[] = [{
      id: "t",
      axis: {
        position: "bottom",
        size: 50
      },
      origin: "x",
      min: refPoint,
      max: refPoint
    }, {
      id: "y",
      axis: {
        position: "left",
        size: 50
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    return <div style={{
      padding: "20px"
    }}>
                <div style={{
        marginBottom: "20px"
      }}>
                    cssX: {cursor?.cssX}, cssY: {cursor?.cssY}
                </div>
                <CanPlot style={{
        width: "100%",
        height: "400px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales
      }}>
                    <LinePlot data={data} xScaleId="t" yScaleId="y" style={{
          strokeStyle: "blue",
          lineWidth: 2
        }} />
                    <ChartAreaInteractions>
                        <Tooltip setCursor={setCursor} />
                    </ChartAreaInteractions>
                    <XTicks scaleId="t" ticks={makeTimeTicks({})} />
                    <YTicks scaleId="y" ticks={makeLinearTicks()} />
                </CanPlot>
            </div>;
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "y min === max",
  render: () => {
    const data = [{
      x: refPoint,
      y: 50
    }];
    const [cursor, setCursor] = useState<InteractionsEventPointerPosition | null>(null);
    const scales: PlotScaleConfig[] = [{
      id: "t",
      axis: {
        position: "bottom",
        size: 50
      },
      origin: "x",
      min: refPoint - 1000 * 60 * 60 * 24 * 7,
      max: refPoint
    }, {
      id: "y",
      axis: {
        position: "left",
        size: 50
      },
      origin: "y",
      min: 50,
      max: 50
    }];
    return <div style={{
      padding: "20px"
    }}>
                <div style={{
        marginBottom: "20px"
      }}>
                    cssX: {cursor?.cssX}, cssY: {cursor?.cssY}
                </div>
                <CanPlot style={{
        width: "100%",
        height: "400px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales
      }}>
                    <LinePlot data={data} xScaleId="t" yScaleId="y" style={{
          strokeStyle: "blue",
          lineWidth: 2
        }} />
                    <ChartAreaInteractions>
                        <Tooltip setCursor={setCursor} />
                    </ChartAreaInteractions>
                    <XTicks scaleId="t" ticks={makeTimeTicks({})} />
                    <YTicks scaleId="y" ticks={makeLinearTicks()} />
                </CanPlot>
            </div>;
  }
}`,...o.parameters?.docs?.source}}};const L=["TimeRangeMinEqualsMax","YRangeMinEqualsMax"];export{e as TimeRangeMinEqualsMax,o as YRangeMinEqualsMax,L as __namedExportsOrder,M as default};

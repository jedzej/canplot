import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{C as e}from"./CanPlot-BTwvQezf.js";import{S as o}from"./ScatterPlot-CA02XRpa.js";import{C as r}from"./ChartAreaInteractions-DD0JKm3V.js";import{C as s}from"./CrossHair-lj-tIA4e.js";import{S as l}from"./SelectBox-MDSI_HcO.js";import"./iframe-Csdz-dE8.js";import"./preload-helper-PPVm8Dsz.js";const S={title:"CanPlot/Configuration",component:e,parameters:{layout:"fullscreen"},tags:["autodocs"]},t={render:()=>{const a=[{id:"x",type:"linear",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",type:"linear",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(e,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:60,left:80,right:60,top:80},scales:a},children:[n.jsxs(r,{sync:{key:"padding",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(s,{}),n.jsx(l,{})]}),n.jsx(o,{data:Array.from({length:25},(d,i)=>({x:i*4,y:50+Math.random()*40-20})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"#fab005",strokeStyle:"#e67700",lineWidth:3}})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      type: "linear",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
      type: "linear",
      axis: {
        position: "left",
        size: 40
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    return <div style={{
      padding: "20px"
    }}>
        <CanPlot style={{
        width: "100%",
        height: "400px"
      }} configuration={{
        padding: {
          bottom: 60,
          left: 80,
          right: 60,
          top: 80
        },
        scales
      }}>
          <ChartAreaInteractions sync={{
          key: "padding",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox />
          </ChartAreaInteractions>

          <ScatterPlot data={Array.from({
          length: 25
        }, (_, i) => ({
          x: i * 4,
          y: 50 + Math.random() * 40 - 20
        }))} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#fab005",
          strokeStyle: "#e67700",
          lineWidth: 3
        }} />
        </CanPlot>
      </div>;
  }
}`,...t.parameters?.docs?.source}}};const C=["CustomPadding"];export{t as CustomPadding,C as __namedExportsOrder,S as default};

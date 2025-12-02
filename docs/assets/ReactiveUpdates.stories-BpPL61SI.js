import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{C as l,u}from"./CanPlot-d0tERzCM.js";import"./ChartAreaInteractions-Bwbyioka.js";import{r as c}from"./iframe-DP0Kcass.js";import"./CrossHair-Cy5Or7j5.js";import"./SelectBox-DlhsrPs_.js";import"./AxisOverlay-BR7qMC51.js";import"./tickUtils-BmMk5v5o.js";import"./preload-helper-PPVm8Dsz.js";const P={component:l,parameters:{layout:"fullscreen"},tags:["autodocs"]},r={render:()=>{const t=[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:0,max:1},{id:"y",axis:{position:"left",size:60},origin:"y",min:0,max:100}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Default Tick Styles"}),n.jsxs(l,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[n.jsx(o,{color:"red"}),n.jsx(o,{color:"blue"}),n.jsx(o,{color:"green"}),n.jsx(o,{color:"orange"}),n.jsx(o,{color:"purple"}),n.jsx(o,{color:"black"}),n.jsx(o,{color:"gray"}),n.jsx(o,{color:"pink"}),n.jsx(o,{color:"brown"}),n.jsx(o,{color:"cyan"})]})]})}},o=({color:t})=>{const[s,d]=c.useState(.5);return c.useEffect(()=>{const i=setInterval(()=>{d(Math.random())},1);return()=>clearInterval(i)},[]),u(({clampYPosToChartArea:i,getCtx:p,valToPos:x})=>{const e=p(),a=x(s,"x","canvas"),m=i(-1/0,"canvas"),h=i(1/0,"canvas");e.save(),e.beginPath(),e.moveTo(a,m),e.lineTo(a,h),e.strokeStyle=t,e.lineWidth=2,e.stroke(),e.closePath(),e.restore()},[s,t]),null};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 60
      },
      origin: "x",
      min: 0,
      max: 1
    }, {
      id: "y",
      axis: {
        position: "left",
        size: 60
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    return <div style={{
      padding: "20px"
    }}>
        <h3>Default Tick Styles</h3>
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
          <ReactiveChild color="red" />
          <ReactiveChild color="blue" />
          <ReactiveChild color="green" />
          <ReactiveChild color="orange" />
          <ReactiveChild color="purple" />
          <ReactiveChild color="black" />
          <ReactiveChild color="gray" />
          <ReactiveChild color="pink" />
          <ReactiveChild color="brown" />
          <ReactiveChild color="cyan" />
        </CanPlot>
      </div>;
  }
}`,...r.parameters?.docs?.source}}};const S=["ReactiveUpdates"];export{r as ReactiveUpdates,S as __namedExportsOrder,P as default};

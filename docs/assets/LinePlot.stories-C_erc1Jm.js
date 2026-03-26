import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{C as o}from"./frameContext-BCCbiwPn.js";import{L as s}from"./LinePlot-DtkSccAe.js";import{S as G}from"./ScatterPlot-BkWR2xZ9.js";import{C as x}from"./ChartAreaInteractions-PeitfYXB.js";import{C as y}from"./CrossHair-CX-bJiI3.js";import{S as p}from"./SelectBox-Dwc1F6kN.js";import"./BarPlot-DLPqn8LK.js";import"./AreaPlot-Bcqx-hQN.js";import"./SparklinePlot-DTmbC-Di.js";import{X as d,m as c}from"./tickUtils-Cn3ESM-D.js";import"./iframe-BO9ChRt0.js";import"./AxisOverlay-Tmo6hIFu.js";import"./preload-helper-PPVm8Dsz.js";const q={component:o,parameters:{layout:"fullscreen"},tags:["autodocs"]},m={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsx(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:n.jsx(s,{data:Array.from({length:20},(t,e)=>({x:e*5,y:50+Math.sin(e/2)*30})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"blue",lineWidth:2}})})})}},f={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsxs(x,{sync:{key:"line",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(y,{}),n.jsx(p,{makeStyle:()=>({backgroundColor:"#4499ff44"})})]}),n.jsx(s,{data:Array.from({length:50},(t,e)=>({x:e*2,y:50+Math.sin(e/5)*25+Math.cos(e/3)*15})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#ff6b6b",lineWidth:3}})]})})}},S={render:()=>{const i=Date.parse("2025-11-01T12:00:00Z"),t=[{id:"t",axis:{position:"bottom",size:50},origin:"x",min:i-1e3*60*60*24*7,max:i},{id:"y",axis:{position:"left",size:50},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[n.jsxs(x,{sync:{key:"timeseries-line",xViaScaleId:"t",yViaScaleId:"y"},children:[n.jsx(y,{}),n.jsx(p,{makeStyle:()=>({backgroundColor:"#51cf6644"})})]}),n.jsx(s,{data:Array.from({length:100},(e,a)=>({x:i-1e3*60*60*24*7+a*1e3*60*60*24*7/100,y:50+Math.sin(a/10)*20+Math.random()*10})),xScaleId:"t",yScaleId:"y",style:{strokeStyle:"#51cf66",lineWidth:2}})]})})}},u={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsxs(x,{sync:{key:"multi-line",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(y,{}),n.jsx(p,{makeStyle:()=>({backgroundColor:"#ffd43b44"})})]}),n.jsx(s,{data:Array.from({length:50},(t,e)=>({x:e*2,y:30+Math.sin(e/5)*20})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#ff6b6b",lineWidth:2}}),n.jsx(s,{data:Array.from({length:50},(t,e)=>({x:e*2,y:50+Math.cos(e/6)*25})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#51cf66",lineWidth:2}}),n.jsx(s,{data:Array.from({length:50},(t,e)=>({x:e*2,y:70+Math.sin(e/4)*15})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]})})}},b={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsxs(x,{sync:{key:"styles",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(y,{makeXStyle:({keys:t})=>t.altKey?{borderColor:"blue"}:void 0}),n.jsx(p,{makeStyle:()=>({backgroundColor:"#9f7aea44"})})]}),n.jsx(s,{data:Array.from({length:50},(t,e)=>({x:e*2,y:25+Math.sin(e/5)*15})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#ff6b6b",lineWidth:1}}),n.jsx(s,{data:Array.from({length:50},(t,e)=>({x:e*2,y:50+Math.cos(e/6)*15})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#51cf66",lineWidth:3}}),n.jsx(s,{data:Array.from({length:50},(t,e)=>({x:e*2,y:75+Math.sin(e/4)*10})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:5}})]})})}},I={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],t=Array.from({length:20},(e,a)=>({x:a*5,y:50+Math.sin(a/2)*30}));return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsxs(x,{sync:{key:"line-points",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(y,{}),n.jsx(p,{makeStyle:()=>({backgroundColor:"#ed893644"})})]}),n.jsx(s,{data:t,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#e67700",lineWidth:2}}),n.jsx(G,{data:t,xScaleId:"x",yScaleId:"y",style:{fillStyle:"#fab005",strokeStyle:"#e67700",lineWidth:2}})]})})}},k={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:-50,max:50}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsxs(x,{sync:{key:"smooth",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(y,{}),n.jsx(p,{makeStyle:()=>({backgroundColor:"#f0639744"})})]}),n.jsx(s,{data:Array.from({length:100},(t,e)=>({x:e,y:Math.sin(e/5)*30})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#f06397",lineWidth:2}}),n.jsx(s,{data:Array.from({length:100},(t,e)=>({x:e,y:Math.cos(e/5)*30})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]})})}},v={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y1",axis:{position:"left",size:50},origin:"y",min:0,max:100},{id:"y2",axis:{position:"right",size:50},origin:"y",min:-1e3,max:1e3}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsxs(x,{sync:{key:"dual-line",xViaScaleId:"x",yViaScaleId:"y1"},children:[n.jsx(y,{}),n.jsx(p,{makeStyle:()=>({backgroundColor:"#4499ff22"})})]}),n.jsx(s,{data:Array.from({length:50},(t,e)=>({x:e*2,y:50+Math.sin(e/5)*30})),xScaleId:"x",yScaleId:"y1",style:{strokeStyle:"#ff6b6b",lineWidth:2}}),n.jsx(s,{data:Array.from({length:50},(t,e)=>({x:e*2,y:Math.cos(e/6)*800})),xScaleId:"x",yScaleId:"y2",style:{strokeStyle:"#51cf66",lineWidth:2}})]})})}},j={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsxs(x,{sync:{key:"alpha-line",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(y,{}),n.jsx(p,{makeStyle:()=>({backgroundColor:"#4499ff22"})})]}),n.jsx(s,{data:Array.from({length:50},(t,e)=>({x:e*2,y:30+Math.sin(e/5)*25})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#ff6b6b",lineWidth:4},globalAlpha:1}),n.jsx(s,{data:Array.from({length:50},(t,e)=>({x:e*2,y:50+Math.cos(e/4)*25})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#51cf66",lineWidth:4},globalAlpha:.7}),n.jsx(s,{data:Array.from({length:50},(t,e)=>({x:e*2,y:70+Math.sin(e/3)*20})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:4},globalAlpha:.4})]})})}},C={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:50},origin:"y",min:-10,max:110}],t=l=>Array.from({length:100},(h,r)=>({x:r,y:l+Math.sin(r/8)*12})),e=[{label:"solid  ([])",lineDash:[],color:"#4c6ef5"},{label:"dashed  ([8, 4])",lineDash:[8,4],color:"#f03e3e"},{label:"dotted  ([2, 4])",lineDash:[2,4],color:"#2f9e44"},{label:"dash-dot  ([10, 4, 2, 4])",lineDash:[10,4,2,4],color:"#e67700"},{label:"long dash  ([16, 6])",lineDash:[16,6],color:"#9c36b5"},{label:"sparse dots  ([2, 12])",lineDash:[2,12],color:"#0c8599"}],a=100/(e.length+1);return n.jsxs("div",{style:{padding:"20px",fontFamily:"sans-serif"},children:[n.jsx("h3",{style:{marginBottom:"12px"},children:"Line Dash Patterns"}),n.jsx(o,{style:{width:"100%",height:"420px"},configuration:{padding:{bottom:20,left:20,right:140,top:20},scales:i},children:e.map(({lineDash:l,color:h},r)=>n.jsx(s,{data:t(a*(r+1)),xScaleId:"x",yScaleId:"y",style:{strokeStyle:h,lineWidth:2,lineDash:l}},r))}),n.jsx("div",{style:{marginTop:"12px",display:"flex",flexDirection:"column",gap:"6px"},children:e.map(({label:l,lineDash:h,color:r})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"13px"},children:[n.jsx("svg",{width:60,height:12,children:n.jsx("line",{x1:0,y1:6,x2:60,y2:6,stroke:r,strokeWidth:2,strokeDasharray:h.join(" ")})}),n.jsx("span",{style:{color:"#444"},children:l})]},l))})]})}},W={render:()=>{const t=[2,4,6,8,10],e=5,a=[0];for(const g of t)a.push(a.at(-1)+10+g);const l=g=>a.flatMap(L=>Array.from({length:10},(D,w)=>({x:L+w,y:g+L}))),h=a.at(-1)+10,r=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:h+1},{id:"y",axis:{position:"left",size:50},origin:"y",min:0,max:150}];return n.jsxs("div",{style:{padding:"20px",fontFamily:"sans-serif"},children:[n.jsxs("h3",{style:{marginBottom:"4px"},children:["Gaps — increasing gap sizes (",t.join(", ")," data units)"]}),n.jsxs("p",{style:{color:"#666",fontSize:"13px",margin:"0 0 12px"},children:[n.jsxs("code",{children:["xGapWidth=",e]})," (data units) — gaps ≤ ",e," are bridged; gaps > ",e," create visual breaks."]}),n.jsxs(o,{style:{width:"100%",height:"380px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:r},children:[n.jsx(d,{scaleId:"x",ticks:c()}),n.jsx(s,{data:l(50),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#f03e3e",lineWidth:2}}),n.jsx(s,{data:l(15),xScaleId:"x",yScaleId:"y",xGapWidth:e,style:{strokeStyle:"#4c6ef5",lineWidth:2}})]}),n.jsxs("div",{style:{marginTop:"12px",display:"flex",flexDirection:"column",gap:"6px",fontSize:"13px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[n.jsx("svg",{width:40,height:12,children:n.jsx("line",{x1:0,y1:6,x2:40,y2:6,stroke:"#f03e3e",strokeWidth:2})}),n.jsxs("span",{style:{color:"#444"},children:["No ",n.jsx("code",{children:"xGapWidth"})," — all segments bridged"]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[n.jsxs("svg",{width:40,height:12,children:[n.jsx("line",{x1:0,y1:6,x2:14,y2:6,stroke:"#4c6ef5",strokeWidth:2}),n.jsx("line",{x1:26,y1:6,x2:40,y2:6,stroke:"#4c6ef5",strokeWidth:2})]}),n.jsxs("span",{style:{color:"#444"},children:[n.jsxs("code",{children:["xGapWidth=",e]})," — gaps of ",t.filter(g=>g<=e).join(", ")," bridged; gaps of ",t.filter(g=>g>e).join(", ")," break"]})]})]})]})}},P={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:20,max:80},{id:"y",axis:{position:"left",size:50},origin:"y",min:20,max:80}],t=[{x:0,y:50},{x:10,y:70},{x:20,y:30},{x:30,y:90},{x:40,y:10},{x:50,y:60},{x:60,y:5},{x:70,y:95},{x:80,y:40},{x:90,y:55},{x:100,y:20}],e=[{label:'xStrategy="clip" / yStrategy="clip" (default)',xStrategy:"clip",yStrategy:"clip",color:"#4c6ef5",description:"Out-of-range segments are hidden entirely"},{label:'xStrategy="clamp" / yStrategy="clamp"',xStrategy:"clamp",yStrategy:"clamp",color:"#f03e3e",description:"Out-of-range values are clamped to the boundary"},{label:'xStrategy="clip" / yStrategy="clamp"',xStrategy:"clip",yStrategy:"clamp",color:"#37b24d",description:"X clipped, Y clamped to boundary"},{label:'xStrategy="clamp" / yStrategy="clip"',xStrategy:"clamp",yStrategy:"clip",color:"#f59f00",description:"X clamped to boundary, Y clipped"}];return n.jsxs("div",{style:{padding:"20px",fontFamily:"sans-serif"},children:[n.jsx("h3",{style:{marginBottom:"4px"},children:"Outlier Strategies — clip vs clamp"}),n.jsx("p",{style:{color:"#666",fontSize:"13px",margin:"0 0 16px"},children:"Scale range is [20, 80] on both axes. The data extends from 0–100 so several points fall outside the visible range. Each strategy combination handles out-of-bounds points differently."}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:e.map(a=>n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"13px",fontWeight:600,marginBottom:"2px",color:a.color},children:a.label}),n.jsx("div",{style:{fontSize:"12px",color:"#888",marginBottom:"8px"},children:a.description}),n.jsxs(o,{style:{width:"100%",height:"250px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsx(d,{scaleId:"x",ticks:c()}),n.jsx(s,{data:t,xScaleId:"x",yScaleId:"y",xStrategy:a.xStrategy,yStrategy:a.yStrategy,style:{strokeStyle:a.color,lineWidth:2}}),n.jsx(G,{data:t,xScaleId:"x",yScaleId:"y",xStrategy:a.xStrategy,yStrategy:a.yStrategy,radius:3,style:{fillStyle:a.color}})]})]},a.label))})]})}},z={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:20,max:80},{id:"y",axis:{position:"left",size:50},origin:"y",min:0,max:100}],t=Array.from({length:25},(e,a)=>({x:a*4,y:50+Math.sin(a*.5)*40}));return n.jsxs("div",{style:{padding:"20px",fontFamily:"sans-serif"},children:[n.jsx("h3",{style:{marginBottom:"4px"},children:"X Strategy — clip vs clamp"}),n.jsx("p",{style:{color:"#666",fontSize:"13px",margin:"0 0 16px"},children:"X scale range is [20, 80]. Data extends from 0–96. Compare how each strategy handles out-of-range X values."}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"13px",fontWeight:600,marginBottom:"4px",color:"#4c6ef5"},children:'xStrategy="clip" — out-of-range X segments hidden'}),n.jsxs(o,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsx(d,{scaleId:"x",ticks:c()}),n.jsx(s,{data:t,xScaleId:"x",yScaleId:"y",xStrategy:"clip",yStrategy:"clip",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]})]}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"13px",fontWeight:600,marginBottom:"4px",color:"#f03e3e"},children:'xStrategy="clamp" — out-of-range X pinned to boundary'}),n.jsxs(o,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsx(d,{scaleId:"x",ticks:c()}),n.jsx(s,{data:t,xScaleId:"x",yScaleId:"y",xStrategy:"clamp",yStrategy:"clip",style:{strokeStyle:"#f03e3e",lineWidth:2}})]})]})]})]})}},A={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:50},origin:"y",min:20,max:80}],t=Array.from({length:25},(e,a)=>({x:a*4,y:50+Math.sin(a*.4)*45}));return n.jsxs("div",{style:{padding:"20px",fontFamily:"sans-serif"},children:[n.jsx("h3",{style:{marginBottom:"4px"},children:"Y Strategy — clip vs clamp"}),n.jsxs("p",{style:{color:"#666",fontSize:"13px",margin:"0 0 16px"},children:["Y scale range is [20, 80]. The sine wave peaks exceed the boundaries. Both charts use ",n.jsx("code",{children:"xGapWidth=5"})," so that clipped points produce visible line breaks."]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"13px",fontWeight:600,marginBottom:"4px",color:"#4c6ef5"},children:'yStrategy="clip" — clipped points break the line (gaps)'}),n.jsxs(o,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsx(d,{scaleId:"x",ticks:c()}),n.jsx(s,{data:t,xScaleId:"x",yScaleId:"y",xStrategy:"clip",yStrategy:"clip",xGapWidth:5,style:{strokeStyle:"#4c6ef5",lineWidth:2}})]})]}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"13px",fontWeight:600,marginBottom:"4px",color:"#f03e3e"},children:'yStrategy="clamp" — out-of-range Y pinned (flat plateaus)'}),n.jsxs(o,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsx(d,{scaleId:"x",ticks:c()}),n.jsx(s,{data:t,xScaleId:"x",yScaleId:"y",xStrategy:"clip",yStrategy:"clamp",xGapWidth:5,style:{strokeStyle:"#f03e3e",lineWidth:2}})]})]})]})]})}},_={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:20,max:80},{id:"y",axis:{position:"left",size:50},origin:"y",min:20,max:80}],t=Array.from({length:25},(e,a)=>({x:a*4,y:50+Math.sin(a*.4)*45}));return n.jsxs("div",{style:{padding:"20px",fontFamily:"sans-serif"},children:[n.jsx("h3",{style:{marginBottom:"4px"},children:"Clip vs Clamp — both axes"}),n.jsxs("p",{style:{color:"#666",fontSize:"13px",margin:"0 0 16px"},children:["Both X and Y scale ranges are [20, 80]. Data extends beyond on both axes. ",n.jsx("code",{children:"xGapWidth=5"})," is used so clipped gaps are visible."]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"13px",fontWeight:600,marginBottom:"4px",color:"#4c6ef5"},children:'xStrategy="clip" / yStrategy="clip" — out-of-range segments hidden'}),n.jsxs(o,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsx(d,{scaleId:"x",ticks:c()}),n.jsx(s,{data:t,xScaleId:"x",yScaleId:"y",xStrategy:"clip",yStrategy:"clip",xGapWidth:5,style:{strokeStyle:"#4c6ef5",lineWidth:2}})]})]}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"13px",fontWeight:600,marginBottom:"4px",color:"#f03e3e"},children:'xStrategy="clamp" / yStrategy="clamp" — values pinned to boundaries'}),n.jsxs(o,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsx(d,{scaleId:"x",ticks:c()}),n.jsx(s,{data:t,xScaleId:"x",yScaleId:"y",xStrategy:"clamp",yStrategy:"clamp",xGapWidth:5,style:{strokeStyle:"#f03e3e",lineWidth:2}})]})]})]})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
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
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales
      }}>
          <LinePlot data={Array.from({
          length: 20
        }, (_, i) => ({
          x: i * 5,
          y: 50 + Math.sin(i / 2) * 30
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "blue",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
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
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales
      }}>
          <ChartAreaInteractions sync={{
          key: "line",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#4499ff44"
          })} />
          </ChartAreaInteractions>

          <LinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 50 + Math.sin(i / 5) * 25 + Math.cos(i / 3) * 15
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#ff6b6b",
          lineWidth: 3
        }} />
        </CanPlot>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const refPoint = Date.parse("2025-11-01T12:00:00Z");
    const scales: PlotScaleConfig[] = [{
      id: "t",
      axis: {
        position: "bottom",
        size: 50
      },
      origin: "x",
      min: refPoint - 1000 * 60 * 60 * 24 * 7,
      // 7 days ago
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
          <ChartAreaInteractions sync={{
          key: "timeseries-line",
          xViaScaleId: "t",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#51cf6644"
          })} />
          </ChartAreaInteractions>

          <LinePlot data={Array.from({
          length: 100
        }, (_, i) => ({
          x: refPoint - 1000 * 60 * 60 * 24 * 7 + i * 1000 * 60 * 60 * 24 * 7 / 100,
          y: 50 + Math.sin(i / 10) * 20 + Math.random() * 10
        }))} xScaleId="t" yScaleId="y" style={{
          strokeStyle: "#51cf66",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
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
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales
      }}>
          <ChartAreaInteractions sync={{
          key: "multi-line",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#ffd43b44"
          })} />
          </ChartAreaInteractions>

          <LinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 30 + Math.sin(i / 5) * 20
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#ff6b6b",
          lineWidth: 2
        }} />

          <LinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 50 + Math.cos(i / 6) * 25
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#51cf66",
          lineWidth: 2
        }} />

          <LinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 70 + Math.sin(i / 4) * 15
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#4c6ef5",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
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
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales
      }}>
          <ChartAreaInteractions sync={{
          key: "styles",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair makeXStyle={({
            keys
          }) => keys.altKey ? {
            borderColor: "blue"
          } : undefined} />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#9f7aea44"
          })} />
          </ChartAreaInteractions>

          {/* Thin line */}
          <LinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 25 + Math.sin(i / 5) * 15
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#ff6b6b",
          lineWidth: 1
        }} />

          {/* Medium line */}
          <LinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 50 + Math.cos(i / 6) * 15
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#51cf66",
          lineWidth: 3
        }} />

          {/* Thick line */}
          <LinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 75 + Math.sin(i / 4) * 10
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#4c6ef5",
          lineWidth: 5
        }} />
        </CanPlot>
      </div>;
  }
}`,...b.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
      axis: {
        position: "left",
        size: 40
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    const data = Array.from({
      length: 20
    }, (_, i) => ({
      x: i * 5,
      y: 50 + Math.sin(i / 2) * 30
    }));
    return <div style={{
      padding: "20px"
    }}>
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
          <ChartAreaInteractions sync={{
          key: "line-points",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#ed893644"
          })} />
          </ChartAreaInteractions>

          {/* Line */}
          <LinePlot data={data} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#e67700",
          lineWidth: 2
        }} />

          {/* Points */}
          <ScatterPlot data={data} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#fab005",
          strokeStyle: "#e67700",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...I.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
      axis: {
        position: "left",
        size: 40
      },
      origin: "y",
      min: -50,
      max: 50
    }];
    return <div style={{
      padding: "20px"
    }}>
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
          <ChartAreaInteractions sync={{
          key: "smooth",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#f0639744"
          })} />
          </ChartAreaInteractions>

          {/* Sine wave */}
          <LinePlot data={Array.from({
          length: 100
        }, (_, i) => ({
          x: i,
          y: Math.sin(i / 5) * 30
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#f06397",
          lineWidth: 2
        }} />

          {/* Cosine wave */}
          <LinePlot data={Array.from({
          length: 100
        }, (_, i) => ({
          x: i,
          y: Math.cos(i / 5) * 30
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#4c6ef5",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...k.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y1",
      axis: {
        position: "left",
        size: 50
      },
      origin: "y",
      min: 0,
      max: 100
    }, {
      id: "y2",
      axis: {
        position: "right",
        size: 50
      },
      origin: "y",
      min: -1000,
      max: 1000
    }];
    return <div style={{
      padding: "20px"
    }}>
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
          <ChartAreaInteractions sync={{
          key: "dual-line",
          xViaScaleId: "x",
          yViaScaleId: "y1"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#4499ff22"
          })} />
          </ChartAreaInteractions>

          {/* Line on left Y-axis */}
          <LinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 50 + Math.sin(i / 5) * 30
        }))} xScaleId="x" yScaleId="y1" style={{
          strokeStyle: "#ff6b6b",
          lineWidth: 2
        }} />

          {/* Line on right Y-axis */}
          <LinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: Math.cos(i / 6) * 800
        }))} xScaleId="x" yScaleId="y2" style={{
          strokeStyle: "#51cf66",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...v.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
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
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales
      }}>
          <ChartAreaInteractions sync={{
          key: "alpha-line",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#4499ff22"
          })} />
          </ChartAreaInteractions>

          {/* Full opacity (default) */}
          <LinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 30 + Math.sin(i / 5) * 25
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#ff6b6b",
          lineWidth: 4
        }} globalAlpha={1} />

          {/* 70% opacity */}
          <LinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 50 + Math.cos(i / 4) * 25
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#51cf66",
          lineWidth: 4
        }} globalAlpha={0.7} />

          {/* 40% opacity */}
          <LinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 70 + Math.sin(i / 3) * 20
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#4c6ef5",
          lineWidth: 4
        }} globalAlpha={0.4} />
        </CanPlot>
      </div>;
  }
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
      axis: {
        position: "left",
        size: 50
      },
      origin: "y",
      min: -10,
      max: 110
    }];
    const wave = (offset: number) => Array.from({
      length: 100
    }, (_, i) => ({
      x: i,
      y: offset + Math.sin(i / 8) * 12
    }));
    const patterns: {
      label: string;
      lineDash: number[];
      color: string;
    }[] = [{
      label: "solid  ([])",
      lineDash: [],
      color: "#4c6ef5"
    }, {
      label: "dashed  ([8, 4])",
      lineDash: [8, 4],
      color: "#f03e3e"
    }, {
      label: "dotted  ([2, 4])",
      lineDash: [2, 4],
      color: "#2f9e44"
    }, {
      label: "dash-dot  ([10, 4, 2, 4])",
      lineDash: [10, 4, 2, 4],
      color: "#e67700"
    }, {
      label: "long dash  ([16, 6])",
      lineDash: [16, 6],
      color: "#9c36b5"
    }, {
      label: "sparse dots  ([2, 12])",
      lineDash: [2, 12],
      color: "#0c8599"
    }];
    const spacing = 100 / (patterns.length + 1);
    return <div style={{
      padding: "20px",
      fontFamily: "sans-serif"
    }}>
        <h3 style={{
        marginBottom: "12px"
      }}>Line Dash Patterns</h3>
        <CanPlot style={{
        width: "100%",
        height: "420px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 140,
          top: 20
        },
        scales
      }}>
          {patterns.map(({
          lineDash,
          color
        }, idx) => <LinePlot key={idx} data={wave(spacing * (idx + 1))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: color,
          lineWidth: 2,
          lineDash
        }} />)}
        </CanPlot>

        {/* Legend */}
        <div style={{
        marginTop: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "6px"
      }}>
          {patterns.map(({
          label,
          lineDash,
          color
        }) => <div key={label} style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontSize: "13px"
        }}>
              <svg width={60} height={12}>
                <line x1={0} y1={6} x2={60} y2={6} stroke={color} strokeWidth={2} strokeDasharray={lineDash.join(" ")} />
              </svg>
              <span style={{
            color: "#444"
          }}>{label}</span>
            </div>)}
        </div>
      </div>;
  }
}`,...C.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    // 6 segments (10 points each), separated by gaps of 2, 4, 6, 8, 10 data units.
    // xGapWidth=5 → gaps ≤5 are bridged (2, 4), gaps >5 create visual breaks (6, 8, 10).
    const SEG_LEN = 10;
    const GAP_SIZES = [2, 4, 6, 8, 10];
    const X_GAP_WIDTH = 5;

    // Build segment start positions: each segment ends at start+SEG_LEN-1,
    // next segment starts after the gap.
    const segStarts: number[] = [0];
    for (const g of GAP_SIZES) {
      segStarts.push(segStarts.at(-1)! + SEG_LEN + g);
    }
    // segStarts = [0, 12, 26, 42, 60, 80]
    // gaps (first pt to first pt of next): 12, 14, 16, 18, 20 — nope, let me recalc
    // seg ends at start+9; next starts at start+9+gap+1 so delta between last and first = gap+1?
    // Actually: last pt x = start+9, next first pt x = next_start.
    // delta = next_start - (start+9). We want delta == gap.
    // So next_start = start + 9 + gap + 1 = start + SEG_LEN + gap.
    // Correct: segStarts[i+1] = segStarts[i] + SEG_LEN + GAP_SIZES[i]

    const makeData = (yBase: number) => segStarts.flatMap(s => Array.from({
      length: SEG_LEN
    }, (_, i) => ({
      x: s + i,
      y: yBase + s
    })));
    const maxX = segStarts.at(-1)! + SEG_LEN;
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: maxX + 1
    }, {
      id: "y",
      axis: {
        position: "left",
        size: 50
      },
      origin: "y",
      min: 0,
      max: 150
    }];
    return <div style={{
      padding: "20px",
      fontFamily: "sans-serif"
    }}>
        <h3 style={{
        marginBottom: "4px"
      }}>Gaps — increasing gap sizes ({GAP_SIZES.join(", ")} data units)</h3>
        <p style={{
        color: "#666",
        fontSize: "13px",
        margin: "0 0 12px"
      }}>
          <code>xGapWidth={X_GAP_WIDTH}</code> (data units) — gaps ≤ {X_GAP_WIDTH} are bridged;
          gaps &gt; {X_GAP_WIDTH} create visual breaks.
        </p>

        <CanPlot style={{
        width: "100%",
        height: "380px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales
      }}>
          <XTicks scaleId="x" ticks={makeLinearTicks()} />

          {/* Top — no xGapWidth: all segments bridged */}
          <LinePlot data={makeData(50)} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#f03e3e",
          lineWidth: 2
        }} />

          {/* Bottom — xGapWidth=5: small gaps bridged, large gaps break */}
          <LinePlot data={makeData(15)} xScaleId="x" yScaleId="y" xGapWidth={X_GAP_WIDTH} style={{
          strokeStyle: "#4c6ef5",
          lineWidth: 2
        }} />
        </CanPlot>

        <div style={{
        marginTop: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        fontSize: "13px"
      }}>
          <div style={{
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }}>
            <svg width={40} height={12}>
              <line x1={0} y1={6} x2={40} y2={6} stroke="#f03e3e" strokeWidth={2} />
            </svg>
            <span style={{
            color: "#444"
          }}>No <code>xGapWidth</code> — all segments bridged</span>
          </div>
          <div style={{
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }}>
            <svg width={40} height={12}>
              <line x1={0} y1={6} x2={14} y2={6} stroke="#4c6ef5" strokeWidth={2} />
              <line x1={26} y1={6} x2={40} y2={6} stroke="#4c6ef5" strokeWidth={2} />
            </svg>
            <span style={{
            color: "#444"
          }}>
              <code>xGapWidth={X_GAP_WIDTH}</code> — gaps of {GAP_SIZES.filter(g => g <= X_GAP_WIDTH).join(", ")} bridged;
              gaps of {GAP_SIZES.filter(g => g > X_GAP_WIDTH).join(", ")} break
            </span>
          </div>
        </div>
      </div>;
  }
}`,...W.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 20,
      max: 80
    }, {
      id: "y",
      axis: {
        position: "left",
        size: 50
      },
      origin: "y",
      min: 20,
      max: 80
    }];

    // Data that intentionally extends beyond the scale boundaries
    const data = [{
      x: 0,
      y: 50
    }, {
      x: 10,
      y: 70
    }, {
      x: 20,
      y: 30
    }, {
      x: 30,
      y: 90
    }, {
      x: 40,
      y: 10
    }, {
      x: 50,
      y: 60
    }, {
      x: 60,
      y: 5
    }, {
      x: 70,
      y: 95
    }, {
      x: 80,
      y: 40
    }, {
      x: 90,
      y: 55
    }, {
      x: 100,
      y: 20
    }];
    const strategies = [{
      label: 'xStrategy="clip" / yStrategy="clip" (default)',
      xStrategy: "clip" as const,
      yStrategy: "clip" as const,
      color: "#4c6ef5",
      description: "Out-of-range segments are hidden entirely"
    }, {
      label: 'xStrategy="clamp" / yStrategy="clamp"',
      xStrategy: "clamp" as const,
      yStrategy: "clamp" as const,
      color: "#f03e3e",
      description: "Out-of-range values are clamped to the boundary"
    }, {
      label: 'xStrategy="clip" / yStrategy="clamp"',
      xStrategy: "clip" as const,
      yStrategy: "clamp" as const,
      color: "#37b24d",
      description: "X clipped, Y clamped to boundary"
    }, {
      label: 'xStrategy="clamp" / yStrategy="clip"',
      xStrategy: "clamp" as const,
      yStrategy: "clip" as const,
      color: "#f59f00",
      description: "X clamped to boundary, Y clipped"
    }];
    return <div style={{
      padding: "20px",
      fontFamily: "sans-serif"
    }}>
        <h3 style={{
        marginBottom: "4px"
      }}>
          Outlier Strategies — clip vs clamp
        </h3>
        <p style={{
        color: "#666",
        fontSize: "13px",
        margin: "0 0 16px"
      }}>
          Scale range is [20, 80] on both axes. The data extends from 0–100 so
          several points fall outside the visible range. Each strategy
          combination handles out-of-bounds points differently.
        </p>

        <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px"
      }}>
          {strategies.map(s => <div key={s.label}>
              <div style={{
            fontSize: "13px",
            fontWeight: 600,
            marginBottom: "2px",
            color: s.color
          }}>
                {s.label}
              </div>
              <div style={{
            fontSize: "12px",
            color: "#888",
            marginBottom: "8px"
          }}>
                {s.description}
              </div>
              <CanPlot style={{
            width: "100%",
            height: "250px"
          }} configuration={{
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
              top: 20
            },
            scales
          }}>
                <XTicks scaleId="x" ticks={makeLinearTicks()} />
                <LinePlot data={data} xScaleId="x" yScaleId="y" xStrategy={s.xStrategy} yStrategy={s.yStrategy} style={{
              strokeStyle: s.color,
              lineWidth: 2
            }} />
                <ScatterPlot data={data} xScaleId="x" yScaleId="y" xStrategy={s.xStrategy} yStrategy={s.yStrategy} radius={3} style={{
              fillStyle: s.color
            }} />
              </CanPlot>
            </div>)}
        </div>
      </div>;
  }
}`,...P.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 20,
      max: 80
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
    const data = Array.from({
      length: 25
    }, (_, i) => ({
      x: i * 4,
      y: 50 + Math.sin(i * 0.5) * 40
    }));
    return <div style={{
      padding: "20px",
      fontFamily: "sans-serif"
    }}>
        <h3 style={{
        marginBottom: "4px"
      }}>
          X Strategy — clip vs clamp
        </h3>
        <p style={{
        color: "#666",
        fontSize: "13px",
        margin: "0 0 16px"
      }}>
          X scale range is [20, 80]. Data extends from 0–96. Compare how each
          strategy handles out-of-range X values.
        </p>

        <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px"
      }}>
          <div>
            <div style={{
            fontSize: "13px",
            fontWeight: 600,
            marginBottom: "4px",
            color: "#4c6ef5"
          }}>
              xStrategy="clip" — out-of-range X segments hidden
            </div>
            <CanPlot style={{
            width: "100%",
            height: "300px"
          }} configuration={{
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
              top: 20
            },
            scales
          }}>
              <XTicks scaleId="x" ticks={makeLinearTicks()} />
              <LinePlot data={data} xScaleId="x" yScaleId="y" xStrategy="clip" yStrategy="clip" style={{
              strokeStyle: "#4c6ef5",
              lineWidth: 2
            }} />
            </CanPlot>
          </div>
          <div>
            <div style={{
            fontSize: "13px",
            fontWeight: 600,
            marginBottom: "4px",
            color: "#f03e3e"
          }}>
              xStrategy="clamp" — out-of-range X pinned to boundary
            </div>
            <CanPlot style={{
            width: "100%",
            height: "300px"
          }} configuration={{
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
              top: 20
            },
            scales
          }}>
              <XTicks scaleId="x" ticks={makeLinearTicks()} />
              <LinePlot data={data} xScaleId="x" yScaleId="y" xStrategy="clamp" yStrategy="clip" style={{
              strokeStyle: "#f03e3e",
              lineWidth: 2
            }} />
            </CanPlot>
          </div>
        </div>
      </div>;
  }
}`,...z.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
      axis: {
        position: "left",
        size: 50
      },
      origin: "y",
      min: 20,
      max: 80
    }];
    const data = Array.from({
      length: 25
    }, (_, i) => ({
      x: i * 4,
      y: 50 + Math.sin(i * 0.4) * 45
    }));
    return <div style={{
      padding: "20px",
      fontFamily: "sans-serif"
    }}>
        <h3 style={{
        marginBottom: "4px"
      }}>
          Y Strategy — clip vs clamp
        </h3>
        <p style={{
        color: "#666",
        fontSize: "13px",
        margin: "0 0 16px"
      }}>
          Y scale range is [20, 80]. The sine wave peaks exceed the boundaries.
          Both charts use <code>xGapWidth=5</code> so that clipped points
          produce visible line breaks.
        </p>

        <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px"
      }}>
          <div>
            <div style={{
            fontSize: "13px",
            fontWeight: 600,
            marginBottom: "4px",
            color: "#4c6ef5"
          }}>
              yStrategy="clip" — clipped points break the line (gaps)
            </div>
            <CanPlot style={{
            width: "100%",
            height: "300px"
          }} configuration={{
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
              top: 20
            },
            scales
          }}>
              <XTicks scaleId="x" ticks={makeLinearTicks()} />
              <LinePlot data={data} xScaleId="x" yScaleId="y" xStrategy="clip" yStrategy="clip" xGapWidth={5} style={{
              strokeStyle: "#4c6ef5",
              lineWidth: 2
            }} />
            </CanPlot>
          </div>
          <div>
            <div style={{
            fontSize: "13px",
            fontWeight: 600,
            marginBottom: "4px",
            color: "#f03e3e"
          }}>
              yStrategy="clamp" — out-of-range Y pinned (flat plateaus)
            </div>
            <CanPlot style={{
            width: "100%",
            height: "300px"
          }} configuration={{
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
              top: 20
            },
            scales
          }}>
              <XTicks scaleId="x" ticks={makeLinearTicks()} />
              <LinePlot data={data} xScaleId="x" yScaleId="y" xStrategy="clip" yStrategy="clamp" xGapWidth={5} style={{
              strokeStyle: "#f03e3e",
              lineWidth: 2
            }} />
            </CanPlot>
          </div>
        </div>
      </div>;
  }
}`,...A.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 20,
      max: 80
    }, {
      id: "y",
      axis: {
        position: "left",
        size: 50
      },
      origin: "y",
      min: 20,
      max: 80
    }];
    const data = Array.from({
      length: 25
    }, (_, i) => ({
      x: i * 4,
      y: 50 + Math.sin(i * 0.4) * 45
    }));
    return <div style={{
      padding: "20px",
      fontFamily: "sans-serif"
    }}>
        <h3 style={{
        marginBottom: "4px"
      }}>
          Clip vs Clamp — both axes
        </h3>
        <p style={{
        color: "#666",
        fontSize: "13px",
        margin: "0 0 16px"
      }}>
          Both X and Y scale ranges are [20, 80]. Data extends beyond on both
          axes. <code>xGapWidth=5</code> is used so clipped gaps are visible.
        </p>

        <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px"
      }}>
          <div>
            <div style={{
            fontSize: "13px",
            fontWeight: 600,
            marginBottom: "4px",
            color: "#4c6ef5"
          }}>
              xStrategy="clip" / yStrategy="clip" — out-of-range segments hidden
            </div>
            <CanPlot style={{
            width: "100%",
            height: "300px"
          }} configuration={{
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
              top: 20
            },
            scales
          }}>
              <XTicks scaleId="x" ticks={makeLinearTicks()} />
              <LinePlot data={data} xScaleId="x" yScaleId="y" xStrategy="clip" yStrategy="clip" xGapWidth={5} style={{
              strokeStyle: "#4c6ef5",
              lineWidth: 2
            }} />
            </CanPlot>
          </div>
          <div>
            <div style={{
            fontSize: "13px",
            fontWeight: 600,
            marginBottom: "4px",
            color: "#f03e3e"
          }}>
              xStrategy="clamp" / yStrategy="clamp" — values pinned to boundaries
            </div>
            <CanPlot style={{
            width: "100%",
            height: "300px"
          }} configuration={{
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
              top: 20
            },
            scales
          }}>
              <XTicks scaleId="x" ticks={makeLinearTicks()} />
              <LinePlot data={data} xScaleId="x" yScaleId="y" xStrategy="clamp" yStrategy="clamp" xGapWidth={5} style={{
              strokeStyle: "#f03e3e",
              lineWidth: 2
            }} />
            </CanPlot>
          </div>
        </div>
      </div>;
  }
}`,..._.parameters?.docs?.source}}};const J=["Basic","WithInteractions","TimeSeries","MultipleLines","DifferentStyles","LineWithPoints","SmoothCurves","DualYAxis","GlobalAlpha","LineDash","Gaps","OutlierStrategies","XStrategyComparison","YStrategyComparison","ClipVsClamp"];export{m as Basic,_ as ClipVsClamp,b as DifferentStyles,v as DualYAxis,W as Gaps,j as GlobalAlpha,C as LineDash,I as LineWithPoints,u as MultipleLines,P as OutlierStrategies,k as SmoothCurves,S as TimeSeries,f as WithInteractions,z as XStrategyComparison,A as YStrategyComparison,J as __namedExportsOrder,q as default};

import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./iframe-DOGe1Luy.js";import{C as l}from"./frameContext-CMUXoEkQ.js";import{C as Y}from"./ChartAreaInteractions-DZIpulDx.js";import{L as r}from"./LinePlot-OjkeFwbj.js";import{X as o,m as e,Y as c,a as D}from"./tickUtils-sd6wIsh6.js";import"./preload-helper-PPVm8Dsz.js";const q={component:l,parameters:{layout:"fullscreen"},tags:["autodocs"]},b={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:60},origin:"y",min:0,max:100}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Default Tick Styles"}),n.jsxs(l,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsx(o,{scaleId:"x",ticks:e()}),n.jsx(c,{scaleId:"y",ticks:e()}),n.jsx(r,{data:Array.from({length:20},(a,t)=>({x:t*5,y:50+Math.sin(t/2)*30})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]})]})}},u={render:()=>{const i=[{id:"x1",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y1",axis:{position:"left",size:60},origin:"y",min:0,max:100}],a=[{id:"x2",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y2",axis:{position:"left",size:60},origin:"y",min:0,max:100}],t=[{id:"x3",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y3",axis:{position:"left",size:60},origin:"y",min:0,max:100}],s=Array.from({length:20},(x,y)=>({x:y*5,y:50+Math.sin(y/2)*30}));return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Small Ticks (tickSize: 3)"}),n.jsxs(l,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsx(o,{scaleId:"x1",ticks:e(),tickSize:3}),n.jsx(c,{scaleId:"y1",ticks:e(),tickSize:3}),n.jsx(r,{data:s,xScaleId:"x1",yScaleId:"y1",style:{strokeStyle:"#51cf66",lineWidth:2}})]}),n.jsx("h3",{style:{marginTop:"40px"},children:"Medium Ticks (tickSize: 8)"}),n.jsxs(l,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:a},children:[n.jsx(o,{scaleId:"x2",ticks:e(),tickSize:8}),n.jsx(c,{scaleId:"y2",ticks:e(),tickSize:8}),n.jsx(r,{data:s,xScaleId:"x2",yScaleId:"y2",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]}),n.jsx("h3",{style:{marginTop:"40px"},children:"Large Ticks (tickSize: 15)"}),n.jsxs(l,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[n.jsx(o,{scaleId:"x3",ticks:e(),tickSize:15}),n.jsx(c,{scaleId:"y3",ticks:e(),tickSize:15}),n.jsx(r,{data:s,xScaleId:"x3",yScaleId:"y3",style:{strokeStyle:"#ff6b6b",lineWidth:2}})]})]})}},T={render:()=>{const i=[{id:"x1",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y1",axis:{position:"left",size:60},origin:"y",min:0,max:100}],a=[{id:"x2",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y2",axis:{position:"left",size:60},origin:"y",min:0,max:100}],t=[{id:"x3",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y3",axis:{position:"left",size:60},origin:"y",min:0,max:100}],s=Array.from({length:20},(x,y)=>({x:y*5,y:50+Math.sin(y/2)*30}));return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Thin Blue Ticks"}),n.jsxs(l,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsx(o,{scaleId:"x1",ticks:e(),tickStyle:{strokeStyle:"#4c6ef5",lineWidth:1},labelStyle:{fillStyle:"#4c6ef5",font:"12px sans-serif"}}),n.jsx(c,{scaleId:"y1",ticks:e(),tickStyle:{strokeStyle:"#4c6ef5",lineWidth:1},labelStyle:{fillStyle:"#4c6ef5",font:"12px sans-serif"}}),n.jsx(r,{data:s,xScaleId:"x1",yScaleId:"y1",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]}),n.jsx("h3",{style:{marginTop:"40px"},children:"Bold Red Ticks"}),n.jsxs(l,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:a},children:[n.jsx(o,{scaleId:"x2",ticks:e(),tickStyle:{strokeStyle:"#ff6b6b",lineWidth:3},labelStyle:{fillStyle:"#ff6b6b",font:"bold 14px sans-serif"}}),n.jsx(c,{scaleId:"y2",ticks:e(),tickStyle:{strokeStyle:"#ff6b6b",lineWidth:3},labelStyle:{fillStyle:"#ff6b6b",font:"bold 14px sans-serif"}}),n.jsx(r,{data:s,xScaleId:"x2",yScaleId:"y2",style:{strokeStyle:"#ff6b6b",lineWidth:2}})]}),n.jsx("h3",{style:{marginTop:"40px"},children:"Italic Green Ticks with Serif Font"}),n.jsxs(l,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[n.jsx(o,{scaleId:"x3",ticks:e(),tickStyle:{strokeStyle:"#51cf66",lineWidth:2},labelStyle:{fillStyle:"#51cf66",font:"italic 13px serif"}}),n.jsx(c,{scaleId:"y3",ticks:e(),tickStyle:{strokeStyle:"#51cf66",lineWidth:2},labelStyle:{fillStyle:"#51cf66",font:"italic 13px serif"}}),n.jsx(r,{data:s,xScaleId:"x3",yScaleId:"y3",style:{strokeStyle:"#51cf66",lineWidth:2}})]})]})}},I={render:()=>{const i=[{id:"x1",axis:{position:"bottom",size:70},origin:"x",min:0,max:100},{id:"y1",axis:{position:"left",size:70},origin:"y",min:0,max:100}],a=[{id:"x2",axis:{position:"bottom",size:70},origin:"x",min:0,max:100},{id:"y2",axis:{position:"left",size:70},origin:"y",min:0,max:100}],t=[{id:"x3",axis:{position:"bottom",size:80},origin:"x",min:0,max:100},{id:"y3",axis:{position:"left",size:80},origin:"y",min:0,max:100}],s=Array.from({length:20},(x,y)=>({x:y*5,y:50+Math.sin(y/2)*30}));return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Small Sans-Serif Font"}),n.jsxs(l,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsx(o,{scaleId:"x1",ticks:e(),labelStyle:{font:"10px sans-serif",fillStyle:"#495057"}}),n.jsx(c,{scaleId:"y1",ticks:e(),labelStyle:{font:"10px sans-serif",fillStyle:"#495057"}}),n.jsx(r,{data:s,xScaleId:"x1",yScaleId:"y1",style:{strokeStyle:"#868e96",lineWidth:2}})]}),n.jsx("h3",{style:{marginTop:"40px"},children:"Bold Large Font"}),n.jsxs(l,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:a},children:[n.jsx(o,{scaleId:"x2",ticks:e(),labelStyle:{font:"bold 16px sans-serif",fillStyle:"#212529"}}),n.jsx(c,{scaleId:"y2",ticks:e(),labelStyle:{font:"bold 16px sans-serif",fillStyle:"#212529"}}),n.jsx(r,{data:s,xScaleId:"x2",yScaleId:"y2",style:{strokeStyle:"#343a40",lineWidth:2}})]}),n.jsx("h3",{style:{marginTop:"40px"},children:"Monospace Font with Color"}),n.jsxs(l,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[n.jsx(o,{scaleId:"x3",ticks:e(),labelStyle:{font:"14px monospace",fillStyle:"#9775fa"}}),n.jsx(c,{scaleId:"y3",ticks:e(),labelStyle:{font:"14px monospace",fillStyle:"#9775fa"}}),n.jsx(r,{data:s,xScaleId:"x3",yScaleId:"y3",style:{strokeStyle:"#9775fa",lineWidth:2}})]})]})}},z={render:()=>{const i=[{id:"x1",axis:{position:"bottom",size:70},origin:"x",min:0,max:100},{id:"y1",axis:{position:"left",size:70},origin:"y",min:0,max:100}],a=[{id:"x2",axis:{position:"bottom",size:90},origin:"x",min:0,max:100},{id:"y2",axis:{position:"left",size:90},origin:"y",min:0,max:100}],t=Array.from({length:20},(s,x)=>({x:x*5,y:50+Math.sin(x/2)*30}));return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Tight Label Gap (labelGap: 8)"}),n.jsxs(l,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsx(o,{scaleId:"x1",ticks:e(),labelGap:8,labelStyle:{font:"11px sans-serif"}}),n.jsx(c,{scaleId:"y1",ticks:e(),labelGap:8,labelStyle:{font:"11px sans-serif"}}),n.jsx(r,{data:t,xScaleId:"x1",yScaleId:"y1",style:{strokeStyle:"#f59f00",lineWidth:2}})]}),n.jsx("h3",{style:{marginTop:"40px"},children:"Loose Label Gap (labelGap: 20)"}),n.jsxs(l,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:a},children:[n.jsx(o,{scaleId:"x2",ticks:e(),labelGap:20,labelStyle:{font:"13px sans-serif"}}),n.jsx(c,{scaleId:"y2",ticks:e(),labelGap:20,labelStyle:{font:"13px sans-serif"}}),n.jsx(r,{data:t,xScaleId:"x2",yScaleId:"y2",style:{strokeStyle:"#cc5de8",lineWidth:2}})]})]})}},j={render:()=>{const i=[{id:"x",axis:{position:"top",size:60},origin:"x",min:0,max:100},{id:"y",axis:{position:"right",size:60},origin:"y",min:0,max:100}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Top and Right Axis with Custom Ticks"}),n.jsxs(l,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsx(o,{scaleId:"x",ticks:e(),tickSize:10,tickStyle:{strokeStyle:"#e03131",lineWidth:2},labelStyle:{fillStyle:"#e03131",font:"bold 13px sans-serif"}}),n.jsx(c,{scaleId:"y",ticks:e(),tickSize:10,tickStyle:{strokeStyle:"#1971c2",lineWidth:2},labelStyle:{fillStyle:"#1971c2",font:"bold 13px sans-serif"}}),n.jsx(r,{data:Array.from({length:20},(a,t)=>({x:t*5,y:50+Math.sin(t/2)*30})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#7950f2",lineWidth:2}})]})]})}},P={render:()=>{const i=Date.parse("2025-11-01T06:30:00Z"),a=[{id:"t",axis:{position:"bottom",size:80},origin:"x",min:i-1e3*60*60*24*7,max:i},{id:"y",axis:{position:"left",size:60},origin:"y",min:0,max:100}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Time Ticks with Custom Styles"}),n.jsxs(l,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:a},children:[n.jsx(o,{scaleId:"t",ticks:D({timeZone:"Europe/Warsaw"}),tickSize:12,tickStyle:{strokeStyle:"#1098ad",lineWidth:2},labelStyle:{fillStyle:"#0c8599",font:"12px sans-serif"},labelGap:14}),n.jsx(c,{scaleId:"y",ticks:e(),tickSize:8,tickStyle:{strokeStyle:"#1098ad",lineWidth:1},labelStyle:{fillStyle:"#0c8599",font:"12px sans-serif"}}),n.jsx(r,{data:Array.from({length:100},(t,s)=>({x:i-1e3*60*60*24*7+s*1e3*60*60*24*7/100,y:50+Math.sin(s/10)*20+Math.random()*10})),xScaleId:"t",yScaleId:"y",style:{strokeStyle:"#15aabf",lineWidth:2}})]})]})}},W={render:()=>{const i=[{id:"x1",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y1",axis:{position:"left",size:60},origin:"y",min:0,max:100}],a=[{id:"x2",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y2",axis:{position:"left",size:60},origin:"y",min:0,max:100}],t=Array.from({length:20},(s,x)=>({x:x*5,y:50+Math.sin(x/2)*30}));return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Dense Ticks (space: 30)"}),n.jsxs(l,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsx(o,{scaleId:"x1",ticks:e({space:30})}),n.jsx(c,{scaleId:"y1",ticks:e({space:30})}),n.jsx(r,{data:t,xScaleId:"x1",yScaleId:"y1",style:{strokeStyle:"#f76707",lineWidth:2}})]}),n.jsx("h3",{style:{marginTop:"40px"},children:"Sparse Ticks (space: 150)"}),n.jsxs(l,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:a},children:[n.jsx(o,{scaleId:"x2",ticks:e({space:150})}),n.jsx(c,{scaleId:"y2",ticks:e({space:150})}),n.jsx(r,{data:t,xScaleId:"x2",yScaleId:"y2",style:{strokeStyle:"#2f9e44",lineWidth:2}})]})]})}},C={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:80},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:80},origin:"y",min:-50,max:50}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Fully Customized Ticks"}),n.jsx("p",{children:"Large ticks with custom colors, bold fonts, and custom spacing"}),n.jsxs(l,{style:{width:"100%",height:"500px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsx(o,{scaleId:"x",ticks:e({space:80}),tickSize:12,labelGap:16,tickStyle:{strokeStyle:"#d9480f",lineWidth:3},labelStyle:{fillStyle:"#c92a2a",font:"bold 15px Georgia, serif"}}),n.jsx(c,{scaleId:"y",ticks:e({space:60}),tickSize:12,labelGap:16,tickStyle:{strokeStyle:"#1864ab",lineWidth:3},labelStyle:{fillStyle:"#1971c2",font:"bold 15px Georgia, serif"}}),n.jsx(r,{data:Array.from({length:100},(a,t)=>({x:t,y:Math.sin(t/5)*30+Math.cos(t/3)*15})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#7048e8",lineWidth:3}})]})]})}},w={render:()=>{const i=Date.parse("1500-01-01T00:00:00Z"),a=Date.parse("2500-01-01T00:00:00Z"),t=[{id:"t",axis:{position:"bottom",size:80},origin:"x",min:i,max:a},{id:"y",axis:{position:"left",size:60},origin:"y",min:0,max:100}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Time Ticks — Wide Range (year 1500 to 2500)"}),n.jsx("p",{style:{color:"#666",fontSize:"14px"},children:"1000-year span to test tick generation performance."}),n.jsxs(l,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[n.jsx(o,{scaleId:"t",ticks:D({timeZone:"UTC"})}),n.jsx(c,{scaleId:"y",ticks:e()}),n.jsx(r,{data:[{x:i,y:20},{x:a,y:80}],xScaleId:"t",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]})]})}},R=[{label:"1 hour",min:Date.parse("2025-06-15T11:00:00Z"),max:Date.parse("2025-06-15T12:00:00Z")},{label:"1 day",min:Date.parse("2025-06-15T00:00:00Z"),max:Date.parse("2025-06-16T00:00:00Z")},{label:"1 month",min:Date.parse("2025-06-01T00:00:00Z"),max:Date.parse("2025-07-01T00:00:00Z")},{label:"1 year",min:Date.parse("2025-01-01T00:00:00Z"),max:Date.parse("2026-01-01T00:00:00Z")},{label:"10 years",min:Date.parse("2015-01-01T00:00:00Z"),max:Date.parse("2025-01-01T00:00:00Z")},{label:"100 years",min:Date.parse("1925-01-01T00:00:00Z"),max:Date.parse("2025-01-01T00:00:00Z")},{label:"1000 years",min:Date.parse("1500-01-01T00:00:00Z"),max:Date.parse("2500-01-01T00:00:00Z")}],L={render:()=>{const[i,a]=S.useState(R[3]),t=S.useRef(i);t.current=i;const s=S.useRef(null),x=S.useRef(null),y=d=>{const{cssX:p}=d.pointer,m=d.frame.chartAreaCSS.width;p!=null&&m>0&&(s.current={cssX:p,chartWidth:m,min:t.current.min,max:t.current.max})},X=d=>{if(!d.pointer)return;const{cssX:p}=d.pointer,m=d.pointer.scaled.t;if(m!=null&&(x.current=m),s.current&&p!=null){const{cssX:g,chartWidth:v,min:f,max:h}=s.current,k=h-f,M=(p-g)/v*k;a({label:"custom",min:f-M,max:h-M})}},G=()=>{s.current=null},Z=d=>{d.preventDefault();const{min:p,max:m}=t.current,g=m-p,v=d.deltaY>0?1.25:1/1.25,f=x.current??(p+m)/2,h=Math.max(0,Math.min(1,(f-p)/g)),k=g*v;a({label:"custom",min:f-h*k,max:f+(1-h)*k})},A=[{id:"t",axis:{position:"bottom",size:80},origin:"x",min:i.min,max:i.max},{id:"y",axis:{position:"left",size:60},origin:"y",min:0,max:100}];return n.jsxs("div",{style:{padding:"20px",fontFamily:"sans-serif"},children:[n.jsx("h3",{style:{marginBottom:"4px"},children:"Time Ticks — Interactive Zoom & Pan"}),n.jsx("p",{style:{color:"#666",fontSize:"13px",margin:"0 0 12px"},children:"Scroll to zoom · Drag to pan"}),n.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"12px"},children:R.map(d=>n.jsx("button",{onClick:()=>a(d),style:{padding:"4px 10px",borderRadius:"4px",border:"1px solid #ccc",background:i.label===d.label?"#4c6ef5":"#f8f9fa",color:i.label===d.label?"#fff":"#333",cursor:"pointer",fontSize:"13px"},children:d.label},d.label))}),n.jsx("div",{onWheel:Z,style:{userSelect:"none",cursor:s.current?"grabbing":"grab"},children:n.jsxs(l,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:A},children:[n.jsx(Y,{onMouseDown:y,onMouseMove:X,onDocumentMouseUp:G}),n.jsx(o,{scaleId:"t",ticks:D({timeZone:"UTC"})}),n.jsx(c,{scaleId:"y",ticks:e()})]})}),n.jsxs("p",{style:{fontSize:"12px",color:"#888",marginTop:"8px"},children:[new Date(i.min).toISOString()," → ",new Date(i.max).toISOString()]})]})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 60
      },
      origin: "x",
      min: 0,
      max: 100
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
          <XTicks scaleId="x" ticks={makeLinearTicks()} />
          <YTicks scaleId="y" ticks={makeLinearTicks()} />

          <LinePlot data={Array.from({
          length: 20
        }, (_, i) => ({
          x: i * 5,
          y: 50 + Math.sin(i / 2) * 30
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#4c6ef5",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x1",
      axis: {
        position: "bottom",
        size: 60
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y1",
      axis: {
        position: "left",
        size: 60
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    const scales2: PlotScaleConfig[] = [{
      id: "x2",
      axis: {
        position: "bottom",
        size: 60
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y2",
      axis: {
        position: "left",
        size: 60
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    const scales3: PlotScaleConfig[] = [{
      id: "x3",
      axis: {
        position: "bottom",
        size: 60
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y3",
      axis: {
        position: "left",
        size: 60
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
        <h3>Small Ticks (tickSize: 3)</h3>
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
        scales: scales
      }}>
          <XTicks scaleId="x1" ticks={makeLinearTicks()} tickSize={3} />
          <YTicks scaleId="y1" ticks={makeLinearTicks()} tickSize={3} />

          <LinePlot data={data} xScaleId="x1" yScaleId="y1" style={{
          strokeStyle: "#51cf66",
          lineWidth: 2
        }} />
        </CanPlot>

        <h3 style={{
        marginTop: "40px"
      }}>Medium Ticks (tickSize: 8)</h3>
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
        scales: scales2
      }}>
          <XTicks scaleId="x2" ticks={makeLinearTicks()} tickSize={8} />
          <YTicks scaleId="y2" ticks={makeLinearTicks()} tickSize={8} />

          <LinePlot data={data} xScaleId="x2" yScaleId="y2" style={{
          strokeStyle: "#4c6ef5",
          lineWidth: 2
        }} />
        </CanPlot>

        <h3 style={{
        marginTop: "40px"
      }}>Large Ticks (tickSize: 15)</h3>
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
        scales: scales3
      }}>
          <XTicks scaleId="x3" ticks={makeLinearTicks()} tickSize={15} />
          <YTicks scaleId="y3" ticks={makeLinearTicks()} tickSize={15} />

          <LinePlot data={data} xScaleId="x3" yScaleId="y3" style={{
          strokeStyle: "#ff6b6b",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x1",
      axis: {
        position: "bottom",
        size: 60
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y1",
      axis: {
        position: "left",
        size: 60
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    const scales2: PlotScaleConfig[] = [{
      id: "x2",
      axis: {
        position: "bottom",
        size: 60
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y2",
      axis: {
        position: "left",
        size: 60
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    const scales3: PlotScaleConfig[] = [{
      id: "x3",
      axis: {
        position: "bottom",
        size: 60
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y3",
      axis: {
        position: "left",
        size: 60
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
        <h3>Thin Blue Ticks</h3>
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
        scales: scales
      }}>
          <XTicks scaleId="x1" ticks={makeLinearTicks()} tickStyle={{
          strokeStyle: "#4c6ef5",
          lineWidth: 1
        }} labelStyle={{
          fillStyle: "#4c6ef5",
          font: "12px sans-serif"
        }} />
          <YTicks scaleId="y1" ticks={makeLinearTicks()} tickStyle={{
          strokeStyle: "#4c6ef5",
          lineWidth: 1
        }} labelStyle={{
          fillStyle: "#4c6ef5",
          font: "12px sans-serif"
        }} />

          <LinePlot data={data} xScaleId="x1" yScaleId="y1" style={{
          strokeStyle: "#4c6ef5",
          lineWidth: 2
        }} />
        </CanPlot>

        <h3 style={{
        marginTop: "40px"
      }}>Bold Red Ticks</h3>
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
        scales: scales2
      }}>
          <XTicks scaleId="x2" ticks={makeLinearTicks()} tickStyle={{
          strokeStyle: "#ff6b6b",
          lineWidth: 3
        }} labelStyle={{
          fillStyle: "#ff6b6b",
          font: "bold 14px sans-serif"
        }} />
          <YTicks scaleId="y2" ticks={makeLinearTicks()} tickStyle={{
          strokeStyle: "#ff6b6b",
          lineWidth: 3
        }} labelStyle={{
          fillStyle: "#ff6b6b",
          font: "bold 14px sans-serif"
        }} />

          <LinePlot data={data} xScaleId="x2" yScaleId="y2" style={{
          strokeStyle: "#ff6b6b",
          lineWidth: 2
        }} />
        </CanPlot>

        <h3 style={{
        marginTop: "40px"
      }}>
          Italic Green Ticks with Serif Font
        </h3>
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
        scales: scales3
      }}>
          <XTicks scaleId="x3" ticks={makeLinearTicks()} tickStyle={{
          strokeStyle: "#51cf66",
          lineWidth: 2
        }} labelStyle={{
          fillStyle: "#51cf66",
          font: "italic 13px serif"
        }} />
          <YTicks scaleId="y3" ticks={makeLinearTicks()} tickStyle={{
          strokeStyle: "#51cf66",
          lineWidth: 2
        }} labelStyle={{
          fillStyle: "#51cf66",
          font: "italic 13px serif"
        }} />

          <LinePlot data={data} xScaleId="x3" yScaleId="y3" style={{
          strokeStyle: "#51cf66",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...T.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x1",
      axis: {
        position: "bottom",
        size: 70
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y1",
      axis: {
        position: "left",
        size: 70
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    const scales2: PlotScaleConfig[] = [{
      id: "x2",
      axis: {
        position: "bottom",
        size: 70
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y2",
      axis: {
        position: "left",
        size: 70
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    const scales3: PlotScaleConfig[] = [{
      id: "x3",
      axis: {
        position: "bottom",
        size: 80
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y3",
      axis: {
        position: "left",
        size: 80
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
        <h3>Small Sans-Serif Font</h3>
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
        scales: scales
      }}>
          <XTicks scaleId="x1" ticks={makeLinearTicks()} labelStyle={{
          font: "10px sans-serif",
          fillStyle: "#495057"
        }} />
          <YTicks scaleId="y1" ticks={makeLinearTicks()} labelStyle={{
          font: "10px sans-serif",
          fillStyle: "#495057"
        }} />

          <LinePlot data={data} xScaleId="x1" yScaleId="y1" style={{
          strokeStyle: "#868e96",
          lineWidth: 2
        }} />
        </CanPlot>

        <h3 style={{
        marginTop: "40px"
      }}>Bold Large Font</h3>
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
        scales: scales2
      }}>
          <XTicks scaleId="x2" ticks={makeLinearTicks()} labelStyle={{
          font: "bold 16px sans-serif",
          fillStyle: "#212529"
        }} />
          <YTicks scaleId="y2" ticks={makeLinearTicks()} labelStyle={{
          font: "bold 16px sans-serif",
          fillStyle: "#212529"
        }} />

          <LinePlot data={data} xScaleId="x2" yScaleId="y2" style={{
          strokeStyle: "#343a40",
          lineWidth: 2
        }} />
        </CanPlot>

        <h3 style={{
        marginTop: "40px"
      }}>Monospace Font with Color</h3>
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
        scales: scales3
      }}>
          <XTicks scaleId="x3" ticks={makeLinearTicks()} labelStyle={{
          font: "14px monospace",
          fillStyle: "#9775fa"
        }} />
          <YTicks scaleId="y3" ticks={makeLinearTicks()} labelStyle={{
          font: "14px monospace",
          fillStyle: "#9775fa"
        }} />

          <LinePlot data={data} xScaleId="x3" yScaleId="y3" style={{
          strokeStyle: "#9775fa",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...I.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x1",
      axis: {
        position: "bottom",
        size: 70
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y1",
      axis: {
        position: "left",
        size: 70
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    const scales2: PlotScaleConfig[] = [{
      id: "x2",
      axis: {
        position: "bottom",
        size: 90
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y2",
      axis: {
        position: "left",
        size: 90
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
        <h3>Tight Label Gap (labelGap: 8)</h3>
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
        scales: scales
      }}>
          <XTicks scaleId="x1" ticks={makeLinearTicks()} labelGap={8} labelStyle={{
          font: "11px sans-serif"
        }} />
          <YTicks scaleId="y1" ticks={makeLinearTicks()} labelGap={8} labelStyle={{
          font: "11px sans-serif"
        }} />

          <LinePlot data={data} xScaleId="x1" yScaleId="y1" style={{
          strokeStyle: "#f59f00",
          lineWidth: 2
        }} />
        </CanPlot>

        <h3 style={{
        marginTop: "40px"
      }}>Loose Label Gap (labelGap: 20)</h3>
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
        scales: scales2
      }}>
          <XTicks scaleId="x2" ticks={makeLinearTicks()} labelGap={20} labelStyle={{
          font: "13px sans-serif"
        }} />
          <YTicks scaleId="y2" ticks={makeLinearTicks()} labelGap={20} labelStyle={{
          font: "13px sans-serif"
        }} />

          <LinePlot data={data} xScaleId="x2" yScaleId="y2" style={{
          strokeStyle: "#cc5de8",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...z.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "top",
        size: 60
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
      axis: {
        position: "right",
        size: 60
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    return <div style={{
      padding: "20px"
    }}>
        <h3>Top and Right Axis with Custom Ticks</h3>
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
          <XTicks scaleId="x" ticks={makeLinearTicks()} tickSize={10} tickStyle={{
          strokeStyle: "#e03131",
          lineWidth: 2
        }} labelStyle={{
          fillStyle: "#e03131",
          font: "bold 13px sans-serif"
        }} />
          <YTicks scaleId="y" ticks={makeLinearTicks()} tickSize={10} tickStyle={{
          strokeStyle: "#1971c2",
          lineWidth: 2
        }} labelStyle={{
          fillStyle: "#1971c2",
          font: "bold 13px sans-serif"
        }} />

          <LinePlot data={Array.from({
          length: 20
        }, (_, i) => ({
          x: i * 5,
          y: 50 + Math.sin(i / 2) * 30
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#7950f2",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...j.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const refPoint = Date.parse("2025-11-01T06:30:00Z");
    const scales: PlotScaleConfig[] = [{
      id: "t",
      axis: {
        position: "bottom",
        size: 80
      },
      origin: "x",
      min: refPoint - 1000 * 60 * 60 * 24 * 7,
      // 7 days ago
      max: refPoint
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
        <h3>Time Ticks with Custom Styles</h3>
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
          <XTicks scaleId="t" ticks={makeTimeTicks({
          timeZone: "Europe/Warsaw"
        })} tickSize={12} tickStyle={{
          strokeStyle: "#1098ad",
          lineWidth: 2
        }} labelStyle={{
          fillStyle: "#0c8599",
          font: "12px sans-serif"
        }} labelGap={14} />
          <YTicks scaleId="y" ticks={makeLinearTicks()} tickSize={8} tickStyle={{
          strokeStyle: "#1098ad",
          lineWidth: 1
        }} labelStyle={{
          fillStyle: "#0c8599",
          font: "12px sans-serif"
        }} />

          <LinePlot data={Array.from({
          length: 100
        }, (_, i) => ({
          x: refPoint - 1000 * 60 * 60 * 24 * 7 + i * 1000 * 60 * 60 * 24 * 7 / 100,
          y: 50 + Math.sin(i / 10) * 20 + Math.random() * 10
        }))} xScaleId="t" yScaleId="y" style={{
          strokeStyle: "#15aabf",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...P.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x1",
      axis: {
        position: "bottom",
        size: 60
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y1",
      axis: {
        position: "left",
        size: 60
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    const scales2: PlotScaleConfig[] = [{
      id: "x2",
      axis: {
        position: "bottom",
        size: 60
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y2",
      axis: {
        position: "left",
        size: 60
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
        <h3>Dense Ticks (space: 30)</h3>
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
        scales: scales
      }}>
          <XTicks scaleId="x1" ticks={makeLinearTicks({
          space: 30
        })} />
          <YTicks scaleId="y1" ticks={makeLinearTicks({
          space: 30
        })} />

          <LinePlot data={data} xScaleId="x1" yScaleId="y1" style={{
          strokeStyle: "#f76707",
          lineWidth: 2
        }} />
        </CanPlot>

        <h3 style={{
        marginTop: "40px"
      }}>Sparse Ticks (space: 150)</h3>
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
        scales: scales2
      }}>
          <XTicks scaleId="x2" ticks={makeLinearTicks({
          space: 150
        })} />
          <YTicks scaleId="y2" ticks={makeLinearTicks({
          space: 150
        })} />

          <LinePlot data={data} xScaleId="x2" yScaleId="y2" style={{
          strokeStyle: "#2f9e44",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...W.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 80
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
      axis: {
        position: "left",
        size: 80
      },
      origin: "y",
      min: -50,
      max: 50
    }];
    return <div style={{
      padding: "20px"
    }}>
        <h3>Fully Customized Ticks</h3>
        <p>Large ticks with custom colors, bold fonts, and custom spacing</p>
        <CanPlot style={{
        width: "100%",
        height: "500px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales
      }}>
          <XTicks scaleId="x" ticks={makeLinearTicks({
          space: 80
        })} tickSize={12} labelGap={16} tickStyle={{
          strokeStyle: "#d9480f",
          lineWidth: 3
        }} labelStyle={{
          fillStyle: "#c92a2a",
          font: "bold 15px Georgia, serif"
        }} />
          <YTicks scaleId="y" ticks={makeLinearTicks({
          space: 60
        })} tickSize={12} labelGap={16} tickStyle={{
          strokeStyle: "#1864ab",
          lineWidth: 3
        }} labelStyle={{
          fillStyle: "#1971c2",
          font: "bold 15px Georgia, serif"
        }} />

          <LinePlot data={Array.from({
          length: 100
        }, (_, i) => ({
          x: i,
          y: Math.sin(i / 5) * 30 + Math.cos(i / 3) * 15
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#7048e8",
          lineWidth: 3
        }} />
        </CanPlot>
      </div>;
  }
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const minTime = Date.parse("1500-01-01T00:00:00Z");
    const maxTime = Date.parse("2500-01-01T00:00:00Z");
    const scales: PlotScaleConfig[] = [{
      id: "t",
      axis: {
        position: "bottom",
        size: 80
      },
      origin: "x",
      min: minTime,
      max: maxTime
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
        <h3>Time Ticks — Wide Range (year 1500 to 2500)</h3>
        <p style={{
        color: "#666",
        fontSize: "14px"
      }}>
          1000-year span to test tick generation performance.
        </p>
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
          <XTicks scaleId="t" ticks={makeTimeTicks({
          timeZone: "UTC"
        })} />
          <YTicks scaleId="y" ticks={makeLinearTicks()} />

          <LinePlot data={[{
          x: minTime,
          y: 20
        }, {
          x: maxTime,
          y: 80
        }]} xScaleId="t" yScaleId="y" style={{
          strokeStyle: "#4c6ef5",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...w.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [range, setRange] = useState(PRESETS[3]);

    // Keep a ref so event handlers always see the latest range without stale closures
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const rangeRef = useRef(range);
    rangeRef.current = range;

    // Drag state: start cssX + start range
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dragRef = useRef<{
      cssX: number;
      chartWidth: number;
      min: number;
      max: number;
    } | null>(null);

    // Last known pointer time (for zoom centering)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const pointerTimeRef = useRef<number | null>(null);
    const handleMouseDown = (event: MouseDownEvent) => {
      const {
        cssX
      } = event.pointer;
      const chartWidth = event.frame.chartAreaCSS.width;
      if (cssX != null && chartWidth > 0) {
        dragRef.current = {
          cssX,
          chartWidth,
          min: rangeRef.current.min,
          max: rangeRef.current.max
        };
      }
    };
    const handleMouseMove = (event: MoveEvent) => {
      if (!event.pointer) return;
      const {
        cssX
      } = event.pointer;

      // Update pointer time for zoom centering
      const scaledTime = event.pointer.scaled["t"];
      if (scaledTime != null) pointerTimeRef.current = scaledTime;

      // Pan while dragging
      if (dragRef.current && cssX != null) {
        const {
          cssX: startX,
          chartWidth,
          min,
          max
        } = dragRef.current;
        const span = max - min;
        const delta = (cssX - startX) / chartWidth * span;
        setRange({
          label: "custom",
          min: min - delta,
          max: max - delta
        });
      }
    };
    const handleDocumentMouseUp = () => {
      dragRef.current = null;
    };
    const handleWheel = (e: React.WheelEvent) => {
      e.preventDefault();
      const {
        min,
        max
      } = rangeRef.current;
      const span = max - min;
      const zoomFactor = e.deltaY > 0 ? 1.25 : 1 / 1.25;
      const center = pointerTimeRef.current ?? (min + max) / 2;
      const ratio = Math.max(0, Math.min(1, (center - min) / span));
      const newSpan = span * zoomFactor;
      setRange({
        label: "custom",
        min: center - ratio * newSpan,
        max: center + (1 - ratio) * newSpan
      });
    };
    const scales: PlotScaleConfig[] = [{
      id: "t",
      axis: {
        position: "bottom",
        size: 80
      },
      origin: "x",
      min: range.min,
      max: range.max
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
      padding: "20px",
      fontFamily: "sans-serif"
    }}>
        <h3 style={{
        marginBottom: "4px"
      }}>Time Ticks — Interactive Zoom &amp; Pan</h3>
        <p style={{
        color: "#666",
        fontSize: "13px",
        margin: "0 0 12px"
      }}>
          Scroll to zoom · Drag to pan
        </p>

        <div style={{
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
        marginBottom: "12px"
      }}>
          {PRESETS.map(p => <button key={p.label} onClick={() => setRange(p)} style={{
          padding: "4px 10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          background: range.label === p.label ? "#4c6ef5" : "#f8f9fa",
          color: range.label === p.label ? "#fff" : "#333",
          cursor: "pointer",
          fontSize: "13px"
        }}>
              {p.label}
            </button>)}
        </div>

        {/* onWheel on the wrapper — prevent page scroll while hovering the chart */}
        <div onWheel={handleWheel} style={{
        userSelect: "none",
        cursor: dragRef.current ? "grabbing" : "grab"
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
            <ChartAreaInteractions onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onDocumentMouseUp={handleDocumentMouseUp} />
            <XTicks scaleId="t" ticks={makeTimeTicks({
            timeZone: "UTC"
          })} />
            <YTicks scaleId="y" ticks={makeLinearTicks()} />
          </CanPlot>
        </div>

        <p style={{
        fontSize: "12px",
        color: "#888",
        marginTop: "8px"
      }}>
          {new Date(range.min).toISOString()} &rarr; {new Date(range.max).toISOString()}
        </p>
      </div>;
  }
}`,...L.parameters?.docs?.source}}};const H=["DefaultTicks","DifferentTickSizes","DifferentTickStyles","DifferentLabelStyles","CustomLabelGap","DifferentAxisPositions","TimeTicksWithStyles","CustomTickSpacing","FullyCustomized","TimeTicksWideRange","TimeTicksInteractive"];export{z as CustomLabelGap,W as CustomTickSpacing,b as DefaultTicks,j as DifferentAxisPositions,I as DifferentLabelStyles,u as DifferentTickSizes,T as DifferentTickStyles,C as FullyCustomized,L as TimeTicksInteractive,w as TimeTicksWideRange,P as TimeTicksWithStyles,H as __namedExportsOrder,q as default};

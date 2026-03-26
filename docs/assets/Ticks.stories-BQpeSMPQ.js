import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as T}from"./iframe-BO9ChRt0.js";import{C as o}from"./frameContext-BCCbiwPn.js";import{C as U}from"./ChartAreaInteractions-PeitfYXB.js";import{L as c}from"./LinePlot-DtkSccAe.js";import{X as l,m as t,Y as r,a as f}from"./tickUtils-Cn3ESM-D.js";import"./preload-helper-PPVm8Dsz.js";const en={component:o,parameters:{layout:"fullscreen"},tags:["autodocs"]},u={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:60},origin:"y",min:0,max:100}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Default Tick Styles"}),n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsx(l,{scaleId:"x",ticks:t()}),n.jsx(r,{scaleId:"y",ticks:t()}),n.jsx(c,{data:Array.from({length:20},(s,i)=>({x:i*5,y:50+Math.sin(i/2)*30})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]})]})}},b={render:()=>{const e=[{id:"x1",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y1",axis:{position:"left",size:60},origin:"y",min:0,max:100}],s=[{id:"x2",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y2",axis:{position:"left",size:60},origin:"y",min:0,max:100}],i=[{id:"x3",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y3",axis:{position:"left",size:60},origin:"y",min:0,max:100}],a=Array.from({length:20},(x,m)=>({x:m*5,y:50+Math.sin(m/2)*30}));return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Small Ticks (tickSize: 3)"}),n.jsxs(o,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsx(l,{scaleId:"x1",ticks:t(),tickSize:3}),n.jsx(r,{scaleId:"y1",ticks:t(),tickSize:3}),n.jsx(c,{data:a,xScaleId:"x1",yScaleId:"y1",style:{strokeStyle:"#51cf66",lineWidth:2}})]}),n.jsx("h3",{style:{marginTop:"40px"},children:"Medium Ticks (tickSize: 8)"}),n.jsxs(o,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:s},children:[n.jsx(l,{scaleId:"x2",ticks:t(),tickSize:8}),n.jsx(r,{scaleId:"y2",ticks:t(),tickSize:8}),n.jsx(c,{data:a,xScaleId:"x2",yScaleId:"y2",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]}),n.jsx("h3",{style:{marginTop:"40px"},children:"Large Ticks (tickSize: 15)"}),n.jsxs(o,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsx(l,{scaleId:"x3",ticks:t(),tickSize:15}),n.jsx(r,{scaleId:"y3",ticks:t(),tickSize:15}),n.jsx(c,{data:a,xScaleId:"x3",yScaleId:"y3",style:{strokeStyle:"#ff6b6b",lineWidth:2}})]})]})}},I={render:()=>{const e=[{id:"x1",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y1",axis:{position:"left",size:60},origin:"y",min:0,max:100}],s=[{id:"x2",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y2",axis:{position:"left",size:60},origin:"y",min:0,max:100}],i=[{id:"x3",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y3",axis:{position:"left",size:60},origin:"y",min:0,max:100}],a=Array.from({length:20},(x,m)=>({x:m*5,y:50+Math.sin(m/2)*30}));return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Thin Blue Ticks"}),n.jsxs(o,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsx(l,{scaleId:"x1",ticks:t(),tickStyle:{strokeStyle:"#4c6ef5",lineWidth:1},labelStyle:{fillStyle:"#4c6ef5",font:"12px sans-serif"}}),n.jsx(r,{scaleId:"y1",ticks:t(),tickStyle:{strokeStyle:"#4c6ef5",lineWidth:1},labelStyle:{fillStyle:"#4c6ef5",font:"12px sans-serif"}}),n.jsx(c,{data:a,xScaleId:"x1",yScaleId:"y1",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]}),n.jsx("h3",{style:{marginTop:"40px"},children:"Bold Red Ticks"}),n.jsxs(o,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:s},children:[n.jsx(l,{scaleId:"x2",ticks:t(),tickStyle:{strokeStyle:"#ff6b6b",lineWidth:3},labelStyle:{fillStyle:"#ff6b6b",font:"bold 14px sans-serif"}}),n.jsx(r,{scaleId:"y2",ticks:t(),tickStyle:{strokeStyle:"#ff6b6b",lineWidth:3},labelStyle:{fillStyle:"#ff6b6b",font:"bold 14px sans-serif"}}),n.jsx(c,{data:a,xScaleId:"x2",yScaleId:"y2",style:{strokeStyle:"#ff6b6b",lineWidth:2}})]}),n.jsx("h3",{style:{marginTop:"40px"},children:"Italic Green Ticks with Serif Font"}),n.jsxs(o,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsx(l,{scaleId:"x3",ticks:t(),tickStyle:{strokeStyle:"#51cf66",lineWidth:2},labelStyle:{fillStyle:"#51cf66",font:"italic 13px serif"}}),n.jsx(r,{scaleId:"y3",ticks:t(),tickStyle:{strokeStyle:"#51cf66",lineWidth:2},labelStyle:{fillStyle:"#51cf66",font:"italic 13px serif"}}),n.jsx(c,{data:a,xScaleId:"x3",yScaleId:"y3",style:{strokeStyle:"#51cf66",lineWidth:2}})]})]})}},w={render:()=>{const e=[{id:"x1",axis:{position:"bottom",size:70},origin:"x",min:0,max:100},{id:"y1",axis:{position:"left",size:70},origin:"y",min:0,max:100}],s=[{id:"x2",axis:{position:"bottom",size:70},origin:"x",min:0,max:100},{id:"y2",axis:{position:"left",size:70},origin:"y",min:0,max:100}],i=[{id:"x3",axis:{position:"bottom",size:80},origin:"x",min:0,max:100},{id:"y3",axis:{position:"left",size:80},origin:"y",min:0,max:100}],a=Array.from({length:20},(x,m)=>({x:m*5,y:50+Math.sin(m/2)*30}));return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Small Sans-Serif Font"}),n.jsxs(o,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsx(l,{scaleId:"x1",ticks:t(),labelStyle:{font:"10px sans-serif",fillStyle:"#495057"}}),n.jsx(r,{scaleId:"y1",ticks:t(),labelStyle:{font:"10px sans-serif",fillStyle:"#495057"}}),n.jsx(c,{data:a,xScaleId:"x1",yScaleId:"y1",style:{strokeStyle:"#868e96",lineWidth:2}})]}),n.jsx("h3",{style:{marginTop:"40px"},children:"Bold Large Font"}),n.jsxs(o,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:s},children:[n.jsx(l,{scaleId:"x2",ticks:t(),labelStyle:{font:"bold 16px sans-serif",fillStyle:"#212529"}}),n.jsx(r,{scaleId:"y2",ticks:t(),labelStyle:{font:"bold 16px sans-serif",fillStyle:"#212529"}}),n.jsx(c,{data:a,xScaleId:"x2",yScaleId:"y2",style:{strokeStyle:"#343a40",lineWidth:2}})]}),n.jsx("h3",{style:{marginTop:"40px"},children:"Monospace Font with Color"}),n.jsxs(o,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsx(l,{scaleId:"x3",ticks:t(),labelStyle:{font:"14px monospace",fillStyle:"#9775fa"}}),n.jsx(r,{scaleId:"y3",ticks:t(),labelStyle:{font:"14px monospace",fillStyle:"#9775fa"}}),n.jsx(c,{data:a,xScaleId:"x3",yScaleId:"y3",style:{strokeStyle:"#9775fa",lineWidth:2}})]})]})}},z={render:()=>{const e=[{id:"x1",axis:{position:"bottom",size:70},origin:"x",min:0,max:100},{id:"y1",axis:{position:"left",size:70},origin:"y",min:0,max:100}],s=[{id:"x2",axis:{position:"bottom",size:90},origin:"x",min:0,max:100},{id:"y2",axis:{position:"left",size:90},origin:"y",min:0,max:100}],i=Array.from({length:20},(a,x)=>({x:x*5,y:50+Math.sin(x/2)*30}));return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Tight Label Gap (labelGap: 8)"}),n.jsxs(o,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsx(l,{scaleId:"x1",ticks:t(),labelGap:8,labelStyle:{font:"11px sans-serif"}}),n.jsx(r,{scaleId:"y1",ticks:t(),labelGap:8,labelStyle:{font:"11px sans-serif"}}),n.jsx(c,{data:i,xScaleId:"x1",yScaleId:"y1",style:{strokeStyle:"#f59f00",lineWidth:2}})]}),n.jsx("h3",{style:{marginTop:"40px"},children:"Loose Label Gap (labelGap: 20)"}),n.jsxs(o,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:s},children:[n.jsx(l,{scaleId:"x2",ticks:t(),labelGap:20,labelStyle:{font:"13px sans-serif"}}),n.jsx(r,{scaleId:"y2",ticks:t(),labelGap:20,labelStyle:{font:"13px sans-serif"}}),n.jsx(c,{data:i,xScaleId:"x2",yScaleId:"y2",style:{strokeStyle:"#cc5de8",lineWidth:2}})]})]})}},j={render:()=>{const e=[{id:"x",axis:{position:"top",size:60},origin:"x",min:0,max:100},{id:"y",axis:{position:"right",size:60},origin:"y",min:0,max:100}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Top and Right Axis with Custom Ticks"}),n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsx(l,{scaleId:"x",ticks:t(),tickSize:10,tickStyle:{strokeStyle:"#e03131",lineWidth:2},labelStyle:{fillStyle:"#e03131",font:"bold 13px sans-serif"}}),n.jsx(r,{scaleId:"y",ticks:t(),tickSize:10,tickStyle:{strokeStyle:"#1971c2",lineWidth:2},labelStyle:{fillStyle:"#1971c2",font:"bold 13px sans-serif"}}),n.jsx(c,{data:Array.from({length:20},(s,i)=>({x:i*5,y:50+Math.sin(i/2)*30})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#7950f2",lineWidth:2}})]})]})}},Z={render:()=>{const e=Date.parse("2025-11-01T06:30:00Z"),s=[{id:"t",axis:{position:"bottom",size:80},origin:"x",min:e-1e3*60*60*24*7,max:e},{id:"y",axis:{position:"left",size:60},origin:"y",min:0,max:100}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Time Ticks with Custom Styles"}),n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:s},children:[n.jsx(l,{scaleId:"t",ticks:f({timeZone:"Europe/Warsaw"}),tickSize:12,tickStyle:{strokeStyle:"#1098ad",lineWidth:2},labelStyle:{fillStyle:"#0c8599",font:"12px sans-serif"},labelGap:14}),n.jsx(r,{scaleId:"y",ticks:t(),tickSize:8,tickStyle:{strokeStyle:"#1098ad",lineWidth:1},labelStyle:{fillStyle:"#0c8599",font:"12px sans-serif"}}),n.jsx(c,{data:Array.from({length:100},(i,a)=>({x:e-1e3*60*60*24*7+a*1e3*60*60*24*7/100,y:50+Math.sin(a/10)*20+Math.random()*10})),xScaleId:"t",yScaleId:"y",style:{strokeStyle:"#15aabf",lineWidth:2}})]})]})}},W={render:()=>{const e=[{id:"x1",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y1",axis:{position:"left",size:60},origin:"y",min:0,max:100}],s=[{id:"x2",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y2",axis:{position:"left",size:60},origin:"y",min:0,max:100}],i=Array.from({length:20},(a,x)=>({x:x*5,y:50+Math.sin(x/2)*30}));return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Dense Ticks (space: 30)"}),n.jsxs(o,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsx(l,{scaleId:"x1",ticks:t({space:30})}),n.jsx(r,{scaleId:"y1",ticks:t({space:30})}),n.jsx(c,{data:i,xScaleId:"x1",yScaleId:"y1",style:{strokeStyle:"#f76707",lineWidth:2}})]}),n.jsx("h3",{style:{marginTop:"40px"},children:"Sparse Ticks (space: 150)"}),n.jsxs(o,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:s},children:[n.jsx(l,{scaleId:"x2",ticks:t({space:150})}),n.jsx(r,{scaleId:"y2",ticks:t({space:150})}),n.jsx(c,{data:i,xScaleId:"x2",yScaleId:"y2",style:{strokeStyle:"#2f9e44",lineWidth:2}})]})]})}},P={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:80},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:80},origin:"y",min:-50,max:50}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Fully Customized Ticks"}),n.jsx("p",{children:"Large ticks with custom colors, bold fonts, and custom spacing"}),n.jsxs(o,{style:{width:"100%",height:"500px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsx(l,{scaleId:"x",ticks:t({space:80}),tickSize:12,labelGap:16,tickStyle:{strokeStyle:"#d9480f",lineWidth:3},labelStyle:{fillStyle:"#c92a2a",font:"bold 15px Georgia, serif"}}),n.jsx(r,{scaleId:"y",ticks:t({space:60}),tickSize:12,labelGap:16,tickStyle:{strokeStyle:"#1864ab",lineWidth:3},labelStyle:{fillStyle:"#1971c2",font:"bold 15px Georgia, serif"}}),n.jsx(c,{data:Array.from({length:100},(s,i)=>({x:i,y:Math.sin(i/5)*30+Math.cos(i/3)*15})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#7048e8",lineWidth:3}})]})]})}},L={render:()=>{const e=Date.parse("1500-01-01T00:00:00Z"),s=Date.parse("2500-01-01T00:00:00Z"),i=[{id:"t",axis:{position:"bottom",size:80},origin:"x",min:e,max:s},{id:"y",axis:{position:"left",size:60},origin:"y",min:0,max:100}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Time Ticks — Wide Range (year 1500 to 2500)"}),n.jsx("p",{style:{color:"#666",fontSize:"14px"},children:"1000-year span to test tick generation performance."}),n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsx(l,{scaleId:"t",ticks:f({timeZone:"UTC"})}),n.jsx(r,{scaleId:"y",ticks:t()}),n.jsx(c,{data:[{x:e,y:20},{x:s,y:80}],xScaleId:"t",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]})]})}},E=[{label:"1 hour",min:Date.parse("2025-06-15T11:00:00Z"),max:Date.parse("2025-06-15T12:00:00Z")},{label:"1 day",min:Date.parse("2025-06-15T00:00:00Z"),max:Date.parse("2025-06-16T00:00:00Z")},{label:"1 month",min:Date.parse("2025-06-01T00:00:00Z"),max:Date.parse("2025-07-01T00:00:00Z")},{label:"1 year",min:Date.parse("2025-01-01T00:00:00Z"),max:Date.parse("2026-01-01T00:00:00Z")},{label:"10 years",min:Date.parse("2015-01-01T00:00:00Z"),max:Date.parse("2025-01-01T00:00:00Z")},{label:"100 years",min:Date.parse("1925-01-01T00:00:00Z"),max:Date.parse("2025-01-01T00:00:00Z")},{label:"1000 years",min:Date.parse("1500-01-01T00:00:00Z"),max:Date.parse("2500-01-01T00:00:00Z")}],C={render:()=>{const[e,s]=T.useState(E[3]),i=T.useRef(e);i.current=e;const a=T.useRef(null),x=T.useRef(null),m=d=>{const{cssX:y}=d.pointer,p=d.frame.chartAreaCSS.width;y!=null&&p>0&&(a.current={cssX:y,chartWidth:p,min:i.current.min,max:i.current.max})},N=d=>{if(!d.pointer)return;const{cssX:y}=d.pointer,p=d.pointer.scaled.t;if(p!=null&&(x.current=p),a.current&&y!=null){const{cssX:k,chartWidth:R,min:h,max:g}=a.current,S=g-h,X=(y-k)/R*S;s({label:"custom",min:h-X,max:g-X})}},F=()=>{a.current=null},O=d=>{d.preventDefault();const{min:y,max:p}=i.current,k=p-y,R=d.deltaY>0?1.25:1/1.25,h=x.current??(y+p)/2,g=Math.max(0,Math.min(1,(h-y)/k)),S=k*R;s({label:"custom",min:h-g*S,max:h+(1-g)*S})},B=[{id:"t",axis:{position:"bottom",size:80},origin:"x",min:e.min,max:e.max},{id:"y",axis:{position:"left",size:60},origin:"y",min:0,max:100}];return n.jsxs("div",{style:{padding:"20px",fontFamily:"sans-serif"},children:[n.jsx("h3",{style:{marginBottom:"4px"},children:"Time Ticks — Interactive Zoom & Pan"}),n.jsx("p",{style:{color:"#666",fontSize:"13px",margin:"0 0 12px"},children:"Scroll to zoom · Drag to pan"}),n.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"12px"},children:E.map(d=>n.jsx("button",{onClick:()=>s(d),style:{padding:"4px 10px",borderRadius:"4px",border:"1px solid #ccc",background:e.label===d.label?"#4c6ef5":"#f8f9fa",color:e.label===d.label?"#fff":"#333",cursor:"pointer",fontSize:"13px"},children:d.label},d.label))}),n.jsx("div",{onWheel:O,style:{userSelect:"none",cursor:a.current?"grabbing":"grab"},children:n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:B},children:[n.jsx(U,{onMouseDown:m,onMouseMove:N,onDocumentMouseUp:F}),n.jsx(l,{scaleId:"t",ticks:f({timeZone:"Europe/Warsaw"})}),n.jsx(r,{scaleId:"y",ticks:t()})]})}),n.jsxs("p",{style:{fontSize:"12px",color:"#888",marginTop:"8px"},children:[new Date(e.min).toISOString()," → ",new Date(e.max).toISOString()]})]})}},H=[{title:"Warsaw — 2h across spring-forward",timeZone:"Europe/Warsaw",min:"2025-03-30T00:00:00Z",max:"2025-03-30T02:00:00Z"},{title:"Warsaw — 6h across spring-forward",timeZone:"Europe/Warsaw",min:"2025-03-29T22:00:00Z",max:"2025-03-30T04:00:00Z"},{title:"Warsaw — 24h across spring-forward",timeZone:"Europe/Warsaw",min:"2025-03-29T12:00:00Z",max:"2025-03-30T12:00:00Z"},{title:"Warsaw — 3d across spring-forward",timeZone:"Europe/Warsaw",min:"2025-03-29T00:00:00Z",max:"2025-04-01T00:00:00Z"},{title:"Warsaw — 1w across spring-forward",timeZone:"Europe/Warsaw",min:"2025-03-26T00:00:00Z",max:"2025-04-02T00:00:00Z"},{title:"Warsaw — 2h across fall-back",timeZone:"Europe/Warsaw",min:"2025-10-26T00:00:00Z",max:"2025-10-26T02:00:00Z"},{title:"Warsaw — 6h across fall-back",timeZone:"Europe/Warsaw",min:"2025-10-25T22:00:00Z",max:"2025-10-26T04:00:00Z"},{title:"Warsaw — 24h across fall-back",timeZone:"Europe/Warsaw",min:"2025-10-25T12:00:00Z",max:"2025-10-26T12:00:00Z"},{title:"Warsaw — 3d across fall-back",timeZone:"Europe/Warsaw",min:"2025-10-25T00:00:00Z",max:"2025-10-28T00:00:00Z"},{title:"Warsaw — 1w across fall-back",timeZone:"Europe/Warsaw",min:"2025-10-22T00:00:00Z",max:"2025-10-29T00:00:00Z"},{title:"London — 2h across spring-forward",timeZone:"Europe/London",min:"2025-03-30T00:00:00Z",max:"2025-03-30T02:00:00Z"},{title:"London — 6h across spring-forward",timeZone:"Europe/London",min:"2025-03-29T22:00:00Z",max:"2025-03-30T04:00:00Z"},{title:"London — 24h across spring-forward",timeZone:"Europe/London",min:"2025-03-29T12:00:00Z",max:"2025-03-30T12:00:00Z"},{title:"London — 2h across fall-back",timeZone:"Europe/London",min:"2025-10-26T00:00:00Z",max:"2025-10-26T02:00:00Z"},{title:"London — 6h across fall-back",timeZone:"Europe/London",min:"2025-10-25T22:00:00Z",max:"2025-10-26T04:00:00Z"},{title:"London — 24h across fall-back",timeZone:"Europe/London",min:"2025-10-25T12:00:00Z",max:"2025-10-26T12:00:00Z"},{title:"New York — 2h across spring-forward",timeZone:"America/New_York",min:"2025-03-09T06:00:00Z",max:"2025-03-09T08:00:00Z"},{title:"New York — 6h across spring-forward",timeZone:"America/New_York",min:"2025-03-09T04:00:00Z",max:"2025-03-09T10:00:00Z"},{title:"New York — 24h across spring-forward",timeZone:"America/New_York",min:"2025-03-08T12:00:00Z",max:"2025-03-09T12:00:00Z"},{title:"New York — 3d across spring-forward",timeZone:"America/New_York",min:"2025-03-08T00:00:00Z",max:"2025-03-11T00:00:00Z"},{title:"New York — 2h across fall-back",timeZone:"America/New_York",min:"2025-11-02T05:00:00Z",max:"2025-11-02T07:00:00Z"},{title:"New York — 6h across fall-back",timeZone:"America/New_York",min:"2025-11-02T03:00:00Z",max:"2025-11-02T09:00:00Z"},{title:"New York — 24h across fall-back",timeZone:"America/New_York",min:"2025-11-01T12:00:00Z",max:"2025-11-02T12:00:00Z"},{title:"New York — 1w across fall-back",timeZone:"America/New_York",min:"2025-10-29T00:00:00Z",max:"2025-11-05T00:00:00Z"},{title:"Los Angeles — 2h across spring-forward",timeZone:"America/Los_Angeles",min:"2025-03-09T09:00:00Z",max:"2025-03-09T11:00:00Z"},{title:"Los Angeles — 6h across spring-forward",timeZone:"America/Los_Angeles",min:"2025-03-09T07:00:00Z",max:"2025-03-09T13:00:00Z"},{title:"Los Angeles — 24h across spring-forward",timeZone:"America/Los_Angeles",min:"2025-03-08T12:00:00Z",max:"2025-03-09T12:00:00Z"},{title:"Los Angeles — 2h across fall-back",timeZone:"America/Los_Angeles",min:"2025-11-02T08:00:00Z",max:"2025-11-02T10:00:00Z"},{title:"Los Angeles — 6h across fall-back",timeZone:"America/Los_Angeles",min:"2025-11-02T06:00:00Z",max:"2025-11-02T12:00:00Z"},{title:"Los Angeles — 24h across fall-back",timeZone:"America/Los_Angeles",min:"2025-11-01T12:00:00Z",max:"2025-11-02T12:00:00Z"},{title:"Sydney — 2h across spring-forward",timeZone:"Australia/Sydney",min:"2025-10-04T15:00:00Z",max:"2025-10-04T17:00:00Z"},{title:"Sydney — 6h across spring-forward",timeZone:"Australia/Sydney",min:"2025-10-04T13:00:00Z",max:"2025-10-04T19:00:00Z"},{title:"Sydney — 24h across spring-forward",timeZone:"Australia/Sydney",min:"2025-10-04T04:00:00Z",max:"2025-10-05T04:00:00Z"},{title:"Sydney — 2h across fall-back",timeZone:"Australia/Sydney",min:"2025-04-05T15:00:00Z",max:"2025-04-05T17:00:00Z"},{title:"Sydney — 6h across fall-back",timeZone:"Australia/Sydney",min:"2025-04-05T13:00:00Z",max:"2025-04-05T19:00:00Z"},{title:"Sydney — 24h across fall-back",timeZone:"Australia/Sydney",min:"2025-04-05T04:00:00Z",max:"2025-04-06T04:00:00Z"},{title:"Warsaw — 1 month across spring-forward",timeZone:"Europe/Warsaw",min:"2025-03-01T00:00:00Z",max:"2025-04-01T00:00:00Z"},{title:"Warsaw — 1 month across fall-back",timeZone:"Europe/Warsaw",min:"2025-10-01T00:00:00Z",max:"2025-11-01T00:00:00Z"},{title:"New York — 1 month across spring-forward",timeZone:"America/New_York",min:"2025-03-01T00:00:00Z",max:"2025-04-01T00:00:00Z"},{title:"New York — 1 month across fall-back",timeZone:"America/New_York",min:"2025-10-01T00:00:00Z",max:"2025-11-01T00:00:00Z"}],v={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:60},origin:"y",min:0,max:100}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Default Grid"}),n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsx(l,{scaleId:"x",ticks:t(),withGrid:!0}),n.jsx(r,{scaleId:"y",ticks:t(),withGrid:!0}),n.jsx(c,{data:Array.from({length:20},(s,i)=>({x:i*5,y:50+Math.sin(i/2)*30})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]})]})}},A={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:60},origin:"y",min:0,max:100}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Styled Grid — Dashed & Colored"}),n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsx(l,{scaleId:"x",ticks:t(),withGrid:!0,gridStyle:{strokeStyle:"rgba(76, 110, 245, 0.3)",lineWidth:1}}),n.jsx(r,{scaleId:"y",ticks:t(),withGrid:!0,gridStyle:{strokeStyle:"rgba(76, 110, 245, 0.3)",lineWidth:1}}),n.jsx(c,{data:Array.from({length:20},(s,i)=>({x:i*5,y:50+Math.sin(i/2)*30})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]})]})}},D={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:60},origin:"y",min:0,max:100}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Grid on Y Axis Only (Horizontal Lines)"}),n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsx(l,{scaleId:"x",ticks:t()}),n.jsx(r,{scaleId:"y",ticks:t(),withGrid:!0,gridStyle:{strokeStyle:"#dee2e6",lineWidth:1}}),n.jsx(c,{data:Array.from({length:20},(s,i)=>({x:i*5,y:50+Math.sin(i/2)*30})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#e03131",lineWidth:2}})]})]})}},G={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:60},origin:"y",min:0,max:100}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Grid on X Axis Only (Vertical Lines)"}),n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsx(l,{scaleId:"x",ticks:t(),withGrid:!0,gridStyle:{strokeStyle:"#dee2e6",lineWidth:1}}),n.jsx(r,{scaleId:"y",ticks:t()}),n.jsx(c,{data:Array.from({length:20},(s,i)=>({x:i*5,y:50+Math.sin(i/2)*30})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#2f9e44",lineWidth:2}})]})]})}},M={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:60},origin:"y",min:0,max:100}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Different Grid Styles per Axis"}),n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsx(l,{scaleId:"x",ticks:t(),withGrid:!0,gridStyle:{strokeStyle:"rgba(255, 107, 107, 0.4)",lineWidth:2},tickStyle:{strokeStyle:"#ff6b6b"},labelStyle:{fillStyle:"#ff6b6b"}}),n.jsx(r,{scaleId:"y",ticks:t(),withGrid:!0,gridStyle:{strokeStyle:"rgba(76, 110, 245, 0.4)",lineWidth:1},tickStyle:{strokeStyle:"#4c6ef5"},labelStyle:{fillStyle:"#4c6ef5"}}),n.jsx(c,{data:Array.from({length:20},(s,i)=>({x:i*5,y:50+Math.sin(i/2)*30})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#7950f2",lineWidth:2}})]})]})}},Y={render:()=>{const e=Date.parse("2025-11-01T06:30:00Z"),s=[{id:"t",axis:{position:"bottom",size:80},origin:"x",min:e-1e3*60*60*24*7,max:e},{id:"y",axis:{position:"left",size:60},origin:"y",min:0,max:100}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Grid with Time Ticks"}),n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:s},children:[n.jsx(l,{scaleId:"t",ticks:f({timeZone:"Europe/Warsaw"}),withGrid:!0,gridStyle:{strokeStyle:"rgba(0, 0, 0, 0.08)",lineWidth:1}}),n.jsx(r,{scaleId:"y",ticks:t(),withGrid:!0,gridStyle:{strokeStyle:"rgba(0, 0, 0, 0.08)",lineWidth:1}}),n.jsx(c,{data:Array.from({length:100},(i,a)=>({x:e-1e3*60*60*24*7+a*1e3*60*60*24*7/100,y:50+Math.sin(a/10)*20+Math.random()*10})),xScaleId:"t",yScaleId:"y",style:{strokeStyle:"#1098ad",lineWidth:2}})]})]})}},_={render:()=>n.jsxs("div",{style:{padding:"20px",fontFamily:"sans-serif"},children:[n.jsx("h2",{style:{marginBottom:"4px"},children:"DST Transition Tick Ranges"}),n.jsx("p",{style:{color:"#666",fontSize:"13px",margin:"0 0 24px"},children:"Fixed time ranges across summer (spring-forward) and autumn (fall-back) DST changes in various time zones. No data — only ticks."}),H.map((e,s)=>{const i=Date.parse(e.min),a=Date.parse(e.max),x=`t${s}`,m=[{id:x,axis:{position:"bottom",size:80},origin:"x",min:i,max:a}];return n.jsxs("div",{style:{marginBottom:"32px"},children:[n.jsx("h4",{style:{margin:"0 0 2px"},children:e.title}),n.jsxs("p",{style:{color:"#888",fontSize:"12px",margin:"0 0 6px"},children:[e.min," → ",e.max," (",e.timeZone,")"]}),n.jsx(o,{style:{width:"100%",height:"80px"},configuration:{padding:{bottom:0,left:100,right:100,top:0},scales:m},children:n.jsx(l,{scaleId:x,ticks:f({timeZone:e.timeZone})})})]},s)})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
            timeZone: "Europe/Warsaw"
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
}`,...C.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
        <h3>Default Grid</h3>
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
          <XTicks scaleId="x" ticks={makeLinearTicks()} withGrid />
          <YTicks scaleId="y" ticks={makeLinearTicks()} withGrid />

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
}`,...v.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
        <h3>Styled Grid — Dashed &amp; Colored</h3>
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
          <XTicks scaleId="x" ticks={makeLinearTicks()} withGrid gridStyle={{
          strokeStyle: "rgba(76, 110, 245, 0.3)",
          lineWidth: 1
        }} />
          <YTicks scaleId="y" ticks={makeLinearTicks()} withGrid gridStyle={{
          strokeStyle: "rgba(76, 110, 245, 0.3)",
          lineWidth: 1
        }} />

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
}`,...A.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
        <h3>Grid on Y Axis Only (Horizontal Lines)</h3>
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
          <YTicks scaleId="y" ticks={makeLinearTicks()} withGrid gridStyle={{
          strokeStyle: "#dee2e6",
          lineWidth: 1
        }} />

          <LinePlot data={Array.from({
          length: 20
        }, (_, i) => ({
          x: i * 5,
          y: 50 + Math.sin(i / 2) * 30
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#e03131",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...D.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
        <h3>Grid on X Axis Only (Vertical Lines)</h3>
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
          <XTicks scaleId="x" ticks={makeLinearTicks()} withGrid gridStyle={{
          strokeStyle: "#dee2e6",
          lineWidth: 1
        }} />
          <YTicks scaleId="y" ticks={makeLinearTicks()} />

          <LinePlot data={Array.from({
          length: 20
        }, (_, i) => ({
          x: i * 5,
          y: 50 + Math.sin(i / 2) * 30
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#2f9e44",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...G.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
        <h3>Different Grid Styles per Axis</h3>
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
          <XTicks scaleId="x" ticks={makeLinearTicks()} withGrid gridStyle={{
          strokeStyle: "rgba(255, 107, 107, 0.4)",
          lineWidth: 2
        }} tickStyle={{
          strokeStyle: "#ff6b6b"
        }} labelStyle={{
          fillStyle: "#ff6b6b"
        }} />
          <YTicks scaleId="y" ticks={makeLinearTicks()} withGrid gridStyle={{
          strokeStyle: "rgba(76, 110, 245, 0.4)",
          lineWidth: 1
        }} tickStyle={{
          strokeStyle: "#4c6ef5"
        }} labelStyle={{
          fillStyle: "#4c6ef5"
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
}`,...M.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
        <h3>Grid with Time Ticks</h3>
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
        })} withGrid gridStyle={{
          strokeStyle: "rgba(0, 0, 0, 0.08)",
          lineWidth: 1
        }} />
          <YTicks scaleId="y" ticks={makeLinearTicks()} withGrid gridStyle={{
          strokeStyle: "rgba(0, 0, 0, 0.08)",
          lineWidth: 1
        }} />

          <LinePlot data={Array.from({
          length: 100
        }, (_, i) => ({
          x: refPoint - 1000 * 60 * 60 * 24 * 7 + i * 1000 * 60 * 60 * 24 * 7 / 100,
          y: 50 + Math.sin(i / 10) * 20 + Math.random() * 10
        }))} xScaleId="t" yScaleId="y" style={{
          strokeStyle: "#1098ad",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...Y.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      padding: "20px",
      fontFamily: "sans-serif"
    }}>
        <h2 style={{
        marginBottom: "4px"
      }}>DST Transition Tick Ranges</h2>
        <p style={{
        color: "#666",
        fontSize: "13px",
        margin: "0 0 24px"
      }}>
          Fixed time ranges across summer (spring-forward) and autumn
          (fall-back) DST changes in various time zones. No data — only ticks.
        </p>
        {DST_SCENARIOS.map((scenario, i) => {
        const min = Date.parse(scenario.min);
        const max = Date.parse(scenario.max);
        const scaleId = \`t\${i}\`;
        const scales: PlotScaleConfig[] = [{
          id: scaleId,
          axis: {
            position: "bottom",
            size: 80
          },
          origin: "x",
          min,
          max
        }];
        return <div key={i} style={{
          marginBottom: "32px"
        }}>
              <h4 style={{
            margin: "0 0 2px"
          }}>{scenario.title}</h4>
              <p style={{
            color: "#888",
            fontSize: "12px",
            margin: "0 0 6px"
          }}>
                {scenario.min} → {scenario.max} ({scenario.timeZone})
              </p>
              <CanPlot style={{
            width: "100%",
            height: "80px"
          }} configuration={{
            padding: {
              bottom: 0,
              left: 100,
              right: 100,
              top: 0
            },
            scales
          }}>
                <XTicks scaleId={scaleId} ticks={makeTimeTicks({
              timeZone: scenario.timeZone
            })} />
              </CanPlot>
            </div>;
      })}
      </div>;
  }
}`,..._.parameters?.docs?.source}}};const tn=["DefaultTicks","DifferentTickSizes","DifferentTickStyles","DifferentLabelStyles","CustomLabelGap","DifferentAxisPositions","TimeTicksWithStyles","CustomTickSpacing","FullyCustomized","TimeTicksWideRange","TimeTicksInteractive","GridDefault","GridStyled","GridYOnly","GridXOnly","GridDifferentStyles","GridWithTimeTicks","DSTTimeRanges"];export{z as CustomLabelGap,W as CustomTickSpacing,_ as DSTTimeRanges,u as DefaultTicks,j as DifferentAxisPositions,w as DifferentLabelStyles,b as DifferentTickSizes,I as DifferentTickStyles,P as FullyCustomized,v as GridDefault,M as GridDifferentStyles,A as GridStyled,Y as GridWithTimeTicks,G as GridXOnly,D as GridYOnly,C as TimeTicksInteractive,L as TimeTicksWideRange,Z as TimeTicksWithStyles,tn as __namedExportsOrder,en as default};

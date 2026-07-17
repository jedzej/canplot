import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./iframe-Aps066pu.js";import{C as y}from"./frameContext-DY6mtHib.js";import{L as T}from"./LinePlot-Dz_NYnX4.js";import{B as Y}from"./BarPlot-8BY-ENbJ.js";import{A as B}from"./AreaPlot-C-ocTTqU.js";import{X as g,m as l,Y as S,a as P}from"./tickUtils-DK7z9o3l.js";import{C as f}from"./ChartAreaInteractions-BfourqYk.js";import{C as k}from"./CrossHair-CDoG9WsS.js";import{S as b}from"./SelectBox-D4vOczf6.js";import"./preload-helper-PPVm8Dsz.js";const H={component:y,parameters:{layout:"fullscreen"},tags:["autodocs"]},z={render:()=>{const[i,c]=C.useState({min:0,max:100}),[s,x]=C.useState({min:0,max:100}),d=o=>{if(o.completed){if(o.mode==="x"||o.mode==="box"){const a=o.x.scaled[0];a&&c({min:Math.min(a.from,a.to),max:Math.max(a.from,a.to)})}if(o.mode==="y"||o.mode==="box"){const a=o.y.scaled[0];a&&x({min:Math.min(a.from,a.to),max:Math.max(a.from,a.to)})}}},h=()=>{c({min:0,max:100}),x({min:0,max:100})},m=[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:i.min,max:i.max},{id:"y",axis:{position:"left",size:60},origin:"y",min:s.min,max:s.max}],p=Array.from({length:50},(o,a)=>({x:a*2,y:50+Math.sin(a/5)*30+Math.cos(a/3)*15})),r=Array.from({length:50},(o,a)=>({x:a*2,y:30+Math.cos(a/4)*25+Math.sin(a/2)*10}));return n.jsxs("div",{style:{padding:"20px"},children:[n.jsxs("div",{style:{marginBottom:"10px",display:"flex",gap:"10px",alignItems:"center"},children:[n.jsx("h3",{style:{margin:0},children:"Common Zoom (X and Y synchronized)"}),n.jsx("button",{onClick:h,style:{padding:"6px 12px",fontSize:"14px",cursor:"pointer",backgroundColor:"#f1f3f5",border:"1px solid #dee2e6",borderRadius:"4px"},children:"Reset Zoom"}),n.jsxs("div",{style:{fontSize:"14px",color:"#666"},children:["Range: X [",i.min.toFixed(1),", ",i.max.toFixed(1),"], Y [",s.min.toFixed(1),", ",s.max.toFixed(1),"]"]})]}),n.jsx("p",{style:{fontSize:"14px",color:"#666"},children:"Drag to select a region on any chart to zoom. Both X and Y axes are synchronized across all charts."}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"20px"},children:[n.jsxs(y,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:m},children:[n.jsxs(f,{sync:{key:"common-zoom",xViaScaleId:"x",yViaScaleId:"y"},onSpanSelect:d,children:[n.jsx(k,{}),n.jsx(b,{makeStyle:()=>({backgroundColor:"#4c6ef544"})})]}),n.jsx(g,{scaleId:"x",ticks:l()}),n.jsx(S,{scaleId:"y",ticks:l()}),n.jsx(T,{data:p,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]}),n.jsxs(y,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:80,left:80,right:20,top:20},scales:m},children:[n.jsxs(f,{sync:{key:"common-zoom",xViaScaleId:"x",yViaScaleId:"y"},onSpanSelect:d,children:[n.jsx(k,{}),n.jsx(b,{makeStyle:()=>({backgroundColor:"#51cf6644"})})]}),n.jsx(g,{scaleId:"x",ticks:l()}),n.jsx(S,{scaleId:"y",ticks:l()}),n.jsx(T,{data:r,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#51cf66",lineWidth:2}})]})]})]})}},v={render:()=>{const[i,c]=C.useState({min:0,max:100}),[s,x]=C.useState({min:0,max:100}),[d,h]=C.useState({min:-50,max:50}),m=t=>{if(t.completed){if(t.mode==="x"||t.mode==="box"){const e=t.x.scaled[0];e&&c({min:Math.min(e.from,e.to),max:Math.max(e.from,e.to)})}if(t.mode==="y"||t.mode==="box"){const e=t.y.scaled[0];e&&x({min:Math.min(e.from,e.to),max:Math.max(e.from,e.to)})}}},p=t=>{if(t.completed){if(t.mode==="x"||t.mode==="box"){const e=t.x.scaled[0];e&&c({min:Math.min(e.from,e.to),max:Math.max(e.from,e.to)})}if(t.mode==="y"||t.mode==="box"){const e=t.y.scaled[0];e&&h({min:Math.min(e.from,e.to),max:Math.max(e.from,e.to)})}}},r=()=>{c({min:0,max:100}),x({min:0,max:100}),h({min:-50,max:50})},o=[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:i.min,max:i.max},{id:"y1",axis:{position:"left",size:60},origin:"y",min:s.min,max:s.max}],a=[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:i.min,max:i.max},{id:"y2",axis:{position:"left",size:60},origin:"y",min:d.min,max:d.max}],I=Array.from({length:50},(t,e)=>({x:e*2,y:50+Math.sin(e/5)*30})),R=Array.from({length:50},(t,e)=>({x:e*2,y:Math.cos(e/4)*40}));return n.jsxs("div",{style:{padding:"20px"},children:[n.jsxs("div",{style:{marginBottom:"10px",display:"flex",gap:"10px",alignItems:"center"},children:[n.jsx("h3",{style:{margin:0},children:"X-Axis Only Synchronization"}),n.jsx("button",{onClick:r,style:{padding:"6px 12px",fontSize:"14px",cursor:"pointer",backgroundColor:"#f1f3f5",border:"1px solid #dee2e6",borderRadius:"4px"},children:"Reset Zoom"}),n.jsxs("div",{style:{fontSize:"14px",color:"#666"},children:["X: [",i.min.toFixed(1),", ",i.max.toFixed(1),"]"]})]}),n.jsx("p",{style:{fontSize:"14px",color:"#666"},children:"Drag horizontally to zoom X-axis on all charts. Drag vertically or box-select to zoom Y-axis independently per chart."}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"20px"},children:[n.jsxs("div",{children:[n.jsxs("div",{style:{fontSize:"12px",color:"#666",marginBottom:"5px"},children:["Chart 1: Y [",s.min.toFixed(1),", ",s.max.toFixed(1),"]"]}),n.jsxs(y,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:80,left:80,right:20,top:20},scales:o},children:[n.jsxs(f,{sync:{key:"x-axis-sync",xViaScaleId:"x"},onSpanSelect:m,children:[n.jsx(k,{}),n.jsx(b,{makeStyle:()=>({backgroundColor:"#ff6b6b44"})})]}),n.jsx(g,{scaleId:"x",ticks:l()}),n.jsx(S,{scaleId:"y1",ticks:l()}),n.jsx(T,{data:I,xScaleId:"x",yScaleId:"y1",style:{strokeStyle:"#ff6b6b",lineWidth:2}})]})]}),n.jsxs("div",{children:[n.jsxs("div",{style:{fontSize:"12px",color:"#666",marginBottom:"5px"},children:["Chart 2: Y [",d.min.toFixed(1),", ",d.max.toFixed(1),"]"]}),n.jsxs(y,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:80,left:80,right:20,top:20},scales:a},children:[n.jsxs(f,{sync:{key:"x-axis-sync",xViaScaleId:"x"},onSpanSelect:p,children:[n.jsx(k,{}),n.jsx(b,{makeStyle:()=>({backgroundColor:"#7950f244"})})]}),n.jsx(g,{scaleId:"x",ticks:l()}),n.jsx(S,{scaleId:"y2",ticks:l()}),n.jsx(T,{data:R,xScaleId:"x",yScaleId:"y2",style:{strokeStyle:"#7950f2",lineWidth:2}})]})]})]})]})}},j={render:()=>{const[i,c]=C.useState({min:0,max:100}),[s,x]=C.useState({min:0,max:100}),[d,h]=C.useState({min:0,max:50}),[m,p]=C.useState({min:-1,max:1}),r=t=>e=>{if(e.completed){if(e.mode==="x"||e.mode==="box"){const u=e.x.scaled[0];u&&c({min:Math.min(u.from,u.to),max:Math.max(u.from,u.to)})}if(e.mode==="y"||e.mode==="box"){const u=e.y.scaled[0];u&&t({min:Math.min(u.from,u.to),max:Math.max(u.from,u.to)})}}},o=()=>{c({min:0,max:100}),x({min:0,max:100}),h({min:0,max:50}),p({min:-1,max:1})},a=Array.from({length:50},(t,e)=>({x:e*2,y:50+Math.sin(e/5)*30})),I=Array.from({length:20},(t,e)=>({x:[e*5-1.5,e*5+1.5],y:15+Math.random()*30})),R=Array.from({length:100},(t,e)=>({x:e,y:[0,Math.sin(e/10)*.8]}));return n.jsxs("div",{style:{padding:"20px"},children:[n.jsxs("div",{style:{marginBottom:"10px",display:"flex",gap:"10px",alignItems:"center"},children:[n.jsx("h3",{style:{margin:0},children:"Three Charts - X-Axis Synchronized"}),n.jsx("button",{onClick:o,style:{padding:"6px 12px",fontSize:"14px",cursor:"pointer",backgroundColor:"#f1f3f5",border:"1px solid #dee2e6",borderRadius:"4px"},children:"Reset Zoom"}),n.jsxs("div",{style:{fontSize:"14px",color:"#666"},children:["X: [",i.min.toFixed(1),", ",i.max.toFixed(1),"]"]})]}),n.jsx("p",{style:{fontSize:"14px",color:"#666"},children:"Three different chart types sharing the same X-axis. Each chart can have independent Y-axis zoom."}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"20px"},children:[n.jsxs("div",{children:[n.jsxs("div",{style:{fontSize:"13px",fontWeight:"500",marginBottom:"5px"},children:["Line Chart - Y: [",s.min.toFixed(1),","," ",s.max.toFixed(1),"]"]}),n.jsxs(y,{style:{width:"100%",height:"250px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:i.min,max:i.max},{id:"y1",axis:{position:"left",size:60},origin:"y",min:s.min,max:s.max}]},children:[n.jsxs(f,{sync:{key:"three-charts-x-sync",xViaScaleId:"x",yViaScaleId:"y1"},onSpanSelect:r(x),children:[n.jsx(k,{}),n.jsx(b,{makeStyle:()=>({backgroundColor:"#4c6ef544"})})]}),n.jsx(g,{scaleId:"x",ticks:l()}),n.jsx(S,{scaleId:"y1",ticks:l()}),n.jsx(T,{data:a,xScaleId:"x",yScaleId:"y1",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]})]}),n.jsxs("div",{children:[n.jsxs("div",{style:{fontSize:"13px",fontWeight:"500",marginBottom:"5px"},children:["Bar Chart - Y: [",d.min.toFixed(1),", ",d.max.toFixed(1),"]"]}),n.jsxs(y,{style:{width:"100%",height:"250px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:i.min,max:i.max},{id:"y2",axis:{position:"left",size:60},origin:"y",min:d.min,max:d.max}]},children:[n.jsxs(f,{sync:{key:"three-charts-x-sync",xViaScaleId:"x",yViaScaleId:"y2"},onSpanSelect:r(h),children:[n.jsx(k,{}),n.jsx(b,{makeStyle:()=>({backgroundColor:"#f59f0044"})})]}),n.jsx(g,{scaleId:"x",ticks:l()}),n.jsx(S,{scaleId:"y2",ticks:l()}),n.jsx(Y,{data:I,xScaleId:"x",yScaleId:"y2",style:{fillStyle:"#f59f00",strokeStyle:"#d68500",lineWidth:1}})]})]}),n.jsxs("div",{children:[n.jsxs("div",{style:{fontSize:"13px",fontWeight:"500",marginBottom:"5px"},children:["Area Chart - Y: [",m.min.toFixed(2),","," ",m.max.toFixed(2),"]"]}),n.jsxs(y,{style:{width:"100%",height:"250px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:i.min,max:i.max},{id:"y3",axis:{position:"left",size:60},origin:"y",min:m.min,max:m.max}]},children:[n.jsxs(f,{sync:{key:"three-charts-x-sync",xViaScaleId:"x",yViaScaleId:"y3"},onSpanSelect:r(p),children:[n.jsx(k,{}),n.jsx(b,{makeStyle:()=>({backgroundColor:"#51cf6644"})})]}),n.jsx(g,{scaleId:"x",ticks:l()}),n.jsx(S,{scaleId:"y3",ticks:l()}),n.jsx(B,{data:R,xScaleId:"x",yScaleId:"y3",style:{fillStyle:"#51cf6666",strokeStyle:"#51cf66",lineWidth:2}})]})]})]})]})}},A={render:()=>{const[i,c]=C.useState({min:0,max:100}),[s,x]=C.useState({min:0,max:100}),d=o=>{if(o.completed){if(o.mode==="x"||o.mode==="box"){const a=o.x.scaled[0];a&&c({min:Math.min(a.from,a.to),max:Math.max(a.from,a.to)})}if(o.mode==="y"||o.mode==="box"){const a=o.y.scaled[0];a&&x({min:Math.min(a.from,a.to),max:Math.max(a.from,a.to)})}}},h=()=>{c({min:0,max:100}),x({min:0,max:100})},m=[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:i.min,max:i.max},{id:"y",axis:{position:"left",size:60},origin:"y",min:s.min,max:s.max}],p=Array.from({length:50},(o,a)=>({x:a*2,y:50+Math.sin(a/5)*25+Math.random()*10})),r=Array.from({length:50},(o,a)=>({x:a*2,y:50+Math.sin(a/5)*25+10+Math.random()*10}));return n.jsxs("div",{style:{padding:"20px"},children:[n.jsxs("div",{style:{marginBottom:"10px",display:"flex",gap:"10px",alignItems:"center"},children:[n.jsx("h3",{style:{margin:0},children:"Side-by-Side Comparison"}),n.jsx("button",{onClick:h,style:{padding:"6px 12px",fontSize:"14px",cursor:"pointer",backgroundColor:"#f1f3f5",border:"1px solid #dee2e6",borderRadius:"4px"},children:"Reset Zoom"}),n.jsxs("div",{style:{fontSize:"14px",color:"#666"},children:["X: [",i.min.toFixed(1),", ",i.max.toFixed(1),"], Y: [",s.min.toFixed(1),", ",s.max.toFixed(1),"]"]})]}),n.jsx("p",{style:{fontSize:"14px",color:"#666"},children:"Compare two datasets side-by-side with synchronized zoom and crosshair."}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"13px",fontWeight:"500",marginBottom:"5px",color:"#4c6ef5"},children:"Dataset A"}),n.jsxs(y,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:m},children:[n.jsxs(f,{sync:{key:"side-by-side",xViaScaleId:"x",yViaScaleId:"y"},onSpanSelect:d,children:[n.jsx(k,{}),n.jsx(b,{makeStyle:()=>({backgroundColor:"#4c6ef544"})})]}),n.jsx(g,{scaleId:"x",ticks:l()}),n.jsx(S,{scaleId:"y",ticks:l()}),n.jsx(T,{data:p,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]})]}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"13px",fontWeight:"500",marginBottom:"5px",color:"#f76707"},children:"Dataset B"}),n.jsxs(y,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:m},children:[n.jsxs(f,{sync:{key:"side-by-side",xViaScaleId:"x",yViaScaleId:"y"},onSpanSelect:d,children:[n.jsx(k,{}),n.jsx(b,{makeStyle:()=>({backgroundColor:"#f7670744"})})]}),n.jsx(g,{scaleId:"x",ticks:l()}),n.jsx(S,{scaleId:"y",ticks:l()}),n.jsx(T,{data:r,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#f76707",lineWidth:2}})]})]})]})]})}},M={render:()=>{const i=Date.parse("2025-12-01T00:00:00Z"),c=1e3*60*60*24,[s,x]=C.useState({min:i-c*30,max:i}),[d,h]=C.useState({min:0,max:100}),[m,p]=C.useState({min:0,max:1e3}),r=t=>{if(t.completed){if(t.mode==="x"||t.mode==="box"){const e=t.x.scaled[0];e&&x({min:Math.min(e.from,e.to),max:Math.max(e.from,e.to)})}if(t.mode==="y"||t.mode==="box"){const e=t.y.scaled[0];e&&h({min:Math.min(e.from,e.to),max:Math.max(e.from,e.to)})}}},o=t=>{if(t.completed){if(t.mode==="x"||t.mode==="box"){const e=t.x.scaled[0];e&&x({min:Math.min(e.from,e.to),max:Math.max(e.from,e.to)})}if(t.mode==="y"||t.mode==="box"){const e=t.y.scaled[0];e&&p({min:Math.min(e.from,e.to),max:Math.max(e.from,e.to)})}}},a=()=>{x({min:i-c*30,max:i}),h({min:0,max:100}),p({min:0,max:1e3})},I=Array.from({length:100},(t,e)=>({x:i-c*30+e*c*30/100,y:50+Math.sin(e/10)*20+Math.random()*10})),R=Array.from({length:100},(t,e)=>({x:i-c*30+e*c*30/100,y:[0,500+Math.cos(e/15)*200+Math.random()*100]}));return n.jsxs("div",{style:{padding:"20px"},children:[n.jsxs("div",{style:{marginBottom:"10px",display:"flex",gap:"10px",alignItems:"center"},children:[n.jsx("h3",{style:{margin:0},children:"Time Series - X-Axis Synchronized"}),n.jsx("button",{onClick:a,style:{padding:"6px 12px",fontSize:"14px",cursor:"pointer",backgroundColor:"#f1f3f5",border:"1px solid #dee2e6",borderRadius:"4px"},children:"Reset Zoom"})]}),n.jsx("p",{style:{fontSize:"14px",color:"#666"},children:"Time series data with synchronized time axis. Temperature and sales metrics can be zoomed independently on Y-axis."}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"20px"},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"13px",fontWeight:"500",marginBottom:"5px"},children:"Temperature (°C)"}),n.jsxs(y,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:[{id:"time",axis:{position:"bottom",size:80},origin:"x",min:s.min,max:s.max},{id:"temp",axis:{position:"left",size:60},origin:"y",min:d.min,max:d.max}]},children:[n.jsxs(f,{sync:{key:"timeseries-x-sync",xViaScaleId:"time",yViaScaleId:"temp"},onSpanSelect:r,children:[n.jsx(k,{}),n.jsx(b,{makeStyle:()=>({backgroundColor:"#ff6b6b44"})})]}),n.jsx(g,{scaleId:"time",ticks:P()}),n.jsx(S,{scaleId:"temp",ticks:l()}),n.jsx(T,{data:I,xScaleId:"time",yScaleId:"temp",style:{strokeStyle:"#ff6b6b",lineWidth:2}})]})]}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"13px",fontWeight:"500",marginBottom:"5px"},children:"Sales ($)"}),n.jsxs(y,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:[{id:"time",axis:{position:"bottom",size:80},origin:"x",min:s.min,max:s.max},{id:"sales",axis:{position:"left",size:60},origin:"y",min:m.min,max:m.max}]},children:[n.jsxs(f,{sync:{key:"timeseries-x-sync",xViaScaleId:"time",yViaScaleId:"sales"},onSpanSelect:o,children:[n.jsx(k,{}),n.jsx(b,{makeStyle:()=>({backgroundColor:"#51cf6644"})})]}),n.jsx(g,{scaleId:"time",ticks:P()}),n.jsx(S,{scaleId:"sales",ticks:l()}),n.jsx(B,{data:R,xScaleId:"time",yScaleId:"sales",style:{fillStyle:"#51cf6666",strokeStyle:"#51cf66",lineWidth:2}})]})]})]})]})}},w={render:()=>{const s={id:"opTime",axis:{position:"bottom",size:40},origin:"x",min:0,max:3600},x={id:"yA",axis:{position:"left",size:60},origin:"y",min:0,max:100},d={id:"wallClock",axis:{position:"bottom",size:40},origin:"x",min:17e11,max:17e11+36e5},h={id:"yB",axis:{position:"left",size:60},origin:"y",min:-50,max:50},m=Array.from({length:120},(r,o)=>({x:o*30,y:50+Math.sin(o/8)*30})),p=Array.from({length:120},(r,o)=>({x:17e11+o*3e4,y:Math.cos(o/6)*40}));return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{style:{margin:"0 0 8px 0"},children:"Normalized-value cursor bridge (mismatched scales)"}),n.jsxs("p",{style:{fontSize:"14px",color:"#666"},children:["Chart A's x axis is ",n.jsx("code",{children:"opTime"})," (seconds, 0..3600). Chart B's x axis is ",n.jsx("code",{children:"wallClock"})," (ms epoch). No shared scale id — the crosshair still syncs because each plot declares"," ",n.jsx("code",{children:"xToNormalized"}),"/",n.jsx("code",{children:"xFromNormalized"})," against a shared wall-clock-ms reference space."]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"20px"},children:[n.jsxs(y,{style:{width:"100%",height:"250px"},configuration:{padding:{top:20,right:20,bottom:20,left:20},scales:[s,x]},children:[n.jsx(f,{sync:{key:"normalized-bridge-demo",xViaScaleId:"opTime",xToNormalized:r=>17e11+r*1e3,xFromNormalized:r=>(r-17e11)/1e3},children:n.jsx(k,{})}),n.jsx(g,{scaleId:"opTime",ticks:l()}),n.jsx(S,{scaleId:"yA",ticks:l()}),n.jsx(T,{data:m,xScaleId:"opTime",yScaleId:"yA",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]}),n.jsxs(y,{style:{width:"100%",height:"250px"},configuration:{padding:{top:20,right:20,bottom:20,left:20},scales:[d,h]},children:[n.jsx(f,{sync:{key:"normalized-bridge-demo",xViaScaleId:"wallClock",xToNormalized:r=>r,xFromNormalized:r=>r},children:n.jsx(k,{})}),n.jsx(g,{scaleId:"wallClock",ticks:P()}),n.jsx(S,{scaleId:"yB",ticks:l()}),n.jsx(T,{data:p,xScaleId:"wallClock",yScaleId:"yB",style:{strokeStyle:"#51cf66",lineWidth:2}})]})]})]})}},_={render:()=>{const m=e=>e<1800?17e11+e*1e3:17000036e5+(e-1800)*1e3,p=e=>e>=17e11&&e<17000018e5?(e-17e11)/1e3:e>=17000036e5?1800+(e-17000036e5)/1e3:null,r={id:"opTime",axis:{position:"bottom",size:40},origin:"x",min:0,max:3600},o={id:"yA",axis:{position:"left",size:60},origin:"y",min:0,max:100},a={id:"wallClock",axis:{position:"bottom",size:40},origin:"x",min:17e11+15*6e4,max:17e11+75*6e4},I={id:"yB",axis:{position:"left",size:60},origin:"y",min:-50,max:50},R=Array.from({length:121},(e,u)=>({x:u*30,y:50+Math.sin(u/8)*30})),t=[];for(let e=0;e<=3600;e+=30)t.push({x:m(e),y:Math.cos(e/240)*40});return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{style:{margin:"0 0 8px 0"},children:"Normalized-value cursor bridge — partial overlap + gap"}),n.jsxs("p",{style:{fontSize:"14px",color:"#666",maxWidth:"80ch"},children:["Two runs of 30 minutes each with a 30-minute machine-off gap between them. Plot A shows continuous ",n.jsx("code",{children:"opTime"})," [0..3600 s]; Plot B shows a ",n.jsx("code",{children:"wallClock"})," window [T0+15 min..T0+75 min] covering the tail of run #1, the full gap, and the head of run #2. Hover Plot A around op-second 1800 to see the Plot B crosshair jump across the wall-clock gap. Hover Plot B within the gap to see Plot A hide the crosshair (",n.jsx("code",{children:"xFromNormalized"})," returns ",n.jsx("code",{children:"null"}),")."]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"20px"},children:[n.jsxs(y,{style:{width:"100%",height:"250px"},configuration:{padding:{top:20,right:20,bottom:20,left:20},scales:[r,o]},children:[n.jsx(f,{sync:{key:"normalized-bridge-gap-demo",xViaScaleId:"opTime",xToNormalized:m,xFromNormalized:p},children:n.jsx(k,{})}),n.jsx(g,{scaleId:"opTime",ticks:l()}),n.jsx(S,{scaleId:"yA",ticks:l()}),n.jsx(T,{data:R,xScaleId:"opTime",yScaleId:"yA",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]}),n.jsxs(y,{style:{width:"100%",height:"250px"},configuration:{padding:{top:20,right:20,bottom:20,left:20},scales:[a,I]},children:[n.jsx(f,{sync:{key:"normalized-bridge-gap-demo",xViaScaleId:"wallClock",xToNormalized:e=>e,xFromNormalized:e=>e},children:n.jsx(k,{})}),n.jsx(g,{scaleId:"wallClock",ticks:P()}),n.jsx(S,{scaleId:"yB",ticks:l()}),n.jsx(T,{data:t,xScaleId:"wallClock",yScaleId:"yB",style:{strokeStyle:"#51cf66",lineWidth:2}})]})]})]})}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [xRange, setXRange] = useState({
      min: 0,
      max: 100
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [yRange, setYRange] = useState({
      min: 0,
      max: 100
    });
    const handleSpanSelect = (event: SpanSelectEvent) => {
      if (!event.completed) return;
      if (event.mode === "x" || event.mode === "box") {
        const xScale = event.x.scaled[0];
        if (xScale) {
          setXRange({
            min: Math.min(xScale.from, xScale.to),
            max: Math.max(xScale.from, xScale.to)
          });
        }
      }
      if (event.mode === "y" || event.mode === "box") {
        const yScale = event.y.scaled[0];
        if (yScale) {
          setYRange({
            min: Math.min(yScale.from, yScale.to),
            max: Math.max(yScale.from, yScale.to)
          });
        }
      }
    };
    const resetZoom = () => {
      setXRange({
        min: 0,
        max: 100
      });
      setYRange({
        min: 0,
        max: 100
      });
    };
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 60
      },
      origin: "x",
      min: xRange.min,
      max: xRange.max
    }, {
      id: "y",
      axis: {
        position: "left",
        size: 60
      },
      origin: "y",
      min: yRange.min,
      max: yRange.max
    }];
    const data1 = Array.from({
      length: 50
    }, (_, i) => ({
      x: i * 2,
      y: 50 + Math.sin(i / 5) * 30 + Math.cos(i / 3) * 15
    }));
    const data2 = Array.from({
      length: 50
    }, (_, i) => ({
      x: i * 2,
      y: 30 + Math.cos(i / 4) * 25 + Math.sin(i / 2) * 10
    }));
    return <div style={{
      padding: "20px"
    }}>
        <div style={{
        marginBottom: "10px",
        display: "flex",
        gap: "10px",
        alignItems: "center"
      }}>
          <h3 style={{
          margin: 0
        }}>Common Zoom (X and Y synchronized)</h3>
          <button onClick={resetZoom} style={{
          padding: "6px 12px",
          fontSize: "14px",
          cursor: "pointer",
          backgroundColor: "#f1f3f5",
          border: "1px solid #dee2e6",
          borderRadius: "4px"
        }}>
            Reset Zoom
          </button>
          <div style={{
          fontSize: "14px",
          color: "#666"
        }}>
            Range: X [{xRange.min.toFixed(1)}, {xRange.max.toFixed(1)}], Y [
            {yRange.min.toFixed(1)}, {yRange.max.toFixed(1)}]
          </div>
        </div>
        <p style={{
        fontSize: "14px",
        color: "#666"
      }}>
          Drag to select a region on any chart to zoom. Both X and Y axes are
          synchronized across all charts.
        </p>

        <div style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "20px"
      }}>
          {/* Chart 1 */}
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
            <ChartAreaInteractions sync={{
            key: "common-zoom",
            xViaScaleId: "x",
            yViaScaleId: "y"
          }} onSpanSelect={handleSpanSelect}>
              <Crosshair />
              <SelectBox makeStyle={() => ({
              backgroundColor: "#4c6ef544"
            })} />
            </ChartAreaInteractions>

            <XTicks scaleId="x" ticks={makeLinearTicks()} />
            <YTicks scaleId="y" ticks={makeLinearTicks()} />

            <LinePlot data={data1} xScaleId="x" yScaleId="y" style={{
            strokeStyle: "#4c6ef5",
            lineWidth: 2
          }} />
          </CanPlot>

          {/* Chart 2 */}
          <CanPlot style={{
          width: "100%",
          height: "300px"
        }} configuration={{
          padding: {
            bottom: 80,
            left: 80,
            right: 20,
            top: 20
          },
          scales
        }}>
            <ChartAreaInteractions sync={{
            key: "common-zoom",
            xViaScaleId: "x",
            yViaScaleId: "y"
          }} onSpanSelect={handleSpanSelect}>
              <Crosshair />
              <SelectBox makeStyle={() => ({
              backgroundColor: "#51cf6644"
            })} />
            </ChartAreaInteractions>

            <XTicks scaleId="x" ticks={makeLinearTicks()} />
            <YTicks scaleId="y" ticks={makeLinearTicks()} />

            <LinePlot data={data2} xScaleId="x" yScaleId="y" style={{
            strokeStyle: "#51cf66",
            lineWidth: 2
          }} />
          </CanPlot>
        </div>
      </div>;
  }
}`,...z.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [xRange, setXRange] = useState({
      min: 0,
      max: 100
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [yRange1, setYRange1] = useState({
      min: 0,
      max: 100
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [yRange2, setYRange2] = useState({
      min: -50,
      max: 50
    });
    const handleSpanSelect1 = (event: SpanSelectEvent) => {
      if (!event.completed) return;
      if (event.mode === "x" || event.mode === "box") {
        const xScale = event.x.scaled[0];
        if (xScale) {
          setXRange({
            min: Math.min(xScale.from, xScale.to),
            max: Math.max(xScale.from, xScale.to)
          });
        }
      }
      if (event.mode === "y" || event.mode === "box") {
        const yScale = event.y.scaled[0];
        if (yScale) {
          setYRange1({
            min: Math.min(yScale.from, yScale.to),
            max: Math.max(yScale.from, yScale.to)
          });
        }
      }
    };
    const handleSpanSelect2 = (event: SpanSelectEvent) => {
      if (!event.completed) return;
      if (event.mode === "x" || event.mode === "box") {
        const xScale = event.x.scaled[0];
        if (xScale) {
          setXRange({
            min: Math.min(xScale.from, xScale.to),
            max: Math.max(xScale.from, xScale.to)
          });
        }
      }
      if (event.mode === "y" || event.mode === "box") {
        const yScale = event.y.scaled[0];
        if (yScale) {
          setYRange2({
            min: Math.min(yScale.from, yScale.to),
            max: Math.max(yScale.from, yScale.to)
          });
        }
      }
    };
    const resetZoom = () => {
      setXRange({
        min: 0,
        max: 100
      });
      setYRange1({
        min: 0,
        max: 100
      });
      setYRange2({
        min: -50,
        max: 50
      });
    };
    const scales1: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 60
      },
      origin: "x",
      min: xRange.min,
      max: xRange.max
    }, {
      id: "y1",
      axis: {
        position: "left",
        size: 60
      },
      origin: "y",
      min: yRange1.min,
      max: yRange1.max
    }];
    const scales2: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 60
      },
      origin: "x",
      min: xRange.min,
      max: xRange.max
    }, {
      id: "y2",
      axis: {
        position: "left",
        size: 60
      },
      origin: "y",
      min: yRange2.min,
      max: yRange2.max
    }];
    const data1 = Array.from({
      length: 50
    }, (_, i) => ({
      x: i * 2,
      y: 50 + Math.sin(i / 5) * 30
    }));
    const data2 = Array.from({
      length: 50
    }, (_, i) => ({
      x: i * 2,
      y: Math.cos(i / 4) * 40
    }));
    return <div style={{
      padding: "20px"
    }}>
        <div style={{
        marginBottom: "10px",
        display: "flex",
        gap: "10px",
        alignItems: "center"
      }}>
          <h3 style={{
          margin: 0
        }}>X-Axis Only Synchronization</h3>
          <button onClick={resetZoom} style={{
          padding: "6px 12px",
          fontSize: "14px",
          cursor: "pointer",
          backgroundColor: "#f1f3f5",
          border: "1px solid #dee2e6",
          borderRadius: "4px"
        }}>
            Reset Zoom
          </button>
          <div style={{
          fontSize: "14px",
          color: "#666"
        }}>
            X: [{xRange.min.toFixed(1)}, {xRange.max.toFixed(1)}]
          </div>
        </div>
        <p style={{
        fontSize: "14px",
        color: "#666"
      }}>
          Drag horizontally to zoom X-axis on all charts. Drag vertically or
          box-select to zoom Y-axis independently per chart.
        </p>

        <div style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "20px"
      }}>
          {/* Chart 1 */}
          <div>
            <div style={{
            fontSize: "12px",
            color: "#666",
            marginBottom: "5px"
          }}>
              Chart 1: Y [{yRange1.min.toFixed(1)}, {yRange1.max.toFixed(1)}]
            </div>
            <CanPlot style={{
            width: "100%",
            height: "300px"
          }} configuration={{
            padding: {
              bottom: 80,
              left: 80,
              right: 20,
              top: 20
            },
            scales: scales1
          }}>
              <ChartAreaInteractions sync={{
              key: "x-axis-sync",
              xViaScaleId: "x"
            }} onSpanSelect={handleSpanSelect1}>
                <Crosshair />
                <SelectBox makeStyle={() => ({
                backgroundColor: "#ff6b6b44"
              })} />
              </ChartAreaInteractions>

              <XTicks scaleId="x" ticks={makeLinearTicks()} />
              <YTicks scaleId="y1" ticks={makeLinearTicks()} />

              <LinePlot data={data1} xScaleId="x" yScaleId="y1" style={{
              strokeStyle: "#ff6b6b",
              lineWidth: 2
            }} />
            </CanPlot>
          </div>

          {/* Chart 2 */}
          <div>
            <div style={{
            fontSize: "12px",
            color: "#666",
            marginBottom: "5px"
          }}>
              Chart 2: Y [{yRange2.min.toFixed(1)}, {yRange2.max.toFixed(1)}]
            </div>
            <CanPlot style={{
            width: "100%",
            height: "300px"
          }} configuration={{
            padding: {
              bottom: 80,
              left: 80,
              right: 20,
              top: 20
            },
            scales: scales2
          }}>
              <ChartAreaInteractions sync={{
              key: "x-axis-sync",
              xViaScaleId: "x"
            }} onSpanSelect={handleSpanSelect2}>
                <Crosshair />
                <SelectBox makeStyle={() => ({
                backgroundColor: "#7950f244"
              })} />
              </ChartAreaInteractions>

              <XTicks scaleId="x" ticks={makeLinearTicks()} />
              <YTicks scaleId="y2" ticks={makeLinearTicks()} />

              <LinePlot data={data2} xScaleId="x" yScaleId="y2" style={{
              strokeStyle: "#7950f2",
              lineWidth: 2
            }} />
            </CanPlot>
          </div>
        </div>
      </div>;
  }
}`,...v.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [xRange, setXRange] = useState({
      min: 0,
      max: 100
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [yRange1, setYRange1] = useState({
      min: 0,
      max: 100
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [yRange2, setYRange2] = useState({
      min: 0,
      max: 50
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [yRange3, setYRange3] = useState({
      min: -1,
      max: 1
    });
    const handleSpanSelect = (setY: React.Dispatch<React.SetStateAction<{
      min: number;
      max: number;
    }>>) => {
      return (event: SpanSelectEvent) => {
        if (!event.completed) return;
        if (event.mode === "x" || event.mode === "box") {
          const xScale = event.x.scaled[0];
          if (xScale) {
            setXRange({
              min: Math.min(xScale.from, xScale.to),
              max: Math.max(xScale.from, xScale.to)
            });
          }
        }
        if (event.mode === "y" || event.mode === "box") {
          const yScale = event.y.scaled[0];
          if (yScale) {
            setY({
              min: Math.min(yScale.from, yScale.to),
              max: Math.max(yScale.from, yScale.to)
            });
          }
        }
      };
    };
    const resetZoom = () => {
      setXRange({
        min: 0,
        max: 100
      });
      setYRange1({
        min: 0,
        max: 100
      });
      setYRange2({
        min: 0,
        max: 50
      });
      setYRange3({
        min: -1,
        max: 1
      });
    };
    const lineData = Array.from({
      length: 50
    }, (_, i) => ({
      x: i * 2,
      y: 50 + Math.sin(i / 5) * 30
    }));
    const barData = Array.from({
      length: 20
    }, (_, i) => ({
      x: [i * 5 - 1.5, i * 5 + 1.5] as [number, number],
      y: 15 + Math.random() * 30
    }));
    const areaData = Array.from({
      length: 100
    }, (_, i) => ({
      x: i,
      y: [0, Math.sin(i / 10) * 0.8] as [number, number]
    }));
    return <div style={{
      padding: "20px"
    }}>
        <div style={{
        marginBottom: "10px",
        display: "flex",
        gap: "10px",
        alignItems: "center"
      }}>
          <h3 style={{
          margin: 0
        }}>Three Charts - X-Axis Synchronized</h3>
          <button onClick={resetZoom} style={{
          padding: "6px 12px",
          fontSize: "14px",
          cursor: "pointer",
          backgroundColor: "#f1f3f5",
          border: "1px solid #dee2e6",
          borderRadius: "4px"
        }}>
            Reset Zoom
          </button>
          <div style={{
          fontSize: "14px",
          color: "#666"
        }}>
            X: [{xRange.min.toFixed(1)}, {xRange.max.toFixed(1)}]
          </div>
        </div>
        <p style={{
        fontSize: "14px",
        color: "#666"
      }}>
          Three different chart types sharing the same X-axis. Each chart can
          have independent Y-axis zoom.
        </p>

        <div style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "20px"
      }}>
          {/* Line Chart */}
          <div>
            <div style={{
            fontSize: "13px",
            fontWeight: "500",
            marginBottom: "5px"
          }}>
              Line Chart - Y: [{yRange1.min.toFixed(1)},{" "}
              {yRange1.max.toFixed(1)}]
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
            scales: [{
              id: "x",
              axis: {
                position: "bottom",
                size: 60
              },
              origin: "x",
              min: xRange.min,
              max: xRange.max
            }, {
              id: "y1",
              axis: {
                position: "left",
                size: 60
              },
              origin: "y",
              min: yRange1.min,
              max: yRange1.max
            }]
          }}>
              <ChartAreaInteractions sync={{
              key: "three-charts-x-sync",
              xViaScaleId: "x",
              yViaScaleId: "y1"
            }} onSpanSelect={handleSpanSelect(setYRange1)}>
                <Crosshair />
                <SelectBox makeStyle={() => ({
                backgroundColor: "#4c6ef544"
              })} />
              </ChartAreaInteractions>

              <XTicks scaleId="x" ticks={makeLinearTicks()} />
              <YTicks scaleId="y1" ticks={makeLinearTicks()} />

              <LinePlot data={lineData} xScaleId="x" yScaleId="y1" style={{
              strokeStyle: "#4c6ef5",
              lineWidth: 2
            }} />
            </CanPlot>
          </div>

          {/* Bar Chart */}
          <div>
            <div style={{
            fontSize: "13px",
            fontWeight: "500",
            marginBottom: "5px"
          }}>
              Bar Chart - Y: [{yRange2.min.toFixed(1)}, {yRange2.max.toFixed(1)}
              ]
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
            scales: [{
              id: "x",
              axis: {
                position: "bottom",
                size: 60
              },
              origin: "x",
              min: xRange.min,
              max: xRange.max
            }, {
              id: "y2",
              axis: {
                position: "left",
                size: 60
              },
              origin: "y",
              min: yRange2.min,
              max: yRange2.max
            }]
          }}>
              <ChartAreaInteractions sync={{
              key: "three-charts-x-sync",
              xViaScaleId: "x",
              yViaScaleId: "y2"
            }} onSpanSelect={handleSpanSelect(setYRange2)}>
                <Crosshair />
                <SelectBox makeStyle={() => ({
                backgroundColor: "#f59f0044"
              })} />
              </ChartAreaInteractions>

              <XTicks scaleId="x" ticks={makeLinearTicks()} />
              <YTicks scaleId="y2" ticks={makeLinearTicks()} />

              <BarPlot data={barData} xScaleId="x" yScaleId="y2" style={{
              fillStyle: "#f59f00",
              strokeStyle: "#d68500",
              lineWidth: 1
            }} />
            </CanPlot>
          </div>

          {/* Area Chart */}
          <div>
            <div style={{
            fontSize: "13px",
            fontWeight: "500",
            marginBottom: "5px"
          }}>
              Area Chart - Y: [{yRange3.min.toFixed(2)},{" "}
              {yRange3.max.toFixed(2)}]
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
            scales: [{
              id: "x",
              axis: {
                position: "bottom",
                size: 60
              },
              origin: "x",
              min: xRange.min,
              max: xRange.max
            }, {
              id: "y3",
              axis: {
                position: "left",
                size: 60
              },
              origin: "y",
              min: yRange3.min,
              max: yRange3.max
            }]
          }}>
              <ChartAreaInteractions sync={{
              key: "three-charts-x-sync",
              xViaScaleId: "x",
              yViaScaleId: "y3"
            }} onSpanSelect={handleSpanSelect(setYRange3)}>
                <Crosshair />
                <SelectBox makeStyle={() => ({
                backgroundColor: "#51cf6644"
              })} />
              </ChartAreaInteractions>

              <XTicks scaleId="x" ticks={makeLinearTicks()} />
              <YTicks scaleId="y3" ticks={makeLinearTicks()} />

              <AreaPlot data={areaData} xScaleId="x" yScaleId="y3" style={{
              fillStyle: "#51cf6666",
              strokeStyle: "#51cf66",
              lineWidth: 2
            }} />
            </CanPlot>
          </div>
        </div>
      </div>;
  }
}`,...j.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [xRange, setXRange] = useState({
      min: 0,
      max: 100
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [yRange, setYRange] = useState({
      min: 0,
      max: 100
    });
    const handleSpanSelect = (event: SpanSelectEvent) => {
      if (!event.completed) return;
      if (event.mode === "x" || event.mode === "box") {
        const xScale = event.x.scaled[0];
        if (xScale) {
          setXRange({
            min: Math.min(xScale.from, xScale.to),
            max: Math.max(xScale.from, xScale.to)
          });
        }
      }
      if (event.mode === "y" || event.mode === "box") {
        const yScale = event.y.scaled[0];
        if (yScale) {
          setYRange({
            min: Math.min(yScale.from, yScale.to),
            max: Math.max(yScale.from, yScale.to)
          });
        }
      }
    };
    const resetZoom = () => {
      setXRange({
        min: 0,
        max: 100
      });
      setYRange({
        min: 0,
        max: 100
      });
    };
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 60
      },
      origin: "x",
      min: xRange.min,
      max: xRange.max
    }, {
      id: "y",
      axis: {
        position: "left",
        size: 60
      },
      origin: "y",
      min: yRange.min,
      max: yRange.max
    }];
    const dataA = Array.from({
      length: 50
    }, (_, i) => ({
      x: i * 2,
      y: 50 + Math.sin(i / 5) * 25 + Math.random() * 10
    }));
    const dataB = Array.from({
      length: 50
    }, (_, i) => ({
      x: i * 2,
      y: 50 + Math.sin(i / 5) * 25 + 10 + Math.random() * 10
    }));
    return <div style={{
      padding: "20px"
    }}>
        <div style={{
        marginBottom: "10px",
        display: "flex",
        gap: "10px",
        alignItems: "center"
      }}>
          <h3 style={{
          margin: 0
        }}>Side-by-Side Comparison</h3>
          <button onClick={resetZoom} style={{
          padding: "6px 12px",
          fontSize: "14px",
          cursor: "pointer",
          backgroundColor: "#f1f3f5",
          border: "1px solid #dee2e6",
          borderRadius: "4px"
        }}>
            Reset Zoom
          </button>
          <div style={{
          fontSize: "14px",
          color: "#666"
        }}>
            X: [{xRange.min.toFixed(1)}, {xRange.max.toFixed(1)}], Y: [
            {yRange.min.toFixed(1)}, {yRange.max.toFixed(1)}]
          </div>
        </div>
        <p style={{
        fontSize: "14px",
        color: "#666"
      }}>
          Compare two datasets side-by-side with synchronized zoom and
          crosshair.
        </p>

        <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px"
      }}>
          {/* Dataset A */}
          <div>
            <div style={{
            fontSize: "13px",
            fontWeight: "500",
            marginBottom: "5px",
            color: "#4c6ef5"
          }}>
              Dataset A
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
              <ChartAreaInteractions sync={{
              key: "side-by-side",
              xViaScaleId: "x",
              yViaScaleId: "y"
            }} onSpanSelect={handleSpanSelect}>
                <Crosshair />
                <SelectBox makeStyle={() => ({
                backgroundColor: "#4c6ef544"
              })} />
              </ChartAreaInteractions>

              <XTicks scaleId="x" ticks={makeLinearTicks()} />
              <YTicks scaleId="y" ticks={makeLinearTicks()} />

              <LinePlot data={dataA} xScaleId="x" yScaleId="y" style={{
              strokeStyle: "#4c6ef5",
              lineWidth: 2
            }} />
            </CanPlot>
          </div>

          {/* Dataset B */}
          <div>
            <div style={{
            fontSize: "13px",
            fontWeight: "500",
            marginBottom: "5px",
            color: "#f76707"
          }}>
              Dataset B
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
              <ChartAreaInteractions sync={{
              key: "side-by-side",
              xViaScaleId: "x",
              yViaScaleId: "y"
            }} onSpanSelect={handleSpanSelect}>
                <Crosshair />
                <SelectBox makeStyle={() => ({
                backgroundColor: "#f7670744"
              })} />
              </ChartAreaInteractions>

              <XTicks scaleId="x" ticks={makeLinearTicks()} />
              <YTicks scaleId="y" ticks={makeLinearTicks()} />

              <LinePlot data={dataB} xScaleId="x" yScaleId="y" style={{
              strokeStyle: "#f76707",
              lineWidth: 2
            }} />
            </CanPlot>
          </div>
        </div>
      </div>;
  }
}`,...A.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const refPoint = Date.parse("2025-12-01T00:00:00Z");
    const dayMs = 1000 * 60 * 60 * 24;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [xRange, setXRange] = useState({
      min: refPoint - dayMs * 30,
      max: refPoint
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [yRange1, setYRange1] = useState({
      min: 0,
      max: 100
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [yRange2, setYRange2] = useState({
      min: 0,
      max: 1000
    });
    const handleSpanSelect1 = (event: SpanSelectEvent) => {
      if (!event.completed) return;
      if (event.mode === "x" || event.mode === "box") {
        const xScale = event.x.scaled[0];
        if (xScale) {
          setXRange({
            min: Math.min(xScale.from, xScale.to),
            max: Math.max(xScale.from, xScale.to)
          });
        }
      }
      if (event.mode === "y" || event.mode === "box") {
        const yScale = event.y.scaled[0];
        if (yScale) {
          setYRange1({
            min: Math.min(yScale.from, yScale.to),
            max: Math.max(yScale.from, yScale.to)
          });
        }
      }
    };
    const handleSpanSelect2 = (event: SpanSelectEvent) => {
      if (!event.completed) return;
      if (event.mode === "x" || event.mode === "box") {
        const xScale = event.x.scaled[0];
        if (xScale) {
          setXRange({
            min: Math.min(xScale.from, xScale.to),
            max: Math.max(xScale.from, xScale.to)
          });
        }
      }
      if (event.mode === "y" || event.mode === "box") {
        const yScale = event.y.scaled[0];
        if (yScale) {
          setYRange2({
            min: Math.min(yScale.from, yScale.to),
            max: Math.max(yScale.from, yScale.to)
          });
        }
      }
    };
    const resetZoom = () => {
      setXRange({
        min: refPoint - dayMs * 30,
        max: refPoint
      });
      setYRange1({
        min: 0,
        max: 100
      });
      setYRange2({
        min: 0,
        max: 1000
      });
    };
    const tempData = Array.from({
      length: 100
    }, (_, i) => ({
      x: refPoint - dayMs * 30 + i * dayMs * 30 / 100,
      y: 50 + Math.sin(i / 10) * 20 + Math.random() * 10
    }));
    const salesData = Array.from({
      length: 100
    }, (_, i) => ({
      x: refPoint - dayMs * 30 + i * dayMs * 30 / 100,
      y: [0, 500 + Math.cos(i / 15) * 200 + Math.random() * 100] as [number, number]
    }));
    return <div style={{
      padding: "20px"
    }}>
        <div style={{
        marginBottom: "10px",
        display: "flex",
        gap: "10px",
        alignItems: "center"
      }}>
          <h3 style={{
          margin: 0
        }}>Time Series - X-Axis Synchronized</h3>
          <button onClick={resetZoom} style={{
          padding: "6px 12px",
          fontSize: "14px",
          cursor: "pointer",
          backgroundColor: "#f1f3f5",
          border: "1px solid #dee2e6",
          borderRadius: "4px"
        }}>
            Reset Zoom
          </button>
        </div>
        <p style={{
        fontSize: "14px",
        color: "#666"
      }}>
          Time series data with synchronized time axis. Temperature and sales
          metrics can be zoomed independently on Y-axis.
        </p>

        <div style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "20px"
      }}>
          {/* Temperature Chart */}
          <div>
            <div style={{
            fontSize: "13px",
            fontWeight: "500",
            marginBottom: "5px"
          }}>
              Temperature (°C)
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
            scales: [{
              id: "time",
              axis: {
                position: "bottom",
                size: 80
              },
              origin: "x",
              min: xRange.min,
              max: xRange.max
            }, {
              id: "temp",
              axis: {
                position: "left",
                size: 60
              },
              origin: "y",
              min: yRange1.min,
              max: yRange1.max
            }]
          }}>
              <ChartAreaInteractions sync={{
              key: "timeseries-x-sync",
              xViaScaleId: "time",
              yViaScaleId: "temp"
            }} onSpanSelect={handleSpanSelect1}>
                <Crosshair />
                <SelectBox makeStyle={() => ({
                backgroundColor: "#ff6b6b44"
              })} />
              </ChartAreaInteractions>

              <XTicks scaleId="time" ticks={makeTimeTicks()} />
              <YTicks scaleId="temp" ticks={makeLinearTicks()} />

              <LinePlot data={tempData} xScaleId="time" yScaleId="temp" style={{
              strokeStyle: "#ff6b6b",
              lineWidth: 2
            }} />
            </CanPlot>
          </div>

          {/* Sales Chart */}
          <div>
            <div style={{
            fontSize: "13px",
            fontWeight: "500",
            marginBottom: "5px"
          }}>
              Sales ($)
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
            scales: [{
              id: "time",
              axis: {
                position: "bottom",
                size: 80
              },
              origin: "x",
              min: xRange.min,
              max: xRange.max
            }, {
              id: "sales",
              axis: {
                position: "left",
                size: 60
              },
              origin: "y",
              min: yRange2.min,
              max: yRange2.max
            }]
          }}>
              <ChartAreaInteractions sync={{
              key: "timeseries-x-sync",
              xViaScaleId: "time",
              yViaScaleId: "sales"
            }} onSpanSelect={handleSpanSelect2}>
                <Crosshair />
                <SelectBox makeStyle={() => ({
                backgroundColor: "#51cf6644"
              })} />
              </ChartAreaInteractions>

              <XTicks scaleId="time" ticks={makeTimeTicks()} />
              <YTicks scaleId="sales" ticks={makeLinearTicks()} />

              <AreaPlot data={salesData} xScaleId="time" yScaleId="sales" style={{
              fillStyle: "#51cf6666",
              strokeStyle: "#51cf66",
              lineWidth: 2
            }} />
            </CanPlot>
          </div>
        </div>
      </div>;
  }
}`,...M.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    // Shared reference: wall-clock ms. In this demo both plots use identity
    // linear translations, but the mechanism supports arbitrary (e.g. gap-aware)
    // transforms — the source uses xToNormalized, the receiver uses
    // xFromNormalized.
    const T0 = 1_700_000_000_000; // arbitrary epoch ms
    const HOUR = 3_600_000;

    // Plot A: local x scale is "opTime" in seconds (0..3600), representing an
    // hour of operation. Normalization: seconds -> wall-clock ms.
    const opTimeScale: PlotScaleConfig = {
      id: "opTime",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 3600
    };
    const yScaleA: PlotScaleConfig = {
      id: "yA",
      axis: {
        position: "left",
        size: 60
      },
      origin: "y",
      min: 0,
      max: 100
    };

    // Plot B: local x scale is "wallClock" in ms (T0..T0+HOUR).
    const wallClockScale: PlotScaleConfig = {
      id: "wallClock",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: T0,
      max: T0 + HOUR
    };
    const yScaleB: PlotScaleConfig = {
      id: "yB",
      axis: {
        position: "left",
        size: 60
      },
      origin: "y",
      min: -50,
      max: 50
    };
    const opTimeData = Array.from({
      length: 120
    }, (_, i) => ({
      x: i * 30,
      // seconds, 0..3570
      y: 50 + Math.sin(i / 8) * 30
    }));
    const wallClockData = Array.from({
      length: 120
    }, (_, i) => ({
      x: T0 + i * 30_000,
      // ms, matches opTime seconds * 1000
      y: Math.cos(i / 6) * 40
    }));
    return <div style={{
      padding: "20px"
    }}>
        <h3 style={{
        margin: "0 0 8px 0"
      }}>
          Normalized-value cursor bridge (mismatched scales)
        </h3>
        <p style={{
        fontSize: "14px",
        color: "#666"
      }}>
          Chart A's x axis is <code>opTime</code> (seconds, 0..3600). Chart B's
          x axis is <code>wallClock</code> (ms epoch). No shared scale id — the
          crosshair still syncs because each plot declares{" "}
          <code>xToNormalized</code>/<code>xFromNormalized</code> against a
          shared wall-clock-ms reference space.
        </p>

        <div style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "20px"
      }}>
          <CanPlot style={{
          width: "100%",
          height: "250px"
        }} configuration={{
          padding: {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          },
          scales: [opTimeScale, yScaleA]
        }}>
            <ChartAreaInteractions sync={{
            key: "normalized-bridge-demo",
            xViaScaleId: "opTime",
            // opTime seconds -> wall-clock ms (shared reference)
            xToNormalized: v => T0 + v * 1000,
            // wall-clock ms -> opTime seconds
            xFromNormalized: n => (n - T0) / 1000
          }}>
              <Crosshair />
            </ChartAreaInteractions>

            <XTicks scaleId="opTime" ticks={makeLinearTicks()} />
            <YTicks scaleId="yA" ticks={makeLinearTicks()} />

            <LinePlot data={opTimeData} xScaleId="opTime" yScaleId="yA" style={{
            strokeStyle: "#4c6ef5",
            lineWidth: 2
          }} />
          </CanPlot>

          <CanPlot style={{
          width: "100%",
          height: "250px"
        }} configuration={{
          padding: {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          },
          scales: [wallClockScale, yScaleB]
        }}>
            <ChartAreaInteractions sync={{
            key: "normalized-bridge-demo",
            xViaScaleId: "wallClock",
            // wallClock ms -> shared reference (identity here)
            xToNormalized: v => v,
            xFromNormalized: n => n
          }}>
              <Crosshair />
            </ChartAreaInteractions>

            <XTicks scaleId="wallClock" ticks={makeTimeTicks()} />
            <YTicks scaleId="yB" ticks={makeLinearTicks()} />

            <LinePlot data={wallClockData} xScaleId="wallClock" yScaleId="yB" style={{
            strokeStyle: "#51cf66",
            lineWidth: 2
          }} />
          </CanPlot>
        </div>
      </div>;
  }
}`,...w.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const T0 = 1_700_000_000_000; // arbitrary epoch ms
    const MIN = 60_000;
    const RUN1_END_OP_SEC = 1800; // 30 min of ops
    const RUN1_END_WALL_MS = T0 + 30 * MIN;
    const RUN2_START_WALL_MS = T0 + 60 * MIN; // gap of 30 min
    const RUN2_START_OP_SEC = 1800;

    // opTime seconds -> wall-clock ms, with a jump at 1800.
    const opTimeToWallClock = (opSec: number): number => {
      if (opSec < RUN1_END_OP_SEC) {
        return T0 + opSec * 1000;
      }
      return RUN2_START_WALL_MS + (opSec - RUN2_START_OP_SEC) * 1000;
    };

    // wall-clock ms -> opTime seconds, or null when inside the machine-off gap.
    const wallClockToOpTime = (wallMs: number): number | null => {
      if (wallMs >= T0 && wallMs < RUN1_END_WALL_MS) {
        return (wallMs - T0) / 1000;
      }
      if (wallMs >= RUN2_START_WALL_MS) {
        return RUN2_START_OP_SEC + (wallMs - RUN2_START_WALL_MS) / 1000;
      }
      return null;
    };

    // Plot A viewport: full opTime range (0..3600 seconds).
    const opTimeScale: PlotScaleConfig = {
      id: "opTime",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 3600
    };
    const yScaleA: PlotScaleConfig = {
      id: "yA",
      axis: {
        position: "left",
        size: 60
      },
      origin: "y",
      min: 0,
      max: 100
    };

    // Plot B viewport: [T0+15min, T0+75min] — partial overlap + gap.
    const wallClockScale: PlotScaleConfig = {
      id: "wallClock",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: T0 + 15 * MIN,
      max: T0 + 75 * MIN
    };
    const yScaleB: PlotScaleConfig = {
      id: "yB",
      axis: {
        position: "left",
        size: 60
      },
      origin: "y",
      min: -50,
      max: 50
    };

    // Op-time-indexed data (continuous, one sample every 30 op-seconds).
    const opTimeData = Array.from({
      length: 121
    }, (_, i) => ({
      x: i * 30,
      y: 50 + Math.sin(i / 8) * 30
    }));

    // Wall-clock-indexed data: only during the two runs (no samples in gap).
    const wallClockData: {
      x: number;
      y: number;
    }[] = [];
    for (let opSec = 0; opSec <= 3600; opSec += 30) {
      wallClockData.push({
        x: opTimeToWallClock(opSec),
        y: Math.cos(opSec / 240) * 40
      });
    }
    return <div style={{
      padding: "20px"
    }}>
        <h3 style={{
        margin: "0 0 8px 0"
      }}>
          Normalized-value cursor bridge — partial overlap + gap
        </h3>
        <p style={{
        fontSize: "14px",
        color: "#666",
        maxWidth: "80ch"
      }}>
          Two runs of 30 minutes each with a 30-minute machine-off gap between
          them. Plot A shows continuous <code>opTime</code> [0..3600 s]; Plot B
          shows a <code>wallClock</code> window [T0+15 min..T0+75 min] covering
          the tail of run #1, the full gap, and the head of run #2. Hover Plot
          A around op-second 1800 to see the Plot B crosshair jump across the
          wall-clock gap. Hover Plot B within the gap to see Plot A hide the
          crosshair (<code>xFromNormalized</code> returns <code>null</code>).
        </p>

        <div style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "20px"
      }}>
          <CanPlot style={{
          width: "100%",
          height: "250px"
        }} configuration={{
          padding: {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          },
          scales: [opTimeScale, yScaleA]
        }}>
            <ChartAreaInteractions sync={{
            key: "normalized-bridge-gap-demo",
            xViaScaleId: "opTime",
            // opTime -> shared wall-clock ms (with the gap encoded)
            xToNormalized: opTimeToWallClock,
            // wall-clock ms -> opTime, or null when inside the off-gap.
            // Returning null lets the receiver hide its crosshair when the
            // source cursor is over a wall-clock range that has no opTime.
            xFromNormalized: wallClockToOpTime
          }}>
              <Crosshair />
            </ChartAreaInteractions>

            <XTicks scaleId="opTime" ticks={makeLinearTicks()} />
            <YTicks scaleId="yA" ticks={makeLinearTicks()} />

            <LinePlot data={opTimeData} xScaleId="opTime" yScaleId="yA" style={{
            strokeStyle: "#4c6ef5",
            lineWidth: 2
          }} />
          </CanPlot>

          <CanPlot style={{
          width: "100%",
          height: "250px"
        }} configuration={{
          padding: {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          },
          scales: [wallClockScale, yScaleB]
        }}>
            <ChartAreaInteractions sync={{
            key: "normalized-bridge-gap-demo",
            xViaScaleId: "wallClock",
            // wall-clock ms IS the normalized reference space here.
            xToNormalized: v => v,
            xFromNormalized: n => n
          }}>
              <Crosshair />
            </ChartAreaInteractions>

            <XTicks scaleId="wallClock" ticks={makeTimeTicks()} />
            <YTicks scaleId="yB" ticks={makeLinearTicks()} />

            <LinePlot data={wallClockData} xScaleId="wallClock" yScaleId="yB" style={{
            strokeStyle: "#51cf66",
            lineWidth: 2
          }} />
          </CanPlot>
        </div>
      </div>;
  }
}`,..._.parameters?.docs?.source}}};const G=["CommonZoom","XAxisOnlySync","ThreeChartsXAxisSync","SideBySideComparison","TimeSeriesXAxisSync","NormalizedBridgeSync","NormalizedBridgeSyncPartialOverlapWithGap"];export{z as CommonZoom,w as NormalizedBridgeSync,_ as NormalizedBridgeSyncPartialOverlapWithGap,A as SideBySideComparison,j as ThreeChartsXAxisSync,M as TimeSeriesXAxisSync,v as XAxisOnlySync,G as __namedExportsOrder,H as default};

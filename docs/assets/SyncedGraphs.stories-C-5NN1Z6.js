import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-CRxhtb6P.js";import{C as y}from"./frameContext-ClpSaL7J.js";import{L as b}from"./LinePlot-D8f2Zo0X.js";import{B as A}from"./BarPlot-B4urhyTl.js";import{A as M}from"./AreaPlot-Dtrwhdm6.js";import{C as S}from"./ChartAreaInteractions-DRUk4mCz.js";import{C as f}from"./CrossHair-EDcW-zYc.js";import{S as u}from"./SelectBox-BhBxSaQX.js";import"./preload-helper-PPVm8Dsz.js";const w={component:y,parameters:{layout:"fullscreen"},tags:["autodocs"]},k={render:()=>{const[i,r]=d.useState({min:0,max:100}),[s,x]=d.useState({min:0,max:100}),l=o=>{if(o.completed){if(o.mode==="x"||o.mode==="box"){const t=o.x.scaled[0];t&&r({min:Math.min(t.from,t.to),max:Math.max(t.from,t.to)})}if(o.mode==="y"||o.mode==="box"){const t=o.y.scaled[0];t&&x({min:Math.min(t.from,t.to),max:Math.max(t.from,t.to)})}}},c=()=>{r({min:0,max:100}),x({min:0,max:100})},m=[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:i.min,max:i.max},{id:"y",axis:{position:"left",size:60},origin:"y",min:s.min,max:s.max}],h=Array.from({length:50},(o,t)=>({x:t*2,y:50+Math.sin(t/5)*30+Math.cos(t/3)*15})),p=Array.from({length:50},(o,t)=>({x:t*2,y:30+Math.cos(t/4)*25+Math.sin(t/2)*10}));return n.jsxs("div",{style:{padding:"20px"},children:[n.jsxs("div",{style:{marginBottom:"10px",display:"flex",gap:"10px",alignItems:"center"},children:[n.jsx("h3",{style:{margin:0},children:"Common Zoom (X and Y synchronized)"}),n.jsx("button",{onClick:c,style:{padding:"6px 12px",fontSize:"14px",cursor:"pointer",backgroundColor:"#f1f3f5",border:"1px solid #dee2e6",borderRadius:"4px"},children:"Reset Zoom"}),n.jsxs("div",{style:{fontSize:"14px",color:"#666"},children:["Range: X [",i.min.toFixed(1),", ",i.max.toFixed(1),"], Y [",s.min.toFixed(1),", ",s.max.toFixed(1),"]"]})]}),n.jsx("p",{style:{fontSize:"14px",color:"#666"},children:"Drag to select a region on any chart to zoom. Both X and Y axes are synchronized across all charts."}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"20px"},children:[n.jsxs(y,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:m},children:[n.jsxs(S,{sync:{key:"common-zoom",xViaScaleId:"x",yViaScaleId:"y"},onSpanSelect:l,children:[n.jsx(f,{}),n.jsx(u,{makeStyle:()=>({backgroundColor:"#4c6ef544"})})]}),n.jsx(b,{data:h,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]}),n.jsxs(y,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:80,left:80,right:20,top:20},scales:m},children:[n.jsxs(S,{sync:{key:"common-zoom",xViaScaleId:"x",yViaScaleId:"y"},onSpanSelect:l,children:[n.jsx(f,{}),n.jsx(u,{makeStyle:()=>({backgroundColor:"#51cf6644"})})]}),n.jsx(b,{data:p,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#51cf66",lineWidth:2}})]})]})]})}},v={render:()=>{const[i,r]=d.useState({min:0,max:100}),[s,x]=d.useState({min:0,max:100}),[l,c]=d.useState({min:-50,max:50}),m=a=>{if(a.completed){if(a.mode==="x"||a.mode==="box"){const e=a.x.scaled[0];e&&r({min:Math.min(e.from,e.to),max:Math.max(e.from,e.to)})}if(a.mode==="y"||a.mode==="box"){const e=a.y.scaled[0];e&&x({min:Math.min(e.from,e.to),max:Math.max(e.from,e.to)})}}},h=a=>{if(a.completed){if(a.mode==="x"||a.mode==="box"){const e=a.x.scaled[0];e&&r({min:Math.min(e.from,e.to),max:Math.max(e.from,e.to)})}if(a.mode==="y"||a.mode==="box"){const e=a.y.scaled[0];e&&c({min:Math.min(e.from,e.to),max:Math.max(e.from,e.to)})}}},p=()=>{r({min:0,max:100}),x({min:0,max:100}),c({min:-50,max:50})},o=[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:i.min,max:i.max},{id:"y1",axis:{position:"left",size:60},origin:"y",min:s.min,max:s.max}],t=[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:i.min,max:i.max},{id:"y2",axis:{position:"left",size:60},origin:"y",min:l.min,max:l.max}],R=Array.from({length:50},(a,e)=>({x:e*2,y:50+Math.sin(e/5)*30})),C=Array.from({length:50},(a,e)=>({x:e*2,y:Math.cos(e/4)*40}));return n.jsxs("div",{style:{padding:"20px"},children:[n.jsxs("div",{style:{marginBottom:"10px",display:"flex",gap:"10px",alignItems:"center"},children:[n.jsx("h3",{style:{margin:0},children:"X-Axis Only Synchronization"}),n.jsx("button",{onClick:p,style:{padding:"6px 12px",fontSize:"14px",cursor:"pointer",backgroundColor:"#f1f3f5",border:"1px solid #dee2e6",borderRadius:"4px"},children:"Reset Zoom"}),n.jsxs("div",{style:{fontSize:"14px",color:"#666"},children:["X: [",i.min.toFixed(1),", ",i.max.toFixed(1),"]"]})]}),n.jsx("p",{style:{fontSize:"14px",color:"#666"},children:"Drag horizontally to zoom X-axis on all charts. Drag vertically or box-select to zoom Y-axis independently per chart."}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"20px"},children:[n.jsxs("div",{children:[n.jsxs("div",{style:{fontSize:"12px",color:"#666",marginBottom:"5px"},children:["Chart 1: Y [",s.min.toFixed(1),", ",s.max.toFixed(1),"]"]}),n.jsxs(y,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:80,left:80,right:20,top:20},scales:o},children:[n.jsxs(S,{sync:{key:"x-axis-sync",xViaScaleId:"x"},onSpanSelect:m,children:[n.jsx(f,{}),n.jsx(u,{makeStyle:()=>({backgroundColor:"#ff6b6b44"})})]}),n.jsx(b,{data:R,xScaleId:"x",yScaleId:"y1",style:{strokeStyle:"#ff6b6b",lineWidth:2}})]})]}),n.jsxs("div",{children:[n.jsxs("div",{style:{fontSize:"12px",color:"#666",marginBottom:"5px"},children:["Chart 2: Y [",l.min.toFixed(1),", ",l.max.toFixed(1),"]"]}),n.jsxs(y,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:80,left:80,right:20,top:20},scales:t},children:[n.jsxs(S,{sync:{key:"x-axis-sync",xViaScaleId:"x"},onSpanSelect:h,children:[n.jsx(f,{}),n.jsx(u,{makeStyle:()=>({backgroundColor:"#7950f244"})})]}),n.jsx(b,{data:C,xScaleId:"x",yScaleId:"y2",style:{strokeStyle:"#7950f2",lineWidth:2}})]})]})]})]})}},I={render:()=>{const[i,r]=d.useState({min:0,max:100}),[s,x]=d.useState({min:0,max:100}),[l,c]=d.useState({min:0,max:50}),[m,h]=d.useState({min:-1,max:1}),p=a=>e=>{if(e.completed){if(e.mode==="x"||e.mode==="box"){const g=e.x.scaled[0];g&&r({min:Math.min(g.from,g.to),max:Math.max(g.from,g.to)})}if(e.mode==="y"||e.mode==="box"){const g=e.y.scaled[0];g&&a({min:Math.min(g.from,g.to),max:Math.max(g.from,g.to)})}}},o=()=>{r({min:0,max:100}),x({min:0,max:100}),c({min:0,max:50}),h({min:-1,max:1})},t=Array.from({length:50},(a,e)=>({x:e*2,y:50+Math.sin(e/5)*30})),R=Array.from({length:20},(a,e)=>({x:e*5,y:15+Math.random()*30})),C=Array.from({length:100},(a,e)=>({x:e,y:[0,Math.sin(e/10)*.8]}));return n.jsxs("div",{style:{padding:"20px"},children:[n.jsxs("div",{style:{marginBottom:"10px",display:"flex",gap:"10px",alignItems:"center"},children:[n.jsx("h3",{style:{margin:0},children:"Three Charts - X-Axis Synchronized"}),n.jsx("button",{onClick:o,style:{padding:"6px 12px",fontSize:"14px",cursor:"pointer",backgroundColor:"#f1f3f5",border:"1px solid #dee2e6",borderRadius:"4px"},children:"Reset Zoom"}),n.jsxs("div",{style:{fontSize:"14px",color:"#666"},children:["X: [",i.min.toFixed(1),", ",i.max.toFixed(1),"]"]})]}),n.jsx("p",{style:{fontSize:"14px",color:"#666"},children:"Three different chart types sharing the same X-axis. Each chart can have independent Y-axis zoom."}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"20px"},children:[n.jsxs("div",{children:[n.jsxs("div",{style:{fontSize:"13px",fontWeight:"500",marginBottom:"5px"},children:["Line Chart - Y: [",s.min.toFixed(1),","," ",s.max.toFixed(1),"]"]}),n.jsxs(y,{style:{width:"100%",height:"250px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:i.min,max:i.max},{id:"y1",axis:{position:"left",size:60},origin:"y",min:s.min,max:s.max}]},children:[n.jsxs(S,{sync:{key:"three-charts-x-sync",xViaScaleId:"x",yViaScaleId:"y1"},onSpanSelect:p(x),children:[n.jsx(f,{}),n.jsx(u,{makeStyle:()=>({backgroundColor:"#4c6ef544"})})]}),n.jsx(b,{data:t,xScaleId:"x",yScaleId:"y1",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]})]}),n.jsxs("div",{children:[n.jsxs("div",{style:{fontSize:"13px",fontWeight:"500",marginBottom:"5px"},children:["Bar Chart - Y: [",l.min.toFixed(1),", ",l.max.toFixed(1),"]"]}),n.jsxs(y,{style:{width:"100%",height:"250px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:i.min,max:i.max},{id:"y2",axis:{position:"left",size:60},origin:"y",min:l.min,max:l.max}]},children:[n.jsxs(S,{sync:{key:"three-charts-x-sync",xViaScaleId:"x",yViaScaleId:"y2"},onSpanSelect:p(c),children:[n.jsx(f,{}),n.jsx(u,{makeStyle:()=>({backgroundColor:"#f59f0044"})})]}),n.jsx(A,{data:R,xScaleId:"x",yScaleId:"y2",xPositionOffset:0,barWidth:3,style:{fillStyle:"#f59f00",strokeStyle:"#d68500",lineWidth:1}})]})]}),n.jsxs("div",{children:[n.jsxs("div",{style:{fontSize:"13px",fontWeight:"500",marginBottom:"5px"},children:["Area Chart - Y: [",m.min.toFixed(2),","," ",m.max.toFixed(2),"]"]}),n.jsxs(y,{style:{width:"100%",height:"250px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:i.min,max:i.max},{id:"y3",axis:{position:"left",size:60},origin:"y",min:m.min,max:m.max}]},children:[n.jsxs(S,{sync:{key:"three-charts-x-sync",xViaScaleId:"x",yViaScaleId:"y3"},onSpanSelect:p(h),children:[n.jsx(f,{}),n.jsx(u,{makeStyle:()=>({backgroundColor:"#51cf6644"})})]}),n.jsx(M,{data:C,xScaleId:"x",yScaleId:"y3",style:{fillStyle:"#51cf6666",strokeStyle:"#51cf66",lineWidth:2}})]})]})]})]})}},z={render:()=>{const[i,r]=d.useState({min:0,max:100}),[s,x]=d.useState({min:0,max:100}),l=o=>{if(o.completed){if(o.mode==="x"||o.mode==="box"){const t=o.x.scaled[0];t&&r({min:Math.min(t.from,t.to),max:Math.max(t.from,t.to)})}if(o.mode==="y"||o.mode==="box"){const t=o.y.scaled[0];t&&x({min:Math.min(t.from,t.to),max:Math.max(t.from,t.to)})}}},c=()=>{r({min:0,max:100}),x({min:0,max:100})},m=[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:i.min,max:i.max},{id:"y",axis:{position:"left",size:60},origin:"y",min:s.min,max:s.max}],h=Array.from({length:50},(o,t)=>({x:t*2,y:50+Math.sin(t/5)*25+Math.random()*10})),p=Array.from({length:50},(o,t)=>({x:t*2,y:50+Math.sin(t/5)*25+10+Math.random()*10}));return n.jsxs("div",{style:{padding:"20px"},children:[n.jsxs("div",{style:{marginBottom:"10px",display:"flex",gap:"10px",alignItems:"center"},children:[n.jsx("h3",{style:{margin:0},children:"Side-by-Side Comparison"}),n.jsx("button",{onClick:c,style:{padding:"6px 12px",fontSize:"14px",cursor:"pointer",backgroundColor:"#f1f3f5",border:"1px solid #dee2e6",borderRadius:"4px"},children:"Reset Zoom"}),n.jsxs("div",{style:{fontSize:"14px",color:"#666"},children:["X: [",i.min.toFixed(1),", ",i.max.toFixed(1),"], Y: [",s.min.toFixed(1),", ",s.max.toFixed(1),"]"]})]}),n.jsx("p",{style:{fontSize:"14px",color:"#666"},children:"Compare two datasets side-by-side with synchronized zoom and crosshair."}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"13px",fontWeight:"500",marginBottom:"5px",color:"#4c6ef5"},children:"Dataset A"}),n.jsxs(y,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:m},children:[n.jsxs(S,{sync:{key:"side-by-side",xViaScaleId:"x",yViaScaleId:"y"},onSpanSelect:l,children:[n.jsx(f,{}),n.jsx(u,{makeStyle:()=>({backgroundColor:"#4c6ef544"})})]}),n.jsx(b,{data:h,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]})]}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"13px",fontWeight:"500",marginBottom:"5px",color:"#f76707"},children:"Dataset B"}),n.jsxs(y,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:m},children:[n.jsxs(S,{sync:{key:"side-by-side",xViaScaleId:"x",yViaScaleId:"y"},onSpanSelect:l,children:[n.jsx(f,{}),n.jsx(u,{makeStyle:()=>({backgroundColor:"#f7670744"})})]}),n.jsx(b,{data:p,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#f76707",lineWidth:2}})]})]})]})]})}},j={render:()=>{const i=Date.parse("2025-12-01T00:00:00Z"),r=1e3*60*60*24,[s,x]=d.useState({min:i-r*30,max:i}),[l,c]=d.useState({min:0,max:100}),[m,h]=d.useState({min:0,max:1e3}),p=a=>{if(a.completed){if(a.mode==="x"||a.mode==="box"){const e=a.x.scaled[0];e&&x({min:Math.min(e.from,e.to),max:Math.max(e.from,e.to)})}if(a.mode==="y"||a.mode==="box"){const e=a.y.scaled[0];e&&c({min:Math.min(e.from,e.to),max:Math.max(e.from,e.to)})}}},o=a=>{if(a.completed){if(a.mode==="x"||a.mode==="box"){const e=a.x.scaled[0];e&&x({min:Math.min(e.from,e.to),max:Math.max(e.from,e.to)})}if(a.mode==="y"||a.mode==="box"){const e=a.y.scaled[0];e&&h({min:Math.min(e.from,e.to),max:Math.max(e.from,e.to)})}}},t=()=>{x({min:i-r*30,max:i}),c({min:0,max:100}),h({min:0,max:1e3})},R=Array.from({length:100},(a,e)=>({x:i-r*30+e*r*30/100,y:50+Math.sin(e/10)*20+Math.random()*10})),C=Array.from({length:100},(a,e)=>({x:i-r*30+e*r*30/100,y:[0,500+Math.cos(e/15)*200+Math.random()*100]}));return n.jsxs("div",{style:{padding:"20px"},children:[n.jsxs("div",{style:{marginBottom:"10px",display:"flex",gap:"10px",alignItems:"center"},children:[n.jsx("h3",{style:{margin:0},children:"Time Series - X-Axis Synchronized"}),n.jsx("button",{onClick:t,style:{padding:"6px 12px",fontSize:"14px",cursor:"pointer",backgroundColor:"#f1f3f5",border:"1px solid #dee2e6",borderRadius:"4px"},children:"Reset Zoom"})]}),n.jsx("p",{style:{fontSize:"14px",color:"#666"},children:"Time series data with synchronized time axis. Temperature and sales metrics can be zoomed independently on Y-axis."}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"20px"},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"13px",fontWeight:"500",marginBottom:"5px"},children:"Temperature (°C)"}),n.jsxs(y,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:[{id:"time",axis:{position:"bottom",size:80},origin:"x",min:s.min,max:s.max},{id:"temp",axis:{position:"left",size:60},origin:"y",min:l.min,max:l.max}]},children:[n.jsxs(S,{sync:{key:"timeseries-x-sync",xViaScaleId:"time",yViaScaleId:"temp"},onSpanSelect:p,children:[n.jsx(f,{}),n.jsx(u,{makeStyle:()=>({backgroundColor:"#ff6b6b44"})})]}),n.jsx(b,{data:R,xScaleId:"time",yScaleId:"temp",style:{strokeStyle:"#ff6b6b",lineWidth:2}})]})]}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"13px",fontWeight:"500",marginBottom:"5px"},children:"Sales ($)"}),n.jsxs(y,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:[{id:"time",axis:{position:"bottom",size:80},origin:"x",min:s.min,max:s.max},{id:"sales",axis:{position:"left",size:60},origin:"y",min:m.min,max:m.max}]},children:[n.jsxs(S,{sync:{key:"timeseries-x-sync",xViaScaleId:"time",yViaScaleId:"sales"},onSpanSelect:o,children:[n.jsx(f,{}),n.jsx(u,{makeStyle:()=>({backgroundColor:"#51cf6644"})})]}),n.jsx(M,{data:C,xScaleId:"time",yScaleId:"sales",style:{fillStyle:"#51cf6666",strokeStyle:"#51cf66",lineWidth:2}})]})]})]})]})}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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

            <LinePlot data={data2} xScaleId="x" yScaleId="y" style={{
            strokeStyle: "#51cf66",
            lineWidth: 2
          }} />
          </CanPlot>
        </div>
      </div>;
  }
}`,...k.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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

              <LinePlot data={data2} xScaleId="x" yScaleId="y2" style={{
              strokeStyle: "#7950f2",
              lineWidth: 2
            }} />
            </CanPlot>
          </div>
        </div>
      </div>;
  }
}`,...v.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
      x: i * 5,
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

              <BarPlot data={barData} xScaleId="x" yScaleId="y2" xPositionOffset={0} barWidth={3} style={{
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
}`,...I.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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

              <LinePlot data={dataB} xScaleId="x" yScaleId="y" style={{
              strokeStyle: "#f76707",
              lineWidth: 2
            }} />
            </CanPlot>
          </div>
        </div>
      </div>;
  }
}`,...z.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};const _=["CommonZoom","XAxisOnlySync","ThreeChartsXAxisSync","SideBySideComparison","TimeSeriesXAxisSync"];export{k as CommonZoom,z as SideBySideComparison,I as ThreeChartsXAxisSync,j as TimeSeriesXAxisSync,v as XAxisOnlySync,_ as __namedExportsOrder,w as default};

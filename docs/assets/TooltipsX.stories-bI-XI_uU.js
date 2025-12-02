import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{v as W,e as B,C as x,f as y}from"./CanPlot-d0tERzCM.js";import{L as p}from"./LinePlot-B8NI4F9l.js";import{S as E}from"./ScatterPlot-BZ6U3h1n.js";import{B as v}from"./BarPlot-DzRJxM2Z.js";import{u as R,C as c}from"./ChartAreaInteractions-Bwbyioka.js";import{r as A}from"./iframe-DP0Kcass.js";import"./preload-helper-PPVm8Dsz.js";const h=({data:r,renderTooltip:i,xScaleId:e})=>{const[o,t]=A.useState(null);R("move",s=>{t(s)});const a=A.useMemo(()=>{if(!o)return null;const{frame:s,pointer:l}=o,d=l?.scaled[e];if(d===void 0)return null;const C=[];let P=d;for(const f of r){let k=null,j=1/0;for(const[F,z]of f.points.entries()){if(!W(s,z.x,e)||!W(s,z.y,f.yScaleId))continue;const T=Math.abs(z.x-d);T<j&&(j=T,k=F)}const w=f.points[k??-1];if(!w||B(s,j,e,"css")>30){C.push({seriesId:f.seriesId,y:null});continue}P=w.x,C.push({seriesId:f.seriesId,y:w.y})}return{frame:s,x:P,points:C}},[r,o,e]);return i(a)},U={component:x,parameters:{layout:"fullscreen"},tags:["autodocs"]},g={render:()=>{const r=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:10},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],i=[{x:1,y:30},{x:2,y:45},{x:3,y:60},{x:4,y:35},{x:5,y:70},{x:6,y:55},{x:7,y:80},{x:8,y:65}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(x,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:r},children:[n.jsx(p,{data:i,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:2}}),n.jsx(E,{data:i,xScaleId:"x",yScaleId:"y",style:{fillStyle:"#4c6ef5",strokeStyle:"#364fc7",lineWidth:2}}),n.jsx(c,{children:n.jsx(h,{xScaleId:"x",data:[{seriesId:"series1",yScaleId:"y",points:i}],renderTooltip:e=>{if(!e||e.points[0].y===null)return null;const o=y(e.frame,e.x,"x","css");return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"absolute",left:`${o}px`,top:e.frame.chartAreaCSS.y,height:e.frame.chartAreaCSS.height,width:"1px",backgroundColor:"rgba(0, 0, 0, 0.3)",pointerEvents:"none",zIndex:999}}),n.jsxs("div",{style:{position:"absolute",left:"50%",top:"10px",transform:"translateX(-50%)",backgroundColor:"rgba(0, 0, 0, 0.8)",color:"white",padding:"8px 12px",borderRadius:"4px",fontSize:"14px",pointerEvents:"none",whiteSpace:"nowrap",zIndex:1e3},children:["X: ",e.x.toFixed(1),", Y: ",e.points[0].y?.toFixed(1)]})]})}})})]})})}},m={render:()=>{const r=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:10},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],i=[{x:1,y:30},{x:2,y:45},{x:3,y:40},{x:4,y:55},{x:5,y:50},{x:6,y:65},{x:7,y:60},{x:8,y:70}],e=[{x:1,y:40},{x:2,y:35},{x:3,y:50},{x:4,y:45},{x:5,y:60},{x:6,y:55},{x:7,y:70},{x:8,y:65}],o=[{x:1,y:25},{x:2,y:50},{x:3,y:35},{x:4,y:60},{x:5,y:45},{x:6,y:70},{x:7,y:55},{x:8,y:80}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(x,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:r},children:[n.jsx(p,{data:i,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:2}}),n.jsx(p,{data:e,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#ff6b6b",lineWidth:2}}),n.jsx(p,{data:o,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#51cf66",lineWidth:2}}),n.jsx(c,{children:n.jsx(h,{xScaleId:"x",data:[{seriesId:"Revenue",yScaleId:"y",points:i},{seriesId:"Expenses",yScaleId:"y",points:e},{seriesId:"Profit",yScaleId:"y",points:o}],renderTooltip:t=>{if(!t)return null;const a=y(t.frame,t.x,"x","css");return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"absolute",left:`${a}px`,top:t.frame.chartAreaCSS.y,height:t.frame.chartAreaCSS.height,width:"1px",backgroundColor:"rgba(0, 0, 0, 0.3)",pointerEvents:"none",zIndex:999}}),n.jsxs("div",{style:{position:"absolute",transform:`translate(${a}px, 0)`,top:"10px",left:"10px",backgroundColor:"rgba(0, 0, 0, 0.9)",color:"white",padding:"12px 16px",borderRadius:"8px",fontSize:"13px",pointerEvents:"none",boxShadow:"0 4px 16px rgba(0,0,0,0.4)",zIndex:1e3},children:[n.jsxs("div",{style:{marginBottom:"8px",fontWeight:"bold"},children:["X: ",t.x.toFixed(1)]}),t.points.map((s,l)=>{const d=["#4c6ef5","#ff6b6b","#51cf66"];return n.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:l<t.points.length-1?"4px":"0"},children:[n.jsx("div",{style:{width:"12px",height:"12px",backgroundColor:d[l],marginRight:"8px",borderRadius:"2px"}}),s.seriesId,":"," ",s.y!==null?s.y.toFixed(1):"N/A"]},s.seriesId)})]})]})}})})]})})}},S={render:()=>{const r=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:8},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],i=[{x:1,y:45,label:"Jan"},{x:2,y:60,label:"Feb"},{x:3,y:55,label:"Mar"},{x:4,y:70,label:"Apr"},{x:5,y:65,label:"May"},{x:6,y:80,label:"Jun"}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(x,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:r},children:[n.jsx(v,{data:i,xScaleId:"x",yScaleId:"y",barWidth:.6,xPositionOffset:0,radius:4,style:{fillStyle:"#ff6b6b",strokeStyle:"#f03e3e",lineWidth:1}}),n.jsx(c,{children:n.jsx(h,{xScaleId:"x",data:[{seriesId:"sales",yScaleId:"y",points:i}],renderTooltip:e=>{if(!e||e.points[0].y===null)return null;const t=i.find(s=>s.x===e.x)?.label||"",a=y(e.frame,e.x,"x","css");return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"absolute",left:`${a}px`,top:e.frame.chartAreaCSS.y,height:e.frame.chartAreaCSS.height,width:"1px",backgroundColor:"rgba(240, 62, 62, 0.5)",pointerEvents:"none",zIndex:999}}),n.jsxs("div",{style:{position:"absolute",left:"50%",top:"10px",transform:"translateX(-50%)",backgroundColor:"rgba(240, 62, 62, 0.95)",color:"white",padding:"12px 16px",borderRadius:"6px",fontSize:"14px",pointerEvents:"none",boxShadow:"0 3px 12px rgba(0,0,0,0.3)",zIndex:1e3},children:[n.jsx("div",{style:{fontWeight:"bold",marginBottom:"4px"},children:t}),n.jsxs("div",{children:["Sales: $",e.points[0].y?.toFixed(0),"K"]})]})]})}})})]})})}},u={render:()=>{const r=new Date("2024-01-01T00:00:00Z"),i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:r.getTime(),max:r.getTime()+720*60*60*1e3},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:500}],e=Array.from({length:30},(o,t)=>({x:r.getTime()+t*24*60*60*1e3,y:200+Math.sin(t/5)*100+Math.random()*50}));return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(x,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsx(p,{data:e,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#20c997",lineWidth:2}}),n.jsx(c,{children:n.jsx(h,{xScaleId:"x",data:[{seriesId:"temperature",yScaleId:"y",points:e}],renderTooltip:o=>{if(!o||o.points[0].y===null)return null;const a=new Date(o.x).toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:"UTC"}),s=y(o.frame,o.x,"x","css");return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"absolute",left:`${s}px`,top:o.frame.chartAreaCSS.y,height:o.frame.chartAreaCSS.height,width:"1px",backgroundColor:"rgba(32, 201, 151, 0.5)",pointerEvents:"none",zIndex:999}}),n.jsxs("div",{style:{position:"absolute",left:"50%",top:"10px",transform:"translateX(-50%)",backgroundColor:"rgba(32, 201, 151, 0.95)",color:"white",padding:"10px 14px",borderRadius:"6px",fontSize:"13px",pointerEvents:"none",boxShadow:"0 2px 8px rgba(0,0,0,0.2)",zIndex:1e3},children:[n.jsx("div",{style:{fontWeight:"bold",marginBottom:"4px"},children:a}),n.jsxs("div",{children:["Value: ",o.points[0].y?.toFixed(1)]})]})]})}})})]})})}},b={render:()=>{const r=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:12},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],i=[{x:1,y:65},{x:2,y:72},{x:3,y:68},{x:4,y:80},{x:5,y:75},{x:6,y:85},{x:7,y:78},{x:8,y:90},{x:9,y:82},{x:10,y:88}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(x,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:r},children:[n.jsx(p,{data:i,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#7950f2",lineWidth:3}}),n.jsx(E,{data:i,xScaleId:"x",yScaleId:"y",style:{fillStyle:"#7950f2",strokeStyle:"#5f3dc4",lineWidth:2}}),n.jsx(c,{children:n.jsx(h,{xScaleId:"x",data:[{seriesId:"performance",yScaleId:"y",points:i}],renderTooltip:e=>{if(!e||e.points[0].y===null)return null;const o=e.points[0].y,t=(o||0)/100*100,a=y(e.frame,e.x,"x","css");return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"absolute",left:`${a}px`,top:e.frame.chartAreaCSS.y,height:e.frame.chartAreaCSS.height,width:"1px",backgroundColor:"rgba(121, 80, 242, 0.5)",pointerEvents:"none",zIndex:999}}),n.jsxs("div",{style:{position:"absolute",left:"50%",top:"10px",transform:"translateX(-50%)",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",padding:"16px 20px",borderRadius:"12px",fontSize:"14px",pointerEvents:"none",boxShadow:"0 8px 24px rgba(0,0,0,0.3)",border:"2px solid rgba(255,255,255,0.3)",zIndex:1e3},children:[n.jsx("div",{style:{fontSize:"24px",fontWeight:"bold",marginBottom:"4px"},children:o?.toFixed(0)}),n.jsxs("div",{style:{fontSize:"12px",opacity:.9},children:[t.toFixed(0),"% of target"]})]})]})}})})]})})}},I={render:()=>{const r=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:8},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],i=[{x:1,y:30},{x:2,y:45},{x:3,y:60},{x:4,y:35},{x:5,y:70},{x:6,y:55}],e=[{x:1,y:40},{x:2,y:35},{x:3,y:50},{x:4,y:45},{x:5,y:60},{x:6,y:65}],o=[{x:1,y:25},{x:2,y:55},{x:3,y:40},{x:4,y:50},{x:5,y:45},{x:6,y:70}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(x,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:r},children:[n.jsx(v,{data:i,xScaleId:"x",yScaleId:"y",barWidth:.25,xPositionOffset:-1,style:{fillStyle:"#4c6ef5",strokeStyle:"#364fc7",lineWidth:1}}),n.jsx(v,{data:e,xScaleId:"x",yScaleId:"y",barWidth:.25,xPositionOffset:0,style:{fillStyle:"#51cf66",strokeStyle:"#37b24d",lineWidth:1}}),n.jsx(v,{data:o,xScaleId:"x",yScaleId:"y",barWidth:.25,xPositionOffset:1,style:{fillStyle:"#ff6b6b",strokeStyle:"#f03e3e",lineWidth:1}}),n.jsx(c,{children:n.jsx(h,{xScaleId:"x",data:[{seriesId:"Q1",yScaleId:"y",points:i},{seriesId:"Q2",yScaleId:"y",points:e},{seriesId:"Q3",yScaleId:"y",points:o}],renderTooltip:t=>{if(!t)return null;const a=y(t.frame,t.x,"x","css");return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"absolute",left:`${a}px`,top:t.frame.chartAreaCSS.y,height:t.frame.chartAreaCSS.height,width:"1px",backgroundColor:"rgba(0, 0, 0, 0.2)",pointerEvents:"none",zIndex:999}}),n.jsxs("div",{style:{position:"absolute",left:"50%",top:"10px",transform:"translateX(-50%)",backgroundColor:"white",color:"#333",padding:"12px 16px",borderRadius:"8px",fontSize:"13px",pointerEvents:"none",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",border:"1px solid #e0e0e0",zIndex:1e3},children:[n.jsxs("div",{style:{marginBottom:"8px",fontWeight:"bold",color:"#000"},children:["Month ",t.x.toFixed(0)]}),t.points.map((s,l)=>{const d=["#4c6ef5","#51cf66","#ff6b6b"];return s.y===null?null:n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:l<t.points.length-1?"4px":"0",gap:"16px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[n.jsx("div",{style:{width:"12px",height:"12px",backgroundColor:d[l],marginRight:"8px",borderRadius:"2px"}}),s.seriesId]}),n.jsx("div",{style:{fontWeight:"bold"},children:s.y.toFixed(0)})]},s.seriesId)})]})]})}})})]})})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 10
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
    const data = [{
      x: 1,
      y: 30
    }, {
      x: 2,
      y: 45
    }, {
      x: 3,
      y: 60
    }, {
      x: 4,
      y: 35
    }, {
      x: 5,
      y: 70
    }, {
      x: 6,
      y: 55
    }, {
      x: 7,
      y: 80
    }, {
      x: 8,
      y: 65
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
          <LinePlot data={data} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#4c6ef5",
          lineWidth: 2
        }} />
          <ScatterPlot data={data} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#4c6ef5",
          strokeStyle: "#364fc7",
          lineWidth: 2
        }} />
          <ChartAreaInteractions>
            <TooltipsX xScaleId="x" data={[{
            seriesId: "series1",
            yScaleId: "y",
            points: data
          }]} renderTooltip={state => {
            if (!state || state.points[0].y === null) return null;
            const pos = valToPos(state.frame, state.x, "x", "css");
            return <>
                    <div style={{
                position: "absolute",
                left: \`\${pos}px\`,
                top: state.frame.chartAreaCSS.y,
                height: state.frame.chartAreaCSS.height,
                width: "1px",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                pointerEvents: "none",
                zIndex: 999
              }} />
                    <div style={{
                position: "absolute",
                left: "50%",
                top: "10px",
                transform: "translateX(-50%)",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                color: "white",
                padding: "8px 12px",
                borderRadius: "4px",
                fontSize: "14px",
                pointerEvents: "none",
                whiteSpace: "nowrap",
                zIndex: 1000
              }}>
                      X: {state.x.toFixed(1)}, Y: {state.points[0].y?.toFixed(1)}
                    </div>
                  </>;
          }} />
          </ChartAreaInteractions>
        </CanPlot>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 10
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
    const series1 = [{
      x: 1,
      y: 30
    }, {
      x: 2,
      y: 45
    }, {
      x: 3,
      y: 40
    }, {
      x: 4,
      y: 55
    }, {
      x: 5,
      y: 50
    }, {
      x: 6,
      y: 65
    }, {
      x: 7,
      y: 60
    }, {
      x: 8,
      y: 70
    }];
    const series2 = [{
      x: 1,
      y: 40
    }, {
      x: 2,
      y: 35
    }, {
      x: 3,
      y: 50
    }, {
      x: 4,
      y: 45
    }, {
      x: 5,
      y: 60
    }, {
      x: 6,
      y: 55
    }, {
      x: 7,
      y: 70
    }, {
      x: 8,
      y: 65
    }];
    const series3 = [{
      x: 1,
      y: 25
    }, {
      x: 2,
      y: 50
    }, {
      x: 3,
      y: 35
    }, {
      x: 4,
      y: 60
    }, {
      x: 5,
      y: 45
    }, {
      x: 6,
      y: 70
    }, {
      x: 7,
      y: 55
    }, {
      x: 8,
      y: 80
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
          <LinePlot data={series1} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#4c6ef5",
          lineWidth: 2
        }} />
          <LinePlot data={series2} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#ff6b6b",
          lineWidth: 2
        }} />
          <LinePlot data={series3} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#51cf66",
          lineWidth: 2
        }} />
          <ChartAreaInteractions>
            <TooltipsX xScaleId="x" data={[{
            seriesId: "Revenue",
            yScaleId: "y",
            points: series1
          }, {
            seriesId: "Expenses",
            yScaleId: "y",
            points: series2
          }, {
            seriesId: "Profit",
            yScaleId: "y",
            points: series3
          }]} renderTooltip={state => {
            if (!state) return null;
            const pos = valToPos(state.frame, state.x, "x", "css");
            return <>
                    <div style={{
                position: "absolute",
                left: \`\${pos}px\`,
                top: state.frame.chartAreaCSS.y,
                height: state.frame.chartAreaCSS.height,
                width: "1px",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                pointerEvents: "none",
                zIndex: 999
              }} />
                    <div style={{
                position: "absolute",
                transform: \`translate(\${pos}px, 0)\`,
                top: "10px",
                left: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                color: "white",
                padding: "12px 16px",
                borderRadius: "8px",
                fontSize: "13px",
                pointerEvents: "none",
                boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
                zIndex: 1000
              }}>
                      <div style={{
                  marginBottom: "8px",
                  fontWeight: "bold"
                }}>
                        X: {state.x.toFixed(1)}
                      </div>
                      {state.points.map((point, idx) => {
                  const colors = ["#4c6ef5", "#ff6b6b", "#51cf66"];
                  return <div key={point.seriesId} style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: idx < state.points.length - 1 ? "4px" : "0"
                  }}>
                            <div style={{
                      width: "12px",
                      height: "12px",
                      backgroundColor: colors[idx],
                      marginRight: "8px",
                      borderRadius: "2px"
                    }} />
                            {point.seriesId}:{" "}
                            {point.y !== null ? point.y.toFixed(1) : "N/A"}
                          </div>;
                })}
                    </div>
                  </>;
          }} />
          </ChartAreaInteractions>
        </CanPlot>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 8
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
    const data = [{
      x: 1,
      y: 45,
      label: "Jan"
    }, {
      x: 2,
      y: 60,
      label: "Feb"
    }, {
      x: 3,
      y: 55,
      label: "Mar"
    }, {
      x: 4,
      y: 70,
      label: "Apr"
    }, {
      x: 5,
      y: 65,
      label: "May"
    }, {
      x: 6,
      y: 80,
      label: "Jun"
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
          <BarPlot data={data} xScaleId="x" yScaleId="y" barWidth={0.6} xPositionOffset={0} radius={4} style={{
          fillStyle: "#ff6b6b",
          strokeStyle: "#f03e3e",
          lineWidth: 1
        }} />
          <ChartAreaInteractions>
            <TooltipsX xScaleId="x" data={[{
            seriesId: "sales",
            yScaleId: "y",
            points: data
          }]} renderTooltip={state => {
            if (!state || state.points[0].y === null) return null;
            const dataPoint = data.find(d => d.x === state.x);
            const label = dataPoint?.label || "";
            const pos = valToPos(state.frame, state.x, "x", "css");
            return <>
                    <div style={{
                position: "absolute",
                left: \`\${pos}px\`,
                top: state.frame.chartAreaCSS.y,
                height: state.frame.chartAreaCSS.height,
                width: "1px",
                backgroundColor: "rgba(240, 62, 62, 0.5)",
                pointerEvents: "none",
                zIndex: 999
              }} />
                    <div style={{
                position: "absolute",
                left: "50%",
                top: "10px",
                transform: "translateX(-50%)",
                backgroundColor: "rgba(240, 62, 62, 0.95)",
                color: "white",
                padding: "12px 16px",
                borderRadius: "6px",
                fontSize: "14px",
                pointerEvents: "none",
                boxShadow: "0 3px 12px rgba(0,0,0,0.3)",
                zIndex: 1000
              }}>
                      <div style={{
                  fontWeight: "bold",
                  marginBottom: "4px"
                }}>
                        {label}
                      </div>
                      <div>Sales: \${state.points[0].y?.toFixed(0)}K</div>
                    </div>
                  </>;
          }} />
          </ChartAreaInteractions>
        </CanPlot>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const now = new Date("2024-01-01T00:00:00Z");
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: now.getTime(),
      max: now.getTime() + 30 * 24 * 60 * 60 * 1000
    }, {
      id: "y",
      axis: {
        position: "left",
        size: 40
      },
      origin: "y",
      min: 0,
      max: 500
    }];
    const data = Array.from({
      length: 30
    }, (_, i) => ({
      x: now.getTime() + i * 24 * 60 * 60 * 1000,
      y: 200 + Math.sin(i / 5) * 100 + Math.random() * 50
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
          <LinePlot data={data} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#20c997",
          lineWidth: 2
        }} />
          <ChartAreaInteractions>
            <TooltipsX xScaleId="x" data={[{
            seriesId: "temperature",
            yScaleId: "y",
            points: data
          }]} renderTooltip={state => {
            if (!state || state.points[0].y === null) return null;
            const date = new Date(state.x);
            const formattedDate = date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              timeZone: "UTC"
            });
            const pos = valToPos(state.frame, state.x, "x", "css");
            return <>
                    <div style={{
                position: "absolute",
                left: \`\${pos}px\`,
                top: state.frame.chartAreaCSS.y,
                height: state.frame.chartAreaCSS.height,
                width: "1px",
                backgroundColor: "rgba(32, 201, 151, 0.5)",
                pointerEvents: "none",
                zIndex: 999
              }} />
                    <div style={{
                position: "absolute",
                left: "50%",
                top: "10px",
                transform: "translateX(-50%)",
                backgroundColor: "rgba(32, 201, 151, 0.95)",
                color: "white",
                padding: "10px 14px",
                borderRadius: "6px",
                fontSize: "13px",
                pointerEvents: "none",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                zIndex: 1000
              }}>
                      <div style={{
                  fontWeight: "bold",
                  marginBottom: "4px"
                }}>
                        {formattedDate}
                      </div>
                      <div>Value: {state.points[0].y?.toFixed(1)}</div>
                    </div>
                  </>;
          }} />
          </ChartAreaInteractions>
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
      max: 12
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
    const data = [{
      x: 1,
      y: 65
    }, {
      x: 2,
      y: 72
    }, {
      x: 3,
      y: 68
    }, {
      x: 4,
      y: 80
    }, {
      x: 5,
      y: 75
    }, {
      x: 6,
      y: 85
    }, {
      x: 7,
      y: 78
    }, {
      x: 8,
      y: 90
    }, {
      x: 9,
      y: 82
    }, {
      x: 10,
      y: 88
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
          <LinePlot data={data} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#7950f2",
          lineWidth: 3
        }} />
          <ScatterPlot data={data} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#7950f2",
          strokeStyle: "#5f3dc4",
          lineWidth: 2
        }} />
          <ChartAreaInteractions>
            <TooltipsX xScaleId="x" data={[{
            seriesId: "performance",
            yScaleId: "y",
            points: data
          }]} renderTooltip={state => {
            if (!state || state.points[0].y === null) return null;
            const value = state.points[0].y;
            const percentage = (value || 0) / 100 * 100;
            const pos = valToPos(state.frame, state.x, "x", "css");
            return <>
                    <div style={{
                position: "absolute",
                left: \`\${pos}px\`,
                top: state.frame.chartAreaCSS.y,
                height: state.frame.chartAreaCSS.height,
                width: "1px",
                backgroundColor: "rgba(121, 80, 242, 0.5)",
                pointerEvents: "none",
                zIndex: 999
              }} />
                    <div style={{
                position: "absolute",
                left: "50%",
                top: "10px",
                transform: "translateX(-50%)",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                padding: "16px 20px",
                borderRadius: "12px",
                fontSize: "14px",
                pointerEvents: "none",
                boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                border: "2px solid rgba(255,255,255,0.3)",
                zIndex: 1000
              }}>
                      <div style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "4px"
                }}>
                        {value?.toFixed(0)}
                      </div>
                      <div style={{
                  fontSize: "12px",
                  opacity: 0.9
                }}>
                        {percentage.toFixed(0)}% of target
                      </div>
                    </div>
                  </>;
          }} />
          </ChartAreaInteractions>
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
      max: 8
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
    const series1 = [{
      x: 1,
      y: 30
    }, {
      x: 2,
      y: 45
    }, {
      x: 3,
      y: 60
    }, {
      x: 4,
      y: 35
    }, {
      x: 5,
      y: 70
    }, {
      x: 6,
      y: 55
    }];
    const series2 = [{
      x: 1,
      y: 40
    }, {
      x: 2,
      y: 35
    }, {
      x: 3,
      y: 50
    }, {
      x: 4,
      y: 45
    }, {
      x: 5,
      y: 60
    }, {
      x: 6,
      y: 65
    }];
    const series3 = [{
      x: 1,
      y: 25
    }, {
      x: 2,
      y: 55
    }, {
      x: 3,
      y: 40
    }, {
      x: 4,
      y: 50
    }, {
      x: 5,
      y: 45
    }, {
      x: 6,
      y: 70
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
          <BarPlot data={series1} xScaleId="x" yScaleId="y" barWidth={0.25} xPositionOffset={-1} style={{
          fillStyle: "#4c6ef5",
          strokeStyle: "#364fc7",
          lineWidth: 1
        }} />
          <BarPlot data={series2} xScaleId="x" yScaleId="y" barWidth={0.25} xPositionOffset={0} style={{
          fillStyle: "#51cf66",
          strokeStyle: "#37b24d",
          lineWidth: 1
        }} />
          <BarPlot data={series3} xScaleId="x" yScaleId="y" barWidth={0.25} xPositionOffset={1} style={{
          fillStyle: "#ff6b6b",
          strokeStyle: "#f03e3e",
          lineWidth: 1
        }} />
          <ChartAreaInteractions>
            <TooltipsX xScaleId="x" data={[{
            seriesId: "Q1",
            yScaleId: "y",
            points: series1
          }, {
            seriesId: "Q2",
            yScaleId: "y",
            points: series2
          }, {
            seriesId: "Q3",
            yScaleId: "y",
            points: series3
          }]} renderTooltip={state => {
            if (!state) return null;
            const pos = valToPos(state.frame, state.x, "x", "css");
            return <>
                    <div style={{
                position: "absolute",
                left: \`\${pos}px\`,
                top: state.frame.chartAreaCSS.y,
                height: state.frame.chartAreaCSS.height,
                width: "1px",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                pointerEvents: "none",
                zIndex: 999
              }} />
                    <div style={{
                position: "absolute",
                left: "50%",
                top: "10px",
                transform: "translateX(-50%)",
                backgroundColor: "white",
                color: "#333",
                padding: "12px 16px",
                borderRadius: "8px",
                fontSize: "13px",
                pointerEvents: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                border: "1px solid #e0e0e0",
                zIndex: 1000
              }}>
                      <div style={{
                  marginBottom: "8px",
                  fontWeight: "bold",
                  color: "#000"
                }}>
                        Month {state.x.toFixed(0)}
                      </div>
                      {state.points.map((point, idx) => {
                  const colors = ["#4c6ef5", "#51cf66", "#ff6b6b"];
                  if (point.y === null) return null;
                  return <div key={point.seriesId} style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: idx < state.points.length - 1 ? "4px" : "0",
                    gap: "16px"
                  }}>
                            <div style={{
                      display: "flex",
                      alignItems: "center"
                    }}>
                              <div style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: colors[idx],
                        marginRight: "8px",
                        borderRadius: "2px"
                      }} />
                              {point.seriesId}
                            </div>
                            <div style={{
                      fontWeight: "bold"
                    }}>
                              {point.y.toFixed(0)}
                            </div>
                          </div>;
                })}
                    </div>
                  </>;
          }} />
          </ChartAreaInteractions>
        </CanPlot>
      </div>;
  }
}`,...I.parameters?.docs?.source}}};const Z=["BasicLineTooltip","MultiSeriesLinesTooltip","BarChartTooltip","TimeSeriesWithTooltip","CustomStyledTooltip","GroupedBarsTooltip"];export{S as BarChartTooltip,g as BasicLineTooltip,b as CustomStyledTooltip,I as GroupedBarsTooltip,m as MultiSeriesLinesTooltip,u as TimeSeriesWithTooltip,Z as __namedExportsOrder,U as default};

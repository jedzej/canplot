import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{g as E,v as F,h as W,C as g,i as x}from"./frameContext-Co5DpICG.js";import{S as u}from"./ScatterPlot-B-k84BnW.js";import{u as q,C as f}from"./ChartAreaInteractions-DhRCyT_F.js";import{r as R}from"./iframe-BgZoRfvH.js";import"./preload-helper-PPVm8Dsz.js";const S=({data:p,renderTooltip:l})=>{const[e,i]=R.useState(null);q("move",t=>{i(t)});const o=R.useMemo(()=>{if(!e)return null;const{frame:t,pointer:s}=e,r=[];for(const a of p){const c=s?.scaled[a.xScaleId],d=s?.scaled[a.yScaleId];if(c===void 0||d===void 0)continue;const y=E(t,a.xScaleId);if(!y)continue;const b=E(t,a.yScaleId);if(!b)continue;let m=null,j=1/0,Y=1/0;for(const[D,M]of a.points.entries()){const T=M.x??y.min,$=M.y??b.min;if(!F(t,T,a.xScaleId)||!F(t,$,a.yScaleId))continue;const A=Math.abs(T-c),k=Math.abs($-d);Math.pow(A,2)+Math.pow(k,2)<Math.pow(j,2)+Math.pow(Y,2)&&(j=A,Y=k,m=D)}const X=a.points[m??-1],B=W(t,j,a.xScaleId,"css")??1/0,G=W(t,Y,a.yScaleId,"css")??1/0;if(!X||B>30||G>30){r.push({seriesId:a.seriesId,y:null,x:null});continue}r.push({seriesId:a.seriesId,y:X.y,x:X.x})}return{frame:t,points:r}},[p,e]);return l(o)},N={component:g,parameters:{layout:"fullscreen"},tags:["autodocs"]},h=(p,l,e,i,o,t=0)=>{const s=[];for(let r=0;r<o;r++){const a=Math.sin(t+r*12.9898+78.233)*43758.5453,c=Math.sin(t+r*93.9898+12.345)*43758.5453,d=a-Math.floor(a),y=c-Math.floor(c),b=Math.sqrt(-2*Math.log(d))*Math.cos(2*Math.PI*y),m=Math.sqrt(-2*Math.log(d))*Math.sin(2*Math.PI*y);s.push({x:p+b*e,y:l+m*i})}return s},v={render:()=>{const p=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],l=h(50,50,15,15,100,42);return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(g,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:p},children:[n.jsx(u,{data:l,xScaleId:"x",yScaleId:"y",style:{fillStyle:"#4c6ef5",strokeStyle:"#364fc7",lineWidth:1}}),n.jsx(f,{children:n.jsx(S,{data:[{seriesId:"cloud1",xScaleId:"x",yScaleId:"y",points:l}],renderTooltip:e=>{const i=e?.points[0];if(!i||!e||i.x===null||i.y===null)return null;const o=i.x,t=i.y,s=x(e.frame,o,"x","css"),r=x(e.frame,t,"y","css");return s===null||r===null?null:n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"absolute",left:`${s}px`,top:e.frame.chartAreaCSS.y,height:e.frame.chartAreaCSS.height,width:"1px",backgroundColor:"rgba(76, 110, 245, 0.3)",pointerEvents:"none",zIndex:999}}),n.jsx("div",{style:{position:"absolute",left:e.frame.chartAreaCSS.x,top:`${r}px`,width:e.frame.chartAreaCSS.width,height:"1px",backgroundColor:"rgba(76, 110, 245, 0.3)",pointerEvents:"none",zIndex:999}}),n.jsxs("div",{style:{position:"absolute",left:`${s+10}px`,top:`${r-10}px`,transform:"translateY(-100%)",backgroundColor:"rgba(0, 0, 0, 0.9)",color:"white",padding:"8px 12px",borderRadius:"4px",fontSize:"13px",pointerEvents:"none",whiteSpace:"nowrap",zIndex:1e3},children:[n.jsxs("div",{children:["X: ",o?.toFixed(2)]}),n.jsxs("div",{children:["Y: ",t?.toFixed(2)]})]})]})}})})]})})}},I={render:()=>{const p=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],l=h(30,70,10,10,80,100),e=h(70,30,12,8,80,200),i=h(50,50,8,12,80,300);return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(g,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:p},children:[n.jsx(u,{data:l,xScaleId:"x",yScaleId:"y",style:{fillStyle:"#ff6b6b",strokeStyle:"#f03e3e",lineWidth:1}}),n.jsx(u,{data:e,xScaleId:"x",yScaleId:"y",style:{fillStyle:"#51cf66",strokeStyle:"#37b24d",lineWidth:1}}),n.jsx(u,{data:i,xScaleId:"x",yScaleId:"y",style:{fillStyle:"#4c6ef5",strokeStyle:"#364fc7",lineWidth:1}}),n.jsx(f,{children:n.jsx(S,{data:[{seriesId:"Group A",xScaleId:"x",yScaleId:"y",points:l},{seriesId:"Group B",xScaleId:"x",yScaleId:"y",points:e},{seriesId:"Group C",xScaleId:"x",yScaleId:"y",points:i}],renderTooltip:o=>{if(!o)return null;const t=o.points.find(d=>d.x!==null&&d.y!==null);if(!t||t.x===null||t.y===null)return null;const s=x(o.frame,t.x,"x","css"),r=x(o.frame,t.y,"y","css");if(s===null||r===null||s===null||r===null)return null;const a={"Group A":"#ff6b6b","Group B":"#51cf66","Group C":"#4c6ef5"},c=o.points.find(d=>d.x!==null&&d.y!==null)?.seriesId||"";return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"absolute",left:`${s}px`,top:o.frame.chartAreaCSS.y,height:o.frame.chartAreaCSS.height,width:"1px",backgroundColor:"rgba(0, 0, 0, 0.2)",pointerEvents:"none",zIndex:999}}),n.jsx("div",{style:{position:"absolute",left:o.frame.chartAreaCSS.x,top:`${r}px`,width:o.frame.chartAreaCSS.width,height:"1px",backgroundColor:"rgba(0, 0, 0, 0.2)",pointerEvents:"none",zIndex:999}}),n.jsxs("div",{style:{position:"absolute",left:`${s+10}px`,top:`${r-10}px`,transform:"translateY(-100%)",backgroundColor:"white",color:"#333",padding:"12px 16px",borderRadius:"8px",fontSize:"13px",pointerEvents:"none",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",border:"1px solid #e0e0e0",zIndex:1e3},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"6px"},children:[n.jsx("div",{style:{width:"12px",height:"12px",backgroundColor:a[c],marginRight:"8px",borderRadius:"50%"}}),n.jsx("strong",{children:c})]}),n.jsxs("div",{children:["X: ",t.x?.toFixed(2)]}),n.jsxs("div",{children:["Y: ",t.y?.toFixed(2)]})]})]})}})})]})})}},C={render:()=>{const p=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],l=Array.from({length:150},(e,i)=>{const o=Math.sin(i*12.9898+78.233)*43758.5453,t=Math.sin(i*93.9898+12.345)*43758.5453,s=o-Math.floor(o),r=t-Math.floor(t),a=Math.sqrt(-2*Math.log(s))*Math.cos(2*Math.PI*r),c=Math.sqrt(-2*Math.log(s))*Math.sin(2*Math.PI*r),d=50+a*20,y=d*.7+c*10;return{x:d,y}});return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(g,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:p},children:[n.jsx(u,{data:l,xScaleId:"x",yScaleId:"y",style:{fillStyle:"#20c997",strokeStyle:"#12b886",lineWidth:1}}),n.jsx(f,{children:n.jsx(S,{data:[{seriesId:"correlation",xScaleId:"x",yScaleId:"y",points:l}],renderTooltip:e=>{const i=e?.points[0];if(!i)return null;const o=x(e.frame,i.x,"x","css"),t=x(e.frame,i.y,"y","css");return o===null||t===null?null:n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"absolute",left:`${o}px`,top:`${t}px`,transform:"translate(-50%, -50%)",width:"20px",height:"20px",border:"2px solid rgba(32, 201, 151, 0.8)",borderRadius:"50%",pointerEvents:"none",zIndex:999}}),n.jsxs("div",{style:{position:"absolute",left:`${o+15}px`,top:`${t-15}px`,transform:"translateY(-100%)",backgroundColor:"rgba(32, 201, 151, 0.95)",color:"white",padding:"10px 14px",borderRadius:"6px",fontSize:"13px",pointerEvents:"none",boxShadow:"0 2px 8px rgba(0,0,0,0.2)",zIndex:1e3},children:[n.jsx("div",{style:{fontWeight:"bold",marginBottom:"4px"},children:"Data Point"}),n.jsxs("div",{children:["Variable X: ",i.x?.toFixed(2)]}),n.jsxs("div",{children:["Variable Y: ",i.y?.toFixed(2)]})]})]})}})})]})})}},P={render:()=>{const p=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:-50,max:50},{id:"y",axis:{position:"left",size:40},origin:"y",min:-50,max:50}],l=h(0,0,15,15,300,500);return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(g,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:p},children:[n.jsx(u,{data:l,xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(139, 92, 246, 0.6)",strokeStyle:"rgba(109, 40, 217, 0.8)",lineWidth:1}}),n.jsx(f,{children:n.jsx(S,{data:[{seriesId:"dense",xScaleId:"x",yScaleId:"y",points:l}],renderTooltip:e=>{const i=e?.points[0];if(!i)return null;const o=i.x,t=i.y,s=x(e.frame,o,"x","css"),r=x(e.frame,t,"y","css");if(s===null||r===null)return null;const a=Math.sqrt(Math.pow(o,2)+Math.pow(t,2));return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"absolute",left:`${s}px`,top:`${r}px`,transform:"translate(-50%, -50%)",width:"12px",height:"12px",backgroundColor:"rgba(139, 92, 246, 1)",border:"2px solid white",borderRadius:"50%",pointerEvents:"none",boxShadow:"0 0 8px rgba(139, 92, 246, 0.8)",zIndex:999}}),n.jsxs("div",{style:{position:"absolute",left:`${s+12}px`,top:`${r-12}px`,transform:"translateY(-100%)",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",padding:"12px 16px",borderRadius:"10px",fontSize:"13px",pointerEvents:"none",boxShadow:"0 4px 16px rgba(0,0,0,0.3)",border:"2px solid rgba(255,255,255,0.3)",zIndex:1e3},children:[n.jsx("div",{style:{fontWeight:"bold",marginBottom:"6px",fontSize:"14px"},children:"Point Details"}),n.jsxs("div",{children:["X: ",o?.toFixed(2)]}),n.jsxs("div",{children:["Y: ",t?.toFixed(2)]}),n.jsxs("div",{style:{marginTop:"4px",fontSize:"12px",opacity:.9},children:["Distance: ",a.toFixed(2)]})]})]})}})})]})})}},w={render:()=>{const p=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],l=h(40,50,15,12,100,1e3),e=h(60,50,15,12,100,2e3);return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(g,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:p},children:[n.jsx(u,{data:l,xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(250, 176, 5, 0.6)",strokeStyle:"rgba(245, 158, 11, 0.9)",lineWidth:1}}),n.jsx(u,{data:e,xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(236, 72, 153, 0.6)",strokeStyle:"rgba(219, 39, 119, 0.9)",lineWidth:1}}),n.jsx(f,{children:n.jsx(S,{data:[{seriesId:"Population A",xScaleId:"x",yScaleId:"y",points:l},{seriesId:"Population B",xScaleId:"x",yScaleId:"y",points:e}],renderTooltip:i=>{if(!i)return null;const o=i.points.find(d=>d.x!==null&&d.y!==null);if(!o||o.x===null||o.y===null)return null;const t=x(i.frame,o.x,"x","css"),s=x(i.frame,o.y,"y","css");if(t===null||s===null)return null;const r={"Population A":{bg:"rgba(250, 176, 5, 0.95)",border:"rgba(245, 158, 11, 1)"},"Population B":{bg:"rgba(236, 72, 153, 0.95)",border:"rgba(219, 39, 119, 1)"}},a=i.points.find(d=>d.x!==null&&d.y!==null)?.seriesId||"",c=r[a];return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"absolute",left:`${t}px`,top:`${s}px`,transform:"translate(-50%, -50%)",width:"16px",height:"16px",border:`3px solid ${c.border}`,borderRadius:"50%",pointerEvents:"none",boxShadow:`0 0 12px ${c.bg}`,zIndex:999}}),n.jsxs("div",{style:{position:"absolute",left:`${t+15}px`,top:`${s-15}px`,transform:"translateY(-100%)",backgroundColor:c.bg,color:"white",padding:"10px 14px",borderRadius:"8px",fontSize:"13px",pointerEvents:"none",boxShadow:"0 4px 12px rgba(0,0,0,0.25)",border:`2px solid ${c.border}`,zIndex:1e3},children:[n.jsx("div",{style:{fontWeight:"bold",marginBottom:"6px"},children:a}),n.jsxs("div",{children:["X: ",o.x.toFixed(2)]}),n.jsxs("div",{children:["Y: ",o.y.toFixed(2)]})]})]})}})})]})})}},z={render:()=>{const p=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],l=h(50,50,25,8,200,3e3);return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(g,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:p},children:[n.jsx(u,{data:l,xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(245, 101, 101, 0.5)",strokeStyle:"rgba(240, 62, 62, 0.8)",lineWidth:1}}),n.jsx(f,{children:n.jsx(S,{data:[{seriesId:"elliptical",xScaleId:"x",yScaleId:"y",points:l}],renderTooltip:e=>{const i=e?.points[0];if(!i)return null;const o=x(e.frame,i.x,"x","css"),t=x(e.frame,i.y,"y","css");return o===null||t===null?null:n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"absolute",left:`${o}px`,top:e.frame.chartAreaCSS.y,height:e.frame.chartAreaCSS.height,width:"1px",backgroundColor:"rgba(240, 62, 62, 0.4)",pointerEvents:"none",zIndex:999}}),n.jsx("div",{style:{position:"absolute",left:e.frame.chartAreaCSS.x,top:`${t}px`,width:e.frame.chartAreaCSS.width,height:"1px",backgroundColor:"rgba(240, 62, 62, 0.4)",pointerEvents:"none",zIndex:999}}),n.jsxs("div",{style:{position:"absolute",left:"50%",top:"10px",transform:"translateX(-50%)",backgroundColor:"rgba(240, 62, 62, 0.95)",color:"white",padding:"12px 16px",borderRadius:"8px",fontSize:"13px",pointerEvents:"none",boxShadow:"0 4px 12px rgba(0,0,0,0.25)",zIndex:1e3},children:[n.jsx("div",{style:{fontWeight:"bold",marginBottom:"6px"},children:"Selected Point"}),n.jsxs("div",{children:["X: ",i.x?.toFixed(2)]}),n.jsxs("div",{children:["Y: ",i.y?.toFixed(2)]})]})]})}})})]})})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    const data = generateCloudPoints(50, 50, 15, 15, 100, 42);
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
          <ScatterPlot data={data} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#4c6ef5",
          strokeStyle: "#364fc7",
          lineWidth: 1
        }} />
          <ChartAreaInteractions>
            <TooltipsXY data={[{
            seriesId: "cloud1",
            xScaleId: "x",
            yScaleId: "y",
            points: data
          }]} renderTooltip={state => {
            const point = state?.points[0];
            if (!point || !state || point.x === null || point.y === null) {
              return null;
            }
            const x = point.x;
            const y = point.y;
            const posX = valToPos(state.frame, x!, "x", "css");
            const posY = valToPos(state.frame, y!, "y", "css");
            if (posX === null || posY === null) return null;
            return <>
                    {/* Crosshair lines */}
                    <div style={{
                position: "absolute",
                left: \`\${posX}px\`,
                top: state.frame.chartAreaCSS.y,
                height: state.frame.chartAreaCSS.height,
                width: "1px",
                backgroundColor: "rgba(76, 110, 245, 0.3)",
                pointerEvents: "none",
                zIndex: 999
              }} />
                    <div style={{
                position: "absolute",
                left: state.frame.chartAreaCSS.x,
                top: \`\${posY}px\`,
                width: state.frame.chartAreaCSS.width,
                height: "1px",
                backgroundColor: "rgba(76, 110, 245, 0.3)",
                pointerEvents: "none",
                zIndex: 999
              }} />
                    {/* Tooltip */}
                    <div style={{
                position: "absolute",
                left: \`\${posX + 10}px\`,
                top: \`\${posY - 10}px\`,
                transform: "translateY(-100%)",
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                color: "white",
                padding: "8px 12px",
                borderRadius: "4px",
                fontSize: "13px",
                pointerEvents: "none",
                whiteSpace: "nowrap",
                zIndex: 1000
              }}>
                      <div>X: {x?.toFixed(2)}</div>
                      <div>Y: {y?.toFixed(2)}</div>
                    </div>
                  </>;
          }} />
          </ChartAreaInteractions>
        </CanPlot>
      </div>;
  }
}`,...v.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
    const cloud1 = generateCloudPoints(30, 70, 10, 10, 80, 100);
    const cloud2 = generateCloudPoints(70, 30, 12, 8, 80, 200);
    const cloud3 = generateCloudPoints(50, 50, 8, 12, 80, 300);
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
          <ScatterPlot data={cloud1} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#ff6b6b",
          strokeStyle: "#f03e3e",
          lineWidth: 1
        }} />
          <ScatterPlot data={cloud2} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#51cf66",
          strokeStyle: "#37b24d",
          lineWidth: 1
        }} />
          <ScatterPlot data={cloud3} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#4c6ef5",
          strokeStyle: "#364fc7",
          lineWidth: 1
        }} />
          <ChartAreaInteractions>
            <TooltipsXY data={[{
            seriesId: "Group A",
            xScaleId: "x",
            yScaleId: "y",
            points: cloud1
          }, {
            seriesId: "Group B",
            xScaleId: "x",
            yScaleId: "y",
            points: cloud2
          }, {
            seriesId: "Group C",
            xScaleId: "x",
            yScaleId: "y",
            points: cloud3
          }]} renderTooltip={state => {
            if (!state) return null;

            // Find the first non-null point
            const activePoint = state.points.find(p => p.x !== null && p.y !== null);
            if (!activePoint || activePoint.x === null || activePoint.y === null) return null;
            const posX = valToPos(state.frame, activePoint.x, "x", "css");
            const posY = valToPos(state.frame, activePoint.y, "y", "css");
            if (posX === null || posY === null) return null;
            if (posX === null || posY === null) return null;
            const colors: Record<string, string> = {
              "Group A": "#ff6b6b",
              "Group B": "#51cf66",
              "Group C": "#4c6ef5"
            };
            const activeSeriesId = state.points.find(p => p.x !== null && p.y !== null)?.seriesId || "";
            return <>
                    {/* Crosshair */}
                    <div style={{
                position: "absolute",
                left: \`\${posX}px\`,
                top: state.frame.chartAreaCSS.y,
                height: state.frame.chartAreaCSS.height,
                width: "1px",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                pointerEvents: "none",
                zIndex: 999
              }} />
                    <div style={{
                position: "absolute",
                left: state.frame.chartAreaCSS.x,
                top: \`\${posY}px\`,
                width: state.frame.chartAreaCSS.width,
                height: "1px",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                pointerEvents: "none",
                zIndex: 999
              }} />
                    {/* Tooltip */}
                    <div style={{
                position: "absolute",
                left: \`\${posX + 10}px\`,
                top: \`\${posY - 10}px\`,
                transform: "translateY(-100%)",
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
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "6px"
                }}>
                        <div style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: colors[activeSeriesId],
                    marginRight: "8px",
                    borderRadius: "50%"
                  }} />
                        <strong>{activeSeriesId}</strong>
                      </div>
                      <div>X: {activePoint.x?.toFixed(2)}</div>
                      <div>Y: {activePoint.y?.toFixed(2)}</div>
                    </div>
                  </>;
          }} />
          </ChartAreaInteractions>
        </CanPlot>
      </div>;
  }
}`,...I.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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

    // Generate correlated data
    const data = Array.from({
      length: 150
    }, (_, i) => {
      const random1 = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
      const random2 = Math.sin(i * 93.9898 + 12.345) * 43758.5453;
      const x1 = random1 - Math.floor(random1);
      const x2 = random2 - Math.floor(random2);
      const z1 = Math.sqrt(-2 * Math.log(x1)) * Math.cos(2 * Math.PI * x2);
      const z2 = Math.sqrt(-2 * Math.log(x1)) * Math.sin(2 * Math.PI * x2);
      const x = 50 + z1 * 20;
      const y = x * 0.7 + z2 * 10; // Positive correlation

      return {
        x,
        y
      };
    });
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
          <ScatterPlot data={data} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#20c997",
          strokeStyle: "#12b886",
          lineWidth: 1
        }} />
          <ChartAreaInteractions>
            <TooltipsXY data={[{
            seriesId: "correlation",
            xScaleId: "x",
            yScaleId: "y",
            points: data
          }]} renderTooltip={state => {
            const point = state?.points[0];
            if (!point) return null;
            const posX = valToPos(state.frame, point.x!, "x", "css");
            const posY = valToPos(state.frame, point.y!, "y", "css");
            if (posX === null || posY === null) return null;
            return <>
                    {/* Highlight circle around point */}
                    <div style={{
                position: "absolute",
                left: \`\${posX}px\`,
                top: \`\${posY}px\`,
                transform: "translate(-50%, -50%)",
                width: "20px",
                height: "20px",
                border: "2px solid rgba(32, 201, 151, 0.8)",
                borderRadius: "50%",
                pointerEvents: "none",
                zIndex: 999
              }} />
                    {/* Tooltip */}
                    <div style={{
                position: "absolute",
                left: \`\${posX + 15}px\`,
                top: \`\${posY - 15}px\`,
                transform: "translateY(-100%)",
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
                        Data Point
                      </div>
                      <div>Variable X: {point.x?.toFixed(2)}</div>
                      <div>Variable Y: {point.y?.toFixed(2)}</div>
                    </div>
                  </>;
          }} />
          </ChartAreaInteractions>
        </CanPlot>
      </div>;
  }
}`,...C.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: -50,
      max: 50
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
    const data = generateCloudPoints(0, 0, 15, 15, 300, 500);
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
          <ScatterPlot data={data} xScaleId="x" yScaleId="y" style={{
          fillStyle: "rgba(139, 92, 246, 0.6)",
          strokeStyle: "rgba(109, 40, 217, 0.8)",
          lineWidth: 1
        }} />
          <ChartAreaInteractions>
            <TooltipsXY data={[{
            seriesId: "dense",
            xScaleId: "x",
            yScaleId: "y",
            points: data
          }]} renderTooltip={state => {
            const point = state?.points[0];
            if (!point) return null;
            const x = point.x as number;
            const y = point.y as number;
            const posX = valToPos(state.frame, x, "x", "css");
            const posY = valToPos(state.frame, y, "y", "css");
            if (posX === null || posY === null) return null;

            // Calculate distance from origin
            const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
            return <>
                    {/* Highlight point */}
                    <div style={{
                position: "absolute",
                left: \`\${posX}px\`,
                top: \`\${posY}px\`,
                transform: "translate(-50%, -50%)",
                width: "12px",
                height: "12px",
                backgroundColor: "rgba(139, 92, 246, 1)",
                border: "2px solid white",
                borderRadius: "50%",
                pointerEvents: "none",
                boxShadow: "0 0 8px rgba(139, 92, 246, 0.8)",
                zIndex: 999
              }} />
                    {/* Tooltip */}
                    <div style={{
                position: "absolute",
                left: \`\${posX + 12}px\`,
                top: \`\${posY - 12}px\`,
                transform: "translateY(-100%)",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                padding: "12px 16px",
                borderRadius: "10px",
                fontSize: "13px",
                pointerEvents: "none",
                boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                border: "2px solid rgba(255,255,255,0.3)",
                zIndex: 1000
              }}>
                      <div style={{
                  fontWeight: "bold",
                  marginBottom: "6px",
                  fontSize: "14px"
                }}>
                        Point Details
                      </div>
                      <div>X: {x?.toFixed(2)}</div>
                      <div>Y: {y?.toFixed(2)}</div>
                      <div style={{
                  marginTop: "4px",
                  fontSize: "12px",
                  opacity: 0.9
                }}>
                        Distance: {distance.toFixed(2)}
                      </div>
                    </div>
                  </>;
          }} />
          </ChartAreaInteractions>
        </CanPlot>
      </div>;
  }
}`,...P.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
    const cloud1 = generateCloudPoints(40, 50, 15, 12, 100, 1000);
    const cloud2 = generateCloudPoints(60, 50, 15, 12, 100, 2000);
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
          <ScatterPlot data={cloud1} xScaleId="x" yScaleId="y" style={{
          fillStyle: "rgba(250, 176, 5, 0.6)",
          strokeStyle: "rgba(245, 158, 11, 0.9)",
          lineWidth: 1
        }} />
          <ScatterPlot data={cloud2} xScaleId="x" yScaleId="y" style={{
          fillStyle: "rgba(236, 72, 153, 0.6)",
          strokeStyle: "rgba(219, 39, 119, 0.9)",
          lineWidth: 1
        }} />
          <ChartAreaInteractions>
            <TooltipsXY data={[{
            seriesId: "Population A",
            xScaleId: "x",
            yScaleId: "y",
            points: cloud1
          }, {
            seriesId: "Population B",
            xScaleId: "x",
            yScaleId: "y",
            points: cloud2
          }]} renderTooltip={state => {
            if (!state) return null;
            const activePoint = state.points.find(p => p.x !== null && p.y !== null);
            if (!activePoint || activePoint.x === null || activePoint.y === null) return null;
            const posX = valToPos(state.frame, activePoint.x, "x", "css");
            const posY = valToPos(state.frame, activePoint.y, "y", "css");
            if (posX === null || posY === null) return null;
            const colors: Record<string, {
              bg: string;
              border: string;
            }> = {
              "Population A": {
                bg: "rgba(250, 176, 5, 0.95)",
                border: "rgba(245, 158, 11, 1)"
              },
              "Population B": {
                bg: "rgba(236, 72, 153, 0.95)",
                border: "rgba(219, 39, 119, 1)"
              }
            };
            const activeSeriesId = state.points.find(p => p.x !== null && p.y !== null)?.seriesId || "";
            const color = colors[activeSeriesId];
            return <>
                    {/* Highlight point */}
                    <div style={{
                position: "absolute",
                left: \`\${posX}px\`,
                top: \`\${posY}px\`,
                transform: "translate(-50%, -50%)",
                width: "16px",
                height: "16px",
                border: \`3px solid \${color.border}\`,
                borderRadius: "50%",
                pointerEvents: "none",
                boxShadow: \`0 0 12px \${color.bg}\`,
                zIndex: 999
              }} />
                    {/* Tooltip */}
                    <div style={{
                position: "absolute",
                left: \`\${posX + 15}px\`,
                top: \`\${posY - 15}px\`,
                transform: "translateY(-100%)",
                backgroundColor: color.bg,
                color: "white",
                padding: "10px 14px",
                borderRadius: "8px",
                fontSize: "13px",
                pointerEvents: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                border: \`2px solid \${color.border}\`,
                zIndex: 1000
              }}>
                      <div style={{
                  fontWeight: "bold",
                  marginBottom: "6px"
                }}>
                        {activeSeriesId}
                      </div>
                      <div>X: {activePoint.x.toFixed(2)}</div>
                      <div>Y: {activePoint.y.toFixed(2)}</div>
                    </div>
                  </>;
          }} />
          </ChartAreaInteractions>
        </CanPlot>
      </div>;
  }
}`,...w.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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

    // Generate elliptical cloud (wider in X than Y)
    const data = generateCloudPoints(50, 50, 25, 8, 200, 3000);
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
          <ScatterPlot data={data} xScaleId="x" yScaleId="y" style={{
          fillStyle: "rgba(245, 101, 101, 0.5)",
          strokeStyle: "rgba(240, 62, 62, 0.8)",
          lineWidth: 1
        }} />
          <ChartAreaInteractions>
            <TooltipsXY data={[{
            seriesId: "elliptical",
            xScaleId: "x",
            yScaleId: "y",
            points: data
          }]} renderTooltip={state => {
            const point = state?.points[0];
            if (!point) return null;
            const posX = valToPos(state.frame, point.x!, "x", "css");
            const posY = valToPos(state.frame, point.y!, "y", "css");
            if (posX === null || posY === null) return null;
            return <>
                    {/* Crosshair */}
                    <div style={{
                position: "absolute",
                left: \`\${posX}px\`,
                top: state.frame.chartAreaCSS.y,
                height: state.frame.chartAreaCSS.height,
                width: "1px",
                backgroundColor: "rgba(240, 62, 62, 0.4)",
                pointerEvents: "none",
                zIndex: 999
              }} />
                    <div style={{
                position: "absolute",
                left: state.frame.chartAreaCSS.x,
                top: \`\${posY}px\`,
                width: state.frame.chartAreaCSS.width,
                height: "1px",
                backgroundColor: "rgba(240, 62, 62, 0.4)",
                pointerEvents: "none",
                zIndex: 999
              }} />
                    {/* Tooltip */}
                    <div style={{
                position: "absolute",
                left: "50%",
                top: "10px",
                transform: "translateX(-50%)",
                backgroundColor: "rgba(240, 62, 62, 0.95)",
                color: "white",
                padding: "12px 16px",
                borderRadius: "8px",
                fontSize: "13px",
                pointerEvents: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                zIndex: 1000
              }}>
                      <div style={{
                  fontWeight: "bold",
                  marginBottom: "6px"
                }}>
                        Selected Point
                      </div>
                      <div>X: {point.x?.toFixed(2)}</div>
                      <div>Y: {point.y?.toFixed(2)}</div>
                    </div>
                  </>;
          }} />
          </ChartAreaInteractions>
        </CanPlot>
      </div>;
  }
}`,...z.parameters?.docs?.source}}};const Q=["BasicCloudTooltip","MultipleCloudsSeparate","CorrelationCloudTooltip","DenseCloudTooltip","OverlappingCloudsTooltip","EllipticalCloudTooltip"];export{v as BasicCloudTooltip,C as CorrelationCloudTooltip,P as DenseCloudTooltip,z as EllipticalCloudTooltip,I as MultipleCloudsSeparate,w as OverlappingCloudsTooltip,Q as __namedExportsOrder,N as default};

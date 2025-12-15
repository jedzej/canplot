import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{v as X,f as F,C as c,g,u as M}from"./frameContext-DwsuiCxB.js";import{L as f}from"./LinePlot-DtpNk1o-.js";import{S as B}from"./ScatterPlot-swk4qHws.js";import{B as w}from"./BarPlot-BSGYDgzS.js";import{u as R,C as y}from"./ChartAreaInteractions-P2qOE4Ad.js";import{r as z}from"./iframe-Dw0KNOgM.js";import{X as L,m as $}from"./tickUtils-B_fFq6IZ.js";import{C as D}from"./CrossHair-tzW4tLKs.js";import"./SelectBox-YouOkBzu.js";import"./AxisOverlay-BKpq4mM9.js";import"./preload-helper-PPVm8Dsz.js";const m=({data:s,renderTooltip:o,xScaleId:e})=>{const[t,i]=z.useState(null);R("move",a=>{i(a)});const l=z.useMemo(()=>{if(!t)return null;const{frame:a,pointer:d}=t,r=d?.scaled[e];if(r===void 0)return null;const x=[];let h=r;for(const p of s){let u=null,P=1/0;for(const[E,W]of p.points.entries()){if(!X(a,W.x,e)||!X(a,W.y,p.yScaleId))continue;const A=Math.abs(W.x-r);A<P&&(P=A,u=E)}const T=p.points[u??-1];if(!T||F(a,P,e,"css")>30){x.push({seriesId:p.seriesId,y:null});continue}h=T.x,x.push({seriesId:p.seriesId,y:T.y})}return{frame:a,x:h,points:x}},[s,t,e]);return o(l)},en={component:c,parameters:{layout:"fullscreen"},tags:["autodocs"]},S={render:()=>{const s=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:10},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],o=[{x:1,y:30},{x:2,y:45},{x:3,y:60},{x:4,y:35},{x:5,y:70},{x:6,y:55},{x:7,y:80},{x:8,y:65}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(c,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:s},children:[n.jsx(f,{data:o,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:2}}),n.jsx(B,{data:o,xScaleId:"x",yScaleId:"y",style:{fillStyle:"#4c6ef5",strokeStyle:"#364fc7",lineWidth:2}}),n.jsx(y,{children:n.jsx(m,{xScaleId:"x",data:[{seriesId:"series1",yScaleId:"y",points:o}],renderTooltip:e=>{if(!e||e.points[0].y===null)return null;const t=g(e.frame,e.x,"x","css");return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"absolute",left:`${t}px`,top:e.frame.chartAreaCSS.y,height:e.frame.chartAreaCSS.height,width:"1px",backgroundColor:"rgba(0, 0, 0, 0.3)",pointerEvents:"none",zIndex:999}}),n.jsxs("div",{style:{position:"absolute",left:"50%",top:"10px",transform:"translateX(-50%)",backgroundColor:"rgba(0, 0, 0, 0.8)",color:"white",padding:"8px 12px",borderRadius:"4px",fontSize:"14px",pointerEvents:"none",whiteSpace:"nowrap",zIndex:1e3},children:["X: ",e.x.toFixed(1),", Y:"," ",e.points[0].y?.toFixed(1)]})]})}})})]})})}},b={render:()=>{const s=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:10},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],o=[{x:1,y:30},{x:2,y:45},{x:3,y:40},{x:4,y:55},{x:5,y:50},{x:6,y:65},{x:7,y:60},{x:8,y:70}],e=[{x:1,y:40},{x:2,y:35},{x:3,y:50},{x:4,y:45},{x:5,y:60},{x:6,y:55},{x:7,y:70},{x:8,y:65}],t=[{x:1,y:25},{x:2,y:50},{x:3,y:35},{x:4,y:60},{x:5,y:45},{x:6,y:70},{x:7,y:55},{x:8,y:80}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(c,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:s},children:[n.jsx(f,{data:o,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:2}}),n.jsx(f,{data:e,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#ff6b6b",lineWidth:2}}),n.jsx(f,{data:t,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#51cf66",lineWidth:2}}),n.jsx(y,{children:n.jsx(m,{xScaleId:"x",data:[{seriesId:"Revenue",yScaleId:"y",points:o},{seriesId:"Expenses",yScaleId:"y",points:e},{seriesId:"Profit",yScaleId:"y",points:t}],renderTooltip:i=>{if(!i)return null;const l=g(i.frame,i.x,"x","css");return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"absolute",left:`${l}px`,top:i.frame.chartAreaCSS.y,height:i.frame.chartAreaCSS.height,width:"1px",backgroundColor:"rgba(0, 0, 0, 0.3)",pointerEvents:"none",zIndex:999}}),n.jsxs("div",{style:{position:"absolute",transform:`translate(${l}px, 0)`,top:"10px",left:"10px",backgroundColor:"rgba(0, 0, 0, 0.9)",color:"white",padding:"12px 16px",borderRadius:"8px",fontSize:"13px",pointerEvents:"none",boxShadow:"0 4px 16px rgba(0,0,0,0.4)",zIndex:1e3},children:[n.jsxs("div",{style:{marginBottom:"8px",fontWeight:"bold"},children:["X: ",i.x.toFixed(1)]}),i.points.map((a,d)=>{const r=["#4c6ef5","#ff6b6b","#51cf66"];return n.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:d<i.points.length-1?"4px":"0"},children:[n.jsx("div",{style:{width:"12px",height:"12px",backgroundColor:r[d],marginRight:"8px",borderRadius:"2px"}}),a.seriesId,":"," ",a.y!==null?a.y.toFixed(1):"N/A"]},a.seriesId)})]})]})}})})]})})}},v={render:()=>{const s=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:8},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],o=[{x:1,y:45,label:"Jan"},{x:2,y:60,label:"Feb"},{x:3,y:55,label:"Mar"},{x:4,y:70,label:"Apr"},{x:5,y:65,label:"May"},{x:6,y:80,label:"Jun"}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(c,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:s},children:[n.jsx(w,{data:o,xScaleId:"x",yScaleId:"y",barWidth:.6,xPositionOffset:0,radius:4,style:{fillStyle:"#ff6b6b",strokeStyle:"#f03e3e",lineWidth:1}}),n.jsx(y,{children:n.jsx(m,{xScaleId:"x",data:[{seriesId:"sales",yScaleId:"y",points:o}],renderTooltip:e=>{if(!e||e.points[0].y===null)return null;const i=o.find(a=>a.x===e.x)?.label||"",l=g(e.frame,e.x,"x","css");return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"absolute",left:`${l}px`,top:e.frame.chartAreaCSS.y,height:e.frame.chartAreaCSS.height,width:"1px",backgroundColor:"rgba(240, 62, 62, 0.5)",pointerEvents:"none",zIndex:999}}),n.jsxs("div",{style:{position:"absolute",left:"50%",top:"10px",transform:"translateX(-50%)",backgroundColor:"rgba(240, 62, 62, 0.95)",color:"white",padding:"12px 16px",borderRadius:"6px",fontSize:"14px",pointerEvents:"none",boxShadow:"0 3px 12px rgba(0,0,0,0.3)",zIndex:1e3},children:[n.jsx("div",{style:{fontWeight:"bold",marginBottom:"4px"},children:i}),n.jsxs("div",{children:["Sales: $",e.points[0].y?.toFixed(0),"K"]})]})]})}})})]})})}},I={render:()=>{const s=new Date("2024-01-01T00:00:00Z"),o=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:s.getTime(),max:s.getTime()+720*60*60*1e3},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:500}],e=Array.from({length:30},(t,i)=>({x:s.getTime()+i*24*60*60*1e3,y:200+Math.sin(i/5)*100+Math.random()*50}));return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(c,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:o},children:[n.jsx(f,{data:e,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#20c997",lineWidth:2}}),n.jsx(y,{children:n.jsx(m,{xScaleId:"x",data:[{seriesId:"temperature",yScaleId:"y",points:e}],renderTooltip:t=>{if(!t||t.points[0].y===null)return null;const l=new Date(t.x).toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:"UTC"}),a=g(t.frame,t.x,"x","css");return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"absolute",left:`${a}px`,top:t.frame.chartAreaCSS.y,height:t.frame.chartAreaCSS.height,width:"1px",backgroundColor:"rgba(32, 201, 151, 0.5)",pointerEvents:"none",zIndex:999}}),n.jsxs("div",{style:{position:"absolute",left:"50%",top:"10px",transform:"translateX(-50%)",backgroundColor:"rgba(32, 201, 151, 0.95)",color:"white",padding:"10px 14px",borderRadius:"6px",fontSize:"13px",pointerEvents:"none",boxShadow:"0 2px 8px rgba(0,0,0,0.2)",zIndex:1e3},children:[n.jsx("div",{style:{fontWeight:"bold",marginBottom:"4px"},children:l}),n.jsxs("div",{children:["Value: ",t.points[0].y?.toFixed(1)]})]})]})}})})]})})}},C={render:()=>{const s=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:12},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],o=[{x:1,y:65},{x:2,y:72},{x:3,y:68},{x:4,y:80},{x:5,y:75},{x:6,y:85},{x:7,y:78},{x:8,y:90},{x:9,y:82},{x:10,y:88}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(c,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:s},children:[n.jsx(f,{data:o,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#7950f2",lineWidth:3}}),n.jsx(B,{data:o,xScaleId:"x",yScaleId:"y",style:{fillStyle:"#7950f2",strokeStyle:"#5f3dc4",lineWidth:2}}),n.jsx(y,{children:n.jsx(m,{xScaleId:"x",data:[{seriesId:"performance",yScaleId:"y",points:o}],renderTooltip:e=>{if(!e||e.points[0].y===null)return null;const t=e.points[0].y,i=(t||0)/100*100,l=g(e.frame,e.x,"x","css");return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"absolute",left:`${l}px`,top:e.frame.chartAreaCSS.y,height:e.frame.chartAreaCSS.height,width:"1px",backgroundColor:"rgba(121, 80, 242, 0.5)",pointerEvents:"none",zIndex:999}}),n.jsxs("div",{style:{position:"absolute",left:"50%",top:"10px",transform:"translateX(-50%)",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",padding:"16px 20px",borderRadius:"12px",fontSize:"14px",pointerEvents:"none",boxShadow:"0 8px 24px rgba(0,0,0,0.3)",border:"2px solid rgba(255,255,255,0.3)",zIndex:1e3},children:[n.jsx("div",{style:{fontSize:"24px",fontWeight:"bold",marginBottom:"4px"},children:t?.toFixed(0)}),n.jsxs("div",{style:{fontSize:"12px",opacity:.9},children:[i.toFixed(0),"% of target"]})]})]})}})})]})})}},k={render:()=>{const s=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:8},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],o=[{x:1,y:30},{x:2,y:45},{x:3,y:60},{x:4,y:35},{x:5,y:70},{x:6,y:55}],e=[{x:1,y:40},{x:2,y:35},{x:3,y:50},{x:4,y:45},{x:5,y:60},{x:6,y:65}],t=[{x:1,y:25},{x:2,y:55},{x:3,y:40},{x:4,y:50},{x:5,y:45},{x:6,y:70}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(c,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:s},children:[n.jsx(w,{data:o,xScaleId:"x",yScaleId:"y",barWidth:.25,xPositionOffset:-1,style:{fillStyle:"#4c6ef5",strokeStyle:"#364fc7",lineWidth:1}}),n.jsx(w,{data:e,xScaleId:"x",yScaleId:"y",barWidth:.25,xPositionOffset:0,style:{fillStyle:"#51cf66",strokeStyle:"#37b24d",lineWidth:1}}),n.jsx(w,{data:t,xScaleId:"x",yScaleId:"y",barWidth:.25,xPositionOffset:1,style:{fillStyle:"#ff6b6b",strokeStyle:"#f03e3e",lineWidth:1}}),n.jsx(y,{children:n.jsx(m,{xScaleId:"x",data:[{seriesId:"Q1",yScaleId:"y",points:o},{seriesId:"Q2",yScaleId:"y",points:e},{seriesId:"Q3",yScaleId:"y",points:t}],renderTooltip:i=>{if(!i)return null;const l=g(i.frame,i.x,"x","css");return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"absolute",left:`${l}px`,top:i.frame.chartAreaCSS.y,height:i.frame.chartAreaCSS.height,width:"1px",backgroundColor:"rgba(0, 0, 0, 0.2)",pointerEvents:"none",zIndex:999}}),n.jsxs("div",{style:{position:"absolute",left:"50%",top:"10px",transform:"translateX(-50%)",backgroundColor:"white",color:"#333",padding:"12px 16px",borderRadius:"8px",fontSize:"13px",pointerEvents:"none",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",border:"1px solid #e0e0e0",zIndex:1e3},children:[n.jsxs("div",{style:{marginBottom:"8px",fontWeight:"bold",color:"#000"},children:["Month ",i.x.toFixed(0)]}),i.points.map((a,d)=>{const r=["#4c6ef5","#51cf66","#ff6b6b"];return a.y===null?null:n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:d<i.points.length-1?"4px":"0",gap:"16px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[n.jsx("div",{style:{width:"12px",height:"12px",backgroundColor:r[d],marginRight:"8px",borderRadius:"2px"}}),a.seriesId]}),n.jsx("div",{style:{fontWeight:"bold"},children:a.y.toFixed(0)})]},a.seriesId)})]})]})}})})]})})}},j={render:()=>{const[s,o]=z.useState(null),[e,t]=z.useState(null),i=r=>{r.pointer?.scaled.x!==void 0&&o(r.pointer.scaled.x)},l=r=>{r.pointer?.scaled.x!==void 0&&t(r.pointer.scaled.x)},a=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100}],d=Array.from({length:20},(r,x)=>({x:x*5,height:30+Math.sin(x/2)*20,color:`hsl(${x*18%360}, 70%, 60%)`}));return n.jsxs("div",{style:{padding:"20px"},children:[n.jsxs("div",{style:{marginBottom:"20px"},children:[n.jsx("h3",{style:{margin:"0 0 10px 0"},children:"No Y-Scale with Mouse Interactions"}),n.jsx("p",{style:{fontSize:"14px",color:"#666",marginBottom:"15px"},children:"This chart has no Y-scale but still supports full mouse interactions. Elements are positioned using canvas coordinates directly."}),n.jsxs("div",{style:{fontSize:"14px",color:"#495057",marginBottom:"10px"},children:[n.jsxs("div",{children:["Mouse X: ",s!==null?s.toFixed(2):"—"]}),n.jsxs("div",{children:["Last Click X: ",e!==null?e.toFixed(2):"—"]})]})]}),n.jsxs(c,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:60,left:20,right:20,top:20},scales:a},children:[n.jsx(y,{onMouseMove:i,onClick:l}),n.jsx(L,{scaleId:"x",ticks:$({})}),n.jsx(Y,{bars:d,mouseX:s,clickedX:e}),n.jsx(O,{mouseX:s}),n.jsx(D,{})]})]})}},Y=({bars:s,mouseX:o,clickedX:e})=>(M("MIDDLE",({ctx:t,valToPos:i,frame:l})=>{t.save();const a=l.chartAreaCanvasPX.y+l.chartAreaCanvasPX.height,d=15;for(const r of s){const x=i(r.x,"x"),h=a-r.height,p=o!==null&&Math.abs(r.x-o)<3,u=e!==null&&Math.abs(r.x-e)<3;u?(t.fillStyle="#ff6b6b",t.strokeStyle="#c92a2a",t.lineWidth=3):p?(t.fillStyle="#4c6ef5",t.strokeStyle="#364fc7",t.lineWidth=2):(t.fillStyle=r.color,t.strokeStyle=r.color,t.lineWidth=1),t.fillRect(x-d/2,h,d,r.height),t.strokeRect(x-d/2,h,d,r.height),(p||u)&&(t.fillStyle="#000",t.font="12px sans-serif",t.textAlign="center",t.fillText(`x: ${r.x}`,x,h-5))}t.restore()},[s,o,e]),null),O=({mouseX:s})=>(M("TOP",({ctx:o,valToPos:e,frame:t})=>{if(s===null)return;o.save();const i=e(s,"x"),l=t.chartAreaCanvasPX.y,a=t.chartAreaCanvasPX.y+t.chartAreaCanvasPX.height;o.strokeStyle="#7950f2",o.lineWidth=2,o.setLineDash([5,5]),o.beginPath(),o.moveTo(i,l),o.lineTo(i,a),o.stroke(),o.fillStyle="#7950f2",o.fillRect(i-30,l+5,60,20),o.fillStyle="#fff",o.font="bold 12px sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(s.toFixed(1),i,l+15),o.restore()},[s]),null);S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
                      X: {state.x.toFixed(1)}, Y:{" "}
                      {state.points[0].y?.toFixed(1)}
                    </div>
                  </>;
          }} />
          </ChartAreaInteractions>
        </CanPlot>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [mouseX, setMouseX] = useState<number | null>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [clickedX, setClickedX] = useState<number | null>(null);
    const handleMouseMove = (event: MoveEvent) => {
      if (event.pointer?.scaled.x !== undefined) {
        setMouseX(event.pointer.scaled.x);
      }
    };
    const handleClick = (event: ClickEvent) => {
      if (event.pointer?.scaled.x !== undefined) {
        setClickedX(event.pointer.scaled.x);
      }
    };
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 100
    }];

    // Generate data for visual elements at fixed vertical positions
    const bars = Array.from({
      length: 20
    }, (_, i) => ({
      x: i * 5,
      height: 30 + Math.sin(i / 2) * 20,
      color: \`hsl(\${i * 18 % 360}, 70%, 60%)\`
    }));
    return <div style={{
      padding: "20px"
    }}>
        <div style={{
        marginBottom: "20px"
      }}>
          <h3 style={{
          margin: "0 0 10px 0"
        }}>
            No Y-Scale with Mouse Interactions
          </h3>
          <p style={{
          fontSize: "14px",
          color: "#666",
          marginBottom: "15px"
        }}>
            This chart has no Y-scale but still supports full mouse
            interactions. Elements are positioned using canvas coordinates
            directly.
          </p>
          <div style={{
          fontSize: "14px",
          color: "#495057",
          marginBottom: "10px"
        }}>
            <div>Mouse X: {mouseX !== null ? mouseX.toFixed(2) : "—"}</div>
            <div>
              Last Click X: {clickedX !== null ? clickedX.toFixed(2) : "—"}
            </div>
          </div>
        </div>

        <CanPlot style={{
        width: "100%",
        height: "400px"
      }} configuration={{
        padding: {
          bottom: 60,
          left: 20,
          right: 20,
          top: 20
        },
        scales
      }}>
          <ChartAreaInteractions onMouseMove={handleMouseMove} onClick={handleClick} />

          <XTicks scaleId="x" ticks={makeLinearTicks({})} />

          {/* Custom drawing without Y-scale */}
          <BarsWithoutYScale bars={bars} mouseX={mouseX} clickedX={clickedX} />

          {/* Mouse position indicator */}
          <MouseIndicator mouseX={mouseX} />

          <Crosshair />
        </CanPlot>
      </div>;
  }
}`,...j.parameters?.docs?.source}}};const tn=["BasicLineTooltip","MultiSeriesLinesTooltip","BarChartTooltip","TimeSeriesWithTooltip","CustomStyledTooltip","GroupedBarsTooltip","NoYScaleWithInteractions"];export{v as BarChartTooltip,S as BasicLineTooltip,C as CustomStyledTooltip,k as GroupedBarsTooltip,b as MultiSeriesLinesTooltip,j as NoYScaleWithInteractions,I as TimeSeriesWithTooltip,tn as __namedExportsOrder,en as default};

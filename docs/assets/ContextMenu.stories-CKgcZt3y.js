import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-BhdRC15w.js";import{C as g}from"./CanPlot-BeNKusqU.js";import{L as f}from"./LinePlot-DuJAuaLB.js";import{S as I}from"./ScatterPlot-Dznh-4Rx.js";import{B as V}from"./BarPlot-Cdwoku3Z.js";import{C as m}from"./ChartAreaInteractions-C0Mpw1mr.js";import{C as h}from"./CrossHair-8w1ckCnp.js";import"./preload-helper-PPVm8Dsz.js";const $={component:g,parameters:{layout:"fullscreen"},tags:["autodocs"]},v={render:()=>{const[t,i]=p.useState(null),d=[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:60},origin:"y",min:0,max:100}],c=Array.from({length:20},(s,a)=>({x:a*5,y:50+Math.sin(a/2)*30})),u=s=>{const a=s.frame.ctx.canvas.getBoundingClientRect();i({x:(s.pointer?.cssX??0)+a.left,y:(s.pointer?.cssY??0)+a.top,xValue:s.pointer.scaled.x,yValue:s.pointer.scaled.y})},l=()=>{i(null)};return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Right-click on the chart to open context menu"}),n.jsx("div",{onClick:l,children:n.jsxs(g,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:d},children:[n.jsx(m,{sync:{key:"context-menu-demo",xViaScaleId:"x",yViaScaleId:"y"},onContextMenu:u,children:n.jsx(h,{})}),n.jsx(f,{data:c,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]})}),t&&n.jsxs("div",{style:{position:"fixed",left:t.x,top:t.y,backgroundColor:"white",border:"1px solid #ccc",borderRadius:"4px",boxShadow:"0 2px 8px rgba(0,0,0,0.15)",padding:"8px 0",zIndex:1e3,minWidth:"180px"},children:[n.jsx("div",{style:{padding:"8px 16px",cursor:"pointer",fontSize:"14px"},onMouseEnter:s=>{s.currentTarget.style.backgroundColor="#f0f0f0"},onMouseLeave:s=>{s.currentTarget.style.backgroundColor="transparent"},onClick:()=>{alert(`X: ${t.xValue.toFixed(2)}, Y: ${t.yValue.toFixed(2)}`),i(null)},children:"Show Coordinates"}),n.jsx("div",{style:{padding:"8px 16px",cursor:"pointer",fontSize:"14px"},onMouseEnter:s=>{s.currentTarget.style.backgroundColor="#f0f0f0"},onMouseLeave:s=>{s.currentTarget.style.backgroundColor="transparent"},onClick:()=>{console.log("Add annotation at",t),i(null)},children:"Add Annotation"}),n.jsx("div",{style:{padding:"8px 16px",cursor:"pointer",fontSize:"14px"},onMouseEnter:s=>{s.currentTarget.style.backgroundColor="#f0f0f0"},onMouseLeave:s=>{s.currentTarget.style.backgroundColor="transparent"},onClick:()=>{console.log("Zoom to point",t),i(null)},children:"Zoom Here"}),n.jsx("div",{style:{height:"1px",backgroundColor:"#e0e0e0",margin:"4px 0"}}),n.jsxs("div",{style:{padding:"8px 16px",cursor:"pointer",fontSize:"14px",color:"#999"},children:["X: ",t.xValue.toFixed(2)]}),n.jsxs("div",{style:{padding:"8px 16px",cursor:"pointer",fontSize:"14px",color:"#999"},children:["Y: ",t.yValue.toFixed(2)]})]})]})}},b={render:()=>{const[t,i]=p.useState(null),[d,c]=p.useState([]),u=[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:60},origin:"y",min:0,max:100}],l=Array.from({length:20},(o,e)=>({x:e*5,y:50+Math.sin(e/2)*30})),s=o=>{const e=o.pointer.scaled.x,r=o.pointer.scaled.y;let x=null,y=1/0;l.forEach(M=>{const j=Math.sqrt(Math.pow(M.x-e,2)+Math.pow(M.y-r,2));j<y&&(y=j,x=M)});const C=o.frame.ctx.canvas.getBoundingClientRect();i({x:(o.pointer.cssX??0)+C.left,y:(o.pointer.cssY??0)+C.top,nearestPoint:y<10?x:null})},a=()=>{i(null)};return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Right-click near data points to select them"}),n.jsxs("div",{style:{marginBottom:"10px"},children:[n.jsx("strong",{children:"Selected Points:"})," ",d.length===0?"None":d.map(o=>`(${l[o].x}, ${l[o].y.toFixed(1)})`).join(", ")]}),n.jsx("div",{onClick:a,children:n.jsxs(g,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:u},children:[n.jsx(m,{sync:{key:"context-menu-selection",xViaScaleId:"x",yViaScaleId:"y"},onContextMenu:s,children:n.jsx(h,{})}),n.jsx(f,{data:l,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#51cf66",lineWidth:2}}),n.jsx(I,{data:l,xScaleId:"x",yScaleId:"y",style:{fillStyle:"#51cf66",strokeStyle:"#2f9e44",lineWidth:2}}),n.jsx(I,{data:d.map(o=>l[o]),xScaleId:"x",yScaleId:"y",style:{fillStyle:"#ff6b6b",strokeStyle:"#c92a2a",lineWidth:3},radius:10})]})}),t&&n.jsxs("div",{style:{position:"fixed",left:t.x,top:t.y,backgroundColor:"white",border:"1px solid #ccc",borderRadius:"4px",boxShadow:"0 2px 8px rgba(0,0,0,0.15)",padding:"8px 0",zIndex:1e3,minWidth:"200px"},children:[t.nearestPoint?n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{padding:"8px 16px",fontSize:"12px",fontWeight:"bold",color:"#666"},children:["Point (",t.nearestPoint.x,","," ",t.nearestPoint.y.toFixed(1),")"]}),n.jsx("div",{style:{height:"1px",backgroundColor:"#e0e0e0",margin:"4px 0"}}),n.jsx("div",{style:{padding:"8px 16px",cursor:"pointer",fontSize:"14px"},onMouseEnter:o=>{o.currentTarget.style.backgroundColor="#f0f0f0"},onMouseLeave:o=>{o.currentTarget.style.backgroundColor="transparent"},onClick:()=>{const o=l.findIndex(e=>e.x===t.nearestPoint.x&&e.y===t.nearestPoint.y);o!==-1&&c(e=>e.includes(o)?e.filter(r=>r!==o):[...e,o]),i(null)},children:d.some(o=>l[o].x===t.nearestPoint.x&&l[o].y===t.nearestPoint.y)?"Deselect Point":"Select Point"}),n.jsx("div",{style:{padding:"8px 16px",cursor:"pointer",fontSize:"14px"},onMouseEnter:o=>{o.currentTarget.style.backgroundColor="#f0f0f0"},onMouseLeave:o=>{o.currentTarget.style.backgroundColor="transparent"},onClick:()=>{const o=l.findIndex(e=>e.x===t.nearestPoint.x&&e.y===t.nearestPoint.y);alert(`Point info:
Index: ${o}
X: ${l[o].x}
Y: ${l[o].y.toFixed(2)}`),i(null)},children:"Show Details"})]}):n.jsx("div",{style:{padding:"8px 16px",fontSize:"14px",color:"#999"},children:"No point nearby"}),n.jsx("div",{style:{height:"1px",backgroundColor:"#e0e0e0",margin:"4px 0"}}),n.jsx("div",{style:{padding:"8px 16px",cursor:"pointer",fontSize:"14px"},onMouseEnter:o=>{o.currentTarget.style.backgroundColor="#f0f0f0"},onMouseLeave:o=>{o.currentTarget.style.backgroundColor="transparent"},onClick:()=>{c([]),i(null)},children:"Clear Selection"})]})]})}},k={render:()=>{const[t,i]=p.useState(null),[d,c]=p.useState([]),u=[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:60},origin:"y",min:0,max:100}],l=Array.from({length:20},(e,r)=>({x:r*5,y:50+Math.sin(r/2)*25})),s=Array.from({length:10},(e,r)=>({x:r*10+5,y:30+Math.random()*40})),a=e=>{e.frame.ctx.canvas.addEventListener("contextmenu",x=>x.preventDefault(),{once:!0});const r=e.frame.ctx.canvas.getBoundingClientRect();i({x:(e.pointer.cssX??0)+r.left,y:(e.pointer.cssY??0)+r.top,xValue:e.pointer.scaled.x,yValue:e.pointer.scaled.y})},o=()=>{i(null)};return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Right-click to add annotations or perform actions"}),n.jsx("div",{onClick:o,children:n.jsxs(g,{style:{width:"100%",height:"500px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:u},children:[n.jsx(m,{sync:{key:"context-menu-multi",xViaScaleId:"x",yViaScaleId:"y"},onContextMenu:a,children:n.jsx(h,{})}),n.jsx(V,{data:s,xScaleId:"x",yScaleId:"y",xPositionOffset:0,style:{fillStyle:"#ffd43b77",strokeStyle:"#fab005",lineWidth:2},barWidth:8}),n.jsx(f,{data:l,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:3}}),d.map((e,r)=>n.jsx(I,{data:[{x:e.x,y:e.y}],xScaleId:"x",yScaleId:"y",style:{fillStyle:"#ff6b6b",strokeStyle:"#c92a2a",lineWidth:2},radius:8},r))]})}),d.length>0&&n.jsxs("div",{style:{marginTop:"20px",padding:"10px",backgroundColor:"#f8f9fa",borderRadius:"4px"},children:[n.jsx("strong",{children:"Annotations:"}),n.jsx("ul",{style:{margin:"5px 0",paddingLeft:"20px"},children:d.map((e,r)=>n.jsxs("li",{children:[e.label," at X: ",e.x.toFixed(1),", Y:"," ",e.y.toFixed(1),n.jsx("button",{style:{marginLeft:"10px",padding:"2px 8px",fontSize:"12px"},onClick:()=>{c(x=>x.filter((y,C)=>C!==r))},children:"Remove"})]},r))})]}),t&&n.jsxs("div",{style:{position:"fixed",left:t.x,top:t.y,backgroundColor:"white",border:"1px solid #ccc",borderRadius:"4px",boxShadow:"0 2px 8px rgba(0,0,0,0.15)",padding:"8px 0",zIndex:1e3,minWidth:"220px"},children:[n.jsx("div",{style:{padding:"8px 16px",cursor:"pointer",fontSize:"14px"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#f0f0f0"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="transparent"},onClick:()=>{const e=prompt("Enter annotation label:","Note");e&&c(r=>[...r,{x:t.xValue,y:t.yValue,label:e}]),i(null)},children:"📍 Add Annotation"}),n.jsx("div",{style:{padding:"8px 16px",cursor:"pointer",fontSize:"14px"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#f0f0f0"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="transparent"},onClick:()=>{console.log("Copy coordinates:",{x:t.xValue,y:t.yValue}),navigator.clipboard.writeText(`X: ${t.xValue.toFixed(2)}, Y: ${t.yValue.toFixed(2)}`),i(null)},children:"📋 Copy Coordinates"}),n.jsx("div",{style:{padding:"8px 16px",cursor:"pointer",fontSize:"14px"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#f0f0f0"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="transparent"},onClick:()=>{console.log("Export data at X =",t.xValue),i(null)},children:"💾 Export Data at X"}),n.jsx("div",{style:{height:"1px",backgroundColor:"#e0e0e0",margin:"4px 0"}}),n.jsx("div",{style:{padding:"8px 16px",cursor:"pointer",fontSize:"14px"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#f0f0f0"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="transparent"},onClick:()=>{c([]),i(null)},children:"🗑️ Clear All Annotations"})]})]})}},S={render:()=>{const[t,i]=p.useState(null),[d,c]=p.useState([]),u=[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:60},origin:"y",min:0,max:100}],l=Array.from({length:50},(e,r)=>({x:r*2,y:50+Math.sin(r/5)*25+Math.cos(r/3)*15})),s=e=>{e.frame.ctx.canvas.addEventListener("contextmenu",x=>x.preventDefault(),{once:!0});const r=e.frame.ctx.canvas.getBoundingClientRect();i({x:(e.pointer.cssX??0)+r.left,y:(e.pointer.cssY??0)+r.top,xValue:e.pointer.scaled.x,yValue:e.pointer.scaled.y,modifiers:{ctrl:e.keys.ctrlKey,alt:e.keys.altKey,shift:e.keys.shiftKey,meta:e.keys.metaKey}})},a=()=>{i(null)},o=e=>{c(r=>[`${new Date().toLocaleTimeString()}: ${e}`,...r.slice(0,9)])};return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Context menu with modifier key detection"}),n.jsx("p",{style:{fontSize:"14px",color:"#666"},children:"Try right-clicking while holding Ctrl, Alt, Shift, or Cmd/Meta keys"}),n.jsx("div",{onClick:a,children:n.jsxs(g,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:u},children:[n.jsx(m,{sync:{key:"context-menu-modifiers",xViaScaleId:"x",yViaScaleId:"y"},onContextMenu:s,children:n.jsx(h,{})}),n.jsx(f,{data:l,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#7950f2",lineWidth:2}})]})}),d.length>0&&n.jsxs("div",{style:{marginTop:"20px",padding:"10px",backgroundColor:"#f8f9fa",borderRadius:"4px",fontFamily:"monospace",fontSize:"12px"},children:[n.jsx("strong",{children:"Action Log:"}),d.map((e,r)=>n.jsx("div",{style:{padding:"2px 0"},children:e},r))]}),t&&n.jsxs("div",{style:{position:"fixed",left:t.x,top:t.y,backgroundColor:"white",border:"1px solid #ccc",borderRadius:"4px",boxShadow:"0 2px 8px rgba(0,0,0,0.15)",padding:"8px 0",zIndex:1e3,minWidth:"240px"},children:[n.jsxs("div",{style:{padding:"8px 16px",fontSize:"12px",color:"#666",fontWeight:"bold"},children:["Modifier Keys:"," ",!t.modifiers.ctrl&&!t.modifiers.alt&&!t.modifiers.shift&&!t.modifiers.meta?"None":[t.modifiers.ctrl&&"Ctrl",t.modifiers.alt&&"Alt",t.modifiers.shift&&"Shift",t.modifiers.meta&&"Meta"].filter(Boolean).join(" + ")]}),n.jsx("div",{style:{height:"1px",backgroundColor:"#e0e0e0",margin:"4px 0"}}),n.jsx("div",{style:{padding:"8px 16px",cursor:"pointer",fontSize:"14px"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#f0f0f0"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="transparent"},onClick:()=>{const e=t.modifiers.ctrl?"Quick action (Ctrl)":"Standard action";o(e),i(null)},children:t.modifiers.ctrl?"⚡ Quick Action":"Action"}),n.jsx("div",{style:{padding:"8px 16px",cursor:"pointer",fontSize:"14px"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#f0f0f0"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="transparent"},onClick:()=>{const e=t.modifiers.shift?"Add to selection (Shift)":"Select single point";o(`${e} at (${t.xValue.toFixed(1)}, ${t.yValue.toFixed(1)})`),i(null)},children:t.modifiers.shift?"➕ Add to Selection":"Select"}),n.jsx("div",{style:{padding:"8px 16px",cursor:"pointer",fontSize:"14px"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#f0f0f0"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="transparent"},onClick:()=>{const e=t.modifiers.alt?"Alternative zoom (Alt)":"Standard zoom";o(e),i(null)},children:t.modifiers.alt?"🔍 Alt Zoom":"🔍 Zoom"}),n.jsx("div",{style:{height:"1px",backgroundColor:"#e0e0e0",margin:"4px 0"}}),n.jsxs("div",{style:{padding:"8px 16px",fontSize:"12px",color:"#999"},children:["Position: (",t.xValue.toFixed(2),","," ",t.yValue.toFixed(2),")"]})]})]})}},P={render:()=>{const[t,i]=p.useState(null),d=[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:60},origin:"y",min:0,max:100}],c=Array.from({length:20},(a,o)=>({x:o*5,y:50+Math.sin(o/2)*30})),u=a=>{a.frame.ctx.canvas.addEventListener("contextmenu",e=>e.preventDefault(),{once:!0});const o=a.frame.ctx.canvas.getBoundingClientRect();i({x:(a.pointer.cssX??0)+o.left,y:(a.pointer.cssY??0)+o.top,xValue:a.pointer.scaled.x,yValue:a.pointer.scaled.y})},l=()=>{i(null)},s=({children:a,onClick:o,icon:e,danger:r})=>{const[x,y]=p.useState(!1);return n.jsxs("div",{style:{padding:"10px 16px",cursor:"pointer",fontSize:"14px",display:"flex",alignItems:"center",gap:"10px",backgroundColor:x?r?"#fff5f5":"#f0f7ff":"transparent",color:r?"#c92a2a":"#212529",transition:"all 0.15s ease"},onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),onClick:o,children:[e&&n.jsx("span",{style:{fontSize:"16px"},children:e}),n.jsx("span",{children:a})]})};return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Professional styled context menu"}),n.jsx("div",{onClick:l,children:n.jsxs(g,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:d},children:[n.jsx(m,{sync:{key:"styled-context-menu",xViaScaleId:"x",yViaScaleId:"y"},onContextMenu:u,children:n.jsx(h,{})}),n.jsx(f,{data:c,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#15aabf",lineWidth:3}})]})}),t&&n.jsxs("div",{style:{position:"fixed",left:t.x,top:t.y,backgroundColor:"white",border:"1px solid #dee2e6",borderRadius:"8px",boxShadow:"0 4px 16px rgba(0,0,0,0.12)",padding:"4px 0",zIndex:1e3,minWidth:"220px",overflow:"hidden"},children:[n.jsx("div",{style:{padding:"12px 16px 8px",fontSize:"12px",fontWeight:"600",color:"#868e96",textTransform:"uppercase",letterSpacing:"0.5px"},children:"Chart Actions"}),n.jsx(s,{icon:"📊",onClick:()=>{alert("View data feature"),i(null)},children:"View Data"}),n.jsx(s,{icon:"📍",onClick:()=>{console.log("Add marker",t),i(null)},children:"Add Marker"}),n.jsx(s,{icon:"🔍",onClick:()=>{console.log("Zoom to point"),i(null)},children:"Zoom to Point"}),n.jsx("div",{style:{height:"1px",backgroundColor:"#e9ecef",margin:"4px 8px"}}),n.jsx(s,{icon:"📋",onClick:()=>{navigator.clipboard.writeText(`${t.xValue.toFixed(2)}, ${t.yValue.toFixed(2)}`),i(null)},children:"Copy Coordinates"}),n.jsx(s,{icon:"💾",onClick:()=>{console.log("Export"),i(null)},children:"Export Chart"}),n.jsx("div",{style:{height:"1px",backgroundColor:"#e9ecef",margin:"4px 8px"}}),n.jsx(s,{icon:"🗑️",danger:!0,onClick:()=>{console.log("Reset view"),i(null)},children:"Reset View"}),n.jsxs("div",{style:{padding:"8px 16px",fontSize:"11px",color:"#adb5bd",borderTop:"1px solid #e9ecef",marginTop:"4px",backgroundColor:"#f8f9fa"},children:["X: ",t.xValue.toFixed(2)," | Y:"," ",t.yValue.toFixed(2)]})]})]})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [menuPosition, setMenuPosition] = useState<{
      x: number;
      y: number;
      xValue: number;
      yValue: number;
    } | null>(null);
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
    const data = Array.from({
      length: 20
    }, (_, i) => ({
      x: i * 5,
      y: 50 + Math.sin(i / 2) * 30
    }));
    const handleContextMenu = (event: ContextMenuEvent) => {
      // Get the mouse position relative to the viewport
      const rect = event.frame.ctx.canvas.getBoundingClientRect();
      setMenuPosition({
        x: (event.pointer?.cssX ?? 0) + rect.left,
        y: (event.pointer?.cssY ?? 0) + rect.top,
        xValue: event.pointer.scaled.x,
        yValue: event.pointer.scaled.y
      });
    };
    const handleClick = () => {
      setMenuPosition(null);
    };
    return <div style={{
      padding: "20px"
    }}>
        <h3>Right-click on the chart to open context menu</h3>
        <div onClick={handleClick}>
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
            key: "context-menu-demo",
            xViaScaleId: "x",
            yViaScaleId: "y"
          }} onContextMenu={handleContextMenu}>
              <Crosshair />
            </ChartAreaInteractions>

            <LinePlot data={data} xScaleId="x" yScaleId="y" style={{
            strokeStyle: "#4c6ef5",
            lineWidth: 2
          }} />
          </CanPlot>
        </div>

        {menuPosition && <div style={{
        position: "fixed",
        left: menuPosition.x,
        top: menuPosition.y,
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        padding: "8px 0",
        zIndex: 1000,
        minWidth: "180px"
      }}>
            <div style={{
          padding: "8px 16px",
          cursor: "pointer",
          fontSize: "14px"
        }} onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = "#f0f0f0";
        }} onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = "transparent";
        }} onClick={() => {
          alert(\`X: \${menuPosition.xValue.toFixed(2)}, Y: \${menuPosition.yValue.toFixed(2)}\`);
          setMenuPosition(null);
        }}>
              Show Coordinates
            </div>
            <div style={{
          padding: "8px 16px",
          cursor: "pointer",
          fontSize: "14px"
        }} onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = "#f0f0f0";
        }} onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = "transparent";
        }} onClick={() => {
          console.log("Add annotation at", menuPosition);
          setMenuPosition(null);
        }}>
              Add Annotation
            </div>
            <div style={{
          padding: "8px 16px",
          cursor: "pointer",
          fontSize: "14px"
        }} onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = "#f0f0f0";
        }} onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = "transparent";
        }} onClick={() => {
          console.log("Zoom to point", menuPosition);
          setMenuPosition(null);
        }}>
              Zoom Here
            </div>
            <div style={{
          height: "1px",
          backgroundColor: "#e0e0e0",
          margin: "4px 0"
        }} />
            <div style={{
          padding: "8px 16px",
          cursor: "pointer",
          fontSize: "14px",
          color: "#999"
        }}>
              X: {menuPosition.xValue.toFixed(2)}
            </div>
            <div style={{
          padding: "8px 16px",
          cursor: "pointer",
          fontSize: "14px",
          color: "#999"
        }}>
              Y: {menuPosition.yValue.toFixed(2)}
            </div>
          </div>}
      </div>;
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [menuPosition, setMenuPosition] = useState<{
      x: number;
      y: number;
      nearestPoint: {
        x: number;
        y: number;
      } | null;
    } | null>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedPoints, setSelectedPoints] = useState<number[]>([]);
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
    const data = Array.from({
      length: 20
    }, (_, i) => ({
      x: i * 5,
      y: 50 + Math.sin(i / 2) * 30
    }));
    const handleContextMenu = (event: ContextMenuEvent) => {
      const xValue = event.pointer.scaled.x;
      const yValue = event.pointer.scaled.y;

      // Find nearest point
      let nearestPoint: {
        x: number;
        y: number;
      } | null = null;
      let minDistance = Infinity;
      data.forEach(point => {
        const distance = Math.sqrt(Math.pow(point.x - xValue, 2) + Math.pow(point.y - yValue, 2));
        if (distance < minDistance) {
          minDistance = distance;
          nearestPoint = point;
        }
      });
      const rect = event.frame.ctx.canvas.getBoundingClientRect();
      setMenuPosition({
        x: (event.pointer.cssX ?? 0) + rect.left,
        y: (event.pointer.cssY ?? 0) + rect.top,
        nearestPoint: minDistance < 10 ? nearestPoint : null
      });
    };
    const handleClick = () => {
      setMenuPosition(null);
    };
    return <div style={{
      padding: "20px"
    }}>
        <h3>Right-click near data points to select them</h3>
        <div style={{
        marginBottom: "10px"
      }}>
          <strong>Selected Points:</strong>{" "}
          {selectedPoints.length === 0 ? "None" : selectedPoints.map(idx => \`(\${data[idx].x}, \${data[idx].y.toFixed(1)})\`).join(", ")}
        </div>
        <div onClick={handleClick}>
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
            key: "context-menu-selection",
            xViaScaleId: "x",
            yViaScaleId: "y"
          }} onContextMenu={handleContextMenu}>
              <Crosshair />
            </ChartAreaInteractions>

            <LinePlot data={data} xScaleId="x" yScaleId="y" style={{
            strokeStyle: "#51cf66",
            lineWidth: 2
          }} />
            <ScatterPlot data={data} xScaleId="x" yScaleId="y" style={{
            fillStyle: "#51cf66",
            strokeStyle: "#2f9e44",
            lineWidth: 2
          }} />
            {/* Highlight selected points */}
            <ScatterPlot data={selectedPoints.map(idx => data[idx])} xScaleId="x" yScaleId="y" style={{
            fillStyle: "#ff6b6b",
            strokeStyle: "#c92a2a",
            lineWidth: 3
          }} radius={10} />
          </CanPlot>
        </div>

        {menuPosition && <div style={{
        position: "fixed",
        left: menuPosition.x,
        top: menuPosition.y,
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        padding: "8px 0",
        zIndex: 1000,
        minWidth: "200px"
      }}>
            {menuPosition.nearestPoint ? <>
                <div style={{
            padding: "8px 16px",
            fontSize: "12px",
            fontWeight: "bold",
            color: "#666"
          }}>
                  Point ({menuPosition.nearestPoint.x},{" "}
                  {menuPosition.nearestPoint.y.toFixed(1)})
                </div>
                <div style={{
            height: "1px",
            backgroundColor: "#e0e0e0",
            margin: "4px 0"
          }} />
                <div style={{
            padding: "8px 16px",
            cursor: "pointer",
            fontSize: "14px"
          }} onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = "#f0f0f0";
          }} onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = "transparent";
          }} onClick={() => {
            const idx = data.findIndex(p => p.x === menuPosition.nearestPoint!.x && p.y === menuPosition.nearestPoint!.y);
            if (idx !== -1) {
              setSelectedPoints(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
            }
            setMenuPosition(null);
          }}>
                  {selectedPoints.some(idx => data[idx].x === menuPosition.nearestPoint!.x && data[idx].y === menuPosition.nearestPoint!.y) ? "Deselect Point" : "Select Point"}
                </div>
                <div style={{
            padding: "8px 16px",
            cursor: "pointer",
            fontSize: "14px"
          }} onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = "#f0f0f0";
          }} onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = "transparent";
          }} onClick={() => {
            const idx = data.findIndex(p => p.x === menuPosition.nearestPoint!.x && p.y === menuPosition.nearestPoint!.y);
            alert(\`Point info:\\nIndex: \${idx}\\nX: \${data[idx].x}\\nY: \${data[idx].y.toFixed(2)}\`);
            setMenuPosition(null);
          }}>
                  Show Details
                </div>
              </> : <div style={{
          padding: "8px 16px",
          fontSize: "14px",
          color: "#999"
        }}>
                No point nearby
              </div>}
            <div style={{
          height: "1px",
          backgroundColor: "#e0e0e0",
          margin: "4px 0"
        }} />
            <div style={{
          padding: "8px 16px",
          cursor: "pointer",
          fontSize: "14px"
        }} onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = "#f0f0f0";
        }} onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = "transparent";
        }} onClick={() => {
          setSelectedPoints([]);
          setMenuPosition(null);
        }}>
              Clear Selection
            </div>
          </div>}
      </div>;
  }
}`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [menuPosition, setMenuPosition] = useState<{
      x: number;
      y: number;
      xValue: number;
      yValue: number;
    } | null>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [annotations, setAnnotations] = useState<Array<{
      x: number;
      y: number;
      label: string;
    }>>([]);
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
    const lineData = Array.from({
      length: 20
    }, (_, i) => ({
      x: i * 5,
      y: 50 + Math.sin(i / 2) * 25
    }));
    const barData = Array.from({
      length: 10
    }, (_, i) => ({
      x: i * 10 + 5,
      y: 30 + Math.random() * 40
    }));
    const handleContextMenu = (event: ContextMenuEvent) => {
      event.frame.ctx.canvas.addEventListener("contextmenu", e => e.preventDefault(), {
        once: true
      });
      const rect = event.frame.ctx.canvas.getBoundingClientRect();
      setMenuPosition({
        x: (event.pointer.cssX ?? 0) + rect.left,
        y: (event.pointer.cssY ?? 0) + rect.top,
        xValue: event.pointer.scaled.x,
        yValue: event.pointer.scaled.y
      });
    };
    const handleClick = () => {
      setMenuPosition(null);
    };
    return <div style={{
      padding: "20px"
    }}>
        <h3>Right-click to add annotations or perform actions</h3>
        <div onClick={handleClick}>
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
            <ChartAreaInteractions sync={{
            key: "context-menu-multi",
            xViaScaleId: "x",
            yViaScaleId: "y"
          }} onContextMenu={handleContextMenu}>
              <Crosshair />
            </ChartAreaInteractions>

            <BarPlot data={barData} xScaleId="x" yScaleId="y" xPositionOffset={0} style={{
            fillStyle: "#ffd43b77",
            strokeStyle: "#fab005",
            lineWidth: 2
          }} barWidth={8} />

            <LinePlot data={lineData} xScaleId="x" yScaleId="y" style={{
            strokeStyle: "#4c6ef5",
            lineWidth: 3
          }} />

            {/* Render annotations */}
            {annotations.map((annotation, idx) => <ScatterPlot key={idx} data={[{
            x: annotation.x,
            y: annotation.y
          }]} xScaleId="x" yScaleId="y" style={{
            fillStyle: "#ff6b6b",
            strokeStyle: "#c92a2a",
            lineWidth: 2
          }} radius={8} />)}
          </CanPlot>
        </div>

        {/* Display annotations list */}
        {annotations.length > 0 && <div style={{
        marginTop: "20px",
        padding: "10px",
        backgroundColor: "#f8f9fa",
        borderRadius: "4px"
      }}>
            <strong>Annotations:</strong>
            <ul style={{
          margin: "5px 0",
          paddingLeft: "20px"
        }}>
              {annotations.map((annotation, idx) => <li key={idx}>
                  {annotation.label} at X: {annotation.x.toFixed(1)}, Y:{" "}
                  {annotation.y.toFixed(1)}
                  <button style={{
              marginLeft: "10px",
              padding: "2px 8px",
              fontSize: "12px"
            }} onClick={() => {
              setAnnotations(prev => prev.filter((_, i) => i !== idx));
            }}>
                    Remove
                  </button>
                </li>)}
            </ul>
          </div>}

        {menuPosition && <div style={{
        position: "fixed",
        left: menuPosition.x,
        top: menuPosition.y,
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        padding: "8px 0",
        zIndex: 1000,
        minWidth: "220px"
      }}>
            <div style={{
          padding: "8px 16px",
          cursor: "pointer",
          fontSize: "14px"
        }} onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = "#f0f0f0";
        }} onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = "transparent";
        }} onClick={() => {
          const label = prompt("Enter annotation label:", "Note");
          if (label) {
            setAnnotations(prev => [...prev, {
              x: menuPosition.xValue,
              y: menuPosition.yValue,
              label
            }]);
          }
          setMenuPosition(null);
        }}>
              📍 Add Annotation
            </div>
            <div style={{
          padding: "8px 16px",
          cursor: "pointer",
          fontSize: "14px"
        }} onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = "#f0f0f0";
        }} onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = "transparent";
        }} onClick={() => {
          console.log("Copy coordinates:", {
            x: menuPosition.xValue,
            y: menuPosition.yValue
          });
          navigator.clipboard.writeText(\`X: \${menuPosition.xValue.toFixed(2)}, Y: \${menuPosition.yValue.toFixed(2)}\`);
          setMenuPosition(null);
        }}>
              📋 Copy Coordinates
            </div>
            <div style={{
          padding: "8px 16px",
          cursor: "pointer",
          fontSize: "14px"
        }} onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = "#f0f0f0";
        }} onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = "transparent";
        }} onClick={() => {
          console.log("Export data at X =", menuPosition.xValue);
          setMenuPosition(null);
        }}>
              💾 Export Data at X
            </div>
            <div style={{
          height: "1px",
          backgroundColor: "#e0e0e0",
          margin: "4px 0"
        }} />
            <div style={{
          padding: "8px 16px",
          cursor: "pointer",
          fontSize: "14px"
        }} onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = "#f0f0f0";
        }} onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = "transparent";
        }} onClick={() => {
          setAnnotations([]);
          setMenuPosition(null);
        }}>
              🗑️ Clear All Annotations
            </div>
          </div>}
      </div>;
  }
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [menuPosition, setMenuPosition] = useState<{
      x: number;
      y: number;
      xValue: number;
      yValue: number;
      modifiers: {
        ctrl: boolean;
        alt: boolean;
        shift: boolean;
        meta: boolean;
      };
    } | null>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [actionLog, setActionLog] = useState<string[]>([]);
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
    const data = Array.from({
      length: 50
    }, (_, i) => ({
      x: i * 2,
      y: 50 + Math.sin(i / 5) * 25 + Math.cos(i / 3) * 15
    }));
    const handleContextMenu = (event: ContextMenuEvent) => {
      event.frame.ctx.canvas.addEventListener("contextmenu", e => e.preventDefault(), {
        once: true
      });
      const rect = event.frame.ctx.canvas.getBoundingClientRect();
      setMenuPosition({
        x: (event.pointer.cssX ?? 0) + rect.left,
        y: (event.pointer.cssY ?? 0) + rect.top,
        xValue: event.pointer.scaled.x,
        yValue: event.pointer.scaled.y,
        modifiers: {
          ctrl: event.keys.ctrlKey,
          alt: event.keys.altKey,
          shift: event.keys.shiftKey,
          meta: event.keys.metaKey
        }
      });
    };
    const handleClick = () => {
      setMenuPosition(null);
    };
    const logAction = (action: string) => {
      setActionLog(prev => [\`\${new Date().toLocaleTimeString()}: \${action}\`, ...prev.slice(0, 9)]);
    };
    return <div style={{
      padding: "20px"
    }}>
        <h3>Context menu with modifier key detection</h3>
        <p style={{
        fontSize: "14px",
        color: "#666"
      }}>
          Try right-clicking while holding Ctrl, Alt, Shift, or Cmd/Meta keys
        </p>
        <div onClick={handleClick}>
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
            key: "context-menu-modifiers",
            xViaScaleId: "x",
            yViaScaleId: "y"
          }} onContextMenu={handleContextMenu}>
              <Crosshair />
            </ChartAreaInteractions>

            <LinePlot data={data} xScaleId="x" yScaleId="y" style={{
            strokeStyle: "#7950f2",
            lineWidth: 2
          }} />
          </CanPlot>
        </div>

        {/* Action log */}
        {actionLog.length > 0 && <div style={{
        marginTop: "20px",
        padding: "10px",
        backgroundColor: "#f8f9fa",
        borderRadius: "4px",
        fontFamily: "monospace",
        fontSize: "12px"
      }}>
            <strong>Action Log:</strong>
            {actionLog.map((log, idx) => <div key={idx} style={{
          padding: "2px 0"
        }}>
                {log}
              </div>)}
          </div>}

        {menuPosition && <div style={{
        position: "fixed",
        left: menuPosition.x,
        top: menuPosition.y,
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        padding: "8px 0",
        zIndex: 1000,
        minWidth: "240px"
      }}>
            <div style={{
          padding: "8px 16px",
          fontSize: "12px",
          color: "#666",
          fontWeight: "bold"
        }}>
              Modifier Keys:{" "}
              {!menuPosition.modifiers.ctrl && !menuPosition.modifiers.alt && !menuPosition.modifiers.shift && !menuPosition.modifiers.meta ? "None" : [menuPosition.modifiers.ctrl && "Ctrl", menuPosition.modifiers.alt && "Alt", menuPosition.modifiers.shift && "Shift", menuPosition.modifiers.meta && "Meta"].filter(Boolean).join(" + ")}
            </div>
            <div style={{
          height: "1px",
          backgroundColor: "#e0e0e0",
          margin: "4px 0"
        }} />
            <div style={{
          padding: "8px 16px",
          cursor: "pointer",
          fontSize: "14px"
        }} onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = "#f0f0f0";
        }} onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = "transparent";
        }} onClick={() => {
          const action = menuPosition.modifiers.ctrl ? "Quick action (Ctrl)" : "Standard action";
          logAction(action);
          setMenuPosition(null);
        }}>
              {menuPosition.modifiers.ctrl ? "⚡ Quick Action" : "Action"}
            </div>
            <div style={{
          padding: "8px 16px",
          cursor: "pointer",
          fontSize: "14px"
        }} onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = "#f0f0f0";
        }} onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = "transparent";
        }} onClick={() => {
          const action = menuPosition.modifiers.shift ? "Add to selection (Shift)" : "Select single point";
          logAction(\`\${action} at (\${menuPosition.xValue.toFixed(1)}, \${menuPosition.yValue.toFixed(1)})\`);
          setMenuPosition(null);
        }}>
              {menuPosition.modifiers.shift ? "➕ Add to Selection" : "Select"}
            </div>
            <div style={{
          padding: "8px 16px",
          cursor: "pointer",
          fontSize: "14px"
        }} onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = "#f0f0f0";
        }} onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = "transparent";
        }} onClick={() => {
          const action = menuPosition.modifiers.alt ? "Alternative zoom (Alt)" : "Standard zoom";
          logAction(action);
          setMenuPosition(null);
        }}>
              {menuPosition.modifiers.alt ? "🔍 Alt Zoom" : "🔍 Zoom"}
            </div>
            <div style={{
          height: "1px",
          backgroundColor: "#e0e0e0",
          margin: "4px 0"
        }} />
            <div style={{
          padding: "8px 16px",
          fontSize: "12px",
          color: "#999"
        }}>
              Position: ({menuPosition.xValue.toFixed(2)},{" "}
              {menuPosition.yValue.toFixed(2)})
            </div>
          </div>}
      </div>;
  }
}`,...S.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [menuPosition, setMenuPosition] = useState<{
      x: number;
      y: number;
      xValue: number;
      yValue: number;
    } | null>(null);
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
    const data = Array.from({
      length: 20
    }, (_, i) => ({
      x: i * 5,
      y: 50 + Math.sin(i / 2) * 30
    }));
    const handleContextMenu = (event: ContextMenuEvent) => {
      event.frame.ctx.canvas.addEventListener("contextmenu", e => e.preventDefault(), {
        once: true
      });
      const rect = event.frame.ctx.canvas.getBoundingClientRect();
      setMenuPosition({
        x: (event.pointer.cssX ?? 0) + rect.left,
        y: (event.pointer.cssY ?? 0) + rect.top,
        xValue: event.pointer.scaled.x,
        yValue: event.pointer.scaled.y
      });
    };
    const handleClick = () => {
      setMenuPosition(null);
    };
    const MenuItem = ({
      children,
      onClick,
      icon,
      danger
    }: {
      children: React.ReactNode;
      onClick: () => void;
      icon?: string;
      danger?: boolean;
    }) => {
      const [hover, setHover] = useState(false);
      return <div style={{
        padding: "10px 16px",
        cursor: "pointer",
        fontSize: "14px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        backgroundColor: hover ? danger ? "#fff5f5" : "#f0f7ff" : "transparent",
        color: danger ? "#c92a2a" : "#212529",
        transition: "all 0.15s ease"
      }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onClick}>
          {icon && <span style={{
          fontSize: "16px"
        }}>{icon}</span>}
          <span>{children}</span>
        </div>;
    };
    return <div style={{
      padding: "20px"
    }}>
        <h3>Professional styled context menu</h3>
        <div onClick={handleClick}>
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
            key: "styled-context-menu",
            xViaScaleId: "x",
            yViaScaleId: "y"
          }} onContextMenu={handleContextMenu}>
              <Crosshair />
            </ChartAreaInteractions>

            <LinePlot data={data} xScaleId="x" yScaleId="y" style={{
            strokeStyle: "#15aabf",
            lineWidth: 3
          }} />
          </CanPlot>
        </div>

        {menuPosition && <div style={{
        position: "fixed",
        left: menuPosition.x,
        top: menuPosition.y,
        backgroundColor: "white",
        border: "1px solid #dee2e6",
        borderRadius: "8px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
        padding: "4px 0",
        zIndex: 1000,
        minWidth: "220px",
        overflow: "hidden"
      }}>
            <div style={{
          padding: "12px 16px 8px",
          fontSize: "12px",
          fontWeight: "600",
          color: "#868e96",
          textTransform: "uppercase",
          letterSpacing: "0.5px"
        }}>
              Chart Actions
            </div>
            <MenuItem icon="📊" onClick={() => {
          alert("View data feature");
          setMenuPosition(null);
        }}>
              View Data
            </MenuItem>
            <MenuItem icon="📍" onClick={() => {
          console.log("Add marker", menuPosition);
          setMenuPosition(null);
        }}>
              Add Marker
            </MenuItem>
            <MenuItem icon="🔍" onClick={() => {
          console.log("Zoom to point");
          setMenuPosition(null);
        }}>
              Zoom to Point
            </MenuItem>
            <div style={{
          height: "1px",
          backgroundColor: "#e9ecef",
          margin: "4px 8px"
        }} />
            <MenuItem icon="📋" onClick={() => {
          navigator.clipboard.writeText(\`\${menuPosition.xValue.toFixed(2)}, \${menuPosition.yValue.toFixed(2)}\`);
          setMenuPosition(null);
        }}>
              Copy Coordinates
            </MenuItem>
            <MenuItem icon="💾" onClick={() => {
          console.log("Export");
          setMenuPosition(null);
        }}>
              Export Chart
            </MenuItem>
            <div style={{
          height: "1px",
          backgroundColor: "#e9ecef",
          margin: "4px 8px"
        }} />
            <MenuItem icon="🗑️" danger onClick={() => {
          console.log("Reset view");
          setMenuPosition(null);
        }}>
              Reset View
            </MenuItem>
            <div style={{
          padding: "8px 16px",
          fontSize: "11px",
          color: "#adb5bd",
          borderTop: "1px solid #e9ecef",
          marginTop: "4px",
          backgroundColor: "#f8f9fa"
        }}>
              X: {menuPosition.xValue.toFixed(2)} | Y:{" "}
              {menuPosition.yValue.toFixed(2)}
            </div>
          </div>}
      </div>;
  }
}`,...P.parameters?.docs?.source}}};const D=["BasicContextMenu","ContextMenuWithDataSelection","ContextMenuMultiSeries","ContextMenuWithModifiers","StyledContextMenu"];export{v as BasicContextMenu,k as ContextMenuMultiSeries,b as ContextMenuWithDataSelection,S as ContextMenuWithModifiers,P as StyledContextMenu,D as __namedExportsOrder,$ as default};

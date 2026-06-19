import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as h,a as A,u as j}from"./frameContext-Gwa09ObI.js";import"./LinePlot-BIuMcwlg.js";import"./ScatterPlot-cPAs9nPb.js";import"./BarPlot-mVTSLwAx.js";import"./AreaPlot-CizcuzJk.js";import"./SparklinePlot-D8vzqBGt.js";import"./tickUtils-BF8IcwJh.js";import"./ChartAreaInteractions-BFhQ0p5z.js";import{r as s}from"./iframe-BwZ1opCx.js";import"./CrossHair-CHY988n1.js";import"./SelectBox-C9U9p38R.js";import"./AxisOverlay-TvyYZY6W.js";import"./preload-helper-PPVm8Dsz.js";const X={component:h,parameters:{layout:"fullscreen"},tags:["autodocs"]},F=[{id:"x",axis:null,origin:"x",min:0,max:100},{id:"y",axis:null,origin:"y",min:0,max:100}],b={padding:{bottom:20,left:20,right:20,top:20},scales:F},u=({cx:o,cy:r,radius:n,color:t,globalAlpha:a,globalCompositeOperation:l,layer:c=100,drawCountRef:i})=>(A({layer:c,runner:({ctx:p,valToPos:C})=>{i&&i.current++;const x=C(o,"x","canvas"),v=C(r,"y","canvas");if(x==null||v==null)return;const w=C(o+n,"x","canvas");if(w==null)return;const S=Math.abs(w-x);p.save(),p.beginPath(),p.arc(x,v,S,0,Math.PI*2),p.fillStyle=t,p.fill(),p.restore()},globalAlpha:a,globalCompositeOperation:l,deps:[o,r,n,t]}),null),f={render:()=>{const[o,r]=s.useState(.5),n=s.useRef(0),t=s.useRef(0),a=s.useRef(0);return e.jsxs("div",{style:{padding:20},children:[e.jsx("div",{style:{marginBottom:12,fontFamily:"monospace",fontSize:14},children:e.jsxs("label",{children:["globalAlpha: ",e.jsx("strong",{children:o.toFixed(2)}),e.jsx("input",{type:"range",min:0,max:1,step:.01,value:o,onChange:l=>r(Number(l.target.value)),style:{marginLeft:12,verticalAlign:"middle"}})]})}),e.jsxs("div",{style:{display:"flex",gap:16,fontFamily:"monospace",fontSize:13,marginBottom:8},children:[e.jsx(d,{label:"Red draws",countRef:n,color:"#ef4444"}),e.jsx(d,{label:"Blue draws",countRef:t,color:"#3b82f6"}),e.jsx(d,{label:"Green draws",countRef:a,color:"#22c55e"})]}),e.jsxs(h,{style:{width:"100%",height:400},configuration:b,children:[e.jsx(u,{cx:40,cy:55,radius:14,color:"#ef4444",globalAlpha:o,layer:100,drawCountRef:n}),e.jsx(u,{cx:55,cy:55,radius:14,color:"#3b82f6",globalAlpha:o,layer:101,drawCountRef:t}),e.jsx(u,{cx:47.5,cy:40,radius:14,color:"#22c55e",globalAlpha:o,layer:102,drawCountRef:a})]})]})}},O=["source-over","source-atop","source-in","source-out","destination-over","destination-atop","destination-in","destination-out","lighter","xor","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],g={render:()=>{const[o,r]=s.useState("multiply"),n=s.useRef(0),t=s.useRef(0);return e.jsxs("div",{style:{padding:20},children:[e.jsx("div",{style:{marginBottom:12,fontFamily:"monospace",fontSize:14},children:e.jsxs("label",{children:["globalCompositeOperation:"," ",e.jsx("select",{value:o,onChange:a=>r(a.target.value),style:{fontSize:14,padding:"4px 8px"},children:O.map(a=>e.jsx("option",{value:a,children:a},a))})]})}),e.jsxs("div",{style:{display:"flex",gap:16,fontFamily:"monospace",fontSize:13,marginBottom:8},children:[e.jsx(d,{label:"Red draws",countRef:n,color:"#ef4444"}),e.jsx(d,{label:"Blue draws",countRef:t,color:"#3b82f6"})]}),e.jsxs(h,{style:{width:"100%",height:400},configuration:b,children:[e.jsx(u,{cx:42,cy:50,radius:14,color:"#ef4444",layer:100,drawCountRef:n}),e.jsx(u,{cx:58,cy:50,radius:14,color:"#3b82f6",globalCompositeOperation:o,layer:101,drawCountRef:t})]})]})}},m={render:()=>{const[o,r]=s.useState(.7),[n,t]=s.useState("screen"),a=s.useRef(0),l=s.useRef(0),c=s.useRef(0);return e.jsxs("div",{style:{padding:20},children:[e.jsxs("div",{style:{marginBottom:12,fontFamily:"monospace",fontSize:14,display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsxs("label",{children:["globalAlpha: ",e.jsx("strong",{children:o.toFixed(2)}),e.jsx("input",{type:"range",min:0,max:1,step:.01,value:o,onChange:i=>r(Number(i.target.value)),style:{marginLeft:12,verticalAlign:"middle"}})]}),e.jsxs("label",{children:["globalCompositeOperation:"," ",e.jsx("select",{value:n,onChange:i=>t(i.target.value),style:{fontSize:14,padding:"4px 8px"},children:O.map(i=>e.jsx("option",{value:i,children:i},i))})]})]}),e.jsxs("div",{style:{display:"flex",gap:16,fontFamily:"monospace",fontSize:13,marginBottom:8},children:[e.jsx(d,{label:"Red draws",countRef:a,color:"#ef4444"}),e.jsx(d,{label:"Blue draws",countRef:l,color:"#3b82f6"}),e.jsx(d,{label:"Green draws",countRef:c,color:"#22c55e"})]}),e.jsxs(h,{style:{width:"100%",height:400},configuration:b,children:[e.jsx(u,{cx:40,cy:55,radius:14,color:"#ef4444",layer:100,drawCountRef:a}),e.jsx(u,{cx:55,cy:55,radius:14,color:"#3b82f6",globalAlpha:o,globalCompositeOperation:n,layer:101,drawCountRef:l}),e.jsx(u,{cx:47.5,cy:40,radius:14,color:"#22c55e",globalAlpha:o,globalCompositeOperation:n,layer:102,drawCountRef:c})]})]})}},d=({label:o,countRef:r,color:n})=>{const[t,a]=s.useState(0);return s.useEffect(()=>{const l=setInterval(()=>a(r.current),200);return()=>clearInterval(l)},[r]),e.jsxs("span",{style:{color:n},children:[o,": ",e.jsx("strong",{children:t})]})},k=({globalAlpha:o,drawCountRef:r})=>(A({layer:"BOTTOM",runner:({ctx:n,valToPos:t})=>{r.current++,n.save();for(let a=0;a<=100;a+=4)for(let l=0;l<=100;l+=4){const c=t(a,"x","canvas"),i=t(l,"y","canvas");c==null||i==null||(n.beginPath(),n.arc(c,i,4,0,Math.PI*2),n.fillStyle=`hsl(${(a+l)*3}, 80%, 50%)`,n.fill())}n.restore()},globalAlpha:o,deps:[]}),null),I=({globalAlpha:o,drawCountRef:r})=>(j("BOTTOM",({ctx:n,valToPos:t})=>{r.current++,n.save(),n.globalAlpha=o;for(let a=0;a<=100;a+=4)for(let l=0;l<=100;l+=4){const c=t(a,"x","canvas"),i=t(l,"y","canvas");c==null||i==null||(n.beginPath(),n.arc(c,i,4,0,Math.PI*2),n.fillStyle=`hsl(${(a+l)*3}, 80%, 50%)`,n.fill())}n.restore()},[o]),null),R=()=>{const[o,r]=s.useState(50);return s.useEffect(()=>{const n=setInterval(()=>{r(50+Math.sin(Date.now()/300)*40)},16);return()=>clearInterval(n)},[]),j("TOP",({ctx:n,valToPos:t,clampYPosToChartArea:a})=>{const l=t(o,"x","canvas");if(l==null)return;const c=a(-1/0,"canvas"),i=a(1/0,"canvas");n.save(),n.beginPath(),n.moveTo(l,c),n.lineTo(l,i),n.strokeStyle="red",n.lineWidth=2,n.stroke(),n.restore()},[o]),null},y={render:()=>{const[o,r]=s.useState(.6),n=s.useRef(0),t=s.useRef(0);return e.jsxs("div",{style:{padding:20,display:"flex",flexDirection:"column",gap:12},children:[e.jsx("div",{style:{fontFamily:"monospace",fontSize:14},children:e.jsxs("label",{children:["globalAlpha: ",e.jsx("strong",{children:o.toFixed(2)}),e.jsx("input",{type:"range",min:0,max:1,step:.01,value:o,onChange:a=>r(Number(a.target.value)),style:{marginLeft:12,verticalAlign:"middle"}})]})}),e.jsxs("div",{style:{display:"flex",gap:32,fontFamily:"monospace",fontSize:14},children:[e.jsx(d,{label:"Uncached runner calls",countRef:n,color:"#dc2626"}),e.jsx(d,{label:"Cached runner calls",countRef:t,color:"#16a34a"})]}),e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h4",{style:{margin:"0 0 8px"},children:"useDrawEffectNoCache (redraws every frame)"}),e.jsxs(h,{style:{width:"100%",height:350},configuration:b,children:[e.jsx(I,{globalAlpha:o,drawCountRef:n}),e.jsx(R,{})]})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h4",{style:{margin:"0 0 8px"},children:"useDrawEffect + globalAlpha (cached, no redraw)"}),e.jsxs(h,{style:{width:"100%",height:350},configuration:b,children:[e.jsx(k,{globalAlpha:o,drawCountRef:t}),e.jsx(R,{})]})]})]})]})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [alpha, setAlpha] = useState(0.5);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const redCount = useRef(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const blueCount = useRef(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const greenCount = useRef(0);
    return <div style={{
      padding: 20
    }}>
        <div style={{
        marginBottom: 12,
        fontFamily: "monospace",
        fontSize: 14
      }}>
          <label>
            globalAlpha: <strong>{alpha.toFixed(2)}</strong>
            <input type="range" min={0} max={1} step={0.01} value={alpha} onChange={e => setAlpha(Number(e.target.value))} style={{
            marginLeft: 12,
            verticalAlign: "middle"
          }} />
          </label>
        </div>
        <div style={{
        display: "flex",
        gap: 16,
        fontFamily: "monospace",
        fontSize: 13,
        marginBottom: 8
      }}>
          <DrawCounter label="Red draws" countRef={redCount} color="#ef4444" />
          <DrawCounter label="Blue draws" countRef={blueCount} color="#3b82f6" />
          <DrawCounter label="Green draws" countRef={greenCount} color="#22c55e" />
        </div>
        <CanPlot style={{
        width: "100%",
        height: 400
      }} configuration={CONFIGURATION}>
          <FilledCircle cx={40} cy={55} radius={14} color="#ef4444" globalAlpha={alpha} layer={100} drawCountRef={redCount} />
          <FilledCircle cx={55} cy={55} radius={14} color="#3b82f6" globalAlpha={alpha} layer={101} drawCountRef={blueCount} />
          <FilledCircle cx={47.5} cy={40} radius={14} color="#22c55e" globalAlpha={alpha} layer={102} drawCountRef={greenCount} />
        </CanPlot>
      </div>;
  }
}`,...f.parameters?.docs?.source},description:{story:`Demonstrates \`globalAlpha\` on cached draw layers.

Three overlapping circles are drawn with different alpha values.
Use the slider to adjust the global alpha applied to all three layers.`,...f.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [operation, setOperation] = useState<GlobalCompositeOperation>("multiply");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const redCount = useRef(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const blueCount = useRef(0);
    return <div style={{
      padding: 20
    }}>
        <div style={{
        marginBottom: 12,
        fontFamily: "monospace",
        fontSize: 14
      }}>
          <label>
            globalCompositeOperation:{" "}
            <select value={operation} onChange={e => setOperation(e.target.value as GlobalCompositeOperation)} style={{
            fontSize: 14,
            padding: "4px 8px"
          }}>
              {COMPOSITE_OPERATIONS.map(op => <option key={op} value={op}>
                  {op}
                </option>)}
            </select>
          </label>
        </div>
        <div style={{
        display: "flex",
        gap: 16,
        fontFamily: "monospace",
        fontSize: 13,
        marginBottom: 8
      }}>
          <DrawCounter label="Red draws" countRef={redCount} color="#ef4444" />
          <DrawCounter label="Blue draws" countRef={blueCount} color="#3b82f6" />
        </div>
        <CanPlot style={{
        width: "100%",
        height: 400
      }} configuration={CONFIGURATION}>
          <FilledCircle cx={42} cy={50} radius={14} color="#ef4444" layer={100} drawCountRef={redCount} />
          <FilledCircle cx={58} cy={50} radius={14} color="#3b82f6" globalCompositeOperation={operation} layer={101} drawCountRef={blueCount} />
        </CanPlot>
      </div>;
  }
}`,...g.parameters?.docs?.source},description:{story:`Demonstrates \`globalCompositeOperation\` on cached draw layers.

A red circle is drawn first (source-over), then a blue circle is
composited on top using the selected operation. Change the dropdown
to see how each composite mode blends the two layers.`,...g.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [alpha, setAlpha] = useState(0.7);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [operation, setOperation] = useState<GlobalCompositeOperation>("screen");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const redCount = useRef(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const blueCount = useRef(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const greenCount = useRef(0);
    return <div style={{
      padding: 20
    }}>
        <div style={{
        marginBottom: 12,
        fontFamily: "monospace",
        fontSize: 14,
        display: "flex",
        gap: 24,
        flexWrap: "wrap"
      }}>
          <label>
            globalAlpha: <strong>{alpha.toFixed(2)}</strong>
            <input type="range" min={0} max={1} step={0.01} value={alpha} onChange={e => setAlpha(Number(e.target.value))} style={{
            marginLeft: 12,
            verticalAlign: "middle"
          }} />
          </label>
          <label>
            globalCompositeOperation:{" "}
            <select value={operation} onChange={e => setOperation(e.target.value as GlobalCompositeOperation)} style={{
            fontSize: 14,
            padding: "4px 8px"
          }}>
              {COMPOSITE_OPERATIONS.map(op => <option key={op} value={op}>
                  {op}
                </option>)}
            </select>
          </label>
        </div>
        <div style={{
        display: "flex",
        gap: 16,
        fontFamily: "monospace",
        fontSize: 13,
        marginBottom: 8
      }}>
          <DrawCounter label="Red draws" countRef={redCount} color="#ef4444" />
          <DrawCounter label="Blue draws" countRef={blueCount} color="#3b82f6" />
          <DrawCounter label="Green draws" countRef={greenCount} color="#22c55e" />
        </div>
        <CanPlot style={{
        width: "100%",
        height: 400
      }} configuration={CONFIGURATION}>
          <FilledCircle cx={40} cy={55} radius={14} color="#ef4444" layer={100} drawCountRef={redCount} />
          <FilledCircle cx={55} cy={55} radius={14} color="#3b82f6" globalAlpha={alpha} globalCompositeOperation={operation} layer={101} drawCountRef={blueCount} />
          <FilledCircle cx={47.5} cy={40} radius={14} color="#22c55e" globalAlpha={alpha} globalCompositeOperation={operation} layer={102} drawCountRef={greenCount} />
        </CanPlot>
      </div>;
  }
}`,...m.parameters?.docs?.source},description:{story:"Combines `globalAlpha` and `globalCompositeOperation` together.\n\nThree overlapping circles use a configurable composite mode and alpha.\nThis shows how both properties interact when applied to cached draw layers.",...m.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [alpha, setAlpha] = useState(0.6);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const uncachedCount = useRef(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const cachedCount = useRef(0);
    return <div style={{
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        <div style={{
        fontFamily: "monospace",
        fontSize: 14
      }}>
          <label>
            globalAlpha: <strong>{alpha.toFixed(2)}</strong>
            <input type="range" min={0} max={1} step={0.01} value={alpha} onChange={e => setAlpha(Number(e.target.value))} style={{
            marginLeft: 12,
            verticalAlign: "middle"
          }} />
          </label>
        </div>
        <div style={{
        display: "flex",
        gap: 32,
        fontFamily: "monospace",
        fontSize: 14
      }}>
          <DrawCounter label="Uncached runner calls" countRef={uncachedCount} color="#dc2626" />
          <DrawCounter label="Cached runner calls" countRef={cachedCount} color="#16a34a" />
        </div>
        <div style={{
        display: "flex",
        gap: 16
      }}>
          <div style={{
          flex: 1
        }}>
            <h4 style={{
            margin: "0 0 8px"
          }}>
              useDrawEffectNoCache (redraws every frame)
            </h4>
            <CanPlot style={{
            width: "100%",
            height: 350
          }} configuration={CONFIGURATION}>
              <UncachedGridWithAlpha globalAlpha={alpha} drawCountRef={uncachedCount} />
              <AnimatedCursor />
            </CanPlot>
          </div>
          <div style={{
          flex: 1
        }}>
            <h4 style={{
            margin: "0 0 8px"
          }}>
              useDrawEffect + globalAlpha (cached, no redraw)
            </h4>
            <CanPlot style={{
            width: "100%",
            height: 350
          }} configuration={CONFIGURATION}>
              <CachedGridWithAlpha globalAlpha={alpha} drawCountRef={cachedCount} />
              <AnimatedCursor />
            </CanPlot>
          </div>
        </div>
      </div>;
  }
}`,...y.parameters?.docs?.source},description:{story:`Shows that \`globalAlpha\` on a cached layer does **not** trigger a re-draw
of the layer's runner — only the bitmap compositing step changes.

- **Left (uncached)**: the heavy grid re-executes its drawing function on every
  frame *and* whenever \`globalAlpha\` changes. Watch the draw counter climb fast.
- **Right (cached)**: the heavy grid draws **once** into an offscreen canvas.
  Changing the alpha slider only changes how the cached bitmap is composited —
  the draw counter stays at **1** (or increases only on resize).

An animated cursor forces continuous redraws so you can see the difference in
draw counts clearly.`,...y.parameters?.docs?.description}}};const $=["GlobalAlpha","GlobalCompositeOperation","AlphaAndCompositeOperation","GlobalAlphaRedrawBehavior"];export{m as AlphaAndCompositeOperation,f as GlobalAlpha,y as GlobalAlphaRedrawBehavior,g as GlobalCompositeOperation,$ as __namedExportsOrder,X as default};

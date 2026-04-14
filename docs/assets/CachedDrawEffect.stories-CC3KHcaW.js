import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{C as l,u as v,a as C}from"./frameContext-CPE1qaN-.js";import"./LinePlot-8F1Hypik.js";import"./ScatterPlot-B-5nPIC8.js";import"./BarPlot-DwqPnfIm.js";import"./AreaPlot-CiQzJKn4.js";import"./SparklinePlot-B7OLqSCu.js";import"./tickUtils-DZ_v4sFH.js";import"./ChartAreaInteractions-C5oNoXpK.js";import{r as c}from"./iframe-D6q-LSwE.js";import"./CrossHair-L626TVgN.js";import"./SelectBox-BFLTh1BK.js";import"./AxisOverlay-Dkrt_R5f.js";import"./preload-helper-PPVm8Dsz.js";const G={component:l,parameters:{layout:"fullscreen"},tags:["autodocs"]},j=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],f={padding:{bottom:20,left:20,right:20,top:20},scales:j},b=Array.from({length:200},(a,e)=>({x:e/199*100,y:50+Math.sin(e/10)*30})),x=({label:a,countRef:e})=>{const[s,n]=c.useState(0);return c.useEffect(()=>{const r=setInterval(()=>n(e.current),200);return()=>clearInterval(r)},[e]),t.jsxs("span",{children:[a,": ",t.jsx("strong",{children:s})]})},S=({drawCountRef:a})=>(v("BOTTOM",({ctx:e,valToPos:s})=>{a.current++,e.save(),e.globalAlpha=.15;for(let n=0;n<=100;n+=2)for(let r=0;r<=100;r+=2){const i=s(n,"x","canvas"),o=s(r,"y","canvas");i==null||o==null||(e.beginPath(),e.arc(i,o,2,0,Math.PI*2),e.fillStyle=`hsl(${(n+r)*2}, 80%, 50%)`,e.fill())}e.restore()},[]),null),w=({drawCountRef:a})=>(C({layer:"BOTTOM",runner:({ctx:e,valToPos:s})=>{a.current++,e.save(),e.globalAlpha=.15;for(let n=0;n<=100;n+=2)for(let r=0;r<=100;r+=2){const i=s(n,"x","canvas"),o=s(r,"y","canvas");i==null||o==null||(e.beginPath(),e.arc(i,o,2,0,Math.PI*2),e.fillStyle=`hsl(${(n+r)*2}, 80%, 50%)`,e.fill())}e.restore()},deps:[]}),null),g=({speed:a})=>{const[e,s]=c.useState(50);return c.useEffect(()=>{const n=setInterval(()=>{s(50+Math.sin(Date.now()/a)*40)},16);return()=>clearInterval(n)},[]),v("TOP",({ctx:n,valToPos:r,clampYPosToChartArea:i})=>{const o=r(e,"x","canvas");if(o==null)return;const d=i(-1/0,"canvas"),m=i(1/0,"canvas");n.save(),n.beginPath(),n.moveTo(o,d),n.lineTo(o,m),n.strokeStyle="red",n.lineWidth=2,n.stroke(),n.restore()},[e]),null},O=()=>(C({layer:"MIDDLE",runner:({ctx:a,valToPos:e})=>{a.save(),a.beginPath(),a.strokeStyle="#2563eb",a.lineWidth=2;for(const s of b){const n=e(s.x,"x","canvas"),r=e(s.y,"y","canvas");n==null||r==null||a.lineTo(n,r)}a.stroke(),a.restore()},deps:[]}),null),h={render:()=>{const a=c.useRef(0),e=c.useRef(0);return t.jsxs("div",{style:{padding:20,display:"flex",flexDirection:"column",gap:12},children:[t.jsxs("div",{style:{display:"flex",gap:32,fontFamily:"monospace",fontSize:14},children:[t.jsx(x,{label:"Uncached draws",countRef:a}),t.jsx(x,{label:"Cached draws",countRef:e})]}),t.jsxs("div",{style:{display:"flex",gap:16},children:[t.jsxs("div",{style:{flex:1},children:[t.jsx("h4",{style:{margin:"0 0 8px"},children:"useDrawEffect (uncached)"}),t.jsxs(l,{style:{width:"100%",height:350},configuration:f,children:[t.jsx(S,{drawCountRef:a}),t.jsx(g,{speed:200})]})]}),t.jsxs("div",{style:{flex:1},children:[t.jsx("h4",{style:{margin:"0 0 8px"},children:"useCachedDrawEffect (cached)"}),t.jsxs(l,{style:{width:"100%",height:350},configuration:f,children:[t.jsx(w,{drawCountRef:e}),t.jsx(g,{speed:200})]})]})]})]})}},u={render:()=>{const a=["#2563eb","#dc2626","#16a34a","#9333ea","#ea580c"],[e,s]=c.useState(0),n=a[e%a.length];return t.jsxs("div",{style:{padding:20},children:[t.jsxs("button",{type:"button",onClick:()=>s(r=>r+1),style:{marginBottom:12,padding:"6px 16px",fontSize:14},children:["Change color (current: ",n,")"]}),t.jsx(l,{style:{width:"100%",height:350},configuration:f,children:t.jsx(I,{color:n})})]})}},I=({color:a})=>(C({layer:"MIDDLE",runner:({ctx:e,valToPos:s})=>{e.save(),e.beginPath(),e.strokeStyle=a,e.lineWidth=3;for(const n of b){const r=s(n.x,"x","canvas"),i=s(n.y,"y","canvas");r==null||i==null||e.lineTo(r,i)}e.stroke(),e.restore()},deps:[a]}),null),p={render:()=>t.jsxs("div",{style:{padding:20},children:[t.jsx("p",{style:{fontFamily:"monospace",fontSize:13,margin:"0 0 12px"},children:"Resize the browser to verify the cached layer re-renders on resize."}),t.jsxs(l,{style:{width:"100%",height:400},configuration:f,children:[t.jsx(O,{}),t.jsx(g,{speed:200})]})]})},R=()=>(C({layer:"TOP",runner:({ctx:a,valToPos:e,clampYPosToChartArea:s})=>{const n=s(-1/0,"canvas"),r=s(1/0,"canvas"),i=[{x0:0,x1:20,color:"#ef4444",alpha:.15},{x0:20,x1:40,color:"#f59e0b",alpha:.22},{x0:40,x1:60,color:"#22c55e",alpha:.45},{x0:60,x1:80,color:"#3b82f6",alpha:.72},{x0:80,x1:100,color:"#a855f7",alpha:.95}];a.save();for(const o of i){const d=e(o.x0,"x","canvas"),m=e(o.x1,"x","canvas");d==null||m==null||(a.globalAlpha=o.alpha,a.fillStyle=o.color,a.fillRect(d,n,m-d,r-n))}a.restore()},deps:[]}),null),y={render:()=>t.jsxs("div",{style:{padding:20},children:[t.jsx("p",{style:{fontFamily:"monospace",fontSize:13,margin:"0 0 12px"},children:"Cached alpha-blended layers: circle grid + sine line + translucent color bands + animated cursor."}),t.jsxs(l,{style:{width:"100%",height:400},configuration:f,children:[t.jsx(w,{drawCountRef:{current:0}}),t.jsx(O,{}),t.jsx(g,{speed:1e3}),t.jsx(R,{})]})]})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
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
        display: "flex",
        gap: 32,
        fontFamily: "monospace",
        fontSize: 14
      }}>
          <DrawCounter label="Uncached draws" countRef={uncachedCount} />
          <DrawCounter label="Cached draws" countRef={cachedCount} />
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
          }}>useDrawEffect (uncached)</h4>
            <CanPlot style={{
            width: "100%",
            height: 350
          }} configuration={CONFIGURATION}>
              <HeavyLayerUncached drawCountRef={uncachedCount} />
              <AnimatedCursor speed={200} />
            </CanPlot>
          </div>
          <div style={{
          flex: 1
        }}>
            <h4 style={{
            margin: "0 0 8px"
          }}>useCachedDrawEffect (cached)</h4>
            <CanPlot style={{
            width: "100%",
            height: 350
          }} configuration={CONFIGURATION}>
              <HeavyLayerCached drawCountRef={cachedCount} />
              <AnimatedCursor speed={200} />
            </CanPlot>
          </div>
        </div>
      </div>;
  }
}`,...h.parameters?.docs?.source},description:{story:`Compares cached vs uncached draw effects side-by-side.

Both charts have an identical heavy background layer (a grid of ~2500 circles)
and a rapidly animating cursor line that triggers ~60 redraws/sec.

- **Left (uncached)**: the heavy layer re-executes on every frame.
- **Right (cached)**: the heavy layer draws once; subsequent frames copy the bitmap.

Watch the draw counters to see the difference.`,...h.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const COLORS = ["#2563eb", "#dc2626", "#16a34a", "#9333ea", "#ea580c"];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [colorIdx, setColorIdx] = useState(0);
    const color = COLORS[colorIdx % COLORS.length];
    return <div style={{
      padding: 20
    }}>
        <button type="button" onClick={() => setColorIdx(i => i + 1)} style={{
        marginBottom: 12,
        padding: "6px 16px",
        fontSize: 14
      }}>
          Change color (current: {color})
        </button>
        <CanPlot style={{
        width: "100%",
        height: 350
      }} configuration={CONFIGURATION}>
          <CachedLine color={color} />
        </CanPlot>
      </div>;
  }
}`,...u.parameters?.docs?.source},description:{story:"Demonstrates that `useCachedDrawEffect` correctly re-draws\nwhen its deps change. Click the button to cycle through colors.",...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 20
  }}>
      <p style={{
      fontFamily: "monospace",
      fontSize: 13,
      margin: "0 0 12px"
    }}>
        Resize the browser to verify the cached layer re-renders on resize.
      </p>
      <CanPlot style={{
      width: "100%",
      height: 400
    }} configuration={CONFIGURATION}>
        <StaticLine />
        <AnimatedCursor speed={200} />
      </CanPlot>
    </div>
}`,...p.parameters?.docs?.source},description:{story:`A cached static line stays rendered while a fast-updating cursor
animates on top. The static line is drawn once and reused from cache.
Resize the browser to confirm the cached layer redraws on resize.`,...p.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 20
  }}>
      <p style={{
      fontFamily: "monospace",
      fontSize: 13,
      margin: "0 0 12px"
    }}>
        Cached alpha-blended layers: circle grid + sine line + translucent color bands + animated cursor.
      </p>
      <CanPlot style={{
      width: "100%",
      height: 400
    }} configuration={CONFIGURATION}>
        <HeavyLayerCached drawCountRef={{
        current: 0
      }} />
        <StaticLine />
        <AnimatedCursor speed={1000} />
        <AlphaOverlay />
      </CanPlot>
    </div>
}`,...y.parameters?.docs?.source},description:{story:`Cached layers with alpha transparency stacked together:
- BOTTOM: heavy circle grid (cached)
- MIDDLE: static sine line (cached)
- TOP: translucent color bands overlay (cached) + animated cursor (uncached)

Demonstrates that alpha-blended cached bitmaps composite correctly
onto the main canvas.`,...y.parameters?.docs?.description}}};const H=["CachedVsUncached","CachedWithDepsChange","CachedStaticWithAnimatedOverlay","CachedWithAlphaOverlay"];export{p as CachedStaticWithAnimatedOverlay,h as CachedVsUncached,y as CachedWithAlphaOverlay,u as CachedWithDepsChange,H as __namedExportsOrder,G as default};

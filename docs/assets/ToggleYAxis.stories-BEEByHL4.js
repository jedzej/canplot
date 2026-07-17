import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-Aps066pu.js";import{C as i}from"./frameContext-DY6mtHib.js";import{L as l}from"./LinePlot-Dz_NYnX4.js";import"./preload-helper-PPVm8Dsz.js";const g={component:i,parameters:{layout:"fullscreen"},tags:["autodocs"]},x=Array.from({length:50},(s,e)=>({x:e*2,y:50+Math.sin(e/3)*30+Math.cos(e/5)*10})),t={render:()=>{const[s,e]=r.useState(!0),o=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:s?{position:"left",size:50}:null,origin:"y",min:0,max:100}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("div",{style:{marginBottom:"12px"},children:n.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[n.jsx("input",{type:"checkbox",checked:s,onChange:a=>e(a.target.checked)}),"Show Y axis"]})}),n.jsx(i,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:o},children:n.jsx(l,{data:x,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"blue",lineWidth:2}})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [showYAxis, setShowYAxis] = useState(true);
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
      axis: showYAxis ? {
        position: "left",
        size: 50
      } : null,
      origin: "y",
      min: 0,
      max: 100
    }];
    return <div style={{
      padding: "20px"
    }}>
        <div style={{
        marginBottom: "12px"
      }}>
          <label style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px"
        }}>
            <input type="checkbox" checked={showYAxis} onChange={e => setShowYAxis(e.target.checked)} />
            Show Y axis
          </label>
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
          <LinePlot data={data} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "blue",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...t.parameters?.docs?.source}}};const y=["ToggleYAxis"];export{t as ToggleYAxis,y as __namedExportsOrder,g as default};

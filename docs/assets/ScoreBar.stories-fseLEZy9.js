import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-C5Ph9xAG.js";function n({label:e,value:t,max:n=100}){let i=Math.max(0,Math.min(100,t/n*100));return(0,r.jsxs)(`div`,{className:`cg-score`,children:[(0,r.jsx)(`span`,{className:`cg-score__label`,children:e}),(0,r.jsx)(`div`,{className:`cg-score__track`,role:`meter`,"aria-label":e,"aria-valuemin":0,"aria-valuemax":n,"aria-valuenow":t,children:(0,r.jsx)(`div`,{className:`cg-score__bar`,style:{width:`${i}%`}})}),(0,r.jsx)(`span`,{className:`cg-score__value`,children:t})]})}var r;function i(){return(i=e((()=>{r=t(),n.__docgenInfo={description:`Horizontal bar showing a score out of a maximum. Origin: the "1 € best buys" ranking.`,methods:[],displayName:`ScoreBar`,props:{label:{required:!0,tsType:{name:`string`},description:``},value:{required:!0,tsType:{name:`number`},description:``},max:{required:!1,tsType:{name:`number`},description:`Value that fills the bar completely. Defaults to 100.`,defaultValue:{value:`100`,computed:!1}}}}})))()}var a,o,s,c,l,u;function d(){return(d=e((()=>{i(),a=t(),o={title:`Components/Score bar`,component:n,tags:[`autodocs`],args:{label:`Spinach`,value:78},decorators:[e=>(0,a.jsx)(`div`,{style:{maxWidth:500},children:(0,a.jsx)(e,{})})]},s={},c={args:{label:`Lettuce`,value:12}},l={render:()=>(0,a.jsx)(`div`,{style:{display:`grid`,gap:8},children:[[`Spinach`,78],[`Broccoli`,64],[`Cabbage`,52],[`Carrot`,41]].map(([e,t])=>(0,a.jsx)(n,{label:e,value:t},e))})},u=[`Default`,`Low`,`Ranking`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Lettuce',
    value: 12
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 8
  }}>
      {[['Spinach', 78], ['Broccoli', 64], ['Cabbage', 52], ['Carrot', 41]].map(([l, v]) => <ScoreBar key={l} label={l as string} value={v as number} />)}
    </div>
}`,...l.parameters?.docs?.source}}}})))()}d();export{s as Default,c as Low,l as Ranking,u as __namedExportsOrder,o as default};
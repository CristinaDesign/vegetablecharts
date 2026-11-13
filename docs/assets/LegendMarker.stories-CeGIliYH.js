import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-Dg7KlS4W.js";function n({kind:e,label:t}){return(0,r.jsxs)(`span`,{className:`cg-legend`,children:[(0,r.jsx)(`i`,{className:e===`estimated`?`cg-legend__dot cg-legend__dot--est`:`cg-legend__dot`,"aria-hidden":`true`}),t]})}var r;function i(){return(i=e((()=>{r=t(),n.__docgenInfo={description:`Small dot plus label explaining a chart marker. Origin: the chart legend.`,methods:[],displayName:`LegendMarker`,props:{kind:{required:!0,tsType:{name:`union`,raw:`'official' | 'estimated'`,elements:[{name:`literal`,value:`'official'`},{name:`literal`,value:`'estimated'`}]},description:`solid = official data; estimated = dashed double ring.`},label:{required:!0,tsType:{name:`string`},description:``}}}})))()}var a,o,s,c,l,u;function d(){return(d=e((()=>{i(),a=t(),o={title:`Components/Legend marker`,component:n,tags:[`autodocs`],args:{kind:`official`,label:`Official price`}},s={},c={args:{kind:`estimated`,label:`Estimated price`}},l={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:22},children:[(0,a.jsx)(n,{kind:`official`,label:`Official price (MAPA)`}),(0,a.jsx)(n,{kind:`estimated`,label:`Estimated from product group`})]})},u=[`Official`,`Estimated`,`Legend`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'estimated',
    label: 'Estimated price'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 22
  }}>
      <LegendMarker kind="official" label="Official price (MAPA)" />
      <LegendMarker kind="estimated" label="Estimated from product group" />
    </div>
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as Estimated,l as Legend,s as Official,u as __namedExportsOrder,o as default};
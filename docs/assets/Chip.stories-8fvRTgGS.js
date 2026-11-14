import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-C5Ph9xAG.js";import{t as n}from"./Icon-DyszMRc6.js";import{t as r}from"./Icon-Cx6ryOxg.js";function i({tone:e=`outline`,icon:t,children:r}){return(0,a.jsxs)(`span`,{className:e===`outline`?`cg-chip`:`cg-chip cg-chip--${e}`,children:[t&&(0,a.jsx)(n,{name:t,size:16}),r]})}var a;function o(){return(o=e((()=>{r(),a=t(),i.__docgenInfo={description:`Small pill of text for a fact, a count or a short label. It is not clickable.
 The dashed tone is for provisional or estimated information, and the words must say so:
 the dashed line alone never carries the meaning.`,methods:[],displayName:`Chip`,props:{tone:{required:!1,tsType:{name:`union`,raw:`'outline' | 'solid' | 'dashed'`,elements:[{name:`literal`,value:`'outline'`},{name:`literal`,value:`'solid'`},{name:`literal`,value:`'dashed'`}]},description:`outline = a fact or a count. solid = a label that stands out. dashed = provisional or estimated.`,defaultValue:{value:`'outline'`,computed:!1}},icon:{required:!1,tsType:{name:`union`,raw:`keyof typeof icons`,elements:[{name:`literal`,value:`download`},{name:`literal`,value:`description`},{name:`literal`,value:`restaurant`},{name:`literal`,value:`shopping_cart`},{name:`literal`,value:`euro`},{name:`literal`,value:`bar_chart`},{name:`literal`,value:`scatter_plot`},{name:`literal`,value:`table_chart`},{name:`literal`,value:`search`},{name:`literal`,value:`filter_list`},{name:`literal`,value:`info`},{name:`literal`,value:`warning`},{name:`literal`,value:`error`},{name:`literal`,value:`check_circle`},{name:`literal`,value:`close`},{name:`literal`,value:`expand_more`},{name:`literal`,value:`light_mode`},{name:`literal`,value:`dark_mode`},{name:`literal`,value:`grass`},{name:`literal`,value:`help_outline`}]},description:`Optional icon shown before the words.`},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Short words. Wrap a number in <b> to show it larger, for example: <b>10</b> questions.`}}}})))()}var s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{o(),s=t(),c={title:`Components/Chip`,component:i,tags:[`autodocs`],args:{tone:`outline`,children:`Vegetables sold in Spain`},argTypes:{tone:{control:`inline-radio`,options:[`outline`,`solid`,`dashed`]}},parameters:{docs:{description:{component:`A small pill of text for a fact, a count or a short label. It is not clickable. If you need a clickable filter, that is a different component (not built yet).`}}}},l={},u={args:{tone:`solid`,children:`Try this`}},d={args:{tone:`dashed`,children:`Prototype · provisional data, July 2026 prices`}},f={args:{icon:`info`,children:`Prices in € per kg`}},p={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,s.jsxs)(i,{children:[(0,s.jsx)(`b`,{children:`10`}),` questions`]}),(0,s.jsxs)(i,{children:[(0,s.jsx)(`b`,{children:`4`}),` vegetables each`]}),(0,s.jsxs)(i,{children:[`about `,(0,s.jsx)(`b`,{children:`2`}),` minutes`]})]})},m={render:()=>(0,s.jsxs)(`div`,{style:{background:`var(--cg-color-panel)`,padding:24,borderRadius:16,display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,s.jsx)(i,{tone:`solid`,children:`New`}),(0,s.jsx)(i,{children:`July 2026`}),(0,s.jsx)(i,{tone:`dashed`,children:`Estimated`})]})},h=[`Outline`,`Solid`,`Dashed`,`WithIcon`,`WithNumbers`,`OnAPanel`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'solid',
    children: 'Try this'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'dashed',
    children: 'Prototype · provisional data, July 2026 prices'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'info',
    children: 'Prices in € per kg'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap'
  }}>
    <Chip><b>10</b> questions</Chip><Chip><b>4</b> vegetables each</Chip><Chip>about <b>2</b> minutes</Chip>
  </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    background: 'var(--cg-color-panel)',
    padding: 24,
    borderRadius: 16,
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap'
  }}>
    <Chip tone="solid">New</Chip><Chip>July 2026</Chip><Chip tone="dashed">Estimated</Chip>
  </div>
}`,...m.parameters?.docs?.source}}}})))()}g();export{d as Dashed,m as OnAPanel,l as Outline,u as Solid,f as WithIcon,p as WithNumbers,h as __namedExportsOrder,c as default};
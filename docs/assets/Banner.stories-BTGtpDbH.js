import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-Bez8akoh.js";import{t as r}from"./Icon-Ji4R9cME.js";import{t as i}from"./Icon-D5YfZlvW.js";function a({variant:e,title:t,children:n,onDismiss:i}){return(0,o.jsxs)(`div`,{className:`cg-banner cg-banner--${e}`,role:e===`error`?`alert`:`status`,children:[(0,o.jsx)(`span`,{className:`cg-banner__icon`,children:(0,o.jsx)(r,{name:s[e]})}),(0,o.jsxs)(`div`,{className:`cg-banner__body`,children:[t&&(0,o.jsx)(`strong`,{className:`cg-banner__title`,children:t}),(0,o.jsx)(`div`,{children:n})]}),i&&(0,o.jsx)(`button`,{type:`button`,className:`cg-banner__close`,onClick:i,"aria-label":`Dismiss message`,children:(0,o.jsx)(r,{name:`close`})})]})}var o,s;function c(){return(c=e((()=>{i(),o=t(),s={error:`error`,warning:`warning`,success:`check_circle`,info:`info`},a.__docgenInfo={description:`Message banner. Always shows an icon and words together, so the status never depends on colour alone.
 Errors are announced to screen readers immediately; the others politely.`,methods:[],displayName:`Banner`,props:{variant:{required:!0,tsType:{name:`union`,raw:`'error' | 'warning' | 'success' | 'info'`,elements:[{name:`literal`,value:`'error'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'info'`}]},description:``},title:{required:!1,tsType:{name:`string`},description:`Short heading. Optional, but recommended when the message has more than one sentence.`},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The message itself: say what happened and what to do next.`},onDismiss:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`If given, a close button appears. The page decides what happens on close.`}}}})))()}var l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{l=n(),c(),u=t(),d={title:`Components/Banner`,component:a,tags:[`autodocs`],args:{variant:`success`,children:`Prices updated for 27 vegetables.`}},f={args:{variant:`success`,title:`Data updated`,children:`Prices now reflect July 2026 averages in € per kilo.`}},p={args:{variant:`warning`,title:`Some prices are estimates`,children:`Six vegetables use an estimated price until wholesale data is connected.`}},m={args:{variant:`error`,title:`Could not load the data`,children:`The price list did not load. Check your connection and try again.`}},h={args:{variant:`info`,children:`Scores are calculated per 100 kcal, using 12 nutrients.`}},g={args:{variant:`warning`,children:`Estimated price.`}},_={render:e=>{let[t,n]=(0,l.useState)(!0);return t?(0,u.jsx)(a,{...e,variant:`success`,title:`Saved`,onDismiss:()=>n(!1),children:`Your selection was saved.`}):(0,u.jsx)(`button`,{onClick:()=>n(!0),children:`Show again`})}},v={render:()=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:12,maxWidth:640},children:[(0,u.jsx)(a,{variant:`success`,title:`Data updated`,children:`Prices now reflect July 2026 averages in € per kilo.`}),(0,u.jsx)(a,{variant:`warning`,title:`Some prices are estimates`,children:`Six vegetables use an estimated price until wholesale data is connected.`}),(0,u.jsx)(a,{variant:`error`,title:`Could not load the data`,children:`The price list did not load. Check your connection and try again.`}),(0,u.jsx)(a,{variant:`info`,children:`Scores are calculated per 100 kcal, using 12 nutrients.`})]})},y=[`Success`,`Warning`,`Error`,`Info`,`WithoutTitle`,`Dismissible`,`AllVariants`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Data updated',
    children: 'Prices now reflect July 2026 averages in € per kilo.'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Some prices are estimates',
    children: 'Six vegetables use an estimated price until wholesale data is connected.'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Could not load the data',
    children: 'The price list did not load. Check your connection and try again.'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'Scores are calculated per 100 kcal, using 12 nutrients.'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'Estimated price.'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return open ? <Banner {...args} variant="success" title="Saved" onDismiss={() => setOpen(false)}>Your selection was saved.</Banner> : <button onClick={() => setOpen(true)}>Show again</button>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    maxWidth: 640
  }}>
      <Banner variant="success" title="Data updated">Prices now reflect July 2026 averages in € per kilo.</Banner>
      <Banner variant="warning" title="Some prices are estimates">Six vegetables use an estimated price until wholesale data is connected.</Banner>
      <Banner variant="error" title="Could not load the data">The price list did not load. Check your connection and try again.</Banner>
      <Banner variant="info">Scores are calculated per 100 kcal, using 12 nutrients.</Banner>
    </div>
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as AllVariants,_ as Dismissible,m as Error,h as Info,f as Success,p as Warning,g as WithoutTitle,y as __namedExportsOrder,d as default};
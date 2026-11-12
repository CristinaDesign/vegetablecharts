import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-sD8bnTJQ.js";import{n as r,t as i}from"./Icon-CxTbwjdg.js";function a(){return(a=e((()=>{r()})))()}function o({variant:e,title:t,children:n,onDismiss:r}){return(0,s.jsxs)(`div`,{className:`cg-banner cg-banner--${e}`,role:e===`error`?`alert`:`status`,children:[(0,s.jsx)(`span`,{className:`cg-banner__icon`,children:(0,s.jsx)(i,{name:c[e]})}),(0,s.jsxs)(`div`,{className:`cg-banner__body`,children:[t&&(0,s.jsx)(`strong`,{className:`cg-banner__title`,children:t}),(0,s.jsx)(`div`,{children:n})]}),r&&(0,s.jsx)(`button`,{type:`button`,className:`cg-banner__close`,onClick:r,"aria-label":`Dismiss message`,children:(0,s.jsx)(i,{name:`close`})})]})}var s,c;function l(){return(l=e((()=>{a(),s=t(),c={error:`error`,warning:`warning`,success:`check_circle`,info:`info`},o.__docgenInfo={description:`Message banner. Always shows an icon and words together, so the status never depends on colour alone.
 Errors are announced to screen readers immediately; the others politely.`,methods:[],displayName:`Banner`,props:{variant:{required:!0,tsType:{name:`union`,raw:`'error' | 'warning' | 'success' | 'info'`,elements:[{name:`literal`,value:`'error'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'info'`}]},description:``},title:{required:!1,tsType:{name:`string`},description:`Short heading. Optional, but recommended when the message has more than one sentence.`},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The message itself: say what happened and what to do next.`},onDismiss:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`If given, a close button appears. The page decides what happens on close.`}}}})))()}var u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{u=n(),l(),d=t(),f={title:`Components/Banner`,component:o,tags:[`autodocs`],args:{variant:`success`,children:`Prices updated for 27 vegetables.`}},p={args:{variant:`success`,title:`Data updated`,children:`Prices now reflect July 2026 averages in € per kilo.`}},m={args:{variant:`warning`,title:`Some prices are estimates`,children:`Six vegetables use an estimated price until wholesale data is connected.`}},h={args:{variant:`error`,title:`Could not load the data`,children:`The price list did not load. Check your connection and try again.`}},g={args:{variant:`info`,children:`Scores are calculated per 100 kcal, using 12 nutrients.`}},_={args:{variant:`warning`,children:`Estimated price.`}},v={render:e=>{let[t,n]=(0,u.useState)(!0);return t?(0,d.jsx)(o,{...e,variant:`success`,title:`Saved`,onDismiss:()=>n(!1),children:`Your selection was saved.`}):(0,d.jsx)(`button`,{onClick:()=>n(!0),children:`Show again`})}},y={render:()=>(0,d.jsxs)(`div`,{style:{display:`grid`,gap:12,maxWidth:640},children:[(0,d.jsx)(o,{variant:`success`,title:`Data updated`,children:`Prices now reflect July 2026 averages in € per kilo.`}),(0,d.jsx)(o,{variant:`warning`,title:`Some prices are estimates`,children:`Six vegetables use an estimated price until wholesale data is connected.`}),(0,d.jsx)(o,{variant:`error`,title:`Could not load the data`,children:`The price list did not load. Check your connection and try again.`}),(0,d.jsx)(o,{variant:`info`,children:`Scores are calculated per 100 kcal, using 12 nutrients.`})]})},b=[`Success`,`Warning`,`Error`,`Info`,`WithoutTitle`,`Dismissible`,`AllVariants`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Data updated',
    children: 'Prices now reflect July 2026 averages in € per kilo.'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Some prices are estimates',
    children: 'Six vegetables use an estimated price until wholesale data is connected.'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Could not load the data',
    children: 'The price list did not load. Check your connection and try again.'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'Scores are calculated per 100 kcal, using 12 nutrients.'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'Estimated price.'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return open ? <Banner {...args} variant="success" title="Saved" onDismiss={() => setOpen(false)}>Your selection was saved.</Banner> : <button onClick={() => setOpen(true)}>Show again</button>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as AllVariants,v as Dismissible,h as Error,g as Info,p as Success,m as Warning,_ as WithoutTitle,b as __namedExportsOrder,f as default};
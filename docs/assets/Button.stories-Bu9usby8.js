import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-Dg7KlS4W.js";function n({variant:e=`primary`,className:t=``,...n}){return(0,r.jsx)(`button`,{type:`button`,className:`cg-btn cg-btn--${e} ${t}`,...n})}var r;function i(){return(i=e((()=>{r=t(),n.__docgenInfo={description:`Button. Note: the prototype had no standalone button, so this is derived from its
 card/pill style (2px ink border, brown ink, leaf-green focus ring). Review it.`,methods:[],displayName:`Button`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'link'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'link'`}]},description:`primary = the one main action; secondary = everything else; link = low-emphasis text action.`,defaultValue:{value:`'primary'`,computed:!1}},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}})))()}var a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{i(),a=t(),o={title:`Components/Button`,component:n,tags:[`autodocs`],args:{children:`Show all data as a table`}},s={args:{variant:`primary`}},c={args:{variant:`secondary`}},l={args:{variant:`link`}},u={args:{variant:`primary`,disabled:!0}},d={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,a.jsx)(n,{variant:`primary`,children:`Primary`}),(0,a.jsx)(n,{variant:`secondary`,children:`Secondary`}),(0,a.jsx)(n,{variant:`link`,children:`Link`}),(0,a.jsx)(n,{disabled:!0,children:`Disabled`})]})},f=[`Primary`,`Secondary`,`Link`,`Disabled`,`AllVariants`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'link'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="link">Link</Button>
      <Button disabled>Disabled</Button>
    </div>
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as AllVariants,u as Disabled,l as Link,s as Primary,c as Secondary,f as __namedExportsOrder,o as default};
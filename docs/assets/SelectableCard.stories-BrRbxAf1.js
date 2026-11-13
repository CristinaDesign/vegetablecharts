import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-NyZvwzGo.js";function r({title:e,description:t,selected:n,onSelect:r}){return(0,i.jsxs)(`button`,{type:`button`,className:`cg-card`,"aria-pressed":n,onClick:r,children:[(0,i.jsx)(`b`,{children:e}),t&&(0,i.jsx)(`span`,{children:t})]})}var i;function a(){return(a=e((()=>{i=t(),r.__docgenInfo={description:`Card you pick one of. Selected = filled and fully opaque; unselected = faded outline.
 Origin: the six variable cards above the chart.`,methods:[],displayName:`SelectableCard`,props:{title:{required:!0,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},selected:{required:!0,tsType:{name:`boolean`},description:``},onSelect:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})))()}var o,s,c,l,u,d,f;function p(){return(p=e((()=>{o=n(),a(),s=t(),c={title:`Components/Selectable card`,component:r,tags:[`autodocs`],args:{title:`Protein`,description:`grams per 100 kcal`,selected:!1,onSelect:()=>{}},decorators:[e=>(0,s.jsx)(`div`,{style:{maxWidth:200},children:(0,s.jsx)(e,{})})]},l={},u={args:{selected:!0}},d={decorators:[],render:()=>{let e=[`Nutrient density`,`Protein`,`Fiber`,`Vitamin C`],[t,n]=(0,o.useState)(e[0]);return(0,s.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(4, 180px)`,gap:20},children:e.map(e=>(0,s.jsx)(r,{title:e,description:`per 100 kcal`,selected:t===e,onSelect:()=>n(e)},e))})}},f=[`Unselected`,`Selected`,`Group`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  decorators: [],
  render: () => {
    const items = ['Nutrient density', 'Protein', 'Fiber', 'Vitamin C'];
    const [sel, setSel] = useState(items[0]);
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 180px)',
      gap: 20
    }}>
        {items.map(t => <SelectableCard key={t} title={t} description="per 100 kcal" selected={sel === t} onSelect={() => setSel(t)} />)}
      </div>;
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as Group,u as Selected,l as Unselected,f as __namedExportsOrder,c as default};
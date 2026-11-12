import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-D6HGhrje.js";function r({label:e,options:t,value:n,onChange:r}){return(0,i.jsx)(`div`,{className:`vc-seg`,role:`radiogroup`,"aria-label":e,children:t.map(e=>(0,i.jsx)(`button`,{type:`button`,role:`radio`,"aria-checked":e.value===n,onClick:()=>r(e.value),children:e.label},e.value))})}var i;function a(){return(a=e((()=>{i=t(),r.__docgenInfo={description:`Pill-shaped choice between a few options; exactly one is always selected.
 Origin: the "Edible part / Whole, as bought" price switch above the chart.`,methods:[],displayName:`SegmentedControl`,props:{label:{required:!0,tsType:{name:`string`},description:`Describes the choice for screen readers, e.g. "Price basis".`},options:{required:!0,tsType:{name:`Array`,elements:[{name:`SegmentedOption`,elements:[{name:`T`}],raw:`SegmentedOption<T>`}],raw:`SegmentedOption<T>[]`},description:``},value:{required:!0,tsType:{name:`T`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: T) => void`,signature:{arguments:[{type:{name:`T`},name:`value`}],return:{name:`void`}}},description:``}}}})))()}var o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{o=n(),a(),s=t(),c={title:`Components/Segmented control`,component:r,tags:[`autodocs`],args:{label:`Price basis`,options:[{value:`edible`,label:`Edible part`},{value:`bought`,label:`Whole, as bought`}],value:`edible`,onChange:()=>{}}},l={},u={args:{value:`bought`}},d={args:{options:[{value:`a`,label:`Day`},{value:`b`,label:`Week`},{value:`c`,label:`Month`}],value:`b`}},f={render:e=>{let[t,n]=(0,o.useState)(`edible`);return(0,s.jsx)(r,{...e,value:t,onChange:n})}},p=[`FirstSelected`,`SecondSelected`,`ThreeOptions`,`Interactive`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'bought'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'a',
      label: 'Day'
    }, {
      value: 'b',
      label: 'Week'
    }, {
      value: 'c',
      label: 'Month'
    }],
    value: 'b'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [v, setV] = useState('edible');
    return <SegmentedControl {...args} value={v} onChange={setV} />;
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{l as FirstSelected,f as Interactive,u as SecondSelected,d as ThreeOptions,p as __namedExportsOrder,c as default};
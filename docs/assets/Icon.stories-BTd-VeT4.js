import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-NyZvwzGo.js";import{a as n,i as r,n as i,r as a,t as o}from"./Icon-CFFJmd-p.js";var s,c,l,u,d,f,p;function m(){return(m=e((()=>{i(),n(),s=t(),c=Object.keys(r),l={title:`Components/Icon`,component:o,tags:[`autodocs`],args:{name:`download`},argTypes:{name:{control:`select`,options:c}}},u={},d={render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:[16,24,32].map(e=>(0,s.jsxs)(`span`,{style:{textAlign:`center`},children:[(0,s.jsx)(o,{name:`restaurant`,size:e}),(0,s.jsx)(`br`,{}),(0,s.jsxs)(`code`,{children:[e,`px`]})]},e))})},f={name:`All icons (24px)`,render:()=>(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`p`,{style:{maxWidth:620,marginTop:0},children:[c.length,` icons from Material Design (outlined style), each on a 24 × 24 px grid and shown here at the default size of 24 px. Icons take the colour of the text around them. Use the name shown under each icon when asking for it in code.`]}),(0,s.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(130px, 1fr))`,gap:16},children:c.map(e=>(0,s.jsxs)(`div`,{style:{display:`grid`,justifyItems:`center`,gap:6,padding:12,border:`1px solid var(--cg-color-panel)`,borderRadius:8},children:[(0,s.jsx)(o,{name:e}),(0,s.jsx)(`b`,{style:{fontSize:14},children:a[e]}),(0,s.jsx)(`code`,{children:e})]},e))})]})},p=[`Default`,`Sizes`,`Gallery`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center'
  }}>
      {[16, 24, 32].map(s => <span key={s} style={{
      textAlign: 'center'
    }}><Icon name="restaurant" size={s} /><br /><code>{s}px</code></span>)}
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'All icons (24px)',
  render: () => <div>
      <p style={{
      maxWidth: 620,
      marginTop: 0
    }}>
        {names.length} icons from Material Design (outlined style), each on a 24 × 24 px grid and shown here at the default size of 24 px.
        Icons take the colour of the text around them. Use the name shown under each icon when asking for it in code.
      </p>
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
      gap: 16
    }}>
        {names.map(n => <div key={n} style={{
        display: 'grid',
        justifyItems: 'center',
        gap: 6,
        padding: 12,
        border: '1px solid var(--cg-color-panel)',
        borderRadius: 8
      }}>
            <Icon name={n} />
            <b style={{
          fontSize: 14
        }}>{iconLabels[n]}</b>
            <code>{n}</code>
          </div>)}
      </div>
    </div>
}`,...f.parameters?.docs?.source}}}})))()}m();export{u as Default,f as Gallery,d as Sizes,p as __namedExportsOrder,l as default};
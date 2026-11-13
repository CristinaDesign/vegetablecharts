import type { Meta, StoryObj } from '@storybook/react-vite'
import { ramps, semantic, components } from './colorMap'

const sw = (v: string, size = 40) => ({ width: size, height: size, borderRadius: 8, border: '1px solid var(--cg-color-border-soft)', background: `var(${v})`, flex: 'none' } as const)
const th = { textAlign: 'left', padding: '6px 10px', fontSize: 13 } as const
const td = { padding: '6px 10px', borderBottom: '1px solid var(--cg-color-panel)', fontSize: 14, verticalAlign: 'middle' } as const

function Primitives() {
  return (
    <div style={{ display: 'grid', gap: 28, maxWidth: 1000 }}>
      <p style={{ margin: 0, maxWidth: 70 + 'ch' }}>
        The raw palette. Every colour that exists, with a number and no meaning attached. Higher number means darker. Values are hex.
        <b> In use</b> steps are the colours the interface uses today. <b>Spare</b> steps are interpolated so each ramp is complete; they have not been contrast-tested yet.
        Components never use these directly.
      </p>
      {Object.entries(ramps).map(([name, steps]) => (
        <section key={name}>
          <h3 style={{ margin: '0 0 8px' }}>{name}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(92px, 1fr))', gap: 8 }}>
            {steps.map(([step, hex, used]) => (
              <div key={step}>
                <div style={{ ...sw(`--cg-${name}-${step}`, 56), width: '100%' }} />
                <b style={{ display: 'block', fontSize: 14 }}>{name}-{step}</b>
                <code style={{ fontSize: 12 }}>{hex}</code>
                <div style={{ fontSize: 12 }}>{used ? 'in use' : 'spare'}</div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

const primOf = (sem: string, mode: 'light' | 'dark') => semantic[sem][mode]

function Semantic() {
  return (
    <div style={{ display: 'grid', gap: 16, maxWidth: 900 }}>
      <p style={{ margin: 0, maxWidth: 70 + 'ch' }}>What a colour is for. Each role points at a primitive; light and dark point at different ones, so dark mode is a re-mapping and not new colours.</p>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead><tr style={{ background: 'var(--cg-table-header-bg)', color: 'var(--cg-table-header-text)' }}>
          <th style={th}>Role</th><th style={th}>Used for</th><th style={th}>Light uses</th><th style={th}>Dark uses</th></tr></thead>
        <tbody>
          {Object.entries(semantic).map(([role, s]) => (
            <tr key={role}>
              <td style={td}><code>--cg-color-{role}</code></td><td style={td}>{s.desc}</td>
              <td style={td}><span style={{ display: 'flex', gap: 8, alignItems: 'center' }}><i style={sw(`--cg-${s.light}`, 20)} />{s.light}</span></td>
              <td style={td}><span style={{ display: 'flex', gap: 8, alignItems: 'center' }}><i style={sw(`--cg-${s.dark}`, 20)} />{s.dark}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ComponentColours() {
  return (
    <div style={{ display: 'grid', gap: 28, maxWidth: 900 }}>
      <p style={{ margin: 0, maxWidth: 70 + 'ch' }}>Colours for one component. Each points at a semantic role, so they follow the theme without any dark-mode overrides. Add one only when a component needs a colour that must change on its own.</p>
      {components.map((c) => (
        <section key={c.key}>
          <h3 style={{ margin: '0 0 8px' }}>{c.label}</h3>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead><tr style={{ background: 'var(--cg-table-header-bg)', color: 'var(--cg-table-header-text)' }}>
              <th style={th}>Component token</th><th style={th}>Semantic role</th><th style={th}>Light</th><th style={th}>Dark</th></tr></thead>
            <tbody>
              {c.rows.map((r) => (
                <tr key={r.part}>
                  <td style={td}><code>--cg-{c.key}-{r.part}</code></td><td style={td}><code>{r.sem}</code></td>
                  <td style={td}><span style={{ display: 'flex', gap: 8, alignItems: 'center' }}><i style={sw(`--cg-${primOf(r.sem, 'light')}`, 20)} />{primOf(r.sem, 'light')}</span></td>
                  <td style={td}><span style={{ display: 'flex', gap: 8, alignItems: 'center' }}><i style={sw(`--cg-${primOf(r.sem, 'dark')}`, 20)} />{primOf(r.sem, 'dark')}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </div>
  )
}

const meta = { title: 'Foundations/Colour', parameters: { layout: 'padded' } } satisfies Meta
export default meta
export const Primitive: StoryObj = { name: '1. Primitive', render: () => <Primitives /> }
export const SemanticRoles: StoryObj = { name: '2. Semantic', render: () => <Semantic /> }
export const Component: StoryObj = { name: '3. Component', render: () => <ComponentColours /> }

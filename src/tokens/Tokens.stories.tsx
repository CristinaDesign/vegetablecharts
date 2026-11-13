import type { Meta, StoryObj } from '@storybook/react-vite'

const colors: [string, string][] = [
  ['--cg-color-bg', 'Page background'], ['--cg-color-panel', 'Raised surface / selected'], ['--cg-color-line', 'Subtle strokes'],
  ['--cg-color-ink', 'Primary text and borders'], ['--cg-color-ink-2', 'Secondary text'], ['--cg-color-muted', 'Inactive text'],
  ['--cg-color-accent', 'Vivid green: focus and data'], ['--cg-color-on-ink', 'Text on ink fills'], ['--cg-color-border-soft', 'Soft border'], ['--cg-color-header', 'Dark header band'], ['--cg-color-on-header', 'Text on header band'],
  ['--cg-color-error', 'Error: icons, borders'], ['--cg-color-warning', 'Warning: icons, borders'], ['--cg-color-success', 'Success: icons, borders'],
  ['--cg-color-error-text', 'Error: text'], ['--cg-color-warning-text', 'Warning: text'], ['--cg-color-success-text', 'Success: text'],
  ['--cg-color-error-bg', 'Error tint'], ['--cg-color-warning-bg', 'Warning tint'], ['--cg-color-success-bg', 'Success tint'],
]
const spaces = ['--cg-space-1', '--cg-space-2', '--cg-space-3', '--cg-space-4', '--cg-space-5', '--cg-space-6']
const texts: [string, string][] = [['--cg-text-sm', '14'], ['--cg-text-md', '16'], ['--cg-text-lg', '18'], ['--cg-text-xl', '20'], ['--cg-text-title', '24']]

function Tokens() {
  return (
    <div style={{ display: 'grid', gap: 40, maxWidth: 900 }}>
      <section>
        <h2>Colour</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
          {colors.map(([v, d]) => (
            <div key={v}>
              <div style={{ height: 64, borderRadius: 8, background: `var(${v})`, border: '2px solid var(--cg-color-ink)' }} />
              <b>{d}</b><br /><code>{v}</code>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>Typography</h2>
        <p style={{ fontFamily: 'var(--cg-font-display)', fontSize: 24, margin: 0 }}>Display: Alegreya Sans, for headings and interface</p>
        <p style={{ fontFamily: 'var(--cg-font-data)', fontSize: 24, margin: '8px 0' }}>Data: Alegreya, for numbers and chart text 0123456789</p>
        {texts.map(([v, px]) => <div key={v} style={{ fontSize: `var(${v})` }}>{px}px <code>{v}</code></div>)}
      </section>
      <section>
        <h2>Spacing</h2>
        {spaces.map((v) => (
          <div key={v} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
            <div style={{ width: `var(${v})`, height: 16, background: 'var(--cg-color-accent)' }} /><code>{v}</code>
          </div>
        ))}
      </section>
      <section>
        <h2>Shape and elevation</h2>
        <div style={{ display: 'flex', gap: 24 }}>
          {['--cg-radius-sm', '--cg-radius-lg', '--cg-radius-pill'].map((v) => (
            <div key={v} style={{ textAlign: 'center' }}>
              <div style={{ width: 96, height: 56, border: '2px solid var(--cg-color-ink)', borderRadius: `var(${v})` }} /><code>{v}</code>
            </div>
          ))}
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 96, height: 56, borderRadius: 8, background: 'var(--cg-color-bg)', boxShadow: 'var(--cg-shadow-raised)' }} /><code>--cg-shadow-raised</code>
          </div>
        </div>
      </section>
    </div>
  )
}

const meta = { title: 'Foundations/Tokens', component: Tokens, parameters: { layout: 'padded' } } satisfies Meta<typeof Tokens>
export default meta
export const Overview: StoryObj<typeof meta> = {}

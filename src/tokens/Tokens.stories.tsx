import type { Meta, StoryObj } from '@storybook/react-vite'

const colors: [string, string][] = [
  ['--vc-color-bg', 'Page background'], ['--vc-color-panel', 'Raised surface / selected'], ['--vc-color-line', 'Subtle strokes'],
  ['--vc-color-ink', 'Primary text and borders'], ['--vc-color-ink-2', 'Secondary text'], ['--vc-color-muted', 'Inactive text'],
  ['--vc-color-accent', 'Leaf green: focus and data'], ['--vc-color-on-ink', 'Text on ink fills'],
]
const spaces = ['--vc-space-1', '--vc-space-2', '--vc-space-3', '--vc-space-4', '--vc-space-5', '--vc-space-6']
const texts: [string, string][] = [['--vc-text-sm', '14'], ['--vc-text-md', '16'], ['--vc-text-lg', '18'], ['--vc-text-xl', '20'], ['--vc-text-title', '24']]

function Tokens() {
  return (
    <div style={{ display: 'grid', gap: 40, maxWidth: 900 }}>
      <section>
        <h2>Colour</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
          {colors.map(([v, d]) => (
            <div key={v}>
              <div style={{ height: 64, borderRadius: 8, background: `var(${v})`, border: '2px solid var(--vc-color-ink)' }} />
              <b>{d}</b><br /><code>{v}</code>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>Typography</h2>
        <p style={{ fontFamily: 'var(--vc-font-display)', fontSize: 24, margin: 0 }}>Display: Alegreya Sans, for headings and interface</p>
        <p style={{ fontFamily: 'var(--vc-font-data)', fontSize: 24, margin: '8px 0' }}>Data: Alegreya, for numbers and chart text 0123456789</p>
        {texts.map(([v, px]) => <div key={v} style={{ fontSize: `var(${v})` }}>{px}px <code>{v}</code></div>)}
      </section>
      <section>
        <h2>Spacing</h2>
        {spaces.map((v) => (
          <div key={v} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
            <div style={{ width: `var(${v})`, height: 16, background: 'var(--vc-color-accent)' }} /><code>{v}</code>
          </div>
        ))}
      </section>
      <section>
        <h2>Shape and elevation</h2>
        <div style={{ display: 'flex', gap: 24 }}>
          {['--vc-radius-sm', '--vc-radius-lg', '--vc-radius-pill'].map((v) => (
            <div key={v} style={{ textAlign: 'center' }}>
              <div style={{ width: 96, height: 56, border: '2px solid var(--vc-color-ink)', borderRadius: `var(${v})` }} /><code>{v}</code>
            </div>
          ))}
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 96, height: 56, borderRadius: 8, background: 'var(--vc-color-bg)', boxShadow: 'var(--vc-shadow-raised)' }} /><code>--vc-shadow-raised</code>
          </div>
        </div>
      </section>
    </div>
  )
}

const meta = { title: 'Foundations/Tokens', component: Tokens, parameters: { layout: 'padded' } } satisfies Meta<typeof Tokens>
export default meta
export const Overview: StoryObj<typeof meta> = {}

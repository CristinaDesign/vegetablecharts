import type { Meta, StoryObj } from '@storybook/react-vite'
import { Icon } from './Icon'
import { icons, iconLabels, type IconName } from './icons'

const names = Object.keys(icons) as IconName[]

const meta = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: { name: 'download' },
  argTypes: { name: { control: 'select', options: names } },
} satisfies Meta<typeof Icon>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      {[16, 24, 32].map((s) => <span key={s} style={{ textAlign: 'center' }}><Icon name="restaurant" size={s} /><br /><code>{s}px</code></span>)}
    </div>
  ),
}
export const Gallery: Story = {
  name: 'All icons (24px)',
  render: () => (
    <div>
      <p style={{ maxWidth: 620, marginTop: 0 }}>
        {names.length} icons from Material Design (outlined style), each on a 24 × 24 px grid and shown here at the default size of 24 px.
        Icons take the colour of the text around them. Use the name shown under each icon when asking for it in code.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: 16 }}>
        {names.map((n) => (
          <div key={n} style={{ display: 'grid', justifyItems: 'center', gap: 6, padding: 12, border: '1px solid var(--cg-color-panel)', borderRadius: 8 }}>
            <Icon name={n} />
            <b style={{ fontSize: 14 }}>{iconLabels[n]}</b>
            <code>{n}</code>
          </div>
        ))}
      </div>
    </div>
  ),
}

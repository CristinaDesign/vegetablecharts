import type { Meta, StoryObj } from '@storybook/react-vite'
import { Chip } from './Chip'

const meta = { title: 'Components/Chip', component: Chip, tags: ['autodocs'],
  args: { tone: 'outline', children: 'Vegetables sold in Spain' },
  argTypes: { tone: { control: 'inline-radio', options: ['outline', 'solid', 'dashed'] } },
  parameters: { docs: { description: { component: 'A small pill of text for a fact, a count or a short label. It is not clickable. If you need a clickable filter, that is a different component (not built yet).' } } },
} satisfies Meta<typeof Chip>
export default meta
type Story = StoryObj<typeof meta>
export const Outline: Story = {}
export const Solid: Story = { args: { tone: 'solid', children: 'Try this' } }
export const Dashed: Story = { args: { tone: 'dashed', children: 'Prototype · provisional data, July 2026 prices' } }
export const WithIcon: Story = { args: { icon: 'info', children: 'Prices in € per kg' } }
export const WithNumbers: Story = { render: () => (
  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
    <Chip><b>10</b> questions</Chip><Chip><b>4</b> vegetables each</Chip><Chip>about <b>2</b> minutes</Chip>
  </div>) }
export const OnAPanel: Story = { render: () => (
  <div style={{ background: 'var(--cg-color-panel)', padding: 24, borderRadius: 16, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
    <Chip tone="solid">New</Chip><Chip>July 2026</Chip><Chip tone="dashed">Estimated</Chip>
  </div>) }

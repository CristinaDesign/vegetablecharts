import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Select } from './Select'

const options = [
  { value: 'score', label: 'Nutrient density' }, { value: 'protein', label: 'Protein' },
  { value: 'fiber', label: 'Fiber' }, { value: 'vitc', label: 'Vitamin C' },
]
const meta = {
  title: 'Components/Select', component: Select, tags: ['autodocs'],
  args: { label: 'Variable on the horizontal axis', options, value: 'score', onChange: () => {} },
  decorators: [(Story) => <div style={{ maxWidth: 320 }}><Story /></div>],
} satisfies Meta<typeof Select>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
export const Disabled: Story = { args: { disabled: true } }
export const Interactive: Story = {
  render: (args) => { const [v, setV] = useState('score'); return <Select {...args} value={v} onChange={setV} /> },
}

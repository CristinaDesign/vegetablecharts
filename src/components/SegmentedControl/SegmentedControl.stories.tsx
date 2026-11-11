import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { SegmentedControl } from './SegmentedControl'

const options = [
  { value: 'edible', label: 'Edible part' },
  { value: 'bought', label: 'Whole, as bought' },
]

const meta = {
  title: 'Components/Segmented control',
  component: SegmentedControl,
  tags: ['autodocs'],
  args: { label: 'Price basis', options, value: 'edible', onChange: () => {} },
} satisfies Meta<typeof SegmentedControl>
export default meta
type Story = StoryObj<typeof meta>

export const FirstSelected: Story = {}
export const SecondSelected: Story = { args: { value: 'bought' } }
export const ThreeOptions: Story = {
  args: { options: [{ value: 'a', label: 'Day' }, { value: 'b', label: 'Week' }, { value: 'c', label: 'Month' }], value: 'b' },
}
export const Interactive: Story = {
  render: (args) => {
    const [v, setV] = useState('edible')
    return <SegmentedControl {...args} value={v} onChange={setV} />
  },
}

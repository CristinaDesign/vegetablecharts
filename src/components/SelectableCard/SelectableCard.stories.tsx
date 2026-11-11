import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { SelectableCard } from './SelectableCard'

const meta = {
  title: 'Components/Selectable card', component: SelectableCard, tags: ['autodocs'],
  args: { title: 'Protein', description: 'grams per 100 kcal', selected: false, onSelect: () => {} },
  decorators: [(Story) => <div style={{ maxWidth: 200 }}><Story /></div>],
} satisfies Meta<typeof SelectableCard>
export default meta
type Story = StoryObj<typeof meta>
export const Unselected: Story = {}
export const Selected: Story = { args: { selected: true } }
export const Group: Story = {
  decorators: [],
  render: () => {
    const items = ['Nutrient density', 'Protein', 'Fiber', 'Vitamin C']
    const [sel, setSel] = useState(items[0])
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 180px)', gap: 20 }}>
        {items.map((t) => <SelectableCard key={t} title={t} description="per 100 kcal" selected={sel === t} onSelect={() => setSel(t)} />)}
      </div>
    )
  },
}

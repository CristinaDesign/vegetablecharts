import type { Meta, StoryObj } from '@storybook/react-vite'
import { LegendMarker } from './LegendMarker'

const meta = { title: 'Components/Legend marker', component: LegendMarker, tags: ['autodocs'],
  args: { kind: 'official', label: 'Official price' } } satisfies Meta<typeof LegendMarker>
export default meta
type Story = StoryObj<typeof meta>
export const Official: Story = {}
export const Estimated: Story = { args: { kind: 'estimated', label: 'Estimated price' } }
export const Legend: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 22 }}>
      <LegendMarker kind="official" label="Official price (MAPA)" />
      <LegendMarker kind="estimated" label="Estimated from product group" />
    </div>
  ),
}

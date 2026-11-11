import type { Meta, StoryObj } from '@storybook/react-vite'
import { ScoreBar } from './ScoreBar'

const meta = { title: 'Components/Score bar', component: ScoreBar, tags: ['autodocs'],
  args: { label: 'Spinach', value: 78 },
  decorators: [(Story) => <div style={{ maxWidth: 500 }}><Story /></div>] } satisfies Meta<typeof ScoreBar>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
export const Low: Story = { args: { label: 'Lettuce', value: 12 } }
export const Ranking: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 8 }}>
      {[['Spinach', 78], ['Broccoli', 64], ['Cabbage', 52], ['Carrot', 41]].map(([l, v]) => <ScoreBar key={l} label={l as string} value={v as number} />)}
    </div>
  ),
}

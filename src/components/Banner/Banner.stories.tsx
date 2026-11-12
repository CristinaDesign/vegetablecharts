import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Banner } from './Banner'

const meta = {
  title: 'Components/Banner',
  component: Banner,
  tags: ['autodocs'],
  args: { variant: 'success', children: 'Prices updated for 27 vegetables.' },
} satisfies Meta<typeof Banner>
export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = { args: { variant: 'success', title: 'Data updated', children: 'Prices now reflect July 2026 averages in € per kilo.' } }
export const Warning: Story = { args: { variant: 'warning', title: 'Some prices are estimates', children: 'Six vegetables use an estimated price until wholesale data is connected.' } }
export const Error: Story = { args: { variant: 'error', title: 'Could not load the data', children: 'The price list did not load. Check your connection and try again.' } }
export const Info: Story = { args: { variant: 'info', children: 'Scores are calculated per 100 kcal, using 12 nutrients.' } }
export const WithoutTitle: Story = { args: { variant: 'warning', children: 'Estimated price.' } }
export const Dismissible: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true)
    return open ? <Banner {...args} variant="success" title="Saved" onDismiss={() => setOpen(false)}>Your selection was saved.</Banner> : <button onClick={() => setOpen(true)}>Show again</button>
  },
}
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12, maxWidth: 640 }}>
      <Banner variant="success" title="Data updated">Prices now reflect July 2026 averages in € per kilo.</Banner>
      <Banner variant="warning" title="Some prices are estimates">Six vegetables use an estimated price until wholesale data is connected.</Banner>
      <Banner variant="error" title="Could not load the data">The price list did not load. Check your connection and try again.</Banner>
      <Banner variant="info">Scores are calculated per 100 kcal, using 12 nutrients.</Banner>
    </div>
  ),
}

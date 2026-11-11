import type { Meta, StoryObj } from '@storybook/react-vite'
import { Disclosure } from './Disclosure'

const meta = {
  title: 'Components/Disclosure', component: Disclosure, tags: ['autodocs'],
  args: { summary: 'Show all data as a table', children: 'Hidden content appears here when opened.' },
} satisfies Meta<typeof Disclosure>
export default meta
type Story = StoryObj<typeof meta>
export const Closed: Story = {}
export const Open: Story = { args: { defaultOpen: true } }

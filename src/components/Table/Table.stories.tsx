import type { Meta, StoryObj } from '@storybook/react-vite'
import { Table } from './Table'

const meta = {
  title: 'Components/Table', component: Table, tags: ['autodocs'],
  args: {
    caption: 'Vegetables by price and score',
    columns: ['Vegetable', '€ / kg', 'Score'],
    rows: [['Spinach', 4.1, 78], ['Broccoli', 2.9, 64], ['Carrot', 1.2, 41], ['Cabbage', 1.1, 52]],
  },
} satisfies Meta<typeof Table>
export default meta
export const Default: StoryObj<typeof meta> = {}

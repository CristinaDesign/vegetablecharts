import { useEffect } from 'react'
import type { Preview } from '@storybook/react-vite'
import '../src/tokens/tokens.css'

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Light or dark theme',
      toolbar: { title: 'Theme', icon: 'circlehollow', items: ['light', 'dark'], dynamicTitle: true },
    },
  },
  initialGlobals: { theme: 'light' },
  decorators: [
    (Story, ctx) => {
      const theme = ctx.globals.theme ?? 'light'
      useEffect(() => { document.documentElement.setAttribute('data-theme', theme) }, [theme])
      return <div style={{ padding: 24 }}><Story /></div>
    },
  ],
  parameters: {
    layout: 'fullscreen',
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: { test: 'todo' },
  },
}
export default preview

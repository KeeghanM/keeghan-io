// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import node from '@astrojs/node'
import partytown from '@astrojs/partytown'
import tailwindcss from '@tailwindcss/vite'

import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), partytown(), compress()],
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  vite: { plugins: [tailwindcss()] },
})
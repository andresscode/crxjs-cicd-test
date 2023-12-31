import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.config.ts'

// feat
// change
// deprecate
// remove
// fix
// security

// ignored PR

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })]
})

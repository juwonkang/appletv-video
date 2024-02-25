import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { sortUserPlugins } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: { exclude: ['fsevents'] },
})

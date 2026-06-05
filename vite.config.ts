import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',   // ← change to '/' if deploying to a root domain (e.g. mohamedzouari4.github.io)
})

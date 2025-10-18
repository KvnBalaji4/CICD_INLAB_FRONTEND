import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/CICD_INLAB_FRONTEND/',  // 👈 your repo name
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Edit base to match your repo name if needed
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/'
})

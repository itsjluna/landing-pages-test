import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Allows using just 'SITE' in Vercel to avoid the public prefix warning, 
    // while still keeping backwards compatibility with VITE_SITE
    'import.meta.env.VITE_SITE': JSON.stringify(process.env.SITE || process.env.VITE_SITE || '')
  }
})

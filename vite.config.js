import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server:{
    port:5000,
    proxy:{
      '/api':{
        target: 'https://jsonserver-psy1.onrender.com/',
        changeOrigin:  true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: ['dharmrajrathod6.onrender.com'],
  },
})

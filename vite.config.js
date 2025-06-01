import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    minify: true,
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['aos', 'clipboard']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Piyush Mishra - Fullstack Developer',
          description: 'Portfolio of Piyush Mishra, a fullstack developer specializing in MERN stack and modern web applications.',
        },
      },
    }),
  ],
  assetsInclude: ['**/*.PNG'],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})

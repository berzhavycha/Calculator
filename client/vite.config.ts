import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/operations": "http://localhost:5000/",
      "/calculations": "http://localhost:5000/",
      "/history": "http://localhost:5000/"
    },
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components/'),
      '@context': path.resolve(__dirname, './src/context/'),
      '@hooks': path.resolve(__dirname, './src/hooks/'),
      '@queryBuilder': path.resolve(__dirname, './src/queryBuilder/'),
      '@utils': path.resolve(__dirname, './src/utils/'),
    }
  }
});
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: './.jest/setup-tests.ts'
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components/'),
      '@context': path.resolve(__dirname, './src/context/'),
      '@hooks': path.resolve(__dirname, './src/hooks/'),
      '@queryBuilder': path.resolve(__dirname, './src/queryBuilder/'),
      '@global': path.resolve(__dirname, './src/global/'),
    }
  },
});
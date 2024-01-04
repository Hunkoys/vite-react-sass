import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import express from './express-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), express('output/server')],
  publicDir: 'src/public',
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
      },
      output: {
        dir: 'output/dist',
        entryFileNames: '[name].html',
      },
    },
  },
});

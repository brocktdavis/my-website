import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  resolve: {
    alias: [
      { find: 'app', replacement: fileURLToPath(new URL('./src/app', import.meta.url)) },
      { find: 'pages', replacement: fileURLToPath(new URL('./src/pages', import.meta.url)) },
      { find: 'shared', replacement: fileURLToPath(new URL('./src/shared', import.meta.url)) },
    ]
  }
})

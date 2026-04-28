import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // makes _variables.scss available globally — no need to import in every file
        // (alternatively each .module.scss uses @use '../styles/variables' as *)
        api: 'modern-compiler',
      },
    },
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        app: "src/App.jsx",
        options: 'src/options.jsx',
        background: 'src/extension/background.js',
        hook: 'src/hooks.js',
        devtools: 'src/devtools.jsx',

        // TODO: CLEAN THIS UP
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
});

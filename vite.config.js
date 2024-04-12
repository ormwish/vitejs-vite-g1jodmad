import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        app: "src/App.jsx",
        popup: 'src/extension/App.jsx',
        options: 'src/extension/options.jsx',
        content: 'src/extension/contentScript.jsx',
        background: 'src/extension/background.js',
        hook: 'src/extension/hooks.js',
        devtools: 'src/extension/devtools.jsx',

        // TODO: CLEAN THIS UP
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
});

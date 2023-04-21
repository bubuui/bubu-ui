import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import VueTypeImports from 'vite-plugin-vue-type-imports';
export default defineConfig({
  plugins: [vueJsx(), VueTypeImports()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('../src', import.meta.url)),
    },
  },
});

import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
// @ts-ignore
import DefineOptions from 'unplugin-vue-define-options/vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
export default defineConfig({
  plugins: [vue(), DefineOptions(), vueJsx()],
  resolve: {
    alias: {
      '@bubu-ui/components': fileURLToPath(
        new URL('../packages/components/src', import.meta.url)
      )
    }
  }
});

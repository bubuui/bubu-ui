/// <reference types="vitest" />
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import VueTypeImports from 'vite-plugin-vue-type-imports';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), VueTypeImports()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    // jest like test apis
    globals: true,
    // 模拟dom环境
    // environment: "happy-dom",
    // 支持tsx
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
});

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      formats: ['es']
    },
    outDir: resolve(__dirname, './dist')
  },

  plugins: [dts({ rollupTypes: true })]
});

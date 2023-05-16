import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import VueTypeImports from 'vite-plugin-vue-type-imports';
export default defineConfig({
  plugins: [vueJsx(), VueTypeImports()],
  resolve: {
    alias: [
      {
        find: /@bubu-ui\/components$/,
        replacement: fileURLToPath(
          new URL('../../packages/components', import.meta.url)
        ),
      },
      {
        find: /@bubu-ui\/components\/*/,
        replacement: fileURLToPath(
          new URL('../../packages/components/src/', import.meta.url)
        ),
      },
    ],
  },
});

import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import packageJson from './package.json';

export default defineConfig({
  plugins: [react(), dts({
    insertTypesEntry: true,
  })],
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "./src") },
    ],
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'library-template',
      fileName: (format) => `template-lib.${format}.js`,
    },
    rollupOptions: {
      external: Object.keys(packageJson.peerDependencies)
    }
  },
});

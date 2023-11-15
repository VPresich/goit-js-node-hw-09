import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import path from 'path';

export default defineConfig({
   define: {
    global: {},
  },
  root: path.resolve(__dirname, 'src'),
  build: {
    rollupOptions: {
      input: glob.sync('./src/*.html'),
    },
    outDir: '../dist',
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
  resolve: {
    alias: {
      '/@modules/': path.resolve(__dirname, 'node_modules'),
    },
  },
});

import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import macrosPlugin from 'vite-plugin-babel-macros';
import eslintPlugin from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), macrosPlugin(), eslintPlugin(), tsconfigPaths()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      config: path.resolve(__dirname, './src/config'),
      'styled-configs': path.resolve(__dirname, './src/styled-configs'),
    },
  },
});

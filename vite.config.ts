import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import macrosPlugin from "vite-plugin-babel-macros";
import path from "path";

export default defineConfig({
  plugins: [react(), macrosPlugin()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, "./src/components"),
      config: path.resolve(__dirname, "./src/config"),
      "styled-configs": path.resolve(__dirname, "./src/styled-configs"),
    },
  },
});

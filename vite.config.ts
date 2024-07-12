import { resolve } from "path";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import glsl from "vite-plugin-glsl";
import { types } from "sass";

//@ts-ignore
const root = resolve(__dirname, "src");
const url = (path: string): string => resolve(root, path);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), glsl()],
  resolve: {
    alias: {
      assets: url("assets"),
      components: url("components"),
      context: url("context"),
      data: url("data"),
      hooks: url("hooks"),
      pages: url("pages"),
      services: url("services"),
      types: url("types"),
      utils: url("utils"),
    },
  },
  server: {
    open: "/public/index.html",
  },
});

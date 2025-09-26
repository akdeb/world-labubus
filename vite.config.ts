import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: true,
    cssCodeSplit: false, // keep it all in one JS file
    rollupOptions: {
      input: { hud: "src/main.ts" }, // single input that imports both
      output: {
        format: "iife",             // content scripts can't be ESM
        entryFileNames: "hud.js",   // keep manifest unchanged
        inlineDynamicImports: true, // force no extra chunks
      },
    },
  },
});

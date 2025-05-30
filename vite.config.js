import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import restart from "vite-plugin-restart";

export default defineConfig({
  plugins: [react(), restart({ restart: ["../static/**"] })],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  root: "src/", // Sources files (typically where index.html is)
  publicDir: "../static/", // Path from "root" to static assets (files that are served as they are)
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "../dist", // Output in the dist/ folder
    emptyOutDir: true, // Empty the folder first
    sourcemap: true, // Add sourcemap
  },
});

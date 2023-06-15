import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@assets/styles/_font.scss";
          @import "@assets/styles/_colors.scss";
          @import "@assets/styles/_variables.scss";
          @import "@assets/styles/_typographic.scss";
        `,
      },
    },
  },
});

import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy"; // 🔥 Add this

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "public/_redirects", // copy this file
          dest: ".",                // to dist/
        },
      ],
    }),
  ],
  base: "./",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  assetsInclude: ["src/**/*.html"],
  plugins: [tailwindcss()],
});

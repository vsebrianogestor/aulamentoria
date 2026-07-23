import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Base "./" garante que o portal funcione em subdiretórios
// (ex.: GitHub Pages) sem quebrar os caminhos dos arquivos.
export default defineConfig({
  plugins: [react()],
  base: "./",
});

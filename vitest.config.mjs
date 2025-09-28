import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import { resolve } from "path"
import { fileURLToPath, URL } from "node:url"

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom",
    setupFiles: ["./tests/setup.ts"],
    include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: ["node_modules", "dist", ".next", "e2e"],
  },
  resolve: {
    alias: {
      "@": resolve(fileURLToPath(new URL(".", import.meta.url)), "./app"),
      "~": resolve(fileURLToPath(new URL(".", import.meta.url)), "./"),
    },
  },
})

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    host: true,
    open: true,
    strictPort: true, // Ensures port is not changed if occupied
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    // Asset handling configuration
    assetsInlineLimit: 0, // Disable asset inlining (critical for GLB/GLTF files)
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"], // ✅ KEEP THIS
        },
      },
    },    
  },
})
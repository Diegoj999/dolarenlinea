import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pluginRewriteAll from 'vite-plugin-rewrite-all';

export default defineConfig({
  plugins: [react(), pluginRewriteAll()],
  base: "https://dolarenlinea.vercel.app/",
  build: {
    target: 'esnext',
    minify: 'esbuild',
  },
})
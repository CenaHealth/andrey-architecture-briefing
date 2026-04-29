import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from '@tailwindcss/vite';

const base = process.env.VITE_BASE ?? '/andrey-architecture-briefing/';

export default defineConfig({
  base,
  plugins: [react(), tailwind()],
  server: { strictPort: true, port: 5181 },
});

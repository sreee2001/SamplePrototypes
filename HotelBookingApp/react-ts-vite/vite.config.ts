import { defineConfig } from 'vite'

// Use an async factory to dynamically import ESM-only plugins at runtime.
export default defineConfig(async () => {
  const reactModule = await import('@vitejs/plugin-react');
  const react = (reactModule && (reactModule as any).default) || reactModule;
  return {
    plugins: [react()],
    server: { port: 5173 }
  };
});

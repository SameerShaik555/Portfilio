import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    outDir: 'dist', // Output directory for production builds
    assetsDir: 'assets', // Directory for static assets
    minify: 'terser', // Minify the output using Terser
    sourcemap: true, // Generate source maps
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: ['react', 'react-dom'],
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // Specify dependencies to optimize/bundle
  },
  server: {
    port: 3000, // Port for development server
    open: true, // Open the default browser when starting the development server
  },
});

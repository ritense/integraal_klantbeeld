import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
        include: ['@wundergraph/swr', '@wundergraph/sdk/client'],
        esbuildOptions: {
            target: 'esnext',
        }
    },
    server: {
        watch: {
            usePolling: true
        }
    }
});
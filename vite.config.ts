import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        // css预处理器
        preprocessorOptions: {
            less: {
                charset: false,
                javascriptEnabled: true,
            },
        },
    },
    plugins: [react()],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
});

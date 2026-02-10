import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pkg from './package.json';

export default defineConfig({
    plugins: [react()],
    build: {
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true, // Išmeta console.log
                drop_debugger: true,
                pure_funcs: ['useMemo', 'memo'] // Užuomina, kad šios funkcijos neturi side-effects
            },
            format: {
                comments: false, // Jokių komentarų
            },
        },
        rollupOptions: {
            external: [
                'react/jsx-runtime', /^lodash.*/, /^\@hookform/,
                ...Object.keys(pkg.peerDependencies || {})
            ]
        },
        outDir: './dist',
        lib: {
            entry: './src/index.ts',
            name: 'react-hook-form-wrapper',
            fileName: 'index',
            formats: ['es', 'cjs']
        }
    },
    
    resolve: {
        alias: {
            "react-hook-form-wrapper": "../src"
        }
    },
    server: {
        proxy: {
            '/api': 'http://localhost:8080'
        }
    }
});

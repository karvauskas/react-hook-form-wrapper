import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pkg from './package.json';

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            external: [
                'react', 'react-dom', 'react-hook-form',
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

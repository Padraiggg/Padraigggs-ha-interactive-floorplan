import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
    plugins: [vue({
        template: {
            compilerOptions: {
                // treat all tags with a dash as custom elements
                isCustomElement: (tag) => tag.includes('-')
            }
        }
    })],
    build: {
        outDir: 'release',
        emptyOutDir: false, // Don't clear — the card build also writes here
        lib: {
            entry: resolve(__dirname, 'src/main.editor.ts'),
            name: 'HaFloorplanEditor',
            fileName: 'ha-floorplan-editor'
        },
        rollupOptions: {
            external: [],
            output: {
                globals: {
                    vue: 'Vue'
                },
                inlineDynamicImports: true,
            }
        }
    },
    define: {
        'process.env': {},
        __APP_VERSION__: JSON.stringify('1.0.0')
    }
});

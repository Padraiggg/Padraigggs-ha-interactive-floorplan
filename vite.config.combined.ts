import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { execSync } from 'child_process';

const commitHash = execSync('git describe --tags --always').toString().trim();

export default defineConfig({
    plugins: [vue({
        template: {
            compilerOptions: {
                isCustomElement: (tag) => tag.includes('-')
            }
        }
    })],
    build: {
        outDir: 'release',
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, 'src/main.combined.ts'),
            name: 'HaFloorplanCard',
            fileName: 'ha-floorplan-card',
            formats: ['es'],
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
        __APP_VERSION__: JSON.stringify(commitHash)
    }
});

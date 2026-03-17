import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { execSync } from 'child_process';

const commitHash = execSync('git describe --tags --always').toString().trim();

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
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, 'src/main.card.ts'),
            name: 'HaFloorplanCard',
            fileName: 'ha-floorplan-card'
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: [], // bundle vue? Yes, usually for HA cards unless using module imports
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: 'Vue'
                },
                // Force a single file
                inlineDynamicImports: true,
            }
        }
    },
    define: {
        'process.env': {},
        __APP_VERSION__: JSON.stringify(commitHash)
    }
});

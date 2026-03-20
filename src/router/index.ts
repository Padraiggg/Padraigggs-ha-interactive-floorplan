import { createRouter, createWebHashHistory } from 'vue-router';
import ViewerView from '../views/ViewerView.vue';
import EditorView from '../views/EditorView.vue';

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'viewer',
            component: ViewerView
        },
        {
            path: '/editor',
            name: 'editor',
            component: EditorView
        }
    ]
});

export default router;

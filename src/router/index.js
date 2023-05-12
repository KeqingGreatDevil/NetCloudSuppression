import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/home',
        component: () => import('../view/Main.vue'),
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('../view/Home.vue')
            },
            {
                path: '/notfound',
                name: 'notfound',
                component: () => import('../view/NotFound.vue')
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
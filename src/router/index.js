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
                path: '/detail',
                name: 'detail',
                component: () => import('../view/Detail.vue')
            },
        ]
    },
    {
        path:'/404',
        name:'NotFound',
        component:()=>import('../view/404.vue')
    },
    {
        path:"/:catchAll(.*)",
        redirect:'/404',
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
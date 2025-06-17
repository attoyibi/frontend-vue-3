import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/fetch-mounted',
      name: 'fetch-mounted',
      component: () => import('../views/fetching/FetchMounted.vue'),
    },
    {
      path: '/fetch-created',
      name: 'fetch-created',
      component: () => import('../views/fetching/FetchCreated.vue'),
    },
    {
      path: '/fetch-watch',
      name: 'fetch-watch',
      component: () => import('../views/fetching/FetchWatch.vue'),
    },
    {
      path: '/fetch-computed',
      name: 'fetch-computed',
      component: () => import('../views/fetching/FetchComputed.vue'),
    },
    {
      path: '/fetch-setup',
      name: 'fetch-setup',
      component: () => import('../views/fetching/FetchSetup.vue'),
    },
    {
      path: '/fetch-vue-query',
      name: 'fetch-vue-query',
      component: () => import('../views/fetching/FetchVueQuery.vue'),
    },
    {
      path: '/products/:id',
      name: 'product-detail',
      component: () => import('../views/fetching/FetchVueQuery.vue'),
    },
  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Created from '@/views/Created.vue';
import Mounted from '@/views/Mounted.vue';
import VueQuery from '@/views/VueQuery.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/mounted',
      name: 'home',
      component: Mounted,
    },
    {
      path: '/created',
      name: 'created',
      component: Created,
    },
    {
      path: '/vue-query',
      name: 'vue-query',
      component: VueQuery,
    },
  ],
})

export default router

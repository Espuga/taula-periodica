import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/home.vue'),
      meta: { title: 'home' }
    },
    {
      path: '/taulaPeriodica',
      name: 'Taula Periodica',
      component: () => import('@/views/TaulaPeriodica.vue'),
      meta: { title: 'Taula Periodica' }
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/'
    }
  ]
});

export default router;
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/periodicTable',
      name: 'Periodic Table',
      component: () => import('@/views/PeriodicTable.vue'),
    },
    {
      path: '/game',
      name: 'Game Taula Periodica',
      component: () => import('@/views/Game.vue'),
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/'
    }
  ]
});

export default router;
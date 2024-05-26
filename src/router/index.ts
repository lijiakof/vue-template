import { createRouter, createWebHistory } from 'vue-router';
import LayoutDefault from '../layouts/layout-default.vue';
import LayoutBlank from '../layouts/layout-blank.vue';
import Home from '../views/home/home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: LayoutDefault },
      component: Home
    },
    {
      path: '/about-us',
      name: 'aboutUs',
      meta: { layout: LayoutBlank },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/about-us/about-us.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      meta: { layout: LayoutDefault },
      component: () => import('../views/demo-test.vue')
    }
  ]
});

export default router;

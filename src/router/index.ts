import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue';
import Discover from '@/views/discovery.vue';
import Me from '@/views/me.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/discover',
    name: 'discover',
    component: Discover
  },
  {
    path: '/me',
    name: 'me',
    component: Me
  },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes
})

export default router

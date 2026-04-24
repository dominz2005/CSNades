import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/views/Main.vue';

import Mirage from '@/views/Mirage.vue'
import Dust2 from '@/views/Dust2.vue';
import Overpass from '@/views/Overpass.vue';
import Ancient from '@/views/Ancient.vue';
import Inferno from '@/views/Inferno.vue';
import Anubis from '@/views/Anubis.vue';
import Nuke from '@/views/Nuke.vue';

import NadeDetails from '@/views/NadeDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main,
      meta: { hideNavbar: true }
    },
    {
      path: '/mirage',
      name: 'mirage',
      component: Mirage,
    },
    {
      path: '/dust2',
      name: 'dust2',
      component: Dust2,
    },
    {
      path: '/overpass',
      name: 'overpass',
      component: Overpass,
    },
    {
      path: '/ancient',
      name: 'ancient',
      component: Ancient,
    },
    {
      path: '/inferno',
      name: 'inferno',
      component: Inferno,
    },
    {
      path: '/anubis',
      name: 'anubis',
      component: Anubis,
    },
    {
      path: '/nuke',
      name: 'nuke',
      component: Nuke,
    },
    {
      path: '/:map/:type/:id',
      name: 'nade-details',
      component: NadeDetails,
      meta: { hideNavbar: true }
    },
  ]
})

export default router;
import frontoffice_routes from './frontoffice.router'
import { housekeeping_routes, hkreports_routes } from './housekeeping.router'

const routes = [
  {
    path: '/',
    component: () => import('pages/IndexPage.vue')
  },

  {
    path: '/fo',
    component: () => import('layouts/FOLayout.vue'),
    children: frontoffice_routes
  },

  {
    path: '/hk',
    component: () => import('layouts/HKLayout.vue'),
    children: housekeeping_routes
  },

  {
    path: '/hk/reports',
    component: () => import('layouts/MainLayout.vue'),
    children: hkreports_routes
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

import frontoffice_routes from './frontoffice.router'

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
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

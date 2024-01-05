import frontoffice_routes from './frontoffice.router'
import {
  housekeeping_routes,
  hkreports_routes,
  hkroomboy_routes,
  hksupervisor_routes
} from './housekeeping.router'

const routes = [
  {
    path: '/',
    component: () => import('pages/IndexPage.vue'),
    meta: {
      title: 'Login',
      protected: true
    }
  },

  {
    path: '/auth',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      {
        path: '/auth/login',
        component: () => import('pages/Login.vue'),
        meta: {
          title: 'Login',
          protected: false
        }
      }
    ]
  },

  {
    path: '/fo',
    component: () => import('layouts/FOLayout.vue'),
    children: frontoffice_routes
  },

  {
    path: '/hk',
    component: () => import('layouts/HK/HKLayout.vue'),
    children: housekeeping_routes
  },

  {
    path: '/hk/reports',
    component: () => import('layouts/HK/HKLayout.vue'),
    children: hkreports_routes
  },

  {
    path: '/hk/rb',
    component: () => import('layouts/HK/ImppsLayout.vue'),
    children: hkroomboy_routes
  },

  {
    path: '/hk/spv',
    component: () => import('layouts/HK/ImppsLayout.vue'),
    children: hksupervisor_routes
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

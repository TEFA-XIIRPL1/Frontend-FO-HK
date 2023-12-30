const frontoffice_routes = [
  {
    path: '/fo/guest-list',
    component: () => import('pages/FO/GuestList.vue'),
    meta: {
      title: 'Arrival Guest List',
      main_route: true,
      protected: true
    }
  },
  {
    path: '/fo/guest-invoice',
    component: () => import('pages/FO/Invoice.vue'),
    meta: {
      title: 'Arrival Guest List - Invoice',
      main_route: false,
      protected: true
    }
  },
  {
    path: '/fo/room-availability',
    component: () => import('pages/FO/RoomAvailability.vue'),
    meta: {
      title: 'Room Availability',
      main_route: true,
      protected: true
    }
  },
  {
    path: '/fo/room-plan',
    component: () => import('pages/FO/RoomPlan.vue'),
    meta: {
      title: 'Room Plan',
      main_route: true,
      protected: true
    }
  },
  {
    path: '/fo/reports',
    component: () => import('pages/FO/Reports.vue'),
    meta: {
      title: 'Reports',
      main_route: true,
      protected: true
    }
  }
]

export default frontoffice_routes

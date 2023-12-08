const frontoffice_routes = [
  {
    path: '/fo/guest-list',
    component: () => import('pages/FO/GuestList.vue'),
    meta: {
      title: 'Arrival Guest List',
      protected: true
    }
  },
  {
    path: '/fo/room-availability',
    component: () => import('pages/FO/RoomAvailability.vue'),
    meta: {
      title: 'Room Availability',
      protected: true
    }
  },
  {
    path: '/fo/room-plan',
    component: () => import('pages/FO/RoomPlan.vue'),
    meta: {
      title: 'Room Plan',
      protected: true
    }
  },
  {
    path: '/fo/reports',
    component: () => import('pages/FO/Reports.vue'),
    meta: {
      title: 'Reports',
      protected: true
    }
  }
]

export default frontoffice_routes

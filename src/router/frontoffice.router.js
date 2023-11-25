const frontoffice_routes = [
  {
    path: '/guest-list',
    component: () => import('pages/FO/GuestList.vue'),
    meta: {
      title: 'Arrival Guest List'
    }
  },
  {
    path: '/reports',
    component: () => import('pages/FO/Reports.vue'),
    meta: {
      title: 'Reports'
    }
  },
  {
    path: '/room-availability',
    component: () => import('pages/FO/RoomAvailability.vue'),
    meta: {
      title: 'Room Availability'
    }
  },
  {
    path: '/room-plan',
    component: () => import('pages/FO/RoomPlan.vue'),
    meta: {
      title: 'Room Plan'
    }
  }
]

export default frontoffice_routes

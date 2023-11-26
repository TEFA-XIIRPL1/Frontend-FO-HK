export const housekeeping_routes = [
  {
    path: '/dashboard',
    component: () => import('pages/HK/Dashboard.vue'),
    meta: {
      title: 'Dashboard'
    }
  },
  {
    path: '/arrival',
    component: () => import('pages/HK/ArrivalDepartureRoom.vue'),
    meta: {
      title: 'Arrival Departure Room'
    }
  },
  {
    path: '/clean-dirty',
    component: () => import('pages/HK/CleanAndDirty.vue'),
    meta: {
      title: 'Clean And Dirty Room'
    }
  },
  {
    path: '/room-occupancy',
    component: () => import('pages/HK/RoomOccupancy.vue'),
    meta: {
      title: 'Room Occupancy Overview'
    }
  },
  {
    path: '/o-o-o-market-rooms',
    component: () => import('pages/HK/O-O-O.vue'),
    meta: {
      title: 'O-O-O And Off Market Rooms'
    }
  },
  {
    path: '/status',
    component: () => import('pages/HK/Status.vue'),
    meta: {
      title: 'Status'
    }
  },
  {
    path: '/rooming-list',
    component: () => import('pages/HK/RoomingList.vue'),
    meta: {
      title: 'Room Occupancy Overview'
    }
  },
  {
    path: '/lost-found',
    component: () => import('pages/HK/LostAndFound.vue'),
    meta: {
      title: 'Lost And Found'
    }
  }
]

export const hkreports_routes = [
  {
    path: '/room-maid-reports',
    component: () => import('pages/HK/reports/RoomMaid.vue'),
    meta: {
      title: 'Room Maid Reports'
    }
  },
  {
    path: '/daily-room-usage',
    component: () => import('pages/HK/reports/DailyRoomUsage.vue'),
    meta: {
      title: 'Daily Room Usage'
    }
  },
  {
    path: '/room-plan',
    component: () => import('pages/HK/reports/RoomPlan.vue'),
    meta: {
      title: 'Room Plan'
    }
  },

  {
    path: '/vip-list',
    component: () => import('pages/HK/reports/VipList.vue'),
    meta: {
      title: 'VIP List'
    }
  },
  {
    path: '/room-change',
    component: () => import('pages/HK/reports/RoomChange.vue'),
    meta: {
      title: 'Room Change Report'
    }
  },
  {
    path: '/monthly-room',
    component: () => import('pages/HK/reports/MonthlyRoom.vue'),
    meta: {
      title: 'Monthly Room Occupancy Forecast'
    }
  },
  {
    path: '/extrabed-availability',
    component: () => import('pages/HK/reports/ExtrabedAvailability.vue'),
    meta: {
      title: 'Extrabed Availability'
    }
  }
]

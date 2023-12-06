export const housekeeping_routes = [
  {
    path: '/hk/dashboard',
    component: () => import('pages/HK/Dashboard.vue'),
    meta: {
      title: 'Dashboard'
    }
  },
  {
    path: '/hk/arrival',
    component: () => import('pages/HK/ArrivalDepartureRoom.vue'),
    meta: {
      title: 'Arrival Departure Room',
      icon: ''
    }
  },
  {
    path: '/hk/clean-dirty',
    component: () => import('pages/HK/CleanAndDirty.vue'),
    meta: {
      title: 'Clean And Dirty Room'
    }
  },
  {
    path: '/hk/room-occupancy',
    component: () => import('pages/HK/RoomOccupancy.vue'),
    meta: {
      title: 'Room Occupancy Overview'
    }
  },
  {
    path: '/hk/o-o-o-market-rooms',
    component: () => import('pages/HK/O-O-O.vue'),
    meta: {
      title: 'O-O-O And Off Market Rooms'
    }
  },
  {
    path: '/hk/status',
    component: () => import('pages/HK/Status.vue'),
    meta: {
      title: 'Status'
    }
  },
  {
    path: '/hk/rooming-list',
    component: () => import('pages/HK/RoomingList.vue'),
    meta: {
      title: 'Rooming List'
    }
  },
  {
    path: '/hk/lost-found',
    component: () => import('pages/HK/LostAndFound.vue'),
    meta: {
      title: 'Lost And Found'
    }
  }
]

export const hkreports_routes = [
  {
    path: '/hk/report/room-maid-reports',
    component: () => import('pages/HK/reports/RoomMaid.vue'),
    meta: {
      title: 'Room Maid Reports'
    }
  },
  {
    path: '/hk/report/daily-room-usage',
    component: () => import('pages/HK/reports/DailyRoomUsage.vue'),
    meta: {
      title: 'Daily Room Usage'
    }
  },
  {
    path: '/hk/report/room-plan',
    component: () => import('pages/HK/reports/RoomPlan.vue'),
    meta: {
      title: 'Room Plan'
    }
  },

  {
    path: '/hk/report/vip-list',
    component: () => import('pages/HK/reports/VipList.vue'),
    meta: {
      title: 'VIP List'
    }
  },
  {
    path: '/hk/report/room-change',
    component: () => import('pages/HK/reports/RoomChange.vue'),
    meta: {
      title: 'Room Change Report'
    }
  },
  {
    path: '/hk/report/monthly-room',
    component: () => import('pages/HK/reports/MonthlyRoom.vue'),
    meta: {
      title: 'Monthly Room Occupancy Forecast'
    }
  },
  {
    path: '/hk/report/extrabed-availability',
    component: () => import('pages/HK/reports/ExtrabedAvailability.vue'),
    meta: {
      title: 'Extrabed Availability'
    }
  }
]

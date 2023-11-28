<template>
  <q-layout view="lHh LpR fFf">
    <q-header bordered class="bg-grey text-white">
      <q-toolbar class="items-center">
        <!-- <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" /> -->
        <q-toolbar-title> Lingian Hotel Management System </q-toolbar-title>

        <div class="q-gutter-sm row items-center no-wrap">
          <MessengerFloat />
          <ProfileFloat />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <SideBar />
    </q-drawer>

    <q-page-container>
      <q-page class="q-pa-md">
        <h4 class="q-ma-none text-bold">{{ currentClock }}</h4>
        <h6 class="q-ma-none text-bold">{{ currentDate }}</h6>

        <div class="row q-my-lg" style="gap: 16px">
          <div class="dashboard-box">
            <div class="icon">
              <q-icon name="o_calendar_today" />
            </div>
            <div>
              <p class="label">New Reservations</p>
              <h5 class="data">008</h5>
            </div>
          </div>

          <div class="dashboard-box">
            <div class="icon">
              <q-icon name="o_bed" />
            </div>
            <div>
              <p class="label">Available Rooms</p>
              <h5 class="data">008</h5>
            </div>
          </div>

          <div class="dashboard-box">
            <div class="icon">
              <q-icon name="o_input" />
            </div>
            <div>
              <p class="label">Check In</p>
              <h5 class="data">005</h5>
            </div>
          </div>
          <div class="dashboard-box">
            <div class="icon">
              <q-icon name="o_output" />
            </div>
            <div>
              <p class="label">Check Out</p>
              <h5 class="data">005</h5>
            </div>
          </div>
          <div class="dashboard-box">
            <div class="icon">
              <q-icon name="o_query_stats" />
            </div>
            <div>
              <p class="label">Occupancy Rate</p>
              <h5 class="data">50%</h5>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import SideBar from 'src/components/SideBar.vue'
import ProfileFloat from 'src/components/ProfileFloat.vue'
import { ref } from 'vue'
import MessengerFloat from 'src/components/MessengerFloat.vue'
import { getCurrentTime } from 'src/utils/time'

export default {
  setup() {
    const leftDrawerOpen = ref(false),
      currentClock = '-',
      currentDate = '-'

    return {
      leftDrawerOpen,
      currentClock,
      currentDate
    }
  },
  components: { SideBar, ProfileFloat, MessengerFloat },
  created() {
    this.updateTime()

    setInterval(() => {
      this.updateTime()
    }, 60000)
  },
  methods: {
    toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value
    },
    updateTime() {
      let dateTimeParts = getCurrentTime().split(' ')
      this.currentDate = dateTimeParts.slice(0, 4).join(' ')
      this.currentClock = dateTimeParts[4]
    }
  }
}
</script>

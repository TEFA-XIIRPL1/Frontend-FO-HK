<template>
  <q-layout view="lHh LpR fFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar class="items-center q-pa-md text-white bg-dark">
        <!-- <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" /> -->
        <q-toolbar-title class="text-weight-bold">
          Lingian Hotel Management System
        </q-toolbar-title>

        <div class="q-gutter-sm row items-center no-wrap">
          <ProfileFloat />
        </div>
      </q-toolbar>

      <q-toolbar
        class="breadcrumb-bg text-weight-medium text-black q-px-md"
        style="height: fit-content; width: 100%"
      >
        <q-breadcrumbs gutter="sm">
          <q-breadcrumbs-el class="gutter-sm text-dark text-weight-bold">
            <q-icon :name="$route.meta.icon" size="24px" />
            {{ $route.meta.title?.toString() }}
          </q-breadcrumbs-el>
        </q-breadcrumbs>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <SideBar />
    </q-drawer>

    <q-page-container>
      <Transition name="slide-fade" appear mode="out-in">
        <router-view :key="$route.fullPath" />
      </Transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import SideBar from 'src/components/SideBar.vue'
import ProfileFloat from 'src/components/ProfileFloat.vue'
import { ref } from 'vue'
import { housekeeping_routes, hkreports_routes } from 'src/router/housekeeping.router'
import { useRouter } from 'vue-router'

export default {
  components: { SideBar, ProfileFloat },
  setup() {
    const router = useRouter()
    const leftDrawerOpen = ref(false)
    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  data() {
    // housekeeping_routes, hkreports_routes
  }
}
</script>

<style>
.breadcrumb-bg {
  background-color: rgba(212, 228, 206, 1);
}
</style>

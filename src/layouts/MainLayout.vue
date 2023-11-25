<template>
  <q-page-container>
    <router-view />
  </q-page-container>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout'
})
</script>
<!-- 
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <!-- Icon BTNs -->
        <div>
          <q-btn round padding="8px" flat>
            <q-icon
              :size="$q.screen.lt.md ? '28px' : '32px'"
              color="white"
              name="o_notifications"
            />
          </q-btn>
          <q-btn round padding="8px" flat>
            <q-icon
              :size="$q.screen.lt.md ? '28px' : '32px'"
              color="white"
              name="o_account_circle"
            />
          </q-btn>
        </div>
      </q-toolbar>

      <!-- Breadcrumbs -->
      <q-toolbar
        class="text-weight-medium text-black q-py-3 q-px-4 sec-toolbar-bg"
        style="height: fit-content; width: 100%"
      >
        <q-breadcrumbs v-if="!$route.path.startsWith('/reports')" gutter="sm">
          <q-breadcrumbs-el class="q-gutter-xs">
            <q-icon :name="$route.meta.icon" size="24px" />
            {{ $route.name?.toString() }}
          </q-breadcrumbs-el>
        </q-breadcrumbs>

        <q-breadcrumbs v-else gutter="xs">
          <q-breadcrumbs-el class="text-black q-gutter-xs">
            <q-icon name="analytics" size="24px" />
            Reports
          </q-breadcrumbs-el>

          <q-breadcrumbs-el :label="$route.name?.toString()" />
        </q-breadcrumbs>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essentia Links </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <Transition name="slide-fade" appear mode="out-in">
        <router-view :key="$route.fullPath" />
      </Transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import { useRouter } from "vue-router";
import { HKMenus, HKReportMenus } from "src/data/menus";
import { ref } from "vue";

export default {
  name: "DefaultLayout",
  setup() {
    const router = useRouter();

    return {
      router,
      drawer: ref(true),
      isActive: false,
      reportsIsActive: false,
      HKReportMenus,
      HKMenus,
    };
  },
  methods: {
    toggleActive(param) {
      param = !param;
    },
    pushRoute(path) {
      this.router.push(path);
    },
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script> -->

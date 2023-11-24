<template>
  <q-layout view="lHh Lpr lFf" class="tw-overflow-x-hidden">
    <q-header reveal bordered>
      <q-toolbar class="q-px-md q-py-sm text-black toolbar-bg">
        <q-toolbar-title class="text-h5 text-white text-weight-bold">
          Lingian Hotel Management System
        </q-toolbar-title>

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

    <q-drawer
      :width="223"
      v-model="drawer"
      :model-value="$q.screen.lt.md ? drawer : true"
      side="left"
      bordered
      :overlay="$q.screen.lt.md ? true : false"
      class="column"
    >
      <q-item class="q-ma-xs">
        <q-item-section>
          <q-img
            src="/images/Lingian-Logo.png"
            fit="contain"
            style="width: 169px"
          />
        </q-item-section>
      </q-item>

      <q-scroll-area style="flex: 1 1 0%">
        <q-list>
          <!-- Menu List -->

          <!-- HK List -->
          <q-expansion-item
            class="q-my-none q-mx-sm text-weight-medium"
            :class="{
              'text-weight-bold': isActive,
            }"
            :style="{
              'background-color: rgba(230,246,236,1); color: rgba(0,100,48,1)':
                isActive,
            }"
            @update:model-value="toggleActive(isActive)"
            label="Housekeeping"
          >
            <q-list class="bg-white">
              <template v-for="(HKMenu, index) in HKMenus" :key="index">
                <q-item
                  v-if="$route.name !== HKMenu.name"
                  class="q-pa-none q-my-none q-mx-sm"
                >
                  <q-btn
                    align="left"
                    class="q-py-none q-px-sm q-mx-sm text-black"
                    style="width: 100%"
                    no-caps
                    unelevated
                    @click="pushRoute({ name: HKMenu.name })"
                  >
                    <div class="text-left q-py-xs">
                      {{ HKMenu.name }}
                    </div>
                  </q-btn>
                </q-item>

                <q-item v-else class="q-pa-none q-my-none q-mx-sm">
                  <q-btn
                    align="left"
                    class="q-py-none q-px-sm q-mx-sm text-weight-bold"
                    style="width: 100%; color: rgba(0, 100, 48, 1)"
                    no-caps
                    unelevated
                  >
                    <div class="text-left q-py-xs">
                      {{ HKMenu.name }}
                    </div>
                  </q-btn>
                </q-item>
              </template>

              <!-- Report List -->
              <q-expansion-item
                class="q-py-none q-px-sm q-mx-sm text-weight-medium no-padding-expansion"
                :class="{
                  'text-weight-bold': reportsIsActive,
                }"
                :style="{
                  'background-color: rgba(230,246,236,1); color: rgba(0,100,48,1)':
                    reportsIsActive,
                }"
                @update:model-value="toggleActive(reportsIsActive)"
                label="Reports"
              >
                <q-list class="bg-white">
                  <template
                    v-for="(reportMenu, index) in HKReportMenus"
                    :key="index"
                  >
                    <q-item
                      v-if="$route.name !== reportMenu.name"
                      class="q-pa-none q-my-none q-mx-sm"
                    >
                      <q-btn
                        align="left"
                        class="q-py-none q-px-sm text-black"
                        style="width: 100%"
                        no-caps
                        unelevated
                        @click="pushRoute({ name: reportMenu.name })"
                      >
                        <div class="text-left q-py-xs">
                          {{ reportMenu.name }}
                        </div>
                      </q-btn>
                    </q-item>

                    <q-item v-else class="q-pa-none q-my-none q-mx-sm">
                      <q-btn
                        align="left"
                        class="q-py-none q-px-sm text-weight-bold"
                        style="width: 100%; color: rgba(0, 100, 48, 1)"
                        no-caps
                        unelevated
                      >
                        <div class="text-left q-py-xs">
                          {{ reportMenu.name }}
                        </div>
                      </q-btn>
                    </q-item>
                  </template>
                </q-list>
              </q-expansion-item>
            </q-list>
          </q-expansion-item>
        </q-list>
      </q-scroll-area>

      <!-- Logout BTN -->
      <q-btn
        class="q-py-sm q-px-none"
        icon-right="o_logout"
        no-caps
        label="Logout"
        @click="router.push('/login')"
      />
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
};
</script>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.77, 0, 0.18, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-3%);
  opacity: 0;
}
.toolbar-bg {
  background-color: rgba(97, 97, 97, 1);
}

.sec-toolbar-bg {
  background-color: rgba(212, 228, 206, 1);
}

.no-padding-expansion .q-item {
  padding: 0 8px;
  margin: 0;
  border-radius: 2px;
}
</style>

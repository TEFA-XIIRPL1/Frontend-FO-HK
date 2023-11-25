<template>
  <q-btn round dense flat>
    <q-avatar size="26px">
      <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
    </q-avatar>
    <q-menu fit anchor="bottom left" self="top left" style="max-width: 320px">
      <q-item>
        <q-item-section>
          <q-img
            src="~/assets/img/curaweda_logo.png"
            class="q-my-md q-mx-auto"
            style="width: 100px"
          />
          <h5 class="q-mt-none q-mb-md q-px-md">Halo, Curaweda!</h5>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-item clickable class="text-negative">
        <q-item-section avatar>
          <q-icon name="o_logout" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="rounded-borders">Logout</q-item-label>
        </q-item-section>
      </q-item>
    </q-menu>
  </q-btn>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProfileFloat'
})
</script>

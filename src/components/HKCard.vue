<template>
  <!-- With Title -->
  <q-card v-if="title" class="q-px-md q-py-md relative" style="border-radius: 0 0 25px 25px">
    <div
      class="full-width flex-center absolute flex justify-center text-subtitle"
      style="
        border-radius: 25px 25px 0 0;
        top: -20px;
        left: 0;
        font-weight: 600;
        padding: 2px;
        background-color: #c2e7b9;
      "
    >
      {{ title }}
    </div>
    <slot />
  </q-card>

  <!-- W/O Title -->
  <q-card v-else class="q-px-md q-py-md relative" style="border-radius: 25px">
    <slot />
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HKCard',
  props: {
    title: String
  }
})
</script>

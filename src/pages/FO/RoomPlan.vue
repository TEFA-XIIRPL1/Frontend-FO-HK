<template>
  <q-page class="column" style="overflow-y: hidden; min-width: max-content">
    <FOMenubar>
      <template #left>
        <q-chip>Left side</q-chip>
      </template>
      <template #right>
        <q-chip>right side</q-chip>
      </template>
    </FOMenubar>

    <h5>Page: Room Plan goes here...</h5>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import FOMenubar from 'src/components/FOMenubar.vue'

export default defineComponent({
  name: 'RoomPlanPage',
  components: { FOMenubar }
})
</script>

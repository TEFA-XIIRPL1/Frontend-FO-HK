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

    <MultiPane>
      <template #upper>
        <h5>Table: Room Availability goes here...</h5>
      </template>
      <template #lower>
        <GuestForm />
      </template>
    </MultiPane>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import FOMenubar from 'src/components/FOMenubar.vue'
import MultiPane from 'src/layouts/MultiPane.vue'
import GuestForm from './fragments/GuestForm.vue'

export default defineComponent({
  name: 'RoomAvailabilityPage',
  components: { FOMenubar, MultiPane, GuestForm }
})
</script>

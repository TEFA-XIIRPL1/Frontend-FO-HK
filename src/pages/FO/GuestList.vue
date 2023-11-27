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
        <h5>Table: Guest List goes here...</h5>
      </template>
      <template #lower>
        <GuestForm />
      </template>
    </MultiPane>
  </q-page>
</template>

<script>
import FOMenubar from 'src/components/FOMenubar.vue'
import MultiPane from 'src/layouts/MultiPane.vue'
import GuestForm from 'src/pages/FO/fragments/GuestForm.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GuestList',
  components: { FOMenubar, MultiPane, GuestForm }
})
</script>

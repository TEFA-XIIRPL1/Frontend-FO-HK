<template>
  <q-page
    class="column"
    style="
      overflow-y: hidden;
      width: 100%;
      min-width: max-content;
      min-height: calc(100vh - 51.25px);
    "
  >
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
        <h5>Table: List Invoice goes here...</h5>
      </template>
      <template #lower>
        <InvoiceForm />
      </template>
    </MultiPane>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import FOMenubar from 'src/components/FOMenubar.vue'
import MultiPane from 'src/layouts/MultiPane.vue'
import InvoiceForm from './fragments/InvoiceForm.vue'

export default defineComponent({
  name: 'InvoicePage',
  components: { FOMenubar, MultiPane, InvoiceForm }
})
</script>

<template>
  <div class="selected-table">
    <q-table
      :rows="rows"
      :columns="columns"
      row-key="name"
      square
      :card-style="{ boxShadow: 'none' }"
      rows-per-page-label="Show"
      :hide-pagination="hidePagination"
      :dense="$q.screen.lt.md"
      :title="title"
      selection="single"
      v-model:selected="selected"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IMPPSSelectedTable',
  setup() {
    return {
      selected: ref([])
    }
  },
  props: {
    columns: Array,
    rows: Array,
    hidePagination: Boolean,
    title: String
  }
})
</script>

<style>
.selected-table .q-table th {
  border: 1px solid #b9b9b9;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
}
.selected-table .q-table tbody td {
  font-size: 14px;
  border-right: 4px solid white;
  border: 1px solid #b9b9b9;
}
.selected-table .q-table tbody tr:nth-child(even) {
  background-color: #fafafa;
}
.selected-table .q-table__bottom {
  display: inline-flex;
  justify-content: space-between;
  position: relative;
  border-width: 2px;
  border-right-width: 0;
  border-bottom-width: 0;
  border-left-width: 0;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-color: #069550;
  background: #fafafa;
}
.selected-table .q-table__control:nth-child(2) {
  position: absolute;
}
.selected-table .q-table__bottom .q-btn .q-icon {
  font-size: 1.875rem;
  line-height: 2.25rem;
  color: #069550;
}
.selected-table .disabled * {
  opacity: 0;
}

.selected-table .q-table__card .q-table__top {
  justify-content: center;
  background-color: #069550;
  color: white;
  font-size: 12px;
}
</style>

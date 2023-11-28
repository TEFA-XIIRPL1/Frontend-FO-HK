<template>
  <div class="tableComp">
    <q-table
      :rows="rows"
      :columns="columns"
      row-key="name"
      square
      :table-header-style="{
        backgroundColor: '#069550',
        color: '#ffffff',
        padding: '10px'
      }"
      :card-style="{ boxShadow: 'none' }"
      rows-per-page-label="Show"
      :hide-pagination="hidePagination"
      :dense="$q.screen.lt.md"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HKTable',
  props: {
    columns: Array,
    rows: Array,
    hidePagination: Boolean
  }
})
</script>

<style>
.tableComp .q-table th {
  border-top-width: 0;
  border-right-width: 4px;
  border-bottom-width: 0;
  border-left-width: 0;
  border-color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.tableComp .q-table tbody td {
  font-size: 14px;
  border-right: 4px solid white;
}
.tableComp .q-table tbody tr:nth-child(even) {
  background-color: #fafafa;
}
.tableComp .q-table__bottom {
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
.tableComp .q-table__control:nth-child(2) {
  position: absolute;
}
.tableComp .q-table__bottom .q-btn .q-icon {
  font-size: 1.875rem;
  line-height: 2.25rem;
  color: #069550;
}
.tableComp .disabled * {
  opacity: 0;
}
</style>

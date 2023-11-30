<template>
    <div class="my-table shadow-3 bg-white overflow-x-auto">
      <q-table
        square
        :rows="rows"
        :columns="columns"
        row-key="index"
        :loading="isLoading"
        @row-click="handleRowClick"
        class="shadow-none"
        :table-header-style="{
          backgroundColor: '#069550',
          color: '#ffffff',
          padding: '10px',
        }">
        <!-- <template v-slot:bottom>
          <div class="p-2 bg-[#C2E7B9] w-full">
          </div>
        </template> -->
      </q-table>
      <div class="p-4">
        <slot name="footer"></slot>
      </div>
    </div>
  </template>
  
  <script>
    import { defineComponent } from 'vue'
  
    export default defineComponent({
      name: 'MyTable',
      props: {
        columns: Array,
        rows: Array,
        isLoading: {
          type: Boolean,
          default: false,
        },
      },
      methods: {
        handleRowClick(row) {
          this.$emit('row-click', row)
        },
      },
    })
  </script>
  
  <style>
    .my-table .q-table {
      border: None;
      border-spacing: 3px;

    }
  
    .my-table .q-table tbody tr:nth-child(even) {
      background-color: #f8f8f8;
    }
  </style>
  
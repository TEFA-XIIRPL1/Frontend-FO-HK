<template>
  <q-page class="flex flex-center q-px-lg q-py-xl">
    <HKCard
      title="Extrabed Availability"
      radius="25px"
      card_class="full-width q-px-lg"
      style="max-height: 719px"
    >
      <div class="flex" style="gap: 8px 16px">
        <div class="flex items-center" style="gap: 8px">
          <span style="font-size: 14px; font-weight: 700">From Date :</span>
          <FormDate />
        </div>
        <div class="flex" style="gap: 8px 16px">
          <div class="flex items-center" style="gap: 8px">
            <span style="font-size: 14px; font-weight: 700">To Date :</span>
            <FormDate />
          </div>
          <div class="flex" style="gap: 8px; font-weight: 500">
            <div class="flex items-center" style="gap: 8px; padding-left: 211px">
              <span style="font-size: 14px; font-weight: 700">Article For:</span>
              <q-select
                outlined
                dense
                v-model="sortingModel"
                dropdown-icon="expand_more"
                :options="sortingOptions"
                style="width: 12rem"
                class="input-border"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Table -->
      <HKTable :columns="tableColumns" :rows="tableRows" class="q-mt-md" />
    </HKCard>
  </q-page>
</template>

<script>
import HKCard from 'src/components/HK/Card/HKCard.vue'
import HKTable from 'src/components/HK/Table/HKTable.vue'
import FormDate from 'src/components/general/Date.vue'
import { defineComponent, ref } from 'vue'
const tableColumns = [
  {
    name: 'date',
    required: true,
    label: 'Date',
    align: 'left',
    field: (row) => row.date,
    sortable: true
  },
  {
    name: 'room-no',
    align: 'left',
    label: 'Room No',
    field: 'roomNo',
    sortable: true
  },
  {
    name: 'used',
    field: 'used',
    label: 'Used',
    align: 'left',
    sortable: true
  },
  {
    name: 'remain',
    field: 'remain',
    label: 'Remain',
    align: 'left',
    sortable: true
  }
]

const tableRows = [
  {
    date: '10/02/23',
    roomNo: '101',
    used: '2',
    remain: '8'
  },
  {
    date: '10/02/23',
    roomNo: '102',
    used: '0',
    remain: '10'
  },
  {
    date: '10/02/23',
    roomNo: '103',
    used: '0',
    remain: '10'
  },
  {
    date: '10/02/23',
    roomNo: '104',
    used: '0',
    remain: '10'
  },
  {
    date: '10/02/23',
    roomNo: '105',
    used: '0',
    remain: '10'
  }
]

export default defineComponent({
  name: 'ExtrabedPage',
  components: { HKCard, HKTable, FormDate },
  data() {
    return {
      tableColumns,
      tableRows,
      sortingModel: ref('Extra Bed'),
      sortingOptions: ['Pillow', 'Blanket']
    }
  }
})
</script>

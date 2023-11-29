<template>
  <q-page class="column" style="overflow-y: hidden; min-width: max-content">
    <FOMenubar>
      <template #left>
        <!--Sorting Dropdown-->
        <q-btn-dropdown
          flat
          square
          class="text-capitalize"
          label="Sorting"
          dropdown-icon="o_expand_more"
        >
          <!--Konten Dropdown-->
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>Deluxe</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Standard</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section> Family </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>101-110</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>110-101</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Twin Bed</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>King Bed</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Single Bed</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-separator vertical />

        <!--Search Button-->
        <q-input v-model="searchInput" class="q-ml-sm" borderless dense label="Name" type="search">
          <template v-slot:prepend>
            <q-icon name="search" color="primary" />
          </template>
        </q-input>
        <q-separator vertical />

        <!-- date picker  -->
        <q-btn-dropdown
          flat
          square
          class="text-capitalize"
          label="TDate - FDate"
          icon="o_event"
          dropdown-icon="o_expand_more">
          <div>
            <q-date v-model="datePicker" range />
          </div>
        </q-btn-dropdown>
        <!---->
        <q-separator vertical />

<!--Display Option-->
<q-btn-dropdown
        flat
        square
        class="text-capitalize"
        label="Display Option"
        dropdown-icon="o_expand_more">
        <q-option-group :options="radioOptions" type="radio" v-model="radioInput" />
      </q-btn-dropdown>
      </template>
    </FOMenubar>
<q-separator>
  
</q-separator>
    <MultiPane>
      <template #upper>


           <!--Table-->
    <div class="my-table overflow-x-auto">
      <q-table
        square
        :rows="rows"
        :columns="columns"
        row-key="index"
        :loading="isLoading"
        @row-click="handleRowClick"
   />
   </div>
      </template>
      <template #lower>
        <GuestForm />
      </template>
    </MultiPane>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import FOMenubar from 'src/components/FOMenubar.vue'
import MultiPane from 'src/layouts/MultiPane.vue'
import GuestForm from './fragments/GuestForm.vue'

const datePicker = ref({ from: '2020/07/08', to: '2020/07/17' })
const radioInput = ref(null)
  const radioOptions = [
    { label: 'Reservation', value: 'reservation' },
    { label: 'Resident', value: 'resident' },
    { label: 'Arrival-Today', value: 'arrival-today' },
    { label: 'Depart-Today', value: 'depart-today' },
  ]
  const columns = [
  {
      name: 'name',
      required: true,
      label: 'Resno',
      align: 'center',
      field: (row) => row.name,
      format: (val) => `${val}`,
    },  
    { name: 'ReserveName', align: 'center', label: 'Reserve Name', field: 'ReserveName' },
    { name: 'RmNo', label: 'RmNo', align: 'center', field: 'RmNo' },
    { name: 'GuestName', label: 'GuestName', align: 'center', field: 'GuestName' },
    { name: 'Curr', label: 'Curr', align: 'center', field: 'Curr' },
    { name: 'Code', label: 'Code', align: 'center', field: 'Code' },
    {
      name: 'Average Room Oc (%)',
      label: 'Average Room Oc (%)',
      field: 'Average Room Oc (%)',
      align: 'center',
    },
  ]

  const rows = [
    {
      name: 187492,
      ReserveName: 'PERTAMINA.',
      RmNo: 334,
      GuestName: 'NIcky Putra Pradana',
      Curr: 'Rp',
      Code: 6,
      Arrival: '11/02/33',
    },

    {
      name: 187492,
      ReserveName: 'PERTAMINA.',
      RmNo: 334,
      GuestName: 'NIcky Putra Pradana',
      Curr: 'Rp',
      Code: 6,
      Arrival: '11/02/33',
    },

    {
      name: 187492,
      ReserveName: 'PERTAMINA.',
      RmNo: 334,
      GuestName: 'NIcky Putra Pradana',
      Curr: 'Rp',
      Code: 6,
      Arrival: '11/02/33',
    },

    {
      name: 187492,
      ReserveName: 'PERTAMINA.',
      RmNo: 334,
      GuestName: 'NIcky Putra Pradana',
      Curr: 'Rp',
      Code: 6,
      Arrival: '11/02/33',
    },

    {
      name: 187492,
      ReserveName: 'PERTAMINA.',
      RmNo: 334,
      GuestName: 'NIcky Putra Pradana',
      Curr: 'Rp',
      Code: 6,
      Arrival: '11/02/33',
    },

    {
      name: 187492,
      ReserveName: 'PERTAMINA.',
      RmNo: 334,
      GuestName: 'NIcky Putra Pradana',
      Curr: 'Rp',
      Code: 6,
      Arrival: '11/02/33',
    },
  ]

export default defineComponent({
  name: 'RoomAvailabilityPage',
  components: { FOMenubar, MultiPane, GuestForm },
  data() {
    return {
      datePicker, radioInput, radioOptions, rows, columns
    }
  }
})
</script>

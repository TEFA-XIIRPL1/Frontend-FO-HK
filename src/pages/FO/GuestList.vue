<template>
  <q-page class="column" style="overflow-y: hidden; min-width: max-content">
    <FOMenubar>
      <template #left>
        <div class="px-2">
          <q-input v-model="searchInput" borderless dense label="Name" type="search">
            <template v-slot:prepend>
              <q-icon name="search" color="primary" />
            </template>
          </q-input>
        </div>

        <q-separator vertical />

        <q-btn-dropdown
          flat
          square
          class="text-capitalize date-btn text-black"
          label="TDate - FDate"
          icon="o_event"
          color="primary"
          dropdown-icon="o_expand_more"
        >
          <div>
            <q-date v-model="datePicker" range />
          </div>
        </q-btn-dropdown>

        <q-separator vertical />

        <q-btn-dropdown
          flat
          square
          class="text-capitalize text-black"
          label="Display Option"
          color="primary"
          dropdown-icon="o_expand_more"
        >
          <q-option-group :options="radioOptions" type="radio" v-model="radioInput" />
        </q-btn-dropdown>
      </template>
      <template #right>
        <q-separator vertical />
        <q-btn flat square color="primary" icon="pending_actions">
          <q-tooltip>Pending</q-tooltip>
        </q-btn>
      </template>
    </FOMenubar>

    <MultiPane>
      <template #upper>
        <div class="my-table">
          <q-table
            :rows="rows"
            :columns="columns"
            row-key="name"
            :table-header-style="{
              backgroundColor: '#069550',
              color: '#ffffff',
              padding: '10px'
            }"
          >
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="ResNo" :props="props">
                  {{ props.row.ResNo }}
                </q-td>
                <q-td key="ResResource" :props="props">
                  {{ props.row.ResResource }}
                </q-td>
                <q-td key="RmNo" :props="props">
                  {{ props.row.RmNo }}
                </q-td>
                <q-td key="RType" :props="props">
                  {{ props.row.RType }}
                </q-td>
                <q-td key="BType" :props="props">
                  {{ props.row.BType }}
                </q-td>
                <q-td key="GuestName" :props="props">
                  {{ props.row.GuestName }}
                </q-td>
                <q-td key="Arr" :props="props">
                  {{ props.row.Arr }}
                </q-td>
                <q-td key="Arrival" :props="props">
                  {{ props.row.Arrival }}
                </q-td>
                <q-td key="Depart" :props="props">
                  {{ props.row.Depart }}
                </q-td>
                <q-td key="Night" :props="props">
                  {{ props.row.Night }}
                </q-td>
                <q-td key="RoomBoy" :props="props">
                  {{ props.row.RoomBoy }}
                </q-td>
                <q-td key="RoomRate" :props="props">
                  {{ props.row.RoomRate }}
                </q-td>
                <q-td key="CreatedDate" :props="props">
                  {{ props.row.CreatedDate }}
                </q-td>
                <q-td key="" :props="props" style="width: 10px">
                  <q-btn flat rounded size="13px" style="color: #008444"
                    ><svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 13C8.8 13 9.57 12.93 10.31 12.82L13.22 9.91C11.89 10.59 10 11 8 11C5.58 11 3.3 10.4 2 9.45V6.64C3.47 7.47 5.61 8 8 8C10.39 8 12.53 7.47 14 6.64V9.13L15.39 7.74C15.57 7.56 15.78 7.42 16 7.3V4C16 1.79 12.42 0 8 0C3.58 0 0 1.79 0 4V14C0 16.04 3.06 17.72 7 17.97V16.13L7.17 15.96C3.84 15.76 2 14.46 2 14V11.77C3.61 12.55 5.72 13 8 13ZM8 2C11.87 2 14 3.5 14 4C14 4.5 11.87 6 8 6C4.13 6 2 4.5 2 4C2 3.5 4.13 2 8 2ZM15.13 10.83L17.17 12.87L11.04 19H9V16.96L15.13 10.83ZM18.85 11.19L17.87 12.17L15.83 10.13L16.81 9.15C17 8.95 17.33 8.95 17.53 9.15L18.85 10.47C19.05 10.67 19.05 11 18.85 11.19Z"
                        fill="#008444"
                      />
                    </svg>
                  </q-btn>
                  <q-btn flat rounded size="13px" style="color: #269861"
                    ><svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 10.59V4.5C16 2.29 12.42 0.5 8 0.5C3.58 0.5 0 2.29 0 4.5V14.5C0 16.71 3.59 18.5 8 18.5C8.46 18.5 8.9 18.5 9.33 18.44C9.1129 17.8162 9.00137 17.1605 9 16.5V16.45C8.68 16.5 8.35 16.5 8 16.5C4.13 16.5 2 15 2 14.5V12.27C3.61 13.05 5.72 13.5 8 13.5C8.65 13.5 9.27 13.46 9.88 13.39C10.4127 12.5085 11.1638 11.7794 12.0607 11.2731C12.9577 10.7668 13.9701 10.5005 15 10.5C15.34 10.5 15.67 10.54 16 10.59ZM14 9.95C12.7 10.9 10.42 11.5 8 11.5C5.58 11.5 3.3 10.9 2 9.95V7.14C3.47 7.97 5.61 8.5 8 8.5C10.39 8.5 12.53 7.97 14 7.14V9.95ZM8 6.5C4.13 6.5 2 5 2 4.5C2 4 4.13 2.5 8 2.5C11.87 2.5 14 4 14 4.5C14 5 11.87 6.5 8 6.5ZM19 15.5V17.5H11V15.5H19Z"
                        fill="#269861"
                      />
                    </svg>
                  </q-btn>
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </div>
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
import { defineComponent, ref } from 'vue'

const searchInput = ref('')

const datePicker = ref({ from: '', to: '' })

const radioInput = ref(null)
const radioOptions = [
  { label: 'Reservation', value: 'reservation' },
  { label: 'In-House Guest', value: 'in-house-guest' },
  { label: 'Arrival-Today', value: 'arrival-today' },
  { label: 'Depart-Today', value: 'depart-today' }
]

const columns = [
  { name: 'ResNo', label: 'ResNo', align: 'left', field: 'ResNo' },
  { name: 'ResResource', label: 'ResResource', align: 'left', field: 'ResResource' },
  { name: 'RmNo', label: 'RmNo', align: 'left', field: 'RmNo' },
  { name: 'RType', label: 'RType', align: 'left', field: 'RType' },
  { name: 'BType', label: 'BType', align: 'left', field: 'BType' },
  { name: 'GuestName', label: 'GuestName', align: 'left', field: 'GuestName' },
  { name: 'Arr', label: 'Arr', field: 'Arr', align: 'left' },
  { name: 'Arrival', label: 'Arrival', align: 'left', field: 'Arrival' },
  { name: 'Depart', label: 'Depart', align: 'left', field: 'Depart' },
  { name: 'Night', label: 'Night', align: 'left', field: 'Night' },
  { name: 'RoomBoy', label: 'RoomBoy', align: 'left', field: 'RoomBoy' },
  { name: 'RoomRate', label: 'RoomRate', align: 'left', field: 'RoomRate' },
  { name: 'CreatedDate', label: 'CreatedDate', align: 'left', field: 'CreatedDate' },
  { name: '', label: '', align: 'center', field: '' }
]

const rows = [
  {
    ResNo: '188086',
    ResResource: 'WhatsApp',
    RmNo: '101',
    RType: 'DLX',
    BType: 'K',
    GuestName: 'RONO RUSTAN',
    Arr: 'RB',
    Arrival: '12/02/23',
    Depart: '13/02/23',
    Night: '1',
    RoomBoy: 'ILYAS',
    RoomRate: 'Rp 541,027.00',
    CreatedDate: '12/02/23'
  },
  {
    ResNo: '188085',
    ResResource: 'Walk-In',
    RmNo: '102',
    RType: 'DLX',
    BType: 'T',
    GuestName: 'DZAKIYA',
    Arr: 'RO',
    Arrival: '12/02/23',
    Depart: '13/02/23',
    Night: '1',
    RoomBoy: 'RONI',
    RoomRate: 'Rp 541,027.00',
    CreatedDate: '12/02/23'
  },
  {
    ResNo: '188084',
    ResResource: 'WhatsApp',
    RmNo: '103',
    RType: 'STD',
    BType: 'K',
    GuestName: 'FACHRI',
    Arr: 'RB',
    Arrival: '12/02/23',
    Depart: '13/02/23',
    Night: '1',
    RoomBoy: 'YUTA',
    RoomRate: 'Rp 541,027.00',
    CreatedDate: '12/02/23'
  },
  {
    ResNo: '188085',
    ResResource: 'Walk-In',
    RmNo: '102',
    RType: 'STD',
    BType: 'T',
    GuestName: 'BENI',
    Arr: 'RB',
    Arrival: '12/02/23',
    Depart: '13/02/23',
    Night: '1',
    RoomBoy: 'HERTIAMAN',
    RoomRate: 'Rp 541,027.00',
    CreatedDate: '12/02/23'
  },
  {
    ResNo: '',
    ResResource: '',
    RmNo: '',
    RType: '',
    BType: '',
    GuestName: '',
    Arr: '',
    Arrival: '',
    Depart: '',
    Night: '',
    RoomBoy: '',
    RoomRate: '',
    CreatedDate: ''
  },
  {
    ResNo: '',
    ResResource: '',
    RmNo: '',
    RType: '',
    BType: '',
    GuestName: '',
    Arr: '',
    Arrival: '',
    Depart: '',
    Night: '',
    RoomBoy: '',
    RoomRate: '',
    CreatedDate: ''
  },
  {
    ResNo: '',
    ResResource: '',
    RmNo: '',
    RType: '',
    BType: '',
    GuestName: '',
    Arr: '',
    Arrival: '',
    Depart: '',
    Night: '',
    RoomBoy: '',
    RoomRate: '',
    CreatedDate: ''
  },
  {
    ResNo: '',
    ResResource: '',
    RmNo: '',
    RType: '',
    BType: '',
    GuestName: '',
    Arr: '',
    Arrival: '',
    Depart: '',
    Night: '',
    RoomBoy: '',
    RoomRate: '',
    CreatedDate: ''
  },
  {
    ResNo: '',
    ResResource: '',
    RmNo: '',
    RType: '',
    BType: '',
    GuestName: '',
    Arr: '',
    Arrival: '',
    Depart: '',
    Night: '',
    RoomBoy: '',
    RoomRate: '',
    CreatedDate: ''
  },
  {
    ResNo: '',
    ResResource: '',
    RmNo: '',
    RType: '',
    BType: '',
    GuestName: '',
    Arr: '',
    Arrival: '',
    Depart: '',
    Night: '',
    RoomBoy: '',
    RoomRate: '',
    CreatedDate: ''
  }
]

export default defineComponent({
  name: 'GuestList',
  components: { FOMenubar, MultiPane, GuestForm },
  data() {
    return {
      searchInput,
      datePicker,
      radioInput,
      radioOptions,
      rows,
      columns
    }
  }
})
</script>

<style scoped></style>

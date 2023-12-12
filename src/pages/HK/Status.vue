<template>
  <q-page class="q-pa-lg">
    <div class="q-gutter">
      <div class="row q-gutter-lg flex-center flex">
        <div class="row">
          <HKCard card_class="" card_style="max-width:550px; min-height:650px;" radius="10px">
            <div class="row">
              <div class="column">
                <div class="row q-px-md q-pt-md">
                  <label for="display" class="q-mt-lg text-weight-bold text-body2">Display</label>
                  <q-select
                    standout
                    dense
                    v-model="model"
                    :options="options"
                    style="width: 360px"
                    class="q-px-md q-pt-md"
                    align="left"
                    id="display"
                    dropdown-icon="expand_more"
                    no-caps
                    radius="100px;"
                    outlined
                  >
                  </q-select>
                </div>
                <div class="row q-px-md q-pt-sm">
                  <label for="display" class="q-mt-lg text-weight-bold text-body2">Sorting</label>
                  <q-select
                    standout
                    dense
                    v-model="model2"
                    :options="options2"
                    style="width: 360px"
                    class="q-px-md q-pt-md"
                    align="left"
                    id="display"
                    dropdown-icon="expand_more"
                    no-caps
                    radius="100px;"
                    outlined
                  >
                  </q-select>
                </div>
              </div>
              <div class="flex items-center q-mt-lg">
                <q-btn flat round color="green" size="15px"
                  ><svg
                    width="29"
                    height="28"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 6.88889V3.05556H7.5V6.88889H5V0.5H20V6.88889H17.5ZM20 12.6389C20.3542 12.6389 20.6512 12.5162 20.8912 12.2709C21.1312 12.0256 21.2508 11.7223 21.25 11.3611C21.25 10.9991 21.13 10.6954 20.89 10.4501C20.65 10.2047 20.3533 10.0825 20 10.0833C19.6458 10.0833 19.3487 10.206 19.1087 10.4513C18.8687 10.6967 18.7492 10.9999 18.75 11.3611C18.75 11.7231 18.87 12.0268 19.11 12.2722C19.35 12.5175 19.6467 12.6397 20 12.6389ZM17.5 20.9444V15.8333H7.5V20.9444H17.5ZM20 23.5H5V18.3889H0V10.7222C0 9.63611 0.364583 8.72548 1.09375 7.99033C1.82292 7.25519 2.70833 6.88804 3.75 6.88889H21.25C22.3125 6.88889 23.2033 7.25646 23.9225 7.99161C24.6417 8.72676 25.0008 9.63696 25 10.7222V18.3889H20V23.5ZM22.5 15.8333V10.7222C22.5 10.3602 22.38 10.0565 22.14 9.81117C21.9 9.56583 21.6033 9.44359 21.25 9.44444H3.75C3.39583 9.44444 3.09875 9.56711 2.85875 9.81244C2.61875 10.0578 2.49917 10.361 2.5 10.7222V15.8333H5V13.2778H20V15.8333H22.5Z"
                      fill="#008444"
                    />
                  </svg>
                </q-btn>
              </div>
              <div class="tableComp">
                <q-table
                  :rows="dataRows"
                  :columns="dataColumns"
                  row-key="name"
                  square
                  class="q-pa-md"
                  :table-header-style="{
                    backgroundColor: '#069550',
                    color: '#ffffff',
                    padding: '10px'
                  }"
                  :card-style="{ boxShadow: 'none' }"
                  rows-per-page-label="Show"
                  :pagination="{ rowsPerPage: 10, options: [10] }"
                  :hide-pagination="true"
                >
                  <template v-slot:body="props">
                    <q-tr :props="props" class="q-d-xs q-d-sm q-d-md">
                      <q-td key="room-no" :props="props">
                        {{ props.row.roomno }}
                      </q-td>
                      <q-td key="cat" :props="props">
                        {{ props.row.cat }}
                      </q-td>
                      <q-td key="s" :props="props">
                        {{ props.row.s }}
                      </q-td>
                      <q-td key="Priority" :props="props">
                        {{ props.row.priority }}
                      </q-td>
                      <q-td key="st" :props="props">
                        {{ props.row.st }}
                      </q-td>
                      <q-td key="statusdesc" :props="props">
                        {{ props.row.statusdesc }}
                      </q-td>
                    </q-tr>
                  </template>
                </q-table>
              </div>
            </div>
          </HKCard>
        </div>
        <div class="column" style="margin-bottom: auto">
          <div>
            <HKCard
              card_class="column"
              card_style="width:550px; height:340px; min-height:270px;"
              radius="20px"
            >
              <div class="row q-pa-xl">
                <div class="column">
                  <div class="text-weight-bold">Change Status to :</div>
                  <q-radio
                    v-model="status"
                    val="cleanChecked"
                    label="Clean Checked"
                    color="#069550"
                    size="xs"
                    dense
                    class="q-pt-md"
                  />
                  <q-radio
                    v-model="status"
                    val="cleanUnchecked"
                    label="Clean Unchecked"
                    color="#069550"
                    size="xs"
                    dense
                    class="q-pt-sm"
                  />
                  <q-radio
                    v-model="status"
                    val="dirty"
                    label="Dirty"
                    color="#069550"
                    size="xs"
                    dense
                    class="q-pt-sm"
                  />
                  <q-radio
                    v-model="status"
                    val="doNotDisturb"
                    label="Do not Disturb"
                    color="#069550"
                    size="xs"
                    dense
                    class="q-pt-sm"
                  />
                  <q-radio
                    v-model="status"
                    val="outOfOrder"
                    label="Out of Order"
                    color="#069550"
                    size="xs"
                    dense
                    class="q-pt-sm"
                  />
                  <q-radio
                    v-model="status"
                    val="offMarket"
                    label="Off Market"
                    color="#069550"
                    size="xs"
                    dense
                    class="q-pt-sm"
                  />
                </div>
                <div class="column flex items-center" style="margin-left: 20%; margin-top: 10%">
                  <div class="row">
                    <p class="text-weight-bold text-body1 q-mt-sm">Room No</p>
                    <div
                      class="q-mx-md text-weight-bold flex items-center"
                      style="width: 60px; height: 30px; background-color: white"
                    >
                      t
                    </div>
                  </div>
                </div>
              </div>
            </HKCard>
          </div>
          <div class="q-pt-md">
            <HKCard> Mbasing </HKCard>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent, ref } from 'vue'
import HKCard from 'src/components/HK/Card/HKCard.vue'
import HKTable from 'src/components/HK/Table/HKTable.vue'

export default defineComponent({
  name: 'StatusPage',
  components: { HKCard },
  setup() {
    const status = ref('cleanChecked')
    return {
      dataColumns,
      dataRows,
      status,
      model: ref('All'),
      model2: ref('Room Number'),
      options: ['All', 'Waduhek'],
      options2: ['Room Number']
    }
  }
})

const dataColumns = [
  {
    name: 'room-no',
    required: true,
    label: 'Rm No',
    align: 'left',
    field: 'roomno'
  },
  {
    name: 'cat',
    align: 'left',
    label: 'Cat',
    field: 'cat'
  },
  {
    name: 's',
    align: 'left',
    label: 'S',
    field: 's'
  },
  {
    name: 'Priority',
    align: 'left',
    label: 'Priority',
    field: 'priority'
  },
  {
    name: 'st',
    label: 'St',
    field: 'st',
    align: 'left'
  },
  {
    name: 'statusdesc',
    label: 'Status Description',
    field: 'statusdesc',
    align: 'left'
  }
]

const dataRows = [
  { roomno: '101', cat: 'A', s: '1', priority: 'High', st: 'Active', statusdesc: 'Occupied' },
  { roomno: '102', cat: 'B', s: '2', priority: 'Medium', st: 'Inactive', statusdesc: 'Vacant' },
  { roomno: '103', cat: 'C', s: '3', priority: 'Low', st: 'Active', statusdesc: 'Occupied' },
  { roomno: '104', cat: 'D', s: '4', priority: 'High', st: 'Inactive', statusdesc: 'Vacant' },
  { roomno: '105', cat: 'E', s: '5', priority: 'Medium', st: 'Active', statusdesc: 'Occupied' },
  { roomno: '106', cat: 'E', s: '5', priority: 'Medium', st: 'Active', statusdesc: 'Occupied' },
  { roomno: '107', cat: 'E', s: '5', priority: 'Medium', st: 'Active', statusdesc: 'Occupied' },
  { roomno: '108', cat: 'E', s: '5', priority: 'Medium', st: 'Active', statusdesc: 'Occupied' },
  { roomno: '109', cat: 'E', s: '5', priority: 'Medium', st: 'Active', statusdesc: 'Occupied' },
  { roomno: '110', cat: 'E', s: '5', priority: 'Medium', st: 'Active', statusdesc: 'Occupied' },
  { roomno: '111', cat: 'E', s: '5', priority: 'Medium', st: 'Active', statusdesc: 'Occupied' }
]
</script>
<style>
.q-field--auto-height.q-field--dense .q-field__control {
  border-radius: 10px;
}
.tablestatus thead tr th {
}
</style>

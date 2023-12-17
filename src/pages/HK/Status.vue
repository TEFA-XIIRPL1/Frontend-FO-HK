<template>
  <q-page class="q-pa-lg">
    <div class="q-gutter">
      <div class="row q-gutter-lg flex-center flex">
        <div class="row">
          <HKCard card_class="ambasing" radius="10px">
            <div class="column">
              <div
                class="q-px-md q-pt-sm q-gutter-x-md"
                style="min-width: 200px; display: flex; flex-wrap: wrap; align-items: center"
              >
                <label for="display" class="q-mt-md text-weight-bold text-body2" style="width: 10%"
                  >Sorting</label
                >
                <div class="ambatukam">
                  <q-select
                    standout
                    dense
                    v-model="model2"
                    :options="options2"
                    class="q-pt-md"
                    align="left"
                    style="width: 80%"
                    id="display"
                    dropdown-icon="expand_more"
                    no-caps
                    radius="100px;"
                    outlined
                  >
                  </q-select>
                  <q-btn flat round color="green" size="18px" class="q-mt-sm q-ml-md">
                    <svg
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
              </div>

              <div class="tableComp q-mt-sm flex flex-center full-width">
                <q-table
                  :rows="dataRows"
                  :columns="dataColumns"
                  row-key="name"
                  square
                  class="q-pa-md full-width"
                  :table-header-style="{
                    backgroundColor: '#069550',
                    color: '#ffffff',
                    padding: '10px'
                  }"
                  :card-style="{ boxShadow: 'none' }"
                  rows-per-page-label="Show"
                  :pagination="{ rowsPerPage: 10 }"
                  :hide-pagination="false"
                >
                  <template v-slot:body="props">
                    <q-tr :props="props" class="q-d-xs q-d-sm q-d-md">
                      <q-td key="room-no" :props="props">
                        {{ props.row.roomno }}
                      </q-td>
                      <q-td key="roomtype" :props="props">
                        {{ props.row.roomtype }}
                      </q-td>
                      <q-td key="btype" :props="props">
                        {{ props.row.btype }}
                      </q-td>
                      <q-td key="statusdescription" :props="props">
                        {{ props.row.statusdescription }}
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
              card_class="column ambasing"
              card_style="flex-grow:1; height: fit-content;"
              radius="20px"
            >
              <div class="row q-pa-xl justify-between q-gutter-md">
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
                <div class="column flex items-center" style="margin-top: 10%">
                  <div class="row">
                    <p class="text-weight-bold text-body1 q-mt-sm">Room No</p>
                    <div class="" style="width: 60px; height: 30px; background-color: white">
                      <q-btn-dropdown
                        dropdown-icon="n"
                        label=""
                        class="q-mx-md text-weight-bold flex items-center"
                        style="width: 100%"
                        push
                      ></q-btn-dropdown>
                    </div>
                  </div>
                  <q-btn
                    label="Change Status"
                    style="border-radius: 10px; width: 160px; background-color: #81bb78"
                    color=""
                    class="text-weight-bold"
                    push
                    no-caps
                    text-color="black"
                  />
                </div>
              </div>
            </HKCard>
          </div>
          <div class="q-mt-xl">
            <div class="row">
              <div class="text-weight-bold col-4 rstatus">Room Status</div>
              <div
                class="col text-center flex flex-center text-weight-bold"
                style="
                  background-color: #81bb78;
                  border-right: 1px solid black;
                  height: 40px;
                  border-top-left-radius: 5px;
                  border-bottom-left-radius: 5px;
                "
              >
                03
              </div>
              <div
                class="col-7 text-center flex flex-center text-weight-bold"
                style="
                  background-color: #81bb78;
                  height: 40px;
                  border-top-right-radius: 5px;
                  border-bottom-right-radius: 5px;
                "
              >
                Occupied Dirty
              </div>
            </div>
          </div>
          <div class="ambasing">
            <div class="row">
              <div
                style="background-color: #069550"
                class="text-weight-bold flex flex-center col-12"
              >
                <div class="flex flex-center text-white col q-ml-xl">Queuing Rooms</div>
                <q-btn label="" flat round size="" class="q-ml-auto"
                  ><svg
                    width="32"
                    height="31"
                    viewBox="0 0 32 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.8829 12.6548L24.9615 17.5852L29.9017 12.5166"
                      stroke="white"
                      stroke-width="2"
                    />
                    <path
                      d="M20.6486 22.7229C18.9907 23.709 17.0531 24.1215 15.1364 23.8965C13.2196 23.6715 11.4308 22.8215 10.0474 21.4785C8.66399 20.1354 7.76327 18.3743 7.48495 16.4683C7.20663 14.5622 7.56625 12.6178 8.50805 10.9365C9.44985 9.25525 10.9212 7.93112 12.6939 7.16949C14.4665 6.40785 16.4415 6.25129 18.3124 6.72406C20.1834 7.19684 21.8457 8.27254 23.0416 9.78433C24.2376 11.2961 24.9003 13.1595 24.9269 15.0855"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </q-btn>
              </div>
              <q-table
                  :rows="dataRows2"
                  :columns="dataColumns2"
                  row-key="name"
                  style="margin-top: 2px; "
                  square
                  class="full-width"
                  :table-header-style="{
                    backgroundColor: '#069550',
                    color: '#ffffff',
                    padding: '10px'
                  }"
                  :card-style="{ boxShadow: 'none' }"
                  rows-per-page-label="Show"
                  :pagination="{ rowsPerPage: 10 }"
                  :hide-pagination="false"
                >
                  <template v-slot:body="props">
                    <q-tr :props="props" class="q-d-xs q-d-sm q-d-md">
                      <q-td key="roomno" :props="props">
                        {{ props.row.roomno }}
                      </q-td>
                      <q-td key="Request" :props="props">
                        {{ props.row.Request }}
                      </q-td>
                      <q-td key="PIC" :props="props">
                        {{ props.row.PIC }}
                      </q-td>
                      <q-td key="Status" :props="props">
                        {{ props.row.Status }}
                      </q-td>
                      
                    </q-tr>
                  </template>
                </q-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent, ref } from 'vue'
import HKCard from 'src/components/HK/HKCard.vue'
import HKTable from 'src/components/HK/HKTable.vue'

export default defineComponent({
  name: 'StatusPage',
  components: { HKCard,  },
  setup() {
    const status = ref('cleanChecked')
    return {
      dataColumns,
      dataColumns2,
      dataRows2,
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
    name: 'roomtype',
    align: 'left',
    label: 'RType',
    field: 'roomtype'
  },
  {
    name: 'btype',
    align: 'left',
    label: 'BType',
    field: 'btype'
  },
  {
    name: 'statusdescription',
    align: 'left',
    label: 'Status Description',
    field: 'statusdescription'
  }
]

const dataColumns2 = [
  {
    name: 'roomno',
    required: true,
    label: 'Room No',
    align: 'left',
    field: 'roomno'
  },
  {
    name: 'Request',
    align: 'left',
    label: 'Request',
    field: 'Request'
  },
  {
    name: 'PIC',
    align: 'left',
    label: 'PIC',
    field: 'PIC'
  },
  {
    name: 'Status',
    align: 'left',
    label: 'Status',
    field: 'Status'
  }
]

const dataRows2=[
  {
    roomno: '101',
    Request: 'Maintenance',
    PIC: 'John Doe',
    Status: 'Pending'
  },
  {
    roomno: '102',
    Request: 'Cleaning',
    PIC: 'Jane Doe',
    Status: 'Completed'
  },
]

const dataRows = [
  { roomno: '101', roomtype: 'A', btype: 'K', statusdescription: 'Expected Departure' },
  { roomno: '102', roomtype: 'B', btype: 'S', statusdescription: 'Expected Departure' },
  { roomno: '103', roomtype: 'C', btype: 'K', statusdescription: 'Expected Departure' },
  { roomno: '104', roomtype: 'D', btype: 'S', statusdescription: 'Expected Departure' },
  { roomno: '106', roomtype: 'E', btype: 'K', statusdescription: 'Expected Departure' },
  { roomno: '107', roomtype: 'E', btype: 'K', statusdescription: 'Expected Departure' },
  { roomno: '108', roomtype: 'E', btype: 'K', statusdescription: 'Expected Departure' },
  { roomno: '109', roomtype: 'E', btype: 'K', statusdescription: 'Expected Departure' },
  { roomno: '110', roomtype: 'E', btype: 'K', statusdescription: 'Expected Departure' },
  { roomno: '111', roomtype: 'E', btype: 'K', statusdescription: 'Expected Departure' }
]
</script>
<style>
.q-field--auto-height.q-field--dense .q-field__control {
  border-radius: 10px;
}
.tablestatus thead tr th {
}

.ambatukam {
  display: flex;
  align-items: center;
  width: 80%;
}
.rstatus {
  margin-top: 5px;
  font-size: 20px;
}

@media only screen and (max-width: 400px) {
  .ambasing {
    width: 80vw;
  }

  .ambatukam {
    width: 100%;
  }
  .rstatus {
    font-size: 17px;
  }
}
@media only screen and (max-width: 380px) {
  .rstatus {
    font-size: 15px;
    margin-top: 10px;
  }
}
</style>

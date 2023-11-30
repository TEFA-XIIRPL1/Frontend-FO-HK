<template>
  <q-page class="column" style="overflow-y: hidden; min-width: max-content">
    <FOMenubar>
      <template #left>
        <!--sorting-->
        <q-btn-dropdown
          flat
          square
          dense
          label="Sorting"
          style="font-size: 15px; text-transform: none; height: 5px;"
          dropdown-icon="o_expand_more">
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>Most Revenue</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Less Revenue</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-separator vertical/>

        <!--search Name-->
          <q-input v-model="searchInput" 
            borderless 
            dense
            label="Nama"
            type="search">
            <template v-slot:prepend>
              <q-icon name="search" color="primary" />
            </template>
          </q-input>
        <q-separator vertical/>

        <!--calendar-->
        <q-btn-dropdown
          dense
          flat
          square
          label="TDate - FDate"
          style="font-size: 14px; text-transform: none;"
          icon="o_event"
          dropdown-icon="o_expand_more">
            <q-date v-model="datePicker" color="primary" range />
        </q-btn-dropdown>
        <q-separator vertical/>

        <!--display option-->
        <q-btn-dropdown
          dense
          flat
          square
          class="text-capitalize"
          label="Display Option"
          dropdown-icon="o_expand_more">
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>Per-Day</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Per-Week</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Per-Month</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Per-Years</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </template>

      <template #right>
        <!--print-->
        <q-btn flat square 
        color="primary"
        icon="o_print"
        style="width: 15px; height: 5px;"
        @click="open('right')">
        </q-btn>

        <q-dialog v-model="dialog" :position="position">
          <q-card style="width: 400px; height: 100%;">
            <q-card-section style="margin-top: 40px;">

              <q-container>
                <q-row class="my-flex-container">
                  <p class="" style="margin-right: 290px;">Print</p>
                  <p class="my-flex-item2">2 Pages</p>
                </q-row>
              </q-container>

              <q-container>
                <q-row class="my-flex-container">
                  <p class="my-flex-item">Forecast</p>
                  <q-select
                  outlined
                  dense
                  dropdown-icon="o_expand_more"
                  style="width: 180px;"
                  v-model="forecastpages"
                  :options="forecastpagesoptions"
                  color="primary">
                  <template v-slot:prepend>
                    <q-icon name="event" />
                  </template>
                  </q-select>
                </q-row>
              </q-container>

              <q-container>
                <q-row class="my-flex-container">
                  <p class="my-flex-item">Destination</p>
                  <q-select
                  outlined
                  dense
                  dropdown-icon="o_expand_more"
                  style="width: 180px;"
                  v-model="destinationpages"
                  :options="destinationpagesoptions">
                  <template v-slot:prepend>
                    <q-icon name="description" />
                  </template>
                </q-select>
                </q-row>
              </q-container>

              <q-container>
                <q-row class="my-flex-container">
                  <p class="my-flex-item">Pages</p>
                  <q-select
                  dense
                  outlined
                  dropdown-icon="o_expand_more"
                  style="width: 180px;"
                  v-model="pagepages"
                  :options="pagepagesoptions">
                </q-select>
                </q-row>
              </q-container>

              <q-container>
                <q-row class="my-flex-container">
                  <p class="my-flex-item">Pages per sheet</p>
                  <q-select
                  outlined
                  dense
                  dropdown-icon="o_expand_more"
                  style="width: 180px;"
                  v-model="sheetpages"
                  :options="sheetpagesoptions">
                </q-select>
                </q-row>
              </q-container>

              <q-container style="margin-top: 20px;">
                <q-row class="my-flex-container">
                  <p class="my-flex-item">Margins</p>
                  <q-select
                  outlined
                  dense
                  dropdown-icon="o_expand_more"
                  style="width: 180px;"
                  v-model="marginpages"
                  :options="marginpagesoptions">
                </q-select>
                </q-row>
              </q-container>

              <div class="my-flex-container" style="margin-top: 200px;margin-left: 150px;">
                <div style="padding-right: 7px;">
                  <q-btn color="primary" label="Print" class="button"/>
                </div>
                <div style="padding-right: 7px;">
                  <q-btn color="primary" label="Save" class="button"/>
                </div>
                <div>
                  <q-btn color="white" text-color="primary" height="10px" weight="70px" style="text-transform: none; border-radius: 5px;" label="Cancel"/>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>
      </template>
    </FOMenubar>

    <MultiPane>
      <template #upper>
        <!--table-->
        <MyTable flat :rows="rows" :columns="columns" @row-click="handleRowClick" 
        style="padding-top: 10px;"/>
      </template>
      <template #lower>
        <ReportInsight />
      </template>
    </MultiPane>
  </q-page>
</template>

<script>
import FOMenubar from 'src/components/FOMenubar.vue'
import MyTable from 'src/components/Table.vue'
import MultiPane from 'src/layouts/MultiPane.vue'
import ReportInsight from 'src/pages/FO/fragments/ReportInsight.vue'
import { defineComponent , ref} from 'vue'

const searchInput = ref('')
const datePicker = ref('')
const dialog = ref(false)
const position = ref('top')

const forecastpages = ref('Per-Month')
const forecastpagesoptions = ['Per-Month', 'Per-Day', 'Total']

const destinationpages = ref('Save as PDF')
const destinationpagesoptions = ['Save as PDF']

const pagepages = ref('All')
const pagepagesoptions = ['All', 'Odd pages only', 'Even pages only', 'Custom']

const sheetpages = ref('1')
const sheetpagesoptions = ['1', '2', '4', '6', '9', '16']

const marginpages = ref('Default')
const marginpagesoptions = ['Default', 'None', 'Minimum', 'Custom']

const columns = [
    {
      name: 'Date',
      required: true,
      label: 'Date',
      align: 'left',
      field: row => row.name,
      format: val => `${val}`,
    },
    { name: 'RoomAvailable', align: 'left', label: 'Room Available', field: 'RoomAvailable' },
    { name: 'Occupied', label: 'Occupied', align: 'left', field: 'Occupied' },
    { name: 'Occ', label: 'Occ%', align: 'left', field: 'Occ' },
    { name: 'Room Revenue', label: 'Room Revenue', align: 'left', field: 'RoomRevenue' },
    { name: 'Arr', label: 'Arr', align: 'left', field: 'Arr' },
    { name: 'MTD Rm.Avail', label: 'MTD Rm.Avail', align: 'left', field: 'MTDRmAvail' },
    { name: 'MTD RNO', label: 'MTD RNO', align: 'left', field: 'MTDRNO' },
    { name: 'MTD Occ. %', label: 'MTD Occ. %', align: 'left', field: 'MTDOcc' },
    { name: 'MTD Rm.Revenue', label: 'MTD Rm.Revenue', align: 'left', field: 'MTDRmRevenue' },  
    {
      name: 'MTD ARR',
      label: 'MTD ARR',
      field: 'MTDARR',
      align: 'left',
    },
  ]

  const rows = [
    {
      name: '12/02/23',
      RoomAvailable: 364,
      Occupied: 93,
      Occ: '36.2%',
      RoomRevenue: '378.483.224,00',
      Arr: '526.834,00',
      MTDRmAvail: '9.819',
      MTDRNO: '5.961',
      MTDOcc: '50,91%',
      MTDRmRevenue: '3.121.348.432',
      MTDARR: '374.947'
    },
    {
      name: '12/02/23',
      RoomAvailable: 364,
      Occupied: 93,
      Occ: '36.2%',
      RoomRevenue: '378.483.224,00',
      Arr: '526.834,00',
      MTDRmAvail: '9.819',
      MTDRNO: '5.961',
      MTDOcc: '50,91%',
      MTDRmRevenue: '3.121.348.432',
      MTDARR: '374.947'
    },
    {
      name: '12/02/23',
      RoomAvailable: 364,
      Occupied: 93,
      Occ: '36.2%',
      RoomRevenue: '378.483.224,00',
      Arr: '526.834,00',
      MTDRmAvail: '9.819',
      MTDRNO: '5.961',
      MTDOcc: '50,91%',
      MTDRmRevenue: '3.121.348.432',
      MTDARR: '374.947'
    },
    {
      name: '12/02/23',
      RoomAvailable: 364,
      Occupied: 93,
      Occ: '36.2%',
      RoomRevenue: '378.483.224,00',
      Arr: '526.834,00',
      MTDRmAvail: '9.819',
      MTDRNO: '5.961',
      MTDOcc: '50,91%',
      MTDRmRevenue: '3.121.348.432',
      MTDARR: '374.947'
    },
    {
      name: '12/02/23',
      RoomAvailable: 364,
      Occupied: 93,
      Occ: '36.2%',
      RoomRevenue: '378.483.224,00',
      Arr: '526.834,00',
      MTDRmAvail: '9.819',
      MTDRNO: '5.961',
      MTDOcc: '50,91%',
      MTDRmRevenue: '3.121.348.432',
      MTDARR: '374.947'
    },
  ]

export default defineComponent({
  name: 'ReportsPage',
  components: { FOMenubar, ReportInsight, MultiPane , MyTable},
  data() {
      return {rows,
        columns,
        datePicker, 
        searchInput,
        dialogDetailVisible: false,
        dialog,
        position,
        forecastpages,
        forecastpagesoptions,
        destinationpages,
        destinationpagesoptions,
        pagepages,
        pagepagesoptions,
        sheetpages,
        sheetpagesoptions,
        marginpages,
        marginpagesoptions,}
    },
    methods: {
      handleRowClick () {
        this.dialogDetailVisible = true
      },  
      open (pos) {
        position.value = pos
        dialog.value = true
      }
    }
})
</script>

<style>
  .my-flex-container {
  display: flex;
  margin-bottom: 7px;
  /* Properti flexbox lainnya */
}
.my-flex-item {
  flex: 2; 
  font-size: small;
  color: black;/* Atur flex item sesuai kebutuhan */
  /* Gaya lainnya untuk flex item */
}
.button {
  text-transform: none;
  box-shadow: none;
  height: 10px;
  width: 70px;
  border-radius: 5px;
}
</style>

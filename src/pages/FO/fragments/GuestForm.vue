<template>
  <div class="q-mt-sm row no-wrap q-gutter-md">
    <div class="">
      <q-img src="/src/assets/img/thumbnaul-form.png" class="width-image rounded-borders" />
    </div>

    <div class="col-grow">
      <div class="row q-gutter-xs">
        <!-- create new reservation  -->
        <q-btn flat square color="primary" class="border-button rounded-borders">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
          >
            <path
              d="M16 10.09V4C16 1.79 12.42 0 8 0C3.58 0 0 1.79 0 4V14C0 16.21 3.59 18 8 18C8.46 18 8.9 18 9.33 17.94C9.1129 17.3162 9.00137 16.6605 9 16V15.95C8.68 16 8.35 16 8 16C4.13 16 2 14.5 2 14V11.77C3.61 12.55 5.72 13 8 13C8.65 13 9.27 12.96 9.88 12.89C10.4127 12.0085 11.1638 11.2794 12.0607 10.7731C12.9577 10.2668 13.9701 10.0005 15 10C15.34 10 15.67 10.04 16 10.09ZM14 9.45C12.7 10.4 10.42 11 8 11C5.58 11 3.3 10.4 2 9.45V6.64C3.47 7.47 5.61 8 8 8C10.39 8 12.53 7.47 14 6.64V9.45ZM8 6C4.13 6 2 4.5 2 4C2 3.5 4.13 2 8 2C11.87 2 14 3.5 14 4C14 4.5 11.87 6 8 6ZM19 15V17H16V20H14V17H11V15H14V12H16V15H19Z"
              fill="#008444"
            />
          </svg>
        </q-btn>

        <!-- edit reservation  -->
        <q-btn flat square color="primary" class="border-button rounded-borders">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
          >
            <path
              d="M8 13.5C8.8 13.5 9.57 13.43 10.31 13.32L13.22 10.41C11.89 11.09 10 11.5 8 11.5C5.58 11.5 3.3 10.9 2 9.95V7.14C3.47 7.97 5.61 8.5 8 8.5C10.39 8.5 12.53 7.97 14 7.14V9.63L15.39 8.24C15.57 8.06 15.78 7.92 16 7.8V4.5C16 2.29 12.42 0.5 8 0.5C3.58 0.5 0 2.29 0 4.5V14.5C0 16.54 3.06 18.22 7 18.47V16.63L7.17 16.46C3.84 16.26 2 14.96 2 14.5V12.27C3.61 13.05 5.72 13.5 8 13.5ZM8 2.5C11.87 2.5 14 4 14 4.5C14 5 11.87 6.5 8 6.5C4.13 6.5 2 5 2 4.5C2 4 4.13 2.5 8 2.5ZM15.13 11.33L17.17 13.37L11.04 19.5H9V17.46L15.13 11.33ZM18.85 11.69L17.87 12.67L15.83 10.63L16.81 9.65C17 9.45 17.33 9.45 17.53 9.65L18.85 10.97C19.05 11.17 19.05 11.5 18.85 11.69Z"
              fill="#008444"
            />
          </svg>
        </q-btn>

        <!-- remove reservation  -->
        <q-btn flat square color="primary" class="border-button rounded-borders">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
          >
            <path
              d="M16 10.09V4C16 1.79 12.42 0 8 0C3.58 0 0 1.79 0 4V14C0 16.21 3.59 18 8 18C8.46 18 8.9 18 9.33 17.94C9.1129 17.3162 9.00137 16.6605 9 16V15.95C8.68 16 8.35 16 8 16C4.13 16 2 14.5 2 14V11.77C3.61 12.55 5.72 13 8 13C8.65 13 9.27 12.96 9.88 12.89C10.4127 12.0085 11.1638 11.2794 12.0607 10.7731C12.9577 10.2668 13.9701 10.0005 15 10C15.34 10 15.67 10.04 16 10.09ZM14 9.45C12.7 10.4 10.42 11 8 11C5.58 11 3.3 10.4 2 9.45V6.64C3.47 7.47 5.61 8 8 8C10.39 8 12.53 7.47 14 6.64V9.45ZM8 6C4.13 6 2 4.5 2 4C2 3.5 4.13 2 8 2C11.87 2 14 3.5 14 4C14 4.5 11.87 6 8 6ZM19 15V17H11V15H19Z"
              fill="#008444"
            />
          </svg>
        </q-btn>

        <q-space />

        <q-btn
          flat
          square
          color="primary"
          icon="o_add_home"
          class="border-button rounded-borders"
          style="padding-top: 0; padding-bottom: 0"
        />

        <!-- show modal to create card's credential: KTP, SIM, address  -->
        <q-btn
          flat
          square
          color="primary"
          icon="o_badge"
          class="border-button rounded-borders"
          style="padding-top: 0; padding-bottom: 0"
        />
      </div>

      <q-input
        dense
        outlined
        v-model="text"
        label="Guest Name/ No Handphone"
        class="q-mt-sm width-full"
      />

      <div style="gap: 8px" class="row no-wrap items-center q-mt-sm">
        <div class="bg-primary-tint text-primary text-bold q-px-sm rounded-borders">#ResNo</div>

        <q-select
          outlined
          dense
          v-model="reservationResource"
          :options="reservation"
          label="Reservation Resource"
          dropdown-icon="expand_more"
          class="full-width"
        />
      </div>

      <div style="gap: 8px" class="row no-wrap q-mt-sm">
        <q-select
          outlined
          dense
          v-model="rmtypemodel"
          :options="rmtype"
          label="RmType"
          dropdown-icon="expand_more"
          class="full-width flex-1"
        />

        <q-select
          outlined
          dense
          v-model="roomnomodel"
          :options="roomno"
          label="Room No"
          dropdown-icon="expand_more"
          class="full-width flex-1"
        />

        <q-select
          outlined
          dense
          v-model="bedmodel"
          :options="typebedModel"
          label="Type Bed"
          dropdown-icon="expand_more"
          class="full-width flex-1"
        >
          <template v-slot:option="typebedModel">
            <q-item v-bind="typebedModel.itemProps">
              <q-item-section avatar>
                <div class="flex justify-center">
                  <q-icon size="24px" :name="typebedModel.opt.icon" />
                  <q-icon
                    size="24px"
                    :name="typebedModel.opt.icon"
                    v-if="typebedModel.index === 1"
                  />
                </div>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ typebedModel.opt.label }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>

      <q-separator class="q-my-sm bg-grey" size="1px" />

      <div class="text-bold q-mt-sm">Arrival &nbsp;&nbsp;&nbsp;Depart &nbsp;&nbsp;&nbsp;Night</div>

      <q-btn-dropdown
        flat
        outlined
        dense
        class="text-capitalize dropdown-date full-width"
        style="border: 1px #00000030 solid"
        :label="formattedDate"
        icon="o_calendar_today"
        dropdown-icon="o_expand_more"
      >
        <q-date v-model="datePicker" range />
      </q-btn-dropdown>

      <div class="text-bold q-mt-sm">Adult &nbsp;&nbsp;&nbsp;Child &nbsp;&nbsp;&nbsp;Baby</div>

      <q-btn-dropdown
        flat
        outlined
        dense
        class="text-capitalize dropdown-date full-width"
        style="border: 1px #00000030 solid"
        :label="labeldropdown"
        icon="meeting_room"
        dropdown-icon="o_expand_more"
      >
        <q-list style="width: 200px">
          <q-item>
            <q-item-section>
              <div style="display: flex; align-items: center; justify-content: space-between">
                <div>Adult</div>
                <div style="display: flex; align-items: center; gap: 10px">
                  <q-btn
                    flat
                    dense
                    square
                    style="background-color: #069550"
                    @click="updateGuestCount('adult', -1)"
                    :disable="guestCounts.adult <= 1"
                  >
                    <q-icon name="remove" color="white" size="16px" />
                  </q-btn>

                  <div>{{ guestCounts.adult }}</div>

                  <q-btn
                    flat
                    dense
                    square
                    style="background-color: #069550"
                    @click="updateGuestCount('adult', 1)"
                    ><q-icon name="add" color="white" size="16px" />
                  </q-btn>
                </div>
              </div>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section
              ><div style="display: flex; align-items: center; justify-content: space-between">
                <div>Child</div>
                <div style="display: flex; align-items: center; gap: 10px">
                  <q-btn
                    flat
                    dense
                    square
                    style="background-color: #069550"
                    @click="updateGuestCount('child', -1)"
                    :disable="guestCounts.child < 1"
                  >
                    <q-icon name="remove" color="white" size="16px" />
                  </q-btn>

                  <div>{{ guestCounts.child }}</div>

                  <q-btn
                    flat
                    dense
                    square
                    style="background-color: #069550"
                    @click="updateGuestCount('child', 1)"
                    ><q-icon name="add" color="white" size="16px" />
                  </q-btn>
                </div></div
            ></q-item-section>
          </q-item>
          <q-item>
            <q-item-section
              ><div style="display: flex; align-items: center; justify-content: space-between">
                <div>Baby</div>
                <div style="display: flex; align-items: center; gap: 10px">
                  <q-btn
                    flat
                    dense
                    square
                    style="background-color: #069550"
                    @click="updateGuestCount('baby', -1)"
                    :disable="guestCounts.baby < 1"
                  >
                    <q-icon name="remove" color="white" size="16px" />
                  </q-btn>

                  <div>{{ guestCounts.baby }}</div>

                  <q-btn
                    flat
                    dense
                    square
                    style="background-color: #069550"
                    @click="updateGuestCount('baby', 1)"
                    ><q-icon name="add" color="white" size="16px" />
                  </q-btn>
                </div></div
            ></q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>

    <div class="col-grow">
      <div class="row no-wrap items-center" style="gap: 8px">
        <div class="text-bold">Res Status:</div>
        <q-select
          outlined
          dense
          v-model="resstatusmodel"
          :options="resstatus"
          label="Status"
          dropdown-icon="expand_more"
          class=""
        />

        <q-space />

        <div style="display: flex">
          <q-btn flat square dense class="q-px-sm" style="border: 1.5px #eeeeee solid"> RB </q-btn>
          <q-btn
            flat
            square
            dense
            class="q-px-sm"
            style="
              border: 1.5px #eeeeee solid;
              height: fit-content;
              border-radius: 0px 10px 10px 0px;
            "
          >
            RO
          </q-btn>
        </div>
      </div>

      <q-separator class="q-my-sm bg-grey" size="1px" />

      <q-expansion-item label="Room Rate: Rp 0.00" class="padding-expansion">
        <q-card>
          <q-table
            style="height: 140px"
            dense
            :rows-per-page-options="[0]"
            virtual-scroll
            :rows="rows"
            hide-pagination
            selection="multiple"
            class="rows-table"
            :columns="columns"
            row-key="date"
            :selected-rows-label="getSelectedString"
            v-model:selected.sync="selected"
          />

          <q-btn unelevated dense class="q-mt-sm text-capitalize" color="primary" label="Payment" />
        </q-card>
      </q-expansion-item>

      <div style="display: flex; justify-content: space-between" class="q-mt-sm">
        <div class="text-bold">Total:</div>
        <div>Rp 0.00</div>
      </div>

      <q-separator class="q-mt-sm bg-grey" size="1px" />

      <div style="display: flex; justify-content: space-between" class="q-mt-sm">
        <div class="text-bold">Balance:</div>
        <div>Rp 0.00</div>
      </div>

      <q-separator class="q-mt-sm bg-grey" size="1px" />
    </div>

    <div class="col-grow">
      <q-expansion-item label="Reservation Remarks" class="padding-expansion">
        <q-card>
          <q-input
            v-model="textarea"
            label="Note..."
            dense
            outlined
            style="max-height: 200px"
            type="textarea"
          />
        </q-card>
      </q-expansion-item>

      <div style="gap: 8px" class="q-mt-sm row no-wrap items-center">
        <q-btn
          label="Reservation"
          outline
          color="primary"
          dense
          class="text-capitalize full-width"
        />
        <q-btn
          label="Check-In"
          unelevated
          color="primary"
          dense
          class="text-capitalize full-width"
        />
        <q-btn label="Check-Out" outline color="grey" dense class="text-capitalize full-width" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'GuestForm',
  setup() {
    const datePicker = ref({ from: null, to: null })
    const formattedDate = ref('Arrival - Depature, 1 Nights')
    const labeldropdown = ref('1 Adult, 0 Child, 0 Baby')
    const guestCounts = ref({
      adult: 1, // Inisialisasi jumlah adult ke 1
      child: 0,
      baby: 0
    })
    const columns = [
      {
        required: true,
        name: 'date',
        label: 'Date',
        align: 'center',
        field: 'date'
      },
      { required: true, name: 'rate', align: 'center', label: 'Rate', field: 'rate' },
      { required: true, name: 'arrangement', label: 'Arrangement', field: 'arrangement' }
    ]

    const rows = [
      {
        date: '12/02/2023',
        rate: '530,00.00',
        arrangement: 'RB'
      },
      {
        date: '12/02/2024',
        rate: '540,00.00',
        arrangement: 'RO'
      },
      {
        date: '12/02/2025',
        rate: '530,00.00',
        arrangement: 'RB'
      },
      {
        date: '13/02/2023',
        rate: '550,00.00',
        arrangement: 'RB'
      }
    ]

    function formatDate() {
      if (datePicker.value.from && datePicker.value.to) {
        const fromDate = new Date(datePicker.value.from)
        const toDate = new Date(datePicker.value.to)

        const options = {
          month: 'numeric',
          day: 'numeric'
        }

        const formattedFromDate = fromDate.toLocaleDateString('en-gb', options)
        const formattedToDate = toDate.toLocaleDateString('en-gb', options)

        // Hitung selisih hari antara kedua tanggal
        const diffTime = Math.abs(toDate - fromDate)
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

        formattedDate.value = `${formattedFromDate} - ${formattedToDate}, ${diffDays} Nights`
      }
    }

    function updateDropdownLabel() {
      // Logika penentuan label dropdown berdasarkan tanggal bisa ditempatkan di sini
      // ...
    }

    function updateGuestCount(type, value) {
      // Memastikan jumlah tidak kurang dari 0
      guestCounts.value[type] = Math.max(0, guestCounts.value[type] + value)

      // Mengupdate label dropdown
      updateDropdownLabel()
    }

    function updateDropdownLabel() {
      const adultLabel = `${guestCounts.value.adult} Adult`
      const childLabel = `${guestCounts.value.child} Child`
      const babyLabel = `${guestCounts.value.baby} Baby`

      labeldropdown.value = `${adultLabel}, ${childLabel}, ${babyLabel}`
    }

    return {
      columns,
      rows,
      datePicker,
      formattedDate,
      formatDate,
      labeldropdown,
      updateDropdownLabel,
      guestCounts,
      text: ref(''),
      textarea: ref(''),
      selected: ref([]),
      updateGuestCount,
      reservationResource: ref(null),
      rmtypemodel: ref(null),
      roomnomodel: ref(null),
      bedmodel: ref(null),
      resstatusmodel: ref(null),
      resstatus: ['Guaranted', '6 PM', 'Tentative'],
      reservation: ['Whatsapp', 'Walk In'],
      rmtype: ['Deluxe (DLXX)', 'Standard (STD)', 'Family(FML)'],
      roomno: ['101', '102', '103'],
      typebed: ['King Bed', 'Twin Bed', 'Single Bed'],
      typebedModel: [
        {
          label: 'King Bed',
          value: 'King Bed',
          icon: 'o_king_bed'
        },
        {
          label: 'Twin Bed',
          value: 'Twin Bed',
          icon: 'o_single_bed'
        },
        {
          label: 'Single Bed',
          value: 'Single Bed',
          icon: 'o_single_bed'
        }
      ]
    }
  },
  watch: {
    'datePicker.from': {
      immediate: true,
      handler() {
        this.formatDate()
        this.updateDropdownLabel()
      }
    },
    'datePicker.to': {
      immediate: true,
      handler() {
        this.formatDate()
        this.updateDropdownLabel()
      }
    }
  }
})
</script>

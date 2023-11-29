<template>
  <q-page class="column" style="overflow-y: hidden; min-width: max-content">
    <FOMenubar>
      <template #left>
        <q-btn-dropdown
          flat
          square
          class="text-capitalize"
          label="TDate - FDate"
          icon="o_event"
          color="primary"
          dropdown-icon="o_expand_more"
        >
          <div>
            <q-date v-model="datePicker" range />
          </div>
        </q-btn-dropdown>
      </template>
    </FOMenubar>
    <p class="text-center bg-primary-tint">Room Plan</p>
    <div class="q-px-xl">
      <q-select outlined dense v-model="model" :options="options" style="width: fit-content" />
      <div class="flex">
        <img
          src="/src/assets/img/Roomplan.png"
          style="width: 1200px"
          alt="roomplan"
          class="q-mx-auto"
        />
      </div>
    </div>

    <div class="flex justify-center items-center q-mt-xl">
      <div class="q-mx-md">
        <div><p class="q-mb-none q-py-sm q-px-xl text-center">VC = Vacant Clean</p></div>
        <div>
          <p
            class="q-mb-none text-white q-py-sm q-px-xl text-center"
            style="background-color: #10780a"
          >
            VD = Vacant Dirty
          </p>
        </div>
        <div>
          <p class="q-mb-none q-py-sm q-px-xl text-center" style="background-color: #02feff">
            VCU = Vacant Clean Unchecked
          </p>
        </div>
      </div>
      <q-separator vertical size="13px" />
      <div class="q-mx-md">
        <div>
          <p class="q-mb-none text-blue q-py-sm q-px-xl text-center">OC = Occupied Clean</p>
        </div>
        <div>
          <p
            class="q-mb-none text-white q-py-sm q-px-xl text-center"
            style="background-color: #0000f1"
          >
            OD = Occupied Clean
          </p>
        </div>
        <div>
          <p
            class="q-mb-none text-red q-py-sm q-px-xl text-center"
            style="background-color: #fffc06"
          >
            ED = Expected Departure
          </p>
        </div>
      </div>
      <q-separator vertical size="13px" />
      <div class="q-mx-md">
        <div>
          <p
            class="q-mb-none text-white q-py-sm q-px-xl text-center"
            style="background-color: #850179"
          >
            DnD = Do not Disturb
          </p>
        </div>
        <div>
          <p
            class="q-mb-none text-red q-py-sm q-px-xl text-center"
            style="background-color: #000000"
          >
            OO = Out of Order
          </p>
        </div>
        <div>
          <p
            class="q-mb-none text-red q-py-sm q-px-xl text-center"
            style="background-color: #000000"
          >
            OM = Out of Market
          </p>
        </div>
      </div>
      <q-separator vertical size="13px" />
      <div class="q-mx-md">
        <p class="q-mb-none text-red q-py-sm q-px-xl text-center">VIP</p>
        <p class="text-white q-py-sm q-px-xl text-center" style="background-color: #f10000">
          INCOGNITO
        </p>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import FOMenubar from 'src/components/FOMenubar.vue'

const datePicker = ref({ from: '2020/07/08', to: '2020/07/17' })

export default defineComponent({
  name: 'RoomPlanPage',
  components: { FOMenubar },
  data() {
    return {
      datePicker,
      model: ref(null),
      options: ['Floor 1', 'Floor 2', 'Floor 3', 'Floor 4']
    }
  },
  methods: {}
})
</script>

<template>
  <q-page class="q-px-md q-py-xl">
    <div class="row item-center justify-evenly q-px-xs">
      <q-card class="card-bg" style="width: 147px" v-for="data in roomData" :key="data.id">
        <div class="text-caption text-weight-bold text-center q-py-xs">{{ data.name }}</div>
        <q-card-section
          horizontal
          class="text-caption"
          style="border-top: 1.5px solid black; border-bottom: 1.5px solid black"
        >
          <div class="text-center text-caption" style="width: 50%; border-right: 1.5px solid black">
            Room
          </div>
          <div class="text-center text-caption" style="width: 50%">Person</div>
        </q-card-section>

        <q-card-section horizontal class="text-caption">
          <div
            class="text-center text-h4 q-pa-xs text-weight-bolder"
            style="width: 50%; border-right: 1.5px solid black"
          >
            {{ data.person }}
          </div>
          <div class="text-center text-h4 q-pa-xs text-weight-bolder" style="width: 50%">
            {{ data.person }}
          </div>
        </q-card-section>
      </q-card>
    </div>

    <HKCard radius="20px" card_class="card-shadow q-mt-md">
      <q-card-section class="row items-center justify-between">
        <div class="text-h5 text-weight-bold" style="width: 50%">Percentage</div>
        <div style="width: 50%" class="row justify-end">
          <q-select
            outlined
            dense
            dropdown-icon="expand_more"
            v-model="model"
            color="dark"
            :options="options"
            label="Show by"
            style="width: 162px"
          />
        </div>
      </q-card-section>
      <q-card-section>
        <HKChart :options="chartOptions" :series="chartSeries" />
      </q-card-section>
    </HKCard>
  </q-page>
</template>
<script>
import { defineComponent, ref } from 'vue'
import HKCard from 'src/components/HK/HKCard.vue'
import HKChart from 'src/components/charts/HKChart.vue'

const roomData = [
  {
    id: 1,
    name: 'Occupied Room',
    room: '01',
    person: '02'
  },
  {
    id: 2,
    name: 'Complimentary Room',
    room: '01',
    person: '02'
  },
  {
    id: 3,
    name: 'House Use Room',
    room: '01',
    person: '02'
  },
  {
    id: 4,
    name: 'Out-Of-Order Room',
    room: '01',
    person: '02'
  },
  {
    id: 5,
    name: 'Off Market',
    room: '01',
    person: '02'
  },
  {
    id: 6,
    name: 'Estimated Occupied',
    room: '01',
    person: '02'
  }
]

const chartSeries = [50, 50, 50]
const chartOptions = {
  chart: {
    type: 'column'
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#364E30', '#54854C', '#8BAA84'],
  legend: {
    offsetY: 40,
    fontSize: '20px',
    fontWeight: 400,
    markers: {
      width: '20px',
      height: '20px',
      offsetX: -10
    },
    itemMargin: {
      horizontal: 0,
      vertical: 10
    }
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  ]
}

const selectOption = ['Show by Week', 'Show by Month', 'Show by Year']

export default defineComponent({
  name: 'RoomOccupancyPage',
  components: { HKCard, HKChart },
  setup() {
    return {
      model: ref(null),
      options: selectOption,
      roomData
    }
  },
  data() {
    return {
      chartOptions,
      chartSeries
    }
  }
})
</script>

<style>
.card-bg {
  background-color: #ecf8e7;
  border-radius: 15px;
}
.card-shadow {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: 1px solid black;
}
</style>

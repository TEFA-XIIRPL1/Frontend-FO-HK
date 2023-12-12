<template>
  <q-btn
    unelevated
    dense
    outline
    class="q-px-sm"
    style="border-radius: 8px; color: #d9d9d9"
    @click="() => (clicked = !clicked)"
  >
    <div class="row items-center q-gutter-sm">
      <q-icon name="o_calendar_today" color="primary" size="20px" />
      <div class="text-body2 text-weight-medium q-pt-xs text-black">{{ formattedDate }}</div>
      <q-icon
        name="expand_more"
        color="primary"
        size="20px"
        :class="{ 'rotate-180': clicked }"
        style="transition: 0.5s"
      />
    </div>
    <q-popup-proxy transition-show="jump-down" transition-hide="jump-up">
      <q-date v-model="pureDate">
        <div class="row items-center justify-end q-gutter-sm">
          <q-btn label="Cancel" color="primary" flat v-close-popup />
          <q-btn label="OK" color="primary" flat @click="updateDate" v-close-popup />
        </div>
      </q-date>
    </q-popup-proxy>
  </q-btn>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'FormDate',
  setup() {
    const pureDate = ref('')
    return {
      pureDate
    }
  },
  data() {
    return {
      clicked: ref(false),
      formattedDate: '',
      getDate: ''
    }
  },
  methods: {
    formatDate(day, month, year) {
      let y = year.toString().substring(2)
      this.formattedDate = `${day}/${month}/${y}`
    },
    setDate() {
      let date = new Date()

      let year = date.getFullYear()
      let month = ('0' + (date.getMonth() + 1)).slice(-2)
      let day = ('0' + date.getDate()).slice(-2)

      // jika di butuhkan
      let hour = ('0' + date.getHours()).slice(-2)
      let min = ('0' + date.getMinutes()).slice(-2)
      let sec = ('0' + date.getSeconds()).slice(-2)

      // let formattedDate = `${year}-${month}-${day} ${hour}:${min}:${sec}`
      this.pureDate = `${year}/${month}/${day}`
      this.formatDate(day, month, year)
    },
    updateDate() {
      if (!this.pureDate) return ''
      let parts = this.pureDate.split('/')
      let year = parts[0]
      let month = parts[1]
      let day = parts[2]

      this.formatDate(day, month, year)
    }
  },
  mounted() {
    this.setDate()
  }
}
</script>

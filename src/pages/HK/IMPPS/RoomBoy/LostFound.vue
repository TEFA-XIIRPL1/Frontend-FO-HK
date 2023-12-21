<template>
  <div>
    <div class="text-h5 text-center q-mt-xl text-weight-bold">New Lost and Found</div>
    <q-form class="q-mt-lg">
      <div class="row items-center justify-center" style="gap: 80px">
        <div class="text-caption text-weight-bold">Date</div>
        <FormDate @get-date="getDate" />
      </div>
    </q-form>
  </div>
</template>

<script>
import FormDate from 'src/components/general/Date.vue'

export default {
  name: 'LostFound',
  data() {
    return {
      time: ''
    }
  },
  components: {
    FormDate
  },
  methods: {
    getDate(d) {
      this.time = d
    }
  }
}
</script>

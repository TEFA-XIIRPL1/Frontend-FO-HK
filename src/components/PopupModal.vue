<template>
  <q-dialog position="bottom" v-model="popup">
    <q-card class="q-mb-md">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-2xl font-bold">{{ title }}</div>
        <q-space />
        <q-btn icon="close" @click="close" flat round dense />
      </q-card-section>

      <q-card-section><slot name="content"></slot> </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PopupModal',
  props: {
    popup: {
      type: Boolean,
      default: false
    },
    title: String
  },
  methods: {
    close() {
      // eslint-disable-next-line vue/no-mutating-props
      this.$emit('update:popup', false)
    }
  }
})
</script>

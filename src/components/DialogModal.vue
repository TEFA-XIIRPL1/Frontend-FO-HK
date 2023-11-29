<template>
  <q-dialog v-model="isOpen">
    <q-card style="width: 700px; max-width: 80vw">
      <q-toolbar>
        <q-avatar>
          <img src="../assets/img/lingian-logo-colored.png" />
        </q-avatar>

        <q-toolbar-title>{{ title }}</q-toolbar-title>

        <q-btn flat round dense icon="close" @click="closeDialog" />
      </q-toolbar>

      <q-card-section>
        <slot></slot>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    isOpen: {
      get() {
        return this.open
      },
      set(value) {
        this.$emit('update:open', value)
      }
    }
  },
  methods: {
    closeDialog() {
      this.isOpen = false
    }
  }
}
</script>

<template>
  <q-page class="flex q-pa-md">
    <div class="q-my-auto q-mx-auto rounded-borders shadow-3 q-pt-lg q-pb-xl q-px-xl bg-white">
      <div class="flex">
        <q-img
          src="../assets/img/lingian-logo-colored.png"
          class="q-my-md q-mx-auto"
          style="width: 180px"
        />
      </div>
      <h6 class="text-bold q-ma-none text-center">Welcome to <br />Management System</h6>
      <p class="text-center">Lingian Hotel & Convention</p>
      <q-form @submit="onSubmit" class="column q-mt-md q-gutter-xs" style="min-width: 280px">
        <q-input
          outlined
          type="email"
          dense
          v-model="email"
          label="Email"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          outlined
          dense
          type="password"
          v-model="password"
          label="Password"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <a href="" class="self-end q-mb-sm">Forgot password?</a>
        <q-btn label="login" type="submit" class="width-full" color="primary" />
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const $q = useQuasar()

    const email = ref(null)
    const password = ref(null)

    return {
      email,
      password
    }
  },
  methods: {
    onSubmit() {
      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Submitted'
      })
    }
  }
})
</script>

<template>
  <h5>Fragment: Guest Form goes here...</h5>
  <payment-detail></payment-detail>
</template>

<script>
import PaymentDetail from './PaymentDetail.vue';
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'GuestForm',
  components: {PaymentDetail}
})
</script>

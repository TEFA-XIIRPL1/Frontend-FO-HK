<template>
  <h5>Fragment: Guest Form goes here...</h5>
  <q-btn color="primary" @click="paymentDetailDialog = true">Open Dialog</q-btn>
  <DialogModal
    :open="paymentDetailDialog"
    @update:open="paymentDetailDialog = $event"
    title="Payment Detail"
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, iste pariatur! Id iusto
    earum esse quidem nulla obcaecati tempore est sed culpa. Nesciunt quod, neque et sequi in
    consectetur quo sint ratione obcaecati repudiandae sapiente mollitia, atque maiores quaerat.
    Officia laboriosam sed assumenda magnam natus, totam mollitia esse quasi delectus illo sequi
    vitae iure perspiciatis fugit eaque ut nemo quidem, culpa asperiores officiis! Mollitia omnis
    obcaecati reiciendis rerum neque modi laudantium at beatae optio, velit quaerat fugit doloribus,
    libero officiis odio! Quod nesciunt magnam voluptatibus ea perspiciatis, quia possimus
    doloremque nemo eligendi ullam vel, necessitatibus magni tempora architecto minus fuga unde
    error accusantium autem facere itaque maiores nostrum. Fugiat dolorum voluptatibus repudiandae
    excepturi non perspiciatis quae autem repellendus incidunt quidem! Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Consectetur, iste pariatur! Id iusto earum esse quidem nulla
    obcaecati tempore est sed culpa. Nesciunt quod, neque et sequi in consectetur quo sint ratione
    obcaecati repudiandae sapiente mollitia, atque maiores quaerat. Officia laboriosam sed assumenda
    magnam natus, totam mollitia esse quasi delectus illo sequi vitae iure perspiciatis fugit eaque
    ut nemo quidem, culpa asperiores officiis! Mollitia omnis obcaecati reiciendis rerum neque modi
    laudantium at beatae optio, velit quaerat fugit doloribus, libero officiis odio! Quod nesciunt
    magnam voluptatibus ea perspiciatis, quia possimus doloremque nemo eligendi ullam vel,
    necessitatibus magni tempora architecto minus fuga unde error accusantium autem facere itaque
    maiores nostrum. Fugiat dolorum voluptatibus repudiandae excepturi non perspiciatis quae autem
    repellendus incidunt quidem! Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Consectetur, iste pariatur! Id iusto earum esse quidem nulla obcaecati tempore est sed culpa.
    Nesciunt quod, neque et sequi in consectetur quo sint ratione obcaecati repudiandae sapiente
    mollitia, atque maiores quaerat. Officia laboriosam sed assumenda magnam natus, totam mollitia
    esse quasi delectus illo sequi vitae iure perspiciatis fugit eaque ut nemo quidem, culpa
    asperiores officiis! Mollitia omnis obcaecati reiciendis rerum neque modi laudantium at beatae
    optio, velit quaerat fugit doloribus, libero officiis odio! Quod nesciunt magnam voluptatibus ea
    perspiciatis, quia possimus doloremque nemo eligendi ullam vel, necessitatibus magni tempora
    architecto minus fuga unde error accusantium autem facere itaque maiores nostrum. Fugiat dolorum
    voluptatibus repudiandae excepturi non perspiciatis quae autem repellendus incidunt quidem!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, iste pariatur! Id iusto
    earum esse quidem nulla obcaecati tempore est sed culpa. Nesciunt quod, neque et sequi in
    consectetur quo sint ratione obcaecati repudiandae sapiente mollitia, atque maiores quaerat.
    Officia laboriosam sed assumenda magnam natus, totam mollitia esse quasi delectus illo sequi
    vitae iure perspiciatis fugit eaque ut nemo quidem, culpa asperiores officiis! Mollitia omnis
    obcaecati reiciendis rerum neque modi laudantium at beatae optio, velit quaerat fugit doloribus,
    libero officiis odio! Quod nesciunt magnam voluptatibus ea perspiciatis, quia possimus
    doloremque nemo eligendi ullam vel, necessitatibus magni tempora architecto minus fuga unde
    error accusantium autem facere itaque maiores nostrum. Fugiat dolorum voluptatibus repudiandae
    excepturi non perspiciatis quae autem repellendus incidunt quidem!
  </DialogModal>
</template>

<script>
import DialogModal from 'src/components/DialogModal.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'GuestForm',
  data() {
    return {
      paymentDetailDialog: false
    }
  },
  components: { DialogModal }
})
</script>

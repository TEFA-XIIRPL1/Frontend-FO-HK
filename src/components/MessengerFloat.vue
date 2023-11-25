<template>
  <q-btn round dense flat icon="o_notifications">
    <q-badge color="negative" text-color="white" floating> 2 </q-badge>
    <q-tooltip>Notifications</q-tooltip>
    <q-menu fit anchor="bottom left" self="top left" style="max-width: 400px">
      <q-item class="bg-primary text-white">
        <q-item-section>Messages</q-item-section>
      </q-item>
      <q-item clickable>
        <q-item-section>
          <div class="row items-center justify-between">
            <div>
              <div class="row items-center">
                <h6 class="q-ma-none">Benni</h6>
                <span class="text-grey q-mx-sm">•</span>
                <span class="q-ma-none text-body2">Room 104</span>
              </div>
              <p class="text-body2 q-ma-none">Butuh tambahan guling masbro</p>
            </div>
            <div class="dot bg-negative q-ml-md"></div>
          </div>
        </q-item-section>
      </q-item>
      <q-item clickable>
        <q-item-section>
          <div class="row items-center justify-between">
            <div>
              <div class="row items-center">
                <h6 class="q-ma-none">Dzakiya</h6>
                <span class="text-grey q-mx-sm">•</span>
                <span class="q-ma-none text-body2">Room 105</span>
              </div>
              <p class="text-body2 q-ma-none">Aya mang gojek teu di lobi?</p>
            </div>
            <div class="dot bg-negative q-ml-md"></div>
          </div>
        </q-item-section>
      </q-item>
    </q-menu>
  </q-btn>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MessengerFloat'
})
</script>

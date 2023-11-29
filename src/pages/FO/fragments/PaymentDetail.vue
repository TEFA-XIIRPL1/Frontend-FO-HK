<template>
    <q-btn color="primary" @click="paymentDetailDialog = true">Open Dialog</q-btn>
    <DialogModal :open="paymentDetailDialog" @update:open="paymentDetailDialog = $event" title="Payment Detail">
        <div style="display: flex; width: 100%;">
            <div class="q-pr-sm">
                <q-card style="height: 650px; width: 700px;">
                    <div style="display: flex; justify-content: center; align-items: center;">
                        <img style="width: 150px;" src="/src/assets/img/lingian-logo-colored.png">
                    </div>
                    <div class="q-px-sm">Bill Number:&nbsp;&nbsp; #XXXXXXXX</div>
                    <div class="q-px-sm" style="display: flex; justify-content: space-between;">
                        <div>Reservation Resource: WhatsApp</div>
                        <div style="display: flex;">
                            <div>Guest Name: </div>
                            <div class="q-px-sm text-bold" style="">RONO RUSTIAN, HENRY</div>
                        </div>
                    </div>

                    <q-separator class="q-mt-sm" style="background: #16A75C" size="4px" />

                    <div class="q-mt-sm q-px-sm">
                        <div>Arrival: 12/02/2023</div>
                        <div clas="q-px-sm">Depature: 13/02/2023</div>
                    </div>
                    <div>

                        <div class="q-pa-md">
                            <q-markup-table>
                                <thead style="background: #16A75C;">
                                    <tr>
                                        <th class="text-left text-white">Date</th>
                                        <th class="text-left text-white">Description</th>
                                        <th class="text-left text-white">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-left">12/02/2023</td>
                                        <td class="text-left">Room Rate</td>
                                        <td class="text-left">Rp 500.000,00</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left"></td>
                                        <td class="text-left">Nasi Goreng</td>
                                        <td class="text-left">Rp 15.000,00</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left">13/02/2023</td>
                                        <td class="text-left">Room Breakfast</td>
                                        <td class="text-left">Rp 30.000,00</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left"></td>
                                        <td class="text-left">Total</td>
                                        <td class="text-left">Rp 545.000,00</td>
                                    </tr>
                                </tbody>
                            </q-markup-table>
                        </div>

                        <q-separator class="q-mt-sm" style="background: #16A75C" size="4px" />

                        <div class="q-mt-sm q-px-sm">
                            <div>Gedung Lingian, Universitas Telkom, Jl.</div>
                            <div>telekomunikasi No.01, terusan</div>
                            <div>Buahbatu Bandung, Jawa Barat 40257;</div>
                            <div>Phone. +62 8112072999</div>
                        </div>
                    </div>
                </q-card>
            </div>
            <div class="q-px-sm col-grow">
                <div class="flex justify-between items-center q-mb-md" style="width: 100%;">
                    <div>Print </div>
                    <div>2 Page</div>
                </div>
                <div class="flex justify-between items-center " style="width: 100%">
                    <div>Forcast</div>
                    <q-select outlined v-model="forecastpages" label="Per-Day" :options="forecastpagesoptions" style="width: 160px">
                        <template v-slot:prepend>
                            <q-icon name="event" />
                        </template>
                    </q-select>
                </div>
                <div clas="flex justify-between items-center" style="width: 100%">
                    <div>Destination</div>
                </div>
            </div>

        </div>
    </DialogModal>
</template>
  
<script>
import DialogModal from 'src/components/DialogModal.vue';
import { defineComponent,ref } from 'vue';

const forecastpages = ref('')
const forecastpagesoptions = ['Per-Month', 'Per-Day', 'Total']


export default defineComponent({
    name: 'PaymentDetail',
    data() {
        return {
            forecastpages,
        forecastpagesoptions,
            paymentDetailDialog: false,
        };
    },
    components: { DialogModal },
});
</script>
  
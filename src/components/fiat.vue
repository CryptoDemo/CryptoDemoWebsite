<template>
    <div style="display: flex; justify-content: space-between; width: 100%;">

        <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn v-bind="activatorProps" class="fiat-btn" :class="isDark ? 'profile-cards-dark':'profile-cards-light'">
                    <img src="/svg/get.svg" class="me-1"/>
                     Fund
                </v-btn>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 20px; position: relative;">
                <v-card-text>
                    <h3 class="text-center">Wallet Deposit</h3>
                    <input type="number" :class="isDark ? 'btn-segment':'btn-segment-light'" style="outline: none; height: 60px; width: 100%; padding: 10px; margin-top: 10px; border-radius: 20px;"/>
                
                    <v-select :class="isDark ? 'txn-cards-dark':'txn-cards-light'"  variant="plain" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" style="width: 15%; height: 58px; border-radius: 15px; position: absolute; right: 5%; top: 30%;">
                        NGN
                    </v-select>

                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
                </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
            
        <v-btn class="fiat-btn" :class="isDark ? 'profile-cards-dark':'profile-cards-light'">
            <img src="/svg/send-arrow.svg" class="me-1"/>
            Get
        </v-btn>

        <v-btn class="fiat-btn" :class="isDark ? 'profile-cards-dark':'profile-cards-light'">
            <img src="/svg/arrow-swap.svg" class="me-1"/>
            Swap
        </v-btn>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';
// import { getWebTransaction } from "@/composables/requests/transaction";

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore()
</script>

<style scoped>
.fiat-btn{
display: flex;
height: 132px;
width: 32%;
border-radius: 16px;
justify-content: center;
align-items: center;
flex-shrink: 0;
color: var(--Gray-Light, #D8D8D8);
font-family: Manrope;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 140%; /* 33.6px */
}

.btn-segment{
border: 1px solid #1B2537;
}

.btn-segment-light{
border: 1px solid #E2E8F0;
}
.txn-cards-dark {
  background: #162138;
  padding: 10px;
  border-radius: 15px;
}
.txn-cards-light {
  background: #edf3ff;
  padding: 10px;
  border-radius: 15px;
}
</style>
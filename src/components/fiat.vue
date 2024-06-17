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
                <v-card :class="isDark ? 'profile-cards-dark':'profile-cards-light'">
                <v-card-text>
                    magna aliqua.
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
</style>
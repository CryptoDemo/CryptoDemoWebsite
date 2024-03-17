<template>
    <div>
         <v-btn  :class="isDark ? 'payment-btn':'payment-btn-light'">{{buttonText}}</v-btn>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';



const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const props = defineProps(['buttonText']);

</script>
<style scoped>
.payment-btn{
display: flex;
padding: 8px;
align-items: flex-start;
border-radius: 6px;
border: 1px solid #1B2537;
display: flex;
align-items: flex-start;
gap: 5px;
text-transform: unset !important;
background: inherit;
color: white;
letter-spacing: unset !important;
font-family: Manrope;
font-size: 12px;
font-style: normal;
font-weight: 700 !important;
line-height: 150%; /* 18px */
}
.payment-btn-light{
display: flex;
padding: 8px;
align-items: flex-start;
border-radius: 6px;
border: 1px solid #E2E8F0;
display: flex;
align-items: flex-start;
gap: 5px;
color: #10192D!important;
text-align: center;
font-family: Manrope;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 18px */
text-transform: unset !important;
background: inherit;
color: white;
letter-spacing: unset !important;
box-shadow: none;
}
</style>

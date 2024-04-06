<template>
<button @click="push.success('Something good has been pushed!')">Push</button>

<Notivue v-slot="item">
  <Notification :item="item" />
</Notivue>

<div style="display: flex; justify-content: flex-start; margin-top: 25px; align-items: center; margin-left: 10px;">
             <ToggleBtn class="me-3"/>
             <span :class="isDark ? 'Switch-text':'Switch-text-light'">Switch to <span class="switch-hint">light</span> Mode</span>
          </div>
</template>

<script setup>
import { useTheme } from 'vuetify';

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
    
</script>

<style>
.image-button {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 115px;
}
</style>
<template>
  <button @click="handleClick">{{ formattedTime }}</button>
</template>

<script setup>

import { ref, onMounted, onBeforeUnmount } from 'vue'

const isRunning = ref(false)
const elapsedTime = ref(0)
let intervalId = null

const formattedTime = computed(() => {
  const seconds = Math.floor((elapsedTime.value / 1000) % 60)
  const minutes = Math.floor((elapsedTime.value / (1000 * 60)) % 60)
  const hours = Math.floor((elapsedTime.value / (1000 * 60 * 60)) % 24)

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
})

function startTimer() {
  intervalId = setInterval(() => {
    elapsedTime.value += 100
  }, 100)
}

function stopTimer() {
  clearInterval(intervalId)
  intervalId = null
}

onMounted(() => {
  // Reset timer on component mount
  elapsedTime.value = 0
  isRunning.value = false
})

onBeforeUnmount(() => {
  stopTimer()
})

const handleClick = () => {
  if (!isRunning.value) {
    isRunning.value = true
    startTimer()
  } else {
    isRunning.value = false
    stopTimer()
  }
}
</script>
<style>

</style>
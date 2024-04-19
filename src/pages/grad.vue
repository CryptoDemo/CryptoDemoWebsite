<template>
  <div>
    <h1>Countdown: {{ seconds }}</h1>
    <v-btn @click="resendCode" :disabled="!timerFinished">Resend Code</v-btn>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';

export default {
  setup() {
    const seconds = ref(60);
    const timerFinished = ref(true);

    const decreaseTimer = () => {
      if (seconds.value > 0) {
        seconds.value--;
      } else {
        timerFinished.value = true; // Timer finished
      }
    };

    const resendCode = () => {
      // Reset the timer and set the timerFinished to false to enable the button
      seconds.value = 60;
      timerFinished.value = false;
    };

    onMounted(() => {
      const intervalId = setInterval(decreaseTimer, 1000);

      // Clear interval when component is unmounted
      return () => clearInterval(intervalId);
    });

    // Compute the button's disabled state based on the timerFinished value
    const isResendDisabled = computed(() => !timerFinished.value);

    return { seconds, timerFinished, resendCode, isResendDisabled };
  },
};
</script>

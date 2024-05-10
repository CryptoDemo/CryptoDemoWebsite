<template>
    <template>
  <v-empty-state
    action-text="Retry Request"
    image="https://cdn.vuetifyjs.com/docs/images/components/v-empty-state/connection.svg"
    text="There might be a problem with your connection or our servers. Please check your internet connection or try again later. We appreciate your patience."
    title="Something Went Wrong"
    @click:action="onClickAction"
  ></v-empty-state>
</template>
    <div>{{ error.error.message }}</div>
</template>

<script setup>
    const error = defineProps(["error"]);
</script>
<template>
    <div>404 error page {{ error.error.message }}</div>
</template>

<script setup>
    const error = defineProps(["error"]);
</script>
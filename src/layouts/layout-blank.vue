<script setup lang="ts">
defineProps<{
  msg: string
}>();
</script>

<template>
  <div class="layout-blank">
    <router-view />
  </div>
</template>

<style scoped>
.layout-blank {}
</style>

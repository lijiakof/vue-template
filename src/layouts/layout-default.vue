<script setup lang="ts">
// defineProps<{
//   msg: string
// }>()
</script>

<template>
  <div class="layout">
    <h1>Layout Default</h1>

    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about-us">About</RouterLink>
    <RouterLink to="/demo">Demo</RouterLink>
    <router-view />
  </div>
</template>

<style scoped>
.layout {
}
</style>

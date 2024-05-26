<script setup lang="ts">
import http from '../modules/http-client';
import { onMounted } from 'vue';

defineProps<{
  msg: string
}>();

onMounted(() => {
  console.log('onMounted');
  http.get('/api/test');
});

</script>

<template>
  <div id="mars3dContainer" class="mars3d-container"></div>
</template>

<style scoped lang="less">
.test {
  width: 100 - 20px;
}
</style>
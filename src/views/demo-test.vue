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
  <div>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <div class="test">
      haha
    </div>
  </div>
</template>

<style scoped lang="less">
.test {
  width: 100 - 20px;
}
</style>
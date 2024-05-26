<script setup lang="ts">
import { onMounted } from 'vue';
import appConfig from '../../modules/app-config';
import HelloWorld from '../../components/hello-world/hello-world.vue';

defineProps<{
  msg: string
}>();

onMounted(() => {
  console.log('onMounted');
  console.log(appConfig.urlApi);
});

</script>

<template>
  <div class="page-home">
    Home Page
    {{ $appConfig.urlApi }}
    <hello-world></hello-world>
  </div>
</template>

<style scoped lang="less">
.page-home {
  color: #000;
}
</style>
import './assets/main.css';

import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import App from './app.vue';
// import plugins from './plugins';
import appConfig from './modules/app-config';
import router from './router';

const app = createApp(App);
app.config.globalProperties.$appConfig = appConfig;

app.use(ElementPlus);
app.use(router);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount('#app');

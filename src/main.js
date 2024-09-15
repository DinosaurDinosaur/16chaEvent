import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import ElementUI from 'element-ui';
import ElementUI from 'element-plus';
// import { Pagination } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/scss/common.scss';
import '@/assets/js/facebookSDK.js';

const app = createApp(App);
// app.use(store).use(router).mount('#app');
app.use(store).use(router).use(ElementUI).mount('#app');

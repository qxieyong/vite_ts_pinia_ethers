import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persist';
import 'element-plus/dist/index.css'
import common from './utils/common';
import router from './router';
import App from './App.vue';
import VueI18n from './utils/language';
import LoadingVue from '@/components/Loading.vue'

// 引入修改的msg
import Message from '@/utils/ElementUIMsg';

const app = createApp(App);
app.component('loading-vue', LoadingVue);
const pinia = createPinia();
if (import.meta.env.VITE_MODE === 'development' || import.meta.env.VITE_MODE === 'test') {
    pinia.use(piniaPluginPersist);
    app.config.globalProperties.$common = common.commom_text //测试
} else {
    app.config.globalProperties.$common = common.commom; //正式
}

app.config.globalProperties.$message = Message;

app.use(VueI18n).use(router).use(pinia).mount('#app')

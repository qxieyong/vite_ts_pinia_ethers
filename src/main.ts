import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persist';
import 'element-plus/dist/index.css'
import common from './utils/common';
import router from './router';
import App from './App.vue';
import VueI18n from './utils/language';

// 引入修改的msg
import Message from '@/utils/ElementUIMsg';

// 引入css适配
import '@/utils/adaptation';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersist);
if (import.meta.env.VITE_MODE === 'development' || import.meta.env.VITE_MODE === 'test') {
    app.config.globalProperties.$common = common.common_text //测试
} else {
    app.config.globalProperties.$common = common.common; //正式
}

app.config.globalProperties.$message = Message;

app.use(VueI18n).use(router).use(pinia).mount('#app')

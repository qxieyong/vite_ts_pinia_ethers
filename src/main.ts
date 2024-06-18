import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";
import { createApp } from "vue";

import "./style.css";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";
import common from "./utils/common";
import VueI18n from "./utils/language";
import updateWebsite from "@/utils/updateWebsite";

// 引入修改的msg
import Message from "@/utils/ElementUIMsg";

// 引入css适配
import "@/utils/adaptation";

if(import.meta.env.MODE != "development"){
    updateWebsite();
}

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersist);
if (import.meta.env.VITE_MODE === "development" || import.meta.env.VITE_MODE === "test") {
	app.config.globalProperties.$common = Number(window.ethereum && window.ethereum.chainId) == 97 ? common.commonText : common.common;
} else {
	app.config.globalProperties.$common = common.common; // 正式
}

app.config.globalProperties.$message = Message;

app.use(VueI18n).use(router).use(pinia).mount("#app");

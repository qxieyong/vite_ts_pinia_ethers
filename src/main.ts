import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";
import { createApp } from "vue";

import "./style.css";
import "element-plus/dist/index.css";

// 引入修改的msg
import Message from "@/utils/ElementUIMsg";
import updateWebsite from "@/utils/updateWebsite";

import App from "./App.vue";
import router from "./router";
import common from "./utils/common";
import VueI18n from "./utils/language";

import type { CommonType } from "@/utils/common";

// 引入css适配
import "@/utils/adaptation";

import "@/assets/font/index.css";

if (import.meta.env.MODE != "development") {
	updateWebsite();
}

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersist);

setTimeout(() => {
	if (import.meta.env.VITE_MODE === "development" || import.meta.env.VITE_MODE === "test") {
		const value = (Number(window.ethereum && window.ethereum.chainId) == 97 ? common.commonText : common.common) as CommonType; // 测试环境
		app.config.globalProperties.$common = value;
	} else {
		app.config.globalProperties.$common = common.common as CommonType; // 正式
	}
});

app.config.globalProperties.$message = Message;

app.use(pinia).use(router).use(VueI18n).mount("#app");

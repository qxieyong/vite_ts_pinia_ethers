<template>
	<div>
		<el-button type="primary" @click="test">Primary</el-button>
		<i-ep-CircleCheckFilled />
		<i-ep-EditPen />
		<p class="">{{ user.token }}</p>
		<p>{{ t("copySuccess") }}</p>
		<div @click="connectWallet">connect wallet</div>
		<p>{{ address }}-{{ connected }}</p>
	</div>
</template>

<script lang="ts" setup>
import { useAppKit } from "@reown/appkit/vue";
import { getCurrentInstance } from "vue";
import { useI18n } from "vue-i18n";

import { getHome as _getHome } from "@/api";
import { useWalletInfo } from "@/hooks/useWalletInfo";
import useStore from "@/store";
// import debounce from "@/utils/debounce";
import throttle from "@/utils/throttle";

const modal = useAppKit();

const { address, connected } = useWalletInfo(
	() => {
		console.log("登录成功");
	},
	() => {
		console.log("退出登录成功");
	}
);

const { user } = useStore();
const { t } = useI18n();
const { proxy } = getCurrentInstance()!;
proxy?.$message.success("成功");

// const test = debounce(() => console.log("防抖执行"), 500, false);
const test = throttle(() => console.log("节流执行"), 5000, false);
console.log("1111");

const _currentIndex = 1;
// getHome({}).then(res => {
// 	console.log(res.data);
// })

const connectWallet = async () => {
	console.log("connect wallet");
	if (!user.token) {
		modal.open();
	}
};
</script>

<style scoped lang="scss"></style>

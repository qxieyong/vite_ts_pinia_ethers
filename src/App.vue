<script setup lang="ts">
import { onMounted, provide } from "vue";
import useStore from "@/store";
import { initSigner } from "@/utils/thhersUtils";

const { user } = useStore();

const cast3 = new BroadcastChannel("channel3");
provide("cast3", cast3);

onMounted(async () => {
	// @ts-ignore  切换链 刷新页面
	window.ethereum && window.ethereum.on("chainChanged", handleChainChanged);
	// @ts-ignore  监听切换账户
	window.ethereum && window.ethereum.on("accountsChanged", handleAccountsChanged);
	// @ts-ignore  监听断开钱包
	window.ethereum && window.ethereum.on("disconnect", handleDisconnect);
	// @ts-ignore  监听连接钱包
	window.ethereum && window.ethereum.on("connect", handleConnect);

	// 在tp钱包手机端的处理，tp钱包手机端在切换账户时不会触发accountsChanged事件，所以需要手动处理

	if (user.isLogin) {
		const { address } = await initSigner();
		if (address != user.address) {
			user.$reset();
			location.reload();
			return;
		}
	}
});

function handleAccountsChanged(accounts: any) {
	console.log("切换账号", accounts);
	user.$reset();
	setTimeout(() => {
		location.reload();
	});
}
function handleChainChanged(chainId: number) {
	console.log(chainId);
	user.$reset();
	setTimeout(() => {
		location.reload();
	});
}

function handleDisconnect(error: any) {
	console.log(error);
	user.$reset();
	setTimeout(() => {
		location.reload();
	});
	// console.log("钱包已经断开");
}

function handleConnect(accounts: Array<string>) {
	console.log("链接钱包", accounts);
	// location.reload();
	// console.log("钱包已经连接");
}
</script>

<template>
	<router-view />
</template>

<style scoped lang="scss"></style>

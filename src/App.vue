<script setup lang="ts">
import { onMounted,provide } from 'vue';
import useStore from "@/store";
const { user } = useStore();

let cast3 = new BroadcastChannel("channel3");
provide('cast3', cast3);

onMounted(() => {
  //@ts-ignore  切换链 刷新页面
  ethereum && ethereum.on('chainChanged', handleChainChanged);
  //@ts-ignore  监听切换账户
  ethereum && ethereum.on('accountsChanged', handleAccountsChanged);
  //@ts-ignore  监听断开钱包
  ethereum && ethereum.on('disconnect', handleDisconnect);
  //@ts-ignore  监听连接钱包
  ethereum && ethereum.on('connect', handleConnect);
})

function handleAccountsChanged(accounts: any) {
  console.log('切换账号', accounts)
  user.$reset();
  // user.resetting();
  // location.reload();
}
function handleChainChanged(chainId: number) {
  console.log(chainId);
  user.$reset();
  // user.resetting()
  // location.reload();
}

function handleDisconnect(error: any) {
  console.log(error)
  // user.resetting()
  // location.reload();
  //console.log("钱包已经断开");
}

function handleConnect(accounts: Array<string>) {
  console.log('链接钱包', accounts)
  // location.reload();
  //console.log("钱包已经连接");
}

</script>

<template>
  <router-view />
</template>

<style scoped lang="scss">
</style>

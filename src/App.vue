<script setup lang="ts">
import { provide } from "vue";

import { useWalletListener } from "@/hooks/useWalletListener";

const cast3 = new BroadcastChannel("channel3");
provide("cast3", cast3);

useWalletListener();
</script>

<template>
	<router-view />
</template>

<style scoped lang="scss"></style>

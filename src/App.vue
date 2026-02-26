<script setup lang="ts">
import { provide } from "vue";

const cast3 = new BroadcastChannel("channel3");
provide("cast3", cast3);
</script>

<template>
	<router-view />
</template>

<style scoped lang="scss"></style>

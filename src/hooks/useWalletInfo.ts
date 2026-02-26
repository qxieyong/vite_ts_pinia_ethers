import { useAppKitAccount, useAppKitNetwork } from "@reown/appkit/vue";
import { computed, watch, watchEffect } from "vue";

import useStore from "@/store";

const useWalletInfo = (login?: () => void, loginOut?: () => void) => {
	const { user } = useStore();

	const account = useAppKitAccount();
	const networkData = useAppKitNetwork();

	const connected = computed(() => !!account.value?.isConnected);
	const address = computed(() => account.value?.address ?? "");
	const chainId = computed(() => networkData.value.chainId ?? "");

	watchEffect(() => {
		console.log("watchEffect 登录状态变化", {
			connected: connected.value,
			address: address.value
		});
		if (connected.value && address.value && !user.isLogin) {
			console.log("执行登录方法");
			login?.();
		}
	});

	watch(address, (newValue, oldValue) => {
		if (newValue === oldValue) return;
		// 钱包断开或切换
		const isDisconnected = !newValue && !!oldValue;
		const isSwitched = !!newValue && !!oldValue && newValue !== oldValue;

		if (isSwitched) {
			console.log("切换", {
				newValue,
				oldValue
			});
			user.logout();
			login?.();
			return;
		}

		if (isDisconnected && user.address) {
			console.log("退出登录");
			loginOut?.();
		}
	});

	return {
		connected,
		address,
		chainId
	};
};

export { useWalletInfo };

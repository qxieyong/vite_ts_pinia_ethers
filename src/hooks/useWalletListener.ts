import { onMounted, onUnmounted } from "vue";

import useStore from "@/store";
import { initSigner } from "@/utils/thhersUtils";

export function useWalletListener() {
	const { user } = useStore();

	const reloadApp = () => {
		user.$reset();
		setTimeout(() => {
			location.reload();
		});
	};

	const handleAccountsChanged = (accounts: string[]) => {
		console.log("切换账号", accounts);
		reloadApp();
	};

	const handleChainChanged = (chainId: string) => {
		console.log("切换链", chainId);
		reloadApp();
	};

	const handleDisconnect = (error: any) => {
		console.log("钱包断开", error);
		reloadApp();
	};

	const handleConnect = (info: any) => {
		console.log("钱包连接", info);
	};

	onMounted(async () => {
		if (!window.ethereum) return;

		window.ethereum.on("chainChanged", handleChainChanged);
		window.ethereum.on("accountsChanged", handleAccountsChanged);
		window.ethereum.on("disconnect", handleDisconnect);
		window.ethereum.on("connect", handleConnect);

		// TP 钱包移动端特殊处理
		if (user.isLogin) {
			const { address } = await initSigner();
			if (address.toLowerCase() !== user.address.toLowerCase()) {
				reloadApp();
			}
		}
	});

	onUnmounted(() => {
		if (!window.ethereum) return;

		window.ethereum.removeListener("chainChanged", handleChainChanged);
		window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
		window.ethereum.removeListener("disconnect", handleDisconnect);
		window.ethereum.removeListener("connect", handleConnect);
	});
}

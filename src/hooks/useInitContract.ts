import { useAppKitProvider } from "@reown/appkit/vue";
import { BrowserProvider, Eip1193Provider, ethers } from "ethers";
import { ref, watch } from "vue";

type optionListType = {
	name: string;
	address: string;
	abi: any[];
};

function useInitContract<T extends readonly optionListType[]>(optionList: T) {
	const appKitProvider = useAppKitProvider<Eip1193Provider>("eip155");

	type ContractMap = {
		[_K in T[number]["name"]]: ethers.Contract;
	};

	const contracts = ref<ContractMap | null>(null);

	watch(
		() => appKitProvider.walletProvider,
		async newVal => {
			if (!newVal) return;
			const ethersProvider = new BrowserProvider(newVal);
			const signer = await ethersProvider.getSigner();

			const obj = {} as ContractMap;

			optionList.forEach(item => {
				obj[item.name as T[number]["name"]] = new ethers.Contract(item.address, item.abi, signer);
			});

			contracts.value = obj;
			window.contracts = contracts.value;
		},
		{ immediate: true }
	);

	return { contracts };
}

export { useInitContract };

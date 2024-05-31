import Message from "@/utils/ElementUIMsg";
// import VueI18n from '@/utils/language/index';
// let t = VueI18n.global.t;
type addChainType = {
	chainId: string;
	chainName: string;
	rpcUrls: string[];
	blockExplorerUrls: string[];
	nativeCurrency: {
		name: string;
		symbol: string;
		decimals: number;
	};
	iconUrls: [];
};
const chainMap: {
	"0x38": addChainType;
	"0x61": addChainType;
	"0x01": addChainType;
	"0x66eed": addChainType;
} = {
	"0x38": {
		chainId: "0x38",
		chainName: "BSC Mainnet",
		rpcUrls: ["https://bsc-dataseed.binance.org"],
		blockExplorerUrls: ["https://bscscan.com/"],
		nativeCurrency: {
			name: "BNB",
			symbol: "BNB",
			decimals: 18
		},
		iconUrls: []
	},
	"0x61": {
		chainId: "0x61",
		chainName: "Binance Smart Chain Testnet",
		rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
		blockExplorerUrls: ["https://testnet.bscscan.com"],
		nativeCurrency: {
			name: "tBNB",
			symbol: "tBNB",
			decimals: 18
		},
		iconUrls: []
	},
	"0x01": {
		chainId: "0x01",
		chainName: "Ethereum Mainnet",
		rpcUrls: ["https://mainnet.infura.io/v3/"],
		blockExplorerUrls: ["https://etherscan.io"],
		nativeCurrency: {
			name: "ETH",
			symbol: "ETH",
			decimals: 18
		},
		iconUrls: []
	},
	"0x66eed": {
		chainId: "0x66eed",
		chainName: "Arbitrum Görli",
		rpcUrls: ["https://goerli-rollup.arbitrum.io/rpc/"],
		blockExplorerUrls: ["https://goerli-rollup-explorer.arbitrum.io"],
		nativeCurrency: {
			name: "AGOR",
			symbol: "AGOR",
			decimals: 18
		},
		iconUrls: []
	}
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { ethereum } = window as any;
async function switchChain(chainId = "0x61") {
	const x = await ethereum.request({
		method: "eth_chainId"
	});
	if (x != chainId) {
		try {
			await ethereum.request({
				method: "wallet_switchEthereumChain",
				params: [{ chainId: chainId }]
			});
		} catch (switchError: any) {
			if (switchError.code === 4902) {
				try {
					await ethereum.request({
						method: "wallet_addEthereumChain",
						params: [chainMap[chainId]]
					});
				} catch (addError) {
					console.error(addError);
					Message.error("Oops, this is a error message.");
					throw new Error("Failed to add Ethereum chain");
				}
			} else if (switchError.code === 4001) {
				Message.error("Oops, this is a error message.");
				throw new Error("Failed to add Ethereum chain");
			} else {
				Message.error("Oops, this is a error message.");
				throw new Error("Failed to add Ethereum chain");
			}
			// handle other "switch" errors
		}
	}
}

export default switchChain;

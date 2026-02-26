import { mainnet, arbitrum, bscTestnet, bsc } from "@reown/appkit/networks";
import { createAppKit } from "@reown/appkit/vue";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";

export function initAppKit() {
	// 1. Get projectId from https://dashboard.reown.com
	const projectId = "3a4c4942dfb7237c5c52f83a3bfea052";

	// 2. Create your application's metadata object
	const metadata = {
		name: "My Website",
		description: "My Website description",
		url: "https://mywebsite.com", // url must match your domain & subdomain
		icons: ["https://avatars.mywebsite.com/"]
	};

	// 3. Create a AppKit instance
	createAppKit({
		adapters: [new EthersAdapter()],
		networks: [mainnet, arbitrum, bscTestnet, bsc],
		metadata,
		projectId,
		features: {
			email: false,
			socials: [],
			emailShowWallets: false,
			analytics: true // Optional - defaults to your Cloud configuration
		}
	});
}

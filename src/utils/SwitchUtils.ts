import { ElMessage } from 'element-plus';
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
let chainMap: {
  '0x38': addChainType;
  '0x61': addChainType;
  '0x01': addChainType;
  '0x66eed': addChainType;
} = {
  '0x38': {
    chainId: '0x38',
    chainName: 'BSC Mainnet',
    rpcUrls: ['https://bsc-dataseed.binance.org'],
    blockExplorerUrls: ['https://bscscan.com/'],
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18,
    },
    iconUrls: [],
  },
  '0x61': {
    chainId: '0x61',
    chainName: 'Binance Smart Chain Testnet',
    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
    blockExplorerUrls: ['https://testnet.bscscan.com'],
    nativeCurrency: {
      name: 'tBNB',
      symbol: 'tBNB',
      decimals: 18,
    },
    iconUrls: [],
  },
  '0x01': {
    chainId: '0x01',
    chainName: 'Ethereum Mainnet',
    rpcUrls: ['https://mainnet.infura.io/v3/'],
    blockExplorerUrls: ['https://etherscan.io'],
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    iconUrls: [],
  },
  '0x66eed': {
    chainId: '0x66eed',
    chainName: 'Arbitrum Görli',
    rpcUrls: ['https://goerli-rollup.arbitrum.io/rpc/'],
    blockExplorerUrls: ['https://goerli-rollup-explorer.arbitrum.io'],
    nativeCurrency: {
      name: 'AGOR',
      symbol: 'AGOR',
      decimals: 18,
    },
    iconUrls: [],
  }
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
let { ethereum } = window;
async function switchChain(chainId: string = '0x66eed') {
  let x = await ethereum.request({
    method: 'eth_chainId',
  });
  if (x != chainId) {
    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainId }],
      });
    } catch (switchError: any) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [chainMap[chainId]],
          });
        } catch (addError) {
          // handle "add" error
          console.error(addError);
          // Toast.fail("Switch "+chainMap[chainId].chainName+" Chain Failed");
          //   Toast.fail(t('wallet.addError'));
          ElMessage.error('Oops, this is a error message.');
        }
      } else if (switchError.code === 4001) {
        // Toast.fail("Switch "+chainMap[chainId].chainName+" Chain Failed")
        // Toast.fail(t('wallet.Cancelled'));
        ElMessage.error('Oops, this is a error message.');
      } else {
        // Toast.fail(t('wallet.switchError'));
        ElMessage.error('Oops, this is a error message.');
      }
      // handle other "switch" errors
    }
  }
}

export { switchChain };

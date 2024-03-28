// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ethers } from 'ethers';
import common from '@/utils/common';

declare let window: any;
let commonNow =
  Number(window.ethereum && window.ethereum.chainId) == 97
    ? common.common_text
    : common.common;

const initSigner = async () => {
  let address: any, Balance: any;
  let { ethereum } = window;
  let provider = ethereum
    ? new ethers.providers.Web3Provider(ethereum)
    : new ethers.providers.JsonRpcProvider(commonNow.jsonRpc);
  try {
    await ethereum.request({ method: 'eth_requestAccounts' });
  } catch (err) {
    console.log(err);
  }
  let signer = provider.getSigner();
  try {
    address = await signer.getAddress();
    Balance = await provider?.getBalance(address);
  } catch (error) {
    console.log(error);
  }
  /*第一个是provider对象  第二个是当前授权地址*/
  return {
    provider: provider,
    address: address,
    signer: signer,
    Balance: Balance,
  };
};

const initDefault = async () => {
  let { ethereum } = window;
  let provider = ethereum
    ? new ethers.providers.Web3Provider(ethereum)
    : new ethers.providers.JsonRpcProvider(commonNow.jsonRpc);
  /*第一个是接口对象  第二个是当前授权地址*/
  return provider;
};

export { initSigner, initDefault };

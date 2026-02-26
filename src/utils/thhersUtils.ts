import { ethers } from "ethers";

import common from "@/utils/common";

const commonNow = Number(window.ethereum && window.ethereum.chainId) == 97 ? common.commonText : common.common;

const initSigner = async () => {
	let address = "";
	let balance = 0;
	const { ethereum } = window;
	const provider = ethereum ? new ethers.providers.Web3Provider(ethereum) : new ethers.providers.JsonRpcProvider(commonNow.jsonRpc);
	try {
		await ethereum.request({ method: "eth_requestAccounts" });
	} catch (err) {
		console.log(err);
	}
	const signer = provider.getSigner();
	try {
		address = await signer.getAddress();
		balance = Number(ethers.utils.formatUnits(await provider?.getBalance(address)));
	} catch (error) {
		console.log(error);
	}
	/* 第一个是provider对象  第二个是当前授权地址 */
	return {
		provider,
		address,
		signer,
		balance
	};
};

const initDefault = async () => {
	const { ethereum } = window;
	const provider = ethereum ? new ethers.providers.Web3Provider(ethereum) : new ethers.providers.JsonRpcProvider(commonNow.jsonRpc);
	/* 第一个是接口对象  第二个是当前授权地址*/
	return provider;
};

export { initSigner, initDefault };

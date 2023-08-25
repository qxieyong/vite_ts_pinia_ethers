import { ethers } from "ethers";

/**
 * @param {number} val 给合约需要转换的值
*/
const parseUnits = (val: number) => {
    return ethers.utils.parseUnits(String(val), 18);
}

/**
 * @param {number} val 从合约上拿下来需要转换的值
*/
const formatUnits = (val: number) => {
    return ethers.utils.formatUnits(val, 18);
}

export {
    parseUnits,
    formatUnits
}




/*
 * @Author: xieyong 1239665882@qq.com
 * @Date: 2024-05-31 11:56:01
 * @LastEditors: xieyong 1239665882@qq.com
 * @LastEditTime: 2025-08-14 13:57:21
 * @FilePath: \vite_ts_pinia_ethers\src\store\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 引入所有模块
import useUserStore from "./module/user"; // 用户相关

// 整合模块,统一导出
export default function Store() {
	return {
		user: useUserStore()
	};
}

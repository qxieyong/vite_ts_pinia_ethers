/*
 * @Author: xinlan212 57346229+xinlan212@users.noreply.github.com
 * @Date: 2022-10-24 10:48:55
 * @LastEditors: xinlan212 57346229+xinlan212@users.noreply.github.com
 * @LastEditTime: 2022-11-01 17:06:03
 * @FilePath: \meta-pro-h5\src\utils\common\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const commom_text = {
  //  测试网
  Router: '0xab7664500b19a7a2362Ab26081e6DfB971B6F1B0',
  WETH: '0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3',
  Bind: '0x6Ab604D79e5CfA71d754E24079B88aAE09adc529',
  ArbBurning: '0xCEb791C566799edBd842A4776b3d1ccD7c919d4e',
  BoardFactory: '0x6acD623138F20953f6De137c01527D08F906303d',
  Burning: '0x0d26A7036e70a630c23088eba5fEC8e82936A399',

  LSSVMPairEnumerableETH: '0xaED87ccC89de3361a129eB0A478F1a5630dcb05f',
  LSSVMPairMissingEnumerableETH: '0x504Ec1262028D3818f053522dfa709bCEF107674',
  LSSVMPairEnumerableERC20: '0x556F2da7955E3c95F291D310Cd6C4225a17299Fc',
  LSSVMPairMissingEnumerableERC20: '0x7C370EF39D073A5D6C5D65324C605B18dd3C008c',
  LSSVMPairFactory: '0xd3DA0E3175babc7a92Aae43c31255DD3d5ca62A9',
  LSSVMRouter: '0xB89891231e49078De0c25C45238f0A4C6f8a123C',
  ExponentialCurve: '0x982FC202C0B83F1Ca4d8c4A50F6C8fF0BCdc3305',
  LinearCurve: '0x8e7B7ae2eD2E21FeadBFeAE5D10d350B04d085e4',
  NFT: '0x327ab464cfAC7C82b497851EC8729a8a4AACa865',
  Factory: '0x57D119713ADadC6e14D087a41695B0a5248B96cb',
  jsonRpc: 'https://data-seed-prebsc-1-s2.binance.org:8545/',
  bscscan: 'https://testnet.bscscan.com/tx/',
  bscscanAddress: 'https://testnet.bscscan.com/address/',
  DefaultUrl: '0xfC8a7e370727Ba578E301ca38aFbcCBcbe94504b',
  chainId: 421613,
  httpUrl: 'https://metapro.superswap.cool/',

  // LSSVMPairEnumerableETH: '0xc46581f6801fB70dc02ddE89E8E94a7451cB2509',
  // LSSVMPairMissingEnumerableETH: '0x1A7B9c9bA86e1B5f7711A34726f35bbd6F6D3A17',
  // LSSVMPairEnumerableERC20: '0xaCBB8Ebb0B8776D78CAC24A98Af276fF2d30e352',
  // LSSVMPairMissingEnumerableERC20: '0x0070F50C98d5e1766Aa2f25FF6875ba4fcbd7582',
  // LSSVMPairFactory: '0x84B8Bc82fF416D893e386fEd0e1DF4D81C787a22',
  // LSSVMRouter: '0x4cf37B528e245D47102543B710Fd5A3509A998F1',
  // ExponentialCurve: '0x5A810c390b6269d9aB0a31b85533baCd03d141B3',
  // LinearCurve: '0xA7b2db2A93e26128D3c5F48A5E30A0f997FaA763',
  // NFT: '0x327ab464cfAC7C82b497851EC8729a8a4AACa865',
  // Factory: '0x57D119713ADadC6e14D087a41695B0a5248B96cb',
  // jsonRpc: 'https://data-seed-prebsc-1-s2.binance.org:8545/',
  // bscscan: 'https://bscscan.com/tx/',
  // DefaultUrl:'0xaE1f4307758ef9ae5b14d31f9258E9FEE180EE4E',
  // chainId:56,
  // httpUrl:"https://m.superswap.cool/"
};
const commom = {
  //正式
  Router: '0xab7664500b19a7a2362Ab26081e6DfB971B6F1B0',
  WETH: '0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3',
  Bind: '0x6Ab604D79e5CfA71d754E24079B88aAE09adc529',
  ArbBurning: '0xCEb791C566799edBd842A4776b3d1ccD7c919d4e',
  BoardFactory: '0x6acD623138F20953f6De137c01527D08F906303d',
  Burning: '0x0d26A7036e70a630c23088eba5fEC8e82936A399',


  LSSVMPairEnumerableETH: '0xc46581f6801fB70dc02ddE89E8E94a7451cB2509',
  LSSVMPairMissingEnumerableETH: '0x1A7B9c9bA86e1B5f7711A34726f35bbd6F6D3A17',
  LSSVMPairEnumerableERC20: '0xaCBB8Ebb0B8776D78CAC24A98Af276fF2d30e352',
  LSSVMPairMissingEnumerableERC20: '0x0070F50C98d5e1766Aa2f25FF6875ba4fcbd7582',
  LSSVMPairFactory: '0x84B8Bc82fF416D893e386fEd0e1DF4D81C787a22',
  LSSVMRouter: '0x4cf37B528e245D47102543B710Fd5A3509A998F1',
  ExponentialCurve: '0x5A810c390b6269d9aB0a31b85533baCd03d141B3',
  LinearCurve: '0xA7b2db2A93e26128D3c5F48A5E30A0f997FaA763',
  NFT: '0x327ab464cfAC7C82b497851EC8729a8a4AACa865',
  Factory: '0x57D119713ADadC6e14D087a41695B0a5248B96cb',
  jsonRpc: 'https://data-seed-prebsc-1-s2.binance.org:8545/',
  bscscan: 'https://bscscan.com/tx/',
  bscscanAddress: 'https://bscscan.com/address/',

  DefaultUrl: '0xaE1f4307758ef9ae5b14d31f9258E9FEE180EE4E',
  chainId: 56,
  httpUrl: 'https://m.superswap.cool/',
};

export default {
  commom: commom,
  commom_text: commom_text,
};

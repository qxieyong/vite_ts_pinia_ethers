<template>
  <div class="home">
    <!-- <DataBoard /> -->
    <Airdrop />
    <PreBurning />
    <Burning />
    <Board />
    <Safe />
  </div>
</template>

<script lang='ts' setup>
import { ref, reactive, onMounted, onUnmounted, watch, getCurrentInstance, provide } from 'vue';
import useStore from "@/store";
import { storeToRefs } from 'pinia';
import { initSigner } from "@/utils/thhersUtils";
import { useCopy } from '@/hooks/useCopy';
import Airdrop from '@/components/Airdrop.vue';
import thousandth from '@/hooks/useThousandth';
import PreBurning from '@/components/PreBurning.vue';
import Burning from '@/components/Burning.vue';
import Board from '@/components/Board.vue';
import DataBoard from '@/components/DataBoard.vue';
import Safe from '@/components/Safe.vue';
const { proxy } = getCurrentInstance() as any;
const { user } = useStore();

const { isLogin, address } = storeToRefs(user);  //除了计算属性该方法也可以保持响应式

const bigProtecList = reactive([
  { id: 1, name: 'protec amount', value: '$' + thousandth('1513651') },
  { id: 2, name: 'ArbBurning ', value: '....' },
  { id: 3, name: 'ArbBurningpected APR', value: thousandth('1513651') + '%' },
  { id: 4, name: 'TVL', value: thousandth('1513651') },
]);
const contract = {}
const bigInput = ref<{ price: string | number, balance: string }>(
  { price: '', balance: '0.00' },
);

const textHome = ref<HTMLDivElement | null>(null);
const imgHome = ref<HTMLDivElement | null>(null);
const loading = ref(true);

const isMobile = () => {
  let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  return flag;
}

const useMax = () => {
  bigInput.value.price = 123;
  // let obj = { name: 1, address: { x: 100 }, o: {} };
  // obj.o = obj; // 对象存在循环引用的情况
  // let d = deepClone(obj);
  // obj.address.x = 200;
  // console.log(obj)
  // console.log(d);
}

// const deepClone = (obj: any, hash = new WeakMap()) => {
//   if (obj === null) return obj;
//   // instanceof 检测对象是否属于某个 class
//   if (obj instanceof Date) return new Date(obj);
//   if (obj instanceof RegExp) return new RegExp(obj);
//   if (typeof obj !== 'object') return obj;
//   // 是对象的话就要进行深拷贝
//   if (hash.get(obj)) return hash.get(obj);
//   // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
//   let cloneObj = new obj.constructor();
//   hash.set(obj, cloneObj);
//   for (let key in obj) {
//     // 用来判断一个属性是定义在对象本身而不是继承自原型链的。
//     if (obj.hasOwnProperty(key) && !cloneObj[key]) {
//       // 实现一个递归拷贝
//       // cloneObj[key] = obj[key];
//       cloneObj[key] = deepClone(obj[key], hash);
//     }
//   }
//   return cloneObj;
// }

const submit = () => {
  const { price } = bigInput.value;
  if (!price || price == '' || price == null || price == undefined) return console.log('请输入数量！');
  console.log(price)
}

const copy = () => {
  let href: string[] | string = window.location.href;
  if (href.includes('referrer')) {
    href = href.split('=');
    href[1] = address.value;
    href = href.join('=');
  } else {
    href = href + '?referrer=' + address.value;
  }
  useCopy(href);
}

const initDate = async () => {
  //第一步 ----  获取 当前钱包对象 和 provider
  const { provider, address, signer } = await initSigner();
  console.log(provider, address, signer);
  // contract.Bind = new ethers.Contract(proxy.$common.Bind, Bind, provider).connect(signer);
  // contract.Swap = new ethers.Contract(proxy.$common.Swap, Swap, provider).connect(signer);
  // contract.USDT = new ethers.Contract(proxy.$common.USDT, ERC20, provider).connect(signer);
}

watch(isLogin, newvalue => {
  if (newvalue) {
    initDate();
  }
})

onMounted(() => {
  // if (!isMobile()) {  //pc
  //   let height = textHome.value?.offsetHeight;
  //   if (height) (imgHome.value as HTMLDivElement).style.height = height + 'px'
  //   window.addEventListener('resize', () => {
  //     if (document.body.clientWidth > 500) {
  //       let height = textHome.value?.offsetHeight;
  //       if (height) (imgHome.value as HTMLDivElement).style.height = height + 'px'
  //     } else {
  //       (imgHome.value as HTMLDivElement).style.height = 'auto'
  //     }
  //   })
  // }
  let tries = 0;
  //@ts-ignore
  setTimeout(function initTimer() {
    //@ts-ignore
    if (!window.ethereum && ++tries < 20) return setTimeout(initTimer, 50);
    else initDate()
  })
})

onUnmounted(() => {
  // window.removeEventListener('resize', () => { })
})
</script>

<style scoped lang="scss">
.home >div{
  margin-bottom: 10px;
}
h1 {
  font-size: 4.083vw;
  font-family: PingFang SC;
  font-weight: bold;
  color: #1FC7D4;
  text-align: center;

  @media screen and (max-width:500px) {
    font-size: 35px;
  }
}

.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 1.563vw;
  height: auto;

  // overflow-x: hidden;
  @media screen and (max-width:500px) {
    flex-direction: column;
    width: 90%;
    margin-bottom: 20px;
  }

  >img {
    width: 49%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;

    @media screen and (max-width:500px) {
      width: 100%;
      height: 300px;
    }
  }

  >div {
    width: 49%;
    background: #FFFFFF;
    border-radius: 10px;
    font-size: 1.1vw;
    font-family: PingFang SC;
    font-weight: bold;
    color: #280D5F;
    padding: 2.042vw;
    box-sizing: border-box;
    position: relative;

    @media screen and (max-width:500px) {
      width: 100%;
      margin-top: 15px;
      height: auto;
      padding: 15px 10px;
      font-size: 13px;
    }

    p {
      line-height: 30px;

      @media screen and (max-width:1200px) {
        line-height: 25px;
      }
    }

    p:nth-of-type(2) {
      margin-top: 1.042vw;

      @media screen and (max-width:500px) {
        margin-top: 15px;
      }
    }

    .flame {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2.604vw;
      width: 110%;
      margin-top: 0.781vw;
      position: absolute;
      left: 0;

      @media screen and (max-width:500px) {
        height: 30px;
        margin-top: 8px;
      }

      img {
        width: 1.042vw;
        height: 1.042vw;
        margin-right: 0.417vw;
        position: relative;
        z-index: 1;
        top: -0.156vw;

        @media screen and (max-width:500px) {
          width: 18px;
          height: 18px;
          top: -2px;
        }
      }

      p {
        top: -0.156vw;
        position: relative;
        z-index: 1;
        background-image: -webkit-linear-gradient(45deg, #FFFFCB 0%, #FFE342 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @media screen and (max-width:500px) {
          top: -2px;
          font-size: 14px;
        }
      }

      .bj {
        top: 0;
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }

    .btnBOxList {
      margin-top: 1.302vw;
      display: flex;
      height: 2.583vw;
      align-items: center;
      justify-content: center;
      padding: 0 3%;
      margin-top: 4.604vw;

      @media screen and (max-width:500px) {
        height: 30px;
        margin-top: 52px;
      }

      >div:nth-of-type(1) {
        width: 90%;
        height: 100%;
        cursor: pointer;
        background: #1FC7D4;
        box-shadow: 0vw 3px 2px #02A4B5;
        border-radius: 10px;
        text-align: center;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      >div:nth-of-type(2) {
        margin-left: 0.781vw;
        cursor: pointer;
        width: 15%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #1FC7D4;
        border-radius: 10px;

        @media screen and (max-width:500px) {
          margin-left: 10px;
          border-radius: 10px;
        }

        >img {
          width: 1.302vw;
          height: 1.302vw;

          @media screen and (max-width:500px) {
            width: 16px;
            height: 16px;

          }
        }
      }
    }
  }
}

.protec {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  margin-top: 2.604vw;

  >p {
    font-size: 2.25vw;
    font-family: PingFang SC;
    font-weight: bold;
    color: #1FC7D4;
    display: flex;
    align-items: center;

    @media screen and (max-width:500px) {
      font-size: 20px;
    }

    img {
      width: 2.302vw;
      margin-left: 1.521vw;
      height: 2.302vw;

      @media screen and (max-width:500px) {
        width: 20px;
        margin-left: 10px;
        height: 20px;
      }
    }

  }

  .home {
    display: flex;
    margin-top: 0.781vw;
    width: 70%;
    padding: 1.042vw 0.781vw;
    background-color: white;
    border-radius: 10px;
    justify-content: space-between;
    box-sizing: border-box;

    @media screen and (max-width:500px) {
      width: 90%;
      padding: 15px;
      box-sizing: border-box;
      margin-top: 15px;
      flex-direction: column;

      >div {
        width: 100% !important;
      }
    }

    .left {
      width: 49%;

      .listBox {
        display: grid;
        grid-template-rows: repeat(2, 46%);
        grid-template-columns: repeat(2, 49%);
        justify-content: space-between;
        align-content: space-around;

        @media screen and (max-width:500px) {
          display: flex;
          flex-direction: column;
        }

        >.box {
          background: #EEEAF4;
          border-radius: 10px;
          display: flex;
          padding: 1.5vw 0;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          @media screen and (max-width:500px) {
            margin-bottom: 15px;
            padding: 15px 0;
          }

          .title {
            font-size: 1.2vw;
            font-family: PingFang SC;
            font-weight: bold;
            color: #7A6EAA;

            @media screen and (max-width:500px) {
              font-size: 12px;
            }
          }

          .price {
            margin-top: 0.26vw;
            font-size: 1.5vw;
            font-family: PingFang SC;
            font-weight: 800;
            color: #280D5F;

            @media screen and (max-width:500px) {
              font-size: 15px;
            }
          }
        }

        >.box:last-child {
          margin-bottom: 0;
        }
      }

      .btn {
        height: 2.563vw;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #9ADBE1;
        border-radius: 10px;
        width: 100%;
        color: white;
        cursor: pointer;
        margin-top: 0.5vw;
        box-shadow: 0vw 3px 2px #02A4B5;

        @media screen and (max-width:500px) {
          margin-top: 10px;
          height: 30px;
        }
      }
    }

    .right {
      width: 49%;
      background: #EEEAF4;
      border-radius: 10px;
      padding: 1vw 1vw 0.417vw;
      box-sizing: border-box;

      @media screen and (max-width:500px) {
        margin-top: 15px;
        padding: 15px;
      }

      .header {
        display: flex;

        p {
          font-size: 1.2vw;
          font-family: PingFang SC;
          font-weight: bold;
          color: #1FC7D4;
          cursor: pointer;

          @media screen and (max-width:500px) {
            font-size: 14px;
          }
        }
      }

      .tokenBalance {
        margin-top: 0.521vw;
        display: flex;
        font-size: 1.2vw;
        font-family: PingFang SC;
        font-weight: 800;
        color: #280D5F;
        justify-content: space-between;

        @media screen and (max-width:500px) {
          font-size: 14px;
          margin: 10px 0;
        }
      }

      .inputBox {
        height: 3.083vw;
        width: 100%;
        position: relative;
        margin-top: 0.521vw;

        @media screen and (max-width:500px) {
          height: 35px;
        }

        >input {
          width: 100%;
          background: #FFFFFF;
          border: 0.052vw solid #7A6EAA;
          border-radius: 10px;
          outline: #7645D9;
          height: 100%;
          padding-left: 0.521vw;
          font-size: 1.5vw;
          box-sizing: border-box;
          color: #280d5f;

          @media screen and (max-width:500px) {
            padding-left: 8px;
          }
        }

        >input:focus {
          border: 0.052vw solid #7645D9;
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none !important;
        }

        //兼容火狐
        input[type='number'] {
          -moz-appearance: textfield;
        }

        >div {
          position: absolute;
          background: #1FC7D4;
          cursor: pointer;
          font-size: 0.625vw;
          border-radius: 10px;
          padding: 0.313vw 0.521vw;
          top: 50%;
          right: -4%;
          transform: translate(-50%, -50%);
          box-shadow: 0vw 3px 2px #02A4B5;

          @media screen and (max-width:500px) {
            padding: 2px 5px;
            top: 45%;
          }
        }
      }

      .tips {
        font-size: 1.2vw;
        font-family: PingFang SC;
        font-weight: 800;
        color: #1FC7D4;
        text-align: center;
        cursor: pointer;
        margin: 1vw;

        @media screen and (max-width:500px) {
          font-size: 12px;
          margin: 10px 0;
        }
      }

      .btn {
        width: 100%;
        text-align: center;
        height: 3.083vw;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #1FC7D4;
        border-radius: 10px;
        box-shadow: 0vw 3px 2px #02A4B5;
        color: white;
        cursor: pointer;

        @media screen and (max-width:500px) {
          height: 35px;
        }
      }
    }
  }
}
</style>

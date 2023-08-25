import { defineStore } from "pinia";
export default defineStore("user", {
  state: () => {
    return {
      isLogin: false,
      address: '',
      chainid: 0,
      lang: 'EN',
    };
  },
  getters: {
    displayAddress(state) {
      let left = state.address.slice(0, 4);
      let right = state.address.slice(-4);
      return `${left}...${right}`;
    }
  },
  actions: {
    setUserinfo(address: string) {
      this.address = address;
      this.isLogin = true;
    },
    setChainId(chainid: number) {
      this.chainid = chainid;
    },
    setLang(lang: string) {
      this.lang = lang;
    }
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        paths: ['address', 'isLogin', 'lang'],
      },
    ],
  }
});

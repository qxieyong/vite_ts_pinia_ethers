type userinfoType = {
    address: string,
    active: boolean, //是否激活
    referrer: string, //上级地址
    subNum: number, //下级数量
    balance: string,//余额
};

type ContractDataType = {
    isPreStart: boolean, //是否开启PreBurning
    prePrice: string,//PreBurning价格
    price: string,//当前价格
    isStart: boolean,//是否开启Burning
    fomoAmount: string, // fomo累计奖励
    fomoDivAmount: string,//fomo已分配奖励
    fomoEndTime: string//本期fomo结束时间
    totalBurn: string //全网燃烧总量
}

type contractType = {
    Bind: any,
    ArbBurning: any,
    Burning: any,
    BoardFactory: any
    Router?: any,
    WETH?: any
}

type InvestmentListType = {
    amount: string;
    typeString: string;
    increase: boolean;
    time: string;
    balance: string;
}

type combustionType = {
    account: string;
    amount: string;
    reward: string;
    time: string;
    rawTime: string | number;
}


type userPerBoxType = {
    airdropped: string, //已空投数量
    toRelease: string, //总奖励
    saved: string, //保险箱数量
    performance: string, //业绩
    level: string, //业绩等级
    earned: string, //可领取奖励
    canClaim: boolean,    //是否可从保险箱领取
    nextClaimTime: string, //可从保险箱领取时间
    recordNum: string, //奖励日志数量
}


export type {
    userinfoType,
    ContractDataType,
    contractType,
    InvestmentListType,
    combustionType,
    userPerBoxType
};
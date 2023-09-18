// 引入 BigNumber 类
const BigNumber = require('bignumber.js');

// 创建两个大数字

// const num1 = new BigNumber('1234567890123456789012345678901234567890');
// const num2 = new BigNumber('9876543210987654321098765432109876543210');
// const res1 = 1/16.160219174148033000
// const num3 = new BigNumber(res1);
// const res2 = 1/2620797370278
// const num4 = new BigNumber(res2);
// 进行加法、减法、乘法和除法操作
// const sum = num1.plus(num2);
// const difference = num1.minus(num2);
// const product = num1.times(num2);
// const quotient = num1.dividedBy(num2);

// // 打印结果
// console.log('num3:', num3.toString());
// console.log('num4:', num4.toString());

function getSum(paramsA, paramsB) {
    const num1 = new BigNumber(paramsA);
    const num2 = new BigNumber(paramsB);
    const sum = num1.plus(num2)
    getRes("总和",sum)
}

function getDiffer(paramsA, paramsB) {
    const num1 = new BigNumber(paramsA);
    const num2 = new BigNumber(paramsB);
    const dif = num1.minus(num2)
    getRes("相差",dif)
}


function getRange(param) {
    var res1 = param * 0.995
    var res2 = param * 0.99
    console.log("range:", res2,"--", res1);
}

function getRes(tip,params) {
    const decimalNumber = new BigNumber(params);
// 使用 toNumber() 方法将其转换为普通的十进制数字
    const decimalValue = decimalNumber.toNumber();
    console.log(tip, decimalValue);
}


function getTimes(paramsA, paramsB) {
    const num1 = new BigNumber(paramsA);
    const num2 = new BigNumber(paramsB);
    const times = num1.times(num2)
    getRes("相乘",times)
    return times
}


const receive = 162.940000
const fixrate = 0.99
const calculateRes = receive * fixrate

getRes("交易费处理后接收",calculateRes)
const determinedReceive = 161.596305
const commoinReceive = 0.185019
const floatRate = determinedReceive / commoinReceive

getRange(commoinReceive)
getRes("浮动情况下收取的费用比例",1-floatRate)
// getDiffer(0.000265989227994, 0.000021000000189)
// getSum(0.000021000000147,0.000034575000242025)
// getTimes(3, 201)

function getFixedRes(paramsA, paramsB) {
  var times =  getTimes(paramsA, 0.99)
  getDiffer(times.toString(),paramsB)
}

getFixedRes(100, 9)
// 使用 BigNumber 构造函数创建一个 BigNumber 对象




// console.log('Decimal:', decimalValue);
// console.log('Sum:', sum.toString());
// console.log('Difference:', difference.toString());
// console.log('Product:', product.toString());
// console.log('Quotient:', quotient.toString());

 let defaultQRCodeMap = new Map([
    [2, "wxp://f2f0NK-D39VHSJCtY5yLARj6w6k0LnAQ_8Qc"],
    [3, "HTTPS://QR.ALIPAY.COM/FKX03540OBSSW9S9NLLB21"],
    [5, "https://i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&a=1&u=1211233023&ac=808067485B57E4D958CC18756F6D789A4D54816FED899014400F86A5DFA74966&n=Eric-桂&f=wallet"]
]);

let myQRCodeMap = new Map([]);

let qrcodeMap = myQRCodeMap.size > 0 ? myQRCodeMap : defaultQRCodeMap;

module.exports = qrcodeMap;
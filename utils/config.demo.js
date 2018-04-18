module.exports = {
    paysapi : {
        uid: "注册账号，在“我的Paysapi”-“账号设置”-“API接口信息”中获取。",
        token: "注册账号，在“我的Paysapi”-“账号设置”-“API接口信息”中获取。",
        //下面这2个url是官方api，请勿更改
        getJsonUrl : "https://pay.paysapi.com/?format=json",
        redirectUrl : "https://pay.paysapi.com/",
        //这个改为你自己的域名吧
        myBaseURL :  "http://lannisterpay.com"
    },
    myQRCodeMap : new Map([])
    /**类似下面的
        myQRCodeMap : new Map([
            //分别是微信，支付宝，QQ，顺序别乱了
            [2, "自己的二维码解码出来的字符串"],
            [3, "自己的二维码解码出来的字符串"],
            [5, "自己的二维码解码出来的字符串"]
        ])
    */
}
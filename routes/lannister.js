let express = require('express');
let router = express.Router();
let path = require("path");
let validator = require('validator');
let qrcodeMap = require('../utils/qrcodeMap');


router.get('/', (req,res) => {
    res.render('lannister/index');
});

/**
 * 这里比较绕一点，
 * 这里，是微信或支付宝等app的“扫一扫”扫某个二维码，
 * 然后内置浏览器访问这个url
 * 那么，应该redirect到对应的二维码本身里面含有的url
 * 或者404notfound
 */
router.get('/pay', (req,res)=>{

    let ua = String(req.headers['user-agent']);
    let weixin = /MicroMessenger/g.test(ua) ? 2 : 1;
    let ali = /AlipayClient/g.test(ua) ? 3 : 1;
    let qq = /QQ/g.test(ua) ? 5 :1;
    let r = weixin * ali * qq;
    if (qrcodeMap.has(r)){
        //目前只有支付宝可以直接跳转
        if (r === 3){
          res.redirect(301,qrcodeMap.get(r));   
        }
        else {
            let myQRCodeFilesNameMap = new Map([
                [2, "weixin.jpg"],
                [5,"qq.png"]
            ]);
            res.render('lannister/pay', {img: myQRCodeFilesNameMap.get(r)});
        }
        
    }
    else{
        res.render('index/error', {err: "请使用微信/QQ/支付宝的app扫码！"})
    }
});

module.exports = router;

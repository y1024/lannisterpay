let express = require('express');
let router = express.Router();
let crypto = require('crypto');
let {paysapi} = require('../utils/config');
let axios = require('axios');

router.get("/", (req,res)=>{
    res.redirect(301, '/api/list');
});

router.get("/list", (req,res)=>{
    res.render('api/list');
});

router.get("/paysapi", (req,res)=>{
    res.render('api/paysapi');
});

router.post('/paysapi', (req,res)=>{
    /**有2种方法发起支付：1.跳转到我们支付页；2.获取json支付页信息，自定义支付页
     * 这里使用第2种
     * 下面的强制转化是为了适应api的要求
     * 哥是精神Java程序员
     * 欢迎TypeScript高手来把这个repo改为ts的
     */
    let uid = String(paysapi.uid);
    let price = parseFloat(req.body.price).toFixed(2);
    let istype = parseInt(req.body.istype);
    let notify_url = String(paysapi.myBaseURL) + "/api/paysapi/notify_url";
    let return_url = String(paysapi.myBaseURL) + "/api/paysapi/return_url";
    let orderid = String(req.body.orderid);
    let orderuid = String(req.body.orderuid);
    let goodsname =  String(req.body.goodsname);
    //下面这一行是按照api要求对字符串进行拼接
    let data = String(goodsname + istype + notify_url + orderid + orderuid + price + return_url + paysapi.token + uid);
    let key = crypto.createHash('md5').update(data).digest('hex');

    // req.body = { price, istype, orderid, orderuid, goodsname}
    axios.post(paysapi.getJsonUrl, {
        uid,
        price,
        istype,
        notify_url,
        return_url,
        orderid,
        orderuid,
        goodsname,
        key
      })
      .then(function (response) {
        res.render('api/paysapi', {data: response.status});
      })
      .catch(function (error) {
        res.render('index/error',  {err: error.message});
      });
    
});


router.post("/paysapi/notify_url", (req,res)=>{
    res.status(200);
});

router.get("/paysapi/return_url", (req,res)=>{
    res.status(200);
});

module.exports = router;
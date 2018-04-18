let express = require('express');
let router = express.Router();


router.get('/', (req,res) => {
    res.render('index/index');
});

router.get('/list', (req,res)=>{
    res.render('index/list');
});

router.get('/donate', (req,res)=>{
    res.render('index/donate');
});

router.get("/error", (req, res)=>{
    res.render('index/error', {err: "别紧张，你只是出错了而已~~~"});
});

module.exports = router;
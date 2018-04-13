let express = require('express');
let router = express.Router();


router.get('/', (req,res) => {
    res.render('index/index');
});

router.get('/donate', (req,res)=>{
    res.render('index/donate');
});


module.exports = router;
let express = require('express');
let router = express.Router();

router.get('/', (req,res)=>{
    res.status(200).json({message:"IoT works!"});
});

module.exports = router;
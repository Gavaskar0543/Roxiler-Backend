const express = require('express');
const router = express.Router();
const transactionController = require('../../../controller/api/v1');
router.get('/',(req,res)=>{
    return res.status(200).json({
        message:'server up!'
    })
})
router.get('/sales/:month',transactionController.combinedData);
module.exports = router;
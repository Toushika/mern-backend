const express = require('express');
const router = express.Router();
const getStudentPaymentDetails = require('../../../models/PayBillSchema');
var result=[];

//@route post /viewPaymentStatus
//@ desc all items
//@access public
router.get('/', (req, res) => {
    res.send(preparePaymentStatus());
});

function preparePaymentStatus() {

    getStudentPaymentDetails.find({},function(err,data){
    if(err){
        console.log(err);
    }
    result = data;
   
});
    return result;

}


module.exports = router;
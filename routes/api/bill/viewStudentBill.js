const express = require('express');
const router = express.Router();
const getStudentBillDetails = require('../../../models/StudentBillCreateSchema');
var result=[];

//@route post /viewAllBill
//@ desc all items
//@access public
router.get('/', (req, res) => {
    res.send(prepareStudentBillDetail());
});

function prepareStudentBillDetail() {

    getStudentBillDetails.find({},function(err,data){
    if(err){
        console.log(err);
    }
    result = data;
   
});
    return result;

}


module.exports = router;
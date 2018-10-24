const express = require('express');
const router = express.Router();
const getStudentBillType= require('../../../models/StudentBillTypeSchema');
var result=[];

//@route post /prepareBillType
//@ desc all items
//@access public
router.get('/', (req, res) => {
    res.send(prepareStudentBill());
});

function prepareStudentBill() {

    getStudentBillType.find({},function(err,data){
    if(err){
        console.log(err);
    }

    result = data;
   
});
    return result;

}


module.exports = router;
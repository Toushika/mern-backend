const express = require('express');
const router = express.Router();
const getStudentStatusModel = require('../../../models/StudentStatusSchema');
var result=[];

//@route post /getAllStudentStatus
//@ desc all items
//@access public
router.get('/', (req, res) => {
    res.send(prepareStudentStatus());
});

function prepareStudentStatus() {

    getStudentStatusModel.find({},function(err,data){
    if(err){
        console.log(err);
    }

    result = data;
    console.log(data);
   
});
    return result;

}
module.exports = router;
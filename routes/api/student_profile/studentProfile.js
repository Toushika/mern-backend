const express = require('express');
const router = express.Router();
const getStudentModel = require('../../../models/StudentSchema');
var result=[];

//@route post /getAllStudentInfo
//@ desc all items
//@access public
router.get('/', (req, res) => {
    res.send(prepareStudentProfile());
});

function prepareStudentProfile() {

    getStudentModel.find({},function(err,data){
    if(err){
        console.log(err);
    }

    result = data;
   
});
    return result;

}


module.exports = router;
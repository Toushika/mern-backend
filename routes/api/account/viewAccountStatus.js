const express = require('express');
const router = express.Router();
const viewAccountStatus = require('../../../models/AccountStatusSchema');
const studentBillDetail = require('../../../models/StudentBillCreateSchema');
const studentPaymentDetail = require('../../../models/PayBillSchema');
var result=[];

//@route post /viewAllAccountStatus
//@ desc all items
//@access public
router.get('/', (req, res) => {
    studentBillDetail.find().populate('studentPaymentDetails').exec(function(err, studentBillDetails) {
        if (err) throw err;
    
        var adTimes = [];
        studentBillDetails.forEach(function(studentBillDetailuser) {
            user.friends.forEach(function(friend) {
                adTimes.push(friend.adTime);
            });
        });
    
        response.send(adTimes); // adTimes should contain all addTimes from his friends
    });
});

module.exports = router;
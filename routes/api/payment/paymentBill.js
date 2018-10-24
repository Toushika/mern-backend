const express = require('express');
const router = express.Router();
const studentPaymentModel = require('../../../models/PayBillSchema');

//@route post /savePaymentInfo
//@ desc all items
//@access public
router.post('/', (req, res) => {
    console.log('tested');
    const paymentInfoGet = new studentPaymentModel({
        unique_id:getUniqueId(),
        student_id:req.body.student_id,
        roll:req.body.roll,
        class:req.body.class,
        payment_method:req.body.payment_method,
        paid_amount:req.body.paid_amount
        
       
    });
    console.log("test: " + JSON.stringify(paymentInfoGet));

    paymentInfoGet.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("test: ");
            console.log("Data Saved!!");
            res.send(JSON.stringify(paymentInfoGet));
        }

    });
    
});

function getUniqueId() {
    var d = new Date().getMilliseconds();
    return "id_"+d;
}

module.exports = router;


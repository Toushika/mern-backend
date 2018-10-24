const express = require('express');
const router = express.Router();
const studentBillModel = require('../../../models/StudentBillCreateSchema');

//@route post /saveBillInfo
//@ desc all items
//@access public
router.post('/', (req, res) => {
    console.log('tested');
    const BillInfoGet = new studentBillModel({
        unique_id:getUniqueId(),
        student_id:req.body.student_id,
        roll:req.body.roll,
        class:req.body.class,
        bill_due_date:req.body.bill_due_date,
        fine_date:req.body.fine_date,
        monthly_fees:req.body.monthly_fees,
        exam_fees:req.body.exam_fees,
        lab_fees:req.body.lab_fees,
        ssc_fees:req.body.ssc_fees,
        hsc_fees:req.body.hsc_fees,
        jsc_fees:req.body.jsc_fees,
        psc_fees:req.body.psc_fees,
        medical_fees:req.body.medical_fees,
        other:req.body.other,
        total_bill: Number(req.body.monthly_fees) + Number(req.body.exam_fees) + Number(req.body.lab_fees) + Number(req.body.ssc_fees) +
        Number(req.body.hsc_fees) + Number(req.body.jsc_fees) +Number(req.body.psc_fees) + Number(req.body.medical_fees)+Number(req.body.other)

    });
    console.log("test: " + JSON.stringify(BillInfoGet));

    BillInfoGet.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("test: ");
            console.log("Data Saved!!");
            res.send(JSON.stringify(BillInfoGet));
        }

    });
    
});

function getUniqueId() {
    var d = new Date().getMilliseconds();
    return "id_"+d;
}

module.exports = router;


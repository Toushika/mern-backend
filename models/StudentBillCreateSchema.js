const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const studentBillCreateSchema = new Schema({

    unique_id: {
        type: String
    },
    student_id: {
        type: String
    },
    roll: {
        type: String
    },
    class: {
        type: String
    },
    bill_due_date: {
        type: Date
    },
    fine_date: {
        type: Date
    },
    monthly_fees: {
        type: Number
    },
    exam_fees: {
        type: Number
    },
    lab_fees: {
        type: Number
    },
    ssc_fees: {
        type: Number
    },
    hsc_fees: {
        type: Number
    },
    jsc_fees: {
        type: Number
    },
    psc_fees: {
        type: Number
    },
    medical_fees: {
        type: Number
    },
    other: {
        type: Number
    },
    total_bill: {
        type: Number
    }

});

module.exports = StudentBillModel = mongoose.model('studentbillmodels', studentBillCreateSchema);

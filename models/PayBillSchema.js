const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PayBillSchema = new Schema({

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

    payment_method: {
        type: String
    },

    paid_amount: {
        type: Number
    }



});

module.exports = PaymentModel = mongoose.model('paymentbillmodels', PayBillSchema);

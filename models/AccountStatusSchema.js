const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AccountStatusSchema = new Schema({

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

    Total: {
        type: String
    },

    paid_amount: {
        type: Number
    },
    bill_due_date: {
        type: Date
    },
    fine_date: {
        type: Date
    },
    fine:{
        type:String
    }

});

module.exports = AccountStatusModel = mongoose.model('accountstatusmodels', AccountStatusSchema);

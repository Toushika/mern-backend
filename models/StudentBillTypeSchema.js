const mongoose =require('mongoose');
const  Schema = mongoose.Schema;

const studentBillTypeSchema = new Schema({
    bill_type:String,
    amount:Number
});

module.exports = StudentBillTypeModel  = mongoose.model('studentbilltypemodels', studentBillTypeSchema);
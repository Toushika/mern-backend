const mongoose =require('mongoose');
const  Schema = mongoose.Schema;
const Address = require('./AddressSchema');

const studentModelSchema = new Schema({

    student_id: {
        type: String,
        required: true,
        unique: true
    },

    name: {
        first_name:{
            type: String,
            required: true
        },
        last_name:{
            type:String,
            require:true
        }
    },
    gender: {
        type: String,
        enum: ['MALE','FEMALE','OTHER','N/A'],
        default: 'N/A'

    },

    parent_id: String,
    date_of_birth: Date,
    nationality: String,
    religion: String,
    blood_group: String,
    email: String,
    mobile_no: String,
    land_phone: String,
    address: Address,
    status:{
        type: String,
        enum: ["AVAILABLE","LEFT","RUSTICATED","PENDING"],
        default: 'PENDING'
    }

   });

module.exports = StudentModel  = mongoose.model('studentmodals', studentModelSchema);

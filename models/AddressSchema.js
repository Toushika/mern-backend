const mongoose = require('mongoose');
const AddressSchema = mongoose.Schema({
    village:{
        type: String
    },
    house_no:{
        type: Number
    },
    road_no:{
        type: Number
    },
    sector: {
        type: String
    },
    postOffice:{
        type: String
    },
    post_code:{
        type: Number
    },
    upazilla:{
        type: String
    },
    district:{
        type: String
    },
    _id:false
});

module.exports = AddressSchema;

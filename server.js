const  express = require('express');
const  bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const saveBill = require('./routes/api/bill/saveStudentBill');
const getAllStudent = require('./routes/api/student_profile/studentProfile');
const getAllStatus = require('./routes/api/student_status/studentStatus');
const billType=require('./routes/api/bill/prepareBillType');
const viewBill = require('./routes/api/bill/viewStudentBill');
const  savePayment= require('./routes/api/payment/paymentBill');
const viewPayment =require('./routes/api/payment/viewPayDetails');
const viewAccountStatus =require('./routes/api/account/viewAccountStatus');


const app = express();


//body parse  middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

var server = app.listen(5000, "127.0.0.1", function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("app listening at: ", host, port);
});

const db = require('./db_connection/connection').mongoURI;

mongoose.connect(db,{ useNewUrlParser: true })
.then(()=>console.log('Mongo Db Connect'))
.catch(err => console.log(err));

// app.use('/getAllBillInfo',cors(),getBill);
app.use('/getAllStudentInfo',cors(),getAllStudent);
app.use('/getAllStudentStatus',cors(),getAllStatus);
app.use('/prepareBillType',cors(),billType);
app.use('/saveBillInfo',cors(),saveBill);
app.use('/viewAllBill',cors(),viewBill);
app.use('/savePaymentInfo',cors(),savePayment);
app.use('/viewPaymentStatus',cors(),viewPayment);
app.use('/viewAllAccountStatus',cors(),viewAccountStatus);

const mongoose =require('mongoose');
const  Schema = mongoose.Schema;

const Subject = new Schema({
    subject_id: String
});

const StudentStatusSchema = new Schema({

    student_id: {
        type: String,
        required: true,
        unique: true
    },

      year: {
        type: String,
        required: true

    },

      class: {
        type: String,
        required: true
        
    },

      class_roll: {
        type: String,
        required: true,
        unique: true
    },
      Subjects: {
        type: Subject,
        required: true
       
    }

   });
module.exports = StudentStatusModel  = mongoose.model('studentstatusmodels', StudentStatusSchema);

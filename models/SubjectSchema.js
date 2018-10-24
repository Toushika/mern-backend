const mongoose = require('mongoose');

const Classes = require('./Classes');

const SubjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        description: String
    },
    section_id: String,
    teacher_id: String,
    subject_code: String,
    period: {
        start_time: Date,
        end_time: Date,
        duration: String
    }
});
module.exports = SubjectModel  = mongoose.model('subjectmodel', SubjectSchema);
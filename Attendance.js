const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    selfieUrl: { type: String }, // URL to the uploaded selfie
});

module.exports = mongoose.model('Attendance', AttendanceSchema);

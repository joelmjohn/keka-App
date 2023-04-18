const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employee = new Schema({
    employeeCode: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    reportingHead: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: false
    },
    primarySkill: {
        type: String,
        required: false
    },
    dataOfJoining: {
        type: Date,
        required: false
    },
    experience: {
        type: Number,
        required: false
    },
    relevantExperience: {
        type: Number,
        required: false
    },
    monthlyCtc: {
        type: Number,
        required: false
    },
    billing: {
        type: Boolean,
        required: false
    },
    isTracked:
    {
        type: Boolean,
        required: false
    }
}, { timestamps: true });

const Employee = new mongoose.model('Employee', employee);
module.exports = Employee;
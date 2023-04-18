const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeWallet = new Schema({
    employee: {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
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
    department: {
        type: String,
        required: true
    },
    wallet: {
        iv: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        }
    },
    updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

}, { timestamps: true });


const EmployeeWallet = new mongoose.model('EmployeeWallet', employeeWallet);
module.exports = EmployeeWallet;




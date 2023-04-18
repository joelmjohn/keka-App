const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const modelEnum = require('../constants/enum');

const user = new Schema({
    role: {
        type: String,
        enum: modelEnum.EMPLOYEE_ROLES
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    fullName: {
        type: String,
    },
    userName: {
        type: String,
    }
}, { timestamps: true });

module.exports = new mongoose.model('user', user);
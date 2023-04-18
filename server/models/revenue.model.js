const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const modelEnum = require('../constants/enum');

const revenueSchema = new Schema({
    employee: {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    department: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    monthlyRevenueINR: {
        type: Number
    },
    monthlyRevenueUSD: {
        type: Number
    },
    monthlyCtc: {
        type: Number,
        required: false
    },
    updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, { timestamps: true })

const Revenue = mongoose.model('Revenue', revenueSchema);
module.exports = Revenue;

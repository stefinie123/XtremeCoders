const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost:27017/PCU");

autoIncrement.initialize(connection);

const PatientSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    age :{
        type: Number,
        required: true
    },
    issue : {
        type: String,
        required: true
    },
    priorityLevel:{
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false,
        default: ""
    },
    admittedBy: {
        type: String,
        required: false,
        default: ""
    },
    admittedDate:{
        type: Date,
        required: true
    }
});

PatientSchema.plugin(autoIncrement.plugin, 'Patient');
module.exports = PatientSchema;
const mongoose = require('mongoose');
//require your schemas here
var PatientSchema = require('../Models/PatientSchema');
var BedSchema = require('../Models/BedSchema');

//Schemas
//register your model here
mongoose.model('Patient', PatientSchema);
mongoose.model('Bed', BedSchema);

mongoose.connect('mongodb://localhost:27017/PCU', function (err) {
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log('DB connected');
});

module.exports = mongoose;
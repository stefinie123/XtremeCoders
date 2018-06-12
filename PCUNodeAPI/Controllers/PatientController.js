var mongoose = require('../DBConfig/db.config');
var PatientSchema = mongoose.model('Patient');

var patientController = function () {
    this.add = function (patientInstance) {
        return new Promise(function (resolve, reject){
            var patient = new PatientSchema({
                name: patientInstance.name,
                age: patientInstance.age,
                issue: patientInstance.issue,
                priorityLevel:patientInstance.priorityLevel,
                admittedDate: new Date()
            });
            patient.save().then(function() {
                resolve({status: 201, message: 'New patient added'});
            }).catch(function (reason) {
                reject({status: 500, message:'Error occured'+ reason});
            });
        });
    }
    
    this.getPatients = function () {
        return new Promise(function (resolve, reject) {
            PatientSchema.find().exec().then(function (patientData) {
                resolve({status: 200, data: patientData});
            }).catch(function (reason) {
                reject({status: 500, message:'Error occured'+ reason});
            });
        });
    }

    this.getSingle = function (id) {
        return new Promise(function (resolve, reject) {
            PatientSchema.find({_id: id}).exec().then(function (patient) {
                resolve({status: 200, data: patient});
            }).catch(function (reason) {
                reject({status: 500, message:'Error occured'+ reason});
            });
        });
    }
    
    this.getByIssue = function (keyIssue) {
        return new Promise(function (resolve, reject) {
            PatientSchema.find({issue: keyIssue}).exec().then(function (patientData) {
                resolve({status: 200, data: patientData});
            }).catch(function (reason) {
                reject({status: 500, message:'Error occured'+ reason});
            });
        })
    }

    this.updatePatient = function (id, patientDetails) {
        return new Promise(function (resolve, reject) {
            PatientSchema.update({_id: id}, patientDetails).then(function () {
                resolve({status: 200, message: 'Patient details updated'});
            }).catch(function (reason) {
                reject({status: 500, message:'Error occured'+ reason});
            });
        });
    }

    this.deletePatient = function (id) {
        return new Promise(function (resolve, reject) {
            PatientSchema.remove({_id: id}).then(function () {
                resolve({status: 200, message: 'Patient deleted'});
            }).catch(function (reason) {
                reject({status: 500, message:'Error occured'+ reason});
            });
        })
    }
}

module.exports = new patientController();
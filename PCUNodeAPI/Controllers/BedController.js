var mongoose = require('../DBConfig/db.config');
var BedSchema = mongoose.model('Bed');

var bedController = function () {
    this.addBed = function () {
        return new Promise(function (resolve, reject) {
            var bed = new BedSchema({
                availability: true
            });
            bed.save().then(function () {
                resolve({status: 201, message: "Bed added"});
            }).catch(function (reason) {
                reject({status: 500, message: "Error "+reason});
            });
        });
    }

    this.getAllBeds = function () {
        return new Promise(function (resolve, reject) {
            BedSchema.find().exec().then(function (data) {
                resolve({status: 200, data: data});
            }).catch(function (reason) {
                reject({status: 500, message: "Error "+reason});
            });
        });
    }

    this.getByBedNo = function (bedNo) {
        return new Promise(function (resolve, reject) {
            BedSchema.find({bedNo: bedNo}).exec().then(function (data) {
                resolve({status: 200, data: data});
            }).catch(function (reason) {
                reject({status: 500, message: "Error "+reason});
            });
        });
    }

    this.getByPatient = function (patientId) {
        return new Promise(function (resolve, reject) {
            BedSchema.find({patientId:patientId}).exec().then(function (data) {
                resolve({status: 200, data: data});
            }).catch(function (reason) {
                reject({status: 500, message: "Error "+reason});
            });
        });
    }

    this.allocateBed = function (bedNo,bedInstance) {
        return new Promise(function (resolve, reject) {
            BedSchema.update({bedNo: bedNo}, bedInstance).then(function () {
                resolve({status: 200, message: "Bed allocated"});
            }).catch(function (reason) {
                reject({status: 500, message: "Error "+reason});
            });
        });
    }
}

module.exports = new bedController();
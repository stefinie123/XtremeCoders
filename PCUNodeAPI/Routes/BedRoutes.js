var express = require('express');
var router = express.Router();
var controller = require('../Controllers/BedController');

router.post('/', function (req, res) {
    controller.addBed().then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(500).send(err.message);
    });
});

router.get('/', function (req, res) {
    if(req.query.patientId){
        controller.getByPatient(req.query.patientId).then(function (data) {
            res.status(data.status).send(data.data);
        }).catch(function (err) {
            res.status(500).send(err.message);
        })
    }
    else{
        controller.getAllBeds().then(function (data) {
            res.status(data.status).send(data.data);
        }).catch(function (err) {
            res.status(500).send(err.message);
        });
    }

});

router.get('/:bedNo', function (req, res) {
    controller.getByBedNo(req.params.bedNo).then(function (data) {
        res.status(data.status).send(data.data);
    }).catch(function (err) {
        res.status(500).send(err.message);
    });
});

router.put('/', function (req,res) {
    controller.allocateBed(req.params.bedNo, req.body).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(500).send(err.message);
    });
});


module.exports = router;


var express = require('express');
var router = express.Router();
var controller = require('../Controllers/PatientController');

router.post('/', function (req, res) {
    console.log("aaaa");
    controller.add(req.body).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(500).send(err.message);
    });
});

router.get('/', function (req, res) {
    if(req.query.issue){
        controller.getByIssue(req.query.issue).then(function (data) {
            res.status(data.status).send(data.data);
        }).catch(function (err) {
            res.status(500).send(err.message);
        });
    }
    else{
        controller.getPatients().then(function (data) {
            res.status(data.status).send(data.data);
        }).catch(function (err) {
            res.status(500).send(err.message);
        });
    }

});

router.get('/:id', function (req, res) {
    controller.getSingle(req.params.id).then(function (data) {
        res.status(data.status).send(data.data);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

router.put('/:id', function (req, res) {
    controller.updatePatient(req.params.id, req.body).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

router.delete('/:id', function (req, res) {
    controller.deletePatient(req.params.id).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

module.exports = router;
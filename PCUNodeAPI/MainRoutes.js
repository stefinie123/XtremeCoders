const express = require('express');
var Routes = express.Router();
var patientRoutes = require('./Routes/patientRoutes');
var bedRoutes = require('./Routes/BedRoutes');

Routes.use('/patient/',patientRoutes);
Routes.use('/bed/', bedRoutes);
module.exports = Routes;
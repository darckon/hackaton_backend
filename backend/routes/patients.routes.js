const express = require('express');
const router  = express.Router();

const patient = require('../controllers/patient.controllers');

//Pacientes
router.post('/', patient.createPatient);
router.put('/', patient.updatePatient);
router.get('/:id', patient.getPatient);
router.get('/', patient.getPatients);

module.exports = router;
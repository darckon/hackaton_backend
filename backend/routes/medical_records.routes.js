const express = require('express');
const router  = express.Router();

const medical_records = require('../controllers/medical_records.controllers');

//Pacientes
router.post('/', medical_records.createMR);
router.put('/', medical_records.updateMR);
router.get('/:id', medical_records.getMR);
router.get('/', medical_records.getMRS);
router.get('/filters/:data', medical_records.getMRSFilters);


module.exports = router;
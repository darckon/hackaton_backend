const express = require('express');
const router  = express.Router();

const states = require('../controllers/states.controllers');

//Estados
router.get('/', states.getStates);

module.exports = router;
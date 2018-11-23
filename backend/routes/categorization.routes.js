const express = require('express');
const router  = express.Router();

const categorization = require('../controllers/categorization.controllers');

//Estados
router.get('/', categorization.getCategorizations);

module.exports = router;
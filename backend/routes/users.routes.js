const express = require('express');
const router  = express.Router();

const user = require('../controllers/users.controllers');

//Usuarios
router.post('/', user.createUser);
router.put('/', user.updateUser);
router.delete('/:id', user.deleteUser);
router.get('/:id', user.loginRequired, user.getUser);
router.get('/', user.getUsers);
router.post('/auth/sign_in', user.sign_in);

module.exports = router;
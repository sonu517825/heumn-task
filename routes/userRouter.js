const express = require('express');
const router = express.Router();
const userController = require("../controller/userController");
const userValidator = require('../validator/userValidator')
const { authentication } = require('../middleware/authentication')

// Register
router.post('/register', userValidator['/register'], userController.userRegister);

// Login
router.post('/login', userValidator['/login'], userController.userLogin);

// Get User Details 
router.get('/profile', authentication, userController.userProfile);

module.exports = router;

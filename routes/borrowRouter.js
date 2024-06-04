const express = require('express');
const router = express.Router();
const borrowController = require("../controller/borrowController");
const { authentication } = require('../middleware/authentication')
const { isMember } = require('../middleware/authorization')

// Borrow Book
router.get('/book/:id', [authentication, isMember], borrowController.borrowBook);

// Return Book
router.get('/book/:id/return', [authentication, isMember], borrowController.returnBook);

// Borrow History
router.get('/history', [authentication, isMember], borrowController.borrowHistory);

module.exports = router;

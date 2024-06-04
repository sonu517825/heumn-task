const express = require('express');
const router = express.Router();
const reportController = require("../controller/reportController");
const { authentication } = require('../middleware/authentication')

// Most Borrowed Book
router.get('/most-borrowed-book', authentication, reportController.mostBorrowedBook);

// Active Members
router.get('/active-members', authentication, reportController.activeMembers);

// Books Availability
router.get('/books-availability', authentication, reportController.booksAvailability);

module.exports = router;

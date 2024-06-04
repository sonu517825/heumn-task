const express = require('express');
const router = express.Router();
const bookController = require("../controller/bookController");
const bookValidator = require('../validator/bookValidator')
const { authentication } = require('../middleware/authentication')
const { isAdmin } = require('../middleware/authorization')

// Add Book
router.post('/', [authentication, isAdmin, bookValidator['/']], bookController.addBook);

// Update Book
router.put('/:id', [authentication, isAdmin, bookValidator['/:id']], bookController.updateBook);

// Delete Book
router.delete('/:id', [authentication, isAdmin], bookController.deleteBook);

// List Books
router.get('/', [authentication, bookValidator['/list']], bookController.listBook);

module.exports = router;

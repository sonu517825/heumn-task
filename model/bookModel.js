const { HttpError } = require('../error/httpError')
const BookSchema = require('../schemas/book')
const security = require('../security/security')
const ObjectId = require('mongoose').Types.ObjectId;

class SetUpBookModel {

  async addBook(body = {}, user = {}) {
    try {

      const { title, author, isbn, publication_date, genre, copies } = body;

      if (!title || !author || !isbn || !publication_date || !genre || !copies) {
        throw new HttpError(` 'title' or 'author' or 'isbn' or 'publication_date' or 'genre' or 'copies' can not be blank`, 400);
      }

      const newBook = new BookSchema();
      newBook.title = title
      newBook.author = author
      newBook.isbn = isbn
      newBook.publication_date = publication_date
      newBook.genre = genre
      newBook.copies = copies
      await newBook.save();

      return 'Congratulation! You have added a new book.'

    } catch (error) {
      throw new HttpError(
        error.message || "Technical error...",
        error.statusCode || 500,
        error.errorCode || 500
      );
    }
  }

  async updateBook(body = {}, params = {}, user = {}) {
    try {

      const book_id = params?.id;
      if (!ObjectId.isValid(book_id)) {
        throw new HttpError(`Book not found with this id ${book_id}`, 404);
      }

      const { title, author, isbn, publication_date, genre, copies } = body;

      const updateBody = {}
      updateBody.title = title
      updateBody.author = author
      updateBody.isbn = isbn
      updateBody.publication_date = publication_date
      updateBody.genre = genre
      updateBody.copies = copies

      const book = await BookSchema.findByIdAndUpdate(book_id, updateBody, { new: true });

      if (!book) {
        throw new HttpError(`Book not found with this id ${book_id}`, 404);
      }

      return `Congratulation! You have updated the book ${book_id}.`

    } catch (error) {
      throw new HttpError(
        error.message || "Technical error...",
        error.statusCode || 500,
        error.errorCode || 500
      );
    }
  }

  async deleteBook(params = {}, user = {}) {
    try {

      const book_id = params?.id;
      if (!ObjectId.isValid(book_id)) {
        throw new HttpError(`Book not found with this id ${book_id}`, 404);
      }

      await BookSchema.findByIdAndDelete(book_id);
      return `Congratulation! You have deleted the book ${book_id}.`

    } catch (error) {
      throw new HttpError(
        error.message || "Technical error...",
        error.statusCode || 500,
        error.errorCode || 500
      );
    }
  }

  async listBook(query = {}, user = {}) {
    try {

      const { title, author, isbn, genre, page = 1, limit = 10 } = query;

      const filter = {}

      if (title) {
        filter.title = { $regex: title, $options: "i" };
      }

      if (author) {
        filter.author = { $regex: author, $options: "i" };
      }

      if (isbn) {
        filter.isbn = isbn;
      }

      if (genre) {
        filter.genre = { $regex: genre, $options: "i" };
      }

      const project = { __v: 0 }

      const books = await BookSchema.find(filter, project).skip((page - 1) * limit).limit(Number(limit));

      return books

    } catch (error) {
      throw new HttpError(
        error.message || "Technical error...",
        error.statusCode || 500,
        error.errorCode || 500
      );
    }
  }

}

module.exports = new SetUpBookModel();

const { HttpError } = require('../error/httpError')
const BookSchema = require('../schemas/book')
const BorrowSchema = require('../schemas/borrow')
const security = require('../security/security')
const ObjectId = require('mongoose').Types.ObjectId;


class SetUpBorrowModel {

  async borrowBook(params = {}, user = {}) {
    try {

      const book_id = params?.id;
      if (!ObjectId.isValid(book_id)) {
        throw new HttpError(`Book not found with this id ${book_id}`, 404);
      }

      const book = await BookSchema.findById(book_id);
      if (!book || book.copies < 1) {
        throw new HttpError(`Book not available with this id ${book_id}`, 404);
      }

      const newBorrow = new BorrowSchema();
      newBorrow.book_id = book_id
      newBorrow.user_id = user._id
      newBorrow.borrow_date = new Date()
      await newBorrow.save();

      await BookSchema.findByIdAndUpdate(book_id, { $inc: { copies: -1 } }, { new: true });

      return `Congratulation! You have borrowed a book ${book_id}`

    } catch (error) {
      throw new HttpError(
        error.message || "Technical error...",
        error.statusCode || 500,
        error.errorCode || 500
      );
    }
  }

  async returnBook(params = {}, user = {}) {
    try {

      const book_id = params?.id;
      if (!ObjectId.isValid(book_id)) {
        throw new HttpError(`No borrowed book found with this id ${book_id}`, 404);
      }

      const borrow = await BorrowSchema.findOne({
        book_id,
        user_id: user._id,
        return_date: { $exists: false }
      });

      if (!borrow || borrow.return_date) {
        throw new HttpError(`Invalid borrow record with this id ${book_id}`, 400);
      }

      await BorrowSchema.findOneAndUpdate({
        book_id,
        user_id: user._id,
        return_date: { $exists: false }
      }, {
        $set: {
          return_date: new Date()
        }
      }, {
        new: true
      });

      await BookSchema.findByIdAndUpdate(borrow.book_id, { $inc: { copies: 1 } }, { new: true });

      return `Congratulation! You have successfully returned the book`

    } catch (error) {
      throw new HttpError(
        error.message || "Technical error...",
        error.statusCode || 500,
        error.errorCode || 500
      );
    }
  }

  async borrowHistory(user = {}) {
    try {

      const borrows = await BorrowSchema.aggregate([
        {
          $match: {
            user_id: new ObjectId(user._id),
          }
        },
        {
          $lookup: {
            from: 'books',
            localField: 'book_id',
            foreignField: '_id',
            as: 'book'
          }
        },
        {
          $unwind: '$book',
        },
        {
          $project: {
            __v: 0,
            "book.__v": 0
          }
        }
      ])

      return borrows

    } catch (error) {
      throw new HttpError(
        error.message || "Technical error...",
        error.statusCode || 500,
        error.errorCode || 500
      );
    }
  }

}

module.exports = new SetUpBorrowModel();

const { HttpError } = require('../error/httpError')
const BookSchema = require('../schemas/book')
const BorrowSchema = require('../schemas/borrow')
const UserSchema = require('../schemas/user')
const security = require('../security/security')
const ObjectId = require('mongoose').Types.ObjectId;


class SetUpReportModel {

  async mostBorrowedBook(user = {}) {
    try {

      const books = await BorrowSchema.aggregate([
        {
          $group: {
            _id: "$book_id",
            total_borrowed_times: { $sum: 1 },
          }
        },
        {
          $sort: {
            total_borrowed_times: -1,
          }
        },
        {
          $lookup: {
            from: 'books',
            localField: '_id',
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
            _id: 0,
            "book.__v": 0
          }
        },
      ])

      return books

    } catch (error) {
      throw new HttpError(
        error.message || "Technical error...",
        error.statusCode || 500,
        error.errorCode || 500
      );
    }
  }

  async activeMembers(params = {}, user = {}) {
    try {

      const members = await BorrowSchema.aggregate([
        {
          $group: {
            _id: "$user_id",
            total_borrowed_times: { $sum: 1 },
          }
        },
        {
          $sort: {
            total_borrowed_times: -1,
          }
        },
        {
          $lookup: {
            from: 'users',
            localField: '_id',
            foreignField: '_id',
            as: 'user'
          }
        },
        {
          $unwind: '$user',
        },
        {
          $project: {
            __v: 0,
            _id: 0,
            "user.__v": 0,
            "user.password": 0
          }
        },
      ])

      return members

    } catch (error) {
      throw new HttpError(
        error.message || "Technical error...",
        error.statusCode || 500,
        error.errorCode || 500
      );
    }
  }

  async booksAvailability(user = {}) {
    try {

      const borrows = await BookSchema.aggregate([
        {
          $lookup: {
            from: 'borrows',
            localField: '_id',
            foreignField: 'book_id',
            as: 'borrow_history'
          }
        },
        {
          $addFields: {
            is_borrowed: {
              $cond: {
                if: { $gt: [{ $size: '$borrow_history' }, 0] },
                then: true,
                else: false
              }
            }
          }
        },
        {
          $match: {
            is_borrowed: true
          }
        },
      ])

      return {
        total_books: await BookSchema.countDocuments(),
        total_borrowed_books: borrows.length,
        total_available_books: await BookSchema.countDocuments({ copies: { $gt: 0 } }),
      }

    } catch (error) {
      throw new HttpError(
        error.message || "Technical error...",
        error.statusCode || 500,
        error.errorCode || 500
      );
    }
  }

}

module.exports = new SetUpReportModel();

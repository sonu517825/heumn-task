const bookModel = require("../model/bookModel");
const { check, validationResult } = require('express-validator');
const { catchAsyncError } = require("../error/httpError");

class SetUpBookController {

  // ***********************************************************************************

  addBook = catchAsyncError(async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({
        error: true,
        response_code: 400,
        response_desc: errors?.array()?.[0]?.msg
      });
    }

    const body = req?.body || {}
    const user = req?.user || {}

    const data = await bookModel.addBook(body, user);
    return res.status(201).send({
      error: false,
      response_code: 201,
      response_desc: "Success...",
      data: data,
    });
  });

  // ***********************************************************************************

  updateBook = catchAsyncError(async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({
        error: true,
        response_code: 400,
        response_desc: errors?.array()?.[0]?.msg
      });
    }

    const body = req?.body || {}
    const params = req?.params || {}
    const user = req?.user || {}

    const data = await bookModel.updateBook(body, params, user);
    return res.status(200).send({
      error: false,
      response_code: 200,
      response_desc: "Success...",
      data: data,
    });
  });

  // ***********************************************************************************

  deleteBook = catchAsyncError(async (req, res, next) => {

    const params = req?.params || {}
    const user = req?.user || {}

    const data = await bookModel.deleteBook(params, user);
    return res.status(200).send({
      error: false,
      response_code: 200,
      response_desc: "Success...",
      data: data,
    });
  });

  // ***********************************************************************************

  listBook = catchAsyncError(async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({
        error: true,
        response_code: 400,
        response_desc: errors?.array()?.[0]?.msg
      });
    }

    const user = req?.user || {}
    const query = req?.query || {}

    const data = await bookModel.listBook(query, user);
    return res.status(200).send({
      error: false,
      response_code: 200,
      response_desc: "Success...",
      data: data,
    });
  });

}

module.exports = new SetUpBookController();

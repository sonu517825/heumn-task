const borrowModel = require("../model/borrowModel");
const { catchAsyncError } = require("../error/httpError");

class SetUpBorrowController {

  // ***********************************************************************************

  borrowBook = catchAsyncError(async (req, res, next) => {

    const params = req?.params || {}
    const user = req?.user || {}

    const data = await borrowModel.borrowBook(params, user);
    return res.status(201).send({
      error: false,
      response_code: 201,
      response_desc: "Success...",
      data: data,
    });
  });

  // ***********************************************************************************

  returnBook = catchAsyncError(async (req, res, next) => {

    const params = req?.params || {}
    const user = req?.user || {}

    const data = await borrowModel.returnBook(params, user);
    return res.status(200).send({
      error: false,
      response_code: 200,
      response_desc: "Success...",
      data: data,
    });
  });

  // ***********************************************************************************

  borrowHistory = catchAsyncError(async (req, res, next) => {

    const user = req?.user || {}

    const data = await borrowModel.borrowHistory(user);
    return res.status(200).send({
      error: false,
      response_code: 200,
      response_desc: "Success...",
      data: data,
    });
  });

}

module.exports = new SetUpBorrowController();

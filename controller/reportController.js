const reportModel = require("../model/reportModel");
const { catchAsyncError } = require("../error/httpError");

class SetUpReportController {

  // ***********************************************************************************

  mostBorrowedBook = catchAsyncError(async (req, res, next) => {

    const user = req?.user || {}

    const data = await reportModel.mostBorrowedBook(user);
    return res.status(200).send({
      error: false,
      response_code: 201,
      response_desc: "Success...",
      data: data,
    });
  });

  // ***********************************************************************************

  activeMembers = catchAsyncError(async (req, res, next) => {
    const user = req?.user || {}
    const data = await reportModel.activeMembers(user);
    return res.status(200).send({
      error: false,
      response_code: 200,
      response_desc: "Success...",
      data: data,
    });
  });

  // ***********************************************************************************

  booksAvailability = catchAsyncError(async (req, res, next) => {

    const user = req?.user || {}

    const data = await reportModel.booksAvailability(user);
    return res.status(200).send({
      error: false,
      response_code: 200,
      response_desc: "Success...",
      data: data,
    });
  });

}

module.exports = new SetUpReportController();

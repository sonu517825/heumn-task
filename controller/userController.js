const userModel = require("../model/userModel");
const { check, validationResult } = require('express-validator');
const { catchAsyncError } = require("../error/httpError");

class SetUpUserController {

  // ***********************************************************************************

  userRegister = catchAsyncError(async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({
        error: true,
        response_code: 400,
        response_desc: errors?.array()?.[0]?.msg
      });
    }

    const body = req?.body || {}

    const data = await userModel.userRegister(body);
    return res.status(201).send({
      error: false,
      response_code: 201,
      response_desc: "Success...",
      data: data,
    });
  });

  // ***********************************************************************************

  userLogin = catchAsyncError(async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({
        error: true,
        response_code: 400,
        response_desc: errors?.array()?.[0]?.msg
      });
    }

    const body = req?.body || {}

    const data = await userModel.userLogin(body);
    return res.status(200).send({
      error: false,
      response_code: 200,
      response_desc: "Success...",
      data: data,
    });
  });

  // ***********************************************************************************

  userProfile = catchAsyncError(async (req, res, next) => {

    const user = req?.user || {}

    const data = await userModel.userProfile(user);
    return res.status(200).send({
      error: false,
      response_code: 200,
      response_desc: "Success...",
      data: data,
    });
  });

}

module.exports = new SetUpUserController();

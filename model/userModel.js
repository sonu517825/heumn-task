const { HttpError } = require('../error/httpError')
const UserSchema = require('../schemas/user')
const security = require('../security/security')

class SetUpUserModel {

  async userRegister(body = {}) {
    try {

      const { name, email, password } = body;

      if (!email || !name || !password) {
        throw new HttpError(` 'name' or 'email' or 'password' can not be blank`, 400);
      }

      const isEmailAlreadyRegister = await UserSchema.findOne({ email })

      if (isEmailAlreadyRegister) {
        throw new HttpError(`The given email ${email} is already registered. Try another email.`, 400);
      }

      const newUser = new UserSchema();
      newUser.name = name
      newUser.email = email
      newUser.password = security.encryptHash(password)
      await newUser.save();

      return 'Congratulation! You have registered successfully.'

    } catch (error) {
      throw new HttpError(
        error.message || "Technical error...",
        error.statusCode || 500,
        error.errorCode || 500
      );
    }
  }

  async userLogin(body = {}) {
    try {

      const { email, password } = body;

      if (!email || !password) {
        throw new HttpError(` 'email' or 'password' can not be blank`, 400);
      }

      const isEmailRegistered = await UserSchema.findOne({ email })
      const isCompared = security.compareHash(password, isEmailRegistered?.password)

      if (!isEmailRegistered || !isCompared) {
        throw new HttpError(`Invalid 'email' or 'password' `, 400);
      }

      const token = security.getToken({ _id: isEmailRegistered._id })

      return {
        token
      }

    } catch (error) {
      throw new HttpError(
        error.message || "Technical error...",
        error.statusCode || 500,
        error.errorCode || 500
      );
    }
  }

  async userProfile(user = {}) {
    try {

      return user

    } catch (error) {
      throw new HttpError(
        error.message || "Technical error...",
        error.statusCode || 500,
        error.errorCode || 500
      );
    }
  }

}

module.exports = new SetUpUserModel();

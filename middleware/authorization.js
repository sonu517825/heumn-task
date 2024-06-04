const { catchAsyncError } = require("../error/httpError");
const { HttpError } = require('../error/httpError')
const security = require('../security/security')
const UserSchema = require('../schemas/user')

const isAdmin = catchAsyncError(async (req, res, next) => {
    if (req?.user?.role !== 'Admin') {
        throw new HttpError(`Admin privilege required.`, 401);
    }
    next()
})

const isMember = catchAsyncError(async (req, res, next) => {
    if (req?.user?.role !== 'Member') {
        throw new HttpError(`Member privilege required.`, 401);
    }
    next()
})


module.exports = {
    isAdmin,
    isMember
}

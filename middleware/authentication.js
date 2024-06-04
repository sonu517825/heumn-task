const { catchAsyncError } = require("../error/httpError");
const { HttpError } = require('../error/httpError')
const security = require('../security/security')
const UserSchema = require('../schemas/user')
const ObjectId = require('mongoose').Types.ObjectId;

const authentication = catchAsyncError(async (req, res, next) => {

    const bearerToken = req.headers["authorization"];

    if (typeof bearerToken == "undefined" || !bearerToken) {
        throw new HttpError(`Authorization header can not be blank`, 400);
    }

    const token = bearerToken?.split(" ")?.[1]

    if (typeof token == "undefined" || !token) {
        throw new HttpError(`Authorization token can not be blank`, 400);
    }

    const data = await security.verifyToken(token)

    const user_id = data?._id;
    if (!ObjectId.isValid(user_id)) {
        throw new HttpError(`Invalid user`, 401);
    }

    const user = await UserSchema.findById(user_id, { password: 0, __v: 0 })

    if (!user) {
        throw new HttpError(`Invalid access`, 401);
    }

    req.user = JSON.parse(JSON.stringify(user))

    next()
})


module.exports = {
    authentication,
}

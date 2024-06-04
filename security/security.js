const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const CONFIG = require('../config/config')
const { HttpError } = require('../error/httpError')

const encryptHash = (rawPassword = "", salt = 8) => {
    return bcrypt.hashSync(rawPassword, salt)
}

const compareHash = (hashPassword = "", rawPassword = "") => {
    return bcrypt.compareSync(hashPassword, rawPassword)
}

const getToken = (payload = {}) => {
    return jwt.sign(payload, CONFIG.JWT_SECRET, { expiresIn: '1d' });
}

const verifyToken = (token = "") => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, CONFIG.JWT_SECRET, (err, decoded) => {
            if (err) {
                throw new HttpError(`Invalid token`, 401);
            }
            resolve(decoded)
        });
    })
}

module.exports = {
    encryptHash,
    compareHash,
    getToken,
    verifyToken
}

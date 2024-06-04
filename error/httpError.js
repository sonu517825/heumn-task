class HttpError extends Error {
    constructor(message, statusCode, errorCode) {
        super(message);
        this.statusCode = statusCode;
        this.errorCode = errorCode || statusCode;
    }
}

const catchAsyncError = (catchAsyncError) => (req, res, next) => {
    Promise.resolve(catchAsyncError(req, res, next)).catch((error) => {
        return res.status(error.statusCode || 500).send({
            error: true,
            response_code: error.statusCode || 500,
            response_desc: error.message || "Technical error...",
        })
    });
};

module.exports = { HttpError, catchAsyncError };
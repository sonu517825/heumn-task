/**
 * @api {post} http://127.0.0.1.:3000/api/users/register Registration
 * @apiGroup User
 * @apiBody {string} name Name of the User (Required)
 * @apiBody {string} email Email of the User (Required)
 * @apiBody {string} password Password of the User (Required)
 * @apiParamExample {json} Request-Example:
 * {
    "name":"sonu verma",
    "email":"sonu.verma123@gmail.com",
    "password":"my password"
  }
 * @apiSuccessExample Success-Response:
{
    "error": false,
    "response_code": 201,
    "response_desc": "Success...",
    "data": "Congratulation! You have registered successfully."
}
 */

/**
 * @api {post} http://127.0.0.1.:3000/api/users/login Login
 * @apiGroup User
 * @apiBody {string} email Email of the User (Required)
 * @apiBody {string} password Password of the User (Required)
 * @apiParamExample {json} Request-Example:
 * {
    "email":"sonu.verma123@gmail.com",
    "password":"my password"
  }
 * @apiSuccessExample Success-Response:
{
    "error": false,
    "response_code": 200,
    "response_desc": "Success...",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjVlZGQwYzdkNjc5NzRiOGRhZjUyY2EiLCJpYXQiOjE3MTc0OTMwMTIsImV4cCI6MTcxNzU3OTQxMn0.q-udvMuIzTwcpZklNkFLbIt11ygIV0NjVo2B9_-dWtk"
    }
}
 */

/**
 * @api {get} http://127.0.0.1.:3000/api/users/profile Profile
 * @apiGroup User
 * @apiHeader {String} Authorization Bearer token.
 * @apiSuccessExample Success-Response:
{
    "error": false,
    "response_code": 200,
    "response_desc": "Success...",
    "data": {
        "_id": "665ea41d32390e4540244df6",
        "role": "Member",
        "name": "sonu verma",
        "email": "sonu@gmail.com",
        "createdAt": "2024-06-04T05:20:29.485Z",
        "updatedAt": "2024-06-04T05:20:29.485Z"
    }
}
 */


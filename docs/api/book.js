/**
 * @api {post} http://127.0.0.1.:3000/api/books Add
 * @apiGroup Book
 * @apiHeader {String} Authorization Bearer token.
 * @apiBody {string} title Title of the Book (Required)
 * @apiBody {string} author Author of the Book (Required)
 * @apiBody {string} isbn isbn of the Book (Required)
 * @apiBody {date} publication_date Publication date of the Book (Required)
 * @apiBody {string} genre Genre of the Book (Required)
 * @apiBody {number} copies copies of the Book (Required)
 * @apiParamExample {json} Request-Example:
 * {
    "title":"my book",
    "author":"sonu verma",
    "isbn":"978-0-596-52068-7",
    "publication_date":"2024-01-23",
    "genre":"this is genre msg",
    "copies":"9"
}
 * @apiSuccessExample Success-Response:
{
    "error": false,
    "response_code": 201,
    "response_desc": "Success...",
    "data": "Congratulation! You have added a new book."
}
 */

/**
 * @api {put} http://127.0.0.1.:3000/api/books/:id Update 
 * @apiGroup Book
 * @apiHeader {String} Authorization Bearer token.
 * @apiParam {String} id Book id in param (Required)
 * @apiBody {string} title Title of the Book (Optional Required)
 * @apiBody {string} author Author of the Book (Optional Required)
 * @apiBody {string} isbn isbn of the Book (Optional Required)
 * @apiBody {date} publication_date Publication date of the Book (Optional Required)
 * @apiBody {string} genre Genre of the Book (Optional Required)
 * @apiBody {number} copies copies of the Book (Optional Required)
 * @apiParamExample {json} Request-Example:
 * {
    "title":"my new book",
    "genre":"this is genre msg",
    "copies":"9"
}
 * @apiSuccessExample Success-Response:
{
    "error": false,
    "response_code": 200,
    "response_desc": "Success...",
    "data": "Congratulation! You have updated the book 665eb3144b33c35606e56ea1."
}
 */

/**
 * @api {delete} http://127.0.0.1.:3000/api/books/:id Delete
 * @apiGroup Book
 * @apiParam {String} id Book id in param (Required)
 * @apiHeader {String} Authorization Bearer token.
 * @apiSuccessExample Success-Response:
{
    "error": false,
    "response_code": 200,
    "response_desc": "Success...",
    "data": "Congratulation! You have deleted the book 665eb3114b33c35606e56e9e."
}
 */

/**
 * @api {get} http://127.0.0.1.:3000/api/books List
 * @apiGroup Book
 * @apiHeader {String} Authorization Bearer token.
 * @apiQuery {string} title Title of the Book (Optional Required)
 * @apiQuery {string} author Author of the Book (Optional Required)
 * @apiQuery {string} isbn isbn of the Book (Optional Required)
 * @apiQuery {string} genre Genre of the Book (Optional Required)
 * @apiQuery {number} page Number of page in response (Optional Required)
 * @apiQuery {number} limit Limit of the response (Optional Required)
 * @apiSuccessExample Success-Response:
{
    "error": false,
    "response_code": 200,
    "response_desc": "Success...",
    "data": [
        {
            "_id": "665eb3144b33c35606e56ea1",
            "title": "my book",
            "author": "sonu verma",
            "isbn": "978-0-596-52068-7",
            "publication_date": "2024-01-23T00:00:00.000Z",
            "genre": "this is genre msg",
            "copies": 9,
            "createdAt": "2024-06-04T06:24:20.487Z",
            "updatedAt": "2024-06-04T09:39:40.633Z"
        },
        {
            "_id": "665eb4522b05b22544bdf01e",
            "title": "my book",
            "author": "sonu verma",
            "isbn": "978-0-596-52068-7",
            "publication_date": "2024-01-23T00:00:00.000Z",
            "genre": "this is genre msg",
            "copies": 9,
            "createdAt": "2024-06-04T06:29:38.764Z",
            "updatedAt": "2024-06-04T06:29:38.764Z"
        }
    ]
}
 */
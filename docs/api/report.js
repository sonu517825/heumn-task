/**
 * @api {get} http://127.0.0.1.:3000/api/reports/most-borrowed-book Most Borrowed Book
 * @apiGroup Report
 * @apiHeader {String} Authorization Bearer token.
 * @apiSuccessExample Success-Response:
{
    "error": false,
    "response_code": 201,
    "response_desc": "Success...",
    "data": [
        {
            "total_borrowed_times": 8,
            "book": {
                "_id": "665eb3144b33c35606e56ea1",
                "title": "my book",
                "author": "sonu verma",
                "isbn": "978-0-596-52068-7",
                "publication_date": "2024-01-23T00:00:00.000Z",
                "genre": "this is genre msg",
                "copies": 9,
                "createdAt": "2024-06-04T06:24:20.487Z",
                "updatedAt": "2024-06-04T09:39:40.633Z"
            }
        },
        {
            "total_borrowed_times": 1,
            "book": {
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
        }
    ]
}
 */

/**
 * @api {get} http://127.0.0.1.:3000/api/reports/active-members Active Members
 * @apiGroup Report
 * @apiHeader {String} Authorization Bearer token.
 * @apiSuccessExample Success-Response:
{
    "error": false,
    "response_code": 200,
    "response_desc": "Success...",
    "data": [
        {
            "total_borrowed_times": 9,
            "user": {
                "_id": "665edd0c7d67974b8daf52ca",
                "role": "Member",
                "name": "sonu verma",
                "email": "sonu1@gmail.com",
                "createdAt": "2024-06-04T09:23:24.455Z",
                "updatedAt": "2024-06-04T09:23:24.455Z"
            }
        }
    ]
}
 */

/**
 * @api {get} http://127.0.0.1.:3000/api/reports/books-availability Books Availability
 * @apiGroup Report
 * @apiHeader {String} Authorization Bearer token.
 * @apiSuccessExample Success-Response:
{
    "error": false,
    "response_code": 200,
    "response_desc": "Success...",
    "data": {
        "total_books": 2,
        "total_borrowed_books": 2,
        "total_available_books": 1
    }
}
 */


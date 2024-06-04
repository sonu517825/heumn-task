/**
 * @api {get} http://127.0.0.1.:3000/api/borrows/book/:id Borrow Book
 * @apiGroup Borrow
 * @apiHeader {String} Authorization Bearer token.
 * @apiParam {String} id Book id in param (Required)
 * @apiSuccessExample Success-Response:
{
    "error": false,
    "response_code": 201,
    "response_desc": "Success...",
    "data": "Congratulation! You have borrowed a book 665eb3144b33c35606e56ea1"
}
 */

/**
 * @api {get} http://127.0.0.1.:3000/api/borrows/book/:id/return Return Book
 * @apiGroup Borrow
 * @apiHeader {String} Authorization Bearer token.
 * @apiParam {String} id Book id in param (Required)
 * @apiSuccessExample Success-Response:
{
    "error": false,
    "response_code": 200,
    "response_desc": "Success...",
    "data": "Congratulation! You have successfully returned the book"
}
 */

/**
 * @api {get} http://127.0.0.1.:3000/api/borrows/history Borrow History
 * @apiGroup Borrow
 * @apiHeader {String} Authorization Bearer token.
 * @apiSuccessExample Success-Response:
{
    "error": false,
    "response_code": 200,
    "response_desc": "Success...",
    "data": [
        {
            "_id": "665edd48c27592d8b37e3083",
            "book_id": "665eb4522b05b22544bdf01e",
            "user_id": "665edd0c7d67974b8daf52ca",
            "borrow_date": "2024-06-04T09:24:24.629Z",
            "createdAt": "2024-06-04T09:24:24.632Z",
            "updatedAt": "2024-06-04T09:35:40.834Z",
            "return_date": "2024-06-04T09:35:40.833Z",
            "book": {
                "_id": "665eb4522b05b22544bdf01e",
                "title": "my book",
                "author": "sonu verma",
                "isbn": "978-0-596-52068-7",
                "publication_date": "2024-01-23T00:00:00.000Z",
                "genre": "this is genre msg",
                "copies": 0,
                "createdAt": "2024-06-04T06:29:38.764Z",
                "updatedAt": "2024-06-04T06:29:38.764Z"
            }
        },
        {
            "_id": "665edd62c27592d8b37e3088",
            "book_id": "665eb3144b33c35606e56ea1",
            "user_id": "665edd0c7d67974b8daf52ca",
            "borrow_date": "2024-06-04T09:24:50.429Z",
            "createdAt": "2024-06-04T09:24:50.429Z",
            "updatedAt": "2024-06-04T09:39:01.023Z",
            "return_date": "2024-06-04T09:39:01.022Z",
            "book": {
                "_id": "665eb3144b33c35606e56ea1",
                "title": "my book",
                "author": "sonu k verma",
                "isbn": "978-0-596-52068-7",
                "publication_date": "2024-01-23T00:00:00.000Z",
                "genre": "this is genre msg",
                "copies": 9,
                "createdAt": "2024-06-04T06:24:20.487Z",
                "updatedAt": "2024-06-04T12:00:39.352Z"
            }
        },
        {
            "_id": "665f019bc3350ef651cdd918",
            "book_id": "665eb3144b33c35606e56ea1",
            "user_id": "665edd0c7d67974b8daf52ca",
            "borrow_date": "2024-06-04T11:59:23.840Z",
            "createdAt": "2024-06-04T11:59:23.842Z",
            "updatedAt": "2024-06-04T12:00:39.347Z",
            "return_date": "2024-06-04T12:00:39.347Z",
            "book": {
                "_id": "665eb3144b33c35606e56ea1",
                "title": "my book",
                "author": "sonu k verma",
                "isbn": "978-0-596-52068-7",
                "publication_date": "2024-01-23T00:00:00.000Z",
                "genre": "this is genre msg",
                "copies": 9,
                "createdAt": "2024-06-04T06:24:20.487Z",
                "updatedAt": "2024-06-04T12:00:39.352Z"
            }
        }
    ]
}
 */


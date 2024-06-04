const { check, validationResult } = require('express-validator');

const setDefaults = (req, res, next) => {
    req.query.page = req.query.page || 1;
    req.query.limit = req.query.limit || 10;
    next();
};

module.exports = {
    '/': [
        check('title', 'Title is required').not().isEmpty(),
        check('author', 'Author is required').not().isEmpty(),
        check('isbn')
            .not().isEmpty().withMessage('ISBN is required')
            .isISBN().withMessage('Invalid ISBN format'),
        check('publication_date')
            .not().isEmpty().withMessage('Publication date is required')
            .isDate().withMessage('Invalid publication date format'),
        check('genre', 'Genre is required').not().isEmpty(),
        check('copies')
            .not().isEmpty().withMessage('Number of copies is required')
            .isInt({ min: 1 }).withMessage('Number of copies must be a positive integer')
    ],
    '/:id': [
        check('title').optional()
            .not().isEmpty().withMessage('Title is required'),
        check('author').optional()
            .not().isEmpty().withMessage('Author is required'),
        check('isbn').optional()
            .not().isEmpty().withMessage('ISBN is required')
            .isISBN().withMessage('Invalid ISBN format'),
        check('publication_date').optional()
            .not().isEmpty().withMessage('Publication date is required')
            .isDate().withMessage('Invalid publication date format'),
        check('genre').optional()
            .not().isEmpty().withMessage('Genre is required'),
        check('copies').optional()
            .not().isEmpty().withMessage('Number of copies is required')
            .isInt({ min: 1 }).withMessage('Number of copies must be a positive integer')
    ],
    '/list': [
        setDefaults,
        check('title').optional().not().isEmpty().withMessage('Title is required'),
        check('author').optional().not().isEmpty().withMessage('Author is required'),
        check('isbn').optional()
            .not().isEmpty().withMessage('ISBN is required')
            .isISBN().withMessage('Invalid ISBN format'),
        check('genre').optional().not().isEmpty().withMessage('Genre is required'),
        check('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
        check('limit').optional().isInt({ min: 1 }).withMessage('Limit must be a positive integer')
    ]
}
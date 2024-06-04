const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            trim: true
        },
        book_id: {
            type: Schema.Types.ObjectId,
            ref: 'Book',
            required: true,
            trim: true
        },
        borrow_date: {
            type: Date,
            required: true,
            trim: true
        },
        return_date: {
            type: Date,
            required: false,
            trim: true
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Borrow', bookSchema);

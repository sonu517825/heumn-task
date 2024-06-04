const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        author: {
            type: String,
            required: true,
            trim: true
        },
        isbn: {
            type: String,
            required: true,
            trim: true
        },
        publication_date: {
            type: Date,
            required: true,
            trim: true
        },
        genre: {
            type: String,
            required: true,
            trim: true
        },
        copies: {
            type: Number,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Book', bookSchema);

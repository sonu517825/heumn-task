const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        role: {
            type: String,
            enum: ['Admin', 'Member'],
            default: 'Member',
            required: true,
            trim: true
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', userSchema);

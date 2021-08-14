const mongoose = require('mongoose');
const {
    ObjectId
} = mongoose.Schema.Types;

const offerSchema = new mongoose.Schema({
    offerName: {
        type: String,
        required: true,
        minlength: [6, 'Offer name must be at least 6 characters long!']
    },
    country: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    days: {
        type: Number,
        required: true,
        min: [1, 'The days must be at least 1!']
    },
    transport: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: [1, 'The price must be at least 1!']
    },
    description: {
        type: String,
        required: true,
        minlength: [20, 'Description must be at least 20 characters long!']
    },
    bookedBy: [{
        type: ObjectId,
        ref: "User"
    }],
    userId: {
        type: ObjectId,
        ref: "User"
    },
});

module.exports = mongoose.model('Offer', offerSchema);
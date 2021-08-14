const mongoose = require('mongoose');
const {
    ObjectId
} = mongoose.Schema.Types;

const faqSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    userId: {
        type: ObjectId,
        ref: "User"
    },
});

module.exports = mongoose.model('Faq', faqSchema);
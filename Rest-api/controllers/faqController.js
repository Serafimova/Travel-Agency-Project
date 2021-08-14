const faqModel = require("../models/faqModel");

function getAllFaq(req, res, next) {
    faqModel.find().populate('userId')
        .then(faq => res.json(faq))
        .catch(next);
};

function createFaq(req, res, next) {
    const {
        question,
        answer
    } = req.body;
    const {
        _id: userId
    } = req.user;

    faqModel.create({
            question,
            answer,
            userId
        })
        .then(faq => res.status(200).json(faq))
        .catch(next);
}

module.exports = {
    getAllFaq,
    createFaq
}
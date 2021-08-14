const offerModel = require("../models/offerModel");
const userModel = require("../models/userModel");

function getOffers(req, res, next) {
    offerModel.find().populate('userId').populate('bookedBy')
        .then(offers => res.json(offers))
        .catch(next);
};

function getOfferById(req, res, next) {
    const {
        offerId
    } = req.params;
    offerModel.findById(offerId).populate('userId').populate('bookedBy')
        .then(offers => res.json(offers))
        .catch(next);
};

function getOffersByUserId(req, res, next) {
    const {
        userId
    } = req.user;
    offerModel.find({
            userId: userId
        })
        .then(offers => res.json(offers))
        .catch(next);
};

function createOffer(req, res, next) {
    const {
        offerName,
        country,
        imageUrl,
        days,
        transport,
        price,
        description
    } = req.body;
    const {
        _id: userId
    } = req.user;

    newOffer({
            offerName,
            country,
            imageUrl,
            days,
            transport,
            price,
            description,
            userId,
        }, userId)
        .then(offer => res.status(200).json(offer))
        .catch(next);
}

function newOffer(data, userId) {
    return offerModel.create(data)
        .then(offer => {
            return Promise.all([
                userModel.updateOne({
                    _id: userId
                }, {
                    $push: {
                        offers: offer._id
                    }
                }),
            ])
        })
}

function editOffer(req, res, next) {
    const {
        offerId
    } = req.params;
    const {
        days,
        price,
        description
    } = req.body;
    const {
        _id: userId
    } = req.user;
    offerModel.findOneAndUpdate({
            _id: offerId,
            userId
        }, {
            days: days,
            price: price,
            description: description
        }, {
            new: true
        })
        .then(updatedOffer => {
            if (updatedOffer) {
                res.status(200).json(updatedOffer);
            } else {
                res.status(401).json({
                    message: `Not allowed!`
                });
            }
        })
        .catch(next);
}

function bookCurrentOffer(req, res, next) {
    const {
        offerId
    } = req.params;
    const {
        _id: userId
    } = req.user;

    Promise.all([
            offerModel.findOneAndUpdate({
                _id: userId
            }, {
                $push: {
                    bookedBy: offerId
                }
            }),
            userModel.findOneAndUpdate({
                _id: userId
            }, {
                $push: {
                    booked: offerId
                }
            }),
        ])
        .then(updatedOffer => {
            if (updatedOffer) {
                res.status(200).json(updatedOffer);
            } else {
                res.status(401).json({
                    message: `Not allowed!`
                });
            }
        })
        .catch(next);
}

function deleteOffer(req, res, next) {
    const {
        offerId
    } = req.params;
    const {
        _id: userId
    } = req.user;

    Promise.all([
            offerModel.findOneAndDelete({
                _id: offerId,
                userId
            }),
            userModel.findOneAndUpdate({
                _id: userId
            }, {
                $pull: {
                    offers: offerId
                }
            }),
        ])
        .then(([deletedOne, _, __]) => {
            if (deletedOne) {
                res.status(200).json(deletedOne)
            } else {
                res.status(401).json({
                    message: `Not allowed!`
                });
            }
        })
        .catch(next);
}

module.exports = {
    getOffers,
    getOfferById,
    createOffer,
    editOffer,
    getOffersByUserId,
    deleteOffer,
    bookCurrentOffer
}
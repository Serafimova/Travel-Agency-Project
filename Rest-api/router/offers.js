const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const offerController = require('../controllers/offerController');

router.get('/', offerController.getOffers);
router.post('/', auth(), offerController.createOffer);
router.get('/:offerId', offerController.getOfferById); 
router.put('/:offerId', auth(), offerController.editOffer);
router.get('/', offerController.getOffersByUserId);
router.post('/:offerId/book', auth(), offerController.bookOffer);
router.delete('/:offerId', auth(), offerController.deleteOffer);

module.exports = router;
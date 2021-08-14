const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const faqController = require('../controllers/faqController');

router.get('/', faqController.getAllFaq);
router.post('/', auth(), faqController.createFaq);

module.exports = router;
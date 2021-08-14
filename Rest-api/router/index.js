const router = require('express').Router();
const users = require('./users');
const offers = require('./offers');
const faq = require('./faq');
const { authController } = require('../controllers');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.use('/users', users);
router.use('/offers', offers);
router.use('/faq', faq);

module.exports = router;
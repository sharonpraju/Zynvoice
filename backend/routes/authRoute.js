const express = require('express');
const controller = require('../controllers/authController');
const router = express.Router();

router.post('/login',controller.authLoginController);
router.post('/password-reset',controller.authPasswordResetController);
module.exports = router;
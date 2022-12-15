const express = require('express');

const router = express.Router();

const {
  signinController,
  signupController,
} = require('../controllers/userController');

router.route('/signin').post(signinController);
router.route('/signup').post(signupController);

module.exports = router;

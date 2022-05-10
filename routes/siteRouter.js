const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController.js');

router.route('/')
    .get(siteController.all)

module.exports = router;
const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController.js');

router.route('/')
    .get(authorController.all)
    .post(authorController.author_create_post)

router.route('/new')
    .get(authorController.author_create_get)

router.route('/:id')
    .get(authorController.author_detail)
    .put(authorController.author_update_put)
    .delete(authorController.author_delete)

router.route('/:id/edit')
    .get(authorController.author_update_get)

module.exports = router;
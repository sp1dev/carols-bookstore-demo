const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController.js');

router.route('/')
    .get(bookController.all)
    .post(bookController.book_create_post)
    
// Needs to come before '/:id'
router.route('/new')
    .get(bookController.book_create_get)

router.route('/:id')
    .get(bookController.book_detail)
    .put(bookController.book_update_put)
    .delete(bookController.book_delete)

router.route('/:id/edit')
    .get(bookController.book_update_get)

module.exports = router;
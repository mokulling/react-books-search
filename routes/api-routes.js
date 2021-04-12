const router = require('express').Router()
const bookController = require('../controllers/bookController')

router.route("/api/books")
    .get(bookController.getBooks)
    .post(bookController.createBooks)

router.route('/api/books/:id')
    .delete(bookController.deleteBook)
    .get(bookController.getBook)

module.exports = router

const Book = require('../models/book')

module.exports = {

  getBooks: function (req, res) {
    Book.find({})
      .then(books => { res.json(books) })
      .catch(err => res.status(500).send())

  },

 createBooks: function (req, res) {
    Book.create(req.body)
      .then(bookData => { res.json(bookData) })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })

  },


  getBook: function (req, res) {
    console.log(req.params)
    Book.findOne(req.params)
      .then(book => { res.json(book) })
      .catch(err => res.status(500).send())

  },

  deleteBook: function (req, res) {
    console.log(req.params.id)
    Book.findByIdAndDelete(req.params.id)
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  }


}
const { Book } = require('../models')

module.exports = app => {

  // Get all books
  app.get('/books', (req, res) => {
    Book.findAll() 
      .then(books => res.json(books))
      .catch(e => console.log(e))
  })

  // Get a book
  app.get('/books/$id', (req, res) => {
    Book.findOne({ _id: req.params.id })
      .then(book => res.json(book))
      .catch(e => console.log(e))
  })

  // Add a book
  app.post('/books', (req, res) => {
    Book.create(req.body)
      .then(book => res.json(book))
      .catch(e => console.log(e))
  })

  // Update a book
  app.put('/books/$id', (req, res) => {
    Book.updateOne({ _id: req.params.id }, req.body )
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  // Delete a book
  app.delete('/books/$id', (req, res) => {
    Book.deleteOne({ _id: req.params.id })
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })

}
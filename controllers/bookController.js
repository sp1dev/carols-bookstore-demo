const Book = require('../models/bookModel');

module.exports = {
    all: (request, response) => {
      Book.find({}, (error, allBooks) => {
        if(error){
          return error;
        } else {
          response.render('pages/index', { data: allBooks });
        }
      })
    },
    book_detail: (request, response) => {
        const id = request.params.id;
        Book.findOne({_id: id}, (error, foundBook) => {
          if(error) {
            return error;
          } else {
            response.render('pages/bookDetail', {book: foundBook});
          }
        })
    },
    book_create_get: (request, response) => {
        response.render('pages/addBookForm');
    },
    book_create_post: (request, response) => {
          const newBook = new Book ({
            title: request.body.title,
            author: request.body.author,
            price: request.body.price,
            numSold: request.body.numSold
          });
  
          newBook.save();

          response.redirect("/books"); 
    },
    book_update_get: (request, response) => {
        const { id } = request.params;
        Book.findOne({_id: id}, (error, foundBook) => {
          if(error) {
            return error;
          } else {
            response.render('pages/updateBookForm', { book: foundBook });
          }
        });
    },
    book_update_put: (request, response) => {
        const { id } = request.params;

        Book.findByIdAndUpdate(id, {$set: {
          title: request.body.title,
          author: request.body.author,
          price: request.body.price,
          numSold: request.body.numSold
        }}, {new: true}, error => {
          if(error) {
            return error;
          } else {
            response.redirect('/books');
          }
        })
    },
    book_delete: (request, response) => {
        const { id } = request.params;

        Book.deleteOne({_id: id}, error => {
          if(error) {
            return error;
          } else {
            response.redirect('/books')
          }
        }); 
    }
}
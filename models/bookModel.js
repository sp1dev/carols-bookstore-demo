const mongoose = require('mongoose');
const {Schema} = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: [true, 'A title is required.'],
    minlength:[1,'Minimun length for the title is 1 characters.']
  },
  author: {
    type: String,
    required: [true, 'The author\'s name is required.'],
    minlength:[5,'Minimun length for the author\'s name is 5 characters.']
  },
  price: {
    type: Number,
    required: [true, 'The price is required.'],
    min: [1, 'Minimun price is 1']
  },
  numSold: {
    type: Number,
    min: [0, 'Minimun number of copies sold is 0']
  }
});

const Book = mongoose.model('Book', bookSchema);

// Sample Entry
// const bookSample = new Book({title:'The Kite Runner', author:'Khaled Hosseini', price:15, numSold:25000});
// bookSample.save();

module.exports = Book;
const mongoose = require('mongoose');
const {Schema} = mongoose;

const authorSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'A first name is required.'],
    minlength:[1,'Minimun length for the first name is 1 characters.']
  },
  lastName: {
    type: String,
    required: [true, 'A last name is required.'],
    minlength:[1,'Minimun length for the last name is 1 characters.']
  },
  birthYear: {
    type: String,
    required: [true, 'The birth year is required.'],
    minlength:[4, 'You need the full year of birth'],
    maxlength:[4, 'You need the full year of birth'],
  },
  bio: {
    type: String,
    required: [true, 'A biography is required.'],
    minlength:[10,'Minimun length for the bio is 10 characters.']
  },
});

const Author = mongoose.model('Author', authorSchema);

// Sample Entry
// const authorSample = new Author({firstName:'Khaled', lastName: 'Hosseini',birthYear: 1965, bio: 'Khaled Hosseini is an Afghan-American novelist, physician, activist, humanitarian, and UNHCR goodwill ambassador.'});
// authorSample.save();

module.exports = Author;
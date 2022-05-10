const { v4:uuid } = require('uuid');

module.exports = [
    {
        _id: uuid(),
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        price: 15,
        numSold: 25000
    },
    {
        _id: uuid(),
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 17,
        numSold: 10000
    },
    {
        _id: uuid(),
        title: "A Storm of Swords",
        author: "George R.R. Martin",
        price: 23,
        numSold: 30000
    },
    {
        _id: uuid(),
        title: "A Dance with Dragons",
        author: "George R.R. Martin",
        price: 25,
        numSold: 40000
    },
    {
        _id: uuid(),
        title: "The Hate U Give",
        author: "Angie Thomas",
        price: 16,
        numSold: 31000
    }
];
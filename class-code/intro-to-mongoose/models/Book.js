const mongoose = require('mongoose')

// 1. Schema: explains the structure of the document we will create

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    releaseYear: Number,
    isBestSeller: Boolean
})

// 2. model
const Book = mongoose.model('Book',bookSchema)

module.exports = Book
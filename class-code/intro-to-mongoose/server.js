// imports
const express = require("express") //importing express package
const app = express() // creates an express application
app.use(express.static('public')) // serves all static files from public folder
require('dotenv').config() // allows us to use the .env variables
const mongoose = require('mongoose')

async function connectToDB(){

    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connection to DB Successful')
    }
    catch(err){
        console.log('Error connecting to DB')
    }

}

connectToDB() // connects to our database



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


// CREATE
async function createNewBook(){

    const newBook = {
        title: 'Harry Potter 2',
        author: 'JK Rowling',
        price: 4,
        releaseYear: 2005,
        isBestSeller: true
    }
    // Model.Create(): to create a new document in DB
    await Book.create(newBook)
}

// createNewBook()


// READ
async function getAllBooks(){
    // .find(): returns all documents
    const allBooks =  await Book.find() // get all Books
    const JKBooks =  await Book.find({author: 'JK Rowling'}) // get all books where JK Rowling is the author

    const foundBook = await Book.findById('692ec8ebe922fdff79859c4f') // gets the book that matches the id
    console.log(foundBook)
}

// getAllBooks()


app.get('/books', async (req,res)=>{
    const allBooks = await Book.find()
    res.render('books.ejs',{books: allBooks})
})




// UPDATE
async function updateBook(){
     // 2 arguments
    // 1. the id of the book we want to update
    // 2. the updated value
    await Book.findByIdAndUpdate('692ec8ebe922fdff79859c4f',{title:'HARRY POTTER CHANGED!!!!!!'})
}

updateBook()




// Routes go here:












app.listen(3000,()=>{
    console.log('App is running on port 3000')
}) // app will be waiting for requests on port 3000









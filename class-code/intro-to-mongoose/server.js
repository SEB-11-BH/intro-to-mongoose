// imports
const express = require("express") //importing express package
const app = express() // creates an express application
app.use(express.static('public')) // serves all static files from public folder
require('dotenv').config() // allows us to use the .env variables
const mongoose = require('mongoose')

const Recipe = require('./Recipe')
const Book = require('./models/Book')

console.log(Recipe)
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



// CREATE
async function createNewBook(){

    const newBook = {
        title: 'Sajeda Book',
        author: 'Sajeda',
        price: 4,
        releaseYear: 2005,
        isBestSeller: true
    }
    // Model.Create(): to create a new document in DB
    const createdBook = await Book.create(newBook)
    console.log(createdBook)
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

// UPDATE
async function updateBook(){
     // 2 arguments
    // 1. the id of the book we want to update
    // 2. the updated value
    try{
        const updatedBook = await Book.findByIdAndUpdate('692ed834ab691d6dbe602c40',{title:'Abeer Book'},{new: true})
        console.log(updatedBook)

    }
    catch(error){

    }
}

updateBook()


async function deleteBook(){
    try{
        await Book.findByIdAndDelete('692ec9404e88a1e954583065')
    }
    catch(error){
        console.log('error occured ',error)
    }
}

// deleteBook()



// Routes go here:












app.listen(3000,()=>{
    console.log('App is running on port 3000')
}) // app will be waiting for requests on port 3000









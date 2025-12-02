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

// 






// Routes go here:












app.listen(3000,()=>{
    console.log('App is running on port 3000')
}) // app will be waiting for requests on port 3000









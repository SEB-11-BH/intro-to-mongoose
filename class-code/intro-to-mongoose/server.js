// imports
const express = require("express") //importing express package
const app = express() // creates an express application
app.use(express.static('public')) // serves all static files from public folder
require('dotenv').config() // allows us to use the .env variables
const mongoose = require('mongoose')

async function connectToDB(){

    try{
        await mongoose.connect('mongodb+srv://omar1:1234@cluster0.g3jfckx.mongodb.net/fruits?retryWrites=true&w=majority&appName=Cluster0')
        console.log('Connection to DB Successful')
    }
    catch(err){
        console.log('Error connecting to DB')
    }

}








// Routes go here:












app.listen(3000,()=>{
    console.log('App is running on port 3000')
}) // app will be waiting for requests on port 3000









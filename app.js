const express = require('express');
const app = express(); 
const path = require("path"); 

const dotenv = require('dotenv'); 

dotenv.config({path: './.env'});  

const PORT = 3000;

const db = require('./db'); 


// middleware to use static files 
const publicDirectory = path.join(__dirname, './public')
app.use(express.static(publicDirectory)); 


// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))


// Include routes
app.use('/', require('./routes/pages'));
app.use('/login', require('./routes/login'));
app.use('/register', require('./routes/register'))

app.listen(PORT, () => console.log('Example app is listening on port 3000.'));
const express = require('express');
const app = express(); 
const path = require("path"); 

const dotenv = require('dotenv'); 

dotenv.config({path: './.env'});  

const PORT = process.env.PORT;

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

const studentRoute = require('./routes/student/student')
const teacherRoute = require('./routes/teacher/teacher')
const employeeRoute = require('./routes/employee/employee')
const openLibraryRoute = require('./routes/openLibrary')

app.use('/', require('./routes/register'));
app.use('/home', require('./routes/pages'))
app.use('/login', require('./routes/login'));
app.use('/register', require('./routes/register'))
app.use(('/about'), require('./routes/about'))
app.use(('/contact'), require('./routes/contact'))


app.use('/student', studentRoute) 
app.use('/teacher', teacherRoute) 
app.use('/employee', employeeRoute) 
app.use('/books', openLibraryRoute); 

app.listen(PORT, () => console.log('Example app is listening on port 3000.'));
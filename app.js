const express = require('express');
const app = express(); 
const path = require("path"); 
const mysql = require('mysql2'); // Import the mysql library
const dotenv = require('dotenv'); 

dotenv.config({path: './.env'});  

const PORT = 3000;

// Create a MySQL connection pool
const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});



connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

const publicDirectory = path.join(__dirname, './public')
app.use(express.static(publicDirectory)); 

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => console.log('Example app is listening on port 3000.'));
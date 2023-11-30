const express = require('express');

const app = express();

const mysql = require('mysql2'); // Import the mysql library

const PORT = 3000;

// Create a MySQL connection pool
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hla1929@mysql',
  database: 'schoolmanagement'
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(PORT, () => console.log('Example app is listening on port 3000.'));
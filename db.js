const mysql = require('mysql2'); // Import the mysql library

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


  module.exports = connection;
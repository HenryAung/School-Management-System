const db = require('../db'); 
const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcryptjs'); 

exports.register_get = (req, res) => { 
    res.render('register', {
        message: ''
    })
  }
  
exports.register_post =   (req, res) => { 
    
    const { username, email, password, passwordConfirm }  = req.body; 

    
    // Check if the email is already taken
    db.query('SELECT * FROM student WHERE email = ?', [email] , async (error, results) => { 
        if (error) {
            console.error('Error during registration:', error);
            throw error 
          } 
        else if (results.length > 0) {
            res.render('register', { message: 'Email is already taken' });
          }
        else if (password != passwordConfirm) {
          res.render('register', { message: 'passwords do not match' });
        } 
        else { 
            res.render('index')
        }

        let hashedPassword = await bcrypt.hash(password, 8); 
        console.log(hashedPassword); 

    })
  }
const db = require('../db'); 
const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcryptjs'); 
const { name } = require('ejs');

exports.register_get = (req, res) => { 
    res.render('register', {
        message: ''
    })
  }
  
exports.register_post =   (req, res) => { 
    
    const { email, password, passwordConfirm }  = req.body; 

    
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
      

        let hashedPassword = await bcrypt.hash(password, 8); 
        console.log(hashedPassword); 

        db.query('INSERT INTO student SET ?', {email : email, password : hashedPassword } , (error , result) => { 
          if (error) { 
            console.log(error)
          } 
          else { 
            console.log(result); 
            return res.render('register', {message : 'user registered'})
          }
        }
        )
    })
  }
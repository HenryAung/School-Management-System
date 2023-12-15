const db = require('../../db'); 
const userModel = require('../../model/usermodel')
const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcryptjs'); 
const { name } = require('ejs');
const { check, validationResult } = require('express-validator');



exports.register_get = (req, res) => { 
    res.render('auth/register', {
        message: '',
        errors : ""
    })
  }
  
 
exports.register_post =  async (req, res) => { 
    
    const { email, password, passwordConfirm, userRole }  = req.body; 

    const result = validationResult(req);

    if (result.length > 0) {
      console.log(result)
      res.render('auth/register', { message: '', errors : result.errors })
    } 
    else { 

    // Check if the email is already taken or pasword not match  
    try { 
      const user = await userModel.findByEmail(email);
    
      if (user.length > 0) { 
        res.render('auth/register', { 
          message: 'Email is already taken' ,
          errors : ""} 
          )
      } else if (password != passwordConfirm) { 
        res.render('auth/register', { 
          message: 'passwords do not match',
          errors : "" });
      }
    } catch (err) { 
      console.log(err)
    }

    const errors = validationResult(req);
    if (errors) {
      console.log(errors)
      res.render('auth/register', { message: 'passwords do not match', errors : {errors}})
    }
  
    // hashing password with bcrypt 
        let hashedPassword = await bcrypt.hash(password, 8); 
        console.log(hashedPassword); 

        // inserting user into database 
        db.query('INSERT INTO users SET ?', {username : email, user_password : hashedPassword, user_role : userRole } , (error , result) => { 
          if (error) { 
            console.log(error)
          } 
          else { 
            console.log(result); 
            return res.render('auth/register', {message : 'user registered', errors : ''})
          }
        }
        )
    }
  
    }

  
    // hashing password with bcrypt 
      
    }

    exports.formValidation = [
      check('email').isEmail().withMessage('Invalid email address').trim().escape().normalizeEmail(),

      check('password').isLength({ min: 8 })
      .withMessage('Password Must Be at Least 8 Characters')
      .matches('[0-9]').withMessage('Password Must Contain a Number')
      .matches('[A-Z]').withMessage('Password Must Contain an Uppercase Letter').trim().escape(),

      check('passwordConfirm')
          .notEmpty().withMessage('Confirm password cannot be empty')
        
    ]
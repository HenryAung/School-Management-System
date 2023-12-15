const bcrypt = require('bcryptjs'); 
const userModel = require('../../model/usermodel')

exports.login_get = (req, res) => { 
    res.render('auth/login', {message : ""})
  }
  
exports.login_post = async (req, res) => { 
  const { email, password}  = req.body; 

  // Check if the email is already taken or pasword not match  
  try { 
    const user = await userModel.findByEmail(email);
  
    if (user.length < 1) { 
      res.render('auth/login', { 
        message: 'Mail not found, user does not exist' ,
        } 
        )
    }
    bcrypt.compare (password, user[0].user_password, (error, result) => { 
      if (error) { 
        console.log(error)
      }
      if (result) { 
        res.redirect('/' )
      }
      else { 
        res.render('auth/login', {message : 'wrong password. try again'})
      }
    }
    
    )
  }
  catch (err) { 
    console.log(err)
  }
}
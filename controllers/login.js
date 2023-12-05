exports.login_get = (req, res) => { 
    res.render('login')
  }
  
exports.login_post = (req, res) => { 
    res.send('user logged in '); 
    console.log(req.body); 
  }
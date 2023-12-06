exports.studentlist_get = (req, res) => { 
    res.render('students/studentlist')
  }
  
exports.studentlist_post = (req, res) => { 
    res.send(' student table will be shown here'); 
    console.log(req.body); 
  }

  exports.add_student_get = (req, res) => { 
    res.render('students/studentform')
  }
  
exports.add_student_post = (req, res) => { 
    res.send(' student information is added'); 
    console.log(req.body); 
  }
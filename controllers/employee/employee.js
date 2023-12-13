exports.employeelist_get = (req, res) => { 
    res.render('employee/employeelist')
  }
  
exports.employeelist_post = (req, res) => { 
    res.send(' employee table will be shown here'); 
    console.log(req.body); 
  }

  exports.add_employee_get = (req, res) => { 
    res.render('employee/employeeform')
  }
  
exports.add_employee_post = (req, res) => { 
    res.send(' employee information is added'); 
    console.log(req.body); 
  }
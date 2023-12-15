const employeeModel = require('../../model/employeemodel')


exports.employeelist_get = async (req, res) => { 
  
    try {
      const employee = await employeeModel.getEmployee();
      
      res.render('employee/employeelist', {employee : employee})
    } catch (error) {
      console.error('Error:', error);
    }

  }
  
exports.employeelist_post = async (req, res) => { 
    const firstname  = req.body.firstname;
    const lastname = req.body.lastname; 
    const email = req.body.email 
    const values = [firstname, lastname, email];
    
    try { 
      const employee = await employeeModel.findEmployee(values); 
      
      res.render('employee/employeelist', {employee : employee})
    } catch (err) { 
      console.error('Error', err); 
    }
}

  exports.add_employee_get= (req, res) => { 
    res.render('employee/employeeform', {message : ''})
  }
  
exports.add_employee_post = async (req, res) => { 
    const { firstName, lastName, gender, email, dateOfBirth, address, phoneNumber } = req.body;

    const values = [firstName, lastName, gender, email, dateOfBirth, address, phoneNumber];

    try { 
      const employee = await employeeModel.addEmployee(values); 
      
      res.render('employee/employeeform', {message : 'New employee has been added!!'})
    } catch (err) { 
      console.error('Error', err); 
    }
}
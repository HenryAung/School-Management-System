const db = require('../db'); 


 function getEmployee() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM schoolmanagement.employee', [], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}


function findEmployee(values) { 
  return new Promise ((resolve, reject) => { 
      
      const sql = "SELECT * FROM schoolmanagement.employee WHERE emp_firstname =? OR emp_lastname = ? OR emp_email = ?";
      
      db.query(sql, values , (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
  })
}

function addEmployee(values ) { 
  return new Promise ((resolve, reject) => { 
      const sql = 'INSERT INTO employee (emp_firstname, emp_lastname, gender, emp_email, date_of_birth, address, phone_number) VALUES (?, ?, ?, ?, ?, ?, ?)';
     
      db.query(sql, values , (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      })
}

module.exports = {
  getEmployee, 
  findEmployee,
  addEmployee
};
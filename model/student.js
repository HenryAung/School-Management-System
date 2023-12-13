const db = require('../db'); 


 function getStudents() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM schoolmanagement.students', [], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

function findStudents(values) { 
    return new Promise ((resolve, reject) => { 
        
        const sql = "SELECT * FROM schoolmanagement.students WHERE firstname =? OR lastname = ? OR email = ?";
        
        db.query(sql, values , (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          });
    })
}

function addStudent(values ) { 
    return new Promise ((resolve, reject) => { 
        const sql = 'INSERT INTO students (firstname, lastname, gender, email, date_of_birth, address, phone_number) VALUES (?, ?, ?, ?, ?, ?, ?)';
       
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
  getStudents,
  findStudents,
  addStudent,
};
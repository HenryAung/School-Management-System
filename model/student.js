const db = require('../db'); 


 function getAllStudents() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM schoolmanagement.Students', [], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

function getStudentByID(studentID) { 
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM schoolmanagement.Students WHERE StudentID= ?', [studentID], (error, result) => {
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
        
        const sql = "SELECT * FROM schoolmanagement.Students WHERE firstname =? OR lastname = ? OR student_email = ?";
        
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
        const sql = 'INSERT INTO schoolmanagement.Students (firstname, lastname, gender, student_email, date_of_birth, address, phone_number) VALUES (?, ?, ?, ?, ?, ?, ?)';
       
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
  getAllStudents,
  findStudents,
  addStudent,
  getStudentByID,
};
const db = require('../db'); 


 function getAllTeachers() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM schoolmanagement.Teachers', [], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

function getTeacherByID(teacherID) { 
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM schoolmanagement.teachers WHERE TeacherID= ?', [teacherID], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

function findTeachers(values) { 
  return new Promise ((resolve, reject) => { 
      
      const sql = "SELECT * FROM schoolmanagement.Teachers WHERE teacher_fname =? OR teacher_lname = ? OR teacher_email = ?";
      
      db.query(sql, values , (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
  })
}

function addTeacher(values ) { 
  return new Promise ((resolve, reject) => { 
      const sql = 'INSERT INTO Teachers (teacher_fname, teacher_lname, gender, teacher_email, date_of_birth, address, phone_number) VALUES (?, ?, ?, ?, ?, ?, ?)';
     
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
  getAllTeachers,
  getTeacherByID,
  findTeachers,
  addTeacher,
};
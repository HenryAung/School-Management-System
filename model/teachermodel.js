const db = require('../db'); 


 function getTeachers() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM schoolmanagement.teachers', [], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = {
  getTeachers,
};
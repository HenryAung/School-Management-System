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

module.exports = {
  getTeachers,
};
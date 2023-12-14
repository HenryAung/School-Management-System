const db = require('../../db')
const studentModel = require('../../model/student')

exports.studentlist_get = async (req, res) => {

    try {
      const students = await studentModel.getStudents();
      res.render('students/studentlist', {students : students})
    } catch (error) {
      console.error('Error:', error);
    }
     
  }
  
exports.studentlist_post = async (req, res) => { 
  const firstname  = req.body.firstname;
  const lastname = req.body.lastname; 
  const email = req.body.email 
  const values = [firstname, lastname, email];

  try { 
    const students = await studentModel.findStudents(values); 
    console.log(students)
    res.render('students/studentlist', {students : students})
  } catch (err) { 
    console.error('Error', err); 
  }
}


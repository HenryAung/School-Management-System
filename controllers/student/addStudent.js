const db = require('../../db')
const studentModel = require('../../model/student')

exports.add_student_get = (req, res) => { 
    res.render('students/studentform' , {message : ''})
  }
  
exports.add_student_post = async (req, res) => { 
  const { firstName, lastName, gender, email, dateOfBirth, address, phoneNumber } = req.body;

  const values = [firstName, lastName, gender, email, dateOfBirth, address, phoneNumber];

  try { 
    const students = await studentModel.addStudent(values); 
    console.log(students)
    res.render('students/studentform', {message : 'New student has been added!!'})
  } catch (err) { 
    console.error('Error', err); 
  }
}
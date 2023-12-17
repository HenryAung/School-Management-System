const express = require('express');
const router = express.Router();
const db = require('../db'); 
const studentModel = require('../model/student')

// Get all students
router.get('/', async (req, res) => {
    try {
      const students = await studentModel.getAllStudents();
        console.log(students)
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get student by an id
router.get('/:id', async (req, res) => {
  try {
      
      const student = await studentModel.getStudentByID([req.params.id])
      if (student.length < 1) { 
        res.send("There is no student with the given ID")
      } else { 
        res.json(student);
      }
      
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

// adding student into database 
router.post('/add_student', async (req, res) => { 
    const { firstName, lastName, gender, email, dateOfBirth, address, phoneNumber } = req.body;

    const values = [firstName, lastName, gender, email, dateOfBirth, address, phoneNumber];

    try { 
      const students = await studentModel.addStudent(values); 
      
      res.status(201).json({ message : "User Created" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
} )


//updating student data
router.post('/update/:id', async (req, res) => {
  const  student = await studentModel.getStudentByID([req.params.id])
  
  const { firstname, lastname, gender, student_email, date_of_birth, address, phone_number } = req.body;
  const values = [firstname, lastname, gender, student_email, date_of_birth, address, phone_number, req.params.id]
  console.log(values)
  const sql = 'UPDATE schoolmanagement.students SET firstname = ?, lastname = ?, gender = ?, student_email = ?, date_of_birth = ?, address = ?, phone_number = ? WHERE StudentID = ?';

  try {
        const student = db.query(sql, values);
        const updatedStudent = await studentModel.getStudentByID([req.params.id])
        res.status(201).json( updatedStudent );
  } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
  }
});


// deleting the existing student
router.get('/delete/:id', async (req, res) => {
    
  try {
      const student = db.query('DELETE FROM students WHERE StudentID = ?', [req.params.id]);
      
      res.status(201).json({ message : "user deleted"});
  } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
  }

})

module.exports = router;
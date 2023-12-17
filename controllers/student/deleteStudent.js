const studentModel = require('../../model/student')
const db = require('../../db')

exports.deleteStudent = async (req, res) => {
    
    try {
         db.query('DELETE FROM students WHERE StudentID = ?', req.params.id);
         const students = await studentModel.getAllStudents();
        res.render('students/studentlist', { message : "Student Deleted", students : students});
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}


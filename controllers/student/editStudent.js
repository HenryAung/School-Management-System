const studentModel = require('../../model/student')
const db = require('../../db')

exports.editStudent = async (req, res) => {
    try {
        const student = await studentModel.getStudentByID([req.params.id])
        // console.log(student); 
        if (student.length > 0) {
            res.render('students/editstudent', { message: "", student: student[0] });
        } else {
            res.send('Student not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}


exports.updateStudent =  async (req, res) => {
    const  student = await studentModel.getStudentByID([req.params.id])
    
    const { firstname, lastname, gender, student_email, date_of_birth, address, phone_number } = req.body;
    const values = [firstname, lastname, gender, student_email, date_of_birth, address, phone_number, req.params.id]
    console.log(values)
    const sql = 'UPDATE schoolmanagement.students SET firstname = ?, lastname = ?, gender = ?, student_email = ?, date_of_birth = ?, address = ?, phone_number = ? WHERE StudentID = ?';

    try {
          db.query(sql, values);
          const  studentupdated = await studentModel.getStudentByID([req.params.id])
          console.log("updated student is " + studentupdated)
        res.render('students/editstudent', {message : 'Information Updated' , student : student});
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
    
}   
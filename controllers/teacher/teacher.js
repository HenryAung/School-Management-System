const teacherModel = require('../../model/teachermodel')
const db =require('../../db')


exports.add_teacher_get = (req, res) => { 
    res.render('teachers/teacherform', {message: ''})
  }
  
exports.add_teacher_post = async (req, res) => { 
    const { firstName, lastName, gender, email, dateOfBirth, address, phoneNumber } = req.body;

    const values = [firstName, lastName, gender, email, dateOfBirth, address, phoneNumber];

    try { 
      const teacher = await teacherModel.addTeacher(values); 
      // console.log(teacher)
      res.render('teachers/teacherform', {message : 'New teacher has been added!!'})
    } catch (err) { 
      console.error('Error', err); 
    }
}


exports.teacherlist_get = async (req, res) => { 
  
  try {
    const teachers = await teacherModel.getAllTeachers();
    // console.log(teachers);
    res.render('teachers/teacherlist', {teachers : teachers, message : ""})
  } catch (error) {
    console.error('Error:', error);
  }

}

exports.teacherlist_post = async (req, res) => { 
  const firstname  = req.body.firstname;
  const lastname = req.body.lastname; 
  const email = req.body.email 
  const values = [firstname, lastname, email];
  
  try { 
    const teachers = await teacherModel.findTeachers(values); 
    console.log(teachers)
    res.render('teachers/teacherlist', {teachers : teachers , message : ""})
  } catch (err) { 
    console.error('Error', err); 
  }
}


exports.editTeacher= async (req, res) => {
  try {
      const teacher = await teacherModel.getTeacherByID([req.params.id])
    
      if (teacher.length > 0) {
          res.render('teachers/editteacher', { message: "", teacher: teacher[0] });
      } else {
          res.send('Teacher not found');
      }
  } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
  }
}


exports.updateTeacher =  async (req, res) => {
  const teacher = await teacherModel.getTeacherByID([req.params.id])


  const { firstname, lastname, gender, teacher_email, date_of_birth, address, phone_number } = req.body;
  const values = [firstname, lastname, gender, teacher_email, date_of_birth, address, phone_number, req.params.id]
  console.log(values)
  const sql = 'UPDATE schoolmanagement.teachers SET teacher_fname = ?, teacher_lname = ?, gender = ?, teacher_email = ?, date_of_birth = ?, address = ?, phone_number = ? WHERE TeacherID = ?';

  try {
        db.query(sql, values);
        const  teacherUpdated = await teacherModel.getTeacherByID([req.params.id])
        // console.log("updated teacher is" + teacherUpdated)
      res.render('teachers/editteacher', {message : 'Information Updated' , teacher : teacherUpdated});
  } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
  }
  
}  

exports.deleteTeacher = async (req, res) => {
    
  try {
       db.query('DELETE FROM teachers WHERE TeacherID = ?', [req.params.id]);
       const teachers = await teacherModel.getAllTeachers(); 
      res.render('teachers/teacherlist', { message : "Teacher Deleted", teachers : teachers });
  } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
  }

}

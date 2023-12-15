const teacherModel = require('../../model/teachermodel')


exports.teacherlist_get = async (req, res) => { 
  
    try {
      const teachers = await teacherModel.getTeachers();
      console.log(teachers);
      res.render('teachers/teacherlist', {teachers : teachers})
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
      res.render('teachers/teacherlist', {teachers : teachers})
    } catch (err) { 
      console.error('Error', err); 
    }
}

  exports.add_teacher_get = (req, res) => { 
    res.render('teachers/teacherform')
  }
  
exports.add_teacher_post = async (req, res) => { 
    const { firstName, lastName, gender, email, dateOfBirth, address, phoneNumber } = req.body;

    const values = [firstName, lastName, gender, email, dateOfBirth, address, phoneNumber];

    try { 
      const teacher = await teacherModel.addTeacher(values); 
      console.log(teacher)
      res.render('teachers/teacherform', {message : 'New teacher has been added!!'})
    } catch (err) { 
      console.error('Error', err); 
    }
}
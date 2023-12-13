const teacherModel = require('../../model/teachermodel')

exports.teacherlist_get = async (req, res) => { 
  
    try {
      const teachers = await teacherModel.getTeachers();
      console.log(teachers);
      res.send(teachers)
    } catch (error) {
      console.error('Error:', error);
    }
       

  }
  
exports.teacherlist_post = (req, res) => { 
    res.send(' teacher table will be shown here'); 
    console.log(req.body); 
  }

  exports.add_teacher_get = (req, res) => { 
    res.render('teachers/teacherform')
  }
  
exports.add_teacher_post = (req, res) => { 
    res.send(' teacher information is added'); 
    console.log(req.body); 
  }
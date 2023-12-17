const express = require('express');
const router = express.Router();
const addStudentController = require('../../controllers/student/addStudent')
const studentListController = require('../../controllers/student/studentlist')
const editController = require('../../controllers/student/editStudent')
const deleteController = require('../../controllers/student/deleteStudent')

  
router.get('/add_student', addStudentController.add_student_get);
router.post('/add_student', addStudentController.add_student_post)
router.get('/student_list', studentListController.studentlist_get);
router.post('/student_list', studentListController.studentlist_post)

router.get('/edit/:id', editController.editStudent);

router.post('/update/:id', editController.updateStudent);

router.get('/delete/:id', deleteController.deleteStudent)

module.exports = router;
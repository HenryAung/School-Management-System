const express = require('express');
const router = express.Router();
const addStudentController = require('../../controllers/student/addStudent')
const studentListController = require('../../controllers/student/studentlist')

  
router.get('/add_student', addStudentController.add_student_get);
router.post('/add_student', addStudentController.add_student_post)
router.get('/student_list', studentListController.studentlist_get);
router.post('/student_list', studentListController.studentlist_post)

module.exports = router;
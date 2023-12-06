const express = require('express');
const router = express.Router();
const studentController = require('../../controllers/student/student')

  
router.get('/add_student', studentController.add_student_get);
router.post('/add_student', studentController.add_student_post)
router.get('/student_list', studentController.studentlist_get);
router.post('/student_list', studentController.studentlist_post)

module.exports = router;
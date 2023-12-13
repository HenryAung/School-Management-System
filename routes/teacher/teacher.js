const express = require('express');
const router = express.Router();
const teacherController = require('../../controllers/teacher/teacher')

  
router.get('/add_teacher', teacherController.add_teacher_get);
router.post('/add_teacher', teacherController.add_teacher_post)
router.get('/teacher_list', teacherController.teacherlist_get);
router.post('/teacher_list', teacherController.teacherlist_post)

module.exports = router;
const express = require('express');
const router = express.Router();
const employeeController = require('../../controllers/employee/employee')

  
router.get('/add_employee', employeeController.add_employee_get);
router.post('/add_employee', employeeController.add_employee_post)
router.get('/employee_list', employeeController.employeelist_get);
router.post('/employee_list', employeeController.employeelist_post)

module.exports = router;
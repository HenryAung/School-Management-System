const express = require('express');
const router = express.Router();
const authcontrollers = require('../controllers/auth/login')

  
router.get('/',  authcontrollers.login_get);
router.post('/', authcontrollers.login_post)


module.exports = router;
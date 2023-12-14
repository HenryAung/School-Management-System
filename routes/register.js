const express = require('express');
const router = express.Router();
const registerControllers = require('../controllers/auth/register')

  
router.get('/', registerControllers.register_get);

router.post('/', registerControllers.formValidation, registerControllers.register_post)

module.exports = router;

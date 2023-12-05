const express = require('express');
const router = express.Router();
const registerControllers = require('../controllers/register')

  
router.get('/', registerControllers.register_get);

router.post('/', registerControllers.register_post)

module.exports = router;

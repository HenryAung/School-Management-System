const express = require('express');
const router = express.Router();
const openLibControllers = require('../controllers/openLibrary')

  
router.get('/', openLibControllers.getISBN);
router.post('/', openLibControllers.postISBN)


module.exports = router;
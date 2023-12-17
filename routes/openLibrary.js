const express = require('express');
const router = express.Router();
const axios = require('axios')

  
router.get('/', async (req, res) => {
    try {
        const query = req.query.search;
        // console.log("my query is " + query)
        const url = `https://openlibrary.org/search.json?q=${query}`;
        const response = await axios.get(url);
        // console.log("my data is " + response.data.docs)
        res.render('openLibrary', { books: response.data.docs , error : '' });
    } catch (error) {
        console.error(error);
        res.render('openLibrary', { books: null, error: 'Error retrieving data' });
    }
});


module.exports = router;
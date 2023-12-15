

// Route to get book data by ISBN
exports.getISBN =  async (req, res) => {
    const isbn = req.query.isbn;
    if (!isbn) {
        return res.status(400).send('ISBN is required');
    }

    try {
        const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const data = await response.json();
        if (data[`ISBN:${isbn}`]) {
            res.json(data[`ISBN:${isbn}`]);
        } else {
            res.status(404).send('Book not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.postISBN = async (req, res) => {
    
}
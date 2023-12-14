 const db = require('../db')


  // Check if the email is already taken
function findByEmail(email) { 

    return new Promise ((resolve, reject) => {  
        const sql = 'SELECT * FROM users WHERE username = ?';  
       
        db.query(sql, email , (error, result) => {
            if (error) {
                reject(error);
                console.log(error)
            } else {
                resolve(result);
            }
            });
    })
}

    
 

    


module.exports = { 
    findByEmail, 
}
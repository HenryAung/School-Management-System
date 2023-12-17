const express = require('express');
const router = express.Router();
const db = require('../db'); // Adjust the path to your db connection file

// // Get all teachers
// router.get('/', async (req, res) => {
//     try {
//         const [teachers] = await db.query('SELECT * FROM schoolmanagement.Teachers');
//         console.log(teachers)
//         res.json(teachers);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server error');
//     }
// });

// // Add a new teacher
// router.post('/', async (req, res) => {
//     try {
//         const { firstName, lastName, gender, email, dateOfBirth, address, phoneNumber } = req.body;

//         const values = [firstName, lastName, gender, email, dateOfBirth, address, phoneNumber];
    
//         const [result] = await db.query('INSERT INTO schoolmanagement.Teachers (teacher_fname, teacher_lname, gender, teacher_email, date_of_birth, address, phone_number) VALUES (?, ?, ?, ?, ?, ?, ?)', values);

//         res.status(201).json({ id: result.insertId });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server error');
//     }
// });

// // Update a teacher
// router.put('/:id', async (req, res) => {
//     try {
//         const { firstName, lastName, gender, email, dateOfBirth, address, phoneNumber } = req.body;

//         const [result] = await db.query('UPDATE teachers SET teacher_fname = ?, teacher_lname = ? gender = ?, teacher_email = ? tdate_of_birth = ?, address = ? phone_number = ? TeacherIDd = ?', [firstName, lastName, gender, email, dateOfBirth, address, phoneNumber, req.params.id]);
//         res.status(200).send('Teacher updated');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server error');
//     }
// });

// // Delete a teacher
// router.delete('/:id', async (req, res) => {
//     try {
//         await db.query('DELETE FROM schoolmanagement.teachers WHERE TeacherID = ?', [req.params.id]);
//         res.status(200).send('Teacher deleted');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server error');
//     }
// });

module.exports = router;

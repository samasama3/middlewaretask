const express = require('express')
const router = express.Router()
const { getStudents,  addStudents, updateStudents, deleteStudents } = require('../controllers/studentController')

router.get('/', getStudents)
router.post('/post', addStudents)
router.put('/put', updateStudents)
router.delete('/delete', deleteStudents)

module.exports = router
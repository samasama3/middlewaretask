const {studentDB} = require('../models/studentDataBase')

const getStudents = ((req,res) => {
    res.json(studentDB)
})

const addStudents = ((req,res) =>{
    console.log(req.body);
    const {fullName,specialty} = req.body;
    if(!fullName || !specialty) {
        return res.status(400).json({error: "FULLNAME AND SPECIALTY are REQUIRED"})
    }
    const newStudent = { id: studentDB.length+1, fullName: fullName, specialty: specialty};
    studentDB.push(newStudent);
    res.status(201).json(newStudent)
})

const updateStudents = (req, res) => {
  const { id} = req.body;
  if (id === undefined) {
      return res.status(400).json({ error: "Student id is required." });
  }
  const studentIndex = studentDB.findIndex((student) => student.id == id);
  if (studentIndex === -1) {
      return res.status(404).json({ error: "Student is not found" });
  }
  studentDB[studentIndex].specialty = specialty;
  res.status(200).json(studentDB[studentIndex]);
};

const deleteStudents = (req, res) => {
  try {
    const { id } = req.body;
    if (id === undefined)
      return res.status(400).json({ error: "Student id is required" });
    const studentIndex = studentDB.findIndex((student) => student.id == id);
    if (studentIndex === -1)
      return res.status(404).json({ error: "Student is not found" });
    studentDB.splice(studentIndex, 1)
    res.status(200).json(studentDB);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "An unexpected error occurred" });
  }
};

module.exports = { getStudents, addStudents, updateStudents, deleteStudents}
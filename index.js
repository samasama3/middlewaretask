const express = require('express')
const app = express()
const cors = require('cors')
const studentRouter = require('./routes/studentRouter')

app.use(express.json())
app.use(cors())
app.use('/studentsAPI', studentRouter)





app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
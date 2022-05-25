const express = require("express")

const app = express()
const PORT = process.env.PORT || 3000
const connectDB = require('./config/db')
connectDB()

app.use(express.static('uploads'))

// setup routes
app.use('/api/files', require('./routes/files'))

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
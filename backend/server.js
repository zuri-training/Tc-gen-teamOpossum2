const express = require('express')
require('dotenv').config()
const userRoutes = require('./routes/userRoutes')
const autoGenRoute = require('./routes/autoGenRoute')
const { userVerification } = require('./controllers/autoGenController')
const connectDB = require('./config/db')


const app = express()
const PORT = process.env.PORT || 4000

// connect to database
connectDB()

// middlewares
app.use(express.json())

// logger middleware
app.use((req, res, next) => {
    console.log(req.method, 'request made')
    console.log(req.path)
    next();
})

// User Route
app.use('/user', userRoutes)

// Route to Generate Terms and Conditions, and Privacy Policy
app.use('/generate/:username', userVerification, autoGenRoute)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
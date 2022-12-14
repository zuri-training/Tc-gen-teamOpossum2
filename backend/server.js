const express = require('express')
require('dotenv').config()
const userRoutes = require('./routes/userRoutes')
const autoGenRoute = require('./routes/autoGenRoute')
const { userVerification } = require('./controllers/autoGenController')
const connectDB = require('./config/db')
const path = require('path')


const app = express()
const PORT = process.env.PORT || 4000
const projectRoot = path.join(__dirname, '..')
const frontend = path.join(projectRoot, 'frontend')

// connect to database
//connectDB()

// middlewares
app.use(express.json())

// logger middleware
app.use((req, res, next) => {
    console.log(req.method, 'request made')
    console.log(req.path)
    next();
})
//static files
app.use('/static', express.static(path.join(frontend)))

//webpages
app.get('/', (req, res) => {
    res.sendFile(path.join(frontend, 'index.html'))
})
app.get('/Dispute', (req, res) => {
    res.sendFile(path.join(frontend, 'Dispute.html'))
})
app.get('/faq', (req, res) => {
    res.sendFile(path.join(frontend, 'faq.html'))
})
app.get('/Final-Details', (req, res) => {
    res.sendFile(path.join(frontend, 'Final-Details.html'))
})
app.get('/forget-password', (req, res) => {
    res.sendFile(path.join(frontend, 'forget-password.html'))
})
app.get('/forget-password1', (req, res) => {
    res.sendFile(path.join(frontend, 'forget-password1.html'))
})
app.get('/forget-password2', (req, res) => {
    res.sendFile(path.join(frontend, 'forget-password2.html'))
})
app.get('/forget-password3', (req, res) => {
    res.sendFile(path.join(frontend, 'forget-password3.html'))
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(frontend, 'login.html'))
})
app.get('/policy', (req, res) => {
    res.sendFile(path.join(frontend, 'policy.html'))
})
app.get('/registration', (req, res) => {
    res.sendFile(path.join(frontend, 'registration.html'))
})
app.get('/T&C', (req, res) => {
    res.sendFile(path.join(frontend, 'T&C.html'))
})
app.get('/WebContent', (req, res) => {
    res.sendFile(path.join(frontend, 'WebContent.html'))
})
app.get('/Website', (req, res) => {
    res.sendFile(path.join(frontend, 'Website.html'))
})

// User Route
app.use('/user', userRoutes)

// Route to Generate Terms and Conditions, and Privacy Policy
app.use('/generate/:username', userVerification, autoGenRoute)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
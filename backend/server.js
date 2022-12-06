const express = require('express')
require('dot-env')()
const mongoose = require('mongoose')

const userRoutes = require('./routes/userRoutes')

const app = express()
const PORT = process.env.PORT || 4000

// middleware
app.use('/user', userRoutes)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

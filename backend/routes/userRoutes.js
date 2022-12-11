const express = require('express')
const { login, allUsers, signup } = require('../controllers/userController')

const router = express.Router()

router
    .get('/allUsers', allUsers)
    .post('/login', login)
    .post('/signup', signup)

module.exports = router
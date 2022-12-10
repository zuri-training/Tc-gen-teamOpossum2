const express = require('express')
const { login } = require('../controllers/userController')

const router = express.Router()

router
    .get('/allUsers',)
    .post('/login', login)
    .post('/signup',)

module.exports = router
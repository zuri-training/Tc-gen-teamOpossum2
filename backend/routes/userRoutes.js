const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log('get request made')
})

module.exports = router
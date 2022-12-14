const express = require('express')
const path = require('path')


const router = express.Router({mergeParams: true})
const projectRoot = path.join(__dirname, '..')

//Generate Terms and Conditions
router.get('tc-gen', (req, res) => {
                res.send('A form would be provided')
        })
        .post('tc-gen/', (req, res) => {
                res.send('The generated file')
        })

//Generate Privacy Policy
router.get('pp-gen', (req, res) => {
        res.send('A form would be provided')
        })
        .post('pp-gen/', (req, res) => {
        res.send('The generated file')
        })


module.exports = router

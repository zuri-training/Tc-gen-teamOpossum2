const express = require('express')
const path = require('path')
const { tcFileModification, ppFileModification } = require('../controllers/autoGenController')


const ppRouter = express.Router({mergeParams: true})
const tcRouter = express.Router({mergeParams: true})
const projectRoot = path.join(__dirname, '..')

//Generate Terms and Conditions

tcRouter.route('/tc-gen')
        .get((req, res) => {
                res.send('A form would be provided')
        })
        .post(tcFileModification, (req, res) => {
                res.status(200)
        })

//Generate Privacy Policy
ppRouter.route('/pp-gen')
        .get((req, res) => {
                res.send('A form would be provided')
        })
        .post(ppFileModification, (req, res) => {
                res.status(200)
        })


module.exports = router

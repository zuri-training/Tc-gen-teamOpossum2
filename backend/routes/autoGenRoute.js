const express = require('express')
const path = require('path')
const { tcFileModification, ppFileModification } = require('../controllers/autoGenController')


const router = express.Router({mergeParams: true})
const projectRoot = path.join(__dirname, '..')

//Generate Terms and Conditions

router.route('/tc-gen/:formDetails')
        .get(tcFileModification, (req, res) => {
                res.status(200)
        })

//Generate Privacy Policy
router.route('/pp-gen/:formDetails')
        .get(ppFileModification, (req, res) => {
                res.status(200)
        })


module.exports = router

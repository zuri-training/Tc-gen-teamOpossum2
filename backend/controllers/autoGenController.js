const users = require('../model/User')


//verification middleware
async function userVerification (req, res, next) {
    const user = await users.findOne({username: req.params.username}).exec()
    try {
        if(!user) throw new Error("User not registered or invalid details")
        next()
    } catch (error) {
        res.status(400).json({Error: error.message})
    }
}

//File modification to generate T&C and Privacy Policy for users
//...incoming

module.exports = { userVerification }

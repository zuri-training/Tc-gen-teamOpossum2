const bcrypt = require('bcrypt')
const User = require('../model/User')

// @desc Login Route
// @method POST
// @path /login
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            throw Error("All Fields must be filled")
        }
        // check/query for inputed email in the db
        const user = await User.findOne({ email })

        // if it returns false
        if (!user) {
            throw Error("Incorrect Email")
        }
        // compare hashed password and inputed password if it matches
        const match = await bcrypt.compare(password, user.password);
        // if it does not match
        if (!match) {
            throw Error("Incorrect Password")
        }
        // Response from
        res.status(200).json({ user })
    } catch (err) {
        res.json({ error: error.message })
    }

}


module.exports = {
    login
}
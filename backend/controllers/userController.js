const bcrypt = require('bcrypt')
const User = require('../model/User')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

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

        // create token
        const token = createToken(user._id)

        // Response
        res.status(200).redirect('/')
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}
// @desc Signup Route
// @method POST
// @path /signup
const signup = async (req, res) => {
    const { email, password, username } = req.body;

    try {
        // Check if inputs are valid
        if (!email || !password || !username) {
            throw Error("All Fields must be filled")
        }

        // check/query for inputed email if it exists
        const exists = await User.findOne({ email })
        // if email is already registered
        if (exists) {
            throw Error("Email already in use")
        }

        // GEnerate salt used in hashing password
        const salt = await bcrypt.genSalt(10)
        // hash the password
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save to database
        const user = await User.create({
            username: username,
            email: email,
            password: hashedPassword
        })

        // create token
        const token = createToken(user._id)

        // Response
        res.status(200).redirect('../login')
    } catch (err) {
        res.json({ error: err.message })
    }
}
// @desc Get all registered users
// @method GET
// @path /allUsers
const allUsers = async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 })
        res.status(200).json({ users })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}


module.exports = {
    login,
    signup,
    allUsers
}
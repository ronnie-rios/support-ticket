const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')

const User = require('../models/userModel')
//register a new user
//route /api/users
//public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    //valdiation
    if(!name || !email || !password) {
        res.status(400)
        throw new Error('please include all fields')
    }

    //fimd a user
    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error('user already exists')
    }
    //hash the PW
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('invalid user data')
    }
})

//login
//route /api/users/login
//public
const loginUser = asyncHandler(async (req, res) => {
    res.send('login route')
})

module.exports = {
    registerUser,
    loginUser
}
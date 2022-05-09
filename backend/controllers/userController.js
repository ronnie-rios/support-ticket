const asyncHandler = require('express-async-handler')

//register a new user
//route /api/users
//public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if(!name || !email || !password) {
        res.status(400)
        throw new Error('please include all fields')
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
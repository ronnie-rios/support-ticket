const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 8001

//connect to DB
connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'support desk api'
    })
})

const userController = require('./routes/userRoutes')
app.use('/api/users', userController)
app.use(errorHandler)

app.listen(PORT, () => console.log(`server running on ${PORT}`))
const express = require('express');
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 8001

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
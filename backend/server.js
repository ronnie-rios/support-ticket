const express = require('express');
const res = require('express/lib/response');
const dotenv = require('dotenv').config()

const PORT = process.env.PORT || 8001

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'support desk api'
    })
})

const userController = require('./routes/userRoutes')
app.use('/api/users', userController)


app.listen(PORT, () => console.log(`server running on ${PORT}`))
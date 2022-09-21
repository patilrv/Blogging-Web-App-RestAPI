const express = require('express')
const bodyParser = require('body-parser')
require('./db')();

const User = require('./routes/user-routes')
const Blog = require('./routes/blog-routes')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(express.json())

// app.use('/api/v1/register', Register)
app.use('/api/v1/blog', Blog)
app.use('/api/v1', User)


app.use((req, res) => {
    console.log(req.header);
    return res.status(404).json({
        message: "404 Bad Request Page Not Found "
    } )

})

module.exports =app
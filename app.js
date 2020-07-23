const path = require('path')
const express = require('express')
const cors = require('cors')
const bookRouter = require('./api/routes/bookRouter')

const app = express()

app.use(
    cors({
        credentials: true,
        origin: 'http://localhost:8080'
    })
)

app.use('/api/books', bookRouter)

app.use('/static', express.static(
    path.resolve(process.cwd(), 'api/staticFiles')
))

app.use(express.static(__dirname + '/app/dist'))


module.exports = app
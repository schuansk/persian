const express = require('express')
const cors = require('cors')
const db = require('./database')
const routes = require('./routes')

// APP
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// DATABASE
db.authenticate()
    .then(() => console.log('📦 Database connected...'))
    .catch(err => console.log('💀 Error: ' + err))

// ROUTES
app.use(routes)

module.exports = app
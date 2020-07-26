const express = require('express')
const db = require('./database')
const routes = require('./routes')

// APP
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// DATABASE
db.authenticate()
    .then(() => console.log('📦 Database connected...'))
    .catch(err => console.log('💀 Error: ' + err))

// ROUTES
app.use(routes)

module.exports = app
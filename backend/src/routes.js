const express = require('express')

const authMiddleware = require('./middlewares/authMiddleware')

const UserController = require('./controllers/UserController')
const AuthController = require('./controllers/AuthController')

const routes = express.Router()

routes.post('/user', UserController.store)
routes.post('/auth', AuthController.authenticate)
routes.get('/user', authMiddleware, UserController.index)

module.exports = routes
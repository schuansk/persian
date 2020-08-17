const express = require('express');

const authMiddleware = require('./middlewares/authMiddleware');

const UserController = require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');
const CustomerController = require('./controllers/CustomerContoller');
const NotepadController = require('./controllers/NotepadController');

const routes = express.Router();

routes.post(
    '/user', 
    UserController.store
);

routes.post(
    '/auth', 
    AuthController.authenticate
);

routes.get(
    '/user', 
    authMiddleware, 
    UserController.index
);

routes.post(
    '/user/:user_id/customer', 
    authMiddleware, 
    CustomerController.store
);

routes.post(
    '/user/:user_id/customer/find',
    authMiddleware,
    CustomerController.index
);

routes.post(
    '/user/customer/:customer_id/notepad',
    authMiddleware,
    NotepadController.store
);

routes.post(
    '/user/customer/:customer_id/notepad/find',
    authMiddleware,
    NotepadController.index
);

module.exports = routes;
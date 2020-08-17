const Sequelize = require('sequelize');
const dbConfig = require('../configs/database');

const User = require('../models/User');
const Customer = require('../models/Customer');
const Notepad = require('../models/Notepad');
const Note = require('../models/Note');

const connection = new Sequelize(dbConfig);

User.init(connection);
Customer.init(connection);
Notepad.init(connection);
Note.init(connection);

User.associate(connection.models);
Customer.associate(connection.models);
Notepad.associate(connection.models);
Note.associate(connection.models);

module.exports = connection;
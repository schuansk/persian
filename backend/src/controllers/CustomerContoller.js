const { Op } = require('sequelize');
const Customer = require('../models/Customer');

module.exports = {
    async store(req, res) {
        const {
            name,
            email,
            register,
            street,
            number,
            neighborhood,
            state,
            city
        } = req.body;

        const { user_id } = req.params;

        const customer = await Customer.create({
            name,
            email,
            register,
            street,
            number,
            neighborhood,
            state,
            city,
            user_id
        });

        return res.json(customer);
    },

    async index(req, res) {
        const {
            user_id
        } = req.params;

        const {
            name
        } = req.body;

        const customers = await Customer.findAll({
            where: {
                user_id,
                name: {
                    [Op.iLike]: '%' + name + '%'
                }
            }
        });

        return res.json(customers);
    }
}
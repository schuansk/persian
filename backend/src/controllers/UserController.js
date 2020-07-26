const User = require('../models/User')

module.exports = {
    index(req, res) {
        return res.json({
            userId: req.userId
        })
    },

    async store(req, res) {
        const {
            name,
            email,
            password
        } = req.body

        const userExists = await User.findOne({
            where: {
                email
            }
        })

        if(userExists) {
            return res.status(409).json({
                conflict: '🚨 User already exists'
            })
        }

        const user = await User.create({
            name,
            email,
            password
        })

        return res.json(user)
    }
}
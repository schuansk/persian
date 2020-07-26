const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    async authenticate(req, res) {
        const {
            email,
            password
        } = req.body

        const user = await User.findOne({
            where: {
                email
            }
        })

        if(!user) {
            return res.status(401).json({
                error: '✋ Unauthorized'
            })
        }

        const isValidPassword = await bcrypt.compare(password, user.password)

        if(!isValidPassword) {
            return res.status(401).json({
                error: '✋ Unauthorized'
            })
        }

        const token = jwt.sign({ id: user.id }, process.env.PRIVATEKEY, { expiresIn: '1d' })

        delete user.dataValues.password

        return res.json({
            user,
            token
        })
    }
}
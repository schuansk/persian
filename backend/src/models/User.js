const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcryptjs')

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING
        },
        {
            hooks: {
                beforeCreate: (user, options) => {
                    user.password = bcrypt.hashSync(user.password, 8)
                },
                beforeUpdate: (user, options) => {
                    user.password = bcrypt.hashSync(user.password, 8)
                }
            },
            sequelize
        })
    }
}

module.exports = User
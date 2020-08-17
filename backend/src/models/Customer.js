const { Model, DataTypes } = require('sequelize');

class Customer extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            register: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
            neighborhood: DataTypes.STRING,
            state: DataTypes.STRING,
            city: DataTypes.STRING,
            user_id: DataTypes.UUIDV4
        }, {
            sequelize,
            tableName: 'customer'
        });
    }

    static associate(models) {
        this.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user'
        });

        this.hasMany(models.Notepad, {
            foreignKey: 'customer_id',
            as: 'customer'
        })
    }
}

module.exports = Customer;
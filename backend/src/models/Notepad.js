const { Model, DataTypes } = require('sequelize');

class Notepad extends Model {
    static init(sequelize) {
        super.init({
            customer_id: DataTypes.UUIDV4,
            title: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'notepad'
        });
    }

    static associate(models) {
        this.belongsTo(models.Customer, {
            foreignKey: 'customer_id',
            as: 'customer'
        });

        this.hasMany(models.Note, {
            foreignKey: 'notepad_id',
            as: 'notepad'
        });
    }
}

module.exports = Notepad;
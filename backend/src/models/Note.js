const { Model, DataTypes } = require('sequelize');

class Note extends Model {
    static init(sequelize) {
        super.init({
           notepad_id: DataTypes.UUIDV4,
           topic: DataTypes.STRING,
           content: DataTypes.STRING 
        }, {
            sequelize,
            tableName: 'note'
        });
    }

    static associate(models) {
        this.belongsTo(models.Notepad, {
            foreignKey: 'notepad_id',
            as: 'notepad'
        });
    }
}

module.exports = Note;
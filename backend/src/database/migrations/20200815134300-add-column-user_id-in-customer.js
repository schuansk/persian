'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /// logic for transforming into the new state
    return queryInterface.addColumn(
      'customer',
      'user_id', {
        type: Sequelize.UUID,
            references: { model: 'users', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            allowNull: false
      }     
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('customer', 'user_id');
  }
};

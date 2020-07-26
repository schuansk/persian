'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(() => {
        return queryInterface.createTable('users', 
          { 
            id: {
              allowNull: false,
              primaryKey: true,        
              type: Sequelize.UUID,
              defaultValue: Sequelize.literal('uuid_generate_v4()')
              
            },
            name: {
              type: Sequelize.STRING,
              allowNull: false
            },
            email: {
              type: Sequelize.STRING,
              allowNull: false
            },
            password: {
              type: Sequelize.STRING,
              allowNull: false
            },
            created_at: {
              type: Sequelize.DATE,
              allowNull: false,
            },
            updated_at: {
              type: Sequelize.DATE,
              allowNull: false
            }
          }
        );
      })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
    await queryInterface.sequelize.query('DROP EXTENSION "uuid-ossp";')
  }
};
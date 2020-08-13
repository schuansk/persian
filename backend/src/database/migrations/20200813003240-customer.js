'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(() => {
        return queryInterface.createTable('customer', 
        { 
          id: 
            {
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
            allowNull: true
          },
          register: {
            type: Sequelize.STRING,
            allowNull: true
          },
          street: {
            type: Sequelize.STRING,
            allowNull: true
          },
          number: {
            type: Sequelize.INTEGER,
            allowNull: true
          },
          neighborhood: {
            type: Sequelize.STRING,
            allowNull: true
          },
          state: {
            type: Sequelize.STRING,
            allowNull: true
          },
          city: {
            type: Sequelize.STRING,
            allowNull: true
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
    await queryInterface.dropTable('customer');    
  }
};
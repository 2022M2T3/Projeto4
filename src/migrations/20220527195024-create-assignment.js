'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Assignments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      projectId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Projects',
          key: 'id',
          as: 'projectId',
        },
      },
      employeeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Employees',
          key: 'id',
          as: 'employeeId',
        },
      },
      workHours: {
        type: Sequelize.INTEGER,
      },
      month: {
        type: Sequelize.INTEGER,
      },
      year: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Assignments');
  },
};

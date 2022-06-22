'use strict';

// Arquivo de seed (para popular um banco de dados vazio) da tabela Employees

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Employees',
      [
        {
          name: 'Gerente de Projetos 1',
          email: 'gerente.1@exemplo.com',
          roleId: 1,
          departmentId: 1,
          locationId: 1,
          customWorkload: 176,
          contractedHours: 176,
          isOutsourced: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Gerente de Projetos 2',
          email: 'gerente.2@exemplo.com',
          roleId: 2,
          departmentId: 2,
          locationId: 1,
          customWorkload: 176,
          contractedHours: 176,
          isOutsourced: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Gerente de Projetos 3',
          email: 'gerente.3@exemplo.com',
          roleId: 3,
          departmentId: 3,
          locationId: 1,
          customWorkload: 176,
          contractedHours: 176,
          isOutsourced: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Gerente de Projetos 4',
          email: 'gerente.4@exemplo.com',
          roleId: 4,
          departmentId: 4,
          locationId: 1,
          customWorkload: 176,
          contractedHours: 176,
          isOutsourced: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Gerente de Projetos 5',
          email: 'gerente.5@exemplo.com',
          roleId: 5,
          departmentId: 5,
          locationId: 1,
          customWorkload: 176,
          contractedHours: 176,
          isOutsourced: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Gerente de Projetos 6',
          email: 'gerente.6@exemplo.com',
          roleId: 6,
          departmentId: 6,
          locationId: 1,
          customWorkload: 176,
          contractedHours: 176,
          isOutsourced: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Gerente de Projetos 7',
          email: 'gerente.7@exemplo.com',
          roleId: 7,
          departmentId: 7,
          locationId: 1,
          customWorkload: 176,
          contractedHours: 176,
          isOutsourced: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Gerente de Projetos 8',
          email: 'gerente.8@exemplo.com',
          roleId: 8,
          departmentId: 8,
          locationId: 1,
          customWorkload: 176,
          contractedHours: 176,
          isOutsourced: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Gerente de Projetos 9',
          email: 'gerente.9@exemplo.com',
          roleId: 9,
          departmentId: 9,
          locationId: 1,
          customWorkload: 176,
          contractedHours: 176,
          isOutsourced: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Gerente de Projetos 10',
          email: 'gerente.10@exemplo.com',
          roleId: 10,
          departmentId: 10,
          locationId: 1,
          customWorkload: 176,
          contractedHours: 176,
          isOutsourced: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Gerente de Projetos 11',
          email: 'gerente.11@exemplo.com',
          roleId: 11,
          departmentId: 11,
          locationId: 1,
          customWorkload: 176,
          contractedHours: 176,
          isOutsourced: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Gerente de Projetos 12',
          email: 'gerente.12@exemplo.com',
          roleId: 12,
          departmentId: 12,
          locationId: 1,
          customWorkload: 176,
          contractedHours: 176,
          isOutsourced: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Gerente de Projetos 13',
          email: 'gerente.13@exemplo.com',
          roleId: 13,
          departmentId: 13,
          locationId: 1,
          customWorkload: 176,
          contractedHours: 176,
          isOutsourced: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Gerente de Projetos 14',
          email: 'gerente.14@exemplo.com',
          roleId: 14,
          departmentId: 14,
          locationId: 1,
          customWorkload: 176,
          contractedHours: 176,
          isOutsourced: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Employees', null, {});
  },
};

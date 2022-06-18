'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    // Define as relações/cadinalidade entre tabelas do banco de dados
    static associate(models) {
      Project.hasMany(models.Assignment, {
        foreignKey: 'projectId',
        onDelete: 'cascade',
      });
      Project.belongsTo(models.Department, { foreignKey: 'departmentId' });
      Project.belongsTo(models.Location, { foreignKey: 'locationId' });
    }
  }
  // Inicializa um modelo espelhado na tabela do banco de dados
  Project.init(
    // Define os campos da tabela
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'O nome do projeto não pode ser vazio',
          },
          notNull: {
            msg: 'O nome do projeto não pode ser nulo',
          },
        },
      },
      startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'A data de início do projeto não pode ser vazia',
          },
          isDate: {
            msg: 'A data de início do projeto deve ser uma data válida',
          },
        },
      },
      endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'A data de término do projeto não pode ser vazia',
          },
          isDate: {
            msg: 'A data de início do projeto deve ser uma data válida',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Project',
    }
  );
  return Project;
};

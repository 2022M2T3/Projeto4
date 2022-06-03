const { Op } = require('sequelize');

const Employee = require('../models').Employee;
const Department = require('../models').Department;
const Location = require('../models').Location;
const Role = require('../models').Role;

exports.getAllEmployees = async (req, res) => {
  const { month, year, name, departmentId, locationId, isOutsourced } =
    req.query;

  const whereStatement = {};
  if (name) whereStatement.name = { [Op.like]: `%${name}%` };
  if (departmentId) whereStatement.departmentId = parseInt(departmentId);
  if (locationId) whereStatement.locationId = parseInt(locationId);
  if (isOutsourced) whereStatement.isOutsourced = !!parseInt(isOutsourced);

  const employees = await Employee.findAll({
    where: whereStatement,
    include: [{ all: true }],
  });

  const departments = await Department.findAll();
  const locations = await Location.findAll();

  res.render('pages/employee/index', {
    employees,
    departments,
    locations,
    month: parseInt(month),
    year: parseInt(year),
    name,
    departmentId,
    locationId,
    isOutsourced,
  });
};

exports.createEmployee = async (req, res) => {
  await Employee.create(req.body);
  res.send('Funcionário cadastrado com sucesso!');
};

exports.getEmployee = async (req, res) => {
  const employee = await Employee.findByPk(req.params.id, {
    include: [Department, Location, Role],
  });

  if (employee) {
    res.render('pages/employee/profile', { employee });
  } else {
    res.status(404).send('Funcionário não encontrado!');
  }
};

exports.updateEmployee = async (req, res) => {
  const employee = await Employee.findByPk(req.params.id);

  if (employee) {
    await employee.update(req.body);
    res.send('Funcionário atualizado com sucesso!');
  } else {
    res.status(404).send('Funcionário não encontrado!');
  }
};

exports.deleteEmployee = async (req, res) => {
  const employee = await Employee.findByPk(req.params.id);

  if (employee) {
    await employee.destroy();
    res.send('Funcionário excluído com sucesso!');
  } else {
    res.status(404).send('Funcionário não encontrado!');
  }
};

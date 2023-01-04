var DataTypes = require("sequelize").DataTypes;
var _horarios = require("./horarios");
var _notas = require("./notas");
var _paciente = require("./paciente");
var _profesional = require("./profesional");

function initModels(sequelize) {
  var horarios = _horarios(sequelize, DataTypes);
  var notas = _notas(sequelize, DataTypes);
  var paciente = _paciente(sequelize, DataTypes);
  var profesional = _profesional(sequelize, DataTypes);

  horarios.belongsTo(paciente, { as: "paciente_paciente", foreignKey: "paciente"});
  paciente.hasMany(horarios, { as: "horarios", foreignKey: "paciente"});
  horarios.belongsTo(profesional, { as: "profesional_profesional", foreignKey: "profesional"});
  profesional.hasMany(horarios, { as: "horarios", foreignKey: "profesional"});
  notas.belongsTo(profesional, { as: "profesional_profesional", foreignKey: "profesional"});
  profesional.hasMany(notas, { as: "nota", foreignKey: "profesional"});

  return {
    horarios,
    notas,
    paciente,
    profesional,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

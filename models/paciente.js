const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paciente', {
    paciente_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    celular: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    activo:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  }, {
    sequelize,
    tableName: 'paciente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "paciente_id" },
        ]
      },
      {
        name: "nombre",
        using: "BTREE",
        fields: [
          { name: "nombre" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('horarios', {
    turno_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    profesional: {
      type: DataTypes.STRING(30),
      allowNull: false,
      references: {
        model: 'profesional',
        key: 'usuario'
      }
    },
    paciente: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'paciente',
        key: 'nombre'
      }
    },
    hora: {
      type: DataTypes.ENUM('NINE','NINEH','TEN','TENH','ELEVEN','ELEVENH','TWELVE','TWELVEH','FOURTEEN','FOURTEENH','FIFTEEN','FIFTEENH','SIXTEEN','SIXTEENH','SEVENTEEN','SEVENTEENH'),
      allowNull: true
    },
    duracion: {
      type: DataTypes.ENUM('HALF', 'ONE', 'ONEH', 'TWO'),
      allowNull: false
    },
    fecha: {
      type: DataTypes.STRING(),
      allowNull:false
    }
  }, {
    sequelize,
    tableName: 'horarios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "turno_id" },
        ]
      },
      {
        name: "fk_horario_profesional",
        using: "BTREE",
        fields: [
          { name: "profesional" },
        ]
      },
      {
        name: "fk_horario_paciente",
        using: "BTREE",
        fields: [
          { name: "paciente" },
        ]
      },
    ]
  });
};

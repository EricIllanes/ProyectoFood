const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipes', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4 //genera automaticamente UUIDV4

    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resume: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    score: {
      type: DataTypes.INTEGER,

    },
    level: {
      type: DataTypes.INTEGER,
    },
    steps: {
      type: DataTypes.TEXT
    },
    image: {
      type: DataTypes.STRING

    },
    dishTypes: {
      type: DataTypes.STRING
    }
  });
};

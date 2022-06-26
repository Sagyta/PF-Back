const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('photo', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image:{
        type: DataTypes.STRING,
        allowNull: false,
    },    
  },
  {
    timestamps: false,
  });
};
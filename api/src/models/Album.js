const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('album', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    description:{
        type: DataTypes.STRING(255),
        allowNull: true
    },   
  },
  {
    timestamps: false,
  });
};
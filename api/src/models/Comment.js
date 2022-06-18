const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('comment', {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    newId:{
      type: DataTypes.INTEGER,
      unique: 'comment'
    },  
  },
  {
    timestamps: false,
  });
};
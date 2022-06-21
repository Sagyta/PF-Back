const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('teacher', {
    id: {
			type:DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false
		},
    teacher: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
  },
  {
    timestamps: false,
  });
};
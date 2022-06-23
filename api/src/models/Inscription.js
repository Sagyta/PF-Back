const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('inscription', {
      
    id: {
			type:DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false
		},
    starDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    }, 
    scheduleIn:{
        type: DataTypes.TIME,
        allowNull: false,
    },
  },
  {
    timestamps: false,
  });
};
const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('inscription', {
    /* starDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    }, 
    scheduleIn:{
        type: DataTypes.TIME,
        allowNull: false,
    }, */
  },
  {
    timestamps: false,
  });
};
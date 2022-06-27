const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('sport', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },    
  },
  {
    timestamps: false,
  });
};
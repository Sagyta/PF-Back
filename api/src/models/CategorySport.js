const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  
  sequelize.define('CategorySport', {
    /* name: {
      type: DataTypes.STRING,
      allowNull: false,
    }, */
    day:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    start:{
        type: DataTypes.TIME,
        allowNull: false,
    },
    finish:{
        type: DataTypes.TIME,
        allowNull: false,
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false,
    }, 
    fee:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }   
  },
  {
    timestamps: false,
  });
};
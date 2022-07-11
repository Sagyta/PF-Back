const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('review', {
    message: {
      type: DataTypes.STRING,
    }, 
    rating:{
        type: DataTypes.INTEGER,
    },   
  },
  {
    timestamps: false,
  });
};
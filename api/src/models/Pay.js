const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('pay', {
    voucher: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
  },
  {
    initialAutoIncrement:1000,
    /* timestamps: false, */
  });
};
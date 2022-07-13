const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('pay', {
    voucher: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    unit_price: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    order_status:{
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  });
};
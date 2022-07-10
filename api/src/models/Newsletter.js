const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('newsletter',{
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        code: {
			type: DataTypes.STRING,
			allowNull: false
		}
    },{
        timestamps: false
    })
}
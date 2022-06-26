const {DataTypes} = require('sequelize');

module.exports = (sequelize)=> {
    sequelize.define('calendar',{
        id: {
			type:DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        startTime: {
            type: DataTypes.STRING,
            allowNull: false
        },
        endTime:{
            type: DataTypes.STRING,
            allowNull: false
        },
        startRecur: {
            type: DataTypes.STRING,
            allowNull: false
        },
        endRecur: {
            type: DataTypes.STRING,
            allowNull: false
        },
        daysOfWeek: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}
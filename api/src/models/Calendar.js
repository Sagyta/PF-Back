const {DataTypes} = require('sequelize');

module.exports = (sequelize)=> {
    sequelize.define('calendar',{
        id: {
			type:DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
        horaInicio: {
            type: DataTypes.STRING,
            allowNull: false
        },
        horaFinalizacion:{
            type: DataTypes.STRING,
            allowNull: false
        },
        fechaInicio: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fechaActualizacion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dias: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}
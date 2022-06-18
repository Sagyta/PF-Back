const {DataTypes, } = require('sequelize');

module.exports = (sequelize)=>{
	sequelize.define('user',{
		id: {
			type:DataTypes.UUID,
			defaulValue: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false
		},
		
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		surname: {
			type: DataTypes.STRING,
			allowNull: false
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false 
		},
		numberPartner: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
		},
		dni: {
			type: DataTypes.STRING,
			allowNull: false
		},
		isOlder : {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		}
	},{
		timestamps: false
	})
}